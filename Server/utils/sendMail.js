import nodemailer from "nodemailer"

const transport = nodemailer.createTransport({
    service: "gmail",
    auth: {
        user: process.env.USER,
        pass: process.env.PASSWORD
    }
})

async function sendEmail({name, from, subject, message}) {
    const mailOptions = {
        from: from,
        to: process.env.USER,
        subject: subject,
        text: `From : ${from}\n\nName : ${name}\n\n\Message : ${message}`
    }

    return await new Promise((resolve, reject) => {
        transport.sendMail(mailOptions, (error, info) => {
            if(error) {
                reject({
                    status: 500,
                    message: "Error sending email"
                })
            } else {
                resolve({
                    status: 200,
                    message: "Email sent"
                })
            }
        })
    })
}

export default sendEmail;