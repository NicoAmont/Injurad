// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import nodemailer from 'nodemailer'

export default async function handler(req, res) {
  
  const{name,email_direction, last_name, phone, step_process, message_outro} = req.body

  const transporter = nodemailer.createTransport({
    host: 'smtp.gmail.com',
    port: 465,
    secure: true,
    auth: {
      user: process.env.email,
      pass: process.env.password,
    }, 
    secure: true,
  });

  try {
    const emailRes = await transporter.sendMail({
      from: process.env.email,
      to: email_direction,
      subject: `Contact form submission from ${name}`,
      html: `
        <img src="https://res.cloudinary.com/lewt-copr/image/upload/v1653643845/contactres_epp8ss.png" alt="">
      `,
    });
    const emailRes2 = await transporter.sendMail({
      from: process.env.email,
      to: 'lewtcorp.web@gmail.com',
      subject: `Contact form submission from ${name}`,
      html: `
      <html lang="en">
      <head>
        <meta charset="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta http-equiv="X-UA-Compatible" content="ie=edge" />
        <link href="/dist/output.css" rel="stylesheet">
        <title>Document</title>
    
        
    
      </head>
      <body>
        <h1 class="text-3xl font-bold underline">
          Hello world!
        </h1>
          <h1>${name}</h1>
          <p>{{text}}</p>
      </body>
    </html>
      `,
    });
    console.log('Mensaje enviado', emailRes.messageId);
    console.log('Mensaje enviado', emailRes2.messageId);
  } catch (err) {
    console.log(err)
  }

  res.status(200).json(req.body)
}



//ohfgjhceacpkemar
//471989
//627555