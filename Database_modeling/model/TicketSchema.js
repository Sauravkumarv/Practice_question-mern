const mongoose=require('mongoose')

const ticketSchema = new mongoose.Schema(
  {
    userId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User", // jisne ticket create kiya
      required: true,
    },
    subject: {
      type: String,
      required: true,
      trim: true,
    },
    category: {
      type: String,
      enum: ["technical", "billing", "general"],
      default: "general",
    },
    priority: {
      type: String,
      enum: ["low", "medium", "high"],
      default: "medium",
    },
    status: {
      type: String,
      enum: ["open", "in-progress", "resolved", "closed"],
      default: "open",
    },
    message: {
      type: String,
      required: true,
    },
    assignedTo: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User", // agent handle karega
      default: null,
    },
  },
  { timestamps: true }
);

const TICKET = mongoose.model("Ticket", ticketSchema);
module.exports=TICKET