import { Link } from 'react-router-dom'

const HomePage = () => {
  return (
    <div>
      {/* Hero Section */}
      <section className="relative py-20 lg:py-32 bg-gradient-hero overflow-hidden">
        {/* Background decorative elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -top-40 -right-40 w-80 h-80 bg-white/10 rounded-full blur-3xl"></div>
          <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-white/10 rounded-full blur-3xl"></div>
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left Column - Content */}
            <div className="text-white">
              <div className="mb-8">
                <span className="inline-block bg-white/20 text-white px-4 py-2 rounded-full text-sm font-medium mb-6">
                  ✨ Nová pobočka v Brně od 22.7.2024
                </span>
                <h1 className="heading-primary text-5xl md:text-6xl lg:text-7xl text-white mb-6 text-shadow-automotive">
                  AutoskloRoger
                  <span className="block text-4xl md:text-5xl lg:text-6xl text-primary-200 font-medium">
                    s.r.o.
                  </span>
                </h1>
                <p className="text-xl lg:text-2xl text-white/90 mb-8 leading-relaxed">
                  Profesionální prodej, výměna a opravy autoskel ve
                  <span className="font-semibold text-primary-200"> 7 městech</span> České republiky.
                </p>
              </div>

              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-4 mb-12">
                <Link
                  to="/kontakt"
                  className="bg-white text-primary-700 font-semibold py-4 px-8 rounded-lg hover:bg-primary-50 transition-colors shadow-deep text-center"
                >
                  💬 Napište nám
                </Link>
                <a
                  href="tel:543257540"
                  className="bg-accent-500 hover:bg-accent-600 text-white font-semibold py-4 px-8 rounded-lg transition-colors shadow-deep text-center"
                >
                  📞 Zavolejte: 543 257 540
                </a>
                <Link
                  to="/pobocky"
                  className="border-2 border-white/30 text-white font-semibold py-4 px-8 rounded-lg hover:bg-white/10 transition-colors text-center"
                >
                  📍 Najít pobočku
                </Link>
              </div>

              {/* Key highlights */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                <div className="glass-morphism p-4 rounded-lg border border-white/30 bg-white/5">
                  <div className="text-center">
                    <div className="text-2xl font-bold text-white mb-1">7</div>
                    <div className="text-white/90 text-sm font-medium">Poboček</div>
                  </div>
                </div>
                <div className="glass-morphism p-4 rounded-lg border border-white/30 bg-white/5">
                  <div className="text-center">
                    <div className="text-lg font-bold text-white mb-1">600-2000 Kč</div>
                    <div className="text-white/90 text-sm font-medium">Oprava skla</div>
                  </div>
                </div>
                <div className="glass-morphism p-4 rounded-lg border border-white/30 bg-white/5">
                  <div className="text-center">
                    <div className="text-2xl font-bold text-white mb-1">Mobilní</div>
                    <div className="text-white/90 text-sm font-medium">Servis</div>
                  </div>
                </div>
                <div className="glass-morphism p-4 rounded-lg border border-white/30 bg-white/5">
                  <div className="text-center">
                    <div className="text-2xl font-bold text-white mb-1">Pojišťovny</div>
                    <div className="text-white/90 text-sm font-medium">Řešíme za vás</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Column - Service Cards */}
            <div className="relative">
              {/* Main service card */}
              <div className="glass-morphism p-8 rounded-xl border border-white/30 mb-6 bg-white/5">
                <div className="text-center text-white">
                  <div className="w-20 h-20 bg-white/20 rounded-full mx-auto mb-6 flex items-center justify-center">
                    <span className="text-3xl">🚗</span>
                  </div>
                  <h3 className="text-2xl font-bold mb-3">Opravy autoskel</h3>
                  <p className="text-white/90 mb-4 text-lg">
                    GLASS REPAIR systém pro rychlé a kvalitní opravy
                  </p>
                  <div className="bg-white/20 rounded-lg p-4">
                    <div className="text-accent-200 font-bold text-xl">600 - 2,000 Kč</div>
                    <div className="text-white/80 text-sm">Cena podle rozsahu poškození</div>
                  </div>
                </div>
              </div>

              {/* Service grid */}
              <div className="grid grid-cols-2 gap-4">
                <div className="glass-morphism p-4 rounded-xl border border-white/30 text-center text-white bg-white/5">
                  <div className="text-2xl mb-2">🛡️</div>
                  <div className="font-semibold text-sm">Pojišťovny</div>
                  <div className="text-white/70 text-xs">Bezplatná výměna</div>
                </div>

                <div className="glass-morphism p-4 rounded-xl border border-white/30 text-center text-white bg-white/5">
                  <div className="text-2xl mb-2">🌟</div>
                  <div className="font-semibold text-sm">Tónování</div>
                  <div className="text-white/70 text-xs">Skel vozidel</div>
                </div>

                <div className="glass-morphism p-4 rounded-xl border border-white/30 text-center text-white bg-white/5">
                  <div className="text-2xl mb-2">🔧</div>
                  <div className="font-semibold text-sm">Mobilní servis</div>
                  <div className="text-white/70 text-xs">Přijedeme k vám</div>
                </div>

                <div className="glass-morphism p-4 rounded-xl border border-white/30 text-center text-white bg-white/5">
                  <div className="text-2xl mb-2">🏪</div>
                  <div className="font-semibold text-sm">7 poboček</div>
                  <div className="text-white/70 text-xs">Celá ČR</div>
                </div>
              </div>

              {/* Floating badge */}
              <div className="absolute -top-4 -right-4 bg-accent-500 text-white px-4 py-2 rounded-full shadow-deep">
                <div className="text-sm font-semibold">📍 Celá ČR</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Quick Services Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="heading-primary text-3xl md:text-4xl mb-4">
              Naše hlavní služby
            </h2>
            <p className="text-automotive text-lg">
              Rychlý přehled toho, co pro vás můžeme udělat
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="card-automotive group hover:shadow-deep transition-all border-2 border-primary-300 hover:border-primary-500">
              <div className="text-center">
                <div className="w-20 h-20 bg-gradient-automotive rounded-full mx-auto mb-6 flex items-center justify-center text-3xl group-hover:scale-110 transition-transform shadow-lg">
                  🔧
                </div>
                <h3 className="heading-primary text-2xl mb-4 text-secondary-900">Opravy čelních skel</h3>
                <p className="text-automotive mb-6 text-lg leading-relaxed">GLASS REPAIR systém pro rychlé opravy prasklin a úderů</p>
                <div className="bg-primary-50 border border-primary-200 rounded-lg p-4 mb-6">
                  <div className="text-primary-800 font-bold text-xl">600 - 2,000 Kč</div>
                  <div className="text-primary-700 text-sm font-medium">Podle rozsahu poškození</div>
                </div>
                <Link to="/opravy-skel" className="btn-primary w-full block text-center">
                  Zjistit více
                </Link>
              </div>
            </div>

            <div className="card-automotive group hover:shadow-deep transition-all border-2 border-primary-300 hover:border-primary-500">
              <div className="text-center">
                <div className="w-20 h-20 bg-gradient-automotive rounded-full mx-auto mb-6 flex items-center justify-center text-3xl group-hover:scale-110 transition-transform shadow-lg">
                  🛡️
                </div>
                <h3 className="heading-primary text-2xl mb-4 text-secondary-900">Pojistné události</h3>
                <p className="text-automotive mb-6 text-lg leading-relaxed">Kompletní řešení s pojišťovnami a vyřízení škody</p>
                <div className="bg-accent-50 border border-accent-200 rounded-lg p-4 mb-6">
                  <div className="text-accent-800 font-bold text-xl">Často zdarma</div>
                  <div className="text-accent-700 text-sm font-medium">S pojišťovnou</div>
                </div>
                <Link to="/pojistovny" className="btn-primary w-full block text-center">
                  Zjistit více
                </Link>
              </div>
            </div>

            <div className="card-automotive group hover:shadow-deep transition-all border-2 border-primary-300 hover:border-primary-500">
              <div className="text-center">
                <div className="w-20 h-20 bg-gradient-automotive rounded-full mx-auto mb-6 flex items-center justify-center text-3xl group-hover:scale-110 transition-transform shadow-lg">
                  🚗
                </div>
                <h3 className="heading-primary text-2xl mb-4 text-secondary-900">Mobilní servis</h3>
                <p className="text-automotive mb-6 text-lg leading-relaxed">Přijedeme kamkoliv potřebujete v rámci ČR</p>
                <div className="bg-secondary-50 border border-secondary-200 rounded-lg p-4 mb-6">
                  <div className="text-secondary-800 font-bold text-xl">Celá ČR</div>
                  <div className="text-secondary-700 text-sm font-medium">K vám domů či do práce</div>
                </div>
                <Link to="/sluzby" className="btn-primary w-full block text-center">
                  Zjistit více
                </Link>
              </div>
            </div>
          </div>

          <div className="text-center mt-12">
            <Link
              to="/sluzby"
              className="btn-primary text-lg px-8 py-4"
            >
              Zobrazit všechny služby
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}

export default HomePage