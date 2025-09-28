const Hero = () => {
  return (
    <section
      id="home"
      className="relative pt-20 pb-16 lg:pt-24 lg:pb-20 automotive-gradient overflow-hidden"
    >
      {/* Background decorative elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-white/10 rounded-full blur-3xl"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-white/10 rounded-full blur-3xl"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Column - Content */}
          <div className="text-white">
            <div className="mb-6">
              <span className="inline-block bg-white/20 text-white px-4 py-2 rounded-full text-sm font-medium mb-4">
                ✨ Nová pobočka v Brně od 22.7.2024
              </span>
              <h1 className="heading-primary text-4xl md:text-5xl lg:text-6xl text-white mb-6 text-shadow-automotive">
                AutoskloRoger
                <span className="block text-3xl md:text-4xl lg:text-5xl text-accent-200 font-medium">
                  s.r.o.
                </span>
              </h1>
              <p className="text-xl lg:text-2xl text-white/90 mb-8 leading-relaxed">
                Profesionální prodej, výměna a opravy autoskel ve
                <span className="font-semibold text-accent-200"> 7 městech</span> České republiky.
                Řešíme pojistné události a poskytujeme mobilní servis.
              </p>
            </div>

            {/* Key highlights */}
            <div className="grid grid-cols-2 gap-4 mb-8">
              <div className="glass-morphism p-4 rounded-lg">
                <div className="text-2xl font-bold text-white">7</div>
                <div className="text-white/80 text-sm">Poboček</div>
              </div>
              <div className="glass-morphism p-4 rounded-lg">
                <div className="text-2xl font-bold text-white">600-2000 Kč</div>
                <div className="text-white/80 text-sm">Oprava skla</div>
              </div>
              <div className="glass-morphism p-4 rounded-lg">
                <div className="text-2xl font-bold text-white">Mobilní</div>
                <div className="text-white/80 text-sm">Servis</div>
              </div>
              <div className="glass-morphism p-4 rounded-lg">
                <div className="text-2xl font-bold text-white">Pojišťovny</div>
                <div className="text-white/80 text-sm">Řešíme za vás</div>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <button
                onClick={() => document.getElementById('contact').scrollIntoView({ behavior: 'smooth' })}
                className="bg-white text-primary-700 font-semibold py-4 px-8 rounded-lg hover:bg-accent-50 transition-colors shadow-deep"
              >
                💬 Napište nám
              </button>
              <a
                href="tel:543257540"
                className="bg-accent-500 hover:bg-accent-600 text-white font-semibold py-4 px-8 rounded-lg transition-colors shadow-deep text-center"
              >
                📞 Zavolejte: 543 257 540
              </a>
              <button
                onClick={() => document.getElementById('locations').scrollIntoView({ behavior: 'smooth' })}
                className="border-2 border-white/30 text-white font-semibold py-4 px-8 rounded-lg hover:bg-white/10 transition-colors"
              >
                📍 Najít pobočku
              </button>
            </div>
          </div>

          {/* Right Column - Service Cards */}
          <div className="relative">
            <div className="grid grid-cols-2 gap-4">
              {/* Main service card */}
              <div className="col-span-2 glass-morphism p-6 rounded-xl border border-white/30">
                <div className="text-center text-white">
                  <div className="w-16 h-16 bg-white/20 rounded-full mx-auto mb-4 flex items-center justify-center">
                    <span className="text-2xl">🚗</span>
                  </div>
                  <h3 className="text-xl font-bold mb-2">Opravy čelních skel</h3>
                  <p className="text-white/80 text-sm mb-4">
                    GLASS REPAIR systém - rychlé a kvalitní opravy
                  </p>
                  <div className="text-accent-200 font-semibold">600 - 2,000 Kč</div>
                </div>
              </div>

              {/* Service highlights */}
              <div className="glass-morphism p-4 rounded-xl border border-white/30">
                <div className="text-center text-white">
                  <div className="text-2xl mb-2">🔧</div>
                  <div className="font-semibold text-sm">Mobilní servis</div>
                  <div className="text-white/70 text-xs">Přijedeme k vám</div>
                </div>
              </div>

              <div className="glass-morphism p-4 rounded-xl border border-white/30">
                <div className="text-center text-white">
                  <div className="text-2xl mb-2">🛡️</div>
                  <div className="font-semibold text-sm">Pojišťovny</div>
                  <div className="text-white/70 text-xs">Bezplatná výměna</div>
                </div>
              </div>

              <div className="glass-morphism p-4 rounded-xl border border-white/30">
                <div className="text-center text-white">
                  <div className="text-2xl mb-2">🌟</div>
                  <div className="font-semibold text-sm">Tónování</div>
                  <div className="text-white/70 text-xs">Skel vozidel</div>
                </div>
              </div>

              <div className="glass-morphism p-4 rounded-xl border border-white/30">
                <div className="text-center text-white">
                  <div className="text-2xl mb-2">🏪</div>
                  <div className="font-semibold text-sm">Velkoobchod</div>
                  <div className="text-white/70 text-xs">Autoskla</div>
                </div>
              </div>
            </div>

            {/* Floating location badge */}
            <div className="absolute -top-4 -right-4 bg-accent-500 text-white px-4 py-2 rounded-full shadow-deep">
              <div className="text-sm font-semibold">📍 7 měst</div>
            </div>
          </div>
        </div>

        {/* Location quick links */}
        <div className="mt-16 pt-8 border-t border-white/20">
          <div className="text-center mb-6">
            <h3 className="text-white text-lg font-semibold mb-2">
              Naše pobočky
            </h3>
            <p className="text-white/70">
              Vyberte si nejbližší pobočku
            </p>
          </div>

          <div className="flex flex-wrap justify-center gap-3">
            {[
              { city: 'Brno', phone: '543 257 540', highlight: true },
              { city: 'Olomouc', phone: '585 313 040' },
              { city: 'Hradec Králové', phone: '495 218 189' },
              { city: 'Pardubice', phone: '466 513 227' },
              { city: 'Šumperk', phone: '583 219 055' },
              { city: 'Zlín', phone: '577 102 530' },
              { city: 'Znojmo', phone: '515 224 448' }
            ].map((location, index) => (
              <a
                key={index}
                href={`tel:${location.phone.replace(/\s/g, '')}`}
                className={`
                  glass-morphism px-4 py-2 rounded-lg border transition-colors
                  ${location.highlight
                    ? 'border-accent-300 bg-accent-500/20 text-accent-200'
                    : 'border-white/30 text-white hover:bg-white/10'
                  }
                `}
              >
                <div className="text-sm font-semibold">{location.city}</div>
                <div className="text-xs opacity-80">{location.phone}</div>
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero