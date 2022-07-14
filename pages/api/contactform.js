// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import nodemailer from 'nodemailer'

export default async function handler(req, res) {
  
  const{name,email_direction, last_name,municipio,postal,pais,pasaporte,facturacion,calle_numero,calle_numero2,type_process, phone, step_process, lang} = req.body
  
  
  let text ={}
  if(lang == 'es') {
    text = {
      "text1": "Estimado/a Usuario/a",
      "text2": "Agradecemos su correo. Hemos recibido su solicitud correctamente. ",
      "text3": "Un chequeo de contrato es la manera más rápida, segura y discreta de controlar que efectivamente el documento corresponde al acuerdo que tiene con el vendedor y que el pacto que se formalizará es equilibrado y justo para las partes, así como que contenga las cláusulas que dejan claro las condiciones en las que se consumará el acuerdo.",
      "text4": "Tanto el análisis como el informe lo elabora un abogado, a partir de contrastar el contrato propuesto con nuestro modelo básico que contiene todas las cláusulas que son necesarias para dar la mayor seguridad jurídica a las partes, le servirá para exigir las correcciones y también para asegurarse de que esta bien asesorado.",
      "text5": "Debe realizar transferencia bancaria con los siguientes datos:",
      "text6": "Código del cliente:",
      "text7": "Datos para la transferencia bancaria",
      "text8": "No. De cuenta:  LA CAIXA ES96 2100 4776 7401 0013 5515",
      "text9": "BIC / SWIFT : CAIXESBBXXX",
      "text10": "Concepto:",
      "text11": "Importe:",
      "text12": "En cuanto hayamos recibido los documentos y el justificante de pago, procederemos a poner en marcha el trabajo. En un plazo no mayor a dos días le enviaremos vía correo electrónico el informe. Este informe además de aclararle a que corresponden los documentos le ofrece unas conclusiones y recomendaciones con las cuales podrá saber como seguir.",
      "text13": "El comprobante del deposito debe enviarlo junto con los documentos que le han entregado en el siguiente link. Este envío será requisito para el inicio de los trabajos.",
      "text14": "CARGAR JUSTIFICANTE TRANSFERENCIA ",
      "text15": "CARGAR DOCUMENTOS",
      "text16": "Este correo electrónico y, en su caso, cualquier fichero anexo al mismo se dirige exclusivamente a su destinatario y puede contener información privilegiada o confidencial. Si no es Ud. el destinatario indicado, queda notificado de que la utilización, divulgación y/o copia sin autorización está prohibida en virtud de la legislación vigente. Si ha recibido este mensaje por error, le rogamos que nos lo comunique inmediatamente por esta misma vía y proceda a su destrucción.",
      "text17": "Antes de imprimir este mensaje, asegúrese de que es necesario. Piense en su compromiso con el MEDIO AMBIENTE. Si necesita imprimirlo, hágalo por las dos caras siempre que sea posible. INJURAD apuesta por un uso eficiente de los recursos.",
    }
  }else if(lang == 'en') {
    text = {
      "text1": "Estimado/a Usuario/a",
      "text2": "Agradecemos su correo. Hemos recibido su solicitud correctamente. ",
      "text3": "Es muy sensato pedir chequear los documentos que ha recibido. La complejidad de las compraventas a veces esta en lo más simple. Los documentos pueden dar una primera vista del inmueble por el que se ha interesado. Aun cuando no podrá tener certeza de la situación legal del mismo solo con los documentos el chequeo es un paso preliminar para marcar el camino a seguir hacia una compraventa segura, sea que le han entregado todos los documentos importantes o no.",
      "text4": "Rogamos se aseguré con el vendedor o el intermediario que le han dado todos los documentos que poseen y que ha elegido el servicio según la cantidad de documentos que tiene.",
      "text5": "Debe realizar transferencia bancaria con los siguientes datos:",
      "text6": "Datos para la transferencia bancaria",
      "text6": "No. De cuenta:  LA CAIXA ES96 2100 4776 7401 0013 5515",
      "text7": "BIC / SWIFT : CAIXESBBXXX",
      "text8": "Concepto:",
      "text9": "Importe:",
      "text10": "En cuanto hayamos recibido los documentos y el justificante de pago, procederemos a poner en marcha el trabajo. En un plazo no mayor a dos días le enviaremos vía correo electrónico el informe. Este informe además de aclararle a que corresponden los documentos le ofrece unas conclusiones y recomendaciones con las cuales podrá saber como seguir.",
      "text11": "El comprobante del deposito debe enviarlo junto con los documentos que le han entregado en el siguiente link. Este envío será requisito para el inicio de los trabajos.",
      "text12": "Comprobante",
      "text13": "Documentos",
      "text14": "Este correo electrónico y, en su caso, cualquier fichero anexo al mismo se dirige exclusivamente a su destinatario y puede contener información privilegiada o confidencial. Si no es Ud. el destinatario indicado, queda notificado de que la utilización, divulgación y/o copia sin autorización está prohibida en virtud de la legislación vigente. Si ha recibido este mensaje por error, le rogamos que nos lo comunique inmediatamente por esta misma vía y proceda a su destrucción.",
      "text15": "Antes de imprimir este mensaje, asegúrese de que es necesario. Piense en su compromiso con el MEDIO AMBIENTE. Si necesita imprimirlo, hágalo por las dos caras siempre que sea posible. INJURAD apuesta por un uso eficiente de los recursos.",
    }
  }else if(lang == 'nl'){
    text = {
      "text1": "Beste client,",
      "text2": "Dank voor uw aanvraag. ",
      "text3": "De controle van het contract is een snelle en discrete manier om te controleren of de afspraken die u met de verkoper heeft gemaakt juist zijn geformuleerd. Bevat de overeenkomst alle belangrijke clausules die voor u van belang zijn en zijn er geen clausules opgenomen die uw belangen schaden. ",
      "text4": "De analyse en het rapport worden uitgevoerd door een advocaat. Deze zal het voorgestelde contract toetsten aan de modelovereenkomst van Injurad, welke is ontwikkeld om maximale zekerheid te bieden. Het rapport kunt u gebruiken om indien nodig aanpassingen te laten doen aan het contract.",
      "text5": "Gegevens voor de overschrijving:",
      "text6": "Código del cliente:",
      "text7": "Datos para la transferencia bancaria",
      "text8": "Rekeningnummer begunstigde: LA CAIXA ES96 2100 4776 7401 0013 5515",
      "text9": "BIC / SWIFT: CAIXESBBXXX",
      "text10": "Vergeet niet het betalingskenmerk te vermelden:",
      "text11": "Bedrag:",
      "text12": "En cuanto hayamos recibido los documentos y el justificante de pago, procederemos a poner en marcha el trabajo. En un plazo no mayor a dos días le enviaremos vía correo electrónico el informe. Este informe además de aclararle a que corresponden los documentos le ofrece unas conclusiones y recomendaciones con las cuales podrá saber como seguir.",
      "text13": "El comprobante del deposito debe enviarlo junto con los documentos que le han entregado en el siguiente link. Este envío será requisito para el inicio de los trabajos.",
      "text14": "BETALINGSBEWIJS STUREN",
      "text15": "DOCUMENTEN VERSTUREN",
      "text16": "Deze e-mail en, in voorkomend geval, elk eraan toegevoegd bestand is uitsluitend gericht aan de ontvanger en kan persoonlijke en/of vertrouwelijke informatie bevatten. Indien deze mail niet voor u bestemd is, delen wij u mede dat ongeoorloofd gebruik, openbaarmaking en/of kopiëren wettelijk verboden is. Als u dit bericht abusievelijk heeft ontvangen, gelieve ons daarvan per ommegaande op de hoogte te brengen en dit bericht te vernietigen. ",
      "text17": "Print deze mail niet uit als dat niet nodig is, denk aan het milieu.",
    }
  }
  
  const fecha = new Date()
  const codigo = last_name+fecha.getDate()+fecha.getHours()+fecha.getMinutes()+fecha.getSeconds();

  let servicio = step_process;
  let regex = 	servicio.split(/[€]/);
  let precio = regex[regex.length-1];

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
        <html lang="en">
        <head>
          <meta charset="UTF-8" />
          <meta name="viewport" content="width=device-width, initial-scale=1.0" />
          <meta http-equiv="X-UA-Compatible" content="ie=edge" />
          <title>Document</title>
      
          <style>
            *{
              font-family: Helvetica;
              -webkit-font-smoothing: antialiased;
              box-sizing: border-box;
            }
            .container{
              display:grid;
              height:100%;
              width:100%;
            }        
            .container-text {
              display:grid;
              justify-items: center;
              width: 100%;
              height: 100%;
              padding-left:0.2rem;
              
              padding-left: 25px;
              margin-top: 20px;
            }
            .container_subtext{
              display: grid;
              width: 100%;
              height: 100%;
            }
            @media (min-width:365px ){    
              .container_subtext{
                width: 50%;
              }
            }
            .titles{
              color:#326754;
              letter-spacing:1px;
              font-size: 24px;
              
            }
            p,.text_contain{
              color:#326754;
              font-size:18px;
            }
            .container_codigo{
              display: grid;
              flex-direction: column;
              justify-content: center;
              align-items: center;
              width: 100%;
              height: 100%;
              color: #fff;
              margin-top:10px;
            }
            .container_codigo_text{
              display: grid;
              place-content:center;
              place-items:center;
              margin: auto;
              width: auto;
              height: auto;
              padding: 5px 35px;
              border-radius: 15px ;
              position: relative;
              background-color:#264F3F;
              color: #fff;
            }
            .container_botones{
              width: 60%;
              padding-bottom: 16px;
              margin:auto;
              justify-content: space-evenly;
              text-align: center;
              align-items: center;
            }
            .container_factura_text{
              width: auto;
              color: #17533c3a;
            }
            .container2-text_factura{
              width: 100%;
              background-color: #17533c3a;
              padding: 5px 25px;
            }
            .linea_blanca{
              background-color:#fff;
              width: 5px;
              height: 80%;
              position: absolute;
              left: 10px;
              top:  15px;
              border-radius: 15px;
            }
            .text_numero_activacion{
              width:auto;
              font-size: 16px;
              font-weight: normal;
              color:white;
            }
            .titulo_factura{
              width: 100%;
              background-color: rgba(3, 15, 4, 0.678);
              color: #E5AE35;
              padding: 20px 25px;
              font-size: 16px;
              font-weight: bold;
            }
            .texto_factura{
              width: 100%;
              color: #17533ce1;
              font-size: 16px;
              font-weight: normal;
              
            }
            .center_text{
              margin: auto;
              justify-content: center;
              text-align: center;
              align-items: center;
              text-decoration: none;
            }
          </style>
      
        </head>
        <body>
          
      
            <img src="https://res.cloudinary.com/lewt-copr/image/upload/v1656302423/injurad_sflh0t.png" alt="">
            <div class="container-text" >
              <h1 class="titles ">
                ${text.text1}
              </h1>
              <div class="container_subtext">
      
                <p>
                ${text.text2} 
                </p>
                <p>
                ${text.text3}
                </p>
                <p>
                ${text.text4}
                </p>
                <p>
                ${text.text5}
                </p>
      
                <div class="container_codigo">
                  <div class="container_codigo_text">
                  
                    <div class="linea_blanca"></div>
                    <div class="text_numero_activacion">
                      <h2 class="text_numero_activacion">${text.text6}</h2>
                      <h2 class="text_numero_activacion">${codigo}</h2>
                    </div>
                  </div>
                </div>
      
                <div class="container_codigo">
                  <div class="container_factura_text">
                    
                    <h2 class="titulo_factura">${text.text7} </h2>
                    <div class="container2-text_factura">
                      <h2 class="texto_factura">${text.text8}</h2>
                      <h2 class="texto_factura">${text.text9}</h2>
                      <h2 class="texto_factura">${text.text10}    ${codigo} </h2>
                      <h2 class="texto_factura">${text.text11} € ${precio}</h2>
                      <img  url="https://res.cloudinary.com/lewt-copr/image/upload/v1656436556/Logo_blanco_oppmzx.png">
                    </div>
                    <p>${text.text12}</p>
                    <p style="width: 100%; height:auto;"${text.text13}
                    </p>
                  </div>
                </div>
                <div class="container_codigo">
                  <div class="container_botones">
                    
                    <a class="container_codigo_text center_text" href = "mailto:fianzas@injurad.com">
                        <div class="linea_blanca"></div>
                        <h2 class="text_numero_activacion ">${text.text14}</h2>
                    </a>
                    <a class="container_codigo_text center_text" style="margin-top:20px" href = "mailto:office@injurad.com">
                        <div class="linea_blanca"></div>
                        <h2 class="text_numero_activacion ">${text.text15}</h2>
                    </a>
                  </div>
                  
                  
                  <p style="font-size: 12px; font-weight:normal;">${text.text16}</p>
                  
                  <p style="font-size: 12px; font-weight:normal; color:#509C22;">${text.text17}</p>
                </div>
                
                
              </div>
              
            </div>
          
        </body>
      </html>
        `,
    });
    
   
  } catch (err) {
    console.log(err)
  }
  res.status(200).json(req.body)
}



//ohfgjhceacpkemar
//471989
//627555