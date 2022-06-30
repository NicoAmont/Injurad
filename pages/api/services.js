// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import nodemailer from 'nodemailer'

export default async function handler(req, res) {
  
  const{name,email_direction, last_name,municipio,postal,pais,pasaporte,facturacion,calle_numero,calle_numero2,type_process, phone, step_process} = req.body

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
          <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&family=Nunito:ital,wght@0,200;0,300;0,400;0,600;0,700;0,800;0,900;1,200;1,300;1,400;1,600;1,700;1,800;1,900&display=swap">
          <title>Document</title>
  
          <style>
          *{
              box-sizing: border-box;
              -webkit-box-sizing: border-box;
              -moz-box-sizing: border-box;
              }
              body{
                  font-family: Helvetica;
                  -webkit-font-smoothing: antialiased;
              }
              h2{
                  text-align: center;
                  font-size: 18px;
                  text-transform: uppercase;
                  letter-spacing: 1px;
                  color: black;
                  padding: 30px 0;
              }
              
              /* Table Styles */
              
              .table-wrapper{
                  margin: 10px 70px 70px;
                  box-shadow: 0px 35px 50px rgba( 0, 0, 0, 0.2 );
              }
              
              .fl-table {
                  border-radius: 5px;
                  font-size: 12px;
                  font-weight: normal;
                  border: none;
                  border-collapse: collapse;
                  width: 100%;
                  max-width: 100%;
                  white-space: nowrap;
                  background-color: white;
              }
              
              .fl-table td, .fl-table th {
                  text-align: center;
                  padding: 8px;
              }
              
              .fl-table td {
                  border-right: 1px solid #f8f8f8;
                  font-size: 12px;
              }
              
              .fl-table thead th {
                  color: #fff;
                  background: #4FC3A1;
              }
              
              
              .fl-table thead th:nth-child(odd) {
                  color: #ffffff;
                  background: #324960;
              }
              
              .fl-table tr:nth-child(even) {
                  background: #F8F8F8;
              }
              
              /* Responsive */
              
              @media (max-width: 767px) {
                  .fl-table {
                      display: block;
                      width: 100%;
                  }
                  .table-wrapper:before{
                      content: "Scroll horizontally >";
                      display: block;
                      text-align: right;
                      font-size: 11px;
                      color: white;
                      padding: 0 0 10px;
                  }
                  .fl-table thead, .fl-table tbody, .fl-table thead th {
                      display: block;
                  }
                  .fl-table thead th:last-child{
                      border-bottom: none;
                  }
                  .fl-table thead {
                      float: left;
                  }
                  .fl-table tbody {
                      width: auto;
                      position: relative;
                      overflow-x: auto;
                  }
                  .fl-table td, .fl-table th {
                      padding: 20px .625em .625em .625em;
                      height: 60px;
                      vertical-align: middle;
                      box-sizing: border-box;
                      overflow-x: hidden;
                      overflow-y: auto;
                      width: 120px;
                      font-size: 13px;
                      text-overflow: ellipsis;
                  }
                  .fl-table thead th {
                      text-align: left;
                      border-bottom: 1px solid #f7f7f9;
                  }
                  .fl-table tbody tr {
                      display: table-cell;
                  }
                  .fl-table tbody tr:nth-child(odd) {
                      background: none;
                  }
                  .fl-table tr:nth-child(even) {
                      background: transparent;
                  }
                  .fl-table tr td:nth-child(odd) {
                      background: #F8F8F8;
                      border-right: 1px solid #E6E4E4;
                  }
                  .fl-table tr td:nth-child(even) {
                      border-right: 1px solid #E6E4E4;
                  }
                  .fl-table tbody td {
                      display: block;
                      text-align: center;
                  }
              }
          </style>
  
          </head>
          <body>
          <h2>Datos del solicitante</h2>
          <div class="table-wrapper">
              <table class="fl-table">
                  <thead>
                  <tr>
                      <th>Datos</th>
                      <th>Valores</th>
                  </tr>
                  </thead>
                  <tbody>
                  <tr>
                      <td>Idioma</td>
                      <td>${lang}</td>
                  </tr>
                  <tr>
                      <td>Nombre</td>
                      <td>${name}</td>
                  </tr>
                  <tr>
                      <td>Apellidos</td>
                      <td>${last_name}</td>
                  </tr>
                  <tr>
                      <td>Nacionalidad</td>
                      <td>${pais}</td>
                  </tr>
                  <tr>
                      <td>Telefono móvil</td>
                      <td>${phone}</td>
                  </tr>
                  <tr>
                      <td>Email</td>
                      <td>${email_direction}</td>
                  </tr>
                  <tr>
                      <td>Pasaporte/DNI/NIE</td>
                      <td>${pasaporte}</td>
                  </tr>
                  <tr>
                      <td>Direccion de facturacion</td>
                      <td>${facturacion}</td>
                  </tr>
                  <tr>
                      <td>Codigo Postal</td>
                      <td>${postal}</td>
                  </tr>
                  <tr>
                      <td>Pais</td>
                      <td>${calle_numero}</td>
                  </tr>
                  <tr>
                      <td>Ciudad</td>
                      <td>${calle_numero2}</td>
                  </tr>
                  <tr>
                      <td>Municipio</td>
                      <td>${municipio}</td>
                  </tr>
                  <tr>
                      <td>Tipo de inmueble</td>
                      <td>${type_process}</td>
                  </tr>
                  <tr>
                      <td>Servicio</td>
                      <td>${step_process}</td>
                  </tr>
                  <tbody>
              </table>
          </div>
          </body>
      </html>
      `,
      });
    
    console.log('Mensaje enviado', emailRes2.messageId);
  } catch (err) {
    console.log(err)
  }
  res.status(200).json(req.body)
}



//ohfgjhceacpkemar
//471989
//627555