import { Mail, MapPin, Phone, Send } from "lucide-react"
import { SiInstagram, SiLinkedin, SiWhatsapp } from "react-icons/si"
import { cn } from "@/lib/utils"
import toast from "react-hot-toast"
import { useState } from "react"

export const ContactSection = () => {
    const [isSubmitting, setIsSubmitting] = useState(false);


    const handleSubmit = (e) => {
        e.preventDefault()
        setIsSubmitting(true)

        setTimeout(() => {
            toast.error("Essa funcionalidade chegará em breve, mensagem não enviada.")
            setIsSubmitting(false)
        }, 1500)


    }

    return (
        <section id="contact" className="py-24 px-4 relative bg-secondary/30">

            <div className="container mx-auto max-w-5xl">
                <h2 className="text-3xl md:text-4xl font-bold mb-4">
                    Entre em <span className="text-primary">Contato</span>
                </h2>

                <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
                    Tem um projeto em mente ou gostaria de colaborar? Sinta-se à vontade para entrar em contato. Estou sempre aberto a discutir novas oportunidades.
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                    <div className="space-y-8 text-left mx-auto">
                        <h3 className="text-2xl font-semibold mb-6"> Informações de Contato</h3>

                        <div className="flex flex-col space-y-6 items-start w-fit text-left">
                            <div className="flex items-start space-x-4">
                                <div className="p-3 rounded-full bg-primary/10">
                                    <Mail className="h-6 w-6 text-primary" />
                                </div>

                                <div>
                                    <h4 className="font-medium">Email</h4>
                                    <a href="mailto:gabrielcanto2016@gmail.com" className="text-muted-foreground hover:text-primary transition-colors duration-300">
                                        gabrielcanto2016@gmail.com
                                    </a>
                                </div>
                            </div>

                            <div className="flex items-start space-x-4">
                                <div className="p-3 rounded-full bg-primary/10">
                                    <Phone className="h-6 w-6 text-primary" />
                                </div>

                                <div>
                                    <h4 className="font-medium">Telefone</h4>
                                    <a href="tel:+5581991214924" className="text-muted-foreground hover:text-primary transition-colors duration-300">
                                        +55 (81) 991214924
                                    </a>
                                </div>
                            </div>

                            <div className="flex items-start space-x-4">
                                <div className="p-3 rounded-full bg-primary/10">
                                    <MapPin className="h-6 w-6 text-primary" />
                                </div>

                                <div>
                                    <h4 className="font-medium">Localização</h4>
                                    <a className="text-muted-foreground hover:text-primary transition-colors duration-300">
                                        Recife - PE, Brasil
                                    </a>
                                </div>
                            </div>
                        </div>

                        <div className="pt-8">
                            <h4 className="font-medium mb-2">Conecte-se comigo</h4>
                            <div className="flex space-x-4 text-xl">
                                <a href="https://www.linkedin.com/in/gabriel-canto-6943b929a/"
                                    target="_blank"
                                    className="p-3 rounded-full bg-primary/10 hover:text-primary transition-colors duration-300"
                                >
                                    <SiLinkedin />
                                </a>
                                <a href="https://www.instagram.com/gabrielcanto_"
                                    target="_blank"
                                    className="p-3 rounded-full bg-primary/10 hover:text-primary transition-colors duration-300"
                                >
                                    <SiInstagram />
                                </a>
                                <a href="https://wa.me/5581991214924"
                                    target="_blank"
                                    className="p-3 rounded-full bg-primary/10 hover:text-primary transition-colors duration-300"
                                >
                                    <SiWhatsapp />
                                </a>
                            </div>
                        </div>
                    </div>
                    <div className="bg-card p-8 rounded-lg shadow-xs">
                        <h3 className="text-2xl font-semibold mb-6">Envie uma menssagem</h3>

                        <form onSubmit={handleSubmit} method="POST" className="space-y-6">
                            <div>
                                <label htmlFor="name" className="block text-left text-sm font-medium mb-2">
                                    Seu nome
                                </label>
                                <input
                                    type="text"
                                    id="name"
                                    name="name"
                                    required
                                    className="w-full px-4 py-3 rounded-md border border-input bg-background focus:outline-none focus:ring-2 focus:ring-primary"
                                    placeholder="Gabriel Canto..."
                                />
                            </div>

                            <div>
                                <label htmlFor="name" className="block text-left text-sm font-medium mb-2">
                                    Seu Email
                                </label>
                                <input
                                    type="email"
                                    id="email"
                                    name="email"
                                    required
                                    className="w-full px-4 py-3 rounded-md border border-input bg-background focus:outline-none focus:ring-2 focus:ring-primary"
                                    placeholder="gabriel@gmail.com"
                                />
                            </div>

                            <div>
                                <label htmlFor="message" className="block text-left text-sm font-medium mb-2">
                                    Sua mensagem
                                </label>
                                <textarea
                                    id="message"
                                    name="message"
                                    required
                                    className="w-full px-4 py-3 rounded-md border border-input bg-background focus:outline-none focus:ring-2 focus:ring-primary resize-none"
                                    placeholder="Olá, gostaria de falar sobre..."
                                />
                            </div>

                            <button
                                typeof="submit"
                                disabled={isSubmitting}
                                className={cn(
                                    "cosmic-button w-full flex items-center justify-center gap-2",

                                )}>
                                {isSubmitting ? "Enviando..." : "Enviar Mensagem"}
                                <Send size={16} />
                            </button>

                        </form>
                    </div>
                </div>
            </div>

        </section>
    )
}