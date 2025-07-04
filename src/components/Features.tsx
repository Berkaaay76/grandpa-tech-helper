
import { MessageSquare, Volume2, Eye, Clock, Users, Shield } from "lucide-react";

const Features = () => {
  const features = [
    {
      icon: MessageSquare,
      title: "Einfache Gespräche",
      description: "Chatten Sie in normalem Deutsch. Keine Fachbegriffe oder komplizierten Ausdrücke - nur freundliche, hilfreiche Antworten."
    },
    {
      icon: Volume2,
      title: "Sprachunterstützung",
      description: "Sprechen Sie Ihre Fragen laut aus. Perfekt, wenn das Tippen schwierig oder unpraktisch ist."
    },
    {
      icon: Eye,
      title: "Große, klare Schrift",
      description: "Leicht lesbare Benutzeroberfläche mit anpassbarer Textgröße. Entwickelt für komfortables Betrachten."
    },
    {
      icon: Clock,
      title: "Geduldig & verständnisvoll",
      description: "Lassen Sie sich Zeit. Stellen Sie dieselbe Frage mehrmals - wir sind hier, um in Ihrem Tempo zu helfen."
    },
    {
      icon: Users,
      title: "Familienfreundlich",
      description: "Verbinden Sie sich mit Familienmitgliedern, die Ihnen aus der Ferne helfen und Ihre Fortschritte teilen können."
    },
    {
      icon: Shield,
      title: "Sicher & privat",
      description: "Ihre Gespräche sind privat und geschützt. Wir geben niemals Ihre persönlichen Daten weiter."
    }
  ];

  return (
    <section id="features" className="py-16 md:py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            Speziell für Sie entwickelt
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Jede Funktion ist mit Senioren im Hinterkopf entwickelt worden. Wir verstehen, dass 
            Technologie überwältigend sein kann, deshalb haben wir alles so einfach und hilfreich wie möglich gemacht.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-shadow">
              <div className="w-16 h-16 bg-blue-100 rounded-lg flex items-center justify-center mb-6">
                <feature.icon className="w-8 h-8 text-blue-600" />
              </div>
              
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                {feature.title}
              </h3>
              
              <p className="text-lg text-gray-600 leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
