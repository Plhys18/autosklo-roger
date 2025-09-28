const Locations = () => {
  const locations = [
    {
      city: "Brno",
      address: "Železná 697/4, 619 00 Brno - Horní Heršpice",
      phones: ["543 257 540", "725 507 969"],
      highlight: true,
      newLocation: true
    },
    {
      city: "Olomouc",
      phones: ["585 313 040", "602 531 742"],
      services: ["Autoskla", "Pneuservis"]
    },
    {
      city: "Hradec Králové",
      phones: ["495 218 189", "724 816 201"]
    },
    {
      city: "Pardubice",
      phones: ["466 513 227", "606 311 201"]
    },
    {
      city: "Šumperk",
      phones: ["583 219 055", "724 219 720"]
    },
    {
      city: "Zlín",
      phones: ["577 102 530", "602 500 546"],
      services: ["Autoskla", "Pneuservis"]
    },
    {
      city: "Znojmo",
      phones: ["515 224 448", "603 153 784"]
    }
  ]

  return (
    <section id="locations" className="py-16 lg:py-20 bg-secondary-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="inline-block bg-primary-100 text-primary-700 px-4 py-2 rounded-full text-sm font-medium mb-4">
            📍 Naše pobočky
          </div>
          <h2 className="heading-primary text-3xl md:text-4xl lg:text-5xl mb-6">
            Jsme ve
            <span className="text-gradient-automotive block">7 městech ČR</span>
          </h2>
          <p className="text-automotive text-lg lg:text-xl max-w-3xl mx-auto">
            Najděte si nejbližší pobočku AutoskloRoger. Všude poskytujeme
            stejně kvalitní služby a profesionální přístup.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {locations.map((location, index) => (
            <div
              key={index}
              className={`
                card-automotive relative
                ${location.highlight ? 'ring-2 ring-primary-500 ring-opacity-50' : ''}
              `}
            >
              {location.newLocation && (
                <div className="absolute -top-3 left-6 bg-accent-500 text-white px-3 py-1 rounded-full text-xs font-medium">
                  🆕 Nová pobočka od 22.7.2024
                </div>
              )}

              <div className="text-center mb-6">
                <h3 className="heading-primary text-2xl mb-3">{location.city}</h3>

                {location.address && (
                  <p className="text-automotive text-sm mb-4">
                    {location.address}
                  </p>
                )}

                <div className="space-y-2 mb-4">
                  {location.phones.map((phone, phoneIndex) => (
                    <a
                      key={phoneIndex}
                      href={`tel:${phone.replace(/\s/g, '')}`}
                      className="block text-primary-600 hover:text-primary-800 font-medium"
                    >
                      📞 {phone}
                    </a>
                  ))}
                </div>

                {location.services && (
                  <div className="flex flex-wrap gap-2 justify-center">
                    {location.services.map((service, serviceIndex) => (
                      <span
                        key={serviceIndex}
                        className="bg-primary-100 text-primary-700 px-3 py-1 rounded-full text-xs font-medium"
                      >
                        {service}
                      </span>
                    ))}
                  </div>
                )}
              </div>

              <a
                href={`tel:${location.phones[0].replace(/\s/g, '')}`}
                className="btn-primary w-full text-center"
              >
                📞 Zavolat
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Locations