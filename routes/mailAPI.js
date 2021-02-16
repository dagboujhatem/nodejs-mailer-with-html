const express = require('express');
const nodemailer = require('nodemailer');
const fs = require('fs');
const path = require('path');
const ejs = require('ejs');
const router = express.Router();

// les API
router.post('/send-html/:name', async(req, res)=>{

    // 1. create transporter 
    const transporter = nodemailer.createTransport(
        {
        service: 'gmail',
        auth: {
            user: "***************@gmail.com",
            pass: "***************"
        }
    });
    // 2. load HTML template
    const template = fs.readFileSync(path.resolve('./common/mail_templates', 'register_mail.html'), {encoding: 'utf-8'});
    console.log(template);
    const html = ejs.render(template, {
        name: req.params.name
    })
    console.log(html);

    // 3. create mail options
    let info = await transporter.sendMail({
        from: '"Fred Foo 👻" <dagboujhatem@gmail.com>', // sender address
        to: "sofien.gallas@gmail.com, dagboujhatem@gmail.com", // list of receivers
        subject: "Hello ✔", // Subject line
        html: html, // html body
    });

    res.json({message : "E-mail send successfully!"})
});

module.exports = router;