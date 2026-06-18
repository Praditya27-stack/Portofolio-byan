import { Terminal, Shield, ChevronRight, GitBranch, Mail } from 'lucide-react';
import { Link } from 'react-router-dom';
import { PROJECTS, SKILLS } from '../data';

function Home() {
  const scrollTo = (id) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-cyber-black text-text-main font-sans selection:bg-neon-green selection:text-black relative">
      
      {/* Background Grid Pattern */}
      <div className="fixed inset-0 pointer-events-none bg-grid opacity-50 z-0"></div>

      {/* Navigation */}
      <nav className="fixed top-0 w-full z-50 glass-nav px-6 py-4 flex justify-between items-center">
        <div className="flex items-center gap-2 text-neon-green font-mono font-bold text-xl cursor-pointer" onClick={() => scrollTo('home')}>
          <Terminal className="w-6 h-6" />
          <span>guest@portfolio:~#</span>
        </div>
        <div className="hidden md:flex gap-8 font-mono text-sm">
          <button onClick={() => scrollTo('home')} className="hover:text-neon-green transition-colors">&gt; Home</button>
          <button onClick={() => scrollTo('about')} className="hover:text-neon-green transition-colors">&gt; About</button>
          <button onClick={() => scrollTo('skills')} className="hover:text-neon-green transition-colors">&gt; Skills</button>
          <button onClick={() => scrollTo('projects')} className="hover:text-neon-green transition-colors">&gt; Projects</button>
        </div>
      </nav>

      <main className="relative z-10">
        
        {/* Hero Section */}
        <section id="home" className="min-h-screen flex items-center justify-center px-6 pt-20">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-block mb-4 px-4 py-1 rounded-full border border-neon-green/30 text-neon-green font-mono text-sm bg-neon-green/10">
              System Online // Access Granted
            </div>
            <h1 className="text-5xl md:text-7xl font-bold mb-6 tracking-tight">
              Full-Stack <span className="text-neon-green glow-text-green">Laravel</span> <br />
              & <span className="text-neon-purple glow-text-purple">Security</span> Engineer
            </h1>
            <p className="text-xl md:text-2xl text-text-muted mb-10 max-w-2xl mx-auto leading-relaxed">
              Crafting premium digital experiences with a strong foundation in modern web technologies and cybersecurity principles.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button 
                onClick={() => scrollTo('projects')}
                className="px-8 py-4 bg-neon-green text-black font-bold font-mono rounded hover:bg-green-400 transition-all glow-border-green flex items-center justify-center gap-2"
              >
                Execute ./view_projects.sh <ChevronRight className="w-4 h-4" />
              </button>
              <button 
                onClick={() => scrollTo('about')}
                className="px-8 py-4 glass text-white font-bold font-mono rounded hover:bg-white/10 transition-all flex items-center justify-center gap-2 border border-white/20"
              >
                cat about.txt
              </button>
            </div>
          </div>
        </section>

        {/* About Section */}
        <section id="about" className="py-24 px-6 bg-cyber-dark relative">
          <div className="max-w-4xl mx-auto">
            <div className="flex items-center gap-4 mb-12">
              <h2 className="text-3xl md:text-5xl font-bold">About Me</h2>
              <div className="h-px bg-white/10 flex-1"></div>
              <span className="font-mono text-neon-green opacity-50 text-sm">01</span>
            </div>
            
            <div className="glass p-8 md:p-12 rounded-2xl border-l-4 border-l-neon-green relative overflow-hidden">
              <p className="text-lg md:text-xl leading-relaxed text-gray-300 relative z-10">
                I am a passionate Informatics Student and <strong className="text-white">Full-Stack Laravel Developer</strong> with a specialized focus on <strong className="text-white">cybersecurity</strong>, <strong className="text-white">microservices</strong>, and <strong className="text-white">Zero Trust architectures</strong>.
                <br /><br />
                My goal is to build enterprise-grade applications that are not only highly scalable and functional but also inherently secure from the ground up. I bridge the gap between complex server-side architectures, robust MySQL databases, and secure user experiences.
              </p>
            </div>
          </div>
        </section>

        {/* Skills Section */}
        <section id="skills" className="py-24 px-6">
          <div className="max-w-6xl mx-auto">
            <div className="flex items-center gap-4 mb-12">
              <span className="font-mono text-neon-green opacity-50 text-sm">02</span>
              <div className="h-px bg-white/10 flex-1"></div>
              <h2 className="text-3xl md:text-5xl font-bold">Technical Arsenal</h2>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {SKILLS.map((skill, index) => (
                <div key={index} className="glass p-8 rounded-xl hover:-translate-y-2 transition-transform duration-300 border border-white/5 hover:border-white/20">
                  <div className="mb-6 bg-black/50 p-4 rounded-lg inline-block">
                    {skill.icon}
                  </div>
                  <h3 className="text-xl font-bold mb-4">{skill.category}</h3>
                  <ul className="space-y-3">
                    {skill.items.map((item, i) => (
                      <li key={i} className="flex items-center gap-2 text-text-muted font-mono text-sm">
                        <span className="text-neon-green">&gt;</span> {item}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Projects Section */}
        <section id="projects" className="py-24 px-6 bg-cyber-dark">
          <div className="max-w-6xl mx-auto">
            <div className="flex items-center gap-4 mb-16">
              <h2 className="text-3xl md:text-5xl font-bold">Featured Projects</h2>
              <div className="h-px bg-white/10 flex-1"></div>
              <span className="font-mono text-neon-green opacity-50 text-sm">03</span>
            </div>

            <div className="space-y-24">
              {PROJECTS.map((project, index) => (
                <div key={project.id} className={`flex flex-col ${index % 2 !== 0 ? 'lg:flex-row-reverse' : 'lg:flex-row'} gap-12 items-center`}>
                  
                  {/* Project Image */}
                  <div className="w-full lg:w-3/5 relative group">
                    <div className="absolute inset-0 bg-neon-green/20 rounded-2xl blur-xl group-hover:bg-neon-green/30 transition-all duration-500 opacity-50"></div>
                    <Link to={`/project/${project.id}`} className="block relative rounded-2xl overflow-hidden border border-white/10 glass aspect-video group-hover:border-white/30 transition-all duration-500">
                      <div className="absolute top-0 w-full h-8 bg-black/60 border-b border-white/10 flex items-center px-4 gap-2 z-10 backdrop-blur-md">
                        <div className="w-3 h-3 rounded-full bg-red-500"></div>
                        <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                        <div className="w-3 h-3 rounded-full bg-green-500"></div>
                      </div>
                      <img 
                        src={project.image} 
                        alt={project.title} 
                        className="w-full h-full object-cover object-top pt-8 transition-transform duration-700 group-hover:scale-105"
                      />
                    </Link>
                  </div>

                  {/* Project Info */}
                  <div className="w-full lg:w-2/5">
                    <div className="font-mono text-neon-purple mb-2 text-sm">Featured Project</div>
                    <Link to={`/project/${project.id}`}>
                      <h3 className="text-3xl font-bold mb-6 font-mono text-white hover:text-neon-green transition-colors">{project.title}</h3>
                    </Link>
                    
                    <div className="glass p-6 rounded-xl mb-6 text-gray-300 shadow-xl border border-white/5 relative z-10 hover:border-white/20 transition-colors">
                      <p className="leading-relaxed">{project.description}</p>
                    </div>
                    
                    <ul className="flex flex-wrap gap-3 mb-8 font-mono text-sm text-neon-green/80">
                      {project.tags.map(tag => (
                        <li key={tag} className="px-3 py-1 bg-neon-green/10 rounded-full border border-neon-green/20">
                          {tag}
                        </li>
                      ))}
                    </ul>
                    
                    <div className="flex gap-4">
                      <Link to={`/project/${project.id}`} className="px-4 py-2 bg-neon-green/10 text-neon-green border border-neon-green/30 rounded font-mono hover:bg-neon-green hover:text-black transition-all text-sm">
                        Details
                      </Link>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer className="py-12 border-t border-white/10 text-center font-mono text-sm text-text-muted">
          <div className="flex justify-center gap-6 mb-6">
            <a href="#" className="hover:text-neon-green transition-colors"><GitBranch className="w-6 h-6" /></a>
            <a href="#" className="hover:text-neon-green transition-colors"><Mail className="w-6 h-6" /></a>
          </div>
          <p>&copy; {new Date().getFullYear()} Byan. All rights reserved.</p>
          <p className="mt-2 text-xs opacity-50">CONNECTION SECURE // END OF FILE</p>
        </footer>

      </main>
    </div>
  );
}

export default Home;
