// src/app/api/contact/route.ts
import { NextResponse } from 'next/server';
import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: Request) {
  try {
    const formData = await request.formData();
    
    const jmeno = formData.get('jmeno') as string;
    const telefon = formData.get('telefon') as string;
    const adresa = formData.get('adresa') as string;
    const sluzba = formData.get('sluzba') as string;
    const plocha = formData.get('plocha') as string;
    const termin = formData.get('termin') as string;
    const zprava = formData.get('zprava') as string;
    const file = formData.get('file') as File | null;

    // Zpracování přílohy pro Resend
    let attachments = [];
    if (file && file.size > 0) {
      const buffer = Buffer.from(await file.arrayBuffer());
      attachments.push({
        filename: file.name,
        content: buffer,
      });
    }

    // Odeslání e-mailu přes Resend
    await resend.emails.send({
      from: 'Web Poptávka <onboarding@resend.dev>', // Změníš na poptavky@yurijstavgroup.cz až ověříš doménu
      to: 'poptavky@yurijstavgroup.cz', // Cílový mail, který musíš založit u WEDOSu
      subject: `Nová poptávka z webu: ${sluzba} - ${jmeno}`,
      html: `
        <h2>Nová poptávka z webu Yurij Stav Group</h2>
        <ul>
          <li><strong>Jméno:</strong> ${jmeno}</li>
          <li><strong>Telefon:</strong> ${telefon}</li>
          <li><strong>Adresa realizace:</strong> ${adresa}</li>
          <li><strong>Typ práce:</strong> ${sluzba}</li>
          <li><strong>Přibližná plocha:</strong> ${plocha || 'Neuvedeno'} m²</li>
          <li><strong>Termín:</strong> ${termin || 'Neuvedeno'}</li>
        </ul>
        <h3>Doplňující informace:</h3>
        <p>${zprava || 'Bez zprávy'}</p>
      `,
      attachments
    });

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error(error);
    return NextResponse.json({ error: 'Chyba při odesílání e-mailu.' }, { status: 500 });
  }
}