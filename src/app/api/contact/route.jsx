import { NextResponse } from 'next/server'
import nodemailer from 'nodemailer';
require('dotenv').config(); 
// Maneja requerimiento POST a /api

export async function POST(request) {
    //const username = process.env.GMAIL_EMAIL;
    const {name, email, subject, message} = await request.json()
    console.log("username", username);
    // const formData = await request.formData()
    // const name = formData.get('name')
    // const email = formData.get('email')
    // const message = formData.get('message')

   
    const transporter = nodemailer.createTransport ({
         host: 'smtp.gmail.com',
         port: 465,
         secure:true,
        //service:"gmail",
        // tls: {
        //     ciphers: "SSLv3",
        //     rejectUnauthorized: false,
        // },
        auth: {
            user: process.env.GMAIL_EMAIL,  
            pass: process.env.GMAIL_PASSWORD   
        },
        
    })

    try {
        const mail = await transporter.sendMail({
            from: "espinoza.p.mauricio@gmail.com",
            to: "espinoza.p.mauricio@gmail.com",
            subject: `Contacto: ${email}`,
            text: `
            <p>Nombre: ${name} </p>
            <p>Email: ${email} </p>
            <p>Mensaje: ${message} </p>
            `,
        })
        console.log("mailResp", mail)
        return NextResponse.json({ message: "Satisfactorio: Se envió correctamente email" })

    } catch (error) {
        console.log(error)
        NextResponse.status(500).json({ message: "Error: No se pudo enviar el email solicitado" })
    }

  }