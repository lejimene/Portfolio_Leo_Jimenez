import React, { useState } from "react";
import './tailwind.css';

function ProjectBox({ title, description, image, tags, projectLink, githubLink }) {
    const [isExpanded, setIsExpanded] = useState(false);

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

    const toggleDescription = () => {
        setIsExpanded(!isExpanded);
    };

    return (
        <div className="max-w-sm min-h-[400px] rounded overflow-hidden shadow-lg border-l-indigo-300 m-4 font-dongle bg-sky-200">
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
