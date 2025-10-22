import { Modal } from "./Modal";
import { ImageWithFallback } from "./figma/ImageWithFallback";
import { Award, Users, Clock, Shield, Heart, Star } from "lucide-react";

interface AboutModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export function AboutModal({ isOpen, onClose }: AboutModalProps) {
  const stats = [
    { icon: Users, value: "15,000+", label: "Пациентов в год" },
    { icon: Award, value: "50+", label: "Опытных врачей" },
    { icon: Clock, value: "15", label: "Лет на рынке" },
    { icon: Shield, value: "99.8%", label: "Безопасность процедур" },
  ];

  const advantages = [
    {
      title: "Современное оборудование",
      description: "Используем новейшие медицинские технологии и оборудование от ведущих мировых производителей"
    },
    {
      title: "Команда экспертов",
      description: "Наши врачи имеют высшую квалификацию и постоянно повышают свою квалификацию"
    },
    {
      title: "Индивидуальный подход",
      description: "Каждый пациент получает персональный план лечения и постоянную поддержку"
    },
    {
      title: "Комфортная среда",
      description: "Современные кабинеты, дружелюбный персонал и атмосфера заботы о пациентах"
    }
  ];

  return (
    <Modal isOpen={isOpen} onClose={onClose} title="О нашей клинике">
      <div className="space-y-6">
        {/* Основная информация */}
        <div>
          <h3 className="font-semibold mb-3">Экспертная медицинская клиника</h3>
          <p className="text-muted-foreground leading-relaxed">
            Уже более 15 лет мы предоставляем высококачественные медицинские услуги, 
            сочетая традиционные методы лечения с инновационными технологиями. 
            Наша миссия — обеспечить каждому пациенту доступ к экспертной медицинской 
            помощи в комфортной и безопасной среде.
          </p>
        </div>

        {/* Статистика */}
        <div className="grid grid-cols-2 gap-4">
          {stats.map((stat, index) => (
            <div key={index} className="text-center p-4 bg-muted/30 rounded-lg">
              <stat.icon className="w-6 h-6 text-primary mx-auto mb-2" />
              <div className="font-semibold text-lg">{stat.value}</div>
              <div className="text-sm text-muted-foreground">{stat.label}</div>
            </div>
          ))}
        </div>

        {/* Преимущества */}
        <div>
          <h4 className="font-semibold mb-4">Наши преимущества</h4>
          <div className="space-y-4">
            {advantages.map((advantage, index) => (
              <div key={index} className="flex space-x-3">
                <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                <div>
                  <h5 className="font-medium mb-1">{advantage.title}</h5>
                  <p className="text-sm text-muted-foreground">{advantage.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Лицензии и сертификаты */}
        <div className="bg-blue-50 p-4 rounded-lg">
          <div className="flex items-center space-x-2 mb-2">
            <Shield className="w-5 h-5 text-blue-600" />
            <h4 className="font-semibold text-blue-900">Лицензии и аккредитация</h4>
          </div>
          <p className="text-sm text-blue-800">
            Клиника имеет все необходимые лицензии Министерства здравоохранения РФ 
            и международные сертификаты качества ISO 9001:2015
          </p>
        </div>

        {/* Отзывы */}
        <div>
          <h4 className="font-semibold mb-3">Что говорят наши пациенты</h4>
          <div className="bg-muted/30 p-4 rounded-lg">
            <div className="flex items-center space-x-1 mb-2">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-4 h-4 text-yellow-400 fill-current" />
              ))}
              <span className="font-semibold ml-2">4.9/5</span>
            </div>
            <p className="text-sm text-muted-foreground italic">
              "Профессиональная команда, современное оборудование и внимательное отношение. 
              Рекомендую всем, кто ценит качественную медицинскую помощь."
            </p>
            <p className="text-xs text-muted-foreground mt-2">— Анна М., пациент клиники</p>
          </div>
        </div>
      </div>
    </Modal>
  );
}