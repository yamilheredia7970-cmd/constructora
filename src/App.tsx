import { useState, useEffect } from 'react';
import { motion } from 'motion/react';
import { 
  Menu, X, Home, Building2, Hammer, ClipboardCheck, 
  PhoneCall, Search, FileText, HardHat, Key, 
  ShieldCheck, Users, Clock, Award, MapPin, Phone, Mail,
  Facebook, Instagram, Linkedin, ArrowRight, ChevronRight
} from 'lucide-react';

export default function App() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    setIsMobileMenuOpen(false);
    const element = document.getElementById(id);
    if (element) {
      const offset = 80;
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = element.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  const fadeInUp = {
    hidden: { opacity: 0, y: 40 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
  };

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  return (
    <div className="min-h-screen bg-slate-50 font-sans text-slate-900">
      {/* NAVBAR */}
      <header 
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled ? 'bg-white shadow-md py-3' : 'bg-transparent py-5'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center">
          <div className="flex items-center gap-2 cursor-pointer" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
            <Building2 className={`w-8 h-8 ${isScrolled ? 'text-orange-600' : 'text-orange-500'}`} />
            <span className={`text-2xl font-bold tracking-tight ${isScrolled ? 'text-slate-900' : 'text-white'}`}>
              Grupo Atlas
            </span>
          </div>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-8">
            {['Inicio', 'Servicios', 'Proyectos', 'Nosotros', 'Contacto'].map((item) => (
              <button 
                key={item}
                onClick={() => scrollToSection(item.toLowerCase())}
                className={`text-sm font-medium transition-colors hover:text-orange-500 ${
                  isScrolled ? 'text-slate-600' : 'text-slate-200'
                }`}
              >
                {item}
              </button>
            ))}
            <button 
              onClick={() => scrollToSection('contacto')}
              className="bg-orange-600 hover:bg-orange-700 text-white px-6 py-2.5 rounded-md font-semibold transition-colors shadow-lg shadow-orange-600/20"
            >
              Solicitar presupuesto
            </button>
          </nav>

          {/* Mobile Menu Toggle */}
          <button 
            className="md:hidden"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? (
              <X className={`w-6 h-6 ${isScrolled ? 'text-slate-900' : 'text-white'}`} />
            ) : (
              <Menu className={`w-6 h-6 ${isScrolled ? 'text-slate-900' : 'text-white'}`} />
            )}
          </button>
        </div>

        {/* Mobile Nav */}
        {isMobileMenuOpen && (
          <div className="md:hidden absolute top-full left-0 right-0 bg-white shadow-xl border-t border-slate-100 py-4 px-4 flex flex-col gap-4">
            {['Inicio', 'Servicios', 'Proyectos', 'Nosotros', 'Contacto'].map((item) => (
              <button 
                key={item}
                onClick={() => scrollToSection(item.toLowerCase())}
                className="text-left text-slate-700 font-medium py-2 border-b border-slate-50"
              >
                {item}
              </button>
            ))}
            <button 
              onClick={() => scrollToSection('contacto')}
              className="bg-orange-600 text-white px-6 py-3 rounded-md font-semibold mt-2 text-center"
            >
              Solicitar presupuesto
            </button>
          </div>
        )}
      </header>

      {/* HERO SECTION */}
      <section id="inicio" className="relative h-screen min-h-[600px] flex items-center">
        <div className="absolute inset-0 z-0 bg-slate-900">
          <img 
            src="https://picsum.photos/seed/construction/1920/1080" 
            alt="" 
            className="w-full h-full object-cover opacity-60"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-slate-900/70"></div>
        </div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
          <motion.div 
            initial="hidden"
            animate="visible"
            variants={staggerContainer}
            className="max-w-3xl"
          >
            <motion.h1 
              variants={fadeInUp}
              className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-white leading-tight mb-6"
            >
              Construimos proyectos sólidos que <span className="text-orange-500">perduran en el tiempo</span>
            </motion.h1>
            <motion.p 
              variants={fadeInUp}
              className="text-lg sm:text-xl text-slate-300 mb-10 max-w-2xl leading-relaxed"
            >
              Más de 15 años desarrollando obras residenciales y comerciales de alta calidad, cumpliendo plazos y superando expectativas.
            </motion.p>
            <motion.div variants={fadeInUp} className="flex flex-col sm:flex-row gap-4">
              <button 
                onClick={() => scrollToSection('contacto')}
                className="bg-orange-600 hover:bg-orange-700 text-white px-8 py-4 rounded-md font-bold text-lg transition-colors flex items-center justify-center gap-2 shadow-lg shadow-orange-600/30"
              >
                Solicitar presupuesto <ArrowRight className="w-5 h-5" />
              </button>
              <button 
                onClick={() => scrollToSection('proyectos')}
                className="bg-white/10 hover:bg-white/20 backdrop-blur-sm border border-white/30 text-white px-8 py-4 rounded-md font-bold text-lg transition-colors flex items-center justify-center"
              >
                Ver proyectos
              </button>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* STATS / SOCIAL PROOF */}
      <section className="bg-white py-12 border-b border-slate-200 relative z-20 -mt-10 mx-4 sm:mx-8 lg:mx-auto max-w-6xl rounded-xl shadow-xl">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 divide-y md:divide-y-0 md:divide-x divide-slate-200">
          {[
            { number: "+150", label: "Proyectos Completados" },
            { number: "+15", label: "Años de Experiencia" },
            { number: "100%", label: "Clientes Satisfechos" }
          ].map((stat, idx) => (
            <motion.div 
              key={idx}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="text-center px-4 py-4 md:py-0"
            >
              <h3 className="text-4xl md:text-5xl font-extrabold text-slate-900 mb-2">{stat.number}</h3>
              <p className="text-slate-500 font-medium uppercase tracking-wider text-sm">{stat.label}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* SERVICIOS */}
      <section id="servicios" className="py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-orange-600 font-bold tracking-wide uppercase text-sm mb-2">Nuestros Servicios</h2>
            <h3 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">Soluciones integrales para tu obra</h3>
            <p className="text-slate-600 text-lg">Abarcamos todas las etapas del proyecto constructivo, garantizando excelencia técnica y materiales de primera calidad.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { icon: Home, title: "Construcción de Viviendas", desc: "Casas a medida, desde los cimientos hasta los detalles finales de terminación." },
              { icon: Building2, title: "Obras Comerciales", desc: "Locales, oficinas y naves industriales diseñadas para potenciar tu negocio." },
              { icon: Hammer, title: "Remodelaciones", desc: "Renovación integral de espacios, optimizando funcionalidad y estética." },
              { icon: ClipboardCheck, title: "Dirección de Obra", desc: "Supervisión técnica, gestión de gremios y control estricto de calidad y plazos." }
            ].map((service, idx) => (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="bg-white p-8 rounded-xl shadow-sm border border-slate-100 hover:shadow-md transition-shadow group"
              >
                <div className="w-14 h-14 bg-orange-50 rounded-lg flex items-center justify-center mb-6 group-hover:bg-orange-600 transition-colors">
                  <service.icon className="w-7 h-7 text-orange-600 group-hover:text-white transition-colors" />
                </div>
                <h4 className="text-xl font-bold text-slate-900 mb-3">{service.title}</h4>
                <p className="text-slate-600 leading-relaxed">{service.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* PROYECTOS DESTACADOS */}
      <section id="proyectos" className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
            <div className="max-w-2xl">
              <h2 className="text-orange-600 font-bold tracking-wide uppercase text-sm mb-2">Portafolio</h2>
              <h3 className="text-3xl md:text-4xl font-bold text-slate-900">Proyectos Destacados</h3>
            </div>
            <button 
              onClick={() => scrollToSection('contacto')}
              className="text-orange-600 font-semibold flex items-center gap-1 hover:text-orange-700 transition-colors"
            >
              Ver todos los proyectos <ChevronRight className="w-5 h-5" />
            </button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { img: "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&q=80&w=800", title: "Residencia Los Pinos", type: "Vivienda Unifamiliar" },
              { img: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&q=80&w=800", title: "Edificio Corporativo Nexus", type: "Obra Comercial" },
              { img: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&q=80&w=800", title: "Casa Minimalista Sur", type: "Vivienda Unifamiliar" },
              { img: "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?auto=format&fit=crop&q=80&w=800", title: "Complejo Altos del Valle", type: "Desarrollo Residencial" },
              { img: "https://images.unsplash.com/photo-1504307651254-35680f356f90?auto=format&fit=crop&q=80&w=800", title: "Oficinas Tech Hub", type: "Remodelación Comercial" },
              { img: "https://images.unsplash.com/photo-1503387762-592deb58ef4e?auto=format&fit=crop&q=80&w=800", title: "Centro Médico Norte", type: "Obra Comercial" }
            ].map((project, idx) => (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="group relative overflow-hidden rounded-xl aspect-[4/3] cursor-pointer"
              >
                <img 
                  src={project.img} 
                  alt={project.title} 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/90 via-slate-900/40 to-transparent opacity-80 transition-opacity duration-300"></div>
                
                <div className="absolute bottom-0 left-0 right-0 p-6 translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                  <p className="text-orange-400 font-medium text-sm mb-1">{project.type}</p>
                  <h4 className="text-white text-xl font-bold">{project.title}</h4>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* PROCESO DE TRABAJO */}
      <section id="nosotros" className="py-24 bg-slate-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-orange-500 font-bold tracking-wide uppercase text-sm mb-2">Metodología</h2>
            <h3 className="text-3xl md:text-4xl font-bold mb-4">Nuestro Proceso de Trabajo</h3>
            <p className="text-slate-400 text-lg">Un enfoque estructurado y transparente para asegurar el éxito de cada proyecto desde el primer contacto hasta la entrega de llaves.</p>
          </div>

          <div className="relative">
            {/* Line connecting steps (desktop) */}
            <div className="hidden md:block absolute top-1/2 left-0 right-0 h-0.5 bg-slate-800 -translate-y-1/2 z-0"></div>
            
            <div className="grid grid-cols-1 md:grid-cols-5 gap-8 relative z-10">
              {[
                { icon: PhoneCall, title: "1. Contacto", desc: "Reunión inicial para entender tus necesidades." },
                { icon: Search, title: "2. Evaluación", desc: "Análisis del terreno y viabilidad técnica." },
                { icon: FileText, title: "3. Presupuesto", desc: "Propuesta detallada y cronograma de obra." },
                { icon: HardHat, title: "4. Ejecución", desc: "Construcción con reportes de avance regulares." },
                { icon: Key, title: "5. Entrega", desc: "Revisión final y entrega de llaves en mano." }
              ].map((step, idx) => (
                <motion.div 
                  key={idx}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: idx * 0.1 }}
                  className="flex flex-col items-center text-center"
                >
                  <div className="w-20 h-20 rounded-full bg-slate-800 border-4 border-slate-900 flex items-center justify-center mb-6 shadow-xl relative">
                    <step.icon className="w-8 h-8 text-orange-500" />
                    {/* Number badge */}
                    <div className="absolute -top-2 -right-2 w-8 h-8 rounded-full bg-orange-600 text-white font-bold flex items-center justify-center text-sm border-2 border-slate-900">
                      {idx + 1}
                    </div>
                  </div>
                  <h4 className="text-lg font-bold mb-2">{step.title.split('. ')[1]}</h4>
                  <p className="text-slate-400 text-sm leading-relaxed">{step.desc}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* DIFERENCIALES */}
      <section className="py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div 
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-orange-600 font-bold tracking-wide uppercase text-sm mb-2">Por qué elegirnos</h2>
              <h3 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6">Construimos confianza en cada metro cuadrado</h3>
              <p className="text-slate-600 text-lg mb-8 leading-relaxed">
                En Grupo Atlas no solo levantamos paredes, construimos relaciones a largo plazo basadas en la transparencia, la calidad y el compromiso absoluto con los resultados.
              </p>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {[
                  { icon: ShieldCheck, title: "Materiales de Calidad", desc: "Trabajamos solo con primeras marcas." },
                  { icon: Users, title: "Equipo Profesional", desc: "Arquitectos e ingenieros experimentados." },
                  { icon: Clock, title: "Cumplimiento de Plazos", desc: "Cronogramas estrictos y realistas." },
                  { icon: Award, title: "Garantía de Obra", desc: "Respaldo total post-construcción." }
                ].map((item, idx) => (
                  <div key={idx} className="flex gap-4">
                    <div className="flex-shrink-0 mt-1">
                      <div className="w-10 h-10 rounded-full bg-orange-100 flex items-center justify-center">
                        <item.icon className="w-5 h-5 text-orange-600" />
                      </div>
                    </div>
                    <div>
                      <h4 className="font-bold text-slate-900 mb-1">{item.title}</h4>
                      <p className="text-sm text-slate-600">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
            
            <motion.div 
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="relative"
            >
              <div className="aspect-[4/5] rounded-2xl overflow-hidden shadow-2xl">
                <img 
                  src="https://images.unsplash.com/photo-1504307651254-35680f356f90?auto=format&fit=crop&q=80&w=1000" 
                  alt="Arquitecto revisando planos" 
                  className="w-full h-full object-cover"
                  referrerPolicy="no-referrer"
                />
              </div>
              {/* Floating badge */}
              <div className="absolute -bottom-8 -left-8 bg-white p-6 rounded-xl shadow-xl max-w-xs hidden sm:block border border-slate-100">
                <div className="flex items-center gap-4 mb-2">
                  <div className="w-12 h-12 bg-orange-600 rounded-full flex items-center justify-center text-white font-bold text-xl">
                    15
                  </div>
                  <div>
                    <p className="font-bold text-slate-900">Años de</p>
                    <p className="text-slate-500 text-sm">Trayectoria impecable</p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* TESTIMONIOS */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-orange-600 font-bold tracking-wide uppercase text-sm mb-2">Testimonios</h2>
            <h3 className="text-3xl md:text-4xl font-bold text-slate-900">Lo que dicen nuestros clientes</h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { name: "Carlos Mendoza", role: "Propietario Residencia", text: "El nivel de detalle y profesionalismo de Grupo Atlas superó mis expectativas. Entregaron mi casa en el plazo exacto acordado y sin sorpresas en el presupuesto.", img: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80&w=150&h=150" },
              { name: "Laura Gómez", role: "Directora Comercial", text: "Remodelaron nuestras oficinas corporativas sin interrumpir nuestra operación. Un equipo sumamente respetuoso, limpio y eficiente. Totalmente recomendados.", img: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=150&h=150" },
              { name: "Roberto Silva", role: "Inversor Inmobiliario", text: "He trabajado con varias constructoras y Atlas es la única con la que repito. Su gestión de obra y control de calidad me dan la tranquilidad que necesito como inversor.", img: "https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&q=80&w=150&h=150" }
            ].map((testimonial, idx) => (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="bg-slate-50 p-8 rounded-xl border border-slate-100 relative"
              >
                {/* Quote icon */}
                <div className="absolute top-6 right-8 text-slate-200">
                  <svg width="40" height="40" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                    <path d="M14.017 21L16.41 14.596C16.645 13.982 16.763 13.344 16.763 12.696V3H24V12.696C24 14.474 23.513 16.195 22.593 17.683C21.673 19.171 20.355 20.37 18.784 21.146L14.017 21ZM4.017 21L6.41 14.596C6.645 13.982 6.763 13.344 6.763 12.696V3H14V12.696C14 14.474 13.513 16.195 12.593 17.683C11.673 19.171 10.355 20.37 8.784 21.146L4.017 21Z" />
                  </svg>
                </div>
                
                <p className="text-slate-600 mb-8 relative z-10 italic">"{testimonial.text}"</p>
                <div className="flex items-center gap-4">
                  <img src={testimonial.img} alt={testimonial.name} className="w-12 h-12 rounded-full object-cover" referrerPolicy="no-referrer" />
                  <div>
                    <h5 className="font-bold text-slate-900">{testimonial.name}</h5>
                    <p className="text-sm text-slate-500">{testimonial.role}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="py-20 bg-orange-600 relative overflow-hidden">
        {/* Abstract background pattern */}
        <div className="absolute inset-0 opacity-10">
          <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
                <path d="M 40 0 L 0 0 0 40" fill="none" stroke="white" strokeWidth="1"/>
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#grid)" />
          </svg>
        </div>
        
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">¿Listo para comenzar tu proyecto?</h2>
          <p className="text-orange-100 text-lg md:text-xl mb-10 max-w-2xl mx-auto">
            Contáctanos hoy mismo para agendar una reunión de evaluación sin cargo. Nuestro equipo de expertos está listo para asesorarte.
          </p>
          <button 
            onClick={() => scrollToSection('contacto')}
            className="bg-white text-orange-600 hover:bg-slate-50 px-8 py-4 rounded-md font-bold text-lg transition-colors shadow-xl"
          >
            Solicitar presupuesto ahora
          </button>
        </div>
      </section>

      {/* CONTACTO */}
      <section id="contacto" className="py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            
            {/* Contact Info */}
            <motion.div 
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <h2 className="text-orange-600 font-bold tracking-wide uppercase text-sm mb-2">Contacto</h2>
              <h3 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6">Hablemos de tu próxima obra</h3>
              <p className="text-slate-600 mb-10 text-lg">
                Completa el formulario y un asesor comercial se pondrá en contacto contigo a la brevedad para coordinar una visita o reunión.
              </p>

              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center shadow-sm flex-shrink-0">
                    <MapPin className="w-6 h-6 text-orange-600" />
                  </div>
                  <div>
                    <h4 className="font-bold text-slate-900 text-lg">Oficina Central</h4>
                    <p className="text-slate-600">Av. Libertador 1234, Piso 5<br/>Ciudad Metropolitana, CP 1000</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center shadow-sm flex-shrink-0">
                    <Phone className="w-6 h-6 text-orange-600" />
                  </div>
                  <div>
                    <h4 className="font-bold text-slate-900 text-lg">Teléfono</h4>
                    <p className="text-slate-600">+54 11 4567-8900<br/>Lunes a Viernes, 9:00 a 18:00 hs</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center shadow-sm flex-shrink-0">
                    <Mail className="w-6 h-6 text-orange-600" />
                  </div>
                  <div>
                    <h4 className="font-bold text-slate-900 text-lg">Email</h4>
                    <p className="text-slate-600">presupuestos@grupoatlas.com<br/>info@grupoatlas.com</p>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Contact Form */}
            <motion.div 
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="bg-white p-8 md:p-10 rounded-2xl shadow-xl border border-slate-100"
            >
              <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-slate-700 mb-2">Nombre completo *</label>
                    <input 
                      type="text" 
                      id="name" 
                      className="w-full px-4 py-3 rounded-md border border-slate-300 focus:ring-2 focus:ring-orange-500 focus:border-orange-500 outline-none transition-all"
                      placeholder="Ej: Juan Pérez"
                      required
                    />
                  </div>
                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-slate-700 mb-2">Teléfono *</label>
                    <input 
                      type="tel" 
                      id="phone" 
                      className="w-full px-4 py-3 rounded-md border border-slate-300 focus:ring-2 focus:ring-orange-500 focus:border-orange-500 outline-none transition-all"
                      placeholder="Ej: +54 11 1234 5678"
                      required
                    />
                  </div>
                </div>
                
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-slate-700 mb-2">Email *</label>
                  <input 
                    type="email" 
                    id="email" 
                    className="w-full px-4 py-3 rounded-md border border-slate-300 focus:ring-2 focus:ring-orange-500 focus:border-orange-500 outline-none transition-all"
                    placeholder="tu@email.com"
                    required
                  />
                </div>

                <div>
                  <label htmlFor="service" className="block text-sm font-medium text-slate-700 mb-2">Tipo de proyecto</label>
                  <select 
                    id="service" 
                    className="w-full px-4 py-3 rounded-md border border-slate-300 focus:ring-2 focus:ring-orange-500 focus:border-orange-500 outline-none transition-all bg-white"
                  >
                    <option value="">Selecciona una opción</option>
                    <option value="vivienda">Construcción de Vivienda</option>
                    <option value="comercial">Obra Comercial</option>
                    <option value="remodelacion">Remodelación</option>
                    <option value="otro">Otro</option>
                  </select>
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-slate-700 mb-2">Mensaje o detalles del proyecto</label>
                  <textarea 
                    id="message" 
                    rows={4}
                    className="w-full px-4 py-3 rounded-md border border-slate-300 focus:ring-2 focus:ring-orange-500 focus:border-orange-500 outline-none transition-all resize-none"
                    placeholder="Cuéntanos brevemente sobre tu proyecto, ubicación, metros cuadrados estimados..."
                  ></textarea>
                </div>

                <button 
                  type="submit"
                  className="w-full bg-slate-900 hover:bg-slate-800 text-white font-bold py-4 rounded-md transition-colors shadow-lg"
                >
                  Enviar consulta
                </button>
                <p className="text-xs text-slate-500 text-center mt-4">
                  Tus datos están seguros con nosotros. No enviamos spam.
                </p>
              </form>
            </motion.div>

          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="bg-slate-900 text-slate-300 py-12 border-t border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
            <div className="col-span-1 md:col-span-2">
              <div className="flex items-center gap-2 mb-4">
                <Building2 className="w-8 h-8 text-orange-500" />
                <span className="text-2xl font-bold tracking-tight text-white">
                  Grupo Atlas
                </span>
              </div>
              <p className="text-slate-400 max-w-md mb-6">
                Empresa constructora líder especializada en obras residenciales y comerciales de alta calidad. Construimos el futuro, hoy.
              </p>
              <div className="flex gap-4">
                <a href="#" className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center hover:bg-orange-600 hover:text-white transition-colors">
                  <Facebook className="w-5 h-5" />
                </a>
                <a href="#" className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center hover:bg-orange-600 hover:text-white transition-colors">
                  <Instagram className="w-5 h-5" />
                </a>
                <a href="#" className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center hover:bg-orange-600 hover:text-white transition-colors">
                  <Linkedin className="w-5 h-5" />
                </a>
              </div>
            </div>
            
            <div>
              <h4 className="text-white font-bold mb-4">Enlaces Rápidos</h4>
              <ul className="space-y-2">
                {['Inicio', 'Servicios', 'Proyectos', 'Nosotros', 'Contacto'].map((item) => (
                  <li key={item}>
                    <button 
                      onClick={() => scrollToSection(item.toLowerCase())}
                      className="hover:text-orange-500 transition-colors"
                    >
                      {item}
                    </button>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h4 className="text-white font-bold mb-4">Servicios</h4>
              <ul className="space-y-2">
                <li><a href="#" className="hover:text-orange-500 transition-colors">Construcción Residencial</a></li>
                <li><a href="#" className="hover:text-orange-500 transition-colors">Obras Comerciales</a></li>
                <li><a href="#" className="hover:text-orange-500 transition-colors">Remodelaciones</a></li>
                <li><a href="#" className="hover:text-orange-500 transition-colors">Dirección de Obra</a></li>
              </ul>
            </div>
          </div>
          
          <div className="pt-8 border-t border-slate-800 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-slate-500">
            <p>&copy; {new Date().getFullYear()} Grupo Atlas Constructora. Todos los derechos reservados.</p>
            <div className="flex gap-4">
              <a href="#" className="hover:text-white transition-colors">Política de Privacidad</a>
              <a href="#" className="hover:text-white transition-colors">Términos y Condiciones</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
