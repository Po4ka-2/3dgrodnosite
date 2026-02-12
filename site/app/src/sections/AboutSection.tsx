import { Play } from 'lucide-react';
import { AnimatedSection, StaggerContainer, StaggerItem } from '@/components/AnimatedSection';

export function AboutSection() {
  return (
    <section id="about" className="py-20 lg:py-32 px-4 lg:px-12 bg-white">
      <div className="max-w-[1400px] mx-auto">
        {/* Top Text */}
        <AnimatedSection>
          <p className="text-sm text-text-secondary max-w-md mb-12">
            We provide comprehensive management services through the
            development, design and construction phases of general building projects.
          </p>
        </AnimatedSection>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16">
          {/* Left - Images Grid */}
          <StaggerContainer className="grid grid-cols-2 gap-4" staggerDelay={0.15}>
            <StaggerItem className="col-span-1 row-span-2">
              <div className="h-full min-h-[400px] rounded-card overflow-hidden">
                <img
                  src="/images/about-interior-1.jpg"
                  alt="Modern interior"
                  className="w-full h-full object-cover"
                />
              </div>
            </StaggerItem>
            <StaggerItem>
              <div className="h-48 rounded-card overflow-hidden">
                <img
                  src="/images/about-building.jpg"
                  alt="Building exterior"
                  className="w-full h-full object-cover"
                />
              </div>
            </StaggerItem>
            <StaggerItem>
              <div className="h-48 rounded-card overflow-hidden relative group cursor-pointer">
                <img
                  src="/images/about-interior-2.jpg"
                  alt="Interior design"
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-black/30 flex items-center justify-center">
                  <div className="flex items-center gap-2 text-white">
                    <div className="w-8 h-8 rounded-full bg-white/90 flex items-center justify-center">
                      <Play className="w-3 h-3 text-text-primary ml-0.5" fill="currentColor" />
                    </div>
                    <span className="text-xs tracking-widest uppercase">Learn More About</span>
                  </div>
                </div>
              </div>
            </StaggerItem>
            <StaggerItem className="col-span-2">
              <div className="h-56 rounded-card overflow-hidden">
                <img
                  src="/images/about-facade.jpg"
                  alt="Building facade"
                  className="w-full h-full object-cover"
                />
              </div>
            </StaggerItem>
          </StaggerContainer>

          {/* Right - Text Content */}
          <div className="flex flex-col justify-center">
            <AnimatedSection delay={0.3}>
              <h2 className="text-sm tracking-widest uppercase text-text-primary mb-6">
                About
              </h2>
            </AnimatedSection>

            <AnimatedSection delay={0.4}>
              <div className="space-y-6 mb-10">
                <p className="text-sm text-text-secondary leading-relaxed">
                  The company has earned recognition for undertaking large, complex
                  projects, fostering innovation, embracing emerging technologies, and
                  making a difference for their clients, employees and community.
                </p>
                <p className="text-sm text-text-secondary leading-relaxed">
                  Turner offers clients the accessibility and support of a local firm
                  with the stability and resources of a multi-national organization.
                </p>
              </div>
            </AnimatedSection>

            <AnimatedSection delay={0.5}>
              <blockquote className="text-2xl lg:text-3xl font-light text-text-primary leading-snug">
                Our vision is to be the highest value provider of global construction
                services and technical expertise.
              </blockquote>
            </AnimatedSection>
          </div>
        </div>
      </div>
    </section>
  );
}
