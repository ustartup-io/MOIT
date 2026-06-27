import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Mail, Phone, MessageCircle, Leaf, Droplets, Zap, Shield, Truck, Palette } from "lucide-react";
import { useState } from "react";
import { toast } from "sonner";

export default function Home() {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.phone || !formData.email) {
      toast.error("Пожалуйста, заполните все поля");
      return;
    }
    toast.success("Спасибо! Мы свяжемся с вами в течение часа");
    setFormData({ name: "", phone: "", email: "", message: "" });
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Navigation */}
      <nav className="sticky top-0 z-50 bg-white/80 backdrop-blur-xl border-b border-border">
        <div className="container flex items-center justify-between py-4">
          <div className="flex items-center gap-2">
            <img src="/manus-storage/logo_terrarium_732e313c.png" alt="Logo" className="w-10 h-10" />
            <span className="font-bold text-lg text-primary">TERRARIUM-MSK</span>
          </div>
          <div className="hidden md:flex gap-8">
            <a href="#features" className="text-sm text-foreground hover:text-primary transition">Услуги</a>
            <a href="#portfolio" className="text-sm text-foreground hover:text-primary transition">Портфолио</a>
            <a href="#process" className="text-sm text-foreground hover:text-primary transition">Процесс</a>
            <a href="#contact" className="text-sm text-foreground hover:text-primary transition">Контакты</a>
          </div>
          <Button size="sm" className="bg-primary hover:bg-primary/90">Заказать</Button>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-background via-background to-secondary/20 py-20 md:py-32">
        <div className="container">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <div className="inline-block px-4 py-2 bg-primary/10 rounded-full">
                <span className="text-sm text-primary font-medium">🌿 Москва • Изготовление на заказ</span>
              </div>
              <h1 className="text-5xl md:text-6xl font-bold text-foreground leading-tight">
                Террариумы, созданные с <span className="text-primary">душой</span>
              </h1>
              <p className="text-lg text-foreground/70 leading-relaxed">
                Эксклюзивные террариумы и вивариумы под заказ в Москве. От эскиза до установки — полный цикл создания живого пространства для вашего питомца.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 pt-4">
                <Button size="lg" className="bg-primary hover:bg-primary/90 text-white">
                  Рассчитать стоимость
                </Button>
                <Button size="lg" variant="outline" className="border-primary text-primary hover:bg-primary/5">
                  Смотреть каталог
                </Button>
              </div>
              <div className="grid grid-cols-3 gap-4 pt-8 border-t border-border">
                <div>
                  <div className="text-3xl font-bold text-primary">200+</div>
                  <p className="text-sm text-foreground/60">проектов</p>
                </div>
                <div>
                  <div className="text-3xl font-bold text-primary">7</div>
                  <p className="text-sm text-foreground/60">лет опыта</p>
                </div>
                <div>
                  <div className="text-3xl font-bold text-primary">100%</div>
                  <p className="text-sm text-foreground/60">ручная работа</p>
                </div>
              </div>
            </div>
            <div className="hidden md:block relative">
              <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-primary/5 rounded-2xl blur-3xl" />
              <img 
                src="/manus-storage/hero_terrarium_9aec1023.png" 
                alt="Premium Terrarium" 
                className="relative rounded-2xl shadow-2xl object-cover w-full h-96"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-20 md:py-32 bg-white">
        <div className="container">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">Почему выбирают нас</h2>
            <p className="text-lg text-foreground/60 max-w-2xl mx-auto">
              Каждый террариум — это уникальный проект, который мы создаём с вниманием к деталям и заботой о животных
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { icon: Palette, title: "Изготовление под заказ", desc: "Любые размеры, формы и конфигурации. Воплощаем даже самые нестандартные проекты." },
              { icon: Leaf, title: "Биотопные дизайны", desc: "Создаём живые экосистемы: тропические джунгли, пустыни, болота и горные ландшафты." },
              { icon: Zap, title: "Умные системы", desc: "Автоматический полив, управление влажностью, освещение и вентиляция под нужды питомца." },
              { icon: Shield, title: "Гарантия качества", desc: "Используем безопасные материалы, соответствующие требованиям для содержания животных." },
              { icon: Truck, title: "Доставка по Москве", desc: "Доставляем и устанавливаем террариумы на месте. Выезд специалиста при необходимости." },
              { icon: Droplets, title: "Дизайн под интерьер", desc: "Подберём цвет, материал и стиль террариума под любой интерьер вашего дома." },
            ].map((feature, i) => (
              <Card key={i} className="p-8 hover:shadow-lg transition-shadow duration-300 border-border/50">
                <feature.icon className="w-12 h-12 text-primary mb-4" />
                <h3 className="text-xl font-bold text-foreground mb-2">{feature.title}</h3>
                <p className="text-foreground/60">{feature.desc}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Portfolio Section */}
      <section id="portfolio" className="py-20 md:py-32 bg-secondary/30">
        <div className="container">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">Наши работы</h2>
            <p className="text-lg text-foreground/60">Несколько примеров реализованных проектов</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { img: "/manus-storage/portfolio_sample_1_96f7c13b.png", title: "Тропический террариум", size: "120×60×90 см" },
              { img: "/manus-storage/portfolio_sample_2_f61ee5dc.png", title: "Пустынный биотоп", size: "150×70×80 см" },
              { img: "/manus-storage/portfolio_sample_1_96f7c13b.png", title: "Паллюдариум с водопадом", size: "80×50×100 см" },
              { img: "/manus-storage/portfolio_sample_2_f61ee5dc.png", title: "Флорариум Wardian", size: "60×40×80 см" },
            ].map((project, i) => (
              <Card key={i} className="overflow-hidden hover:shadow-xl transition-shadow duration-300 border-border/50">
                <img src={project.img} alt={project.title} className="w-full h-48 object-cover" />
                <div className="p-4">
                  <h3 className="font-bold text-foreground">{project.title}</h3>
                  <p className="text-sm text-foreground/60">{project.size}</p>
                </div>
              </Card>
            ))}
          </div>
          <div className="text-center mt-12">
            <Button size="lg" variant="outline" className="border-primary text-primary hover:bg-primary/5">
              Все проекты в каталоге →
            </Button>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section id="process" className="py-20 md:py-32 bg-white">
        <div className="container">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">Как мы работаем</h2>
            <p className="text-lg text-foreground/60">Пошаговый процесс создания вашего идеального террариума</p>
          </div>
          <div className="grid md:grid-cols-4 gap-6">
            {[
              { step: "1", title: "Консультация", desc: "Обсудим ваши пожелания, размеры помещения и потребности питомца" },
              { step: "2", title: "Эскиз", desc: "Создадим визуализацию проекта с учётом вашего интерьера" },
              { step: "3", title: "Изготовление", desc: "Ручная работа: сборка, оформление, установка систем" },
              { step: "4", title: "Установка", desc: "Доставка, монтаж и запуск всех систем на вашей территории" },
            ].map((item, i) => (
              <div key={i} className="text-center">
                <div className="w-16 h-16 bg-primary text-white rounded-full flex items-center justify-center mx-auto mb-4 text-2xl font-bold">
                  {item.step}
                </div>
                <h3 className="text-lg font-bold text-foreground mb-2">{item.title}</h3>
                <p className="text-foreground/60 text-sm">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 md:py-32 bg-secondary/30">
        <div className="container">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">Отзывы клиентов</h2>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { name: "Анна К.", text: "Наш террариум стал сердцем гостиной! Качество работы превосходит ожидания." },
              { name: "Сергей М.", text: "Специалисты учли все детали. Мой питомец чувствует себя идеально в новом доме." },
              { name: "Мария Л.", text: "Профессионализм и внимание к деталям. Рекомендую всем любителям экзотических животных!" },
            ].map((testimonial, i) => (
              <Card key={i} className="p-6 border-border/50 hover:shadow-lg transition-shadow">
                <div className="flex gap-1 mb-4">
                  {[...Array(5)].map((_, j) => (
                    <span key={j} className="text-accent">★</span>
                  ))}
                </div>
                <p className="text-foreground/70 mb-4 italic">"{testimonial.text}"</p>
                <p className="font-bold text-foreground">{testimonial.name}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 md:py-32 bg-white">
        <div className="container">
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <h2 className="text-4xl font-bold text-foreground mb-6">Готовы создать идеальный дом для питомца?</h2>
              <p className="text-lg text-foreground/60 mb-8">
                Оставьте заявку — наш специалист свяжется с вами в течение часа для обсуждения проекта и расчёта стоимости.
              </p>
              <div className="space-y-4">
                <div className="flex items-center gap-4">
                  <Phone className="w-6 h-6 text-primary" />
                  <a href="tel:+74951234567" className="text-foreground hover:text-primary transition">+7 (495) 123-45-67</a>
                </div>
                <div className="flex items-center gap-4">
                  <Mail className="w-6 h-6 text-primary" />
                  <a href="mailto:info@terrarium-msk.ru" className="text-foreground hover:text-primary transition">info@terrarium-msk.ru</a>
                </div>
                <div className="flex items-center gap-4">
                  <MessageCircle className="w-6 h-6 text-primary" />
                  <span className="text-foreground">WhatsApp / Telegram</span>
                </div>
              </div>
            </div>
            <Card className="p-8 border-border/50">
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">Имя</label>
                  <Input
                    type="text"
                    placeholder="Ваше имя"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="border-border"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">Телефон</label>
                  <Input
                    type="tel"
                    placeholder="+7 (___) ___-__-__"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    className="border-border"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">Email</label>
                  <Input
                    type="email"
                    placeholder="your@email.com"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="border-border"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">Описание проекта</label>
                  <Textarea
                    placeholder="Расскажите о вашем питомце и пожеланиях..."
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="border-border"
                  />
                </div>
                <Button type="submit" size="lg" className="w-full bg-primary hover:bg-primary/90 text-white">
                  Оставить заявку
                </Button>
              </form>
            </Card>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-foreground/5 border-t border-border py-12">
        <div className="container">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <img src="/manus-storage/logo_terrarium_732e313c.png" alt="Logo" className="w-8 h-8" />
                <span className="font-bold text-primary">TERRARIUM-MSK</span>
              </div>
              <p className="text-sm text-foreground/60">Эксклюзивные террариумы на заказ. Создаём живые произведения искусства для ваших питомцев.</p>
            </div>
            <div>
              <h4 className="font-bold text-foreground mb-4">Навигация</h4>
              <ul className="space-y-2 text-sm text-foreground/60">
                <li><a href="#features" className="hover:text-primary transition">Услуги</a></li>
                <li><a href="#portfolio" className="hover:text-primary transition">Портфолио</a></li>
                <li><a href="#process" className="hover:text-primary transition">Процесс</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold text-foreground mb-4">Контакты</h4>
              <ul className="space-y-2 text-sm text-foreground/60">
                <li>📍 Москва, РФ</li>
                <li><a href="tel:+74951234567" className="hover:text-primary transition">📞 +7 (495) 123-45-67</a></li>
                <li><a href="mailto:info@terrarium-msk.ru" className="hover:text-primary transition">✉️ info@terrarium-msk.ru</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold text-foreground mb-4">Мессенджеры</h4>
              <ul className="space-y-2 text-sm text-foreground/60">
                <li><a href="#" className="hover:text-primary transition">💬 WhatsApp</a></li>
                <li><a href="#" className="hover:text-primary transition">💬 Telegram</a></li>
              </ul>
            </div>
          </div>
          <div className="border-t border-border pt-8 text-center text-sm text-foreground/60">
            <p>© 2026 TERRARIUM-MSK. Все права защищены.</p>
          </div>
        </div>
      </footer>

      {/* Floating WhatsApp Button */}
      <a
        href="https://wa.me/74951234567"
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 w-14 h-14 bg-primary text-white rounded-full flex items-center justify-center shadow-lg hover:shadow-xl hover:scale-110 transition-all z-40"
      >
        <MessageCircle className="w-6 h-6" />
      </a>
    </div>
  );
}
