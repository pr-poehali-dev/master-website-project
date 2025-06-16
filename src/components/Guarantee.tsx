import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Icon from "@/components/ui/icon";

const Guarantee = () => {
  return (
    <section className="py-16 px-4 bg-gradient-to-br from-gray-900 to-gray-800 text-white">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Гарантия качества
          </h2>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Предоставляю официальную гарантию на все выполненные работы
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 mb-12">
          <Card className="bg-white/10 backdrop-blur-sm border-white/20">
            <CardHeader>
              <div className="flex items-center mb-4">
                <Icon name="Shield" className="text-green-400 mr-3" size={32} />
                <CardTitle className="text-2xl text-white">
                  Что входит в гарантию
                </CardTitle>
              </div>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex items-start">
                <Icon
                  name="Check"
                  className="text-green-400 mr-3 mt-1"
                  size={20}
                />
                <div>
                  <h4 className="font-semibold text-white mb-1">
                    Качество работ
                  </h4>
                  <p className="text-gray-300">
                    Гарантия на все выполненные работы от 6 месяцев
                  </p>
                </div>
              </div>
              <div className="flex items-start">
                <Icon
                  name="Check"
                  className="text-green-400 mr-3 mt-1"
                  size={20}
                />
                <div>
                  <h4 className="font-semibold text-white mb-1">
                    Используемые материалы
                  </h4>
                  <p className="text-gray-300">
                    Работаю только с проверенными поставщиками
                  </p>
                </div>
              </div>
              <div className="flex items-start">
                <Icon
                  name="Check"
                  className="text-green-400 mr-3 mt-1"
                  size={20}
                />
                <div>
                  <h4 className="font-semibold text-white mb-1">
                    Бесплатное устранение
                  </h4>
                  <p className="text-gray-300">
                    Исправлю любые дефекты в гарантийный период
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="bg-white/10 backdrop-blur-sm border-white/20">
            <CardHeader>
              <div className="flex items-center mb-4">
                <Icon
                  name="FileText"
                  className="text-blue-400 mr-3"
                  size={32}
                />
                <CardTitle className="text-2xl text-white">Документы</CardTitle>
              </div>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex items-start">
                <Icon
                  name="Check"
                  className="text-blue-400 mr-3 mt-1"
                  size={20}
                />
                <div>
                  <h4 className="font-semibold text-white mb-1">
                    Договор на работы
                  </h4>
                  <p className="text-gray-300">
                    Официальное оформление всех услуг
                  </p>
                </div>
              </div>
              <div className="flex items-start">
                <Icon
                  name="Check"
                  className="text-blue-400 mr-3 mt-1"
                  size={20}
                />
                <div>
                  <h4 className="font-semibold text-white mb-1">
                    Гарантийный талон
                  </h4>
                  <p className="text-gray-300">
                    Документ с указанием сроков гарантии
                  </p>
                </div>
              </div>
              <div className="flex items-start">
                <Icon
                  name="Check"
                  className="text-blue-400 mr-3 mt-1"
                  size={20}
                />
                <div>
                  <h4 className="font-semibold text-white mb-1">Смета работ</h4>
                  <p className="text-gray-300">
                    Подробная калькуляция стоимости
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        <div className="text-center">
          <Button
            size="lg"
            className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-4 text-lg"
          >
            <Icon name="Phone" className="mr-2" />
            Заказать работы с гарантией
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Guarantee;
