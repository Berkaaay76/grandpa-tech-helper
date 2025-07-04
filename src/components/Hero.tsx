
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
              Technology Made
              <span className="text-blue-600 block">Simple & Friendly</span>
            </h1>
            
            <p className="text-xl md:text-2xl text-gray-600 mb-8 leading-relaxed">
              Your personal AI assistant designed specifically for seniors. 
              Get help with smartphones, computers, and everyday technology 
              in simple, easy-to-understand language.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 mb-12">
              <Button size="lg" className="bg-blue-600 hover:bg-blue-700 text-xl px-8 py-4 h-auto">
                <MessageCircle className="w-5 h-5 mr-2" />
                Start Chatting Now
              </Button>
              <Button 
                variant="outline" 
                size="lg" 
                className="border-2 border-blue-600 text-blue-600 hover:bg-blue-50 text-xl px-8 py-4 h-auto"
              >
                Watch Demo Video
              </Button>
            </div>

            {/* Trust indicators */}
            <div className="flex flex-wrap justify-center lg:justify-start items-center gap-6 text-gray-500">
              <div className="flex items-center gap-2">
                <Shield className="w-5 h-5 text-green-500" />
                <span>100% Safe & Secure</span>
              </div>
              <div className="flex items-center gap-2">
                <Heart className="w-5 h-5 text-red-500" />
                <span>Designed with Love</span>
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
                      "How do I make the text bigger on my phone?"
                    </p>
                  </div>
                  
                  <div className="bg-blue-100 rounded-lg p-4">
                    <p className="text-blue-800 text-lg">
                      I'd be happy to help you make the text bigger! Here are the simple steps:
                      
                      1. Go to Settings
                      2. Find "Display" or "Accessibility"
                      3. Look for "Text Size" or "Font Size"
                      4. Move the slider to make it bigger
                      
                      Would you like me to walk you through this step by step?
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
