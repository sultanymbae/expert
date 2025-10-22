import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Textarea } from "./ui/textarea";
import { Phone, Mail, MapPin, Clock, MessageCircle } from "lucide-react";

export function ContactSection() {
  return (
    <section id="contact" className="py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold mb-4">
            Контакты и запись
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Свяжитесь с нами удобным способом или запишитесь на приём онлайн
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Contact Information */}
          <div className="lg:col-span-1 space-y-6">
            <Card className="border-0 shadow-md">
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <Phone className="w-5 h-5 text-primary" />
                  <span>Телефон</span>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-lg font-semibold">+996 772-50-34-91</p>
                <p className="text-sm text-muted-foreground">Пн–Пт 8:00–18:00, Сб 8:00–14:00</p>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-md">
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <Mail className="w-5 h-5 text-primary" />
                  <span>Email</span>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-lg font-semibold">uziexpert.kg@gmail.com</p>
                <p className="text-sm text-muted-foreground">Ответим в течение часа</p>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-md">
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <MapPin className="w-5 h-5 text-primary" />
                  <span>Адрес</span>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-lg font-semibold">Койбагарова, 95</p>
                <p className="text-sm text-muted-foreground">Кыргызстан</p>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-md">
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <Clock className="w-5 h-5 text-primary" />
                  <span>Режим работы</span>
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-2">
                <div className="flex justify-between">
                  <span>Пн–Пт:</span>
                  <span className="font-semibold">8:00 - 18:00</span>
                </div>
                <div className="flex justify-between">
                  <span>Сб:</span>
                  <span className="font-semibold">8:00 - 14:00</span>
                </div>
                <p className="text-sm text-muted-foreground">Воскресенье: выходной</p>
              </CardContent>
            </Card>
          </div>

          {/* Contact Form */}
          <div className="lg:col-span-2">
            <Card className="border-0 shadow-md">
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <MessageCircle className="w-5 h-5 text-primary" />
                  <span>Записаться на приём</span>
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <form className="space-y-4">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label className="block mb-2">Имя *</label>
                      <Input placeholder="Ваше имя" required />
                    </div>
                    <div>
                      <label className="block mb-2">Телефон *</label>
                      <Input placeholder="+996 (___) ___-__-__" required />
                    </div>
                  </div>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label className="block mb-2">Email</label>
                      <Input placeholder="your@email.com" type="email" />
                    </div>
                    <div>
                      <label className="block mb-2">Специалист</label>
                      <select className="w-full h-10 px-3 py-2 border border-input bg-background rounded-md">
                        <option value="">Выберите специалиста</option>
                        <option value="cardiologist">Кардиолог</option>
                        <option value="neurologist">Невролог</option>
                        <option value="ophthalmologist">Офтальмолог</option>
                        <option value="therapist">Терапевт</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="block mb-2">Сообщение</label>
                    <Textarea 
                      placeholder="Опишите ваши симптомы или вопросы..."
                      className="min-h-[100px]"
                    />
                  </div>

                  <div className="flex flex-col sm:flex-row gap-4">
                    <Button className="flex-1">
                      Записаться на приём
                    </Button>
                    <Button variant="outline" className="flex-1">
                      Заказать звонок
                    </Button>
                  </div>
                </form>

                <div className="text-sm text-muted-foreground border-t pt-4">
                  <p>* Поля обязательны для заполнения</p>
                  <p>Нажимая кнопку, вы соглашаетесь с <a href="#" className="text-primary hover:underline">политикой конфиденциальности</a></p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
}
