import { Phone, Mail, MapPin, Clock } from "lucide-react";
import { Card, CardContent } from "./ui/card";

export function ContactInfo() {
  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl lg:text-4xl font-bold mb-4">
            Контактная информация
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Свяжитесь с нами удобным способом или посетите нашу клинику
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
          {/* Телефон */}
          <Card className="border-0 shadow-md hover:shadow-lg transition-shadow">
            <CardContent className="p-6 text-center">
              <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mx-auto mb-4">
                <Phone className="w-6 h-6 text-primary" />
              </div>
              <h3 className="font-semibold mb-2">Телефон</h3>
              <div className="space-y-1">
                <div className="font-semibold">+996 772-50-34-91</div>
                <div className="text-sm text-muted-foreground">Пн–Пт 8:00–18:00</div>
              </div>
            </CardContent>
          </Card>

          {/* Email */}
          <Card className="border-0 shadow-md hover:shadow-lg transition-shadow">
            <CardContent className="p-6 text-center">
              <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mx-auto mb-4">
                <Mail className="w-6 h-6 text-primary" />
              </div>
              <h3 className="font-semibold mb-2">Email</h3>
              <div className="space-y-1">
                <div className="font-semibold">uziexpert.kg@gmail.com</div>
                <div className="text-sm text-muted-foreground">Ответим в течение часа</div>
              </div>
            </CardContent>
          </Card>

          {/* Адрес */}
          <Card className="border-0 shadow-md hover:shadow-lg transition-shadow">
            <CardContent className="p-6 text-center">
              <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mx-auto mb-4">
                <MapPin className="w-6 h-6 text-primary" />
              </div>
              <h3 className="font-semibold mb-2">Адрес</h3>
              <div className="space-y-1">
                <div className="font-semibold">Койбагарова, 95</div>
                <div className="text-sm text-muted-foreground">Кыргызстан</div>
              </div>
            </CardContent>
          </Card>

          {/* Режим работы */}
          <Card className="border-0 shadow-md hover:shadow-lg transition-shadow">
            <CardContent className="p-6 text-center">
              <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mx-auto mb-4">
                <Clock className="w-6 h-6 text-primary" />
              </div>
              <h3 className="font-semibold mb-2">Режим работы</h3>
              <div className="space-y-1">
                <div className="text-sm"><span className="font-medium">Пн–Пт:</span> 8:00 - 18:00</div>
                <div className="text-sm"><span className="font-medium">Сб:</span> 8:00 - 14:00</div>
                <div className="text-sm text-muted-foreground">Воскресенье: выходной</div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}