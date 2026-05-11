import { motion } from 'motion/react';
import { skills } from '../constants';

export default function Skills() {
  return (
    <section id="skills" className="py-24 relative z-10 px-6 max-w-7xl mx-auto border-t border-white/5">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.8 }}
        className="mb-16"
      >
        <h2 className="text-[10px] uppercase tracking-widest font-bold opacity-30 italic mb-4 text-accent">02. Technical Arsenal</h2>
        <h3 className="text-5xl font-serif italic text-white">Core <br/>Competencies</h3>
      </motion.div>

      <div className="grid md:grid-cols-2 gap-x-16 gap-y-10">
        {skills.map((skill, idx) => (
          <motion.div 
            key={idx}
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: idx * 0.1 }}
            className="flex flex-col gap-2"
          >
            <div className="flex justify-between items-center text-[10px] font-bold uppercase tracking-widest text-white/80">
               <span>{skill.name}</span>
               <span className="text-accent">{skill.level}%</span>
            </div>
            
            <div className="h-[2px] w-full bg-white/5 overflow-hidden rounded-full">
               <motion.div 
                 initial={{ width: 0 }}
                 whileInView={{ width: `${skill.level}%` }}
                 viewport={{ once: true }}
                 transition={{ duration: 1.5, delay: 0.2 + (idx * 0.1), ease: "easeOut" }}
                 className="h-full bg-accent shadow-[0_0_10px_rgba(45,212,191,0.5)]"
               />
            </div>
          </motion.div>
        ))}
      </div>

      <motion.div 
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1 }}
        className="mt-20 pt-10 border-t border-white/5 grid grid-cols-2 md:grid-cols-4 gap-8"
      >
         {[
           { label: "Frameworks", items: ["PyTorch", "React", "Next.js", "GSAP"] },
           { label: "Data & ML", items: ["Pandas", "Scikit-Learn", "OpenCV", "NumPy"] },
           { label: "Tools", items: ["Three.js", "Vite", "Git", "Framer Motion"] },
           { label: "Deployment", items: ["Vercel", "Cloud Run", "Docker", "Linux"] },
         ].map((category, i) => (
            <div key={i}>
                <h4 className="text-[10px] uppercase tracking-widest font-bold text-accent italic mb-4 opacity-30">{category.label}</h4>
               <ul className="flex flex-col gap-2">
                 {category.items.map((item, j) => (
                    <li key={j} className="text-sm text-white/50 font-light hover:text-white transition-colors">{item}</li>
                 ))}
               </ul>
            </div>
         ))}
      </motion.div>
    </section>
  );
}
