import { useState, useEffect } from "react";
import {
  ChevronDown,
  Facebook,
  Instagram,
  Twitter,
  Briefcase,
  TrendingUp,
  ClipboardList,
  Settings,
  Heart,
  MapPin,
  Clock,
  Plane,
  Users,
  Home,
} from "lucide-react";
import { VelocityScroll } from "@/components/ui/scroll-based-velocity";
import { TextGradientScroll } from "@/components/ui/text-gradient-scroll";
import { StickyScroll } from "@/components/ui/sticky-scroll-reveal";

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

  const scrollToContent = () => {
    const element = document.getElementById("content-section");
    element?.scrollIntoView({ behavior: "smooth" });
  };

  // Scroll animation effect
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("opacity-100", "translate-y-0");
            entry.target.classList.remove("opacity-0", "translate-y-8");
          }
        });
      },
      { threshold: 0.1 }
    );

    const cards = document.querySelectorAll(".scroll-card");
    cards.forEach((card) => observer.observe(card));

    return () => {
      cards.forEach((card) => observer.unobserve(card));
    };
  }, []);

  return (
    <div className="w-full overflow-hidden bg-white">
      <style>{`
        .scroll-card {
          transition: opacity 0.6s ease-out, transform 0.6s ease-out, border-color 0.3s ease, box-shadow 0.3s ease;
        }
        .scroll-card.opacity-100 {
          opacity: 1;
          transform: translateY(0);
        }
      `}</style>
      {/* Hero Section */}
      <section className="relative min-h-screen pt-20 px-4 sm:px-6 lg:px-8 flex items-center justify-center overflow-hidden">
        <video
          autoPlay
          muted
          loop
          className="absolute inset-0 w-full h-full object-cover"
          style={{ filter: "brightness(0.75)" }}
        >
          <source src="https://cdn.builder.io/o/assets%2F2aea7158bf6b409ba9a64ab0f37870bb%2F2141fa4cf5dc490e87054929b1d70d5e?alt=media&token=4fb7e327-f2ce-4702-b074-ab13ebc41427&apiKey=2aea7158bf6b409ba9a64ab0f37870bb" type="video/mp4" />
        </video>

        <div className="absolute inset-0 bg-black/25"></div>

        <div className="absolute inset-0 overflow-hidden">
          <div
            className="absolute bottom-10 left-10 w-72 h-72 bg-lime-400 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-pulse-subtle"
            style={{
              animationDelay: "2s",
              boxShadow: "0 0 60px 30px rgba(155, 207, 85, 0.2)"
            }}
          ></div>
        </div>

        <div className="relative z-10 w-full max-w-4xl mx-auto text-center">
          <div className="mb-8 animate-fade-in">
            <img
              src="https://cdn.builder.io/api/v1/image/assets%2F2aea7158bf6b409ba9a64ab0f37870bb%2F6994d8923852425c8cfa44070d4ac047?format=webp&width=800&height=1200"
              alt="Zipplit Logo"
              className="w-40 h-40 sm:w-48 sm:h-48 mx-auto object-cover rounded-lg animate-shimmer"
            />
            <h2
              className="text-3xl sm:text-4xl font-bold text-white mt-4 whitespace-nowrap overflow-hidden text-ellipsis"
              style={{ fontFamily: "sans-serif" }}
            >
              Zipplit
            </h2>
          </div>

          <h1
            className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-4 animate-slide-up"
            style={{
              animationDelay: "0.1s",
              fontFamily: "sans-serif",
              textShadow: "0 0 20px rgba(155, 207, 85, 0.4)"
            }}
          >
            Fresh. Healthy. Effortless.
          </h1>

          <p
            className="text-lg sm:text-xl text-lime-100 mb-4 animate-slide-up"
            style={{ animationDelay: "0.2s" }}
          >
            Preservative-Free Meals in Kochi
          </p>

          <div className="mt-8 mb-12">
            <VelocityScroll
              text="Launching Soon"
              default_velocity={5}
              className="text-5xl sm:text-6xl lg:text-7xl font-bold text-lime-300"
              style={{
                textShadow: "0 0 30px rgba(155, 207, 85, 0.6), 0 0 60px rgba(155, 207, 85, 0.3)"
              }}
            />
          </div>

          <button
            onClick={scrollToContent}
            className="mt-12 mx-auto block animate-bounce"
            aria-label="Scroll to content"
          >
            <ChevronDown className="w-8 h-8 text-white" />
          </button>
        </div>
      </section>

      {/* Fresh Food First Section */}
      <section className="py-20 sm:py-32 px-4 sm:px-6 lg:px-8" style={{ backgroundColor: "rgba(155, 207, 85, 1)" }}>
        <div className="max-w-5xl mx-auto text-center">
          <h2
            className="text-6xl sm:text-7xl lg:text-8xl font-bold mb-12"
            style={{ fontFamily: "sans-serif", fontWeight: "700", color: "rgb(6, 50, 55)" }}
          >
            Fresh Food First
          </h2>

          <TextGradientScroll
            text="Kochi loves to eat. But we lost time to cook. Preservatives and quick fixes became the norm—at the cost of our health. The truth is simple: fresh food changes everything."
            type="letter"
            textOpacity="soft"
            className="text-4xl sm:text-5xl lg:text-6xl leading-tight justify-center gap-2"
            style={{ color: "rgb(6, 50, 55)" }}
          />
        </div>
      </section>

      {/* Who It's For Section */}
      <section id="content-section" className="py-16 sm:py-24 px-4 sm:px-6 lg:px-8" style={{ backgroundColor: "rgba(255, 255, 255, 1)", marginBottom: "-19px" }}>
        <div className="max-w-6xl mx-auto">
          <h2
            className="text-4xl sm:text-4xl font-bold text-teal-700 text-center mb-12 animate-fade-in"
            style={{ fontFamily: "sans-serif", fontSize: "36px", lineHeight: "40px" }}
          >
            Who It's For
          </h2>

          <StickyScroll
            content={[
              {
                title: "Working Professionals",
                description: "Skip the lunch rush. Nutritious meals delivered to your office. Stay healthy and energized throughout your workday without worrying about meal prep.",
                content: (
                  <div className="h-full w-full bg-gradient-to-br from-teal-500 to-lime-500 flex items-center justify-center text-white overflow-hidden relative">
                    <img
                      src="https://images.unsplash.com/photo-1585238341710-4913d3ca7b0f?w=400&h=300&fit=crop"
                      alt="Working Professionals"
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute top-6 left-6 bg-white/95 rounded-full p-4 shadow-lg">
                      <Briefcase className="w-8 h-8 text-teal-700" />
                    </div>
                    <div className="absolute bottom-6 right-6 bg-white/95 rounded-full p-4 shadow-lg">
                      <Clock className="w-8 h-8 text-teal-700" />
                    </div>
                  </div>
                ),
              },
              {
                title: "Frequent Travelers",
                description: "Good food on the go. Whether you're traveling for work or pleasure, take fresh, healthy meals with you. No more airport fast food.",
                content: (
                  <div className="h-full w-full bg-gradient-to-br from-teal-500 to-lime-500 flex items-center justify-center text-white overflow-hidden relative">
                    <img
                      src="https://images.unsplash.com/photo-1504674900600-f032a568e944?w=400&h=300&fit=crop"
                      alt="Frequent Travelers"
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute top-6 left-6 bg-white/95 rounded-full p-4 shadow-lg">
                      <Plane className="w-8 h-8 text-teal-700" />
                    </div>
                    <div className="absolute bottom-6 right-6 bg-white/95 rounded-full p-4 shadow-lg">
                      <MapPin className="w-8 h-8 text-teal-700" />
                    </div>
                  </div>
                ),
              },
              {
                title: "Busy Families and Couples",
                description: "Spend more time together, less time cooking. Let us handle the meal prep so you can focus on what matters—quality time with loved ones.",
                content: (
                  <div className="h-full w-full bg-gradient-to-br from-teal-500 to-lime-500 flex items-center justify-center text-white overflow-hidden relative">
                    <img
                      src="https://images.unsplash.com/photo-1543521521-2a1a0d5d5f8f?w=400&h=300&fit=crop"
                      alt="Busy Families and Couples"
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute top-6 left-6 bg-white/95 rounded-full p-4 shadow-lg">
                      <Users className="w-8 h-8 text-teal-700" />
                    </div>
                    <div className="absolute bottom-6 right-6 bg-white/95 rounded-full p-4 shadow-lg">
                      <Heart className="w-8 h-8 text-rose-500" />
                    </div>
                  </div>
                ),
              },
            ]}
            contentClassName="bg-white"
          />
        </div>
      </section>

      {/* How Zipplit Does It Section */}
      <section className="py-16 sm:py-24 px-4 sm:px-6 lg:px-8" style={{ backgroundColor: "#e8f5d6", marginTop: "-19px" }}>
        <div className="max-w-6xl mx-auto">
          <h2
            className="text-3xl sm:text-4xl font-bold text-teal-700 text-center mb-4 animate-fade-in"
            style={{ fontFamily: "sans-serif" }}
          >
            How Zipplit Does It
          </h2>
          <p className="text-gray-600 text-center mb-12 text-lg max-w-3xl mx-auto">
            Fresh, healthy meals delivered to your door without the hassle. We believe in simple nutrition with quality ingredients.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {[
              {
                title: "Subscription",
                description: "Choose your preferred delivery schedule and meal options",
                image: "https://cdn.builder.io/api/v1/image/assets%2F31e04bb0599342f8b50394d1e8bce657%2Fe5dd7742e9e5448fa4e4ccb226bf0476",
              },
              {
                title: "Effortless",
                description: "Fresh meals delivered quickly to your doorstep",
                image: "https://cdn.builder.io/api/v1/image/assets%2F31e04bb0599342f8b50394d1e8bce657%2Ff7acb3864c364de58ac819bb67461d30",
              },
              {
                title: "Fresh and Healthy",
                description: "Preservative-free, made with fresh ingredients",
                image: "https://cdn.builder.io/api/v1/image/assets%2F31e04bb0599342f8b50394d1e8bce657%2F54949c5215bb4676b42b53329bb9407d",
              },
            ].map((item, idx) => (
              <div
                key={idx}
                className="scroll-card group bg-white border-2 border-lime-100 rounded-lg overflow-hidden hover:border-lime-500 hover:shadow-xl transition-all duration-300 hover:-translate-y-2 opacity-0 translate-y-8"
                style={{ transitionProperty: "opacity, transform, border-color, box-shadow" }}
              >
                {/* Image */}
                <div className="relative h-48 sm:h-56 overflow-hidden bg-gradient-to-br from-lime-100 to-white">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>

                {/* Content */}
                <div className="p-6 text-center">
                  <h3 className="text-xl font-bold text-teal-700 text-center mb-2" style={{ fontFamily: "sans-serif" }}>
                    {item.title}
                  </h3>
                  <p className="text-gray-600 text-center text-sm">
                    {item.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Grow With Us Section */}
      <section
        className="py-20 sm:py-32 px-4 sm:px-6 lg:px-8"
        style={{
          backgroundImage:
            "url(https://cdn.builder.io/api/v1/image/assets%2F2aea7158bf6b409ba9a64ab0f37870bb%2F7fd40f81982c4ab4ad96ca42309f6b0b)",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center",
          backgroundSize: "cover",
        }}
      >
        <div className="max-w-4xl mx-auto text-center">
          <h2
            className="text-3xl sm:text-4xl font-bold text-white mb-2 animate-fade-in"
            style={{ fontFamily: "sans-serif", textShadow: "0 0 30px rgba(10, 72, 73, 0.8)" }}
          >
            Grow With Us
          </h2>
          <p
            className="text-lime-100 text-lg mb-8 animate-slide-up"
            style={{ animationDelay: "0.1s", textShadow: "0 0 20px rgba(10, 72, 73, 0.6)" }}
          >
            Join The Team
          </p>

          <div
            className="backdrop-blur-sm rounded-lg p-8 mb-8 animate-slide-up"
            style={{
              animationDelay: "0.2s",
              backgroundColor: "rgba(10, 72, 73, 0.89)",
            }}
          >
            <h3
              className="text-white text-xl font-bold mb-6"
              style={{ fontFamily: "sans-serif" }}
            >
              Open Roles
            </h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
              {[
                { role: "Business Development", Icon: TrendingUp },
                { role: "Sales Executive", Icon: Briefcase },
                { role: "Operations Intern", Icon: ClipboardList },
                { role: "Operations Manager", Icon: Settings },
              ].map((item, idx) => (
                <div
                  key={idx}
                  className="bg-white/20 rounded-lg py-4 px-3 text-white font-semibold text-sm flex flex-col items-center gap-2"
                >
                  <item.Icon className="w-5 h-5 text-lime-300" />
                  <span>{item.role}</span>
                </div>
              ))}
            </div>

            <p className="text-lime-100 mb-6 text-sm max-w-2xl mx-auto">
              We're looking for driven individuals with 0-2 years of experience.
              Bring your enthusiasm, strong communication skills, and commitment
              to growing fresh innovation with us.
            </p>

            <a
              href="https://forms.gle/gzRLoJWTyQ5QEBkX7"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block px-8 py-3 bg-lime-500 text-teal-700 font-bold rounded-lg hover:bg-lime-400 transition-all duration-300 hover:shadow-lg hover:scale-105 animate-pulse-subtle"
            >
              Apply Now
            </a>
          </div>
        </div>
      </section>

      {/* Newsletter & Footer */}
      <footer className="text-white py-12 px-4 sm:px-6 lg:px-8" style={{ backgroundColor: "rgba(10, 72, 73, 1)" }}>
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
            {/* Logo & Branding */}
            <div className="text-center md:text-left">
              <div className="flex items-center gap-2 justify-center md:justify-start mb-4">
                <img
                  src="https://cdn.builder.io/api/v1/image/assets%2F2aea7158bf6b409ba9a64ab0f37870bb%2F5d9e4e2414a6480bbade330f0c7cbe3d?format=webp&width=800&height=1200"
                  alt="Zipplit Logo"
                  className="w-8 h-8 object-contain"
                />
                <span className="text-lg font-bold">Zipplit</span>
              </div>
              <p className="text-sm text-center" style={{ color: "#9bcf55" }}>
                Fresh. Healthy. Effortless.
              </p>
            </div>

            {/* Newsletter Signup */}
            <div className="text-center">
              <h4
                className="font-bold text-lime-400 mb-4"
                style={{ fontFamily: "sans-serif" }}
              >
                Stay Updated
              </h4>
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
            <div className="text-center">
              <h4
                className="font-bold text-lime-400 mb-4"
                style={{ fontFamily: "sans-serif" }}
              >
                Follow Us
              </h4>
              <div className="flex gap-4 justify-center">
                <a
                  href="#"
                  className="p-2 bg-white/10 rounded-lg hover:bg-lime-500 hover:text-teal-700 transition-all duration-300"
                >
                  <Facebook className="w-5 h-5" />
                </a>
                <a
                  href="#"
                  className="p-2 bg-white/10 rounded-lg hover:bg-lime-500 hover:text-teal-700 transition-all duration-300"
                >
                  <Instagram className="w-5 h-5" />
                </a>
                <a
                  href="#"
                  className="p-2 bg-white/10 rounded-lg hover:bg-lime-500 hover:text-teal-700 transition-all duration-300"
                >
                  <Twitter className="w-5 h-5" />
                </a>
              </div>
            </div>
          </div>

          {/* Footer Bottom */}
          <div className="border-t border-white/10 pt-8 text-center text-teal-200 text-sm">
            <p className="text-lime-300 font-semibold">Launching Soon</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
