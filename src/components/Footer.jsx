import { Link } from 'react-router-dom'

const Footer = () => {
  const currentYear = new Date().getFullYear()

  const locations = [
    { city: 'Brno', phones: ['543 257 540', '725 507 969'] },
    { city: 'Olomouc', phones: ['585 313 040', '602 531 742'] },
    { city: 'Hradec Králové', phones: ['495 218 189', '724 816 201'] },
    { city: 'Pardubice', phones: ['466 513 227', '606 311 201'] },
    { city: 'Šumperk', phones: ['583 219 055', '724 219 720'] },
    { city: 'Zlín', phones: ['577 102 530', '602 500 546'] },
    { city: 'Znojmo', phones: ['515 224 448', '603 153 784'] }
  ]

  return (
    <footer className="bg-secondary-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="lg:col-span-1">
            <div className="flex items-center space-x-3 mb-6">
              <div className="w-12 h-12 bg-gradient-automotive rounded-lg flex items-center justify-center">
                <div className="text-white font-bold text-xl">AR</div>
              </div>
              <div>
                <div className="text-xl font-bold">AutoskloRoger</div>
                <div className="text-primary-300 text-sm">s.r.o.</div>
              </div>
            </div>
            <p className="text-secondary-300 mb-6 leading-relaxed">
              Profesionální prodej, výměna a opravy autoskel ve 7 městech ČR.
              Specializujeme se na GLASS REPAIR systém a řešení pojistných událostí.
            </p>
            <div className="text-sm text-secondary-400">
              <p>IČ: [IČ firmy]</p>
              <p>DIČ: [DIČ firmy]</p>
            </div>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-lg font-semibold mb-6">Naše služby</h3>
            <ul className="space-y-3 text-secondary-300">
              <li>
                <Link to="/opravy-skel" className="hover:text-white transition-colors">
                  🔧 Opravy čelních skel
                </Link>
              </li>
              <li>
                <Link to="/pojistovny" className="hover:text-white transition-colors">
                  🛡️ Pojistné události
                </Link>
              </li>
              <li>
                <Link to="/sluzby" className="hover:text-white transition-colors">
                  🌟 Tónování skel
                </Link>
              </li>
              <li>
                <Link to="/sluzby" className="hover:text-white transition-colors">
                  🔥 Opravy topení
                </Link>
              </li>
              <li>
                <Link to="/sluzby" className="hover:text-white transition-colors">
                  🏎️ Pneuservis
                </Link>
              </li>
              <li>
                <Link to="/sluzby" className="hover:text-white transition-colors">
                  🚗 Mobilní servis
                </Link>
              </li>
            </ul>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-6">Rychlé odkazy</h3>
            <ul className="space-y-3 text-secondary-300">
              <li>
                <Link to="/" className="hover:text-white transition-colors">
                  🏠 Domů
                </Link>
              </li>
              <li>
                <Link to="/sluzby" className="hover:text-white transition-colors">
                  🔧 Služby
                </Link>
              </li>
              <li>
                <Link to="/pobocky" className="hover:text-white transition-colors">
                  📍 Pobočky
                </Link>
              </li>
              <li>
                <Link to="/kontakt" className="hover:text-white transition-colors">
                  💬 Kontakt
                </Link>
              </li>
              <li>
                <a
                  href="tel:543257540"
                  className="hover:text-white transition-colors"
                >
                  📞 Zavolat
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold mb-6">Kontakt</h3>
            <div className="space-y-4 text-secondary-300">
              <div>
                <h4 className="font-medium text-white mb-2">Hlavní pobočka (Brno)</h4>
                <p className="text-sm mb-2">
                  Železná 697/4<br />
                  619 00 Brno - Horní Heršpice
                </p>
                <div className="space-y-1">
                  <a
                    href="tel:543257540"
                    className="block hover:text-white transition-colors"
                  >
                    📞 543 257 540
                  </a>
                  <a
                    href="tel:725507969"
                    className="block hover:text-white transition-colors"
                  >
                    📱 725 507 969
                  </a>
                </div>
              </div>

              <div>
                <h4 className="font-medium text-white mb-2">Pracovní doba</h4>
                <div className="text-sm space-y-1">
                  <div>Po-Pá: 8:00-17:00</div>
                  <div>So: 8:00-12:00</div>
                  <div>Ne: Zavřeno</div>
                </div>
              </div>

              <div>
                <h4 className="font-medium text-white mb-2">Pohotovost</h4>
                <a
                  href="tel:725507969"
                  className="text-accent-400 hover:text-accent-300 transition-colors"
                >
                  📞 725 507 969
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* All Locations */}
        <div className="border-t border-secondary-800 mt-12 pt-8">
          <h3 className="text-lg font-semibold mb-6 text-center">Všechny pobočky</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {locations.map((location, index) => (
              <div key={index} className="text-center">
                <h4 className="font-medium text-white mb-2">{location.city}</h4>
                <div className="space-y-1">
                  {location.phones.map((phone, phoneIndex) => (
                    <a
                      key={phoneIndex}
                      href={`tel:${phone.replace(/\s/g, '')}`}
                      className="block text-secondary-300 hover:text-white text-sm transition-colors"
                    >
                      {phone}
                    </a>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-secondary-800 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="text-sm text-secondary-400 mb-4 md:mb-0">
              © {currentYear} AutoskloRoger s.r.o. Všechna práva vyhrazena.
            </div>
            <div className="flex space-x-6 text-sm text-secondary-400">
              <a href="#" className="hover:text-white transition-colors">
                Ochrana údajů
              </a>
              <a href="#" className="hover:text-white transition-colors">
                Obchodní podmínky
              </a>
              <a href="#" className="hover:text-white transition-colors">
                Reklamační řád
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer