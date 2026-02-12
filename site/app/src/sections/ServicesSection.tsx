import { useState, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';
import { AnimatedSection } from '@/components/AnimatedSection';

const services = [
  { name: 'URBAN DESIGN', number: '01', image: '/images/service-urban.jpg' },
  { name: 'INTERIORS', number: '02', image: '/images/service-interiors.jpg' },
  { name: 'ARCHITECTURE', number: '03', image: '/images/service-architecture.jpg' },
  { name: 'LANDSCAPE', number: '04', image: '/images/service-landscape.jpg' },
  { name: 'RETAIL', number: '05', image: '/images/service-retail.jpg' },
  { name: 'ARTS TEAM', number: '06', image: '/images/service-arts.jpg' },
  { name: 'GRAPHICS', number: '07', image: '/images/service-graphics.jpg' },
  { name: '3D OBJECT RENDERING', number: '08', image: '/images/service-3d.jpg' },
];

function ServiceItem({
  service,
  onHover,
  isActive,
}: {
  service: (typeof services)[0];
  onHover: (service: (typeof services)[0] | null, e?: React.MouseEvent) => void;
  isActive: boolean;
}) {
  return (
    <motion.div
      className="relative py-4 cursor-pointer group"
      onMouseEnter={(e) => onHover(service, e)}
      onMouseLeave={() => onHover(null)}
    >
      <div className="flex items-baseline gap-4">
        <span
          className={`text-service font-light transition-all duration-300 ${
            isActive ? 'text-white' : 'text-white/40'
          }`}
        >
          {service.name}
        </span>
        <span
          className={`text-sm transition-all duration-300 ${
            isActive ? 'text-white/70' : 'text-white/30'
          }`}
        >
          {service.number}
        </span>
      </div>
    </motion.div>
  );
}

export function ServicesSection() {
  const [activeService, setActiveService] = useState<(typeof services)[0] | null>(null);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const containerRef = useRef<HTMLDivElement>(null);

  const handleHover = (service: (typeof services)[0] | null, e?: React.MouseEvent) => {
    setActiveService(service);
    if (e && containerRef.current) {
      const rect = containerRef.current.getBoundingClientRect();
      setMousePosition({
        x: e.clientX - rect.left,
        y: e.clientY - rect.top,
      });
    }
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (containerRef.current && activeService) {
      const rect = containerRef.current.getBoundingClientRect();
      setMousePosition({
        x: e.clientX - rect.left,
        y: e.clientY - rect.top,
      });
    }
  };

  return (
    <section id="services" className="py-20 lg:py-32 bg-bg-dark relative overflow-hidden">
      <div
        ref={containerRef}
        className="max-w-[1400px] mx-auto px-4 lg:px-12 relative"
        onMouseMove={handleMouseMove}
      >
        {/* Section Header */}
        <AnimatedSection>
          <h2 className="text-sm tracking-widest uppercase text-white mb-12">
            WHAT WE DO
          </h2>
        </AnimatedSection>

        {/* Services List */}
        <div className="relative">
          {/* Service Items */}
          <div className="flex flex-wrap gap-x-6 gap-y-0">
            {services.map((service, index) => (
              <AnimatedSection key={service.name} delay={index * 0.05}>
                <div className="flex items-center">
                  <ServiceItem
                    service={service}
                    onHover={handleHover}
                    isActive={activeService?.name === service.name}
                  />
                  {index < services.length - 1 && (
                    <span className="text-white/30 mx-4">/</span>
                  )}
                </div>
              </AnimatedSection>
            ))}
          </div>

          {/* Floating Image */}
          <AnimatePresence>
            {activeService && (
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.8 }}
                transition={{ duration: 0.2, ease: [0.25, 0.1, 0.25, 1] }}
                className="absolute pointer-events-none z-10"
                style={{
                  left: mousePosition.x - 100,
                  top: mousePosition.y - 75,
                  width: 200,
                  height: 150,
                }}
              >
                <div className="w-full h-full rounded-card overflow-hidden shadow-2xl">
                  <img
                    src={activeService.image}
                    alt={activeService.name}
                    className="w-full h-full object-cover"
                  />
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        {/* CTA Link */}
        <AnimatedSection delay={0.5}>
          <div className="mt-16 flex justify-end">
            <a
              href="#contact"
              className="inline-flex items-center gap-2 text-accent-orange text-sm tracking-wider hover:underline group"
            >
              BOOK A DISCOVERY CALL
              <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
            </a>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
}
