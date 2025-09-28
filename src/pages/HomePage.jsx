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
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 items-start">
            {/* Left Column - Content */}
            <div className="text-white lg:col-span-2 lg:pr-4">
              <div className="mb-6">
                <span className="inline-block bg-white/20 text-white px-3 py-1 rounded-full text-sm font-medium mb-4">
                  ✨ Nová pobočka v Brně od 22.7.2024
                </span>
                <div className="mb-4">
                  <h1 className="font-heading text-4xl md:text-5xl lg:text-6xl text-white mb-2 font-bold tracking-wide drop-shadow-2xl leading-tight">
                    AutoskloRoger
                  </h1>
                  <div className="font-tech text-xl md:text-2xl lg:text-3xl text-primary-200 font-medium tracking-wide drop-shadow-xl">
                    s.r.o.
                  </div>
                </div>
                <p className="text-lg lg:text-xl text-white/90 mb-6 leading-relaxed">
                  Profesionální prodej, výměna a opravy autoskel ve
                  <span className="font-semibold text-primary-200"> 7 městech</span> České republiky.
                </p>
              </div>

              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-3 mb-8">
                <Link
                  to="/kontakt"
                  className="bg-white text-primary-700 font-semibold py-3 px-6 rounded-lg hover:bg-primary-50 transition-colors shadow-deep text-center"
                >
                  💬 Napište nám
                </Link>
                <a
                  href="tel:543257540"
                  className="bg-accent-500 hover:bg-accent-600 text-white font-semibold py-3 px-6 rounded-lg transition-colors shadow-deep text-center"
                >
                  📞 Zavolejte: 543 257 540
                </a>
                <Link
                  to="/pobocky"
                  className="border-2 border-white/30 text-white font-semibold py-3 px-6 rounded-lg hover:bg-white/10 transition-colors text-center"
                >
                  📍 Najít pobočku
                </Link>
              </div>

              {/* Key highlights */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                <div className="bg-white/30 backdrop-blur-md p-3 rounded-xl border-2 border-white/60 shadow-xl min-h-20 flex items-center justify-center">
                  <div className="text-center">
                    <div className="text-2xl font-black text-white drop-shadow-lg leading-none">7</div>
                    <div className="text-white text-xs font-bold drop-shadow-md leading-none">Poboček</div>
                  </div>
                </div>
                <div className="bg-white/30 backdrop-blur-md p-3 rounded-xl border-2 border-white/60 shadow-xl min-h-20 flex items-center justify-center">
                  <div className="text-center">
                    <div className="text-sm font-black text-white drop-shadow-lg leading-none">600-2000</div>
                    <div className="text-white text-xs font-bold drop-shadow-md leading-none">Kč oprava</div>
                  </div>
                </div>
                <div className="bg-white/30 backdrop-blur-md p-3 rounded-xl border-2 border-white/60 shadow-xl min-h-20 flex items-center justify-center">
                  <div className="text-center">
                    <div className="text-lg font-black text-white drop-shadow-lg leading-none">Mobilní</div>
                    <div className="text-white text-xs font-bold drop-shadow-md leading-none">Servis</div>
                  </div>
                </div>
                <div className="bg-white/30 backdrop-blur-md p-3 rounded-xl border-2 border-white/60 shadow-xl min-h-20 flex items-center justify-center">
                  <div className="text-center">
                    <div className="text-sm font-black text-white drop-shadow-lg leading-none">Pojišťovny</div>
                    <div className="text-white text-xs font-bold drop-shadow-md leading-none">řešíme</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Column - Service Cards */}
            <div className="relative lg:col-span-1">
              {/* Main service card */}
              <div className="glass-morphism p-6 rounded-xl border border-white/30 mb-4 bg-white/5">
                <div className="text-center text-white">
                  <div className="w-16 h-16 bg-white/20 rounded-full mx-auto mb-4 flex items-center justify-center">
                    <span className="text-2xl">🚗</span>
                  </div>
                  <h3 className="text-lg font-bold mb-2">Opravy autoskel</h3>
                  <p className="text-white/90 mb-3 text-sm">
                    GLASS REPAIR systém pro rychlé opravy
                  </p>
                  <div className="bg-white/20 rounded-lg p-3">
                    <div className="text-accent-200 font-bold text-lg">600 - 2,000 Kč</div>
                    <div className="text-white/80 text-xs">Podle rozsahu poškození</div>
                  </div>
                </div>
              </div>

              {/* Service grid */}
              <div className="grid grid-cols-2 gap-3">
                <div className="glass-morphism p-3 rounded-lg border border-white/30 text-center text-white bg-white/5">
                  <div className="text-xl mb-1">🛡️</div>
                  <div className="font-semibold text-xs">Pojišťovny</div>
                  <div className="text-white/70 text-xs">Bezplatné</div>
                </div>

                <div className="glass-morphism p-3 rounded-lg border border-white/30 text-center text-white bg-white/5">
                  <div className="text-xl mb-1">🌟</div>
                  <div className="font-semibold text-xs">Tónování</div>
                  <div className="text-white/70 text-xs">Skel vozidel</div>
                </div>

                <div className="glass-morphism p-3 rounded-lg border border-white/30 text-center text-white bg-white/5">
                  <div className="text-xl mb-1">🔧</div>
                  <div className="font-semibold text-xs">Mobilní</div>
                  <div className="text-white/70 text-xs">K vám</div>
                </div>

                <div className="glass-morphism p-3 rounded-lg border border-white/30 text-center text-white bg-white/5">
                  <div className="text-xl mb-1">🏪</div>
                  <div className="font-semibold text-xs">7 poboček</div>
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
            <h2 className="font-display text-3xl md:text-4xl mb-4 font-normal text-secondary-900 tracking-wide">
              Naše hlavní služby
            </h2>
            <p className="font-modern text-lg text-secondary-700 font-medium tracking-wide">
              Rychlý přehled toho, co pro vás můžeme udělat
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="card-automotive group hover:shadow-deep transition-all border-2 border-primary-300 hover:border-primary-500">
              <div className="text-center">
                <div className="w-20 h-20 bg-gradient-automotive rounded-full mx-auto mb-6 flex items-center justify-center text-3xl group-hover:scale-110 transition-transform shadow-lg">
                  🔧
                </div>
                <h3 className="font-display text-2xl mb-4 text-secondary-900 font-bold tracking-wide">Opravy čelních skel</h3>
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
                <h3 className="font-display text-2xl mb-4 text-secondary-900 font-bold tracking-wide">Pojistné události</h3>
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
                <h3 className="font-display text-2xl mb-4 text-secondary-900 font-bold tracking-wide">Mobilní servis</h3>
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