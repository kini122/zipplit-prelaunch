import { useState } from "react";
import { Calendar, Zap, Leaf, Heart, Users, Mail, Facebook, Instagram, Twitter, Briefcase, TrendingUp, ClipboardList, Settings } from "lucide-react";

export default function Index() {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSignup = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      setSubmitted(true);
      setEmail("");
      setTimeout(() => setSubmitted(false), 3000);
    }
  };

  return (
    <div
      className="w-full overflow-hidden bg-white"
      style={{
        backgroundImage: "url(https://cdn.builder.io/api/v1/image/assets%2F2aea7158bf6b409ba9a64ab0f37870bb%2Fa60b8421277f4b9f9027148a9bdfaa03)",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
        backgroundSize: "cover"
      }}
    >
      {/* Hero Section */}
      <section className="relative min-h-screen bg-gradient-to-br from-teal-500 via-teal-600 to-teal-700 pt-20 px-4 sm:px-6 lg:px-8 flex items-center justify-center">
        {/* Animated background pattern */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-10 right-10 w-72 h-72 bg-lime-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse-subtle"></div>
          <div className="absolute bottom-10 left-10 w-72 h-72 bg-lime-400 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse-subtle" style={{ animationDelay: "2s" }}></div>
        </div>

        <div className="relative z-10 w-full max-w-4xl mx-auto text-center">
          {/* Logo */}
          <div className="mb-8 animate-fade-in">
            <img
              src="https://cdn.builder.io/api/v1/image/assets%2F2aea7158bf6b409ba9a64ab0f37870bb%2F5d9e4e2414a6480bbade330f0c7cbe3d?format=webp&width=800&height=1200"
              alt="Zipplit Logo"
              className="w-32 h-32 sm:w-40 sm:h-40 mx-auto object-contain"
            />
          </div>

          {/* Main Headline */}
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-4 animate-slide-up" style={{ animationDelay: "0.1s" }}>
            Fresh. Healthy. Delivered.
          </h1>

          {/* Subheadline */}
          <p className="text-lg sm:text-xl text-lime-100 mb-10 animate-slide-up" style={{ animationDelay: "0.2s" }}>
            100% Preservative-Free Meals in Kochi
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center animate-slide-up" style={{ animationDelay: "0.3s" }}>
            <button className="px-8 py-3 bg-lime-500 text-teal-700 font-bold rounded-lg hover:bg-lime-400 transition-all duration-300 hover:shadow-lg hover:scale-105 animate-pulse-subtle">
              Order Now
            </button>
            <button className="px-8 py-3 bg-white/20 text-white font-bold rounded-lg border-2 border-white hover:bg-white/30 transition-all duration-300">
              View Plans
            </button>
          </div>
        </div>
      </section>

      {/* What We Do Section */}
      <section className="py-16 sm:py-24 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-bold text-teal-700 text-center mb-12 animate-fade-in">
            What We Do
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Card 1 */}
            <div className="group p-8 bg-white border-2 border-teal-100 rounded-lg hover:border-lime-500 hover:shadow-xl transition-all duration-300 hover:-translate-y-2 animate-slide-up" style={{ animationDelay: "0.1s" }}>
              <div className="flex justify-center mb-6">
                <div className="p-4 bg-lime-100 rounded-full group-hover:bg-lime-500 transition-colors duration-300">
                  <Calendar className="w-8 h-8 text-teal-700 group-hover:text-white transition-colors duration-300" />
                </div>
              </div>
              <h3 className="text-xl font-bold text-teal-700 text-center mb-2">Periodic Plans</h3>
              <p className="text-gray-600 text-center text-sm">Choose your preferred delivery schedule and meal options</p>
            </div>

            {/* Card 2 */}
            <div className="group p-8 bg-white border-2 border-teal-100 rounded-lg hover:border-lime-500 hover:shadow-xl transition-all duration-300 hover:-translate-y-2 animate-slide-up" style={{ animationDelay: "0.2s" }}>
              <div className="flex justify-center mb-6">
                <div className="p-4 bg-lime-100 rounded-full group-hover:bg-lime-500 transition-colors duration-300">
                  <Zap className="w-8 h-8 text-teal-700 group-hover:text-white transition-colors duration-300" />
                </div>
              </div>
              <h3 className="text-xl font-bold text-teal-700 text-center mb-2">Quick Delivery</h3>
              <p className="text-gray-600 text-center text-sm">Fresh meals delivered quickly to your doorstep</p>
            </div>

            {/* Card 3 */}
            <div className="group p-8 bg-white border-2 border-teal-100 rounded-lg hover:border-lime-500 hover:shadow-xl transition-all duration-300 hover:-translate-y-2 animate-slide-up" style={{ animationDelay: "0.3s" }}>
              <div className="flex justify-center mb-6">
                <div className="p-4 bg-lime-100 rounded-full group-hover:bg-lime-500 transition-colors duration-300">
                  <Leaf className="w-8 h-8 text-teal-700 group-hover:text-white transition-colors duration-300" />
                </div>
              </div>
              <h3 className="text-xl font-bold text-teal-700 text-center mb-2">Pure Food</h3>
              <p className="text-gray-600 text-center text-sm">100% preservative-free, made with fresh ingredients</p>
            </div>
          </div>
        </div>
      </section>

      {/* Why Zipplit Section */}
      <section className="py-16 sm:py-24 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-bold text-teal-700 text-center mb-12 animate-fade-in">
            Why Zipplit
          </h2>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 sm:gap-8">
            {[
              { icon: "🚫", label: "No Preservatives" },
              { icon: "📦", label: "Food-Grade Packaging" },
              { icon: "🍃", label: "Fresh Daily" },
              { icon: "⚡", label: "Fast Delivery" }
            ].map((item, idx) => (
              <div 
                key={idx}
                className="flex flex-col items-center text-center p-6 rounded-lg bg-white hover:shadow-lg transition-all duration-300 hover:-translate-y-1 animate-fade-in"
                style={{ animationDelay: `${idx * 0.1}s` }}
              >
                <div className="text-4xl sm:text-5xl mb-3">{item.icon}</div>
                <p className="font-bold text-teal-700 text-sm sm:text-base">{item.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Who It's For Section */}
      <section className="py-16 sm:py-24 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-bold text-teal-700 text-center mb-12 animate-fade-in">
            Who It's For
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { title: "Working Professionals", description: "Skip the lunch rush. Nutritious meals delivered to your office" },
              { title: "Young Families", description: "Healthy options the whole family will enjoy" },
              { title: "Busy Couples", description: "Spend more time together, less time cooking" }
            ].map((profile, idx) => (
              <div 
                key={idx}
                className="p-8 bg-gradient-to-br from-teal-50 to-lime-50 rounded-lg border-l-4 border-lime-500 hover:shadow-lg transition-all duration-300 hover:scale-105 animate-slide-up"
                style={{ animationDelay: `${idx * 0.15}s` }}
              >
                <div className="flex items-center gap-3 mb-3">
                  <Users className="w-6 h-6 text-lime-500" />
                  <h3 className="text-lg font-bold text-teal-700">{profile.title}</h3>
                </div>
                <p className="text-gray-600 text-sm">{profile.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Join Our Team Section */}
      <section className="py-16 sm:py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-teal-600 to-teal-700">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-2 animate-fade-in">
            Grow With Us
          </h2>
          <p className="text-lime-100 text-lg mb-8 animate-slide-up" style={{ animationDelay: "0.1s" }}>
            Join the Fresh Revolution
          </p>

          <div className="bg-white/10 backdrop-blur-sm rounded-lg p-8 mb-8 animate-slide-up" style={{ animationDelay: "0.2s" }}>
            <h3 className="text-white text-xl font-bold mb-6">Open Roles</h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
              {["Business Development", "Sales Executive", "Operations Intern", "Operations Manager"].map((role, idx) => (
                <div key={idx} className="bg-white/20 rounded-lg py-3 px-2 text-white font-semibold text-sm">
                  {role}
                </div>
              ))}
            </div>
            
            <p className="text-lime-100 mb-6 text-sm">
              Freshers or up to 2 years experience. Confidence. Communication. Commitment.
            </p>

            <a 
              href="#"
              className="inline-block px-8 py-3 bg-lime-500 text-teal-700 font-bold rounded-lg hover:bg-lime-400 transition-all duration-300 hover:shadow-lg hover:scale-105 animate-pulse-subtle"
            >
              Apply Now
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-teal-900 text-white py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
            {/* Logo & Branding */}
            <div className="text-center md:text-left">
              <div className="flex items-center gap-2 justify-center md:justify-start mb-4">
                <svg className="w-8 h-8" viewBox="0 0 200 200" fill="none">
                  <path d="M60 60L100 80L100 120L60 140M100 80L140 60L140 100L100 120M80 100L120 100" stroke="#9BCF55" strokeWidth="16" strokeLinecap="round" strokeLinejoin="round" fill="none" />
                </svg>
                <span className="text-lg font-bold">Zipplit</span>
              </div>
              <p className="text-teal-200 text-sm">Fresh. Healthy. Delivered.</p>
            </div>

            {/* Newsletter Signup */}
            <div>
              <h4 className="font-bold text-lime-400 mb-4">Stay Updated</h4>
              <form onSubmit={handleSignup} className="flex flex-col gap-2">
                <input
                  type="email"
                  placeholder="Your email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="px-4 py-2 rounded-lg bg-white/10 border border-white/20 text-white placeholder-teal-200 text-sm focus:outline-none focus:border-lime-500"
                  required
                />
                <button 
                  type="submit"
                  className="px-4 py-2 bg-lime-500 text-teal-700 font-bold rounded-lg hover:bg-lime-400 transition-all duration-300 text-sm"
                >
                  {submitted ? "✓ Subscribed" : "Subscribe"}
                </button>
              </form>
            </div>

            {/* Social Links */}
            <div>
              <h4 className="font-bold text-lime-400 mb-4">Follow Us</h4>
              <div className="flex gap-4 justify-center md:justify-start">
                <a href="#" className="p-2 bg-white/10 rounded-lg hover:bg-lime-500 hover:text-teal-700 transition-all duration-300">
                  <Facebook className="w-5 h-5" />
                </a>
                <a href="#" className="p-2 bg-white/10 rounded-lg hover:bg-lime-500 hover:text-teal-700 transition-all duration-300">
                  <Instagram className="w-5 h-5" />
                </a>
                <a href="#" className="p-2 bg-white/10 rounded-lg hover:bg-lime-500 hover:text-teal-700 transition-all duration-300">
                  <Twitter className="w-5 h-5" />
                </a>
              </div>
            </div>
          </div>

          {/* Footer Bottom */}
          <div className="border-t border-white/10 pt-8 text-center text-teal-200 text-sm">
            <p>&copy; 2024 Zipplit. Fresh meals delivered to Kochi. Preservative-free, always.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
