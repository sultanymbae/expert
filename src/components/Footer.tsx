import { Phone, Mail, MapPin, Facebook, Instagram } from "lucide-react";
import logoImage from "figma:asset/068e6f95f3736a0a673cf0904bfb8fd6419f5979.png";

export function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-10">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-8 max-w-6xl mx-auto">
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

          {/* 2GIS Map */}
    <div className="relative w-full h-[200px] sm:h-[350px] md:h-[400px] lg:h-[450px] overflow-hidden rounded-2xl shadow-xl transition-transform duration-300 hover:scale-[1.02]">
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3184.5535907145522!2d74.6144293764086!3d42.840690571152166!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x389eb701e7490051%3A0xd411ab2cf21c3503!2z0JrQu9C40L3QuNC60LAg0K3QutGB0L_QtdGA0YI!5e1!3m2!1sru!2skg!4v1761797618432!5m2!1sru!2skg"
        width="100%"
        height="100%"
        style={{ border: 0 }}
        allowFullScreen=""
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
        className="absolute inset-0"
      ></iframe>
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
              <h5 className="font-semibold">Мы в соцсетях</h5>
              <div className="flex space-x-4">
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
        <div className="border-t border-gray-800 mt-8 pt-6 flex justify-center items-center">
          <p className="text-gray-400 text-sm">
            © 2025 Клиника «Эксперт». Все права защищены.
          </p>
        </div>
      </div>
    </footer>
  );
}