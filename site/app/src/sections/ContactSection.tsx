import { useState } from 'react';
import { ArrowUpRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { AnimatedSection } from '@/components/AnimatedSection';

export function ContactSection() {
  const [formData, setFormData] = useState({
    email: '',
    description: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log('Form submitted:', formData);
  };

  return (
    <section id="contact" className="py-20 lg:py-32 bg-white">
      <div className="max-w-[1400px] mx-auto px-4 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-4">
          {/* Left - Contact Form */}
          <AnimatedSection className="lg:col-span-5">
            <div className="bg-bg-dark rounded-card p-8 lg:p-10 h-full">
              <div className="flex items-center gap-3 mb-8">
                <ArrowUpRight className="w-6 h-6 text-white" />
                <h2 className="text-2xl lg:text-3xl font-light text-white">
                  Let's work together
                </h2>
              </div>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label className="text-xs text-text-muted uppercase tracking-widest mb-2 block">
                    EMAIL
                  </label>
                  <Input
                    type="email"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="bg-transparent border-0 border-b border-border-dark rounded-none px-0 text-white placeholder:text-text-muted focus-visible:ring-0 focus-visible:border-white"
                    placeholder="your@email.com"
                  />
                </div>

                <div>
                  <label className="text-xs text-text-muted uppercase tracking-widest mb-2 block">
                    PROJECT DESCRIPTION
                  </label>
                  <Input
                    type="text"
                    value={formData.description}
                    onChange={(e) => setFormData({ ...formData, description: e.target.value })}
                    className="bg-transparent border-0 border-b border-border-dark rounded-none px-0 text-white placeholder:text-text-muted focus-visible:ring-0 focus-visible:border-white"
                    placeholder="Tell us about your project"
                  />
                </div>

                <div className="pt-4">
                  <Button
                    type="submit"
                    className="rounded-full px-6 py-5 bg-white text-text-primary hover:bg-white/90 group"
                  >
                    SEND
                    <ArrowUpRight className="ml-2 w-4 h-4 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
                  </Button>
                </div>
              </form>
            </div>
          </AnimatedSection>

          {/* Middle - Image */}
          <AnimatedSection delay={0.2} className="lg:col-span-3">
            <div className="h-64 lg:h-full rounded-card overflow-hidden">
              <img
                src="/images/contact-abstract.jpg"
                alt="Abstract architecture"
                className="w-full h-full object-cover"
              />
            </div>
          </AnimatedSection>

          {/* Right - Contact Info */}
          <AnimatedSection delay={0.3} className="lg:col-span-4">
            <div className="bg-bg-secondary rounded-card p-8 lg:p-10 h-full flex flex-col">
              {/* Contact Details */}
              <div className="flex flex-wrap gap-4 mb-8">
                <span className="px-4 py-2 rounded-full border border-border text-sm text-text-secondary">
                  Building@gmail.com
                </span>
                <span className="px-4 py-2 rounded-full border border-border text-sm text-text-secondary">
                  (207) 555-019
                </span>
              </div>

              <h3 className="text-2xl font-light text-text-primary mb-auto">
                Get in touch
              </h3>

              {/* Social Links */}
              <div className="mt-8 pt-8 border-t border-border">
                <div className="flex justify-between items-center">
                  <a
                    href="#"
                    className="text-xs tracking-widest text-text-secondary hover:text-text-primary transition-colors"
                  >
                    FACEBOOK
                  </a>
                  <a
                    href="#"
                    className="text-xs tracking-widest text-text-secondary hover:text-text-primary transition-colors"
                  >
                    LINKEDIN
                  </a>
                  <a
                    href="#"
                    className="text-xs tracking-widest text-text-secondary hover:text-text-primary transition-colors"
                  >
                    INSTAGRAM
                  </a>
                </div>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
}
