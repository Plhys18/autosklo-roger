const MobileService = () => {
  return (
    <section className="py-16 lg:py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="inline-block bg-secondary-100 text-secondary-700 px-4 py-2 rounded-full text-sm font-medium mb-4">
            🚗 Mobilní servis
          </div>
          <h2 className="heading-primary text-3xl md:text-4xl lg:text-5xl mb-6">
            Přijedeme
            <span className="text-gradient-automotive block">za vámi</span>
          </h2>
          <p className="text-automotive text-lg lg:text-xl max-w-3xl mx-auto">
            Nabízíme mobilní servis pro opravy a výměny autoskel.
            Ušetříte čas a nemusíte nikam jezdit.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="card-automotive text-center">
            <div className="text-4xl mb-4">🏠</div>
            <h3 className="heading-primary text-xl mb-3">K vám domů</h3>
            <p className="text-automotive">Oprava nebo výměna přímo u vašeho domu</p>
          </div>

          <div className="card-automotive text-center">
            <div className="text-4xl mb-4">🏢</div>
            <h3 className="heading-primary text-xl mb-3">Do práce</h3>
            <p className="text-automotive">Vyřešíme to, když jste v práci</p>
          </div>

          <div className="card-automotive text-center">
            <div className="text-4xl mb-4">📍</div>
            <h3 className="heading-primary text-xl mb-3">Kamkoliv</h3>
            <p className="text-automotive">Na jakékoliv místo dle vašich potřeb</p>
          </div>
        </div>

        <div className="text-center mt-12">
          <a
            href="tel:543257540"
            className="btn-primary text-lg px-8 py-4"
          >
            📞 Objednat mobilní servis: 543 257 540
          </a>
        </div>
      </div>
    </section>
  )
}

export default MobileService