
import { Button } from "@/components/ui/button";
import { MessageCircle, Heart, Shield } from "lucide-react";

const Hero = () => {
  return (
    <section className="py-12 md:py-20 lg:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="text-center lg:text-left">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight mb-6">
              Technologie wird
              <span className="text-blue-600 block">einfach & freundlich</span>
            </h1>
            
            <p className="text-xl md:text-2xl text-gray-600 mb-8 leading-relaxed">
              Ihr persönlicher KI-Assistent, speziell für Senioren entwickelt. 
              Erhalten Sie Hilfe bei Smartphones, Computern und alltäglicher Technologie 
              in einfacher, verständlicher Sprache.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 mb-12">
              <Button size="lg" className="bg-blue-600 hover:bg-blue-700 text-xl px-8 py-4 h-auto">
                <MessageCircle className="w-5 h-5 mr-2" />
                Jetzt chatten
              </Button>
              <Button 
                variant="outline" 
                size="lg" 
                className="border-2 border-blue-600 text-blue-600 hover:bg-blue-50 text-xl px-8 py-4 h-auto"
              >
                Demo-Video ansehen
              </Button>
            </div>

            {/* Trust indicators */}
            <div className="flex flex-wrap justify-center lg:justify-start items-center gap-6 text-gray-500">
              <div className="flex items-center gap-2">
                <Shield className="w-5 h-5 text-green-500" />
                <span>100% sicher & geschützt</span>
              </div>
              <div className="flex items-center gap-2">
                <Heart className="w-5 h-5 text-red-500" />
                <span>Mit Liebe entwickelt</span>
              </div>
            </div>
          </div>

          {/* Image/Phone mockup */}
          <div className="relative">
            <div className="bg-gradient-to-br from-blue-100 to-blue-200 rounded-3xl p-8 md:p-12">
              <div className="bg-white rounded-2xl shadow-2xl p-6 md:p-8">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                  <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                  <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                </div>
                
                <div className="space-y-4">
                  <div className="bg-gray-100 rounded-lg p-4">
                    <p className="text-gray-800 text-lg">
                      "Wie mache ich die Schrift auf meinem Handy größer?"
                    </p>
                  </div>
                  
                  <div className="bg-blue-100 rounded-lg p-4">
                    <p className="text-blue-800 text-lg">
                      Gerne helfe ich Ihnen dabei, die Schrift größer zu machen! Hier sind die einfachen Schritte:
                      
                      1. Gehen Sie zu Einstellungen
                      2. Finden Sie "Anzeige" oder "Bedienungshilfen"
                      3. Suchen Sie nach "Textgröße" oder "Schriftgröße"
                      4. Schieben Sie den Regler, um die Schrift zu vergrößern
                      
                      Soll ich Sie Schritt für Schritt durch diesen Prozess führen?
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
