import { useState } from "react"
import { cn } from "@/lib/utils"
import { SiDjango, SiDocker, SiFastapi, SiFlask, SiGithub, SiGooglegemini, SiHtml5, SiJavascript, SiLinux, SiN8N, SiPostgresql, SiPycharm, SiPydantic, SiPython, SiReact, SiSelenium, SiTailwindcss, SiTypescript, SiVsco, SiVscodium } from "react-icons/si";
import { Bot, Code } from "lucide-react";
import { FaAws, FaLinux } from "react-icons/fa";


const skills = [
    // Backend
    { name: "Python", level: 92, category: "backend", icon: <SiPython /> },
    { name: "Django", level: 86, category: "backend", icon: <SiDjango /> },
    { name: "FastAPI", level: 82, category: "backend", icon: <SiFastapi /> },
    { name: "PostgreSQL", level: 74, category: "backend", icon: <SiPostgresql /> },
    { name: "Flask", level: 75, category: "backend", icon: <SiFlask /> },

    // Frontend
    { name: "HTML/CSS", level: 86, category: "frontend", icon: <SiHtml5 /> },
    { name: "TailwindCSS", level: 82, category: "frontend", icon: <SiTailwindcss /> },
    { name: "Javascript", level: 71, category: "frontend", icon: <SiJavascript /> },
    { name: "React", level: 73, category: "frontend", icon: <SiReact /> },
    { name: "TypeScript", level: 64, category: "frontend", icon: <SiTypescript /> },

    // Automações
    { name: "APIs", level: 92, category: "automações", icon: <Code /> },
    { name: "Selenium", level: 88, category: "automações", icon: <SiSelenium /> },
    { name: "PyAutoGUI", level: 80, category: "automações", icon: <Bot /> },
    { name: "Agentes de IA", level: 73, category: "automações", icon: <SiGooglegemini/> },
    { name: "n8n", level: 66, category: "automações", icon: <SiN8N /> },

    // Ferramentas
    { name: "Git/Gihub", level: 88, category: "ferramentas", icon: <SiGithub /> },
    { name: "AWS", level: 70, category: "ferramentas", icon: <FaAws className="h-5 w-5" /> },
    { name: "Linux", level: 72, category: "ferramentas", icon: <SiLinux /> },
    { name: "Docker", level: 68, category: "ferramentas", icon: <SiDocker /> },
    { name: "PyCharm", level: 90, category: "ferramentas", icon: <SiPycharm /> },
    { name: "Pydantic", level: 91, category: "ferramentas", icon: <SiPydantic /> },

]

const categories = ["todas", "backend", "frontend", "automações", "ferramentas"]

export const SkillsSection = () => {
    const [activeCategory, setActiveCategory] = useState("todas")

    const filteredSkils = skills.filter((skill) => activeCategory === "todas" || skill.category === activeCategory)

    return (
        <section
            id="skills"
            className="py-24 px-4 realtive bg-secondary/30"
        >
            <div className="container mx-auto max-w-5xl">
                <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center" >
                    Minhas <span className="text-primary">Habilidades</span>
                </h2>

                <div className="flex flex-wrap justify-center gap-4 mb-12">
                    {categories.map((category, key) => (
                        <button
                            key={`categories-${key}`}
                            onClick={() => setActiveCategory(category)}
                            className={cn(
                                "px-5 py-2 rounded-full transition-colors duration-300 capitalize cursor-pointer",
                                activeCategory === category
                                    ? "bg-primary text-primary-foreground"
                                    : "bg-secondary/70 text-foreground hover:bg-secondary"
                            )}>
                            {category}
                        </button>
                    ))}
                </div>

                <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                    {filteredSkils.map((skill, key) => (
                        <li key={`skills-${key}`} className="bg-card p-6 rounded-lg shadow-xs card-hover">
                            <div className="text-left mb-4">
                                <h3 className="font-semibold text-lg flex gap-2 items-center">{skill.icon}{skill.name}</h3>
                            </div>
                            <div className="w-full bg-secondary/50 h-2 rounded-full overflow-hidden">
                                <div
                                    className="bg-primary h-2 rounded-full origin-left animate-[grow_1.5s_ease-out]"
                                    style={{ width: skill.level + "%" }}
                                />
                            </div>

                            <div className="text-right mt-1">
                                <span className="text-sm text-muted-foreground">{skill.level}%</span>
                            </div>

                        </li>
                    ))}
                </ul>
            </div>
        </section>
    )
}