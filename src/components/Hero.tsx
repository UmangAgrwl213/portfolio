import { motion } from 'motion/react';
import CanvasModel from './canvas/CanvasModel';

export default function Hero() {
  return (
    <section id="home" className="relative h-screen w-full flex items-center justify-center overflow-hidden">
      {/* 3D Canvas Background */}
      <CanvasModel />

      {/* Content Overlay */}
      <div className="z-10 text-center px-4 mt-20 max-w-4xl mx-auto flex flex-col items-center">
        <motion.div
           initial={{ opacity: 0, y: 30 }}
           animate={{ opacity: 1, y: 0 }}
           transition={{ duration: 1, ease: 'easeOut' }}
           className="mb-4 inline-flex items-center gap-2 px-3 py-1 bg-transparent"
        >
            <span className="w-2 h-2 rounded-full bg-accent animate-pulse"></span>
            <span className="text-[10px] uppercase tracking-widest font-bold opacity-50 text-white">Status: Available for Work</span>
        </motion.div>

        <motion.h1
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.2, ease: 'easeOut' }}
            className="text-6xl md:text-[120px] font-serif leading-[0.85] tracking-tight italic mb-8"
        >
            Digital <br/> Visionary
        </motion.h1>

        <motion.h2
             initial={{ opacity: 0, y: 20 }}
             animate={{ opacity: 1, y: 0 }}
             transition={{ duration: 1, delay: 0.4, ease: 'easeOut' }}
             className="text-xl md:text-3xl text-white font-light tracking-wide italic opacity-80"
        >
             Umang Agrawal <span className="mx-2 text-accent">|</span> AI & 3D Developer
        </motion.h2>

        <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.6, ease: 'easeOut' }}
            className="mt-6 text-white/60 max-w-2xl text-lg font-light leading-relaxed"
        >
            Crafting the future of AI Forensics and Immersive Web Experiences. 
            Final-year CS student at DIT University specialized in Deep Learning and Three.js.
        </motion.p>

        <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.8, ease: 'easeOut' }}
            className="mt-12 flex gap-4"
        >
            <a href="#projects" className="px-8 py-3 bg-accent text-bg hover:bg-white transition-all duration-300 font-semibold text-[10px] tracking-widest uppercase">
                View Work
            </a>
            <a href="#contact" className="px-8 py-3 border border-white/20 hover:border-accent text-white transition-all duration-300 font-semibold text-[10px] tracking-widest uppercase">
                Contact Me
            </a>
        </motion.div>
      </div>

      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 z-10 opacity-30">
        <span className="text-[10px] font-bold tracking-widest uppercase text-white">Scroll</span>
        <div className="h-10 w-[1px] bg-accent"></div>
      </div>
    </section>
  );
}
