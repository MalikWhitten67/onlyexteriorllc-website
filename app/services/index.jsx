import * as Vader from "vaderjs";
import { component, render, useState } from "vaderjs";
import Button from "vaderjs-daisyui/Components/Actions/Button";
import { Modal } from "vaderjs-daisyui/Components/Actions/Modal"

// Service data for better maintainability
const services = [
  {
    id: "roofing",
    title: "Roofing Inspections",
    description: "Comprehensive roof assessments to identify leaks, storm damage, and wear. We provide detailed reports and honest recommendations.",
    icon: "🏠",
    bgGradient: "from-slate-800/60 to-slate-900/60",
    borderHover: "hover:border-amber-500/50"
  },
  {
    id: "roof-replacement",
    title: "Roof Replacement",
    description: "Complete roof replacement using premium materials. Asphalt shingles, metal roofing, and flat roof systems. Licensed, insured, and fully warrantied.",
    icon: "🔨",
    bgGradient: "from-slate-800/60 to-slate-900/60",
    borderHover: "hover:border-amber-500/50"
  },
  {
    id: "siding",
    title: "Siding Installation & Repair",
    description: "Vinyl, fiber cement, wood, and aluminum siding. Enhance curb appeal, improve energy efficiency, and protect your home from the elements.",
    icon: "🧱",
    bgGradient: "from-slate-800/60 to-slate-900/60",
    borderHover: "hover:border-blue-500/50"
  },
  {
    id: "gutters",
    title: "Gutter Installation",
    description: "Seamless aluminum gutters, copper gutters, and gutter guards. Proper water drainage to protect your foundation and landscaping.",
    icon: "💧",
    bgGradient: "from-slate-800/60 to-slate-900/60",
    borderHover: "hover:border-sky-500/50"
  },
  {
    id: "downspouts",
    title: "Downspouts & Drainage",
    description: "Custom downspout installation, underground drainage systems, and downspout extensions. Eliminate water pooling and foundation issues.",
    icon: "🌊",
    bgGradient: "from-slate-800/60 to-slate-900/60",
    borderHover: "hover:border-cyan-500/50"
  },
  {
    id: "tree",
    title: "Tree Removal",
    description: "Safe and efficient tree removal for hazardous or unwanted trees. Fully insured, with proper equipment and cleanup included.",
    icon: "🌳",
    bgGradient: "from-slate-800/60 to-slate-900/60",
    borderHover: "hover:border-emerald-500/50"
  },
  {
    id: "lawn",
    title: "Lawn Services",
    description: "Yard cutting, trimming, and full property maintenance. Perfect for residential and commercial properties.",
    icon: "🌿",
    bgGradient: "from-slate-800/60 to-slate-900/60",
    borderHover: "hover:border-lime-500/50"
  },
  {
    id: "yard-waste",
    title: "Yard Waste Hauling",
    description: "Hauling of branches, leaves, grass clippings, and debris. We leave your property spotless and green.",
    icon: "🗑️",
    bgGradient: "from-slate-800/60 to-slate-900/60",
    borderHover: "hover:border-teal-500/50"
  },
  {
    id: "cleanup",
    title: "Yard Clean Up",
    description: "Full overgrowth clearing, leaf removal, landscaping debris cleanup. Reclaim your outdoor space.",
    icon: "🧹",
    bgGradient: "from-slate-800/60 to-slate-900/60",
    borderHover: "hover:border-cyan-500/50"
  },
  {
    id: "concrete",
    title: "Concrete Work",
    description: "Driveways, patios, walkways, and foundation repairs. Durable craftsmanship for long-lasting results.",
    icon: "🧱",
    bgGradient: "from-slate-800/60 to-slate-900/60",
    borderHover: "hover:border-stone-500/50"
  }
];

const ServiceCard = ({ service, index }) => {
  return (
    <div 
      className={`group relative bg-gradient-to-br ${service.bgGradient} backdrop-blur-sm border border-white/10 rounded-2xl p-6 transition-all duration-300 ${service.borderHover} hover:scale-105 hover:shadow-2xl hover:shadow-green-500/10`}
      style={{ animationDelay: `${index * 100}ms` }}
    >
      <div className="text-5xl mb-4 opacity-80 group-hover:scale-110 transition-transform duration-300 inline-block">
        {service.icon}
      </div>
      <h3 className="text-2xl font-bold mb-3 tracking-tight flex items-center gap-2">
        {service.title}
        <span className="h-1.5 w-1.5 rounded-full bg-green-500/60"></span>
      </h3>
      <p className="text-slate-300 text-base leading-relaxed mb-5">
        {service.description}
      </p>
      <div className="flex items-center text-green-400 text-sm font-medium opacity-0 group-hover:opacity-100 transition-opacity">
        <span>Learn more →</span>
      </div>
    </div>
  );
};

// Hero component for Services page context
const Hero = () => {
  return (
    <div className="relative bg-gradient-to-br from-[#0a0f1c] via-[#0f172a] to-[#0b1120] pt-24 pb-16 px-4 overflow-hidden">
      <div className="absolute -top-24 -right-24 w-96 h-96 bg-green-500/10 rounded-full blur-3xl pointer-events-none"></div>
      <div className="absolute -bottom-20 -left-20 w-80 h-80 bg-emerald-500/10 rounded-full blur-3xl pointer-events-none"></div>
      
      <div className="max-w-5xl mx-auto text-center relative z-2">
        <div className="inline-block mb-4 px-3 py-1 rounded-full bg-green-500/10 border border-green-500/30 text-green-400 text-sm font-mono tracking-wider">
          STL • ILLINOIS • LOCAL EXPERTS
        </div>
        <h1 className="text-5xl md:text-7xl font-black tracking-tighter uppercase italic leading-tight">
          We don't just talk <br />
          <span className="text-green-500 bg-gradient-to-r from-green-400 to-emerald-500 bg-clip-text text-transparent">exterior work.</span>
        </h1>
        <p className="text-slate-300 text-xl max-w-2xl mx-auto mt-6">
          Roofing, siding, gutters, trees, lawns, concrete — done right. Licensed & insured. Free estimate.
        </p>
        <div className="flex flex-wrap justify-center gap-4 mt-10">
          <div className="flex items-center gap-2 bg-black/30 backdrop-blur-sm px-5 py-2 rounded-full border border-white/10">
            <span className="text-green-400 text-xl">✓</span>
            <span>Licensed & Insured</span>
          </div>
          <div className="flex items-center gap-2 bg-black/30 backdrop-blur-sm px-5 py-2 rounded-full border border-white/10">
            <span className="text-green-400 text-xl">✓</span>
            <span>Free on-site estimate</span>
          </div>
          <div className="flex items-center gap-2 bg-black/30 backdrop-blur-sm px-5 py-2 rounded-full border border-white/10">
            <span className="text-green-400 text-xl">✓</span>
            <span>Local STL & Illinois</span>
          </div>
        </div>
      </div>
    </div>
  );
};

// Services Grid Section
const ServicesGrid = () => {
  return (
    <div className="py-20 px-4 max-w-7xl mx-auto">
      <div className="text-center mb-12">
        <span className="text-green-400 text-sm font-mono uppercase tracking-wider bg-green-500/10 px-3 py-1 rounded-full">
          What We Offer
        </span>
        <h2 className="text-4xl md:text-5xl font-bold mt-4 mb-4">
          Comprehensive Exterior Solutions
        </h2>
        <p className="text-slate-400 max-w-2xl mx-auto">
          From roof to foundation — we handle all your exterior needs with professional craftsmanship
        </p>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {services.map((service, index) => (
          <ServiceCard key={service.id} service={service} index={index} />
        ))}
      </div>
    </div>
  );
};

// CTA Section for services page
const CtaSection = () => {
  return (
    <section className="py-16 px-4 border-t border-white/5 border-b border-white/5 bg-gradient-to-r from-slate-900/40 to-slate-800/20">
      <div className="max-w-5xl mx-auto text-center">
        <div className="bg-slate-900/40 backdrop-blur-xl rounded-3xl p-8 md:p-12 border border-white/10 shadow-2xl">
          <h3 className="text-3xl md:text-4xl font-bold mb-3">Ready to upgrade your property?</h3>
          <p className="text-slate-300 text-lg max-w-2xl mx-auto mb-6">
            Whether it's storm damage cleanup, routine lawn care, siding replacement, or a new concrete patio — we deliver quality, safety, and transparency.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button className="btn btn-primary bg-green-600 hover:bg-green-500 border-none text-white px-8 py-3 text-lg rounded-full shadow-xl" onClick={() => alert("📞 Free estimate request: Our team will reach out shortly (STL/IL only). Licensed & insured.")}>
              📋 Schedule Free Estimate
            </Button>
            <Button className="btn-outline border-green-500 text-green-500 hover:bg-green-500/10 px-8 py-3 rounded-full text-lg">
              📞 (618) 670 4450
            </Button>
          </div>
          <p className="text-slate-500 text-sm mt-5">Serving Greater St. Louis, St. Charles, Metro East & surrounding Illinois areas.</p>
        </div>
      </div>
    </section>
  );
};

// Portfolio / work preview
const PortfolioPreview = () => {
  const works = [
    { name: "Complete roof replacement & inspection", tag: "Roofing" },
    { name: "Full siding installation (vinyl/fiber cement)", tag: "Siding" },
    { name: "Seamless gutter & downspout system", tag: "Gutters" },
    { name: "Large oak tree removal + stump grinding", tag: "Tree" },
    { name: "Full yard clean up & mulching", tag: "Lawn" },
    { name: "Stamped concrete patio & walkway", tag: "Concrete" },
    { name: "Underground drainage installation", tag: "Downspouts" },
    { name: "Emergency storm damage repair", tag: "Roofing" },
  ];
  return (
    <div className="py-16 px-4 max-w-7xl mx-auto">
      
      <div className="text-center mt-8">
        <a href="/portfolio" className="text-green-400 underline decoration-green-400/30 hover:decoration-green-400 text-sm inline-flex items-center gap-1 cursor-pointer">
          View full portfolio <span>→</span>
        </a>
      </div>
    </div>
  );
};

// Main component using Vader's hooks, combining services-focused layout
const ServicesPage = () => {
  const [interactionCount, setInteractionCount] = useState(0);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  
  const handleCtaClick = () => {
    setInteractionCount(interactionCount + 1);
    alert("📞 Free estimate request: Our team will reach out shortly (STL/IL only). Licensed & insured.");
  };

  const onQuoteClick = () => {
    setInteractionCount(interactionCount + 1);
    alert("Thanks for choosing Only Exterior LLC! We'll contact you within 24h for your free estimate.");
  };

  return (
    <div className="min-h-screen bg-[#0f172a] text-slate-100 font-sans selection:bg-green-500/30 text-xl">
      
      {/* Sticky Glassmorphism Navbar */}
      <nav className="sticky top-0 z-50 backdrop-blur-md bg-[#0f172a]/80 border-b border-white/5 overflow-hidden">
        {/* Diagonal accent lines */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-0 -left-20 w-40 h-full bg-gradient-to-r from-green-500 to-transparent transform rotate-12" />
          <div className="absolute bottom-0 -right-20 w-40 h-full bg-gradient-to-l from-green-500 to-transparent transform -rotate-12" />
        </div>
        
        <div className="flex justify-between items-center p-4 max-w-6xl mx-auto relative">
          
          {/* Logo with glow effect */}
          <div className="flex items-center gap-3 group cursor-pointer" onClick={() => window.location.href = "/"}>
            <div className="relative">
              <img src="logo.png" alt="Only Exterior" className="w-10 h-10 md:w-12 md:h-12 object-contain filter drop-shadow-[0_0_8px_rgba(16,185,129,0.5)]" />
              <div className="absolute inset-0 bg-green-500/20 rounded-full blur-xl group-hover:blur-2xl transition-all" />
            </div>
            <span className="text-lg md:text-xl font-black tracking-tighter uppercase italic">
              Only <span className="text-green-500 relative">
                Exterior
                <svg className="absolute -bottom-2 left-0 w-full hidden md:block" height="4" viewBox="0 0 100 4">
                  <path d="M0 2 L100 2" stroke="url(#gradient)" strokeWidth="2" strokeDasharray="4 4" />
                  <defs>
                    <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="0%">
                      <stop offset="0%" stopColor="#10b981" />
                      <stop offset="100%" stopColor="#059669" />
                    </linearGradient>
                  </defs>
                </svg>
              </span>
            </span>
          </div>
          
          {/* Desktop Navigation - hidden on mobile */}
          <div className="hidden md:flex space-x-10">
            {[{name: "Home", href: "/"}, {name: "Portfolio", href: "/portfolio"}, {name: "Services", href: "/services"}].map(({name, href}) => (
              <a key={name} href={href} className="relative group px-3 py-2 rounded-lg">
                <span className="text-slate-300 group-hover:text-white transition-colors duration-300 font-medium">
                  {name}
                </span>
                <div className="absolute -inset-2 bg-green-500/0 group-hover:bg-green-500/10 rounded-lg blur-md transition-all duration-300 -z-10" />
                <div className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-green-500 to-emerald-600 group-hover:w-full transition-all duration-500" />
              </a>
            ))}
            
            {/* Glowing contact button */}
            <Button 
              onClick={() => setIsModalOpen(true)} 
              className="relative btn-sm border-none text-white font-bold px-6 overflow-hidden group"
              style={{
                background: 'linear-gradient(135deg, #10b981, #059669)',
                animation: 'glowPulse 2s infinite'
              }}
            >
              <span className="relative z-10 flex text-black items-center gap-2">
                  Contact  
              </span> 
            </Button>
          </div>
          
          {/* Mobile Menu Button - only shows on mobile */}
          <button 
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden relative w-10 h-10 rounded-lg border border-green-500/30 hover:border-green-500 transition-all group"
          >
            <div className="absolute inset-0 bg-green-500/10 rounded-lg group-hover:bg-green-500/20 transition-colors" />
            <div className="relative flex flex-col items-center justify-center gap-1.5 w-full h-full">
              <span className={`w-5 h-0.5 bg-green-500 transition-all duration-300 ${isMobileMenuOpen ? 'rotate-45 translate-y-2' : ''}`} />
              <span className={`w-5 h-0.5 bg-green-500 transition-all duration-300 ${isMobileMenuOpen ? 'opacity-0' : ''}`} />
              <span className={`w-5 h-0.5 bg-green-500 transition-all duration-300 ${isMobileMenuOpen ? '-rotate-45 -translate-y-2' : ''}`} />
            </div>
          </button>
        </div>
        
        {/* Mobile Menu Dropdown - only shows on mobile when open */}
        {isMobileMenuOpen && (
          <div className="md:hidden bg-[#0f172a]/95 backdrop-blur-xl border-t border-white/10">
            <div className="flex flex-col p-6 space-y-4">
              {[{name: "Home", href: "/"}, {name: "Portfolio", href: "/portfolio"}, {name: "Services", href: "/services"}].map(({name, href}) => (
                <a 
                  key={name} 
                  href={href} 
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="px-4 py-3 rounded-xl bg-slate-800/50 border border-slate-700/50 hover:border-green-500/50 transition-all duration-300 text-slate-300 hover:text-white font-medium text-lg flex items-center justify-between"
                >
                  {name}
                  <svg className="w-5 h-5 text-green-500 transition-all group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </a>
              ))}
              
              <Button 
                onClick={() => {
                  setIsModalOpen(true);
                  setIsMobileMenuOpen(false);
                }} 
                className="w-full bg-gradient-to-r from-green-500 to-emerald-600 border-none text-slate-900 font-bold py-3"
              >
                📞 Contact Us
              </Button>
              
              <div className="pt-4 mt-2 border-t border-slate-700/50 text-center">
                <a href="tel:+16186704450" className="text-sm text-slate-400 hover:text-green-400 transition-colors block mb-2">
                  📞 (618) 670-4450
                </a>
                <p className="text-xs text-slate-500">
                  Free estimates • No obligation
                </p>
              </div>
            </div>
          </div>
        )}
        
        <style jsx>{`
          @keyframes glowPulse {
            0%, 100% { box-shadow: 0 0 5px rgba(16, 185, 129, 0.3); }
            50% { box-shadow: 0 0 20px rgba(16, 185, 129, 0.6); }
          }
        `}</style>
      </nav>

      {/* HERO SECTION */}
      <Hero />

      {/* SERVICES GRID */}
      <ServicesGrid />

      {/* PORTFOLIO PREVIEW */}
      <PortfolioPreview />

      {/* CTA with map mention & free estimate */}
      <CtaSection />

      {/* Additional trust element — service area / licensed */}
      <div className="py-10 px-4 text-center max-w-4xl mx-auto">
        <div className="flex flex-wrap justify-center gap-8 text-sm text-slate-400">
          <div className="flex items-center gap-2"><span className="text-green-500">📍</span> St. Louis County & City</div>
          <div className="flex items-center gap-2"><span className="text-green-500">📍</span> St. Charles, MO</div>
          <div className="flex items-center gap-2"><span className="text-green-500">📍</span> Metro East, IL</div>
          <div className="flex items-center gap-2"><span className="text-green-500">📍</span> Madison & St. Clair County</div>
        </div>
        <div className="mt-6 flex justify-center gap-4 flex-wrap"> 
          <span className="bg-slate-800/50 px-4 py-1.5 rounded-full text-xs font-mono">Insured · Bonded · Local Experts</span>
        </div>
      </div>

      {/* Footer */}
      <footer className="border-t border-slate-800 py-12 text-center text-slate-500 text-sm mt-6">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center px-4 gap-3">
          <p>© 2026 Only Exterior LLC • Built for lasting impressions. Roofing | Siding | Gutters | Tree | Lawn | Concrete</p>
          <div className="flex gap-4">
            <span className="text-green-500 cursor-pointer hover:text-green-400" onClick={() => setIsModalOpen(true)}>Free estimate</span>
            <a href="tel:+16186704450" className="cursor-pointer hover:text-green-400">Call (618) 670 4450</a>
          </div>
        </div> 
      </footer>

      {/* Floating CTA button (optional) to increase interactions */}
      <div className="fixed bottom-6 right-6 z-50">
        <button 
          onClick={() => setIsModalOpen(true)}
          className="bg-green-600 hover:bg-green-500 text-white rounded-full shadow-2xl shadow-green-700/40 p-4 flex items-center gap-2 transition-all hover:scale-105 focus:outline-none focus:ring-2 focus:ring-green-400"
        >
          <span className="font-bold">📋 Free Estimate</span>
        </button>
      </div>
      
      {/* Modal */}
      <Modal 
        id="contact-modal"   
        isOpen={isModalOpen} 
        onClose={() => setIsModalOpen(false)} 
        size="w-full max-w-lg" 
        placement="middle" 
        horizontal="center"
        classname="bg-transparent border-none rounded-2xl overflow-hidden"
      >
        <div className="relative"> 
          <div className="bg-slate-800 rounded-2xl border border-slate-700/50 shadow-2xl overflow-hidden">
            {/* Decorative header gradient */}
            <div className="h-1 bg-gradient-to-r from-green-500 to-emerald-600" />
            
            {/* Content */}
            <div className="p-6 md:p-8">
              {/* Icon and Title */}
              <div className="text-center mb-6">
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-green-500/10 border border-green-500/30 mb-4">
                  <svg className="w-8 h-8 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold text-slate-100">Let's Transform Your Property</h3>
                <p className="text-slate-400 mt-2 text-sm">
                  Reach out any time – we respond within 1 hour
                </p>
              </div>
              
              {/* Contact Options */}
              <div className="flex flex-col gap-4">
                {/* Phone - Primary CTA */}
                <a 
                  href="tel:+16186704450" 
                  className="group relative overflow-hidden rounded-xl bg-gradient-to-r from-green-500/10 to-emerald-600/10 border border-green-500/30 p-4 hover:border-green-500/70 transition-all duration-300 hover:-translate-y-0.5"
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-green-500/0 to-green-500/5 group-hover:from-green-500/10 transition-all duration-300" />
                  <div className="relative flex items-center gap-4">
                    <div className="w-12 h-12 rounded-full bg-green-500/20 flex items-center justify-center">
                      <svg className="w-6 h-6 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                      </svg>
                    </div>
                    <div className="flex-1">
                      <div className="text-xs text-green-400 font-semibold uppercase tracking-wider">Call or Text</div>
                      <div className="text-xl font-bold text-slate-100">(618) 670-4450</div>
                    </div>
                    <svg className="w-5 h-5 text-slate-500 group-hover:text-green-500 group-hover:translate-x-1 transition-all" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </div>
                </a>
                
                {/* Email - Secondary */}
                <a 
                  href="mailto:onlyatexteriors@gmail.com?subject=Quote%20Request"
                  className="group flex items-center gap-4 rounded-xl bg-slate-900/30 border border-slate-700/50 p-4 hover:border-green-500/50 transition-all duration-300 hover:-translate-y-0.5"
                >
                  <div className="w-12 h-12 rounded-full bg-slate-700/50 flex items-center justify-center group-hover:bg-green-500/20 transition-colors">
                    <svg className="w-6 h-6 text-slate-400 group-hover:text-green-500 transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <div className="flex-1">
                    <div className="text-xs text-slate-500 font-semibold uppercase tracking-wider">Email Us</div>
                    <div className="text-base text-slate-300 group-hover:text-green-400 transition-colors">onlyatexteriors@gmail.com</div>
                  </div>
                  <svg className="w-5 h-5 text-slate-600 group-hover:text-green-500 group-hover:translate-x-1 transition-all" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </a>
                
                {/* Business Hours */}
                <div className="text-center pt-4 mt-2 border-t border-slate-700/50"> 
                  <div className="flex items-center justify-center gap-2 mt-2 text-xs text-slate-500">
                    <svg className="w-4 h-4 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <span>Free estimates • No obligation • Licensed & Insured</span>
                  </div>
                </div>
                
                {/* Close Button */}
                <Button 
                  onClick={() => setIsModalOpen(false)} 
                  className="btn-outline border-slate-600 text-slate-300 hover:border-green-500 hover:text-green-500 w-full mt-2"
                >
                  Close
                </Button>
              </div>
            </div>
          </div>
        </div>
      </Modal>
    </div>
  );
};

// Export and render using VaderJS
const App = component(() => {
  return <ServicesPage />;
});

// Render to DOM
render(Vader.createElement(App), document.getElementById("app"));