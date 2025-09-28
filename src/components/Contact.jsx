import { useState } from 'react'

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    location: '',
    service: '',
    message: ''
  })

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    alert('Děkujeme za vaši zprávu! Brzy se vám ozveme.')
    setFormData({
      name: '',
      email: '',
      phone: '',
      location: '',
      service: '',
      message: ''
    })
  }

  return (
    <section id="contact" className="py-16 lg:py-20 bg-secondary-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="inline-block bg-accent-100 text-accent-700 px-4 py-2 rounded-full text-sm font-medium mb-4">
            💬 Kontakt
          </div>
          <h2 className="heading-primary text-3xl md:text-4xl lg:text-5xl mb-6">
            Napište nám nebo
            <span className="text-gradient-automotive block">zavolejte</span>
          </h2>
          <p className="text-automotive text-lg lg:text-xl max-w-3xl mx-auto">
            Máte dotaz nebo potřebujete poradit? Rádi vám pomůžeme najít
            nejlepší řešení pro váš vůz.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Contact Form */}
          <div className="card-automotive">
            <h3 className="heading-primary text-2xl mb-6">Poptávkový formulář</h3>

            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-secondary-700 mb-2">
                    Jméno a příjmení *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-secondary-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                    placeholder="Vaše jméno"
                  />
                </div>

                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-secondary-700 mb-2">
                    Telefon *
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    required
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-secondary-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                    placeholder="+420 777 123 456"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium text-secondary-700 mb-2">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-secondary-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                  placeholder="vas@email.cz"
                />
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="location" className="block text-sm font-medium text-secondary-700 mb-2">
                    Preferovaná pobočka
                  </label>
                  <select
                    id="location"
                    name="location"
                    value={formData.location}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-secondary-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                  >
                    <option value="">Vyberte pobočku</option>
                    <option value="brno">Brno</option>
                    <option value="olomouc">Olomouc</option>
                    <option value="hradec">Hradec Králové</option>
                    <option value="pardubice">Pardubice</option>
                    <option value="sumperk">Šumperk</option>
                    <option value="zlin">Zlín</option>
                    <option value="znojmo">Znojmo</option>
                    <option value="mobilni">Mobilní servis</option>
                  </select>
                </div>

                <div>
                  <label htmlFor="service" className="block text-sm font-medium text-secondary-700 mb-2">
                    Typ služby
                  </label>
                  <select
                    id="service"
                    name="service"
                    value={formData.service}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-secondary-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                  >
                    <option value="">Vyberte službu</option>
                    <option value="oprava">Oprava čelního skla</option>
                    <option value="vymena">Výměna autoskla</option>
                    <option value="pojisky">Pojistná událost</option>
                    <option value="tonovani">Tónování skel</option>
                    <option value="topeni">Oprava topení</option>
                    <option value="stresnikon">Střešní okno</option>
                    <option value="kodovani">Kódování skla</option>
                    <option value="pneumatiky">Pneuservis</option>
                    <option value="jine">Jiné</option>
                  </select>
                </div>
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-secondary-700 mb-2">
                  Zpráva *
                </label>
                <textarea
                  id="message"
                  name="message"
                  required
                  rows={6}
                  value={formData.message}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-secondary-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                  placeholder="Popište prosím váš problém nebo požadavek..."
                ></textarea>
              </div>

              <button
                type="submit"
                className="btn-primary w-full py-4"
              >
                📧 Odeslat poptávku
              </button>

              <p className="text-sm text-secondary-500 text-center">
                Odesláním souhlasíte se zpracováním osobních údajů.
              </p>
            </form>
          </div>

          {/* Quick Contact */}
          <div className="space-y-8">
            <div className="card-automotive">
              <h3 className="heading-primary text-2xl mb-6">Rychlý kontakt</h3>

              <div className="space-y-6">
                <div className="flex items-start">
                  <div className="w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center mr-4 flex-shrink-0">
                    <span className="text-primary-600 text-xl">📞</span>
                  </div>
                  <div>
                    <h4 className="font-semibold text-secondary-900 mb-2">
                      Hlavní linka (Brno)
                    </h4>
                    <a
                      href="tel:543257540"
                      className="text-primary-600 hover:text-primary-800 text-lg font-medium"
                    >
                      543 257 540
                    </a>
                    <div className="text-secondary-600 text-sm mt-1">
                      Po-Pá: 8:00-17:00, So: 8:00-12:00
                    </div>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="w-12 h-12 bg-accent-100 rounded-lg flex items-center justify-center mr-4 flex-shrink-0">
                    <span className="text-accent-600 text-xl">🏢</span>
                  </div>
                  <div>
                    <h4 className="font-semibold text-secondary-900 mb-2">
                      Adresa (Brno)
                    </h4>
                    <p className="text-secondary-600">
                      Železná 697/4<br />
                      619 00 Brno - Horní Heršpice
                    </p>
                    <div className="text-accent-600 text-sm font-medium mt-1">
                      🆕 Nová pobočka od 22.7.2024
                    </div>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="w-12 h-12 bg-secondary-100 rounded-lg flex items-center justify-center mr-4 flex-shrink-0">
                    <span className="text-secondary-600 text-xl">🚗</span>
                  </div>
                  <div>
                    <h4 className="font-semibold text-secondary-900 mb-2">
                      Mobilní servis
                    </h4>
                    <p className="text-secondary-600 mb-2">
                      Přijedeme kamkoliv potřebujete
                    </p>
                    <a
                      href="tel:725507969"
                      className="text-primary-600 hover:text-primary-800 font-medium"
                    >
                      📱 725 507 969
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* Emergency Contact */}
            <div className="card-automotive bg-accent-50 border-accent-200">
              <h3 className="heading-primary text-xl mb-4 text-accent-800">
                ⚡ Pohotovostní služba
              </h3>
              <p className="text-accent-700 mb-4">
                Máte naléhavý problém s autosklem? Zavolejte nám,
                pokusíme se vám pomoci i mimo pracovní dobu.
              </p>
              <a
                href="tel:725507969"
                className="btn-accent"
              >
                📞 725 507 969
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Contact