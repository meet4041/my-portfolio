import { FaGithub, FaExternalLinkAlt, FaFolder } from 'react-icons/fa';

interface ProjectProps {
  title: string;
  description: string;
  image: string;
  tags: string[];
  liveLink?: string; // Optional Live Demo Link
  githubLink: string;
}

const ProjectCard = ({ title, description, image, tags, liveLink, githubLink }: ProjectProps) => {
  return (
    <div className="surface-card group flex h-full flex-col overflow-hidden rounded-lg transition-all duration-300 hover:-translate-y-1 hover:border-[rgba(107,255,211,.4)]">
      <div className="relative h-56 shrink-0 overflow-hidden bg-[#081014]">
        <div className="absolute inset-0 flex items-center justify-center text-[rgba(79,64,48,0.25)]">
            <FaFolder size={48} />
        </div>

        <img 
          src={image} 
          alt={title} 
          className="relative z-10 h-full w-full object-cover opacity-90 transition-transform duration-500 group-hover:scale-105 group-hover:opacity-100" 
          onError={(e) => (e.currentTarget.style.display = 'none')}
        />
        <div className="absolute inset-0 z-20 bg-gradient-to-t from-[rgba(32,26,20,0.16)] via-transparent to-transparent"></div>
      </div>

      <div className="flex flex-1 flex-col p-6">
        <h3 className="mb-3 text-2xl font-semibold text-[var(--color-text)] transition-colors group-hover:text-[var(--color-accent)]">
          {title}
        </h3>

        <p className="mb-6 flex-1 text-sm leading-7 text-[var(--color-muted)] line-clamp-3">
          {description}
        </p>

        <div className="mb-6 flex flex-wrap gap-2">
          {tags.map((tag, i) => (
            <span key={i} className="border border-[var(--color-line)] bg-[rgba(107,255,211,.04)] px-3 py-1 font-mono text-[10px] font-semibold uppercase tracking-wide text-[var(--color-muted)]">
              {tag}
            </span>
          ))}
        </div>

        <div className="mt-auto flex gap-3">
          <a 
            href={githubLink} 
            target="_blank" 
            rel="noopener noreferrer"
            className="flex flex-1 items-center justify-center gap-2 border border-[var(--color-accent)] bg-[var(--color-accent)] py-3 font-mono text-xs font-bold uppercase text-[#04100d]"
          >
            <FaGithub size={16} /> Source
          </a>

          {liveLink && (
            <a 
              href={liveLink} 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex flex-1 items-center justify-center gap-2 border border-[var(--color-line)] py-3 font-mono text-xs font-bold uppercase text-[var(--color-accent)] hover:border-[var(--color-accent)]"
            >
              <FaExternalLinkAlt size={14} /> Demo
            </a>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
