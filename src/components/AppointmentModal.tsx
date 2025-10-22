import { useState } from "react";
import { Modal } from "./Modal";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Textarea } from "./ui/textarea";
import { Calendar, Clock, User } from "lucide-react";

interface AppointmentModalProps {
  isOpen: boolean;
  onClose: () => void;
  doctorName?: string;
  specialty?: string;
}

export function AppointmentModal({ isOpen, onClose, doctorName, specialty }: AppointmentModalProps) {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    date: "",
    time: "",
    service: specialty || "",
    message: ""
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Здесь будет логика отправки формы
    console.log("Форма отправлена:", formData);
    alert("Спасибо! Ваша заявка принята. Мы свяжемся с вами в ближайшее время.");
    onClose();
    // Сброс формы
    setFormData({
      name: "",
      phone: "",
      email: "",
      date: "",
      time: "",
      service: "",
      message: ""
    });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const timeSlots = [
    "09:00", "09:30", "10:00", "10:30", "11:00", "11:30",
    "12:00", "12:30", "14:00", "14:30", "15:00", "15:30",
    "16:00", "16:30", "17:00", "17:30", "18:00", "18:30"
  ];

  return (
    <Modal 
      isOpen={isOpen} 
      onClose={onClose}
      title={doctorName ? `Запись к ${doctorName}` : "Запись на приём"}
    >
      <form onSubmit={handleSubmit} className="space-y-4">
        {doctorName && (
          <div className="bg-blue-50 p-4 rounded-lg mb-4">
            <div className="flex items-center space-x-2 mb-2">
              <User className="w-5 h-5 text-blue-600" />
              <span className="font-semibold text-blue-900">{doctorName}</span>
            </div>
            {specialty && (
              <p className="text-sm text-blue-700">{specialty}</p>
            )}
          </div>
        )}

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label className="block mb-2">Имя *</label>
            <Input
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Ваше имя"
              required
            />
          </div>
          <div>
            <label className="block mb-2">Телефон *</label>
            <Input
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              placeholder="+7 (___) ___-__-__"
              required
            />
          </div>
        </div>

        <div>
          <label className="block mb-2">Email</label>
          <Input
            name="email"
            type="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="your@email.com"
          />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label className="block mb-2">Дата приёма *</label>
            <div className="relative">
              <Calendar className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400" />
              <Input
                name="date"
                type="date"
                value={formData.date}
                onChange={handleChange}
                className="pl-10"
                min={new Date().toISOString().split('T')[0]}
                required
              />
            </div>
          </div>
          <div>
            <label className="block mb-2">Время *</label>
            <div className="relative">
              <Clock className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400" />
              <select
                name="time"
                value={formData.time}
                onChange={handleChange}
                className="w-full h-10 pl-10 pr-3 py-2 border border-input bg-background rounded-md"
                required
              >
                <option value="">Выберите время</option>
                {timeSlots.map((time) => (
                  <option key={time} value={time}>{time}</option>
                ))}
              </select>
            </div>
          </div>
        </div>

        <div>
          <label className="block mb-2">Услуга</label>
          <select
            name="service"
            value={formData.service}
            onChange={handleChange}
            className="w-full h-10 px-3 py-2 border border-input bg-background rounded-md"
          >
            <option value="">Выберите услугу</option>
            <option value="consultation">Консультация</option>
            <option value="diagnostics">Диагностика</option>
            <option value="treatment">Лечение</option>
            <option value="preventive">Профилактический осмотр</option>
          </select>
        </div>

        <div>
          <label className="block mb-2">Сообщение</label>
          <Textarea
            name="message"
            value={formData.message}
            onChange={handleChange}
            placeholder="Опишите ваши симптомы или вопросы..."
            className="min-h-[80px]"
          />
        </div>

        <div className="flex flex-col sm:flex-row gap-3 pt-4">
          <Button type="submit" className="flex-1">
            Записаться на приём
          </Button>
          <Button type="button" variant="outline" onClick={onClose} className="flex-1">
            Отмена
          </Button>
        </div>

        <div className="text-sm text-muted-foreground border-t pt-4">
          <p>* Поля обязательны для заполнения</p>
          <p>После отправки заявки наш администратор свяжется с вами для подтверждения записи</p>
        </div>
      </form>
    </Modal>
  );
}