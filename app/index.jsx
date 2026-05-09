import * as Vader from "vaderjs";
import { component, render, useState } from "vaderjs";
import Button from "vaderjs-daisyui/Components/Actions/Button";
import { Modal } from "vaderjs-daisyui/Components/Actions/Modal"
const main = component(() => {
  const [count, setCount] = useState(0);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  return (
    // Updated Palette: Deep Slate to Forest Green gradient for a more premium, modern feel
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

      {/* Hero Section with refined typography */}
      <div className="relative pt-20 pb-32 overflow-hidden">
        <div className="max-w-6xl mx-auto px-6 relative z-10 text-center"> 
          <h2 className="text-6xl md:text-8xl font-black mb-6 tracking-tight">
            The Yard You <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-emerald-600">
              Deserve.
            </span>
          </h2>
          <p className="text-xl text-slate-400 max-w-2xl mx-auto mb-10 leading-relaxed">
            From precision lawn care to full landscape transformations.
            We don't just cut grass—we engineer outdoor experiences.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              className="btn-lg bg-green-500 border-none text-slate-900 font-bold hover:bg-green-400 shadow-[0_0_20px_rgba(34,197,94,0.3)]"
              onClick={() => setIsModalOpen(true)}
            >
              Get My Free Quote
            </Button>
            <Button className="btn-lg btn-ghost border border-slate-700" onClick={()=> window.location.href="/portfolio"}>
              See Our Work
            </Button>
          </div>
        </div>

        {/* Subtle Background Glows */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[600px] bg-green-500/10 blur-[120px] rounded-full -z-10" />
      </div>

      {/* Comparison Section - The "Spazzz" */}
      <div className="w-full max-w-5xl mx-auto px-4 -mt-16 relative z-20">
        <div className="p-2 bg-white/5 backdrop-blur-sm rounded-[2rem] border border-white/10 shadow-2xl">
          <figure class="diff aspect-16/9 rounded-2xl overflow-hidden shadow-inner">
            <div class="diff-item-1">
              <img alt="After" src="IMG_4888.jpeg" className="object-cover" />
            </div>
            <div class="diff-item-2">
              <img alt="Before" src="IMG_4909.jpeg" className="object-cover" />
            </div>
            <div class="diff-resizer"></div>
          </figure>
          <div className="flex justify-between px-6 py-4 text-xs font-bold uppercase tracking-widest text-slate-500">
            <span>Before</span>
            <span>Slide to compare</span>
            <span>After</span>
          </div>
        </div>
      </div>

      {/* Services Section with "Glass" Cards */}
      <div className="py-32 grid md:grid-cols-3 gap-8 px-6 max-w-6xl mx-auto">
        {[
          { title: "Lawn Care", desc: "Precision edging, fertilization, and seasonal health management.", icon: "🌱" },
          { title: "Landscaping", desc: "Hardscape design, stone walkways, and native plant installations.", icon: "⛰️" },
          { title: "Cleanup", desc: "Full site debris removal and restoration after storms or seasons.", icon: "🧹" }
        ].map((service) => (
          <div className="group p-8 rounded-3xl bg-slate-800/40 border border-slate-700/50 hover:border-green-500/50 transition-all duration-300 hover:-translate-y-2">
            <div className="text-4xl mb-4">{service.icon}</div>
            <h3 className="text-2xl font-bold mb-3 group-hover:text-green-400 transition-colors">{service.title}</h3>
            <p className="text-slate-400 leading-relaxed">{service.desc}</p>
          </div>
        ))}
      </div>

      {/* Footer */}
      <footer className="border-t border-slate-800 py-12 text-center text-slate-500 text-sm">
        <p>© 2026 Only Exterior LLC • Built for lasting impressions.</p> 
      </footer>
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

render(Vader.createElement(main, null), document.getElementById("app"));