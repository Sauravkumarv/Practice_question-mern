const express=require('express');
const { Register, Login } = require('../controller/UserController');
const protect = require('../middleware/auth');
const { newTicket,getTicket } = require('../controller/TicketCOntroller');

const router=express.Router();


router.post('/api/auth/register',Register)
router.post('/api/auth/login',Login)
router.post('/api/auth/newticket',protect,newTicket)
router.get('/api/auth/tickets',getTicket)

module.exports=router