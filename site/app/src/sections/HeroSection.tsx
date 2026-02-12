import { motion } from 'framer-motion';
import { ArrowUpRight, Play } from 'lucide-react';
import { Button } from '@/components/ui/button';

export function HeroSection() {
  return (
    <section className="relative min-h-screen px-4 pt-24 pb-4">
      <div className="relative h-[calc(100vh-120px)] min-h-[600px] rounded-card-lg overflow-hidden">
        {/* Background Image */}
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: 'url(/images/hero-skyscrapers.jpg)',
          }}
        >
          <div className="absolute inset-0 bg-black/30" />
        </div>

        {/* Content */}
        <div className="relative h-full flex flex-col justify-between p-8 lg:p-12">
          {/* Top Content */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3, ease: [0.25, 0.1, 0.25, 1] }}
            className="max-w-md"
          >
            <p className="text-white/80 text-sm leading-relaxed">
              Turner is a North America-based, international construction services
              company and is a leading builder in diverse market segments.
            </p>
          </motion.div>

          {/* Middle Content - Headline */}
          <div className="flex-1 flex items-center">
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.5, ease: [0.25, 0.1, 0.25, 1] }}
              className="max-w-2xl"
            >
              <h1 className="text-4xl md:text-5xl lg:text-hero font-light text-white leading-tight">
                The best way to predict
                <br />
                the future is to invent it
              </h1>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.7, ease: [0.25, 0.1, 0.25, 1] }}
                className="mt-8"
              >
                <Button
                  variant="secondary"
                  className="rounded-full px-6 py-5 text-sm font-medium bg-white text-text-primary hover:bg-white/90 group"
                >
                  Learn More
                  <ArrowUpRight className="ml-2 w-4 h-4 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
                </Button>
              </motion.div>
            </motion.div>
          </div>

          {/* Video Thumbnail */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.9, ease: [0.25, 0.1, 0.25, 1] }}
            className="absolute bottom-8 right-8 lg:bottom-12 lg:right-12"
          >
            <div className="relative w-40 h-28 lg:w-52 lg:h-36 rounded-card overflow-hidden cursor-pointer group">
              <img
                src="/images/hero-video-thumb.jpg"
                alt="Video thumbnail"
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-black/20 flex items-center justify-center">
                <div className="w-10 h-10 rounded-full bg-white/90 flex items-center justify-center transition-transform duration-300 group-hover:scale-110">
                  <Play className="w-4 h-4 text-text-primary ml-0.5" fill="currentColor" />
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
