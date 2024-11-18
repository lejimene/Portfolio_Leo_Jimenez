import React, { useState } from "react";
import { useInView } from 'react-intersection-observer';  // Import the hook

function ProjectBox({ title, description, image, tags, projectLink, githubLink }) {
    const [isExpanded, setIsExpanded] = useState(false);

    // Tag color mapping
    const tagColors = {
        "Personal Project": "bg-blue-300",
        "School Project": "bg-green-500",
        "Python": "bg-teal-300",
        "Tkinter": "bg-blue-500",
        "JavaScript": "bg-yellow-400",
        "Django": "bg-lime-300",
        "HTML": "bg-orange-600",
        "CSS": "bg-sky-400",
        "React": "bg-blue-400",
        "MySQL": "bg-red-500",
        "Docker": "bg-gray-500",
        "PHP": "bg-amber-950",
        "Figma": "bg-rose-400",
    };

    // Toggle for description expansion
    const toggleDescription = () => {
        setIsExpanded(!isExpanded);
    };

    // Intersection Observer to trigger animation
    const { ref, inView } = useInView({
        triggerOnce: true,  // Only trigger when the element first enters the view
        threshold: 0.5,     // Trigger when 50% of the element is in the viewport
    });

    return (
        <div 
            ref={ref} 
            className={`max-w-sm min-h-[400px] rounded overflow-hidden shadow-lg border-l-indigo-300 m-4 font-dongle bg-sky-200 transition-all duration-700 ease-out transform ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
        >
            <img className="w-full h-48 object-cover" src={image} alt={title} />
            <div className="px-6 py-4">
                <div className="font-bold text-5xl mb-2">{title}</div>
                <p className={`text-gray-700 text-2xl ${isExpanded ? "" : "line-clamp-4"}`}>
                    {description}
                </p>
                <button
                    onClick={toggleDescription}
                    className="text-blue-500 hover:text-blue-700 text-xl underline mt-2"
                >
                    {isExpanded ? "Show Less" : "Read More"}
                </button>
            </div>
            <div className="px-6 pt-4 pb-2">
                {tags.map((tag, index) => (
                    <span
                        key={index}
                        className={`inline-block ${tagColors[tag]} text-white text-xl px-3 py-1 rounded-full mr-2 mb-2`}
                    >
                        {tag}
                    </span>
                ))}
            </div>
            <div className="px-6 pt-4 pb-2 flex gap-2">
                {projectLink && (
                    <a
                        href={projectLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="bg-green-500 hover:bg-green-700 text-white font-bold text-2xl py-2 px-4 rounded"
                    >
                        View Project
                    </a>
                )}
                {githubLink && (
                    <a
                        href={githubLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="bg-gray-800 hover:bg-gray-900 text-white font-bold text-2xl py-2 px-4 rounded"
                    >
                        GitHub
                    </a>
                )}
            </div>
        </div>
    );
}

export default ProjectBox;
