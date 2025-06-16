import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Icon from "@/components/ui/icon";

const Contact = () => {
  return (
    <section className="py-16 px-4 bg-blue-50">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
          Связаться со мной
        </h2>
        <p className="text-xl text-gray-600 mb-12">
          Готов принять ваш заказ и ответить на любые вопросы
        </p>

        <div className="grid md:grid-cols-2 gap-8 mb-12">
          <Card className="p-6 hover:shadow-lg transition-shadow">
            <CardHeader>
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Icon name="Phone" className="text-green-600" size={32} />
              </div>
              <CardTitle className="text-xl">Позвонить</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-600 mb-4">
                Звоните в любое время с 8:00 до 21:00
              </p>
              <Button className="w-full bg-green-600 hover:bg-green-700">
                <Icon name="Phone" className="mr-2" />
                +7 (999) 123-45-67
              </Button>
            </CardContent>
          </Card>

          <Card className="p-6 hover:shadow-lg transition-shadow">
            <CardHeader>
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Icon
                  name="MessageCircle"
                  className="text-blue-600"
                  size={32}
                />
              </div>
              <CardTitle className="text-xl">WhatsApp</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-600 mb-4">
                Быстрая связь через мессенджер
              </p>
              <Button className="w-full bg-blue-600 hover:bg-blue-700">
                <Icon name="MessageCircle" className="mr-2" />
                Написать в WhatsApp
              </Button>
            </CardContent>
          </Card>
        </div>

        <Card className="p-8 bg-gradient-to-r from-orange-500 to-orange-600 text-white">
          <div className="flex flex-col md:flex-row items-center justify-between">
            <div className="text-left mb-4 md:mb-0">
              <h3 className="text-2xl font-bold mb-2">
                Готов приступить к работе?
              </h3>
              <p className="text-orange-100">
                Опишите задачу — составлю смету и приеду в удобное время
              </p>
            </div>
            <Button
              size="lg"
              variant="outline"
              className="border-white text-white hover:bg-white hover:text-orange-600"
            >
              <Icon name="Clock" className="mr-2" />
              Заказать звонок
            </Button>
          </div>
        </Card>
      </div>
    </section>
  );
};

export default Contact;
