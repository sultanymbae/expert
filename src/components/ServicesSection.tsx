import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "./ui/card";
import { ServicesModal } from "./ServicesModal";
import { Monitor, Heart, Dna, Activity, Stethoscope, Ear, UserX, Users, Zap, TestTube } from "lucide-react";

export function ServicesSection() {
  const [isServicesModalOpen, setIsServicesModalOpen] = useState(false);
  const services = [
    {
      icon: Monitor,
      title: "УЗИ",
      description: "Ультразвуковая диагностика всех органов и систем организма",
      features: ["УЗИ плода", "УЗИ внутренних органов", "УЗИ 3D и 2D", "Допплерография"]
    },
    {
      icon: Users,
      title: "ГИНЕКОЛОГИЯ",
      description: "Полный спектр услуг по женскому здоровью и репродуктивной медицине",
      features: ["Консультации гинеколога", "УЗИ малого таза", "Кольпоскопия", "Декретный лист"]
    },
    {
      icon: Dna,
      title: "ГЕНЕТИКА",
      description: "Генетическое консультирование и молекулярно-генетические исследования",
      features: ["Консультация генетика", "Генетические анализы", "Повторная консультация", "Наследственные заболевания"]
    },
    {
      icon: Activity,
      title: "КТГ",
      description: "Кардиотокография для мониторинга состояния плода во время беременности",
      features: ["КТГ плода", "КТГ двойня", "Повторное КТГ", "Консультация по результатам"]
    },
    {
      icon: Heart,
      title: "КАРДИОЛОГ",
      description: "Диагностика и лечение заболеваний сердечно-сосудистой системы",
      features: ["Консультация кардиолога", "ЭКГ", "ЭхоКГ", "Повторная консультация"]
    },
    {
      icon: Ear,
      title: "ЛОР",
      description: "Диагностика и лечение заболеваний уха, горла и носа",
      features: ["Консультация ЛОР-врача", "Заглушка", "Повторный приём", "Заглушка"]
    },
    {
      icon: UserX,
      title: "МАММОЛОГ",
      description: "Диагностика и лечение заболеваний молочных желез",
      features: ["Консультация маммолога", "УЗИ молочных желез", "Заглушка", "Вторичный приём"]
    },
    {
      icon: Users,
      title: "УРОЛОГ-АНДРОЛОГ",
      description: "Диагностика и лечение урологических заболеваний у мужчин и женщин",
      features: ["Курс физиолечения 15 дней + массаж простаты", "Массаж простаты", "Курс физиолечения 15 дней (без массажа простаты)", "Удаление папиллом"]
    },
    {
      icon: Zap,
      title: "ЭНДОКРИНОЛОГ",
      description: "Диагностика и лечение заболеваний эндокринной системы",
      features: ["Консультация эндокринолога", "Биопсия шейки матки", "Введение ВМС", "Кольпоскопия"]
    },
    {
      icon: TestTube,
      title: "ПРОЦЕДУРНЫЙ КАБИНЕТ",
      description: "Лабораторные и клинические исследования для точной диагностики",
      features: ["Биохимический анализ", "Анализ RW, ВИЧ", "ЭКГ", "В/в капельница"]
    }
  ];

  return (
    <section id="services" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold mb-4">
            Наши услуги
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Предоставляем полный спектр медицинских услуг с использованием 
            современного оборудования и передовых методик лечения
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <Card key={index} className="group hover:shadow-lg transition-all duration-300 border-0 shadow-md">
              <CardHeader className="pb-4">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                  <service.icon className="w-6 h-6 text-primary" />
                </div>
                <CardTitle className="text-xl">{service.title}</CardTitle>
                <CardDescription className="text-base">
                  {service.description}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-sm">
                      <div className="w-1.5 h-1.5 bg-primary rounded-full mr-3"></div>
                      {feature}
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <button 
            onClick={() => setIsServicesModalOpen(true)}
            className="bg-primary text-primary-foreground px-8 py-3 rounded-lg hover:bg-primary/90 transition-colors"
            style={{ cursor: 'pointer' }}
          >
            Все услуги и цены
          </button>
        </div>
      </div>

      {/* Модальное окно услуг */}
      <ServicesModal
        isOpen={isServicesModalOpen}
        onClose={() => setIsServicesModalOpen(false)}
      />
    </section>
  );
}