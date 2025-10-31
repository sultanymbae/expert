import { useState, useEffect } from "react";
import { Menu, Phone, Mail, MapPin } from "lucide-react";
import { Button } from "./ui/button";
import { MobileMenu } from "./MobileMenu";
import logoImage from "figma:asset/068e6f95f3736a0a673cf0904bfb8fd6419f5979.png";

export function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const handleAppointmentClick = () => {
    // Редирект на внешний сайт записи
    window.open('https://taplink.cc/expert_clinica?fbclid=PAZXh0bgNhZW0CMTEAAafRvOfE7UNuUmka3XZ0iJLUqkcp8qyr2AlXbJLwy7saStshOBQhDWZ7rI6dmg_aem_z3VU1Mvni_pGfgq0VsvWFw', '_blank');
  };

  const handleNavClick = (href: string) => {
    setIsMobileMenuOpen(false);
    // Небольшая задержка для плавного закрытия меню перед прокруткой
    setTimeout(() => {
      if (href === '#') {
        window.scrollTo({ top: 0, behavior: 'smooth' });
      } else {
        const element = document.querySelector(href);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      }
    }, 100);
  };

  // Блокируем прокрутку body когда меню открыто
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [isMobileMenuOpen]);
  return (
    <header className="w-full bg-white shadow-sm md:fixed md:top-0 md:left-0 md:right-0 md:z-50">
      {/* Top contact bar */}
      <div className="bg-primary text-primary-foreground py-2 hidden md:block">
        <div className="container mx-auto px-4 flex justify-between items-center">
          <div className="flex items-center space-x-6">
            <div className="flex items-center space-x-2">
              <Phone className="w-4 h-4" />
              <span>+996 (772) 503 491</span>
              <span>+996 (706) 503 491</span>
              <span>+996 (556) 503 491</span>
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
          </nav>

          <div className="flex items-center space-x-4">
            <Button 
              variant="outline" 
              className="hidden md:inline-flex"
              onClick={handleAppointmentClick}
            >
              Записаться онлайн
            </Button>
            
            {/* Бургер-меню для мобильных */}
            <Button 
              variant="ghost" 
              size="icon" 
              className="md:hidden"
              onClick={() => setIsMobileMenuOpen(true)}
            >
              <Menu className="w-6 h-6" />
            </Button>
          </div>
        </div>
      </div>

      {/* Мобильное меню */}
      <MobileMenu
        isOpen={isMobileMenuOpen}
        onClose={() => setIsMobileMenuOpen(false)}
        onAppointmentClick={handleAppointmentClick}
        onNavClick={handleNavClick}
      />
    </header>
  );
}
