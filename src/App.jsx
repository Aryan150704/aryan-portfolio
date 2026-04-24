import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

export default function Portfolio() {
  const [pos, setPos] = useState({ x: 0, y: 0 });
  const [showTop, setShowTop] = useState(false);

  useEffect(() => {
    const mouse = (e) => setPos({ x: e.clientX, y: e.clientY });
    const scroll = () => setShowTop(window.scrollY > 300);
    window.addEventListener('mousemove', mouse);
    window.addEventListener('scroll', scroll);
    return () => {
      window.removeEventListener('mousemove', mouse);
      window.removeEventListener('scroll', scroll);
    };
  }, []);

  const goTo = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  const skills = ['Java','Spring Boot','REST APIs','MySQL','PostgreSQL','JavaScript','HTML/CSS','Git','Postman','DSA','OOP','System Design'];

  const projects = [
  {
    title: "REST API Engine",
    desc: "Designed scalable Spring Boot REST APIs using layered architecture, CRUD operations and optimized JPA database handling.",
    repo: "https://github.com/Aryan150704/rest-api-engine",
    colors: "from-cyan-500/20 via-blue-500/10 to-indigo-500/20"
  },
  {
    title: "Student Management System",
    desc: "Built a full-stack student data management platform using Spring MVC, Thymeleaf and MySQL for seamless operations.",
    repo: "https://github.com/Aryan150704/student-management-system",
    colors: "from-emerald-500/20 via-green-500/10 to-lime-500/20"
  },
  {
    title: "Video Meet App",
    desc: "Created a real-time video calling platform with authentication, session handling and low-latency communication.",
    repo: "https://github.com/Aryan150704/video-call-app",
    colors: "from-pink-500/20 via-fuchsia-500/10 to-violet-500/20"
  }
];

  return (
    <div className="min-h-screen bg-slate-950 text-white relative overflow-x-hidden">
      <div
        className="pointer-events-none fixed w-72 h-72 rounded-full blur-3xl bg-cyan-400/20 -translate-x-1/2 -translate-y-1/2 z-0 transition-all duration-75"
        style={{ left: pos.x, top: pos.y }}
      />
      <div
        className="pointer-events-none fixed w-5 h-5 rounded-full border border-white/60 -translate-x-1/2 -translate-y-1/2 z-50 transition-all duration-75"
        style={{ left: pos.x, top: pos.y }}
      />

      <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(168,85,247,0.22),transparent_25%),radial-gradient(circle_at_80%_10%,rgba(59,130,246,0.22),transparent_25%),radial-gradient(circle_at_50%_80%,rgba(236,72,153,0.18),transparent_30%)]" />

      <nav className="sticky top-0 z-40 backdrop-blur border-b border-white/10">
        <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
          <div className="font-black text-2xl">ARYAN.dev ✦</div>
          <div className="flex gap-6 text-sm uppercase">
            <button onClick={() => goTo('projects')} className="hover:text-cyan-300 transition">Projects</button>
            <button onClick={() => goTo('research')} className="hover:text-fuchsia-300 transition">Research</button>
            <button onClick={() => goTo('contact')} className="hover:text-yellow-300 transition">Contact</button>
          </div>
        </div>
      </nav>

      <section className="max-w-7xl mx-auto px-6 pt-16 pb-20 grid lg:grid-cols-2 gap-12 relative z-10">
        <div>
          <span className="px-4 py-2 rounded-full bg-white/10 border border-white/10">Open to SDE / AMTS Roles</span>
          <h1 className="text-6xl md:text-7xl font-black leading-tight mt-6">
            Building <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-fuchsia-400 to-yellow-300">Scalable Systems</span>
          </h1>
          <p className="mt-6 text-xl text-slate-300 max-w-xl">Aryan Chaudhary — backend-focused engineer with DSA strength, product sense, and research-driven thinking.</p>
          <div className="flex gap-4 mt-8 flex-wrap">
            <button onClick={() => goTo('contact')} className="px-6 py-3 rounded-2xl bg-white text-black font-semibold hover:scale-105 transition">Hire Me</button>
            <button onClick={() => goTo('projects')} className="px-6 py-3 rounded-2xl border border-white/20 hover:bg-white hover:text-black transition">Explore Work</button>
          </div>
        </div>

        <div className="grid grid-cols-2 gap-5">
          <div className="col-span-2 p-8 rounded-[2rem] bg-gradient-to-br from-cyan-500 to-blue-700 shadow-2xl hover:scale-[1.02] transition">
            <div className="text-sm uppercase opacity-80">Signature Stack</div>
            <div className="text-4xl font-bold mt-2">Java • Spring Boot</div>
            <p className="mt-3 opacity-90">High-performance REST APIs, clean architecture, production mindset.</p>
          </div>
          <div className="p-6 rounded-[2rem] bg-white/5 border border-white/10 hover:-translate-y-2 transition">
            <div className="text-2xl font-bold">500+</div>
            <p className="text-slate-300 mt-2">DSA Problems Solved</p>
          </div>
          <div className="p-6 rounded-[2rem] bg-white/5 border border-white/10 hover:-translate-y-2 transition">
            <div className="text-2xl font-bold">Researcher</div>
            <p className="text-slate-300 mt-2">Published Emosphere NLP framework.</p>
          </div>
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-6 pb-20 relative z-10">
        <div className="mb-8">
          <div className="text-cyan-300 uppercase tracking-[0.3em] text-sm mb-2">Core Expertise</div>
          <h2 className="text-5xl font-black">Tech Skills</h2>
          <p className="text-slate-400 max-w-3xl mt-4">Production-ready backend engineering, problem solving, APIs, databases and modern developer tooling.</p>
        </div>
        <div className="grid md:grid-cols-3 lg:grid-cols-4 gap-5">
          {skills.map((skill,i)=>(
            <motion.div key={i} whileHover={{y:-10,scale:1.05}} className="relative overflow-hidden p-5 rounded-[2rem] bg-gradient-to-br from-white/10 to-white/5 border border-white/10 hover:border-cyan-300/50 transition shadow-xl group">
              <div className="absolute inset-0 bg-gradient-to-r from-cyan-400/0 via-fuchsia-400/10 to-yellow-400/0 opacity-0 group-hover:opacity-100 transition" />
              <div className="relative z-10 flex items-center justify-between gap-3">
                <div>
                  <div className="text-lg font-semibold">{skill}</div>
                  <div className="text-xs text-slate-400 mt-1">Advanced Working Knowledge</div>
                </div>
                <div className="w-10 h-10 rounded-2xl bg-white/10 flex items-center justify-center text-cyan-300 font-bold">✦</div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-6 pb-20 relative z-10">
        <div className="mb-8">
          <div className="text-yellow-300 uppercase tracking-[0.3em] text-sm mb-2">Milestones</div>
          <h2 className="text-5xl font-black">Achievements</h2>
          <p className="text-slate-400 mt-3 max-w-2xl">Highlights that reflect consistency, technical growth and competitive mindset.</p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-5">
          {[
            ['500+','DSA Problems Solved'],
            ['2026','Graduating Batch'],
            ['IIIT','Summer Trainee Experience'],
            ['NLP','Published Research Project']
          ].map((item,i)=>(
            <motion.div key={i} whileHover={{y:-10,rotate:i%2===0?1:-1}} className="p-6 rounded-[2rem] bg-gradient-to-br from-slate-900 to-slate-800 border border-white/10 hover:border-yellow-300/40 shadow-xl">
              <div className="text-4xl font-black bg-gradient-to-r from-yellow-300 via-fuchsia-300 to-cyan-300 text-transparent bg-clip-text">{item[0]}</div>
              <div className="mt-3 text-slate-300 font-medium">{item[1]}</div>
            </motion.div>
          ))}
        </div>
      </section>

      <section id="projects" className="max-w-7xl mx-auto px-6 pb-24 relative z-10 overflow-hidden">
        <div className="mb-10 text-center">
          <div className="text-fuchsia-300 uppercase tracking-[0.35em] text-sm mb-3">Creative Builds</div>
          <h2 className="text-6xl font-black">Featured Projects</h2>
          <p className="text-slate-400 mt-4 max-w-2xl mx-auto">A futuristic stacked-card timeline with motion and depth.</p>
        </div>
        <div className="relative max-w-5xl mx-auto space-y-6">
          {projects.map((p,i)=>(
            <motion.div
              key={i}
              initial={{opacity:0,y:50}}
              whileInView={{opacity:1,y:0}}
              viewport={{once:true}}
              transition={{delay:i*0.08,duration:0.55}}
              whileHover={{scale:1.02,x:i%2===0?10:-10}}
              className={`sticky top-${20 + i*4} group rounded-[2rem] overflow-hidden border border-white/10 shadow-2xl bg-gradient-to-br ${p.colors}`}
              style={{top:`${80 + i*28}px`}}
            >
              <div className="absolute inset-0 bg-black/10 group-hover:bg-black/0 transition duration-500" />
              <div className="relative p-8 md:p-10 grid md:grid-cols-[1fr_auto] gap-8 items-center">
                <div>
                  <div className="text-xs uppercase tracking-[0.35em] text-white/70 mb-3">0{i+1} Project</div>
                  <h3 className="text-4xl font-black">{p.title}</h3>
                  <p className="mt-4 text-white/90 leading-relaxed max-w-2xl">{p.desc}</p>
                  <div className="flex flex-wrap gap-2 mt-5">
                    <span className="px-3 py-1 rounded-full bg-white/12 text-xs">Java</span>
                    <span className="px-3 py-1 rounded-full bg-white/12 text-xs">Spring Boot</span>
                    <span className="px-3 py-1 rounded-full bg-white/12 text-xs">Backend</span>
                  </div>
                </div>
                <button onClick={() => window.open(p.repo, "_blank")} className="px-6 py-3 rounded-2xl bg-white text-black font-semibold hover:scale-105 transition">
                    Projects ↗
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      <section id="research" className="max-w-7xl mx-auto px-6 pb-20 relative z-10">
        <div className="rounded-[2rem] p-10 bg-gradient-to-br from-cyan-100 via-white to-fuchsia-100 text-slate-900 shadow-2xl hover:-translate-y-2 transition border border-white/50">
          <div className="text-sm uppercase tracking-widest">Research Spotlight</div>
          <h2 className="text-5xl font-black mt-2 bg-gradient-to-r from-cyan-600 via-fuchsia-600 to-violet-700 text-transparent bg-clip-text">Emosphere</h2>
          <p className="mt-4 text-lg leading-relaxed">A hybrid emotion detection + summarization system combining <span className="font-bold text-cyan-700">NRC Lexicon</span>, <span className="font-bold text-fuchsia-700">BERT</span> and <span className="font-bold text-violet-700">BART</span> to balance interpretability, accuracy and local deployment.</p><div className="mt-5 flex flex-wrap gap-3"><span className="px-4 py-2 rounded-full bg-cyan-100 text-cyan-700 font-semibold">Explainable AI</span><span className="px-4 py-2 rounded-full bg-fuchsia-100 text-fuchsia-700 font-semibold">NLP Research</span><span className="px-4 py-2 rounded-full bg-violet-100 text-violet-700 font-semibold">Offline Ready</span></div>
          <div className="grid md:grid-cols-4 gap-4 mt-8">
            {['89% Accuracy', '0.87 Macro F1', '92% Human Relevance', 'Offline Deployable'].map((x, i) => (
              <div key={i} className="p-5 rounded-2xl bg-slate-100 font-semibold">{x}</div>
            ))}
          </div>
        </div>
      </section>

      <section id="contact" className="max-w-7xl mx-auto px-6 pb-24 relative z-10">
        <div className="rounded-[2rem] p-10 bg-gradient-to-r from-cyan-500/20 via-fuchsia-500/20 to-yellow-500/20 border border-white/10">
          <h2 className="text-5xl font-black mb-6">Contact Me</h2>
          <div className="grid md:grid-cols-3 gap-5">
            <a href="mailto:157aryan@gmail.com" className="p-5 rounded-2xl bg-white/10 hover:bg-white/20 transition block">📧 Email Me</a>
            <a href="https://www.linkedin.com/in/aryan-chaudhary-68150628a/" target="_blank" rel="noreferrer" className="p-5 rounded-2xl bg-white/10 hover:bg-white/20 transition block">💼 LinkedIn</a>
            <a href="https://github.com/Aryan150704" target="_blank" rel="noreferrer" className="p-5 rounded-2xl bg-white/10 hover:bg-white/20 transition block">💻 GitHub</a>
          </div>
        </div>
      </section>

      {showTop && (
        <button
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          className="fixed bottom-6 right-6 z-50 px-4 py-3 rounded-full bg-white text-black font-bold hover:scale-110 transition"
        >
          ↑
        </button>
      )}
    </div>
  );
}
