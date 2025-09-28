const GlassRepair = () => {
  const repairSteps = [
    {
      step: "1",
      title: "Posouzení poškození",
      description: "Odborník posoudí typ a rozsah poškození čelního skla",
      icon: "🔍"
    },
    {
      step: "2",
      title: "Příprava místa",
      description: "Vyčištění a příprava praskliny nebo úderové díry",
      icon: "🧹"
    },
    {
      step: "3",
      title: "Aplikace pryskyřice",
      description: "Vstříknutí speciální pryskyřice GLASS REPAIR systémem",
      icon: "💉"
    },
    {
      step: "4",
      title: "Vytvrzení a dokončení",
      description: "UV vytvrzení a finální úprava povrchu skla",
      icon: "☀️"
    }
  ]

  const repairLimitations = [
    {
      type: "✅ Můžeme opravit",
      items: [
        "Praskliny do 10 cm délky",
        "Úderové díry do 2,5 cm průměru",
        "Poškození mimo zorné pole řidiče",
        "Čerstvé poškození (do 48 hodin)"
      ]
    },
    {
      type: "❌ Nemůžeme opravit",
      items: [
        "Poškození v zorném poli řidiče",
        "Praskliny delší než 10 cm",
        "Úderové díry větší než 2,5 cm",
        "Staré nebo znečištěné praskliny"
      ]
    }
  ]

  return (
    <section id="glass-repair" className="py-16 lg:py-20 bg-gradient-glass">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-block bg-primary-600 text-white px-4 py-2 rounded-full text-sm font-medium mb-4">
            🔧 GLASS REPAIR systém
          </div>
          <h2 className="heading-primary text-3xl md:text-4xl lg:text-5xl mb-6">
            Profesionální opravy
            <span className="text-gradient-automotive block">čelních skel</span>
          </h2>
          <p className="text-automotive text-lg lg:text-xl max-w-3xl mx-auto">
            Využíváme pokročilý GLASS REPAIR systém pro rychlé a kvalitní opravy prasklin a úderů.
            Opravu většinou dokončíme do 30 minut.
          </p>
        </div>

        {/* Price Banner */}
        <div className="card-automotive text-center mb-16 bg-automotive-gradient text-white relative overflow-hidden">
          <div className="absolute inset-0 bg-white/10"></div>
          <div className="relative z-10 py-8">
            <h3 className="text-3xl lg:text-4xl font-bold mb-4">
              600 - 2,000 Kč
            </h3>
            <p className="text-xl text-white/90 mb-6">
              Cena opravy podle typu a rozsahu poškození
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="tel:543257540"
                className="bg-white text-primary-700 font-semibold py-3 px-8 rounded-lg hover:bg-accent-50 transition-colors"
              >
                📞 Zavolat: 543 257 540
              </a>
              <button
                onClick={() => document.getElementById('contact').scrollIntoView({ behavior: 'smooth' })}
                className="bg-accent-500 hover:bg-accent-600 text-white font-semibold py-3 px-8 rounded-lg transition-colors"
              >
                💬 Napsat zprávu
              </button>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          {/* Repair Process */}
          <div>
            <h3 className="heading-primary text-2xl lg:text-3xl mb-8">
              Jak probíhá oprava?
            </h3>

            <div className="space-y-6">
              {repairSteps.map((step, index) => (
                <div key={index} className="flex items-start space-x-4">
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 bg-primary-500 text-white rounded-full flex items-center justify-center font-bold text-lg">
                      {step.step}
                    </div>
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center mb-2">
                      <span className="text-2xl mr-2">{step.icon}</span>
                      <h4 className="font-semibold text-lg text-secondary-900">
                        {step.title}
                      </h4>
                    </div>
                    <p className="text-automotive">
                      {step.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            {/* Advantages */}
            <div className="mt-12 card-automotive bg-primary-50">
              <h4 className="heading-primary text-xl mb-4">
                💡 Výhody GLASS REPAIR systému
              </h4>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="flex items-center">
                  <span className="text-green-500 mr-2">✅</span>
                  <span className="text-sm">Rychlá oprava (30 min)</span>
                </div>
                <div className="flex items-center">
                  <span className="text-green-500 mr-2">✅</span>
                  <span className="text-sm">Zachování původního skla</span>
                </div>
                <div className="flex items-center">
                  <span className="text-green-500 mr-2">✅</span>
                  <span className="text-sm">Nižší cena než výměna</span>
                </div>
                <div className="flex items-center">
                  <span className="text-green-500 mr-2">✅</span>
                  <span className="text-sm">Mobilní servis k vám</span>
                </div>
              </div>
            </div>
          </div>

          {/* Repair Limitations */}
          <div>
            <h3 className="heading-primary text-2xl lg:text-3xl mb-8">
              Podmínky opravy
            </h3>

            <div className="space-y-8">
              {repairLimitations.map((limitation, index) => (
                <div key={index} className="card-automotive">
                  <h4 className="font-semibold text-lg mb-4 text-secondary-900">
                    {limitation.type}
                  </h4>
                  <div className="space-y-3">
                    {limitation.items.map((item, itemIndex) => (
                      <div key={itemIndex} className="flex items-start">
                        <span className={`
                          mr-3 text-lg flex-shrink-0
                          ${limitation.type.includes('✅') ? 'text-green-500' : 'text-red-500'}
                        `}>
                          {limitation.type.includes('✅') ? '✅' : '❌'}
                        </span>
                        <span className="text-secondary-700">
                          {item}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>

            {/* Important Notice */}
            <div className="mt-8 bg-accent-50 border-l-4 border-accent-500 p-6 rounded-r-lg">
              <div className="flex items-start">
                <span className="text-accent-600 text-xl mr-3">⚠️</span>
                <div>
                  <h4 className="font-semibold text-accent-800 mb-2">
                    Důležité upozornění
                  </h4>
                  <p className="text-accent-700 text-sm">
                    Poškození v zorném poli řidiče (cca 30 cm od středu volantu)
                    nelze z bezpečnostních důvodů opravovat. V takovém případě
                    doporučujeme výměnu celého skla.
                  </p>
                </div>
              </div>
            </div>

            {/* Mobile Service */}
            <div className="mt-8 card-automotive bg-secondary-50">
              <div className="flex items-center mb-4">
                <span className="text-2xl mr-3">🚗</span>
                <h4 className="heading-primary text-xl">
                  Mobilní servis
                </h4>
              </div>
              <p className="text-automotive mb-4">
                Přijedeme k vám domů, do práce nebo kamkoliv potřebujete.
                Oprava probíhá přímo u vašeho vozidla.
              </p>
              <div className="flex flex-col sm:flex-row gap-3">
                <a
                  href="tel:543257540"
                  className="btn-primary text-center"
                >
                  📞 Objednat mobilní servis
                </a>
                <button
                  onClick={() => document.getElementById('locations').scrollIntoView({ behavior: 'smooth' })}
                  className="btn-secondary text-center"
                >
                  📍 Nebo navštivte pobočku
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default GlassRepair