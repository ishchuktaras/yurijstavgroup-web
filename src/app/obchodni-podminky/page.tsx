export const metadata = {
  title: 'Obchodní podmínky',
}

export default function TermsPage() {
  return (
    <div className="pt-32 pb-24 px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto text-brand-silver">
      <h1 className="text-3xl md:text-5xl font-bold text-white mb-8">Obchodní podmínky</h1>
      
      <div className="space-y-8 leading-relaxed">
        <section>
          <h2 className="text-xl font-bold text-white mb-4">1. Úvodní ustanovení</h2>
          <p>Tyto obchodní podmínky upravují vzájemná práva a povinnosti mezi firmou Yurij Stav Group s.r.o. (zhotovitel) a objednatelem stavebních prací. Zhotovitel se zavazuje provést pro objednatele dílo a objednatel se zavazuje dílo převzít a zaplatit dohodnutou cenu.</p>
        </section>

        <section>
          <h2 className="text-xl font-bold text-white mb-4">2. Cenová nabídka a smlouva</h2>
          <p>Veškeré cenové nabídky mají informativní charakter, dokud nejsou oboustranně písemně odsouhlaseny formou smlouvy o dílo nebo závazné objednávky. Ceny uvedené v nabídkách jsou platné po dobu 30 dnů od jejich vystavení.</p>
        </section>

        <section>
          <h2 className="text-xl font-bold text-white mb-4">3. Provádění díla</h2>
          <p>Zhotovitel provádí dílo na svůj náklad a nebezpečí ve sjednaném čase. Objednatel je povinen zajistit zhotoviteli připravenost staveniště a přístup k inženýrským sítím (voda, elektřina), pokud není dohodnuto jinak.</p>
        </section>

        <section>
          <h2 className="text-xl font-bold text-white mb-4">4. Záruka a reklamace</h2>
          <p>Na stavební práce poskytujeme záruku dle platných právních předpisů, zpravidla v délce 24 až 60 měsíců v závislosti na charakteru díla. Reklamace musí být uplatněny písemně bez zbytečného odkladu.</p>
        </section>
      </div>
    </div>
  )
}