import React from "react";
import './tailwind.css';




function ProjectBox({ title, description, image, tags }) {
    const tagColors = {
        "Personal Project": "bg-blue-300",
        "School Project": "bg-green-500",
        "Python": "bg-teal-300",
        "Tkinter": "bg-blue-500",
        "Javascript": "bg-yellow-400", 
        "Django": "bg-lime-300",
        "HTML": "bg-orange-600",
        "CSS": "bg-sky-400",
        "React": "bg-blue-400",
        "MySQL": "bg-red-500",
        "Docker": "bg-gray-500",
        "PHP": "bg-amber-950",
        "Figma": "bg-rose-400",
    };
    return (
        <div className="max-w-sm rounded overflow-hidden shadow-lg border-l-indigo-300 m-4 font-dongle bg-sky-200" >
            <img className="w-full h-48 object-cover" src={image} alt={title} />
            <div className="px-6 py-4">
                <div className="font-bold text-5xl mb-2">{title}</div>
                <p className="text-gray-700 text-2xl">{description}</p>
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
            <div className="px-6 pt-4 pb-2">
                <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold text-2xl py-2 px-4 rounded">
                    View Project
                </button>
            </div>
        </div>
    );
}
export default ProjectBox

