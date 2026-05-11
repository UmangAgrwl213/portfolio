import { motion } from 'motion/react';
import { Terminal, Database, BrainCircuit, Code } from 'lucide-react';

export default function About() {
  const features = [
    {
      icon: <BrainCircuit className="text-accent" size={24} />,
      title: "Machine Learning",
      desc: "Building, training, and deploying scalable ML models for complex problem solving."
    },
    {
      icon: <Database className="text-accent" size={24} />,
      title: "Data Engineering",
      desc: "Architecting robust data pipelines and transforming unstructured data into analytics."
    },
    {
      icon: <Terminal className="text-accent" size={24} />,
      title: "Backend Dev",
      desc: "Developing fast, secure, and scalable RESTful APIs and microservices."
    },
    {
      icon: <Code className="text-accent" size={24} />,
      title: "Algorithm Design",
      desc: "Optimizing code performance and implementing advanced data structures."
    }
  ];

  return (
    <section id="about" className="py-32 relative z-10 px-6 max-w-7xl mx-auto border-t border-white/5">
      <div className="grid md:grid-cols-2 gap-16 items-center">
        <motion.div
           initial={{ opacity: 0, x: -30 }}
           whileInView={{ opacity: 1, x: 0 }}
           viewport={{ once: true, margin: "-100px" }}
           transition={{ duration: 0.8 }}
        >
          <h2 className="text-[10px] uppercase tracking-widest font-bold opacity-30 italic mb-4 text-accent">01. About Me</h2>
          <h3 className="text-5xl font-serif italic mb-6 text-white">Merging AI <br/>with Interaction</h3>
          <p className="text-white/60 text-lg font-light leading-relaxed mb-6">
            I am Umang Agrawal, a passionate developer at the intersection of Artificial Intelligence, Blockchain, and immersive web experiences. Currently in my final year at DIT University, I specialize in building robust systems—from deep learning models for forgery detection to decentralized supply chain trackers.
          </p>
          <p className="text-white/60 text-lg font-light leading-relaxed">
            My notable work includes **MedMinder**, an Android medical reminder suite, and a hybrid ResNet34-UNet architecture for AI forensics. I am currently mastering Java and DSA while crafting premium 3D experiences with Three.js that blur the line between web and reality.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {features.map((feature, idx) => (
            <motion.div 
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="p-6 rounded-none border border-[#1A1A1A]/10 hover:border-[#1A1A1A] bg-transparent group transition-colors"
            >
              <div className="mb-4 text-accent opacity-70 group-hover:opacity-100 transition-opacity">
                {feature.icon}
              </div>
              <h4 className="text-white font-semibold mb-2 text-xs uppercase tracking-widest">{feature.title}</h4>
              <p className="text-white/40 text-sm font-light leading-relaxed group-hover:text-white/60 transition-colors">{feature.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
