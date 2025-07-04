
import { MessageSquare, Volume2, Eye, Clock, Users, Shield } from "lucide-react";

const Features = () => {
  const features = [
    {
      icon: MessageSquare,
      title: "Simple Conversations",
      description: "Chat in plain English. No technical jargon or complicated terms - just friendly, helpful responses."
    },
    {
      icon: Volume2,
      title: "Voice Support",
      description: "Speak your questions out loud. Perfect for when typing is difficult or inconvenient."
    },
    {
      icon: Eye,
      title: "Large, Clear Text",
      description: "Easy-to-read interface with adjustable text size. Designed for comfortable viewing."
    },
    {
      icon: Clock,
      title: "Patient & Understanding",
      description: "Take your time. Ask the same question multiple times - we're here to help at your pace."
    },
    {
      icon: Users,
      title: "Family-Friendly",
      description: "Connect with family members who can help you remotely and share your progress."
    },
    {
      icon: Shield,
      title: "Safe & Private",
      description: "Your conversations are private and secure. We never share your personal information."
    }
  ];

  return (
    <section id="features" className="py-16 md:py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            Built Specifically for You
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Every feature is designed with seniors in mind. We understand that technology 
            can be overwhelming, so we've made everything as simple and helpful as possible.
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
