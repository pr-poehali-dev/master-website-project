import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import Icon from "@/components/ui/icon";

const districts = [
  "Центральный район",
  "Северный район",
  "Южный район",
  "Восточный район",
  "Западный район",
  "Ленинский район",
  "Октябрьский район",
  "Железнодорожный район",
];

const WorkingAreas = () => {
  return (
    <section className="py-16 px-4 bg-white">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Районы обслуживания
          </h2>
          <p className="text-xl text-gray-600">
            Работаю во всех районах города • Быстрый выезд в удобное время
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4 mb-12">
          {districts.map((district, index) => (
            <Card
              key={index}
              className="text-center hover:shadow-md transition-shadow"
            >
              <CardContent className="p-4">
                <Icon
                  name="MapPin"
                  className="text-blue-600 mx-auto mb-2"
                  size={24}
                />
                <p className="font-medium text-gray-800">{district}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          <Card className="text-center p-6">
            <CardHeader>
              <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Icon name="Truck" className="text-orange-600" size={32} />
              </div>
              <CardTitle className="text-xl">Быстрый выезд</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-600">
                Приеду в течение часа в любой район города
              </p>
            </CardContent>
          </Card>

          <Card className="text-center p-6">
            <CardHeader>
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Icon name="CheckCircle" className="text-green-600" size={32} />
              </div>
              <CardTitle className="text-xl">Без выходных</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-600">
                Работаю 7 дней в неделю, включая праздники
              </p>
            </CardContent>
          </Card>

          <Card className="text-center p-6">
            <CardHeader>
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Icon name="Star" className="text-blue-600" size={32} />
              </div>
              <CardTitle className="text-xl">Опыт работы</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-600">
                Более 10 лет опыта в сфере ремонта
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default WorkingAreas;
