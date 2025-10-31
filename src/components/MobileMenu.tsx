import { X, Phone, Mail, MapPin, Facebook, Instagram } from "lucide-react";
import { Button } from "./ui/button";

interface MobileMenuProps {
  isOpen: boolean;
  onClose: () => void;
  onAppointmentClick: () => void;
  onNavClick: (href: string) => void;
}

export function MobileMenu({ isOpen, onClose, onAppointmentClick, onNavClick }: MobileMenuProps) {
  if (!isOpen) return null;

  return (
    <>
      {/* Overlay */}
      <div
        className="fixed inset-0 bg-black/50 z-[9998]"
        onClick={onClose}
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          backgroundColor: 'rgba(0, 0, 0, 0.5)',
          zIndex: 9998,
          animation: 'fadeIn 0.3s ease-out',
        }}
      />

      {/* Menu Panel */}
      <div
        className="fixed top-0 right-0 bottom-0 w-[300px] bg-white shadow-xl z-[9999] overflow-y-auto"
        style={{
          position: 'fixed',
          top: 0,
          right: 0,
          bottom: 0,
          width: '300px',
          maxWidth: '85vw',
          backgroundColor: '#ffffff',
          boxShadow: '-2px 0 8px rgba(0, 0, 0, 0.1)',
          zIndex: 9999,
          overflowY: 'auto',
          animation: 'slideInRight 0.3s ease-out',
        }}
      >
        {/* Header with close button */}
        <div className="flex justify-between items-center p-4 border-b">
          <h2 className="font-semibold text-lg">Меню</h2>
          <button
            onClick={onClose}
            className="p-2 hover:bg-gray-100 rounded-md transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Navigation */}
        <nav className="flex flex-col items-start py-2 md:text-left">
          <button
            onClick={() => onNavClick('#')}
            className="px-4 py-3 text-left hover:bg-gray-100 transition-colors"
          >
            Главная
          </button>
          <button
            onClick={() => onNavClick('#services')}
            className="px-4 py-3 text-left hover:bg-gray-100 transition-colors"
          >
            Услуги
          </button>
          <button
            onClick={() => onNavClick('#doctors')}
            className="px-4 py-3 text-left hover:bg-gray-100 transition-colors"
          >
            Врачи
          </button>
          <button
            onClick={() => onNavClick('#about')}
            className="px-4 py-3 text-left hover:bg-gray-100 transition-colors"
          >
            О клинике
          </button>
        </nav>

        <div className="border-t my-2" />

        {/* Contact Information */}
        <div className="px-4 py-4">
          <h3 className="font-semibold mb-3">Контакты</h3>
          
          <div className="space-y-3">
            <div className="flex items-start space-x-3">
              <MapPin className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
              <span className="text-sm text-gray-700">Койбагарова, 95</span>
            </div>
            
            <a 
              href="tel:+996772503491" 
              className="flex items-start space-x-3 hover:text-primary transition-colors"
            >
              <Phone className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
              <span className="text-sm text-gray-700">+996 772-50-34-91</span>
            </a>
            
            <a 
              href="mailto:uziexpert.kg@gmail.com" 
              className="flex items-start space-x-3 hover:text-primary transition-colors"
            >
              <Mail className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
              <span className="text-sm text-gray-700 break-all">uziexpert.kg@gmail.com</span>
            </a>
          </div>
        </div>

        <div className="border-t my-2" />

        {/* Social Media */}
        <div className="px-4 py-4">
          <h3 className="font-semibold mb-3">Мы в соцсетях</h3>
          
          <div className="flex items-center space-x-4">
            <a 
              href="https://www.facebook.com/expertclinica" 
              target="_blank" 
              rel="noopener noreferrer"
              className="w-10 h-10 flex items-center justify-center rounded-full bg-gray-100 hover:bg-primary hover:text-white transition-colors"
            >
              <Facebook className="w-5 h-5" />
            </a>
            
            <a 
              href="https://www.instagram.com/expert_clinica" 
              target="_blank" 
              rel="noopener noreferrer"
              className="w-10 h-10 flex items-center justify-center rounded-full bg-gray-100 hover:bg-primary hover:text-white transition-colors"
            >
              <Instagram className="w-5 h-5" />
            </a>
          </div>
        </div>

        {/* Appointment Button */}
        <div className="px-4 py-4">
          <Button 
            className="w-full"
            onClick={() => {
              onAppointmentClick();
              onClose();
            }}
          >
            Записаться онлайн
          </Button>
        </div>
      </div>
    </>
  );
}
