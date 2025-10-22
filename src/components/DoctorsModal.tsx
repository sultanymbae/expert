import { Dialog, DialogContent, DialogHeader, DialogTitle } from "./ui/dialog";
import { Card, CardContent } from "./ui/card";
import { ImageWithFallback } from "./figma/ImageWithFallback";
import { Star } from "lucide-react";

interface Doctor {
  name: string;
  specialty: string;
  achievements: string[];
  rating: number;
  image: string;
}

interface DoctorsModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export function DoctorsModal({ isOpen, onClose }: DoctorsModalProps) {
  const allDoctors: Doctor[] = [
    {
      name: "Иванов Сергей Петрович",
      specialty: "Кардиолог",
      achievements: ["Кандидат медицинских наук", "Врач высшей категории"],
      rating: 4.9,
      image: "https://images.unsplash.com/photo-1615177393114-bd2917a4f74a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkb2N0b3IlMjBwb3J0cmFpdCUyMHByb2Zlc3Npb25hbHxlbnwxfHx8fDE3NTg0NTUzMzR8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
    },
    {
      name: "Петрова Анна Михайловна",
      specialty: "Невролог",
      achievements: ["Врач высшей категории", "Эксперт по мигрени"],
      rating: 4.8,
      image: "https://images.unsplash.com/photo-1615177393114-bd2917a4f74a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkb2N0b3IlMjBwb3J0cmFpdCUyMHByb2Zlc3Npb25hbHxlbnwxfHx8fDE3NTg0NTUzMzR8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
    },
    {
      name: "Сидоров Алексей Владимирович",
      specialty: "Офтальмолог",
      achievements: ["Кандидат медицинских наук", "Врач первой категории"],
      rating: 4.9,
      image: "https://images.unsplash.com/photo-1615177393114-bd2917a4f74a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkb2N0b3IlMjBwb3J0cmFpdCUyMHByb2Zlc3Npb25hbHxlbnwxfHx8fDE3NTg0NTUzMzR8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
    },
    {
      name: "Смирнова Елена Игоревна",
      specialty: "Эндокринолог",
      achievements: ["Врач первой категории", "Специалист по диабету"],
      rating: 4.7,
      image: "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkb2N0b3IlMjBmZW1hbGUlMjBwb3J0cmFpdHxlbnwxfHx8fDE3NTg0NTUzMzR8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
    },
    {
      name: "Козлов Дмитрий Александрович",
      specialty: "Хирург",
      achievements: ["Кандидат медицинских наук", "Врач высшей категории"],
      rating: 4.9,
      image: "https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkb2N0b3IlMjBtYWxlJTIwc3VyZ2VvbnxlbnwxfHx8fDE3NTg0NTUzMzR8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
    },
    {
      name: "Волкова Мария Сергеевна",
      specialty: "Дерматолог",
      achievements: ["Врач первой категории", "Специалист по косметологии"],
      rating: 4.8,
      image: "https://images.unsplash.com/photo-1594824111080-e09ac7668cd0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkb2N0b3IlMjBmZW1hbGUlMjBkZXJtYXRvbG9naXN0fGVufDF8fHx8MTc1ODQ1NTMzNHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
    },
    {
      name: "Орлова Виктория Андреевна",
      specialty: "Гинеколог",
      achievements: ["Кандидат медицинских наук", "Врач высшей категории"],
      rating: 4.9,
      image: "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkb2N0b3IlMjBmZW1hbGUlMjBwb3J0cmFpdHxlbnwxfHx8fDE3NTg0NTUzMzR8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
    },
    {
      name: "Морозов Андрей Викторович",
      specialty: "Уролог",
      achievements: ["Врач высшей категории", "Специалист по урологии"],
      rating: 4.8,
      image: "https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkb2N0b3IlMjBtYWxlJTIwc3VyZ2VvbnxlbnwxfHx8fDE3NTg0NTUzMzR8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
    },
    {
      name: "Зайцева Ольга Николаевна",
      specialty: "Педиатр",
      achievements: ["Кандидат медицинских наук", "Врач высшей категории"],
      rating: 4.9,
      image: "https://images.unsplash.com/photo-1594824111080-e09ac7668cd0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkb2N0b3IlMjBmZW1hbGUlMjBkZXJtYXRvbG9naXN0fGVufDF8fHx8MTc1ODQ1NTMzNHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
    }
  ];

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-6xl w-[95vw] max-h-[90vh] overflow-hidden p-0">
        <div className="p-6 border-b">
          <DialogHeader>
            <DialogTitle className="text-2xl font-bold">
              Все врачи клиники
            </DialogTitle>
            <p className="text-muted-foreground">
              Наша команда опытных специалистов готова помочь вам
            </p>
          </DialogHeader>
        </div>
        
        <div className="overflow-y-auto p-6 max-h-[calc(90vh-140px)]">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {allDoctors.map((doctor, index) => (
              <Card key={index} className="group hover:shadow-lg transition-all duration-300 border-0 shadow-md overflow-hidden">
                <div className="relative">
                  <ImageWithFallback
                    src={doctor.image}
                    alt={doctor.name}
                    className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute top-3 right-3 bg-white/90 backdrop-blur-sm rounded-lg px-2 py-1 flex items-center space-x-1">
                    <Star className="w-3 h-3 text-yellow-400 fill-current" />
                    <span className="text-sm font-semibold">{doctor.rating}</span>
                  </div>
                </div>
                
                <CardContent className="p-4">
                  <div className="space-y-3">
                    <div>
                      <h3 className="font-bold text-base mb-1">{doctor.name}</h3>
                      <p className="text-primary font-semibold text-sm">{doctor.specialty}</p>
                    </div>

                    <div className="space-y-1">
                      {doctor.achievements.map((achievement, achievementIndex) => (
                        <p key={achievementIndex} className="text-xs text-muted-foreground">
                          • {achievement}
                        </p>
                      ))}
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}