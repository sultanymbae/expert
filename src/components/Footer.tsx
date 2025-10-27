import { Phone, Mail, MapPin, Facebook, Instagram } from "lucide-react";
import logoImage from "figma:asset/068e6f95f3736a0a673cf0904bfb8fd6419f5979.png";

export function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-10">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 max-w-4xl mx-auto">
          {/* Company Info */}
          <div className="space-y-4 flex flex-col items-center md:items-start text-center md:text-left">
            <div className="flex items-center space-x-2">
              <div className="w-10 h-10 md:w-12 md:h-12 flex items-center justify-center">
                <img 
                  src={logoImage} 
                  alt="Клиника Эксперт" 
                  className="w-full h-full object-contain"
                />
              </div>
              <div>
                <h3 className="font-bold text-lg">Клиника «Эксперт»</h3>
                <p className="text-sm text-gray-400">Современная медицина</p>
              </div>
            </div>
            <p className="text-gray-400 max-w-sm">
              Ваше здоровье — наш главный приоритет. Мы предоставляем качественную 
              медицинскую помощь с использованием современных технологий.
            </p>
          </div>

          {/* Contact Info */}
          <div className="space-y-4 flex flex-col items-center md:items-start text-center md:text-left">
            <h4 className="font-semibold text-lg">Контакты</h4>
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <Phone className="w-5 h-5 text-white" />
                <span className="text-gray-400">+996 772-50-34-91</span>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="w-5 h-5 text-white" />
                <span className="text-gray-400">uziexpert.kg@gmail.com</span>
              </div>
              <div className="flex items-center space-x-3">
                <MapPin className="w-5 h-5 text-white" />
                <span className="text-gray-400">Койбагарова, 95</span>
              </div>
            </div>

            {/* Social Media */}
            <div className="space-y-3 pt-2">
              <h5 className="font-semibold">Мы в соцсетях</h5>
              <div className="flex space-x-3">
                <a href="https://www.facebook.com/expertclinica" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors">
                  <Facebook className="w-5 h-5" />
                </a>
                <a href="https://www.instagram.com/expert_clinica" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors">
                  <Instagram className="w-5 h-5" />
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 mt-8 pt-6 flex flex-col justify-between items-center">
          <p className="text-gray-400 text-sm">
            © 2025 Клиника «Эксперт». Все права защищены.
          </p>
        </div>
      </div>
    </footer>
  );
}