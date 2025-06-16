import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import Icon from "@/components/ui/icon";

const Hero = () => {
  return (
    <section className="from-blue-600 to-blue-800 text-white py-16 px-4 bg-blue-500">
      <div className="max-w-6xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 items-center mb-12">
          <div className="text-center lg:text-left">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Мастер на все руки
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-blue-100">
              Качественный ремонт любой сложности • Гарантия на все работы
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start items-center">
              <Button
                size="lg"
                className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-4 text-lg"
              >
                <Icon name="Phone" className="mr-2" />
                Вызвать мастера
              </Button>
              <Button
                size="lg"
                className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-4 text-lg"
              >
                <Icon name="MessageCircle" className="mr-2" />
                Написать в WhatsApp
              </Button>
            </div>
          </div>

          <div className="relative">
            <img
              src="https://cdn.poehali.dev/files/026fdeaa-015d-41ef-895c-2bf5f63e1cf6.jpeg"
              alt="Профессиональный мастер за работой"
              className="rounded-lg shadow-2xl w-full h-auto object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-blue-900/20 to-transparent rounded-lg"></div>
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          <Card className="p-6 bg-white/10 backdrop-blur-sm border-white/20">
            <div className="flex items-center mb-4">
              <Icon name="Clock" className="text-orange-400 mr-3" size={24} />
              <h3 className="text-lg font-semibold">Режим работы</h3>
            </div>
            <p className="text-blue-100">
              7 дней в неделю
              <br />с 8:00 до 21:00
            </p>
          </Card>

          <Card className="p-6 bg-white/10 backdrop-blur-sm border-white/20">
            <div className="flex items-center mb-4">
              <Icon name="MapPin" className="text-orange-400 mr-3" size={24} />
              <h3 className="text-lg font-semibold">Районы работы</h3>
            </div>
            <p className="text-blue-100">
              Все районы города
              <br />
              Быстрый выезд
            </p>
          </Card>

          <Card className="p-6 bg-white/10 backdrop-blur-sm border-white/20">
            <div className="flex items-center mb-4">
              <Icon name="Shield" className="text-orange-400 mr-3" size={24} />
              <h3 className="text-lg font-semibold">Гарантия</h3>
            </div>
            <p className="text-blue-100">
              На все виды работ
              <br />
              Официальные документы
            </p>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Hero;
