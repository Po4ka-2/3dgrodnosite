import { motion } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';
import { Badge } from '@/components/ui/badge';
import { AnimatedSection, StaggerContainer, StaggerItem } from '@/components/AnimatedSection';

const featuredProjects = [
  {
    id: '1',
    name: 'Sky Hall',
    image: '/images/project-skyhall.jpg',
    stats: {
      area: '124 850 m²',
      apartments: '1 300',
      parking: '900',
    },
    tags: ['PUBLIC BUILDINGS', 'IMPLEMENTED'],
  },
  {
    id: '2',
    name: 'Architecture',
    image: '/images/service-blueprint.jpg',
    description:
      'We provides comprehensive management services through the development, design and construction phases of general building projects.',
  },
  {
    id: '3',
    name: 'Business Center',
    image: '/images/project-business.jpg',
    description:
      "The building's facades are designed with glass mirror panels that reflect the sky clouds for lightness of the building.",
  },
];

const projectList = [
  { id: '4', name: 'Restaurant', category: 'PUBLIC BUILDINGS', status: 'IMPLEMENTED', area: '600 M²' },
  { id: '5', name: 'Business center', category: 'PUBLIC BUILDINGS', status: 'IMPLEMENTED', area: '1 800 M²' },
  { id: '6', name: 'Care Ambulatory', category: 'PUBLIC BUILDINGS', status: 'IMPLEMENTED', area: '600 M²' },
];

function ProjectCard({
  project,
}: {
  project: (typeof featuredProjects)[0];
}) {
  return (
    <motion.div
      whileHover={{ scale: 1.02 }}
      transition={{ duration: 0.3, ease: [0.25, 0.1, 0.25, 1] }}
      className="relative rounded-card overflow-hidden group cursor-pointer h-full min-h-[400px]"
    >
      {/* Background Image */}
      <div className="absolute inset-0">
        <img
          src={project.image}
          alt={project.name}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
      </div>

      {/* Content */}
      <div className="relative h-full flex flex-col justify-between p-6">
        {/* Top - Stats or Arrow */}
        <div className="flex justify-between items-start">
          {project.stats ? (
            <div className="text-white">
              <div className="text-2xl font-light">{project.stats.area}</div>
              <div className="mt-2 space-y-1">
                <div className="text-sm text-white/80">{project.stats.apartments}</div>
                <div className="text-xs text-white/60 uppercase tracking-wider">apartment</div>
                <div className="text-sm text-white/80">{project.stats.parking}</div>
                <div className="text-xs text-white/60 uppercase tracking-wider">parking spaces</div>
              </div>
            </div>
          ) : (
            <div />
          )}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileHover={{ scale: 1.1 }}
            className="w-10 h-10 rounded-full bg-bg-dark flex items-center justify-center"
          >
            <ArrowUpRight className="w-5 h-5 text-white" />
          </motion.div>
        </div>

        {/* Bottom - Title and Tags */}
        <div>
          <h3 className="text-2xl font-light text-white mb-3">{project.name}</h3>
          {project.description && (
            <p className="text-sm text-white/70 mb-4 line-clamp-3">{project.description}</p>
          )}
          {project.tags && (
            <div className="flex gap-2">
              {project.tags.map((tag) => (
                <Badge
                  key={tag}
                  variant="outline"
                  className="rounded-full px-3 py-1 text-[10px] tracking-widest uppercase border-white/30 text-white"
                >
                  {tag}
                </Badge>
              ))}
            </div>
          )}
        </div>
      </div>
    </motion.div>
  );
}

function ProjectListItem({
  project,
  index,
}: {
  project: (typeof projectList)[0];
  index: number;
}) {
  return (
    <AnimatedSection delay={index * 0.1}>
      <motion.div
        whileHover={{ backgroundColor: 'rgba(255,255,255,0.05)' }}
        className="flex items-center justify-between py-4 px-4 border-t border-border-dark cursor-pointer group transition-colors"
      >
        <div className="flex-1">
          <span className="text-white font-light">{project.name}</span>
        </div>
        <div className="hidden md:flex items-center gap-8 text-xs text-text-muted">
          <span>CATEGORY: {project.category}</span>
          <span>STATUS: {project.status}</span>
          <span>BUILDING AREA {project.area}</span>
        </div>
        <div className="ml-4">
          <ArrowUpRight className="w-5 h-5 text-white/50 group-hover:text-white transition-colors" />
        </div>
      </motion.div>
    </AnimatedSection>
  );
}

export function PortfolioSection() {
  return (
    <section id="portfolio" className="py-20 lg:py-32 bg-bg-dark">
      <div className="max-w-[1400px] mx-auto px-4 lg:px-12">
        {/* CTA Link */}
        <AnimatedSection>
          <div className="flex justify-end mb-8">
            <a
              href="#contact"
              className="inline-flex items-center gap-2 text-accent-orange text-sm tracking-wider hover:underline group"
            >
              BOOK A DISCOVERY CALL
              <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
            </a>
          </div>
        </AnimatedSection>

        {/* Featured Projects Grid */}
        <StaggerContainer className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4" staggerDelay={0.15}>
          <StaggerItem className="md:col-span-1">
            <ProjectCard project={featuredProjects[0]} />
          </StaggerItem>
          <StaggerItem className="md:col-span-1">
            <ProjectCard project={featuredProjects[1]} />
          </StaggerItem>
          <StaggerItem className="md:col-span-1">
            <ProjectCard project={featuredProjects[2]} />
          </StaggerItem>
        </StaggerContainer>

        {/* Project List */}
        <div className="mt-8">
          {projectList.map((project, index) => (
            <ProjectListItem key={project.id} project={project} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}
