const Services = () => {
  const services = [
    {
      icon: "🔧",
      title: "Opravy čelních skel",
      description: "GLASS REPAIR systém pro rychlé a kvalitní opravy prasklin a úderů do 2,5 cm.",
      price: "600 - 2,000 Kč",
      features: [
        "Praskliny do 10 cm",
        "Údeры do 2,5 cm průměru",
        "Mimo zorné pole řidiče",
        "Rychlá oprava na místě"
      ],
      highlight: true
    },
    {
      icon: "🛡️",
      title: "Řešení pojistných událostí",
      description: "Kompletní řešení s pojišťovnami. Bezplatná výměna autoskel při splnění pojistných podmínek.",
      price: "Bezplatně s pojišťovnou",
      features: [
        "Jednání s pojišťovnou",
        "Bezplatná výměna",
        "Rychlé vyřízení",
        "Všechny pojišťovny"
      ]
    },
    {
      icon: "🌟",
      title: "Tónování skel",
      description: "Profesionální tónování autoskel kvalitními fóliemi. Ochrana před sluncem a zvýšené soukromí.",
      price: "Cena na dotaz",
      features: [
        "Kvalitní fólie",
        "UV ochrana",
        "Různé stupně tónování",
        "Dlouhá záruka"
      ]
    },
    {
      icon: "🔥",
      title: "Opravy topení",
      description: "Opravy a výměny topných drátků ve sklech. Obnovení funkčnosti vyhřívání zadních a čelních skel.",
      price: "Cena dle rozsahu",
      features: [
        "Zadní skla",
        "Čelní skla",
        "Boční okna",
        "Zpětná zrcátka"
      ]
    },
    {
      icon: "🏔️",
      title: "Instalace střešních oken",
      description: "Montáž a výměna střešních oken (sunroof). Kompletní servis včetně těsnění a mechanismů.",
      price: "Individuální kalkulace",
      features: [
        "Nová instalace",
        "Výměna stávajících",
        "Opravy mechanismů",
        "Těsnění a údržba"
      ]
    },
    {
      icon: "🔢",
      title: "Kódování autoskel",
      description: "Specializované kódování a programování autoskel s elektronickými prvky a senzory.",
      price: "Dle typu vozidla",
      features: [
        "Rain senzory",
        "Světelné senzory",
        "ADAS systémy",
        "Kalibrační práce"
      ]
    },
    {
      icon: "🏎️",
      title: "Pneuservis",
      description: "Kompletní pneuservis v pobočkách Zlín a Olomouc. Výměna, opravy a vyvážení pneumatik.",
      price: "Aktuální ceník",
      features: [
        "Výměna pneumatik",
        "Opravy defektů",
        "Vyvažování kol",
        "Sezonní uskladnění"
      ],
      locations: ["Zlín", "Olomouc"]
    }
  ]

  return (
    <section id="services" className="py-16 lg:py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-block bg-primary-100 text-primary-700 px-4 py-2 rounded-full text-sm font-medium mb-4">
            🔧 Naše služby
          </div>
          <h2 className="heading-primary text-3xl md:text-4xl lg:text-5xl mb-6">
            Kompletní služby pro
            <span className="text-gradient-automotive block">autoskla a více</span>
          </h2>
          <p className="text-automotive text-lg lg:text-xl max-w-3xl mx-auto">
            Specializujeme se na prodej, výměnu a opravy autoskel. Poskytujeme také související služby
            jako tónování, opravy topení a pneuservis.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className={`
                card-automotive group hover:shadow-deep transition-all duration-300 relative
                ${service.highlight ? 'ring-2 ring-primary-500 ring-opacity-50' : ''}
              `}
            >
              {/* Highlight badge */}
              {service.highlight && (
                <div className="absolute -top-3 left-6 bg-primary-500 text-white px-3 py-1 rounded-full text-xs font-medium">
                  ⭐ Nejpopulárnější
                </div>
              )}

              {/* Location badge */}
              {service.locations && (
                <div className="absolute -top-3 right-6 bg-accent-500 text-white px-3 py-1 rounded-full text-xs font-medium">
                  📍 {service.locations.join(', ')}
                </div>
              )}

              <div className="text-center mb-6">
                <div className="w-16 h-16 bg-gradient-glass rounded-full mx-auto mb-4 flex items-center justify-center text-2xl group-hover:scale-110 transition-transform">
                  {service.icon}
                </div>
                <h3 className="heading-primary text-xl lg:text-2xl mb-3">
                  {service.title}
                </h3>
                <p className="text-automotive mb-4">
                  {service.description}
                </p>
                <div className="text-primary-600 font-bold text-lg">
                  {service.price}
                </div>
              </div>

              {/* Features */}
              <div className="space-y-3 mb-6">
                {service.features.map((feature, featureIndex) => (
                  <div key={featureIndex} className="flex items-center">
                    <div className="w-5 h-5 bg-primary-100 rounded-full flex items-center justify-center mr-3 flex-shrink-0">
                      <div className="w-2 h-2 bg-primary-500 rounded-full"></div>
                    </div>
                    <span className="text-secondary-700 text-sm">{feature}</span>
                  </div>
                ))}
              </div>

              {/* CTA */}
              <button
                onClick={() => document.getElementById('contact').scrollIntoView({ behavior: 'smooth' })}
                className={`
                  w-full py-3 px-4 rounded-lg font-medium transition-colors
                  ${service.highlight
                    ? 'btn-primary'
                    : 'bg-secondary-100 hover:bg-secondary-200 text-secondary-800'
                  }
                `}
              >
                {service.highlight ? '💬 Poptat nyní' : '📞 Zjistit více'}
              </button>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-16">
          <div className="card-automotive max-w-2xl mx-auto">
            <h3 className="heading-primary text-2xl mb-4">
              Potřebujete poradit s výběrem služby?
            </h3>
            <p className="text-automotive mb-6">
              Naši odborníci vám pomohou najít nejlepší řešení pro váš vůz.
              Zavolejte nám nebo nás navštivte v některé z našich poboček.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="tel:543257540"
                className="btn-primary"
              >
                📞 543 257 540 (Brno)
              </a>
              <button
                onClick={() => document.getElementById('locations').scrollIntoView({ behavior: 'smooth' })}
                className="btn-secondary"
              >
                📍 Všechny pobočky
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Services