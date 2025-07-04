
import { Star, Quote } from "lucide-react";

const Testimonials = () => {
  const testimonials = [
    {
      name: "Robert M.",
      age: "72 Jahre",
      text: "Diese App war ein Lebensretter! Ich kann endlich verstehen, wie ich mein Smartphone benutze, ohne täglich meine Enkelkinder zu stören. Die Erklärungen sind so klar und geduldig.",
      rating: 5
    },
    {
      name: "Margarete S.",
      age: "68 Jahre",
      text: "Ich hatte Angst vor Technologie, aber TechApp macht sie freundlich. Ich habe gelernt, Videoanrufe mit meiner Familie zu führen und sogar online Lebensmittel zu bestellen. Vielen Dank!",
      rating: 5
    },
    {
      name: "Franz D.",
      age: "75 Jahre",
      text: "Die Sprachfunktion ist fantastisch. Ich kann einfach meine Fragen laut stellen, und es hilft mir Schritt für Schritt. Viel besser als winzige Bedienungsanleitungen zu lesen.",
      rating: 5
    }
  ];

  return (
    <section id="testimonials" className="py-16 md:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            Was unsere Nutzer sagen
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Schließen Sie sich Tausenden von Senioren an, die die Freude entdeckt haben, 
            Technologie mit Vertrauen und Selbstständigkeit zu nutzen.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="bg-white rounded-xl p-8 shadow-lg relative">
              <Quote className="w-8 h-8 text-blue-600 mb-4" />
              
              <div className="flex mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 text-yellow-500 fill-current" />
                ))}
              </div>
              
              <p className="text-lg text-gray-700 mb-6 leading-relaxed italic">
                "{testimonial.text}"
              </p>
              
              <div className="border-t pt-4">
                <p className="font-bold text-gray-900 text-lg">{testimonial.name}</p>
                <p className="text-gray-600">{testimonial.age}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <div className="bg-blue-50 rounded-2xl p-8 md:p-12">
            <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
              Bereit anzufangen?
            </h3>
            <p className="text-xl text-gray-600 mb-8">
              Laden Sie TechApp heute herunter und entdecken Sie, wie einfach Technologie sein kann.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-lg text-xl font-semibold transition-colors">
                Für iPhone herunterladen
              </button>
              <button className="bg-green-600 hover:bg-green-700 text-white px-8 py-4 rounded-lg text-xl font-semibold transition-colors">
                Für Android herunterladen
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
