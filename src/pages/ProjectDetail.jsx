import { useEffect } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { ChevronLeft, ChevronRight, ExternalLink, GitBranch, Terminal } from 'lucide-react';
import { PROJECTS } from '../data';

function ProjectDetail() {
  const { id } = useParams();
  const navigate = useNavigate();
  const project = PROJECTS.find(p => p.id === parseInt(id));

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  if (!project) {
    return (
      <div className="min-h-screen bg-cyber-black text-text-main flex items-center justify-center font-mono">
        <div className="text-center">
          <h1 className="text-red-500 text-4xl mb-4">ERROR 404</h1>
          <p className="mb-8">Project data not found.</p>
          <button onClick={() => navigate('/')} className="text-neon-green hover:underline">
            &lt; Return to Base
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-cyber-black text-text-main font-sans selection:bg-neon-green selection:text-black relative pb-24">
      {/* Background Grid Pattern */}
      <div className="fixed inset-0 pointer-events-none bg-grid opacity-50 z-0"></div>

      {/* Navigation */}
      <nav className="fixed top-0 w-full z-50 glass-nav px-6 py-4 flex justify-between items-center border-b border-white/5">
        <Link to="/" className="flex items-center gap-2 text-neon-green font-mono font-bold text-xl hover:text-green-400 transition-colors">
          <ChevronLeft className="w-6 h-6" />
          <span>cd ..</span>
        </Link>
      </nav>

      <main className="relative z-10 pt-32 px-6 max-w-5xl mx-auto">
        <div className="font-mono text-neon-purple mb-4 text-sm flex items-center gap-2">
          <Terminal className="w-4 h-4" /> 
          <span>/projects/{project.title}</span>
        </div>
        
        <h1 className="text-4xl md:text-6xl font-bold mb-8 font-mono text-white glow-text-green">
          {project.title}
        </h1>

        <div className="flex flex-wrap gap-3 mb-12 font-mono text-sm text-neon-green/80">
          {project.tags.map(tag => (
            <span key={tag} className="px-4 py-2 bg-neon-green/10 rounded-full border border-neon-green/20">
              {tag}
            </span>
          ))}
        </div>

        {/* Project Image */}
        <div className="relative group mb-16">
          <div className="absolute inset-0 bg-neon-green/20 rounded-2xl blur-xl opacity-30"></div>
          <div className="relative rounded-2xl overflow-hidden border border-white/10 glass aspect-video">
            <div className="absolute top-0 w-full h-8 bg-black/80 border-b border-white/10 flex items-center px-4 gap-2 z-10 backdrop-blur-md">
              <div className="w-3 h-3 rounded-full bg-red-500"></div>
              <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
              <div className="w-3 h-3 rounded-full bg-green-500"></div>
            </div>
            <img 
              src={project.image} 
              alt={project.title} 
              className="w-full h-full object-cover object-top pt-8"
            />
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          <div className="md:col-span-2 space-y-8">
            <section className="glass p-8 rounded-2xl border border-white/5">
              <h2 className="text-2xl font-bold mb-6 font-mono text-white flex items-center gap-2">
                <span className="text-neon-green">&gt;</span> System Overview
              </h2>
              <p className="text-lg leading-relaxed text-gray-300">
                {project.fullDescription || project.description}
              </p>
            </section>

            {project.features && (
              <section className="glass p-8 rounded-2xl border border-white/5">
                <h2 className="text-2xl font-bold mb-6 font-mono text-white flex items-center gap-2">
                  <span className="text-neon-green">&gt;</span> Core Features
                </h2>
                <ul className="space-y-4">
                  {project.features.map((feature, i) => (
                    <li key={i} className="flex items-start gap-3 text-gray-300">
                      <ChevronRight className="w-5 h-5 text-neon-green shrink-0 mt-0.5" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </section>
            )}

            {project.screenshots && project.screenshots.length > 0 && (
              <section className="glass p-8 rounded-2xl border border-white/5 mt-8">
                <h2 className="text-2xl font-bold mb-6 font-mono text-white flex items-center gap-2">
                  <span className="text-neon-green">&gt;</span> Visual Data
                </h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  {project.screenshots.map((img, i) => (
                    <div key={i} className="relative rounded-xl overflow-hidden border border-white/10 glass group">
                      <div className="absolute inset-0 bg-neon-green/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10 pointer-events-none"></div>
                      <img 
                        src={img} 
                        alt={`${project.title} Screenshot ${i + 1}`} 
                        className="w-full h-auto object-cover transition-transform duration-700 group-hover:scale-105"
                      />
                    </div>
                  ))}
                </div>
              </section>
            )}
          </div>

          <div className="space-y-6">
            <div className="glass p-6 rounded-2xl border border-white/5">
              <h3 className="font-mono text-white font-bold mb-4">Execution Links</h3>
              <div className="space-y-4">
                <a href={project.link} className="w-full flex items-center justify-center gap-2 px-4 py-3 bg-neon-green text-black font-bold font-mono rounded hover:bg-green-400 transition-all glow-border-green">
                  <ExternalLink className="w-5 h-5" /> Launch Live
                </a>
                <a href={project.github} className="w-full flex items-center justify-center gap-2 px-4 py-3 glass text-white font-bold font-mono rounded hover:bg-white/10 transition-all border border-white/20">
                  <GitBranch className="w-5 h-5" /> View Source
                </a>
              </div>
            </div>

            <div className="glass p-6 rounded-2xl border border-white/5">
              <h3 className="font-mono text-white font-bold mb-4">Tech Stack Details</h3>
              <ul className="space-y-2">
                {project.tags.map(tag => (
                  <li key={tag} className="flex items-center gap-2 text-text-muted font-mono text-sm">
                    <span className="w-1.5 h-1.5 rounded-full bg-neon-purple"></span>
                    {tag}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

export default ProjectDetail;
