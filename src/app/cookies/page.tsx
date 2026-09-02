export const metadata = {
  title: 'Zásady cookies',
}

export default function CookiesPage() {
  return (
    <div className="pt-32 pb-24 px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto text-brand-silver">
      <h1 className="text-3xl md:text-5xl font-bold text-white mb-8">Zásady používání Cookies</h1>
      
      <div className="space-y-8 leading-relaxed">
        <section>
          <h2 className="text-xl font-bold text-white mb-4">Co jsou to cookies?</h2>
          <p>Cookies jsou krátké textové soubory, které navštívená webová stránka odešle do prohlížeče. Umožňují webu zaznamenat informace o vaší návštěvě, například preferovaný jazyk a další nastavení, což usnadňuje vaši další návštěvu.</p>
        </section>

        <section>
          <h2 className="text-xl font-bold text-white mb-4">Jaké cookies používáme?</h2>
          <ul className="list-disc pl-5 space-y-2">
            <li><strong>Nezbytné cookies:</strong> Jsou absolutně klíčové pro správné fungování webových stránek. Tyto cookies nezaručují osobní identifikaci uživatele.</li>
            <li><strong>Analytické cookies:</strong> (Momentálně nepoužíváme) Slouží k pochopení toho, jak návštěvníci s webem interagují.</li>
          </ul>
        </section>

        <section>
          <h2 className="text-xl font-bold text-white mb-4">Jak spravovat nebo smazat cookies?</h2>
          <p>Většina webových prohlížečů přijímá cookies automaticky. Ve svém prohlížeči můžete cookies odmítnout nebo nastavit upozornění na jejich přijetí. Úplné zablokování cookies však může omezit funkčnost některých webových stránek.</p>
        </section>
      </div>
    </div>
  )
}