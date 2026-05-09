import * as Vader from "vaderjs";
import { component, render, useState, useMemo } from "vaderjs";
import Button from "vaderjs-daisyui/Components/Actions/Button";

import { Modal } from "vaderjs-daisyui/Components/Actions/Modal"
/**
 * Updated Portfolio Page for Only Exteriors LLC
 * Using exact file names: IMG_4067.jpg, IMG_4573.jpg, IMG_4580.jpg, 
 * IMG_4604.jpg, IMG_4856.jpg, IMG_4877.jpg, IMG_4888.jpg, 
 * IMG_4889.jpg, IMG_4902.jpg, IMG_4909.jpg
 */
const PortfolioPage = component(({ onBackToHome }) => {
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [selectedProject, setSelectedProject] = useState(null);

  const categories = ["all", "Landscaping", "Cleanup", "Hardscape", "Lawn Care"];
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const projects = [
    {
      id: 1,
      title: "Full Property Restoration",
      category: "Cleanup",
      image: "IMG_4909.jpeg", 
      beforeImage: "IMG_4888.jpeg",
      description: "Extensive clearing of overgrown vegetation and debris. This transformation restored the usable square footage of the backyard and prepared the soil for new growth.",
      date: "April 2026"
    }, 
    {
      id: 3,
      title: "Desert Landscape Installation",
      category: "Landscaping",
      image: "IMG_4902.jpeg",
      beforeImage: "IMG_4877.jpeg", // Using same image for before and after to show the transformation in planting",
      description: "Removing years of invasive brush along the property line to reveal the underlying architecture and improve safety.",
      date: "February 2026"
    },
    {
      id: 4,
      title: "Perimeter Clearing",
      category: "Cleanup",
      image: "IMG_4910.jpeg",
      beforeImage: "IMG_4889.jpeg",
      description: "Removing years of invasive brush along the property line to reveal the underlying architecture and improve safety.",
      date: "May 2026"
    },
    {
      id: 5,
      title: "Premium Site Renovation",
      category: "Landscaping",
      image: "IMG_4604.png",
      beforeImage: "IMG_4580.jpeg",
      description: "A complete overhaul of the front exterior, focusing on curb appeal and sustainable drainage solutions.",
      date: "January 2026"
    },
    {
        id: 6,
        title: "Concrete Driveway Installation",
        category: "Hardscape",
        image: "IMG_4067.jpeg",
        beforeImage: "IMG_4067.jpeg",
        description: "Installation of a new concrete driveway to replace an old, cracked asphalt surface. This project included grading, drainage improvements, and a decorative finish.",
        date: "March 2026"
    }
  ];

  const filteredProjects = useMemo(() => {
    return selectedCategory === "all"
      ? projects
      : projects.filter((p) => p.category === selectedCategory);
  }, [selectedCategory]);

  return (
    <div className="min-h-screen bg-[#0f172a] text-slate-100 font-sans selection:bg-green-500/30 text-xl">
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
      <div className="relative pt-32 pb-20 overflow-hidden">
        <div className="max-w-6xl mx-auto px-2 relative z-10 text-center"> 
          <h1 className="text-5xl md:text-7xl font-black mb-6 tracking-tight">
            Proven <span className="  text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-emerald-500">Transformations</span>
          </h1>
          <p className="text-xl text-slate-400 max-w-2xl mx-auto">
            Real results for real properties. Browse our recent work using the filters below.
          </p>
        </div>
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[500px] bg-green-500/10 blur-[120px] rounded-full -z-10" />
      </div>
      
      {/* Category Filter */}
      <div className="sticky top-0 z-40 backdrop-blur-md bg-[#020617]/80 border-y border-white/5 py-4">
        <div className="max-w-6xl mx-auto px-6">
          <div className="flex flex-wrap gap-2 justify-center">
            {categories.map(cat => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-6 py-2 rounded-xl font-bold text-xs uppercase tracking-widest transition-all duration-300 ${
                  selectedCategory === cat
                    ? "bg-green-500 text-slate-900 shadow-lg shadow-green-500/20"
                    : "bg-slate-900 text-slate-400 hover:bg-slate-800 border border-slate-800"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>
      </div>
      
      {/* Portfolio Grid */}
      <div className="py-20 px-6 max-w-7xl mx-auto">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project) => (
            <div 
              key={project.id}
              className="group cursor-pointer bg-slate-900/50 border border-slate-800 rounded-2xl overflow-hidden hover:border-green-500/50 transition-all duration-300"
              onClick={() => setSelectedProject(project)}
            >
              <div className="relative aspect-video overflow-hidden">
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent to-transparent opacity-60" />
                <div className="absolute top-4 right-4 bg-green-500 text-slate-950 text-[10px] font-black px-3 py-1 rounded-full uppercase tracking-tighter">
                  {project.category}
                </div>
              </div>
              
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2 group-hover:text-green-400 transition-colors">
                  {project.title}
                </h3>
                <p className="text-slate-400 text-sm mb-4 line-clamp-2 leading-relaxed">
                  {project.description}
                </p>
                <div className="flex items-center justify-between text-[10px] font-bold text-slate-500 uppercase tracking-widest">
                  <span>{project.date}</span>
                  <span className="text-green-500">See Transformation →</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      
      {/* Project Detail Modal */}
      {selectedProject && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/90 backdrop-blur-sm" onClick={() => setSelectedProject(null)}>
          <div className="relative max-w-5xl w-full bg-slate-900 rounded-3xl border border-slate-800 shadow-2xl overflow-hidden max-h-[90vh] overflow-y-auto" onClick={e => e.stopPropagation()}>
            <button 
              onClick={() => setSelectedProject(null)}
              className="absolute top-6 right-6 z-10 w-10 h-10 rounded-full bg-slate-950 flex items-center justify-center text-white hover:text-green-500 transition-colors border border-slate-800"
            >
              ✕
            </button>
            
            <div className="p-8 md:p-12">
              <div className="grid md:grid-cols-2 gap-8 mb-10">
                <div className="space-y-4">
                  <span className="text-xs font-black text-slate-500 uppercase tracking-widest">Before</span>
                  <div className="rounded-2xl overflow-hidden aspect-video border border-slate-800">
                    <img src={selectedProject.beforeImage} alt="Before" className="w-full h-full object-cover" />
                  </div>
                </div>
                <div className="space-y-4">
                  <span className="text-xs font-black text-green-500 uppercase tracking-widest">After</span>
                  <div className="rounded-2xl overflow-hidden aspect-video border border-green-500/20">
                    <img src={selectedProject.image} alt="After" className="w-full h-full object-cover" />
                  </div>
                </div>
              </div>
              
              <div className="max-w-3xl">
                <div className="inline-block px-3 py-1 rounded-md bg-green-500/10 text-green-500 text-xs font-bold mb-4 uppercase">
                  {selectedProject.category}
                </div>
                <h3 className="text-4xl font-black mb-4">{selectedProject.title}</h3>
                <p className="text-slate-400 text-lg leading-relaxed mb-8">{selectedProject.description}</p>
                
                <Button 
                  onClick={() => { setSelectedProject(null); onBackToHome(); }}
                  className="w-full md:w-auto px-10 bg-green-500 border-none text-slate-900 font-black hover:bg-green-400"
                >
                  Get a Quote for Your Property
                </Button>
              </div>
            </div>
          </div>
        </div>
      )}
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
    
    <div className="bg-slate-800   rounded-2xl border border-slate-700/50 shadow-2xl overflow-hidden">
      
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
          <h3 className="text-2xl font-bold text-slate-100">Let's Transform Your Yard</h3>
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
            href="mailto:hello@onlyexterior.com?subject=Quote%20Request%20-%20My%20Yard"
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
              <span>Free estimates • No obligation</span>
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
});

render(Vader.createElement(PortfolioPage, null), document.getElementById("app"));