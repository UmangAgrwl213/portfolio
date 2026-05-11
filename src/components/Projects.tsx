import { motion } from 'motion/react';
import { Github, ExternalLink } from 'lucide-react';
import { projects } from '../constants';

export default function Projects() {
  return (
    <section id="projects" className="py-24 relative z-10 px-6 max-w-7xl mx-auto border-t border-white/5">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.8 }}
        className="mb-16"
      >
        <h2 className="text-[10px] uppercase tracking-widest font-bold opacity-30 italic mb-4 text-accent">03. Selected Works</h2>
        <h3 className="text-5xl font-serif italic text-white">Featured <br/>Projects</h3>
      </motion.div>

      <div className="grid lg:grid-cols-3 gap-8">
        {projects.map((project, idx) => (
          <motion.div 
            key={idx}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: idx * 0.1 }}
            className="flex flex-col h-full bg-white/5 border border-white/10 p-8 group overflow-hidden hover:border-accent transition-all duration-500"
          >
            <div className="flex justify-between items-baseline border-b border-white/10 pb-4 mb-4">
               <h4 className="text-3xl font-serif italic text-white group-hover:text-accent transition-colors">{project.title}</h4>
               <div className="flex gap-4 opacity-50 group-hover:opacity-100 transition-opacity">
                  <a href={project.github} className="text-white/40 hover:text-accent transition-opacity" title="View Source">
                    <Github size={16} />
                  </a>
                  <a href={project.link} className="text-white/40 hover:text-accent transition-opacity" title="Live Demo">
                    <ExternalLink size={16} />
                  </a>
               </div>
            </div>

            <p className="text-white/60 font-light text-sm leading-relaxed mb-8 flex-grow">
               {project.description}
            </p>

            <ul className="flex flex-wrap gap-2 mt-auto">
              {project.tags.map(tag => (
                  <li key={tag} className="text-[10px] uppercase tracking-widest font-bold border border-white/10 px-2 py-1 text-white/40 group-hover:border-accent/30 group-hover:text-accent transition-colors">
                    {tag}
                  </li>
              ))}
            </ul>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
