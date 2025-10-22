import { useState } from "react";
import { Button } from "./ui/button";
import { ImageWithFallback } from "./figma/ImageWithFallback";
import { AboutModal } from "./AboutModal";
import { Calendar, Shield, Award } from "lucide-react";
import Slider from "react-slick";
import clinicEntrance from "figma:asset/e04040c682d3e815de72547afbb85fd56d511b45.png";
import ultrasoundRoom from "figma:asset/a5ed2c378ecf8b8f6a2932d3764a6904de605622.png";
import waitingArea from "figma:asset/a84717c87d7b5631a7f4d78f21b67ee78cfedf07.png";

export function HeroSection() {
  const [isAboutModalOpen, setIsAboutModalOpen] = useState(false);

  const handleAppointmentClick = () => {
    window.open('https://taplink.cc/expert_clinica?fbclid=PAZXh0bgNhZW0CMTEAAafRvOfE7UNuUmka3XZ0iJLUqkcp8qyr2AlXbJLwy7saStshOBQhDWZ7rI6dmg_aem_z3VU1Mvni_pGfgq0VsvWFw', '_blank');
  };

  // Изображения для карусели
  const carouselImages = [
    {
      src: clinicEntrance,
      alt: "Вход в медицинскую клинику Эксперт"
    },
    {
      src: ultrasoundRoom,
      alt: "Кабинет УЗИ-диагностики"
    },
    {
      src: waitingArea,
      alt: "Зал ожидания клиники"
    }
  ];

  // Настройки карусели
  const sliderSettings = {
    dots: false,
    infinite: true,
    speed: 1000,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 8000,
    fade: true,
    pauseOnHover: true,
    arrows: true,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          arrows: false,
          autoplaySpeed: 8000
        }
      }
    ]
  };
  return (
    <section className="bg-gradient-to-br from-blue-50 to-white py-20">
      <div className="container mx-auto px-4">
        <div className="grid sm:grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left content */}
          <div className="space-y-8">
            <div className="space-y-4">
              <h1 className="text-4xl lg:text-5xl font-bold leading-tight">
                Экспертная медицинская помощь{" "}
                <span className="text-primary">для вашего здоровья</span>
              </h1>
              <p className="text-lg text-muted-foreground max-w-lg">
                Современная диагностика, опытные специалисты и индивидуальный подход 
                к каждому пациенту. Ваше здоровье – наш главный приоритет.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="flex items-center space-x-3">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                  <Shield className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <p className="font-semibold">15+ лет</p>
                  <p className="text-sm text-muted-foreground">опыта работы</p>
                </div>
              </div>
              
              <div className="flex items-center space-x-3">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                  <Award className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <p className="font-semibold">50+ врачей</p>
                  <p className="text-sm text-muted-foreground">экспертов</p>
                </div>
              </div>
              
              <div className="flex items-center space-x-3">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                  <Calendar className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <p className="font-semibold">24/7</p>
                  <p className="text-sm text-muted-foreground">поддержка</p>
                </div>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button 
                size="lg" 
                className="px-8"
                onClick={handleAppointmentClick}
              >
                Записаться на приём
              </Button>
              <Button 
                variant="outline" 
                size="lg" 
                className="px-8"
                onClick={() => setIsAboutModalOpen(true)}
              >
                Узнать больше
              </Button>
            </div>
          </div>

          {/* Right carousel */}
          <div className="relative hidden sm:block">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl">
              <Slider {...sliderSettings}>
                {carouselImages.map((image, index) => (
                  <div key={index}>
                    <ImageWithFallback
                      src={image.src}
                      alt={image.alt}
                      className="w-full h-[400px] sm:h-[450px] lg:h-[500px] object-cover"
                    />
                  </div>
                ))}
              </Slider>
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent pointer-events-none"></div>
            </div>
          </div>
        </div>
      </div>

      {/* Модальное окно "Узнать больше" */}
      <AboutModal
        isOpen={isAboutModalOpen}
        onClose={() => setIsAboutModalOpen(false)}
      />
    </section>
  );
}