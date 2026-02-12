import { useState, useRef, useId } from "react";
import { motion, useInView, useReducedMotion } from "framer-motion";
import {
  ArrowRight,
  ChevronDown,
  Leaf,
  Truck,
  ChefHat,
  TrendingUp,
  Briefcase,
  ClipboardList,
  Settings,
  Laptop,
  Plane,
  Users,
  Instagram,
  Facebook,
  Twitter,
  MapPin,
} from "lucide-react";

/* ─── Reusable animated wrapper (respects reduced motion) ─── */
function FadeUp({
  children,
  delay = 0,
  className = "",
}: {
  children: React.ReactNode;
  delay?: number;
  className?: string;
}) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });
  const prefersReduced = useReducedMotion();

  return (
    <motion.div
      ref={ref}
      initial={prefersReduced ? {} : { opacity: 0, y: 24 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={prefersReduced ? { duration: 0 } : { duration: 0.6, delay, ease: [0.22, 1, 0.36, 1] }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

/* ─── Marquee (with aria-hidden for screen readers, pauses on hover) ─── */
function Marquee({ items, speed = 20 }: { items: string[]; speed?: number }) {
  const content = items.join(" \u00B7 ") + " \u00B7 ";
  return (
    <div
      className="overflow-hidden whitespace-nowrap"
      aria-hidden="true"
      data-testid="marquee"
    >
      <div
        className="inline-block animate-marquee hover:[animation-play-state:paused]"
        style={{ animationDuration: `${speed}s` }}
      >
        <span className="inline-block pr-4 font-brand font-bold text-sm tracking-widest uppercase text-primary">
          {content}
        </span>
        <span className="inline-block pr-4 font-brand font-bold text-sm tracking-widest uppercase text-primary">
          {content}
        </span>
      </div>
    </div>
  );
}

/* ─── MAIN PAGE ─── */
export default function Index() {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const prefersReduced = useReducedMotion();
  const newsletterLabelId = useId();

  const handleSignup = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      setSubmitted(true);
      setEmail("");
      setTimeout(() => setSubmitted(false), 3000);
    }
  };

  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    setMobileMenuOpen(false);
  };

  const motionProps = (delay = 0) =>
    prefersReduced
      ? {}
      : {
          initial: { opacity: 0, y: 20 },
          animate: { opacity: 1, y: 0 },
          transition: { duration: 0.6, delay, ease: [0.22, 1, 0.36, 1] },
        };

  return (
    <>
      {/* WCAG 2.4.1: Skip to main content */}
      <a href="#main-content" className="skip-to-main">
        Skip to main content
      </a>

      <div className="w-full overflow-hidden bg-white">
        {/* ═══════════ NAVIGATION (landmark: banner) ═══════════ */}
        <header
          className="fixed top-0 left-0 right-0 z-50 backdrop-blur-md bg-white/80 border-b border-primary/5"
          role="banner"
          data-testid="navbar"
        >
          <nav
            aria-label="Main navigation"
            className="max-w-7xl mx-auto px-4 md:px-8 flex items-center justify-between h-16"
          >
            <a
              href="#hero"
              onClick={(e) => { e.preventDefault(); scrollTo("hero"); }}
              className="flex items-center gap-2.5"
              data-testid="nav-logo"
              aria-label="Zipplit — Back to top"
            >
              <img
                src="https://cdn.builder.io/api/v1/image/assets%2F31e04bb0599342f8b50394d1e8bce657%2F2a7734eba886453c979a516fa95323f4?format=webp&width=800&height=1200"
                alt=""
                className="w-8 h-8 object-contain"
                width={32}
                height={32}
                role="presentation"
              />
              <span className="font-brand text-xl font-extrabold text-primary">
                Zipplit
              </span>
            </a>

            {/* Desktop links */}
            <div className="hidden md:flex items-center gap-8" role="list">
              {[
                { label: "About", id: "manifesto" },
                { label: "For You", id: "audience" },
                { label: "How It Works", id: "how-it-works" },
                { label: "Careers", id: "careers" },
              ].map((link) => (
                <a
                  key={link.id}
                  href={`#${link.id}`}
                  onClick={(e) => { e.preventDefault(); scrollTo(link.id); }}
                  className="font-body text-sm font-semibold text-primary/70 hover:text-primary transition-colors"
                  data-testid={`nav-link-${link.id}`}
                  role="listitem"
                >
                  {link.label}
                </a>
              ))}
              <a
                href="#newsletter"
                onClick={(e) => { e.preventDefault(); scrollTo("newsletter"); }}
                className="px-5 py-2 rounded-full bg-secondary text-secondary-foreground font-body text-sm font-bold hover:bg-secondary-hover transition-all hover:scale-105"
                data-testid="nav-cta-waitlist"
              >
                Join Waitlist
              </a>
            </div>

            {/* Mobile hamburger */}
            <button
              className="flex flex-col gap-1.5 p-2 md:hidden"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              data-testid="mobile-menu-toggle"
              aria-label={mobileMenuOpen ? "Close navigation menu" : "Open navigation menu"}
              aria-expanded={mobileMenuOpen}
              aria-controls="mobile-menu-panel"
            >
              <span
                className={`block w-5 h-0.5 bg-primary transition-transform duration-200 ${mobileMenuOpen ? "rotate-45 translate-y-2" : ""}`}
              />
              <span
                className={`block w-5 h-0.5 bg-primary transition-opacity duration-200 ${mobileMenuOpen ? "opacity-0" : ""}`}
              />
              <span
                className={`block w-5 h-0.5 bg-primary transition-transform duration-200 ${mobileMenuOpen ? "-rotate-45 -translate-y-2" : ""}`}
              />
            </button>
          </nav>

          {/* Mobile menu */}
          {mobileMenuOpen && (
            <motion.div
              id="mobile-menu-panel"
              initial={prefersReduced ? {} : { opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              className="md:hidden bg-white border-t border-primary/5 px-4 pb-4"
              role="menu"
              data-testid="mobile-menu"
            >
              {[
                { label: "About", id: "manifesto" },
                { label: "For You", id: "audience" },
                { label: "How It Works", id: "how-it-works" },
                { label: "Careers", id: "careers" },
              ].map((link) => (
                <a
                  key={link.id}
                  href={`#${link.id}`}
                  onClick={(e) => { e.preventDefault(); scrollTo(link.id); }}
                  className="block w-full text-left py-3 font-body text-base font-medium text-primary/80 hover:text-primary border-b border-primary/5"
                  data-testid={`mobile-nav-link-${link.id}`}
                  role="menuitem"
                >
                  {link.label}
                </a>
              ))}
              <a
                href="#newsletter"
                onClick={(e) => { e.preventDefault(); scrollTo("newsletter"); }}
                className="mt-3 block w-full text-center px-5 py-2.5 rounded-full bg-secondary text-secondary-foreground font-body text-sm font-bold"
                data-testid="mobile-nav-cta-waitlist"
                role="menuitem"
              >
                Join Waitlist
              </a>
            </motion.div>
          )}
        </header>

        {/* ═══════════ MAIN CONTENT ═══════════ */}
        <main id="main-content">

          {/* ═══════════ HERO ═══════════ */}
          <section
            id="hero"
            className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden"
            aria-labelledby="hero-heading"
            data-testid="hero-section"
          >
            {/* Static hero image */}
            <img
              src="https://images.unsplash.com/photo-1490818387583-1baba5e638af?w=1920&q=80&auto=format&fit=crop"
              alt="Vibrant fresh fruits and vegetables arranged beautifully on a clean surface"
              className="absolute inset-0 w-full h-full object-cover"
              style={{ filter: "brightness(0.35)" }}
              fetchPriority={"high" as any}
              width={1920}
              height={1080}
              data-testid="hero-image"
            />

            {/* Overlay for contrast */}
            <div className="absolute inset-0 bg-gradient-to-b from-primary/50 via-primary/30 to-primary/60" aria-hidden="true" />

            {/* Decorative glows */}
            <div className="absolute bottom-20 left-10 w-64 h-64 bg-secondary rounded-full mix-blend-soft-light blur-3xl opacity-20 animate-float" aria-hidden="true" />
            <div className="absolute top-32 right-10 w-48 h-48 bg-secondary rounded-full mix-blend-soft-light blur-3xl opacity-15 animate-float" style={{ animationDelay: "1.5s" }} aria-hidden="true" />

            {/* Content */}
            <div className="relative z-10 max-w-4xl mx-auto text-center px-4 sm:px-6">
              <motion.div {...motionProps(0)}>
                <img
                  src="https://cdn.builder.io/api/v1/image/assets%2F31e04bb0599342f8b50394d1e8bce657%2F44c8d660d3594781a246b393dfe14b57?format=webp&width=800&height=1200"
                  alt="Zipplit brand mark"
                  className="w-24 h-24 sm:w-28 sm:h-28 mx-auto object-cover rounded-2xl mb-8"
                  width={112}
                  height={112}
                  data-testid="hero-logo"
                />
              </motion.div>

              <motion.h1
                {...motionProps(0.15)}
                id="hero-heading"
                className="font-heading text-white leading-[1.1] tracking-tight mb-6"
                style={{ fontSize: "clamp(2.5rem, 6vw, 4.5rem)" }}
                data-testid="hero-heading"
              >
                Real Food.{" "}
                <span className="text-secondary">Honest Ingredients.</span>
                <br />
                No Shortcuts.
              </motion.h1>

              <motion.p
                {...motionProps(0.3)}
                className="font-body text-lg sm:text-xl font-medium text-white/90 mb-10 max-w-2xl mx-auto"
                data-testid="hero-subheading"
              >
                Kochi's first 100% preservative-free meal subscription.
                <br className="hidden sm:block" />
                Fresh ingredients, cooked daily, delivered to your door.
              </motion.p>

              <motion.div
                {...motionProps(0.45)}
                className="flex flex-col sm:flex-row gap-4 justify-center items-center"
              >
                <a
                  href="#careers"
                  onClick={(e) => { e.preventDefault(); scrollTo("careers"); }}
                  className="px-8 py-3.5 rounded-full bg-secondary text-primary font-body font-bold text-sm hover:bg-secondary-hover transition-all hover:scale-105 inline-flex items-center gap-2"
                  data-testid="hero-cta-careers"
                >
                  View Open Roles
                  <ArrowRight className="w-4 h-4" aria-hidden="true" />
                </a>
                <a
                  href="#newsletter"
                  onClick={(e) => { e.preventDefault(); scrollTo("newsletter"); }}
                  className="px-8 py-3.5 rounded-full bg-white/10 backdrop-blur-sm text-white font-body font-bold text-sm border border-white/20 hover:bg-white/20 transition-all"
                  data-testid="hero-cta-waitlist"
                >
                  Join the Waitlist
                </a>
              </motion.div>
            </div>

            {/* Scroll indicator */}
            <motion.a
              href="#manifesto"
              onClick={(e) => { e.preventDefault(); scrollTo("manifesto"); }}
              {...(prefersReduced ? {} : { initial: { opacity: 0 }, animate: { opacity: 1 }, transition: { delay: 1 } })}
              className="absolute bottom-12 left-1/2 -translate-x-1/2 z-10"
              aria-label="Scroll down to learn more about our philosophy"
              data-testid="hero-scroll-indicator"
            >
              <ChevronDown className="w-7 h-7 text-white/60 animate-bounce" aria-hidden="true" />
            </motion.a>

            {/* Marquee bar */}
            <div className="absolute bottom-0 left-0 right-0 bg-secondary py-3 z-10">
              <Marquee
                items={[
                  "Launching Soon",
                  "Kochi",
                  "Preservative Free",
                  "Fresh Daily",
                  "No Chemicals",
                  "Real Nutrition",
                ]}
                speed={25}
              />
              {/* Accessible equivalent for screen readers */}
              <span className="sr-only">
                Launching soon in Kochi. Preservative free, fresh daily meals with no chemicals and real nutrition.
              </span>
            </div>
          </section>

          {/* ═══════════ MANIFESTO — "Fresh Food First" ═══════════ */}
          <section
            id="manifesto"
            className="relative py-24 sm:py-36 px-4 sm:px-6 lg:px-8 bg-cream grain-overlay"
            aria-labelledby="manifesto-heading"
            data-testid="manifesto-section"
          >
            <div className="relative z-10 max-w-4xl mx-auto text-center">
              <FadeUp>
                <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-secondary/20 text-primary font-body text-xs font-bold tracking-wider uppercase mb-8">
                  <Leaf className="w-3.5 h-3.5" aria-hidden="true" />
                  Our Philosophy
                </span>
              </FadeUp>

              <FadeUp delay={0.1}>
                <h2
                  id="manifesto-heading"
                  className="font-heading text-primary leading-[1.15] tracking-tight mb-10"
                  style={{ fontSize: "clamp(2.25rem, 5vw, 3.75rem)" }}
                  data-testid="manifesto-heading"
                >
                  Fresh Food First
                </h2>
              </FadeUp>

              <FadeUp delay={0.2}>
                <p
                  className="font-body text-xl sm:text-2xl md:text-3xl font-medium leading-relaxed text-primary/75 max-w-3xl mx-auto"
                  data-testid="manifesto-text"
                >
                  Kochi loves to eat. But somewhere along the way, we traded time for
                  convenience — preservatives and quick fixes became the norm, at the
                  cost of our health.{" "}
                  <strong className="text-primary font-semibold">
                    The truth is simple: fresh food changes everything.
                  </strong>
                </p>
              </FadeUp>

              <FadeUp delay={0.35}>
                <ul className="mt-14 flex flex-wrap justify-center gap-4 sm:gap-6 list-none p-0" role="list" aria-label="Our commitments">
                  {[
                    "Zero Preservatives",
                    "Locally Sourced",
                    "Cooked Daily",
                  ].map((tag) => (
                    <li
                      key={tag}
                      className="px-5 py-2.5 rounded-full border border-primary/10 bg-white text-primary font-body text-sm font-semibold shadow-[0_2px_12px_rgb(0,0,0,0.04)]"
                    >
                      {tag}
                    </li>
                  ))}
                </ul>
              </FadeUp>
            </div>
          </section>

          {/* ═══════════ WHO IT'S FOR ═══════════ */}
          <section
            id="audience"
            className="py-20 sm:py-28 px-4 sm:px-6 lg:px-8 bg-white"
            aria-labelledby="audience-heading"
            data-testid="audience-section"
          >
            <div className="max-w-7xl mx-auto">
              <FadeUp>
                <div className="text-center mb-16">
                  <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-secondary/15 text-primary font-body text-xs font-bold tracking-wider uppercase mb-6">
                    <Users className="w-3.5 h-3.5" aria-hidden="true" />
                    Built for You
                  </span>
                  <h2
                    id="audience-heading"
                    className="font-heading text-primary tracking-tight"
                    style={{ fontSize: "clamp(2rem, 4vw, 3rem)" }}
                    data-testid="audience-heading"
                  >
                    Who It's For
                  </h2>
                </div>
              </FadeUp>

              {/* Bento grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5" role="list">
                {[
                  {
                    icon: Laptop,
                    title: "Working Professionals",
                    description:
                      "Skip the lunch rush. Nutritious, preservative-free meals delivered to your office — so you stay energised all day without meal-prep stress.",
                    accent: "bg-primary",
                    span: "lg:col-span-2",
                  },
                  {
                    icon: Plane,
                    title: "Frequent Travellers",
                    description:
                      "Good food on the go. Take fresh, healthy meals with you — whether it's a quick work trip or a weekend getaway. No more airport fast food.",
                    accent: "bg-secondary",
                    span: "",
                  },
                  {
                    icon: Users,
                    title: "Busy Families & Couples",
                    description:
                      "Spend more time together, less time cooking. We handle the meal prep so you can focus on what matters — quality time with your loved ones.",
                    accent: "bg-primary",
                    span: "",
                  },
                ].map((card, idx) => (
                  <FadeUp key={idx} delay={idx * 0.1} className={card.span}>
                    <motion.article
                      whileHover={prefersReduced ? {} : { y: -4 }}
                      transition={{ duration: 0.25 }}
                      className="h-full p-8 sm:p-10 rounded-2xl border border-primary/8 bg-surface hover:shadow-[0_8px_30px_rgb(0,0,0,0.06)] transition-shadow duration-300"
                      data-testid={`audience-card-${idx}`}
                      role="listitem"
                    >
                      <div
                        className={`w-12 h-12 rounded-xl ${card.accent} flex items-center justify-center mb-6`}
                        aria-hidden="true"
                      >
                        <card.icon className="w-5 h-5 text-white" />
                      </div>
                      <h3 className="font-heading text-xl sm:text-2xl text-primary mb-3">
                        {card.title}
                      </h3>
                      <p className="font-body text-base font-medium text-primary/70 leading-relaxed">
                        {card.description}
                      </p>
                    </motion.article>
                  </FadeUp>
                ))}
              </div>
            </div>
          </section>

          {/* ═══════════ HOW ZIPPLIT DOES IT ═══════════ */}
          <section
            id="how-it-works"
            className="py-20 sm:py-28 px-4 sm:px-6 lg:px-8 bg-cream grain-overlay"
            aria-labelledby="how-heading"
            data-testid="how-it-works-section"
          >
            <div className="relative z-10 max-w-7xl mx-auto">
              <FadeUp>
                <div className="text-center mb-16">
                  <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-secondary/20 text-primary font-body text-xs font-bold tracking-wider uppercase mb-6">
                    <ChefHat className="w-3.5 h-3.5" aria-hidden="true" />
                    Our Process
                  </span>
                  <h2
                    id="how-heading"
                    className="font-heading text-primary tracking-tight mb-4"
                    style={{ fontSize: "clamp(2rem, 4vw, 3rem)" }}
                    data-testid="how-it-works-heading"
                  >
                    How Zipplit Does It
                  </h2>
                  <p className="font-body text-base sm:text-lg font-medium text-primary/65 max-w-2xl mx-auto">
                    Simple nutrition with quality ingredients, delivered fresh to your
                    doorstep.
                  </p>
                </div>
              </FadeUp>

              <ol className="grid grid-cols-1 md:grid-cols-3 gap-6 list-none p-0" role="list">
                {[
                  {
                    icon: Leaf,
                    step: "01",
                    title: "Source Fresh",
                    description:
                      "We partner with local farmers and suppliers to source the freshest seasonal ingredients — no frozen bases, no shortcuts.",
                    image:
                      "https://cdn.builder.io/api/v1/image/assets%2F31e04bb0599342f8b50394d1e8bce657%2Fe5dd7742e9e5448fa4e4ccb226bf0476",
                    imageAlt: "A calendar showing meal planning and fresh ingredient scheduling",
                  },
                  {
                    icon: ChefHat,
                    step: "02",
                    title: "Cook Daily",
                    description:
                      "Every meal is prepared fresh each day in our kitchen. No preservatives, no reheated leftovers — just honest cooking.",
                    image:
                      "https://cdn.builder.io/api/v1/image/assets%2F31e04bb0599342f8b50394d1e8bce657%2Ff7acb3864c364de58ac819bb67461d30",
                    imageAlt: "A delivery person carrying freshly prepared meal packages",
                  },
                  {
                    icon: Truck,
                    step: "03",
                    title: "Deliver Warm",
                    description:
                      "Your meals arrive at your doorstep warm and ready to eat. Choose your schedule, and we'll take care of the rest.",
                    image:
                      "https://cdn.builder.io/api/v1/image/assets%2F31e04bb0599342f8b50394d1e8bce657%2F54949c5215bb4676b42b53329bb9407d",
                    imageAlt: "A warm, freshly prepared healthy meal plated and ready to eat",
                  },
                ].map((item, idx) => (
                  <FadeUp key={idx} delay={idx * 0.12}>
                    <motion.li
                      whileHover={prefersReduced ? {} : { y: -6 }}
                      transition={{ duration: 0.3 }}
                      className="group bg-white rounded-2xl overflow-hidden border border-primary/8 hover:shadow-[0_12px_40px_rgb(0,0,0,0.08)] transition-shadow duration-300"
                      data-testid={`how-card-${idx}`}
                    >
                      {/* Image */}
                      <div className="relative h-52 sm:h-56 overflow-hidden">
                        <img
                          src={item.image}
                          alt={item.imageAlt}
                          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                          loading="lazy"
                          width={400}
                          height={224}
                        />
                        <div className="absolute top-4 left-4">
                          <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-primary text-white font-brand font-bold text-sm" aria-hidden="true">
                            {item.step}
                          </span>
                        </div>
                      </div>

                      {/* Content */}
                      <div className="p-7">
                        <div className="flex items-center gap-3 mb-3">
                          <item.icon className="w-5 h-5 text-secondary" aria-hidden="true" />
                          <h3 className="font-heading text-xl text-primary">
                            <span className="sr-only">Step {item.step}: </span>
                            {item.title}
                          </h3>
                        </div>
                        <p className="font-body text-sm font-medium text-primary/60 leading-relaxed">
                          {item.description}
                        </p>
                      </div>
                    </motion.li>
                  </FadeUp>
                ))}
              </ol>
            </div>
          </section>

          {/* ═══════════ WHAT WE'RE COOKING — GALLERY ═══════════ */}
          <section
            id="gallery"
            className="py-20 sm:py-28 px-4 sm:px-6 lg:px-8 bg-white overflow-hidden"
            aria-labelledby="gallery-heading"
            data-testid="gallery-section"
          >
            <div className="max-w-7xl mx-auto">
              <FadeUp>
                <div className="text-center mb-14">
                  <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-secondary/15 text-primary font-body text-xs font-bold tracking-wider uppercase mb-6">
                    <Leaf className="w-3.5 h-3.5" aria-hidden="true" />
                    Taste Kerala
                  </span>
                  <h2
                    id="gallery-heading"
                    className="font-heading text-primary tracking-tight mb-4"
                    style={{ fontSize: "clamp(2rem, 4vw, 3rem)" }}
                    data-testid="gallery-heading"
                  >
                    What We're Cooking
                  </h2>
                  <p className="font-body text-base sm:text-lg font-medium text-primary/65 max-w-2xl mx-auto">
                    From traditional Kerala meal kits to fresh bakery delights and cool beverages — a sneak peek at what's on the menu.
                  </p>
                </div>
              </FadeUp>

              {/* Masonry-style gallery */}
              <div className="grid grid-cols-2 md:grid-cols-3 gap-4 sm:gap-5">
                {[
                  {
                    src: "https://customer-assets.emergentagent.com/job_zipplit-preview/artifacts/helcvbmz_zip%20post1.png",
                    alt: "Taste Kerala At Home — Easy ready-to-cook meal kits with authentic Kerala cuisine",
                    tall: true,
                  },
                  {
                    src: "https://customer-assets.emergentagent.com/job_zipplit-preview/artifacts/27dsh75x_zip%20post2.png",
                    alt: "Traditional Kerala thali meal kit with idli, sambar, chutney, and chai",
                    tall: false,
                  },
                  {
                    src: "https://customer-assets.emergentagent.com/job_zipplit-preview/artifacts/6nl0d6co_zip%20post3.png",
                    alt: "Your daily fresh and frozen seafood stop — super-fast delivery within 2 hours",
                    tall: false,
                  },
                  {
                    src: "https://customer-assets.emergentagent.com/job_zipplit-preview/artifacts/6l26pyai_zip%20post4.png",
                    alt: "Fresh bakery delights baked daily — soft, fluffy, and perfectly baked",
                    tall: false,
                  },
                  {
                    src: "https://customer-assets.emergentagent.com/job_zipplit-preview/artifacts/w1jdyi9v_zip%20post6.png",
                    alt: "Cool drinks for every mood — refreshing fruit-infused beverages delivered",
                    tall: true,
                  },
                ].map((img, idx) => (
                  <FadeUp
                    key={idx}
                    delay={idx * 0.08}
                    className={idx === 0 ? "row-span-2" : idx === 4 ? "row-span-2" : ""}
                  >
                    <motion.div
                      whileHover={prefersReduced ? {} : { scale: 1.03 }}
                      transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
                      className="relative group rounded-2xl overflow-hidden h-full cursor-pointer"
                      data-testid={`gallery-item-${idx}`}
                    >
                      <img
                        src={img.src}
                        alt={img.alt}
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                        loading="lazy"
                        width={400}
                        height={img.tall ? 800 : 400}
                      />
                      {/* Hover overlay */}
                      <div className="absolute inset-0 bg-primary/0 group-hover:bg-primary/30 transition-colors duration-300 flex items-end p-5" aria-hidden="true">
                        <span className="font-body text-sm font-bold text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300 transform translate-y-2 group-hover:translate-y-0">
                          {img.alt.split("—")[0].trim()}
                        </span>
                      </div>
                    </motion.div>
                  </FadeUp>
                ))}
              </div>
            </div>
          </section>

          {/* ═══════════ GROW WITH US — CAREERS ═══════════ */}
          <section
            id="careers"
            className="py-20 sm:py-28 px-4 sm:px-6 lg:px-8 bg-primary"
            aria-labelledby="careers-heading"
            data-testid="careers-section"
          >
            <div className="max-w-5xl mx-auto">
              <FadeUp>
                <div className="text-center mb-14">
                  <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 text-secondary font-body text-xs font-bold tracking-wider uppercase mb-6">
                    We're Hiring
                  </span>
                  <h2
                    id="careers-heading"
                    className="font-heading text-white tracking-tight mb-4"
                    style={{ fontSize: "clamp(2rem, 4vw, 3rem)" }}
                    data-testid="careers-heading"
                  >
                    Grow With Us
                  </h2>
                  <p className="font-body text-base sm:text-lg font-medium text-white/70 max-w-2xl mx-auto">
                    Join a team that's building something meaningful — fresh
                    innovation starts with passionate people.
                  </p>
                </div>
              </FadeUp>

              {/* Roles grid */}
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-10 list-none p-0" role="list" aria-label="Open positions">
                {[
                  { role: "Business Development", Icon: TrendingUp, type: "Full-time" },
                  { role: "Sales Executive", Icon: Briefcase, type: "Full-time" },
                  { role: "Operations Intern", Icon: ClipboardList, type: "Internship" },
                  { role: "Operations Manager", Icon: Settings, type: "Full-time" },
                ].map((item, idx) => (
                  <FadeUp key={idx} delay={idx * 0.08}>
                    <li>
                      <motion.a
                        href="https://forms.gle/gzRLoJWTyQ5QEBkX7"
                        target="_blank"
                        rel="noopener noreferrer"
                        whileHover={prefersReduced ? {} : { scale: 1.02 }}
                        className="flex items-center gap-4 p-5 rounded-2xl bg-white/[0.08] border border-white/10 hover:bg-white/[0.12] transition-colors cursor-pointer group"
                        data-testid={`career-card-${idx}`}
                        aria-label={`Apply for ${item.role} — ${item.type} position in Kochi`}
                      >
                        <div className="w-11 h-11 rounded-xl bg-secondary/20 flex items-center justify-center flex-shrink-0" aria-hidden="true">
                          <item.Icon className="w-5 h-5 text-secondary" />
                        </div>
                        <div className="flex-1">
                          <span className="font-body font-bold text-white text-base block">
                            {item.role}
                          </span>
                          <span className="font-body text-xs font-medium text-white/50">
                            {item.type} &middot; Kochi
                          </span>
                        </div>
                        <ArrowRight className="w-4 h-4 text-white/30 group-hover:text-secondary group-hover:translate-x-1 transition-all" aria-hidden="true" />
                      </motion.a>
                    </li>
                  </FadeUp>
                ))}
              </ul>

              <FadeUp delay={0.4}>
                <div className="text-center">
                  <p className="font-body text-sm font-medium text-white/60 mb-6 max-w-xl mx-auto">
                    We're looking for driven individuals with 0–2 years of
                    experience. Bring your enthusiasm, strong communication skills,
                    and commitment to growing fresh innovation with us.
                  </p>
                  <a
                    href="https://forms.gle/gzRLoJWTyQ5QEBkX7"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-8 py-3.5 rounded-full bg-secondary text-primary font-body font-bold text-sm hover:bg-secondary-hover transition-all hover:scale-105"
                    data-testid="careers-apply-btn"
                  >
                    Apply Now
                    <ArrowRight className="w-4 h-4" aria-hidden="true" />
                  </a>
                </div>
              </FadeUp>
            </div>
          </section>
        </main>

        {/* ═══════════ FOOTER (landmark: contentinfo) ═══════════ */}
        <footer className="bg-primary" role="contentinfo" data-testid="footer">
          {/* Newsletter strip */}
          <section
            id="newsletter"
            className="border-t border-white/[0.08]"
            aria-labelledby="newsletter-heading"
            data-testid="newsletter-section"
          >
            <div className="max-w-7xl mx-auto px-4 md:px-8 py-16 sm:py-20">
              <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-8">
                <div>
                  <h2
                    id="newsletter-heading"
                    className="font-heading text-2xl sm:text-3xl text-white mb-2"
                    data-testid="newsletter-heading"
                  >
                    Stay in the Loop
                  </h2>
                  <p className="font-body text-sm font-medium text-white/55">
                    Be the first to know when we launch. No spam, ever.
                  </p>
                </div>

                <form
                  onSubmit={handleSignup}
                  className="flex flex-col sm:flex-row gap-3 w-full lg:w-auto"
                  data-testid="newsletter-form"
                  aria-label="Newsletter signup"
                >
                  <label htmlFor={newsletterLabelId} className="sr-only">
                    Email address
                  </label>
                  <input
                    id={newsletterLabelId}
                    type="email"
                    placeholder="your@email.com"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="px-5 py-3 rounded-full bg-white/10 border border-white/15 text-white placeholder-white/40 font-body text-sm focus:outline-none focus:ring-2 focus:ring-secondary focus:border-transparent w-full sm:w-72"
                    required
                    autoComplete="email"
                    data-testid="newsletter-email-input"
                    aria-required="true"
                  />
                  <button
                    type="submit"
                    className="px-7 py-3 rounded-full bg-secondary text-primary font-body font-bold text-sm hover:bg-secondary-hover transition-all hover:scale-105 whitespace-nowrap"
                    data-testid="newsletter-submit-btn"
                  >
                    {submitted ? "Subscribed!" : "Join Waitlist"}
                  </button>
                </form>
              </div>
            </div>
          </section>

          {/* Footer bottom */}
          <div className="border-t border-white/[0.08]">
            <div className="max-w-7xl mx-auto px-4 md:px-8 py-12">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mb-10">
                {/* Brand */}
                <div>
                  <div className="flex items-center gap-2.5 mb-4">
                    <img
                      src="https://cdn.builder.io/api/v1/image/assets%2F31e04bb0599342f8b50394d1e8bce657%2F2a7734eba886453c979a516fa95323f4?format=webp&width=800&height=1200"
                      alt=""
                      className="w-7 h-7 object-contain"
                      width={28}
                      height={28}
                      role="presentation"
                    />
                    <span className="font-brand text-lg font-extrabold text-white">
                      Zipplit
                    </span>
                  </div>
                  <p className="font-body text-sm font-medium text-white/50 leading-relaxed max-w-xs">
                    Preservative-free meals made fresh daily in Kochi. Real food
                    for real people.
                  </p>
                </div>

                {/* Quick links */}
                <nav aria-label="Footer navigation">
                  <h3 className="font-body font-bold text-white/80 text-sm uppercase tracking-wider mb-4">
                    Quick Links
                  </h3>
                  <ul className="flex flex-col gap-2.5 list-none p-0">
                    {[
                      { label: "About", id: "manifesto" },
                      { label: "How It Works", id: "how-it-works" },
                      { label: "Careers", id: "careers" },
                    ].map((link) => (
                      <li key={link.id}>
                        <a
                          href={`#${link.id}`}
                          onClick={(e) => { e.preventDefault(); scrollTo(link.id); }}
                          className="font-body text-sm font-medium text-white/50 hover:text-secondary transition-colors"
                          data-testid={`footer-link-${link.id}`}
                        >
                          {link.label}
                        </a>
                      </li>
                    ))}
                  </ul>
                </nav>

                {/* Social */}
                <div>
                  <h3 className="font-body font-bold text-white/80 text-sm uppercase tracking-wider mb-4">
                    Connect
                  </h3>
                  <ul className="flex gap-3 mb-4 list-none p-0" aria-label="Social media links">
                    {[
                      { Icon: Instagram, label: "Follow us on Instagram" },
                      { Icon: Facebook, label: "Follow us on Facebook" },
                      { Icon: Twitter, label: "Follow us on Twitter" },
                    ].map(({ Icon, label }) => (
                      <li key={label}>
                        <a
                          href="#"
                          aria-label={label}
                          className="w-10 h-10 rounded-full bg-white/[0.08] flex items-center justify-center hover:bg-secondary hover:text-primary text-white/50 transition-all"
                          data-testid={`footer-social-${label.split(" ").pop()?.toLowerCase()}`}
                        >
                          <Icon className="w-4 h-4" aria-hidden="true" />
                        </a>
                      </li>
                    ))}
                  </ul>
                  <address className="not-italic flex items-center gap-2 text-white/40">
                    <MapPin className="w-3.5 h-3.5" aria-hidden="true" />
                    <span className="font-body text-sm font-medium">Kochi, Kerala</span>
                  </address>
                </div>
              </div>

              {/* Bottom bar */}
              <div className="pt-8 border-t border-white/[0.08] flex flex-col sm:flex-row justify-between items-center gap-4">
                <p className="font-body text-xs font-medium text-white/35">
                  &copy; {new Date().getFullYear()} Zipplit. All rights reserved.
                </p>
                <span className="font-brand text-xs font-bold text-secondary/60 tracking-wider uppercase">
                  Launching Soon
                </span>
              </div>
            </div>
          </div>

          {/* Large watermark */}
          <div className="overflow-hidden py-4 border-t border-white/5" aria-hidden="true">
            <p
              className="font-brand font-extrabold text-white/[0.03] text-center select-none"
              style={{ fontSize: "clamp(5rem, 15vw, 14rem)" }}
            >
              ZIPPLIT
            </p>
          </div>
        </footer>
      </div>
    </>
  );
}
