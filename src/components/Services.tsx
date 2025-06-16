import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import Icon from "@/components/ui/icon";

const services = [
  {
    title: "Бытовая техника",
    description: "Ремонт стиральных машин, холодильников, плит, микроволновок",
    icon: "Wrench",
    features: ["Диагностика", "Замена деталей", "Настройка", "Профилактика"],
  },
  {
    title: "Сантехника",
    description: "Установка и ремонт сантехники, устранение протечек",
    icon: "Droplets",
    features: [
      "Замена смесителей",
      "Прочистка труб",
      "Установка унитазов",
      "Ремонт кранов",
    ],
  },
  {
    title: "Электрика",
    description: "Электромонтаж, установка розеток, освещения",
    icon: "Zap",
    features: [
      "Замена проводки",
      "Установка розеток",
      "Подключение люстр",
      "Ремонт выключателей",
    ],
  },
  {
    title: "Строительные работы",
    description: "Отделка, ремонт стен, полов, потолков",
    icon: "Hammer",
    features: [
      "Покраска стен",
      "Укладка плитки",
      "Ремонт полов",
      "Отделка потолков",
    ],
  },
];

const Services = () => {
  return (
    <section className="py-16 px-4 bg-gray-50">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Услуги мастера
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Выполняю работы любой сложности с гарантией качества
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, index) => (
            <Card
              key={index}
              className="hover:shadow-lg transition-shadow duration-300"
            >
              <CardHeader className="text-center">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Icon
                    name={service.icon as any}
                    className="text-blue-600"
                    size={32}
                  />
                </div>
                <CardTitle className="text-xl">{service.title}</CardTitle>
                <CardDescription className="text-gray-600">
                  {service.description}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  {service.features.map((feature, featureIndex) => (
                    <li
                      key={featureIndex}
                      className="flex items-center text-sm text-gray-700"
                    >
                      <Icon
                        name="Check"
                        className="text-green-500 mr-2"
                        size={16}
                      />
                      {feature}
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
