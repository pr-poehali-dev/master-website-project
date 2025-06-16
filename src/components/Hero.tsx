import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import Icon from "@/components/ui/icon";

const Hero = () => {
  return (
    <section className="bg-gradient-to-br from-blue-600 to-blue-800 text-white py-16 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            Мастер на все руки
          </h1>
          <p className="text-xl md:text-2xl mb-8 text-blue-100">
            Качественный ремонт любой сложности • Гарантия на все работы
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
            <Button
              size="lg"
              className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-4 text-lg"
            >
              <Icon name="Phone" className="mr-2" />
              Вызвать мастера
            </Button>
            <Button
              variant="outline"
              size="lg"
              className="border-white text-white hover:bg-white hover:text-blue-800 px-8 py-4 text-lg"
            >
              <Icon name="MessageCircle" className="mr-2" />
              Написать в WhatsApp
            </Button>
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
