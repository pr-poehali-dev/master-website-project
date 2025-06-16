import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Icon from "@/components/ui/icon";

const Guarantee = () => {
  return (
    <section className="py-20 px-4 bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900 text-white relative overflow-hidden">
      {/* Декоративные элементы */}
      <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg%20width=%2260%22%20height=%2260%22%20viewBox=%220%200%2060%2060%22%20xmlns=%22http://www.w3.org/2000/svg%22%3E%3Cg%20fill=%22none%22%20fill-rule=%22evenodd%22%3E%3Cg%20fill=%22%23ffffff%22%20fill-opacity=%220.03%22%3E%3Ccircle%20cx=%2230%22%20cy=%2230%22%20r=%222%22/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')] opacity-40"></div>

      <div className="max-w-6xl mx-auto relative z-10">
        <div className="text-center mb-16">
          <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-r from-emerald-400 to-blue-500 rounded-full mb-6">
            <Icon name="ShieldCheck" className="text-white" size={40} />
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-white to-blue-200 bg-clip-text text-transparent">
            Гарантия качества
          </h2>
          <p className="text-xl text-blue-100 max-w-3xl mx-auto leading-relaxed">
            Предоставляю официальную гарантию на все выполненные работы с полным
            документооборотом
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 mb-16">
          <Card className="bg-gradient-to-br from-white/15 to-white/5 backdrop-blur-xl border-white/20 shadow-2xl">
            <CardHeader className="pb-6">
              <div className="flex items-center mb-6">
                <div className="w-14 h-14 bg-gradient-to-r from-emerald-400 to-green-500 rounded-xl flex items-center justify-center mr-4">
                  <Icon name="Shield" className="text-white" size={28} />
                </div>
                <CardTitle className="text-2xl text-white font-bold">
                  Что входит в гарантию
                </CardTitle>
              </div>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="bg-white/10 rounded-xl p-4 border border-white/10">
                <div className="flex items-start">
                  <div className="w-8 h-8 bg-emerald-500 rounded-full flex items-center justify-center mr-4 mt-1">
                    <Icon name="Check" className="text-white" size={16} />
                  </div>
                  <div>
                    <h4 className="font-bold text-white mb-2 text-lg">
                      Качество работ
                    </h4>
                    <p className="text-blue-100">
                      Гарантия на все выполненные работы от 6 месяцев до 2 лет
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-white/10 rounded-xl p-4 border border-white/10">
                <div className="flex items-start">
                  <div className="w-8 h-8 bg-emerald-500 rounded-full flex items-center justify-center mr-4 mt-1">
                    <Icon name="Check" className="text-white" size={16} />
                  </div>
                  <div>
                    <h4 className="font-bold text-white mb-2 text-lg">
                      Используемые материалы
                    </h4>
                    <p className="text-blue-100">
                      Работаю только с проверенными поставщиками и качественными
                      материалами
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-white/10 rounded-xl p-4 border border-white/10">
                <div className="flex items-start">
                  <div className="w-8 h-8 bg-emerald-500 rounded-full flex items-center justify-center mr-4 mt-1">
                    <Icon name="Check" className="text-white" size={16} />
                  </div>
                  <div>
                    <h4 className="font-bold text-white mb-2 text-lg">
                      Бесплатное устранение
                    </h4>
                    <p className="text-blue-100">
                      Исправлю любые дефекты в гарантийный период бесплатно
                    </p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="bg-gradient-to-br from-white/15 to-white/5 backdrop-blur-xl border-white/20 shadow-2xl">
            <CardHeader className="pb-6">
              <div className="flex items-center mb-6">
                <div className="w-14 h-14 bg-gradient-to-r from-blue-400 to-blue-600 rounded-xl flex items-center justify-center mr-4">
                  <Icon name="FileText" className="text-white" size={28} />
                </div>
                <CardTitle className="text-2xl text-white font-bold">
                  Документы
                </CardTitle>
              </div>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="bg-white/10 rounded-xl p-4 border border-white/10">
                <div className="flex items-start">
                  <div className="w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center mr-4 mt-1">
                    <Icon name="FileCheck" className="text-white" size={16} />
                  </div>
                  <div>
                    <h4 className="font-bold text-white mb-2 text-lg">
                      Договор на работы
                    </h4>
                    <p className="text-blue-100">
                      Официальное оформление всех услуг с печатью и подписью
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-white/10 rounded-xl p-4 border border-white/10">
                <div className="flex items-start">
                  <div className="w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center mr-4 mt-1">
                    <Icon name="Award" className="text-white" size={16} />
                  </div>
                  <div>
                    <h4 className="font-bold text-white mb-2 text-lg">
                      Гарантийный талон
                    </h4>
                    <p className="text-blue-100">
                      Документ с указанием точных сроков гарантии на каждый вид
                      работ
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-white/10 rounded-xl p-4 border border-white/10">
                <div className="flex items-start">
                  <div className="w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center mr-4 mt-1">
                    <Icon name="Calculator" className="text-white" size={16} />
                  </div>
                  <div>
                    <h4 className="font-bold text-white mb-2 text-lg">
                      Смета работ
                    </h4>
                    <p className="text-blue-100">
                      Подробная калькуляция с ценами на материалы и работы
                    </p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        <div className="text-center bg-gradient-to-r from-orange-500/20 to-red-500/20 backdrop-blur-sm rounded-2xl p-8 border border-white/10">
          <h3 className="text-2xl font-bold text-white mb-4">
            🏆 Работаю с полной ответственностью
          </h3>
          <p className="text-blue-100 mb-8 text-lg max-w-2xl mx-auto">
            Каждый заказ — это моя репутация. Поэтому выполняю работы
            качественно с первого раза
          </p>
          <Button
            size="lg"
            className="bg-gradient-to-r from-orange-500 to-red-500 hover:from-orange-600 hover:to-red-600 text-white px-12 py-4 text-lg font-semibold rounded-xl shadow-2xl transform hover:scale-105 transition-all duration-200"
          >
            <Icon name="Phone" className="mr-3" size={20} />
            Заказать работы с гарантией
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Guarantee;
