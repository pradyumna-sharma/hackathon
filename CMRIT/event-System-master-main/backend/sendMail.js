const nodemailer = require('nodemailer');

async function sendEmails(users,camp) {
    const transporter = nodemailer.createTransport({
        service: 'Gmail',
        auth: {
            user: 'jpj41976@gmail.com', // Your email address
            pass: 'susz wvhz axle ozmu' // Your email password
        }
    });
    

    const mailOptions = {
        from: 'jpj41976@gmail.com', // Sender address
        subject: 'Greetings', // Subject line
        html: `<h1>Hello</h1><p>This is a greeting card.<br> There is a camp in your area by ${camp.docname}. <br>Camp details:<br>${camp.desc}. <br>Please visit our website for more details.<br> <a href="http://localhost:5173/">X to infinity</a></p>` // HTML body
    }


    for (const user of users) {
        mailOptions.to = user.email; // Set recipient email address

        await transporter.sendMail(mailOptions); // Send email

        console.log(`Email sent to ${user.email}`);
    }
}

module.exports=sendEmails;