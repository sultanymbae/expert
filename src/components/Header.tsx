import { Menu, Phone, Mail, MapPin } from "lucide-react";
import { Button } from "./ui/button";
import logoImage from "figma:asset/068e6f95f3736a0a673cf0904bfb8fd6419f5979.png";

export function Header() {
  const handleAppointmentClick = () => {
    // Редирект на внешний сайт записи
    window.open('https://taplink.cc/expert_clinica?fbclid=PAZXh0bgNhZW0CMTEAAafRvOfE7UNuUmka3XZ0iJLUqkcp8qyr2AlXbJLwy7saStshOBQhDWZ7rI6dmg_aem_z3VU1Mvni_pGfgq0VsvWFw', '_blank');
  };
  return (
    <header className="w-full bg-white shadow-sm md:fixed md:top-0 md:left-0 md:right-0 md:z-50">
      {/* Top contact bar */}
      <div className="bg-primary text-primary-foreground py-2 hidden md:block">
        <div className="container mx-auto px-4 flex justify-between items-center">
          <div className="flex items-center space-x-6">
            <div className="flex items-center space-x-2">
              <Phone className="w-4 h-4" />
              <span>+996 772-50-34-91</span>
            </div>
            <div className="flex items-center space-x-2">
              <Mail className="w-4 h-4" />
              <span>uziexpert.kg@gmail.com</span>
            </div>
            <div className="flex items-center space-x-2">
              <MapPin className="w-4 h-4" />
              <span>Койбагарова, 95</span>
            </div>
          </div>
          <div className="text-sm">
            Пн–Пт 8:00–18:00, Сб 8:00–14:00
          </div>
        </div>
      </div>

      {/* Main navigation */}
      <div className="container mx-auto px-4 py-4">
        <div className="flex justify-between items-center">
          <div className="flex items-center space-x-2">
            {/* Логотип клиники */}
            <div className="w-10 h-10 md:w-12 md:h-12 flex items-center justify-center">
              <img 
                src={logoImage} 
                alt="Клиника Эксперт" 
                className="w-full h-full object-contain"
              />
            </div>
            <div>
              <h1 className="font-bold text-xl">Клиника «Эксперт»</h1>
              <p className="text-sm text-muted-foreground">Современная медицина</p>
            </div>
          </div>

          <nav className="hidden md:flex items-center space-x-8">
            <a href="#" className="hover:text-primary transition-colors">Главная</a>
            <a href="#services" className="hover:text-primary transition-colors">Услуги</a>
            <a href="#doctors" className="hover:text-primary transition-colors">Врачи</a>
            <a href="#about" className="hover:text-primary transition-colors">О клинике</a>
            <a href="#contact" className="hover:text-primary transition-colors">Контакты</a>
          </nav>

          <div className="flex items-center space-x-4">
            <Button 
              variant="outline" 
              className="hidden md:inline-flex"
              onClick={handleAppointmentClick}
              style={{ cursor: 'pointer' }}
            >
              Записаться онлайн
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
}
