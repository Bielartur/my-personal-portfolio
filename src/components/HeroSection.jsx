import { ArrowDown } from "lucide-react"

export const HeroSection = () => {
    return (
        <section id="hero" className="relative min-h-screen flex flex-col items-center justify-center px-4">
            <div className="container max-w-4xl mx-auto text-center z-10">
                <div className="space-y-6">
                    <h1 className="text-4xl md:text-6xl font-bold tracking-tight">
                        <span className="opacity-0 animate-fade-in">Olá, sou</span>
                        <span className="text-primary opacity-0 animate-fade-in-delay-1 ml-2">Gabriel</span>
                        <span className="text-gradient ml-2 opacity-0 animate-fade-in-delay-2">Canto</span>
                    </h1>

                    <p className="text-lg md:text-xl text-muted-foreground max-2-2xl mx-auto opacity-0 animate-fade-in-delay-3">
                        Crio experiências web modernas e de alta performance, combinando Python e React para entregar interfaces rápidas, elegantes e funcionais.
                    </p>

                    <div className="pt-2 opacity-0 animate-fade-in-delay-4">
                        <a href="#projects" className="cosmic-button text-primay-foreground">
                            Veja meu trabalho
                        </a>
                    </div>
                </div>
            </div>

            <a href="#about" className="absolute bottom-8 left-1/2 -transform-x-1/2 flex flex-col items-center animate-bounce cursor-pointer">
                <span className="text-sm text-muted-foreground mb-2">Scroll</span>
                <ArrowDown className="h-5 w-5 text-primary"/>
            </a>

        </section>
    )
}