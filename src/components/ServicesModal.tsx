import { Modal } from "./Modal";
import { Badge } from "./ui/badge";
import { Card, CardContent } from "./ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "./ui/tabs";
import { Monitor, Users, Dna, Activity, Heart, Ear, UserX, Zap, TestTube } from "lucide-react";

interface ServicesModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export function ServicesModal({ isOpen, onClose }: ServicesModalProps) {
  const serviceCategories = [
    {
      id: "uzi",
      name: "УЗИ",
      icon: Monitor,
      color: "text-blue-600",
      services: [
        { name: "УЗИ органов брюшной полости", price: "3,500", duration: "30 мин" },
        { name: "УЗИ сердца (ЭхоКГ)", price: "4,500", duration: "30 мин" },
        { name: "УЗИ малого таза", price: "3,200", duration: "25 мин" },
        { name: "УЗИ щитовидной железы", price: "2,800", duration: "20 мин" },
        { name: "Допплерография сосудов", price: "4,200", duration: "35 мин" },
      ]
    },
    {
      id: "gynecology",
      name: "ГИНЕКОЛОГИЯ",
      icon: Users,
      color: "text-pink-600",
      services: [
        { name: "Консультация гинеколога", price: "3,200", duration: "45 мин" },
        { name: "УЗИ малого таза гинекологическое", price: "3,500", duration: "25 мин" },
        { name: "Кольпоскопия", price: "4,800", duration: "30 мин" },
        { name: "Цитологическое исследование", price: "2,500", duration: "15 мин" },
        { name: "Лечение эрозии шейки матки", price: "от 8,000", duration: "45 мин" },
      ]
    },
    {
      id: "genetics", 
      name: "ГЕНЕТИКА",
      icon: Dna,
      color: "text-purple-600",
      services: [
        { name: "Консультация врача-генетика", price: "5,500", duration: "60 мин" },
        { name: "Молекулярно-генетический анализ", price: "от 12,000", duration: "7-14 дней" },
        { name: "Пренатальная генетическая диагностика", price: "от 18,000", duration: "10-14 дней" },
        { name: "Кариотипирование", price: "8,500", duration: "14-21 день" },
        { name: "Генетический скрининг новорожденных", price: "6,800", duration: "5-7 дней" },
      ]
    },
    {
      id: "ktg",
      name: "КТГ",
      icon: Activity,
      color: "text-green-600",
      services: [
        { name: "КТГ плода стандартное", price: "2,800", duration: "30 мин" },
        { name: "КТГ с нагрузочными тестами", price: "3,500", duration: "45 мин" },
        { name: "Антенатальное КТГ", price: "3,200", duration: "40 мин" },
        { name: "КТГ при многоплодной беременности", price: "4,200", duration: "50 мин" },
        { name: "Экстренное КТГ", price: "3,800", duration: "30 мин" },
      ]
    },
    {
      id: "cardiology",
      name: "КАРДИОЛОГ",
      icon: Heart,
      color: "text-red-600",
      services: [
        { name: "Консультация кардиолога", price: "3,500", duration: "45 мин" },
        { name: "ЭКГ", price: "1,200", duration: "15 мин" },
        { name: "ЭхоКГ (УЗИ сердца)", price: "4,500", duration: "30 мин" },
        { name: "Холтеровское мониторирование", price: "6,000", duration: "24 часа" },
        { name: "Нагрузочные тесты", price: "8,500", duration: "60 мин" },
      ]
    },
    {
      id: "lor",
      name: "ЛОР",
      icon: Ear,
      color: "text-orange-600",
      services: [
        { name: "Консультация ЛОР-врача", price: "3,000", duration: "30 мин" },
        { name: "Эндоскопия ЛОР-органов", price: "4,500", duration: "25 мин" },
        { name: "Аудиометрия", price: "2,800", duration: "20 мин" },
        { name: "Лечение синуситов", price: "от 5,500", duration: "45 мин" },
        { name: "Удаление серных пробок", price: "1,800", duration: "15 мин" },
      ]
    },
    {
      id: "mammology",
      name: "МАММОЛОГ",
      icon: UserX,
      color: "text-teal-600",
      services: [
        { name: "Консультация маммолога", price: "3,200", duration: "40 мин" },
        { name: "УЗИ молочных желез", price: "3,500", duration: "25 мин" },
        { name: "Маммография", price: "4,800", duration: "15 мин" },
        { name: "Биопсия молочной железы", price: "12,000", duration: "30 мин" },
        { name: "Контрольное УЗИ после лечения", price: "3,200", duration: "20 мин" },
      ]
    },
    {
      id: "urology",
      name: "УРОЛОГ-АНДРОЛОГ",
      icon: Users,
      color: "text-indigo-600",
      services: [
        { name: "Консультация уролога", price: "3,500", duration: "45 мин" },
        { name: "УЗИ мочеполовой системы", price: "3,800", duration: "30 мин" },
        { name: "Андрологическое обследование", price: "4,500", duration: "50 мин" },
        { name: "Лечение простатита", price: "от 8,000", duration: "60 мин" },
        { name: "Спермограмма", price: "2,800", duration: "5 мин" },
      ]
    },
    {
      id: "endocrinology",
      name: "ЭНДОКРИНОЛОГ",
      icon: Zap,
      color: "text-yellow-600",
      services: [
        { name: "Консультация эндокринолога", price: "3,500", duration: "45 мин" },
        { name: "УЗИ щитовидной железы", price: "2,800", duration: "20 мин" },
        { name: "Гормональные исследования (комплекс)", price: "8,500", duration: "1 день" },
        { name: "Лечение сахарного диабета", price: "от 4,500", duration: "60 мин" },
        { name: "Подбор инсулинотерапии", price: "5,200", duration: "50 мин" },
      ]
    },
    {
      id: "procedure",
      name: "ПРОЦЕДУРНЫЙ КАБИНЕТ",
      icon: TestTube,
      color: "text-cyan-600",
      services: [
        { name: "Биохимический анализ", price: "2,500", duration: "15 мин" },
      ]
    }
  ];

  const popularServices = [
    { name: "УЗИ органов брюшной полости", price: "3,500", category: "УЗИ" },
    { name: "Консультация кардиолога + ЭКГ", price: "4,700", category: "КАРДИОЛОГ" },
    { name: "Гинекологическое обследование", price: "6,700", category: "ГИНЕКОЛОГИЯ" },
    { name: "КТГ плода с нагрузочными тестами", price: "3,500", category: "КТГ" },
  ];

  return (
    <Modal isOpen={isOpen} onClose={onClose} title="Услуги и цены">
      <div className="space-y-6">
        {/* Популярные услуги */}
        <div>
          <h3 className="font-semibold mb-4">Популярные услуги</h3>
          <div className="grid gap-3">
            {popularServices.map((service, index) => (
              <div key={index} className="flex justify-between items-center p-3 bg-muted/30 rounded-lg">
                <div>
                  <div className="font-medium">{service.name}</div>
                  <Badge variant="secondary" className="text-xs mt-1">{service.category}</Badge>
                </div>
                <div className="font-semibold text-primary">{service.price} ₽</div>
              </div>
            ))}
          </div>
        </div>

        {/* Услуги по категориям */}
        <div>
          <h3 className="font-semibold mb-4">Все услуги</h3>
          <Tabs defaultValue="uzi" className="w-full">
            <TabsList className="grid w-full grid-cols-2 lg:grid-cols-3 gap-1 h-auto p-1">
              {serviceCategories.map((category) => (
                <TabsTrigger 
                  key={category.id} 
                  value={category.id}
                  className="flex flex-col items-center gap-1 p-3 text-xs whitespace-nowrap"
                >
                  <category.icon className={`w-4 h-4 ${category.color}`} />
                  <span className="text-center leading-tight">{category.name}</span>
                </TabsTrigger>
              ))}
            </TabsList>

            {serviceCategories.map((category) => (
              <TabsContent key={category.id} value={category.id} className="mt-4">
                <Card>
                  <CardContent className="p-4">
                    <div className="flex items-center space-x-2 mb-4">
                      <category.icon className={`w-5 h-5 ${category.color}`} />
                      <h4 className="font-semibold">{category.name}</h4>
                    </div>
                    
                    <div className="space-y-3">
                      {category.services.map((service, index) => (
                        <div key={index} className="flex justify-between items-start py-2 border-b border-border/50 last:border-0">
                          <div className="flex-1">
                            <div className="font-medium">{service.name}</div>
                            <div className="text-sm text-muted-foreground">{service.duration}</div>
                          </div>
                          <div className="font-semibold text-primary ml-4">{service.price} ₽</div>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>
            ))}
          </Tabs>
        </div>

        {/* Информация о ценах */}
        <div className="bg-blue-50 p-4 rounded-lg">
          <h4 className="font-semibold text-blue-900 mb-2">Информация о ценах</h4>
          <ul className="text-sm text-blue-800 space-y-1">
            <li>• Цены указаны без учета дополнительных исследований</li>
            <li>• Возможна рассрочка платежа для дорогостоящих процедур</li>
            <li>• Действуют скидки для постоянных пациентов</li>
            <li>• Принимаем полисы ДМС ведущих страховых компаний</li>
          </ul>
        </div>

        <div className="text-center pt-4 border-t">
          <p className="text-sm text-muted-foreground mb-3">
            Не нашли нужную услугу? Свяжитесь с нами для получения консультации
          </p>
          <div className="space-y-2 text-sm">
            <div><strong>Телефон:</strong> +996 772-50-34-91</div>
            <div><strong>Email:</strong> uziexpert.kg@gmail.com</div>
          </div>
        </div>
      </div>
    </Modal>
  );
}