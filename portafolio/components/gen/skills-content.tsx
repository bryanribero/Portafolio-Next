import React from "react";

interface SkillProps {
    texto: string;
}

export default function SkillContent({texto}: SkillProps) {
    return(
        <div className="text-gray-300 text-2xl border inline py-2 px-4 rounded-lg cursor-pointer transition-all duration-300 ease-in-out hover:text-blue-400 hover:border-blue-400">
            {texto}
        </div>
    );
}