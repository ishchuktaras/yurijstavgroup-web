// src/app/api/contact/route.ts
import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export async function POST(request: Request) {
  try {
    const formData = await request.formData();
    
    // Extrakce dat
    const jmeno = formData.get('jmeno') as string;
    const telefon = formData.get('telefon') as string;
    const email = formData.get('email') as string;
    const adresa = formData.get('adresa') as string;
    const sluzba = formData.get('sluzba') as string;
    const plocha = formData.get('plocha') as string;
    const termin = formData.get('termin') as string;
    const zprava = formData.get('zprava') as string;
    const file = formData.get('file') as File | null;

    // Zpracování přílohy s přesným typem pro TypeScript
    const attachments: { filename: string; content: Buffer }[] = [];
    if (file && file.size > 0) {
      const buffer = Buffer.from(await file.arrayBuffer());
      attachments.push({
        filename: file.name,
        content: buffer,
      });
    }

    // Konfigurace připojení k WEDOS SMTP
    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST,
      port: Number(process.env.SMTP_PORT) || 465,
      secure: true, // Pro port 465 musí být true
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASSWORD,
      },
    });

    // Odeslání e-mailu
    await transporter.sendMail({
      from: `"Web Yurij Stav Group" <${process.env.SMTP_USER}>`, 
      to: process.env.SMTP_USER, 
      replyTo: email, 
      subject: `Nová poptávka: ${sluzba} - ${jmeno}`,
      html: `
        <h2>Nová poptávka z webu</h2>
        <table style="width: 100%; border-collapse: collapse;">
          <tr><td style="padding: 8px 0; border-bottom: 1px solid #eee;"><strong>Jméno:</strong></td><td style="padding: 8px 0; border-bottom: 1px solid #eee;">${jmeno}</td></tr>
          <tr><td style="padding: 8px 0; border-bottom: 1px solid #eee;"><strong>E-mail:</strong></td><td style="padding: 8px 0; border-bottom: 1px solid #eee;">${email}</td></tr>
          <tr><td style="padding: 8px 0; border-bottom: 1px solid #eee;"><strong>Telefon:</strong></td><td style="padding: 8px 0; border-bottom: 1px solid #eee;">${telefon}</td></tr>
          <tr><td style="padding: 8px 0; border-bottom: 1px solid #eee;"><strong>Adresa realizace:</strong></td><td style="padding: 8px 0; border-bottom: 1px solid #eee;">${adresa}</td></tr>
          <tr><td style="padding: 8px 0; border-bottom: 1px solid #eee;"><strong>Typ práce:</strong></td><td style="padding: 8px 0; border-bottom: 1px solid #eee;">${sluzba}</td></tr>
          <tr><td style="padding: 8px 0; border-bottom: 1px solid #eee;"><strong>Plocha:</strong></td><td style="padding: 8px 0; border-bottom: 1px solid #eee;">${plocha || 'Neuvedeno'} m²</td></tr>
          <tr><td style="padding: 8px 0; border-bottom: 1px solid #eee;"><strong>Termín:</strong></td><td style="padding: 8px 0; border-bottom: 1px solid #eee;">${termin || 'Neuvedeno'}</td></tr>
        </table>
        <h3 style="margin-top: 20px;">Doplňující informace:</h3>
        <p style="background: #f9fafb; padding: 15px; border-radius: 8px;">${zprava || 'Bez zprávy'}</p>
      `,
      attachments
    });

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error('SMTP Error:', error);
    return NextResponse.json({ error: 'Chyba serveru při odesílání e-mailu.' }, { status: 500 });
  }
}