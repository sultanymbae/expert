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
        { name: "УЗИ 2D свыше 2 недель", price: "1,500", duration: "~30 мин" },
        { name: "УЗИ 3D свыше 12 недель", price: "2,000", duration: "~30 мин" },
        { name: "УЗИ доплер 4D", price: "2,500", duration: "~30 мин" },
        { name: "УЗИ 3D/4D", price: "2,500", duration: "~30 мин" },
        { name: "УЗИ доплер 3D", price: "2,000", duration: "~30 мин" },
        { name: "УЗИ гинекология", price: "1,000", duration: "~30 мин" },
        { name: "УЗИ 1й скрининг 4D", price: "2,500", duration: "~30 мин" },
        { name: "УЗИ 2й скрининг 4D", price: "2,500", duration: "~30 мин" },
        { name: "УЗИ 1й скрининг 3D", price: "2,000", duration: "~30 мин" },
        { name: "УЗИ 2й скрининг 3D", price: "2,000", duration: "~30 мин" },
        { name: "УЗИ доплер 2D", price: "1,500", duration: "~30 мин" },
        { name: "УЗИ до 12 недель", price: "1,000", duration: "~30 мин" },
        { name: "УЗИ селезенки", price: "500", duration: "~30 мин" },
        { name: "УЗИ почек", price: "800", duration: "~30 мин" },
        { name: "УЗИ щитовидной железы", price: "800", duration: "~30 мин" },
        { name: "УЗИ молочных желез", price: "1,000", duration: "~30 мин" },
        { name: "УЗИ лимфоузлов", price: "300", duration: "~30 мин" },
        { name: "УЗИ мочевого пузыря", price: "300", duration: "~30 мин" },
        { name: "УЗИ брюшной полости", price: "2,500", duration: "~30 мин" },
        { name: "УЗИ брюшной полости (дети)", price: "1,800", duration: "~30 мин" },
        { name: "УЗИ мягких тканей", price: "400", duration: "~30 мин" },
        { name: "УЗИ яичек", price: "700", duration: "~30 мин" },
        { name: "УЗИ двойня 2D", price: "2,000", duration: "~30 мин" },
        { name: "УЗИ двойня 3D", price: "3,500", duration: "~30 мин" },
        { name: "УЗИ мошонки", price: "1,000", duration: "~30 мин" },
        { name: "Фолликулометрия", price: "500", duration: "~30 мин" },
        { name: "УЗИ простаты", price: "500", duration: "~30 мин" },
        { name: "УЗИ поджелудочной", price: "500", duration: "~30 мин" },
        { name: "Лонное Сочление", price: "500", duration: "~30 мин" },
        { name: "УЗИ гинекология(Virgo)", price: "800", duration: "~30 мин" },
        { name: "УЗИ печени и желчного пузыря", price: "800", duration: "~30 мин" },
        { name: "УЗИ доплер 3D двойня", price: "3,500", duration: "~30 мин" },
        { name: "УЗИ головного мозга", price: "700", duration: "~30 мин" },
        { name: "УЗИ сосудов шеи", price: "1,000", duration: "~30 мин" },
        { name: "УЗИ сосудов верхних конечностей", price: "800", duration: "~30 мин" },
        { name: "УЗИ сосудов нижних конечностей", price: "1,000", duration: "~30 мин" },
        { name: "УЗИ сосудов почек", price: "1,100", duration: "~30 мин" },
        { name: "Транскраниальное дуплексное сканирование сосудов шеи и головного мозга", price: "1,500", duration: "~30 мин" },
        { name: "УЗИ брюшной аорты и нижней полой вены", price: "900", duration: "~30 мин" },
        { name: "ЭхоКГ", price: "1,200", duration: "~30 мин" },
        { name: "ЭКГ", price: "400", duration: "~30 мин" },
        { name: "УЗИ 1й скрининг 2D", price: "1,500", duration: "~30 мин" },
        { name: "УЗИ 2й скрининг 2D", price: "1,500", duration: "~30 мин" },
        { name: "Справка", price: "200", duration: "~30 мин" },
        { name: "УЗИ доплер 2D двойня", price: "2,000", duration: "~30 мин" },
        { name: "УЗИ 3й скрининг 4D", price: "2,500", duration: "~30 мин" },
        { name: "УЗИ беременности 2D свыше 12 недель", price: "1,500", duration: "~30 мин" },
        { name: "УЗИ плода", price: "2,000", duration: "~30 мин" },
        { name: "УЗИ плода свыше 12 недель", price: "1,500", duration: "~30 мин" },
        { name: "УЗИ Тазобедренных суставов", price: "500", duration: "~30 мин" },
        { name: "Тимус", price: "500", duration: "~30 мин" },
        { name: "УЗИ 1й скрининг", price: "2,500", duration: "~30 мин" },
        { name: "УЗИ 2й скрининг", price: "2,500", duration: "~30 мин" },
        { name: "УЗИ 3й скрининг", price: "2,500", duration: "~30 мин" },
        { name: "УЗИ доплер", price: "2,000", duration: "~30 мин" },
        { name: "УЗИ двойня", price: "3,500", duration: "~30 мин" },
        { name: "УЗИ двойня 4D", price: "3,500", duration: "~30 мин" },
        { name: "УЗИ почек с определением функции", price: "800", duration: "~30 мин" },
        { name: "УЗИ печени и желчного пузыря с опр. функции", price: "1,000", duration: "~30 мин" },
        { name: "УЗИ легких", price: "1,100", duration: "~30 мин" },
        { name: "УЗИ превральных полостей", price: "400", duration: "~30 мин" },
        { name: "Биопсия щитовидной железы", price: "2,500", duration: "~30 мин" },
        { name: "УЗИ доплер сосудов шеи", price: "1,000", duration: "~30 мин" },
        { name: "УЗИ доплер сосудов головного мозга", price: "1,100", duration: "~30 мин" },
        { name: "УЗИ доплер сосудов верхних конечностей", price: "1,200", duration: "~30 мин" },
        { name: "УЗИ доплер сосудов нижних конечностей", price: "1,200", duration: "~30 мин" },
        { name: "УЗИ доплер сосудов печени", price: "800", duration: "~30 мин" },
        { name: "УЗИ доплер сосудов почек", price: "900", duration: "~30 мин" },
        { name: "УЗИ доплер брюшного отдела аорты и ее мезентериальных ветвей", price: "1,000", duration: "~30 мин" },
        { name: "УЗИ печени и желчного пузыря с определением сократительной функции", price: "850", duration: "~30 мин" },
        { name: "УЗИ почек и мочеточников", price: "550", duration: "~30 мин" },
        { name: "УЗИ поджелудочной железы", price: "450", duration: "~30 мин" },
        { name: "УЗИ мочевого пузыря с определением остаточной мочи", price: "500", duration: "~30 мин" },
        { name: "УЗИ надпочечников", price: "500", duration: "~30 мин" },
        { name: "УЗИ щитовидной железы и регионарных лимфатических узлов", price: "600", duration: "~30 мин" },
        { name: "УЗИ паращитовидных желез и регионарных лимфатических узлов", price: "600", duration: "~30 мин" },
        { name: "УЗИ молочных желез и регионарных лимфатических узлов", price: "600", duration: "~30 мин" },
        { name: "УЗИ органов мошонки с доплерометрией сосудов", price: "900", duration: "~30 мин" },
        { name: "УЗИ представительной железы", price: "850", duration: "~30 мин" },
        { name: "УЗИ лимфатических узлов", price: "400", duration: "~30 мин" },
        { name: "УЗИ коленных суставов", price: "1,200", duration: "~30 мин" },
        { name: "УЗИ слюнных желез и регионарных лимфатических узлов", price: "500", duration: "~30 мин" },
        { name: "УЗИ 3й скриннинг 2D", price: "1,500", duration: "~30 мин" },
        { name: "УЗИ 3й скриннинг 3D", price: "2,500", duration: "~30 мин" },
        { name: "Лонное сочление", price: "500", duration: "~30 мин" },
      ]
    },
    {
      id: "gynecology",
      name: "ГИНЕКОЛОГИЯ",
      icon: Users,
      color: "text-pink-600",
      services: [
        { name: "Консультация", price: "1,200", duration: "~30 мин" },
        { name: "Детская гинекология", price: "800", duration: "~30 мин" },
        { name: "Постановка на учёт", price: "6,000", duration: "~30 мин" },
        { name: "Введение ВМС (Мирена)", price: "1,500 - 2000", duration: "~30 мин" },
        { name: "Удаление ВМС", price: "1,000", duration: "~30 мин" },
        { name: "МВА", price: "6,000", duration: "~30 мин" },
        { name: "Прижигание", price: "6,500", duration: "~30 мин" },
        { name: "Удаление ЕД кандилом", price: "1,000", duration: "~30 мин" },
        { name: "Удаление МН кандилом", price: "2,500", duration: "~30 мин" },
        { name: "Кольпоскопия", price: "1,200", duration: "~30 мин" },
        { name: "Биопсия шейки матки", price: "1,000", duration: "~30 мин" },
        { name: "Гименопластика", price: "6,000", duration: "~30 мин" },
        { name: "Фарм аборт", price: "6,000", duration: "~30 мин" },
        { name: "Хирургическая коагуляция шейки матки", price: "3,000", duration: "~30 мин" },
        { name: "Швы", price: "2,000", duration: "~30 мин" },
        { name: "Санация", price: "300", duration: "~30 мин" },
        { name: "Разъединение синехии половых губ", price: "2,000", duration: "~30 мин" },
        { name: "Справка", price: "200", duration: "~30 мин" },
        { name: "Повторный приём", price: "1,200", duration: "~30 мин" },
      ]
    },
    {
      id: "genetics", 
      name: "ГЕНЕТИКА",
      icon: Dna,
      color: "text-purple-600",
      services: [
        { name: "Первичный приём", price: "2,000", duration: "~30 мин" },
        { name: "Повторный приём", price: "1,000", duration: "~30 мин" },
        { name: "Справка", price: "300", duration: "~30 мин" },
      ]
    },
    {
      id: "ktg",
      name: "КТГ",
      icon: Activity,
      color: "text-green-600",
      services: [
        { name: "КТГ", price: "1,200", duration: "~30 мин" },
        { name: "КТГ двойня", price: "1,800", duration: "~30 мин" },
        { name: "Справка", price: "200", duration: "~30 мин" },
      ]
    },
    {
      id: "cardiology",
      name: "КАРДИОЛОГ",
      icon: Heart,
      color: "text-red-600",
      services: [
        { name: "ЭХОКГ", price: "1,000", duration: "~30 мин" },
        { name: "ЭКГ", price: "250", duration: "~30 мин" },
        { name: "Первичная консультация", price: "600", duration: "~30 мин" },
        { name: "Повторная консультация", price: "500", duration: "~30 мин" },
        { name: "Справка", price: "200", duration: "~30 мин" },
      ]
    },
    {
      id: "lor",
      name: "ЛОР",
      icon: Ear,
      color: "text-orange-600",
      services: [
        { name: "Первичный приём", price: "600", duration: "~30 мин" },
        { name: "Повторный приём", price: "500", duration: "~30 мин" },
        { name: "Справка", price: "200", duration: "~30 мин" },
        { name: "Промывание", price: "500", duration: "~30 мин" },
        { name: "Пункция, вскрытие", price: "100", duration: "~30 мин" },
        { name: "Удаление инородных тел", price: "600", duration: "~30 мин" },
        { name: "Куф", price: "200", duration: "~30 мин" },
        { name: "Промывание лакун, миндалин", price: "700", duration: "~30 мин" },
        { name: "Продувание евстах.труб", price: "300", duration: "~30 мин" },
        { name: "Катетеризация евстах.труб", price: "500", duration: "~30 мин" },
        { name: "Ямик катетер", price: "2,000", duration: "~30 мин" },
        { name: "Анемизация носовых ходов", price: "200", duration: "~30 мин" },
        { name: "Тонзилор", price: "1,200", duration: "~30 мин" },
      ]
    },
    {
      id: "mammology",
      name: "МАММОЛОГ",
      icon: UserX,
      color: "text-teal-600",
      services: [
        { name: "Первичный приём", price: "800", duration: "~30 мин" },
        { name: "Вторичный приём", price: "700", duration: "~30 мин" },
        { name: "Справка", price: "200", duration: "~30 мин" },
        { name: "УЗИ молочных желез", price: "1,000", duration: "~30 мин" },
      ]
    },
    {
      id: "urology",
      name: "УРОЛОГ-АНДРОЛОГ",
      icon: Users,
      color: "text-indigo-600",
      services: [
        { name: "Первичная консультация", price: "1,000", duration: "~30 мин" },
        { name: "Повторная консультация", price: "600", duration: "~30 мин" },
        { name: "Массаж простаты", price: "550", duration: "~30 мин" },
        { name: "Удаление папиллом", price: "1,000", duration: "~30 мин" },
        { name: "Курс физиолечения 15 дн + массаж простаты", price: "10,100", duration: "~15 дней" },
        { name: "Справка", price: "200", duration: "~30 мин" },
      ]
    },
    {
      id: "endocrinology",
      name: "ЭНДОКРИНОЛОГ",
      icon: Zap,
      color: "text-yellow-600",
      services: [
        { name: "Первичный приём", price: "1,200", duration: "~30 мин" },
        { name: "Повторный приём", price: "1,000", duration: "~30 мин" },
        { name: "Кольпоскопия", price: "1,200", duration: "~30 мин" },
        { name: "Детская гинекология", price: "800", duration: "~30 мин" },
        { name: "Гименопластика", price: "6,000", duration: "~30 мин" },
        { name: "Консультация Д.М.Н.", price: "300", duration: "~30 мин" },
        { name: "Повторный приём ХХХ", price: "1,000", duration: "~30 мин" },
        { name: "Швы", price: "2,000", duration: "~30 мин" },
        { name: "Санация", price: "300", duration: "~30 мин" },
        { name: "Фарм. аборт", price: "6,000", duration: "~30 мин" },
        { name: "Взятие биопсии", price: "1,000", duration: "~30 мин" },
        { name: "МВА (Мануальная вакуумная аспирация)", price: "6,000", duration: "~30 мин" },
        { name: "Удаление ед.кандилом", price: "1,000", duration: "~30 мин" },
        { name: "Удаление мн.кандилом", price: "2,500", duration: "~30 мин" },
        { name: "Хирургическая коагуляция шейки матки", price: "3,000", duration: "~30 мин" },
        { name: "Инсеминация", price: "24,000", duration: "~30 мин" },
        { name: "Справка", price: "200", duration: "~30 мин" },
        { name: "Разъединение синехии малых половых губ", price: "2,000", duration: "~30 мин" },
        { name: "Введение Мирена", price: "1,500", duration: "~30 мин" },
        { name: "Декретный лист", price: "500", duration: "~30 мин" },
        { name: "Аспират из полости матки", price: "1,500", duration: "~30 мин" },
      ]
    },
    {
      id: "procedure",
      name: "ПРОЦЕДУРНЫЙ КАБИНЕТ",
      icon: TestTube,
      color: "text-cyan-600",
      services: [
        { name: "Биохимический анализ", price: "2,600", duration: "15 мин" },
        { name: "НИПТ (Не инвазивный пренатальный тест)", price: "от 17,000", duration: "~30 мин"},
        { name: "Анализы RW, ВИЧ", price: "500", duration: "~30 мин" },
        { name: "Анализ на ВГВ, ВГС (HbsAg)", price: "500", duration: "~30 мин" },
        { name: "В/в капельница", price: "200", duration: "~30 мин" },
        { name: "В/в стр.", price: "100", duration: "~30 мин" },
        { name: "В/м инъекция", price: "50", duration: "~30 мин" },
        { name: "Анализ RW", price: "250", duration: "~30 мин" },
        { name: "Справка", price: "200", duration: "~30 мин" },
        { name: "ЭКГ", price: "600", duration: "~30 мин" },
      ]
    }
  ];

  const popularServices = [
    { name: "УЗИ 2D свыше 2 недель", price: "1,500", category: "УЗИ" },
    { name: "УЗИ 3D/4D", price: "2,500", category: "УЗИ" },
    { name: "КТГ", price: "1,200", category: "КТГ" },
    { name: "КТГ двойня", price: "1,800", category: "КТГ" },
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
                <div className="font-semibold text-primary">{service.price} c</div>
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
                          <div className="font-semibold text-primary ml-4">{service.price} c</div>
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