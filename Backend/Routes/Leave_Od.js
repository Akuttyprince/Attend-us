const express = require("express");
const router = express.Router;
const AuthenticateToken = require("../MiddleWare/Koushik");
const Leave_od = require("../Models/LeaveLetters");


router.post( "/addLeave", async (res,req,) => {
         const{ studentName , leaveType, LeaveDate,fileName,fileType,filePath,fileSize,status} = req.body;

         try {
            const LeaveLetterDetails = new Leave_od({studentName , leaveType, LeaveDate,fileName,fileType,filePath,fileSize ,status});
            const result = await  LeaveLetterDetails.save();
            res.json({message : " Leave Letter Added Successfully",result});
            
         } catch (error) {
            res.status(500).json({message : "Error Occured",error});
            
         };

})

router.put ("/updateLeave/:id",AuthenticateToken , async (res,req) => {
   const id = req.params.id;
   const {studentName , leaveType, LeaveDate,fileName,fileType,filePath,fileSize,status
      } = req.body;
      try {
         const result = await Leave_od.findByIdAndUpdate(id, {studentName , leaveType, LeaveDate,
            fileName,fileType,filePath,fileSize,status},{new : true});
            res.json({message : "Leave Letter Updated Successfully",result});
         } catch (error) {
            res.status(500).json({message : "Error Occured",error});
            }
            });

