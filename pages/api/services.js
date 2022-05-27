// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import nodemailer from 'nodemailer'

export default async function handler(req, res) {
  
  const{name,email_direction, last_name,municipio,postal,pais,pasaporte,facturacion,calle_numero, phone, step_process} = req.body

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
          <p>Tines un nuevo mensaje de ${name}</p><br>
          <p>nombre: ${name}</p><br>
          <p>Apellidos: ${last_name}</p><br>
          <p>telefono: ${phone}</p><br>
          <p>municipio: ${municipio}</p><br>
          <p>Zip: ${postal}</p><br>
          <p>Pais: ${pais}</p><br>
          <p>Pasaporte: ${pasaporte}</p><br>
          <p>Dirección de facturacion: ${facturacion}</p><br>
          <p>Calle y numero: ${calle_numero}</p><br>
          <p>Servicio: ${step_process}</p><br>
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