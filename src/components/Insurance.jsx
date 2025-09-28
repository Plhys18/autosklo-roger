const Insurance = () => {
  return (
    <section id="insurance" className="py-16 lg:py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="inline-block bg-accent-100 text-accent-700 px-4 py-2 rounded-full text-sm font-medium mb-4">
            🛡️ Pojistné události
          </div>
          <h2 className="heading-primary text-3xl md:text-4xl lg:text-5xl mb-6">
            Řešíme za vás
            <span className="text-gradient-automotive block">pojistné události</span>
          </h2>
          <p className="text-automotive text-lg lg:text-xl max-w-3xl mx-auto">
            Kompletní řešení s pojišťovnami. Vyřídíme za vás vše potřebné
            a často zajistíme bezplatnou výměnu autoskla.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="card-automotive text-center">
            <div className="text-4xl mb-4">🤝</div>
            <h3 className="heading-primary text-xl mb-3">Jednání s pojišťovnou</h3>
            <p className="text-automotive">Kompletně vyřídíme komunikaci s vaší pojišťovnou</p>
          </div>

          <div className="card-automotive text-center">
            <div className="text-4xl mb-4">💰</div>
            <h3 className="heading-primary text-xl mb-3">Bezplatná výměna</h3>
            <p className="text-automotive">Při splnění podmínek pojišťovny je výměna zdarma</p>
          </div>

          <div className="card-automotive text-center">
            <div className="text-4xl mb-4">⚡</div>
            <h3 className="heading-primary text-xl mb-3">Rychlé vyřízení</h3>
            <p className="text-automotive">Minimální administrativa, maximální rychlost</p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Insurance