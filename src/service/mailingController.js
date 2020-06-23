import nodemailer from "nodemailer";
import config from "config";

import mailingModel from "../repository/mailingModel";

const user =  config.get("cred.user")
const pass  = config.get("cred.pass");
      
// Adjust transporter
const transporter = nodemailer.createTransport({
    service: "yahoo",
    secure: false,
    auth: {
        user: user,
        pass: pass
    }
});

// Display HR all jobs from recent to old
const sendMail = (req, res) => {
    const mailingRequest = mailingModel(req.body);
    const mailOptions = {
        from: "rankup9822@yahoo.com",
        to: mailingRequest.receiver,
        subject: mailingRequest.title + ' job',
        text: mailingRequest.message
    };
    transporter.sendMail(mailOptions)
        .then(() => mailingRequest.save())
        .then(data => res.json(data))
        .catch((err) => res.status(400).send(err));
}


module.exports = {sendMail};