
import { Star, Quote } from "lucide-react";

const Testimonials = () => {
  const testimonials = [
    {
      name: "Robert M.",
      age: "Age 72",
      text: "This app has been a lifesaver! I can finally understand how to use my smartphone without bothering my grandkids every day. The explanations are so clear and patient.",
      rating: 5
    },
    {
      name: "Margaret S.",
      age: "Age 68",
      text: "I was scared of technology, but TechApp makes it feel friendly. I've learned to video call my family and even order groceries online. Thank you!",
      rating: 5
    },
    {
      name: "Frank D.",
      age: "Age 75",
      text: "The voice feature is amazing. I can just ask questions out loud, and it helps me step by step. Much better than trying to read tiny instruction manuals.",
      rating: 5
    }
  ];

  return (
    <section id="testimonials" className="py-16 md:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            What Our Users Say
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Join thousands of seniors who have discovered the joy of using technology 
            with confidence and independence.
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
              Ready to Get Started?
            </h3>
            <p className="text-xl text-gray-600 mb-8">
              Download TechApp today and discover how easy technology can be.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-lg text-xl font-semibold transition-colors">
                Download for iPhone
              </button>
              <button className="bg-green-600 hover:bg-green-700 text-white px-8 py-4 rounded-lg text-xl font-semibold transition-colors">
                Download for Android
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
