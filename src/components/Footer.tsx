
import { Smartphone, Mail, Phone, MapPin } from "lucide-react";

const Footer = () => {
  return (
    <footer id="contact" className="bg-gray-900 text-white py-16 md:py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {/* Company Info */}
          <div className="lg:col-span-2">
            <div className="flex items-center space-x-3 mb-6">
              <div className="w-10 h-10 bg-blue-600 rounded-lg flex items-center justify-center">
                <Smartphone className="w-6 h-6 text-white" />
              </div>
              <span className="text-2xl font-bold">TechApp</span>
            </div>
            
            <p className="text-gray-300 text-lg leading-relaxed mb-6">
              Wir machen Technologie zugänglich und freundlich für Senioren. Unser KI-gestützter 
              Assistent ist hier, um Ihnen dabei zu helfen, sich mit Vertrauen und Leichtigkeit 
              in der digitalen Welt zurechtzufinden.
            </p>
            
            <div className="space-y-3">
              <div className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-blue-400" />
                <span className="text-gray-300">support@techapp.com</span>
              </div>
              <div className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-blue-400" />
                <span className="text-gray-300">0800-TECH-HILFE</span>
              </div>
              <div className="flex items-center gap-3">
                <MapPin className="w-5 h-5 text-blue-400" />
                <span className="text-gray-300">Deutschlandweit verfügbar</span>
              </div>
            </div>
          </div>

          {/* Support */}
          <div>
            <h3 className="text-xl font-bold mb-6">Support</h3>
            <ul className="space-y-3 text-gray-300">
              <li><a href="#" className="hover:text-blue-400 transition-colors">Hilfe-Center</a></li>
              <li><a href="#" className="hover:text-blue-400 transition-colors">Video-Tutorials</a></li>
              <li><a href="#" className="hover:text-blue-400 transition-colors">Kontakt</a></li>
              <li><a href="#" className="hover:text-blue-400 transition-colors">Live-Chat Support</a></li>
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h3 className="text-xl font-bold mb-6">Ressourcen</h3>
            <ul className="space-y-3 text-gray-300">
              <li><a href="#" className="hover:text-blue-400 transition-colors">Erste Schritte</a></li>
              <li><a href="#" className="hover:text-blue-400 transition-colors">Datenschutzrichtlinie</a></li>
              <li><a href="#" className="hover:text-blue-400 transition-colors">Nutzungsbedingungen</a></li>
              <li><a href="#" className="hover:text-blue-400 transition-colors">Barrierefreiheit</a></li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-700 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-gray-400 text-center md:text-left">
              © 2024 TechApp. Alle Rechte vorbehalten. Mit ❤️ für Senioren entwickelt.
            </p>
            <div className="flex gap-6">
              <a href="#" className="text-gray-400 hover:text-blue-400 transition-colors">
                Datenschutz
              </a>
              <a href="#" className="text-gray-400 hover:text-blue-400 transition-colors">
                Bedingungen
              </a>
              <a href="#" className="text-gray-400 hover:text-blue-400 transition-colors">
                Support
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
