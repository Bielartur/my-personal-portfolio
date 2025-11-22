import { ArrowRight, ExternalLink } from "lucide-react"
import { SiGithub } from "react-icons/si"

const projects = [
    {
        id: 1,
        title: "Meu Portifólio",
        description: "Landing page para apresentar meu trabalho por meio de uma aplicação web de forma elegante e responsiva.",
        image: "/projects/meu-portifolio.png",
        tags: ["React", "Javascript", "TalwindCSS", "UI/UX Design"],
        demoUrl: "https://www.habook.com.br"
    },
    {
        id: 2,
        title: "Habook",
        description: "Plataforma web para organização, acompanhamento e controle de metas de leitura pessoal.",
        image: "/projects/habook.png",
        tags: ["Python", "Django", "Django Ninja", "TalwindCSS", "Javascript"],
        demoUrl: "https://www.habook.com.br"
    },
    {
        id: 3,
        title: "Cardápio Web",
        description: "Solução web completa para apresentação de catálogo e gestão de pedidos para lojas virtuais.",
        image: "/projects/restaurante.png",
        tags: ["Python", "Django", "Django Ninja", "React", "TalwindCSS", "Pydantic"],
        githubUrl: "https://github.com/Bielartur/restaurante-api",
    },
    {
        id: 4,
        title: "Réplica do Pinterest",
        description: "Réplica do Pinterest que permite o upload e compartilhamento de imagens, gestão de perfil e interação social para curadoria de conteúdo.",
        image: "/projects/fake-pinterest.png",
        tags: ["Python", "Flask", "SQLAlchemy", "HTML/CSS", "Javascript"],
        githubUrl: "https://github.com/Bielartur/fake_pinterest",
    },
    {
        id: 5,
        title: "Netflix Clone",
        description: "Netflix Clone com gestão de conteúdo. Apresenta recursos de histórico de visualização, destaques de lançamentos e páginas de detalhes para navegação de episódios.",
        image: "/projects/hashflix.png",
        tags: ["Python", "Django","HTML", "TailwindCSS", "PostgreSQL"],
        githubUrl: "https://github.com/Bielartur/projetohashflixdjango",
    },
    {
        id: 6,
        title: "Automação de Finanças",
        description: "Solução Back-end que analisa transações de faturas e extratos para fornecer dados cruciais para o controle orçamentário.",
        image: "/projects/automacao-financas.png",
        tags: ["Python", "Django", "DRF", "Pandas", "Matplotlib"],
        githubUrl: "https://github.com/Bielartur/my-finance-automation"
    },
]

export const ProjectsSection = () => {
    return (
        <section id="projects" className="py-24 px-4 relative">
            <div className="container mx-auto max-w-5xl">
                <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
                    Projetos em <span className="text-primary">Destaque</span>
                </h2>

                <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
                    Apresento uma seleção de projetos desenvolvidos com foco em boas práticas de programação, arquitetura limpa e alta performance.
                </p>

                <ul className="grid gird-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {projects.map((project, key) => (
                        <li key={key} className="group bg-card rounded-lg overflow-hidden shadow-xs card-hover">
                            <div className="h-48 overflow-hidden">
                                <img src={project.image} alt={project.title} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" />
                            </div>

                            <div className="p-6">
                                <div className="flex flex-wrap gap-2 mb-4">
                                    {project.tags.map((tag) => (
                                        <span className="px-2 py-1.5 text-xs font-medium border rounded-full bg-secondary text-secondary-foreground leading-3">
                                            {tag}
                                        </span>
                                    ))}
                                </div>
                                <h3 className="text-xl font-semibold mb-1">
                                    {project.title}
                                </h3>
                                <p className="text-muted-foreground text-sm mb-4">
                                    {project.description}
                                </p>
                                <div className="flex justify-between items-center">
                                    <div className="flex space-x-3 mt-auto h-full">
                                        {project.demoUrl &&
                                            <a
                                                href={project.demoUrl}
                                                className="text-foreground/80 hover:text-primary transition-colors duration-300"
                                                target="_blank"
                                                rel="noopener noreferrer"
                                            >
                                                <ExternalLink size={20} />
                                            </a>
                                        }
                                        {project.githubUrl &&
                                            <a
                                                href={project.githubUrl}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                            >
                                                <SiGithub size={20} />
                                            </a>
                                        }
                                    </div>
                                </div>
                            </div>
                        </li>
                    ))}
                </ul>

                <div className="text-center mt-12">
                    <a href="https://github.com/Bielartur" target="_blank" className="cosmic-button text-primary-foreground w-fit flex items-center mx-auto gap-2">
                        Veja meu Github <ArrowRight size={16}/>
                    </a>
                </div>
            </div>
        </section >
    )
}