'use client';

import { useState, useEffect } from 'react';
import ProjectCard from '@/components/ProjectCard';

// Define the shape of our data
interface Project {
  _id: string;
  title: string;
  description: string;
  image: string;
  tags: string[];
  liveLink: string;
  githubLink: string;
}

export default function ProjectsPage() {
  const [projects, setProjects] = useState<Project[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Ensure your backend is running on port 5000!
    const fetchProjects = async () => {
      try {
        const res = await fetch('http://localhost:5000/api/projects');
        const data = await res.json();
        setProjects(data);
      } catch (error) {
        console.error('Failed to fetch projects:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchProjects();
  }, []);

  return (
    <main className="max-w-6xl mx-auto px-4 py-10">
      <h1 className="text-4xl font-bold mb-2">My Work</h1>
      <p className="text-gray-400 mb-10">A selection of projects I've built.</p>

      {loading ? (
        <p className="text-center text-gray-500">Loading projects...</p>
      ) : projects.length === 0 ? (
        <div className="text-center p-10 border border-dashed border-gray-800 rounded-xl">
            <p className="text-gray-500">No projects found in the database yet.</p>
            <p className="text-sm text-gray-600 mt-2">Make sure Backend is running and you have added data!</p>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project) => (
            <ProjectCard 
              key={project._id}
              title={project.title}
              description={project.description}
              image={project.image || 'https://via.placeholder.com/600x400'} // Fallback image
              tags={project.tags}
              liveLink={project.liveLink}
              githubLink={project.githubLink}
            />
          ))}
        </div>
      )}
    </main>
  );
}