import { Dialog, DialogContent, DialogHeader, DialogTitle } from "./ui/dialog";
import { Card, CardContent } from "./ui/card";
import { ImageWithFallback } from "./figma/ImageWithFallback";
import { Star, Clock, Award } from "lucide-react";
//doctor images
import BulatovaImg from "../assets/Bulatova.png";
import AshirovaImg from "../assets/Ashirova.png";
import DavletalievaImg from "../assets/Davletalieva.png"
import MaatkerimovImg from "../assets/Maatkerimov.png"
import TurumbekovaImg from "../assets/Turumbekova.png"
import AlmazbekovaImg from "../assets/Almazbekova.png"
import KurmanalievaImg from "../assets/Kurmanalieva.png"
import VolkovaImg from "../assets/Volkova.png"
import DubovskovaImg from "../assets/Dubovskova.png"
import PodtesovaImg from "../assets/Podtesova.png"
import NarmatovaImg from "../assets/Narmatova.png"
import KimImg from "../assets/Kim.png"
import VasilevskayaImg from "../assets/Vasilevskaya.png"

interface Doctor {
  name: string;
  specialty: string;
  experience: string;
  education: string;
  achievements: string[];
  image: string;
}

interface DoctorsModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export function DoctorsModal({ isOpen, onClose }: DoctorsModalProps) {
  const allDoctors: Doctor[] = [
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
    },
    {
      name: "Мааткеримов Талант Талыпович",
      specialty: "Врач УЗИ",
      experience: "35 лет опыта",
      education: "КГМА им. И.К. Ахунбаева",
      achievements: [],
      image: MaatkerimovImg
    },
    {
      name: "Турумбекова Гулира Турумбековна",
      specialty: "Врач УЗИ, акушер-гинеколог",
      experience: "11 лет опыта",
      education: "КГМА им. И.К. Ахунбаева",
      achievements: ["Сертификат FMF"],
      image: TurumbekovaImg
    },
    {
      name: "Алмазбекова Аида Алмазбековна",
      specialty: "Врач УЗИ, акушер-гинеколог",
      experience: "5 лет опыта",
      education: "КГМА им. И.К. Ахунбаева",
      achievements: ["Сертификат FMF"],
      image: AlmazbekovaImg
    },
    {
      name: "Курманалиева Мээрим Алмазбековна",
      specialty: "Врач-генетик",
      experience: "24 лет опыта",
      education: "КГМА им. И.К. Ахунбаева",
      achievements: [],
      image: KurmanalievaImg
    },
    {
      name: "Волкова Татьяна Алексеевна",
      specialty: "Врач УЗИ, акушер-гинеколог",
      experience: "30 лет опыта",
      education: "ВолгГМУ",
      achievements: ["Врач высшей категории", "Сертификат FMF"],
      image: VolkovaImg
    },
    {
      name: "Абдуллаева Азиза Асраловна",
      specialty: "Врач УЗИ",
      experience: "9 лет опыта",
      education: "КРСУ им. Б.Н. Ельцина",
      achievements: [],
      image: ""
    },
    {
      name: "Дубовскова Светлана Константиновна",
      specialty: "Врач УЗИ",
      experience: "36 лет опыта",
      education: "КГМА им. И.К. Ахунбаева",
      achievements: [],
      image: DubovskovaImg
    },
    {
      name: "Подтёсова Елена Николаевна",
      specialty: "Врач акушер-гинеколог, гинеколог-эндокринолог",
      experience: "25 лет опыта",
      education: "КГМА им. И.К. Ахунбаева",
      achievements: [""],
      image: PodtesovaImg
    },
    {
      name: "Нарматова Динара Балтабаевна",
      specialty: "Врач акушер-гинеколог",
      experience: "35 лет опыта",
      education: "КГМИ областной роддом г. Ош",
      achievements: [],
      image: NarmatovaImg
    },
    {
      name: "Мукаева Жанна Туратбековна",
      specialty: "Врач гинеколог-эндокринолог",
      experience: "7 лет опыта",
      education: "КГМА им. И.К. Ахунбаева",
      achievements: [],
      image: ""
    },
    {
      name: "Ким Лилия Олеговна",
      specialty: "Врач гинеколог-эндокринолог",
      experience: "25 лет опыта",
      education: "КГМА им. И.К. Ахунбаева",
      achievements: [],
      image: KimImg
    },
    {
      name: "Василевская Наталья Михайловна",
      specialty: "Врач гинеколог-эндокринолог",
      experience: "41 год опыта",
      education: "СГМИ им. В.И. Разумовского",
      achievements: [],
      image: VasilevskayaImg
    },
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
                    <div className="flex items-center space-x-1 text-xs text-muted-foreground mb-1">
                      <Clock className="w-4 h-4" />
                      <span>{doctor.experience}</span>
                    </div>
                    <div className="flex items-center space-x-1 text-xs text-muted-foreground">
                      <Award className="w-4 h-4" />
                      <span>{doctor.education}</span>
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