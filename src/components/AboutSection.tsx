import { ImageWithFallback } from "./figma/ImageWithFallback";
import { CheckCircle, Users, Award, Microscope } from "lucide-react";
import clinicImage from "../assets/clinicimage.png"

export function AboutSection() {
  const features = [
    {
      icon: Users,
      title: "Опытные специалисты",
      description: "Более 40 врачей с многолетним опытом работы"
    },
    {
      icon: Microscope,
      title: "Современное оборудование",
      description: "Новейшие технологии диагностики и лечения"
    },
    {
      icon: Award,
      title: "Высокие стандарты",
      description: "Соответствие международным стандартам качества"
    },
    {
      icon: CheckCircle,
      title: "Индивидуальный подход",
      description: "Персональные программы лечения для каждого пациента"
    }
  ];

  const stats = [
    { number: "20+", label: "лет работы" },
    { number: "40+", label: "специалистов" },
    { number: "15,000+", label: "пациентов" },
    { number: "98%", label: "положительных отзывов" }
  ];

  return (
    <section id="about" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left content */}
          <div className="space-y-8">
            <div className="space-y-4">
              <h2 className="text-3xl lg:text-4xl font-bold">
                О нашей клинике
              </h2>
              <p className="text-lg text-muted-foreground">
                Медицинский центр «Эксперт» — современный многопрофильный диагностический центр с оборудованием экспертного класса и врачами с опытом более 20 лет. Проводятся пренатальные и биохимические скрининги, НИПС (99%), ведение беременности, приём гинекологов, урологов, андрологов, гастроэнтерологов и эндокринологов для комплексного медицинского обслуживания.
              </p>
            </div>

            {/* Features */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {features.map((feature, index) => (
                <div key={index} className="flex items-start space-x-3">
                  <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <feature.icon className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-semibold mb-1">{feature.title}</h4>
                    <p className="text-sm text-muted-foreground">{feature.description}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 pt-8 border-t">
              {stats.map((stat, index) => (
                <div key={index} className="text-center">
                  <div className="text-2xl font-bold text-primary mb-1">{stat.number}</div>
                  <div className="text-sm text-muted-foreground">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Right image */}
          <div className="relative hidden md:block">
            <div className="relative rounded-2xl overflow-hidden shadow-xl">
              <ImageWithFallback
                src={clinicImage}
                alt="Медицинское оборудование"
                className="w-full h-[500px] object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}