import { useState } from "react";
import { Card, CardContent } from "./ui/card";
import { ImageWithFallback } from "./figma/ImageWithFallback";
import { Star, Award, Clock } from "lucide-react";
import { DoctorsModal } from "./DoctorsModal";
// doctor images
import BulatovaImg from "../assets/Bulatova.png";
import AshirovaImg from "../assets/Ashirova.png";
import DavletalievaImg from "../assets/Davletalieva.png"

export function DoctorsSection() {
  const [isDoctorsModalOpen, setIsDoctorsModalOpen] = useState(false);
  const doctors = [
    {
      name: "Булатова Анара Али-Акбаровна",
      specialty: "Врач УЗИ, акушер-гинеколог",
      experience: "36 лет опыта",
      education: "КГМА им. И.К. Ахунбаева",
      achievements: ["Врач высшей категории", "Сертификат FMF"],
      image: BulatovaImg
    },
    {
      name: "Аширова Зильфира Каримовна",
      specialty: "Врач УЗИ, акушер-гинеколог",
      experience: "26 лет опыта",
      education: "КНМУ им. С.Д. Асфендиярова",
      achievements: ["Врач высшей категории", "Сертификат FMF"],
      image: AshirovaImg
    },
    {
      name: "Давлеталиева Зульфия Анварбековна",
      specialty: "Врач акушер-гинеколог",
      experience: "30 лет опыта",
      education: "КГМА им. И.К. Ахунбаева",
      achievements: [],
      image: DavletalievaImg
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
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <button 
            onClick={() => setIsDoctorsModalOpen(true)}
            className="bg-primary text-primary-foreground px-8 py-3 rounded-lg hover:bg-primary/90 transition-colors"
            style={{ cursor: 'pointer' }}
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