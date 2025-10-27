import { useState } from "react";
import { Card, CardContent } from "./ui/card";
import { ImageWithFallback } from "./figma/ImageWithFallback";
import { Star, Award, Clock } from "lucide-react";
import { DoctorsModal } from "./DoctorsModal";

export function DoctorsSection() {
  const [isDoctorsModalOpen, setIsDoctorsModalOpen] = useState(false);
  const doctors = [
    {
      name: "Булатова Анара Али-Акбаровна",
      specialty: "Врач УЗИ, акушер-гинеколог",
      experience: "15 лет опыта",
      education: "КГМА им. И.К. Ахунбаева",
      achievements: ["Врач высшей категории", "Сертификат FMF"],
      rating: 4.9,
      reviews: 127,
      image: ""
    },
    {
      name: "Аширова Зильфира Каримовна",
      specialty: "Врач УЗИ, акушер-гинеколог",
      experience: "12 лет опыта",
      education: "КНМУ им. С.Д. Асфендиярова",
      achievements: ["Врач высшей категории", "Сертификат FMF"],
      rating: 4.8,
      reviews: 89,
      image: "https://images.unsplash.com/photo-1615177393114-bd2917a4f74a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkb2N0b3IlMjBwb3J0cmFpdCUyMHByb2Zlc3Npb25hbHxlbnwxfHx8fDE3NTg0NTUzMzR8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
    },
    {
      name: "Давлеталиева Зульфия Анварбековна",
      specialty: "Врач акушер-гинеколог",
      experience: "10 лет опыта",
      education: "КГМА им. И.К. Ахунбаева",
      achievements: [],
      rating: 4.9,
      reviews: 156,
      image: "https://images.unsplash.com/photo-1615177393114-bd2917a4f74a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkb2N0b3IlMjBwb3J0cmFpdCUyMHByb2Zlc3Npb25hbHxlbnwxfHx8fDE3NTg0NTUzMzR8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
    }
  ];

  return (
    <section id="doctors" className="py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold mb-4">
            Наши врачи
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Команда высококвалифицированных специалистов с многолетним опытом 
            и глубокими знаниями в своих областях
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {doctors.map((doctor, index) => (
            <Card key={index} className="group hover:shadow-lg transition-all duration-300 border-0 shadow-md overflow-hidden">
              <div className="relative">
                <ImageWithFallback
                  src={doctor.image}
                  alt={doctor.name}
                  className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm rounded-lg px-3 py-1 flex items-center space-x-1">
                  <Star className="w-4 h-4 text-yellow-400 fill-current" />
                  <span className="font-semibold">{doctor.rating}</span>
                </div>
              </div>
              
              <CardContent className="p-6">
                <div className="space-y-4">
                  <div>
                    <h3 className="font-bold text-lg mb-1">{doctor.name}</h3>
                    <p className="text-primary font-semibold">{doctor.specialty}</p>
                  </div>

                  <div className="space-y-2">
                    <div className="flex items-center space-x-2 text-sm text-muted-foreground">
                      <Clock className="w-4 h-4" />
                      <span>{doctor.experience}</span>
                    </div>
                    <div className="flex items-center space-x-2 text-sm text-muted-foreground">
                      <Award className="w-4 h-4" />
                      <span>{doctor.education}</span>
                    </div>
                  </div>

                  <div className="space-y-1">
                    {doctor.achievements.map((achievement, achievementIndex) => (
                      <p key={achievementIndex} className="text-sm text-muted-foreground">
                        • {achievement}
                      </p>
                    ))}
                  </div>

                  <div className="flex items-center justify-center pt-4 border-t">
                    <div className="text-sm text-muted-foreground">
                      {doctor.reviews} отзывов
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <button 
            onClick={() => setIsDoctorsModalOpen(true)}
            className="bg-primary text-primary-foreground px-8 py-3 rounded-lg hover:bg-primary/90 transition-colors"
          >
            Все врачи клиники
          </button>
        </div>

        <DoctorsModal 
          isOpen={isDoctorsModalOpen}
          onClose={() => setIsDoctorsModalOpen(false)}
        />
      </div>
    </section>
  );
}