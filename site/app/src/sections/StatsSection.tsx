import { motion } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { useCountUp } from '@/hooks/useCountUp';

function StatCard({
  value,
  suffix,
  prefix = '',
  label,
  variant = 'light',
  badge,
  image,
  button,
  delay = 0,
}: {
  value: number;
  suffix: string;
  prefix?: string;
  label: string;
  variant?: 'light' | 'dark';
  badge?: string;
  image?: string;
  button?: { text: string; variant: 'dark' | 'light' };
  delay?: number;
}) {
  const count = useCountUp({ end: value, duration: 2000 });

  const isLight = variant === 'light';
  const bgClass = isLight ? 'bg-bg-secondary' : 'bg-bg-dark';
  const textClass = isLight ? 'text-text-primary' : 'text-white';
  const labelClass = isLight ? 'text-text-secondary' : 'text-text-muted';

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.7, delay, ease: [0.25, 0.1, 0.25, 1] }}
      className={`${bgClass} rounded-card p-6 lg:p-8 flex flex-col justify-between min-h-[200px] relative overflow-hidden`}
    >
      {/* Badge */}
      {badge && (
        <div className="flex justify-end mb-4">
          <Badge
            variant="outline"
            className={`rounded-full px-3 py-1 text-[10px] tracking-widest uppercase ${
              isLight ? 'border-text-primary/30' : 'border-white/30 text-white'
            }`}
          >
            {badge}
          </Badge>
        </div>
      )}

      {/* Content */}
      <div className="flex-1">
        <div className={`text-5xl lg:text-stats font-light ${textClass} tracking-tight`}>
          {prefix && <span>{prefix}</span>}
          {count.toLocaleString()}
          <span className="ml-1">{suffix}</span>
        </div>
        <p className={`mt-3 text-xs tracking-widest uppercase ${labelClass}`}>
          {label}
        </p>
      </div>

      {/* Image or Button */}
      <div className="mt-6 flex justify-between items-end">
        {image && (
          <div className="w-20 h-12 rounded-lg overflow-hidden">
            <img src={image} alt="" className="w-full h-full object-cover" />
          </div>
        )}
        {button && (
          <Button
            size="sm"
            className={`rounded-full px-4 py-2 text-xs tracking-wider ${
              button.variant === 'dark'
                ? 'bg-bg-dark-secondary text-white hover:bg-bg-dark'
                : 'bg-white text-text-primary hover:bg-white/90'
            }`}
          >
            {button.text}
            <ArrowUpRight className="ml-1 w-3 h-3" />
          </Button>
        )}
        {!image && !button && (
          <Button
            size="icon"
            className={`rounded-full w-10 h-10 ${
              isLight
                ? 'bg-bg-dark text-white hover:bg-bg-dark/90'
                : 'bg-white text-text-primary hover:bg-white/90'
            }`}
          >
            <ArrowUpRight className="w-4 h-4" />
          </Button>
        )}
      </div>
    </motion.div>
  );
}

export function StatsSection() {
  return (
    <section className="px-4 -mt-4">
      <div className="max-w-[1400px] mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <StatCard
            value={10}
            suffix="K"
            label="EMPLOYEES ALL OVER THE WORLD"
            badge="TEAM"
            delay={0}
          />
          <StatCard
            value={12}
            suffix="Bn"
            prefix="$"
            label="OF CONSTRUCTION"
            image="/images/about-facade.jpg"
            delay={0.15}
          />
          <StatCard
            value={1500}
            suffix=""
            label="PROJECTS EACH YEAR"
            variant="dark"
            button={{ text: 'EXPLORE OUR WORK', variant: 'dark' }}
            delay={0.3}
          />
        </div>
      </div>
    </section>
  );
}
