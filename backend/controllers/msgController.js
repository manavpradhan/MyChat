import ConversationModel from "../models/conversationModel.js";
import MessageModel from "../models/msgModel.js";
import { getReceiverSocketId, io } from "../socket/socket.js";

export const sendMessage = async (req, res) => {
  try {
    const { message } = req.body;
    const { id: recieverId } = req.params;
    const senderId = req.user._id;

    let conversation = await ConversationModel.findOne({
      participants: {
        $all: [senderId, recieverId],
      },
    });

    if (!conversation) {
      conversation = await ConversationModel.create({
        participants: [senderId, recieverId],
      });
    }

    const newMessage = new MessageModel({
      senderId,
      recieverId,
      message,
    });

    if (newMessage) {
      conversation.messages.push(newMessage._id);
    }

    // await conversation.save();
    // await newMessage.save();

    //both will run in parallel
    await Promise.all([conversation.save(), newMessage.save()]);

    // SOCKET IO LOGIC for realtime chat user experience
    const receiverSocketId = getReceiverSocketId(recieverId);

    if (receiverSocketId) {
      // io.to(<socket_id>).emit() used to send events to specific client
      io.to(receiverSocketId).emit("newMessage", newMessage);
    }
    res.status(201).json(newMessage);
  } catch (err) {
    console.log("error at sending message controller: ", err.message);
    return res.status(500).json({ error: "Internal server error" });
  }
};

export const getAllMessages = async (req, res) => {
  try {
    const userId = req.user._id;
    const participantId = req.params.id;

    const conversation = await ConversationModel.findOne({
      participants: { $all: [userId, participantId] },
    }).populate("messages");

    if (!conversation) {
      return res
        .status(404)
        .json({ error: "No conversation found", erc: "NCF" });
    }

    res.status(200).json(conversation.messages);
  } catch (err) {
    console.log("error at getting message controller: ", err.message);
    return res.status(500).json({ error: "Internal server error" });
  }
};
