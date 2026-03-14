import {
  Car,
  Check,
  ExternalLink,
  MapPin,
  Menu,
  Star,
  Users,
  X,
  Zap,
} from "lucide-react";
import { useEffect, useState } from "react";

function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const links = [
    { label: "Home", href: "#home" },
    { label: "About", href: "#about" },
    { label: "Menu", href: "#menu" },
    { label: "Gallery", href: "#gallery" },
    { label: "Location", href: "#location" },
  ];

  return (
    <header
      data-ocid="nav.panel"
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? "bg-white shadow-md" : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 lg:h-20">
          {/* Logo */}
          <a
            href="#home"
            className="font-poppins font-semibold text-xl lg:text-2xl text-terracotta tracking-tight"
            data-ocid="nav.link"
          >
            Hotel Sona Dhaba
          </a>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-8">
            {links.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="font-opensans text-sm font-medium text-charcoal hover:text-terracotta transition-colors duration-200"
                data-ocid="nav.link"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Mobile hamburger */}
          <button
            className="md:hidden p-2 rounded-lg text-charcoal hover:bg-sand transition-colors"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle menu"
            type="button"
          >
            {menuOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden bg-white border-t border-gray-100 px-4 pb-4">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="block py-3 font-opensans text-sm text-charcoal hover:text-terracotta border-b border-gray-50 last:border-0"
              onClick={() => setMenuOpen(false)}
              data-ocid="nav.link"
            >
              {link.label}
            </a>
          ))}
        </div>
      )}
    </header>
  );
}

function HeroSection() {
  return (
    <section
      id="home"
      data-ocid="hero.section"
      className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden"
    >
      {/* Background image */}
      <img
        src="/assets/generated/hero-dhaba.dim_1400x800.jpg"
        alt="Hotel Sona Dhaba outdoor seating"
        className="absolute inset-0 w-full h-full object-cover"
        loading="eager"
      />
      {/* Overlay */}
      <div className="absolute inset-0 hero-gradient" />

      {/* Content */}
      <div className="relative z-10 text-center px-4 sm:px-6 max-w-4xl mx-auto">
        <p className="font-playfair italic text-lg sm:text-xl text-sand opacity-90 mb-4">
          Authentic Dhaba Flavors in a Relaxed Outdoor Setting
        </p>
        <h1 className="font-poppins font-semibold text-4xl sm:text-5xl lg:text-6xl text-white leading-tight mb-6">
          Authentic Dhaba Dining in Kamalapuram
        </h1>
        <p className="font-opensans text-lg sm:text-xl text-sand opacity-90 mb-10 max-w-2xl mx-auto leading-relaxed">
          Enjoy simple, satisfying meals in a relaxed outdoor setting — perfect
          for travelers, families, and friends.
        </p>

        {/* Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
          <a
            href="https://maps.google.com/?q=Kamalapuram,Tamil+Nadu,India"
            target="_blank"
            rel="noopener noreferrer"
            data-ocid="hero.primary_button"
            className="inline-flex items-center justify-center gap-2 bg-terracotta text-white font-poppins font-semibold px-8 py-4 rounded-full text-base hover:opacity-90 transition-all duration-300 shadow-lg"
          >
            <MapPin size={18} />
            Get Directions
          </a>
          <a
            href="tel:"
            data-ocid="hero.secondary_button"
            className="inline-flex items-center justify-center gap-2 border-2 border-white text-white font-poppins font-semibold px-8 py-4 rounded-full text-base hover:bg-white hover:text-charcoal transition-all duration-300"
          >
            Call Now
          </a>
        </div>

        {/* Highlight chips */}
        <div className="flex flex-wrap justify-center gap-3">
          {[
            "Outdoor Seating",
            "Late Night Food",
            "Free Parking",
            "Takeaway Available",
          ].map((chip) => (
            <div
              key={chip}
              className="flex items-center gap-2 bg-white/20 backdrop-blur-sm text-white px-4 py-2 rounded-full text-sm font-opensans border border-white/30"
            >
              <Check size={14} className="text-green-300" />
              {chip}
            </div>
          ))}
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center pt-2">
          <div className="w-1 h-3 bg-white/70 rounded-full" />
        </div>
      </div>
    </section>
  );
}

function AboutSection() {
  return (
    <section
      id="about"
      data-ocid="about.section"
      className="bg-cream py-20 lg:py-28"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Text */}
          <div>
            <span className="inline-block font-opensans text-xs font-semibold tracking-widest text-leafgreen uppercase mb-4 border border-leafgreen/30 bg-green-50 px-3 py-1 rounded-full">
              Our Story
            </span>
            <h2 className="font-poppins font-semibold text-3xl sm:text-4xl text-charcoal mb-6 leading-snug">
              A Local Dhaba Experience
            </h2>
            <p className="font-opensans text-base text-gray-600 leading-relaxed mb-4">
              Hotel Sona Dhaba brings the traditional roadside dining experience
              to Kamalapuram. With open seating, quick service, and simple meals
              that satisfy your hunger, it&apos;s a favorite stop for locals and
              travelers alike.
            </p>
            <p className="font-opensans text-base text-gray-600 leading-relaxed">
              Whether you&apos;re stopping by for lunch, dinner, or a late-night
              bite, you&apos;ll enjoy the relaxed atmosphere and comforting
              flavors of classic dhaba-style food.
            </p>

            {/* Stats */}
            <div className="mt-8 flex gap-8">
              <div>
                <div className="font-poppins font-semibold text-3xl text-terracotta">
                  46+
                </div>
                <div className="font-opensans text-sm text-gray-500 mt-1">
                  Happy Reviews
                </div>
              </div>
              <div className="w-px bg-gray-200" />
              <div>
                <div className="font-poppins font-semibold text-3xl text-terracotta">
                  3.3★
                </div>
                <div className="font-opensans text-sm text-gray-500 mt-1">
                  Average Rating
                </div>
              </div>
              <div className="w-px bg-gray-200" />
              <div>
                <div className="font-poppins font-semibold text-3xl text-terracotta">
                  Daily
                </div>
                <div className="font-opensans text-sm text-gray-500 mt-1">
                  Lunch & Dinner
                </div>
              </div>
            </div>
          </div>

          {/* Image */}
          <div className="relative">
            <img
              src="/assets/generated/gallery-2.dim_600x450.jpg"
              alt="Dhaba food served at Hotel Sona Dhaba"
              className="w-full h-80 lg:h-96 object-cover rounded-2xl shadow-xl"
              loading="lazy"
            />
            {/* Decorative element */}
            <div className="absolute -bottom-4 -left-4 w-24 h-24 bg-terracotta/10 rounded-2xl -z-10" />
            <div className="absolute -top-4 -right-4 w-32 h-32 bg-leafgreen/10 rounded-2xl -z-10" />
          </div>
        </div>
      </div>
    </section>
  );
}

const menuItems = [
  {
    icon: "🍽️",
    name: "Quick Bites",
    desc: "Satisfying snacks and small portions ready in minutes",
  },
  {
    icon: "🥘",
    name: "Small Plates",
    desc: "Flavourful dishes perfect for sharing",
  },
  {
    icon: "🍛",
    name: "All-You-Can-Eat",
    desc: "Fill up with unlimited helpings of classic dhaba food",
  },
  {
    icon: "☀️",
    name: "Lunch Specials",
    desc: "Fresh, hearty meals served during lunch hours",
  },
  {
    icon: "🌙",
    name: "Dinner Meals",
    desc: "Hot, satisfying dinners to end your day right",
  },
  {
    icon: "🌟",
    name: "Late Night Food",
    desc: "Open late for travelers and night owls",
  },
];

function MenuSection() {
  return (
    <section
      id="menu"
      data-ocid="menu.section"
      className="bg-sand py-20 lg:py-28"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-14">
          <span className="inline-block font-opensans text-xs font-semibold tracking-widest text-leafgreen uppercase mb-4 border border-leafgreen/30 bg-green-50/80 px-3 py-1 rounded-full">
            What We Offer
          </span>
          <h2 className="font-poppins font-semibold text-3xl sm:text-4xl text-charcoal">
            What We Serve
          </h2>
          <p className="font-opensans text-base text-gray-600 max-w-xl mx-auto mt-4 leading-relaxed">
            Our menu focuses on simple, flavorful meals served fresh and quickly
            — perfect for travelers and groups looking for a satisfying dining
            experience.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {menuItems.map((item, i) => (
            <div
              key={item.name}
              data-ocid={`menu.item.${i + 1}`}
              className="bg-white rounded-2xl p-6 shadow-md card-hover cursor-default"
            >
              <div className="text-4xl mb-4">{item.icon}</div>
              <h3 className="font-poppins font-semibold text-lg text-charcoal mb-2">
                {item.name}
              </h3>
              <p className="font-opensans text-sm text-gray-500 leading-relaxed">
                {item.desc}
              </p>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <a
            href="#location"
            data-ocid="menu.primary_button"
            className="inline-flex items-center justify-center gap-2 bg-terracotta text-white font-poppins font-semibold px-8 py-4 rounded-full text-base hover:opacity-90 transition-all duration-300 shadow-lg"
          >
            Visit Us Today
          </a>
        </div>
      </div>
    </section>
  );
}

const features = [
  {
    icon: <span className="text-4xl">🏕️</span>,
    title: "Authentic Dhaba Atmosphere",
    desc: "Enjoy open-air dining with traditional hut seating.",
  },
  {
    icon: <Users size={36} className="text-terracotta" />,
    title: "Perfect for Groups",
    desc: "Spacious seating makes it great for families and friends.",
  },
  {
    icon: <Zap size={36} className="text-terracotta" />,
    title: "Quick & Satisfying Meals",
    desc: "Simple food served fast when you're hungry.",
  },
  {
    icon: <Car size={36} className="text-terracotta" />,
    title: "Easy Parking",
    desc: "Free parking lot and street parking available.",
  },
];

function FeaturesSection() {
  return (
    <section data-ocid="features.section" className="bg-cream py-20 lg:py-28">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-14">
          <h2 className="font-poppins font-semibold text-3xl sm:text-4xl text-charcoal">
            Why Locals &amp; Travelers Stop Here
          </h2>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((f, i) => (
            <div
              key={f.title}
              data-ocid={`features.item.${i + 1}`}
              className="bg-sand rounded-2xl p-8 text-center card-hover cursor-default"
            >
              <div className="flex justify-center mb-4">{f.icon}</div>
              <h3 className="font-poppins font-semibold text-base text-charcoal mb-3">
                {f.title}
              </h3>
              <p className="font-opensans text-sm text-gray-500 leading-relaxed">
                {f.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function GallerySection() {
  const images = [
    {
      src: "/assets/generated/gallery-1.dim_600x450.jpg",
      alt: "Dhaba outdoor seating",
    },
    {
      src: "/assets/generated/gallery-2.dim_600x450.jpg",
      alt: "Traditional dhaba food",
    },
    {
      src: "/assets/generated/gallery-3.dim_600x450.jpg",
      alt: "Dhaba hut exterior at night",
    },
    {
      src: "/assets/generated/gallery-4.dim_600x450.jpg",
      alt: "Groups enjoying meals",
    },
  ];

  return (
    <section
      id="gallery"
      data-ocid="gallery.section"
      className="bg-charcoal py-20 lg:py-28"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-14">
          <span className="font-opensans text-xs font-semibold tracking-widest text-terracotta uppercase">
            Gallery
          </span>
          <h2 className="font-poppins font-semibold text-3xl sm:text-4xl text-white mt-3">
            A Taste of Our Atmosphere
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {images.map((img, i) => (
            <div
              key={img.src}
              data-ocid={`gallery.item.${i + 1}`}
              className="overflow-hidden rounded-2xl"
            >
              <img
                src={img.src}
                alt={img.alt}
                className="w-full h-64 sm:h-72 object-cover gallery-img"
                loading="lazy"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function ReviewsSection() {
  return (
    <section data-ocid="reviews.section" className="bg-cream py-20 lg:py-28">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 text-center">
        <span className="inline-block font-opensans text-xs font-semibold tracking-widest text-leafgreen uppercase mb-4 border border-leafgreen/30 bg-green-50 px-3 py-1 rounded-full">
          What Guests Say
        </span>
        <h2 className="font-poppins font-semibold text-3xl sm:text-4xl text-charcoal mb-6">
          A Favorite Stop for Travelers
        </h2>

        {/* Rating */}
        <div className="flex items-center justify-center gap-3 mb-3">
          <div className="flex gap-1">
            {[1, 2, 3].map((s) => (
              <Star
                key={s}
                size={28}
                className="text-yellow-400 fill-yellow-400"
              />
            ))}
            <Star
              size={28}
              className="text-yellow-400 fill-yellow-400 opacity-50"
            />
            <Star size={28} className="text-gray-300" />
          </div>
          <span className="font-poppins font-semibold text-4xl text-charcoal">
            3.3 / 5
          </span>
        </div>
        <p className="font-opensans text-sm text-gray-500 mb-8">
          Based on 46 visitor reviews
        </p>

        {/* Quote */}
        <blockquote className="font-playfair italic text-xl sm:text-2xl text-charcoal leading-relaxed mb-8 max-w-xl mx-auto">
          &ldquo;Guests appreciate the relaxed environment, simple food, and
          convenient stop for dinner or late-night meals.&rdquo;
        </blockquote>

        {/* Review chips */}
        <div className="flex flex-wrap justify-center gap-3">
          {["Relaxed Atmosphere", "Great for Groups", "Late Night Food"].map(
            (tag) => (
              <span
                key={tag}
                className="font-opensans text-sm text-charcoal bg-sand border border-gray-200 px-4 py-2 rounded-full"
              >
                {tag}
              </span>
            ),
          )}
        </div>
      </div>
    </section>
  );
}

function LocationSection() {
  return (
    <section
      id="location"
      data-ocid="location.section"
      className="bg-sand py-20 lg:py-28"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left */}
          <div>
            <span className="inline-block font-opensans text-xs font-semibold tracking-widest text-leafgreen uppercase mb-4 border border-leafgreen/30 bg-green-50/80 px-3 py-1 rounded-full">
              Find Us
            </span>
            <h2 className="font-poppins font-semibold text-3xl sm:text-4xl text-charcoal mb-6">
              Visit Hotel Sona Dhaba
            </h2>

            <div className="flex items-start gap-3 mb-8">
              <MapPin
                size={20}
                className="text-terracotta mt-1 flex-shrink-0"
              />
              <p className="font-opensans text-base text-gray-700">
                Kamalapuram, Tamil Nadu, India
              </p>
            </div>

            {/* Feature tags */}
            <div className="grid grid-cols-2 gap-3 mb-8">
              {["Free Parking", "Outdoor Seating", "Dine-in", "Takeaway"].map(
                (tag) => (
                  <div key={tag} className="flex items-center gap-2">
                    <div className="w-5 h-5 rounded-full bg-terracotta/20 flex items-center justify-center flex-shrink-0">
                      <Check size={11} className="text-terracotta" />
                    </div>
                    <span className="font-opensans text-sm text-gray-700">
                      {tag}
                    </span>
                  </div>
                ),
              )}
            </div>

            <a
              href="https://maps.google.com/?q=Kamalapuram,Tamil+Nadu,India"
              target="_blank"
              rel="noopener noreferrer"
              data-ocid="location.primary_button"
              className="inline-flex items-center justify-center gap-2 bg-terracotta text-white font-poppins font-semibold px-8 py-4 rounded-full text-base hover:opacity-90 transition-all duration-300 shadow-lg"
            >
              <ExternalLink size={18} />
              Get Directions
            </a>
          </div>

          {/* Map */}
          <div className="w-full">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d31569.2!2d78.6734!3d14.9667!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bb5e4e5e4e5e4e5%3A0x0!2sKamalapuram%2C+Tamil+Nadu!5e0!3m2!1sen!2sin!4v1"
              width="100%"
              height="400"
              style={{ border: 0, borderRadius: "16px" }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Hotel Sona Dhaba location map"
              data-ocid="location.map_marker"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

function CTASection() {
  return (
    <section data-ocid="cta.section" className="bg-terracotta py-20 lg:py-24">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 text-center">
        <h2 className="font-poppins font-semibold text-3xl sm:text-4xl lg:text-5xl text-white mb-6 leading-tight">
          Hungry? Stop By Today
        </h2>
        <p className="font-opensans text-lg text-white/90 mb-10 leading-relaxed">
          Whether you&apos;re passing through or meeting friends for dinner,
          Hotel Sona Dhaba is ready to welcome you.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href="tel:"
            data-ocid="cta.primary_button"
            className="inline-flex items-center justify-center gap-2 bg-white text-terracotta font-poppins font-semibold px-8 py-4 rounded-full text-base hover:bg-sand transition-all duration-300 shadow-lg"
          >
            Call Now
          </a>
          <a
            href="https://maps.google.com/?q=Kamalapuram,Tamil+Nadu,India"
            target="_blank"
            rel="noopener noreferrer"
            data-ocid="cta.secondary_button"
            className="inline-flex items-center justify-center gap-2 border-2 border-white text-white font-poppins font-semibold px-8 py-4 rounded-full text-base hover:bg-white hover:text-terracotta transition-all duration-300"
          >
            <MapPin size={18} />
            Get Directions
          </a>
        </div>
      </div>
    </section>
  );
}

function Footer() {
  const year = new Date().getFullYear();
  const hostname =
    typeof window !== "undefined" ? window.location.hostname : "";

  return (
    <footer
      data-ocid="footer.panel"
      className="bg-charcoal text-gray-300 pt-14 pb-8"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-10 mb-10">
          {/* Col 1: Brand */}
          <div>
            <h3 className="font-poppins font-semibold text-xl text-terracotta mb-3">
              Hotel Sona Dhaba
            </h3>
            <p className="font-playfair italic text-sm text-gray-400 mb-4">
              Authentic Dhaba Flavors in a Relaxed Outdoor Setting
            </p>
            <div className="flex items-start gap-2 text-sm">
              <MapPin
                size={15}
                className="text-terracotta mt-0.5 flex-shrink-0"
              />
              <span>Kamalapuram, Tamil Nadu, India</span>
            </div>
          </div>

          {/* Col 2: Quick Links */}
          <div>
            <h4 className="font-poppins font-semibold text-white text-sm uppercase tracking-wider mb-4">
              Quick Links
            </h4>
            <ul className="space-y-2">
              {["Home", "About", "Menu", "Gallery", "Location"].map((link) => (
                <li key={link}>
                  <a
                    href={`#${link.toLowerCase()}`}
                    className="font-opensans text-sm text-gray-400 hover:text-terracotta transition-colors"
                    data-ocid="footer.link"
                  >
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 3: Hours */}
          <div>
            <h4 className="font-poppins font-semibold text-white text-sm uppercase tracking-wider mb-4">
              Opening Hours
            </h4>
            <ul className="space-y-2 font-opensans text-sm">
              <li className="flex justify-between">
                <span className="text-gray-400">Daily Lunch</span>
                <span className="text-white">12pm – 3pm</span>
              </li>
              <li className="flex justify-between">
                <span className="text-gray-400">Daily Dinner</span>
                <span className="text-white">7pm – 11pm</span>
              </li>
              <li className="flex justify-between">
                <span className="text-gray-400">Late Night</span>
                <span className="text-green-400">Available</span>
              </li>
            </ul>
            <div className="mt-4 flex items-center gap-2 bg-white/5 rounded-lg px-3 py-2">
              <Check size={14} className="text-green-400" />
              <span className="font-opensans text-xs text-gray-400">
                Free Parking Available
              </span>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-white/10 pt-6 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="font-opensans text-xs text-gray-500">
            &copy; {year} Hotel Sona Dhaba, Kamalapuram, Tamil Nadu.
          </p>
          <p className="font-opensans text-xs text-gray-600">
            Built with love using{" "}
            <a
              href={`https://caffeine.ai?utm_source=caffeine-footer&utm_medium=referral&utm_content=${encodeURIComponent(hostname)}`}
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-500 hover:text-terracotta transition-colors"
            >
              caffeine.ai
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}

export default function App() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <HeroSection />
      <AboutSection />
      <MenuSection />
      <FeaturesSection />
      <GallerySection />
      <ReviewsSection />
      <LocationSection />
      <CTASection />
      <Footer />
    </div>
  );
}
