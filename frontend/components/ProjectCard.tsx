import Link from 'next/link';
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';

interface ProjectProps {
  title: string;
  description: string;
  image: string;
  tags: string[];
  liveLink: string;
  githubLink: string;
}

const ProjectCard = ({ title, description, image, tags, liveLink, githubLink }: ProjectProps) => {
  return (
    <div className="bg-slate-900 rounded-xl overflow-hidden border border-white/10 hover:border-purple-500/50 transition-all group">
      {/* Image Placeholder */}
      <div className="h-48 bg-slate-800 relative overflow-hidden">
        <img src={image} alt={title} className="w-full h-full object-cover transition-transform group-hover:scale-105" />
      </div>
      
      <div className="p-6">
        <h3 className="text-xl font-bold mb-2">{title}</h3>
        <p className="text-gray-400 text-sm mb-4 line-clamp-3">{description}</p>
        
        {/* Tags */}
        <div className="flex flex-wrap gap-2 mb-6">
          {tags.map((tag, i) => (
            <span key={i} className="text-xs bg-purple-500/20 text-purple-300 px-2 py-1 rounded-md">
              {tag}
            </span>
          ))}
        </div>

        {/* Links */}
        <div className="flex gap-4">
          <a href={githubLink} target="_blank" className="flex items-center gap-2 text-sm hover:text-purple-400 transition-colors">
            <FaGithub /> Code
          </a>
          <a href={liveLink} target="_blank" className="flex items-center gap-2 text-sm hover:text-blue-400 transition-colors">
            <FaExternalLinkAlt /> Live Demo
          </a>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;