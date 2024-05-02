import { Conversation } from "../models/conversationModel.js";
import { Message } from "../models/messageModel.js";
import { getReceiverSocketId, io } from "../socket/socket.js";
import {geminiResponse} from "../helper/aiIntegration.js"
export const sendMessage = async (req,res) => {
    try {
        const senderId = req.id;
        const receiverId = req.params.id;
        const { message, onlineUsers } = req.body;
        console.log(onlineUsers);
        

        let gotConversation = await Conversation.findOne({
            participants:{$all : [senderId, receiverId]},
        });

        if(!gotConversation){
            gotConversation = await Conversation.create({
                participants:[senderId, receiverId]
            })
        };
        let newMessage;

        if (onlineUsers.includes(receiverId)) {
            newMessage = await Message.create({ senderId, receiverId, message });
          } else {
            const llmResponse = await geminiResponse(message);
            if (llmResponse && llmResponse.trim() !== '') {
              newMessage = await Message.create({
                senderId: null, // Set senderId to null for LLM-generated messages
                receiverId,
                message: llmResponse,
              });
            }
          }
      
          if (newMessage) {
            gotConversation.messages.push(newMessage._id);
          }
        

        await Promise.all([gotConversation.save(), newMessage?.save()]);
         
        // SOCKET IO
        const receiverSocketId = getReceiverSocketId(receiverId);
        if(receiverSocketId){
            io.to(receiverSocketId).emit("newMessage", newMessage);
        }
        return res.status(201).json({
            newMessage
        })
    } catch (error) {
        console.log(error);
        res.status(500).json({ error: "Internal server error" });
    }
}
export const getMessage = async (req,res) => {
    try {
        const receiverId = req.params.id;
        const senderId = req.id;
        const conversation = await Conversation.findOne({
            participants:{$all : [senderId, receiverId]}
        }).populate("messages"); 
        return res.status(200).json(conversation?.messages);
    } catch (error) {
        console.log(error);
        res.status(500).json({ error: "Internal server error" });
    }
}