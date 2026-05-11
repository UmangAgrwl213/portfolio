import { motion } from 'motion/react';
import { Mail, Send, MapPin, Linkedin, Github } from 'lucide-react';

export default function Contact() {
  return (
    <section id="contact" className="py-32 relative z-10 border-t border-white/5 flex flex-col items-center">
      <div className="max-w-7xl mx-auto px-6 w-full grid lg:grid-cols-2 gap-20">
        
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-[10px] uppercase tracking-widest font-bold opacity-30 italic mb-4 text-accent">04. Get In Touch</h2>
          <h3 className="text-7xl font-serif leading-[0.85] tracking-tight italic mb-8 text-white">Let's <br/>Connect</h3>
          
          <p className="text-white/60 text-lg font-light leading-relaxed mb-12 max-w-md">
            I'm currently looking for new opportunities and collaborations. Whether you have a project in mind or just want to say hi, my inbox is always open.
          </p>

          <div className="space-y-6">
            <div className="flex items-center gap-4 group cursor-pointer">
              <div className="w-12 h-12 rounded-full border border-white/10 flex items-center justify-center group-hover:border-accent transition-colors">
                <Mail size={20} className="text-white/60 group-hover:text-accent" />
              </div>
              <div>
                <p className="text-[10px] uppercase tracking-widest font-bold opacity-30 text-white">Email</p>
                <p className="text-white font-medium">umangagrawal213@gmail.com</p>
              </div>
            </div>

            <div className="flex items-center gap-4 group cursor-pointer">
              <div className="w-12 h-12 rounded-full border border-white/10 flex items-center justify-center group-hover:border-accent transition-colors">
                <MapPin size={20} className="text-white/60 group-hover:text-accent" />
              </div>
              <div>
                <p className="text-[10px] uppercase tracking-widest font-bold opacity-30 text-white">Location</p>
                <p className="text-white font-medium">Dehradun, India</p>
              </div>
            </div>
          </div>

          <div className="flex gap-6 mt-12">
            <a href="https://github.com/UmangAgrwl213" target="_blank" className="text-white/40 hover:text-accent transition-colors"><Github size={24} /></a>
            <a href="https://www.linkedin.com/in/umang-agrawal214/" target="_blank" className="text-white/40 hover:text-accent transition-colors"><Linkedin size={24} /></a>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="bg-white/5 p-8 border border-white/10"
        >
          <form action="https://api.web3forms.com/submit" method="POST" className="space-y-6">
            <input type="hidden" name="access_key" value="0a0d2f43-228a-43b8-b628-14d006e8893f" />
            <input type="hidden" name="subject" value="New Portfolio Message" />
            <input type="checkbox" name="botcheck" className="hidden" />

            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label className="text-[10px] uppercase tracking-widest font-bold opacity-30 text-white">Your Name</label>
                <input 
                  type="text" 
                  name="name"
                  required
                  placeholder="John Doe"
                  className="w-full bg-white/5 border border-white/10 px-4 py-3 text-white focus:outline-none focus:border-accent transition-colors font-light"
                />
              </div>
              <div className="space-y-2">
                <label className="text-[10px] uppercase tracking-widest font-bold opacity-30 text-white">Email Address</label>
                <input 
                  type="email" 
                  name="email"
                  required
                  placeholder="john@example.com"
                  className="w-full bg-white/5 border border-white/10 px-4 py-3 text-white focus:outline-none focus:border-accent transition-colors font-light"
                />
              </div>
            </div>

            <div className="space-y-2">
              <label className="text-[10px] uppercase tracking-widest font-bold opacity-30 text-white">Message</label>
              <textarea 
                name="message"
                required
                rows={5}
                placeholder="How can I help you?"
                className="w-full bg-white/5 border border-white/10 px-4 py-3 text-white focus:outline-none focus:border-accent transition-colors font-light resize-none"
              ></textarea>
            </div>

            <button 
              type="submit"
              className="w-full py-4 bg-accent text-bg font-bold text-[10px] uppercase tracking-[0.2em] hover:bg-white hover:text-bg transition-all duration-300 flex items-center justify-center gap-2"
            >
              Send Message
              <Send size={14} />
            </button>
          </form>
        </motion.div>
      </div>

      <footer className="w-full px-12 py-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center bg-transparent text-white/40 mt-32 gap-6">
         <div className="text-[10px] tracking-[0.2em] uppercase font-medium">
           Based in Dehradun & Working Worldwide
         </div>
         <div className="flex gap-4 items-center">
           <div className="w-2 h-2 rounded-full bg-accent animate-pulse"></div>
           <div className="text-[10px] tracking-[0.2em] uppercase font-medium opacity-70 italic">Status: Available for Work</div>
         </div>
         <div className="text-[10px] tracking-[0.2em] uppercase font-medium">
           © Umang Agrawal / 2026
         </div>
      </footer>
    </section>
  );
}
