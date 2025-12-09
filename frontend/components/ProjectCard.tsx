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
    // Used bg-zinc-900/50 for a semi-transparent "Clear" glass effect
    <div className="group flex flex-col bg-zinc-900/50 backdrop-blur-sm border border-white/5 rounded-2xl overflow-hidden hover:border-indigo-500/30 hover:shadow-2xl hover:shadow-indigo-500/10 transition-all duration-300 h-full">
      
      {/* Image Section */}
      <div className="h-48 bg-zinc-800/50 relative overflow-hidden shrink-0">
        {/* Placeholder Icon */}
        <div className="absolute inset-0 flex items-center justify-center text-zinc-700">
            <FaFolder size={48} />
        </div>
        
        {/* Actual Image */}
        <img 
          src={image} 
          alt={title} 
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105 opacity-90 group-hover:opacity-100 relative z-10" 
          onError={(e) => (e.currentTarget.style.display = 'none')}
        />
        
        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-zinc-950 via-transparent to-transparent opacity-60 z-20"></div>
      </div>
      
      {/* Content Section */}
      <div className="p-6 flex flex-col flex-1">
        <h3 className="text-xl font-bold mb-3 text-white group-hover:text-indigo-400 transition-colors">
          {title}
        </h3>
        
        <p className="text-zinc-400 text-sm mb-6 line-clamp-3 leading-relaxed flex-1">
          {description}
        </p>
        
        {/* Tags */}
        <div className="flex flex-wrap gap-2 mb-6">
          {tags.map((tag, i) => (
            <span key={i} className="text-xs font-medium bg-zinc-800/50 text-zinc-300 px-2.5 py-1 rounded-md border border-white/5">
              {tag}
            </span>
          ))}
        </div>

        {/* Action Buttons */}
        <div className="flex gap-3 mt-auto">
          <a 
            href={githubLink} 
            target="_blank" 
            rel="noopener noreferrer"
            className="flex-1 flex items-center justify-center gap-2 py-2.5 rounded-lg bg-zinc-800 text-white text-sm font-medium hover:bg-zinc-700 transition-colors"
          >
            <FaGithub size={16} /> Source
          </a>
          
          {/* Conditional Demo Button */}
          {liveLink && (
            <a 
              href={liveLink} 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex-1 flex items-center justify-center gap-2 py-2.5 rounded-lg border border-zinc-700 text-zinc-300 text-sm font-medium hover:text-white hover:border-indigo-500 hover:bg-indigo-500/10 transition-all"
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