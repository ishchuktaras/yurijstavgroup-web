export const metadata = {
  title: 'Ochrana osobních údajů (GDPR)',
}

export default function GDPRPage() {
  return (
    <div className="pt-32 pb-24 px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto text-brand-silver">
      <h1 className="text-3xl md:text-5xl font-bold text-white mb-8">Ochrana osobních údajů</h1>
      
      <div className="space-y-8 leading-relaxed">
        <section>
          <h2 className="text-xl font-bold text-white mb-4">1. Správce údajů</h2>
          <p>Správcem vašich osobních údajů je společnost Yurij Stav Group s.r.o., se sídlem Fryčovická 458, Praha - Letňany, 199 00. Vaše údaje zpracováváme v souladu s Nařízením Evropského parlamentu a Rady (EU) 2016/679 (GDPR).</p>
        </section>

        <section>
          <h2 className="text-xl font-bold text-white mb-4">2. Jaké údaje zpracováváme a proč</h2>
          <p>Zpracováváme pouze údaje, které nám sami poskytnete prostřednictvím kontaktního formuláře (jméno, e-mail, telefon) nebo při uzavírání smlouvy. Tyto údaje jsou nezbytné pro vypracování cenové nabídky, komunikaci s vámi a následné plnění smlouvy.</p>
        </section>

        <section>
          <h2 className="text-xl font-bold text-white mb-4">3. Jak dlouho údaje uchováváme</h2>
          <p>Osobní údaje uchováváme po dobu trvání smluvního vztahu a následně po dobu nezbytnou k plnění zákonných povinností (např. účetní a daňové předpisy) nebo pro ochranu našich oprávněných zájmů.</p>
        </section>

        <section>
          <h2 className="text-xl font-bold text-white mb-4">4. Vaše práva</h2>
          <p>Máte právo na přístup ke svým osobním údajům, právo na jejich opravu nebo výmaz, popřípadě omezení zpracování. Pokud máte jakýkoliv dotaz ohledně zpracování vašich dat, kontaktujte nás na e-mailu Yurijstavgroup@gmail.com.</p>
        </section>
      </div>
    </div>
  )
}