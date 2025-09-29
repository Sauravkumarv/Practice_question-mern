const TICKET = require("../model/TicketSchema");

const newTicket=async(req,res)=>{
  try {
    const {subject,category,priority,message}=req.body;
if(!req.user)return res.status(401).json({ message: "❌ Unauthorized" });
const newTicket= await TICKET.create({
  userId:req.user.Id,
  subject,category,priority,message
})
res.status(201).json({ success: true,message: "Login successful", newTicket });
  } catch (error) {
    res.status(500).json({ message: "❌ Server error", error: error.message })
  }
}

const getTicket=async(req,res)=>{
  try {
    const tickets=await TICKET.find().populate("userId","name email")
    if (!tickets) {
      return res.status(404).json({ success: false, message: "Ticket not found" });
    }
    res.status(200).json({ success: true, data: tickets });
  } catch (error) {
    res.status(500).json({ message: "❌ Server error", error: error.message })
  }
}


module.exports={newTicket,getTicket};