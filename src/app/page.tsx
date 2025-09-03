import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Phone, Mail, Facebook, Pizza, ThumbsUp, CookingPot } from "lucide-react";
import ContactForm from "@/components/contact-form";
import { ThemeToggle } from "@/components/theme-toggle";

const pizzas = [
  {
    name: "Americana",
    description: "La clásica combinación de queso mozzarella, salsa de tomate y jamón de primera.",
    image: "https://picsum.photos/600/400?random=1",
    aiHint: "american pizza",
  },
  {
    name: "Hawaiana",
    description: "Una mezcla tropical de jamón y piña jugosa sobre una base de queso derretido.",
    image: "https://picsum.photos/600/400?random=2",
    aiHint: "hawaiian pizza",
  },
  {
    name: "Pepperoni",
    description: "Para los amantes del picante, cubierta de pepperoni de alta calidad y mucho queso.",
    image: "https://picsum.photos/600/400?random=3",
    aiHint: "pepperoni pizza",
  },
  {
    name: "Cuatro Quesos",
    description: "Una sinfonía de sabores con queso mozzarella, provolone, parmesano y azul.",
    image: "https://picsum.photos/600/400?random=4",
    aiHint: "cheese pizza",
  },
  {
    name: "Vegetariana",
    description: "Fresca y saludable, con pimientos, cebolla, champiñones, aceitunas y maíz.",
    image: "https://picsum.photos/600/400?random=5",
    aiHint: "vegetarian pizza",
  },
  {
    name: "Carbonara",
    description: "Inspirada en la pasta, con base de nata, bacon, cebolla y un toque de pimienta negra.",
    image: "https://picsum.photos/600/400?random=6",
    aiHint: "carbonara pizza",
  },
];

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen bg-background text-foreground">
      <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container flex h-16 items-center">
          <a href="#" className="flex items-center gap-2 font-bold font-headline text-xl">
            <Image src="/logo.png" alt="Fabichelo Logo" width={48} height={48} className="rounded-full" />
          </a>
          <nav className="ml-auto hidden md:flex gap-4 text-sm font-medium items-center">
            <a href="#pizzas" className="transition-colors hover:text-primary">Nuestras Pizzas</a>
            <a href="#quienes-somos" className="transition-colors hover:text-primary">Quiénes Somos</a>
            <a href="#eventos" className="transition-colors hover:text-primary">Eventos</a>
            <a href="#preparacion" className="transition-colors hover:text-primary">Preparación</a>
            <a href="#contacto" className="transition-colors hover:text-primary">Contacto</a>
            <ThemeToggle />
          </nav>
        </div>
      </header>

      <main className="flex-grow">
        <section className="relative w-full h-[60vh] min-h-[400px] flex items-center justify-center text-center text-white">
           <Image
            src="https://picsum.photos/1920/1080"
            alt="Pizza deliciosa"
            fill
            className="object-cover -z-10"
            data-ai-hint="delicious pizza"
          />
          <div className="absolute inset-0 bg-black/70 -z-10" />
          <div className="container px-4 md:px-6">
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tighter mb-4" style={{textShadow: '2px 2px 8px rgba(0,0,0,0.7)'}}>
              Sabor Artesanal, Listo en Minutos
            </h1>
            <p className="max-w-[700px] mx-auto text-lg md:text-xl text-gray-200 mb-8" style={{textShadow: '1px 1px 4px rgba(0,0,0,0.7)'}}>
              Descubre nuestras pizzas congeladas Fabichelo, preparadas con los ingredientes más frescos para que disfrutes en casa.
            </p>
            <Button size="lg" asChild className="bg-accent text-accent-foreground hover:bg-accent/90">
              <a href="#pizzas">Ver Menú</a>
            </Button>
          </div>
        </section>

        <section id="pizzas" className="py-12 md:py-24">
          <div className="container px-4 md:px-6">
            <div className="text-center mb-10">
              <h2 className="text-3xl md:text-4xl font-bold">Nuestras Pizzas</h2>
              <p className="text-muted-foreground mt-2">Disponibles en tamaño Personal (18cm) y Familiar (30cm)</p>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
              {pizzas.map((pizza) => (
                <Card key={pizza.name} className="overflow-hidden transition-transform duration-300 hover:scale-105 hover:shadow-xl flex flex-col">
                  <CardHeader className="p-0">
                    <Image src={pizza.image} alt={pizza.name} width={600} height={400} className="w-full h-48 object-cover" data-ai-hint={pizza.aiHint} />
                  </CardHeader>
                  <CardContent className="p-6 flex flex-col flex-grow">
                    <CardTitle className="text-2xl mb-2">{pizza.name}</CardTitle>
                    <CardDescription className="flex-grow">{pizza.description}</CardDescription>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        <section id="quienes-somos" className="bg-card py-12 md:py-24">
          <div className="container px-4 md:px-6">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <span className="text-primary font-semibold">Nuestra Historia</span>
                <h2 className="text-3xl md:text-4xl font-bold mt-2 mb-4">Pasión por la Pizza desde 1998</h2>
                <p className="text-muted-foreground mb-6">
                  Fabichelo nació de un sueño familiar: llevar el auténtico sabor de la pizza italiana a los hogares de nuestra comunidad. Desde nuestros humildes comienzos en una pequeña cocina, hemos crecido gracias a nuestra dedicación a la calidad, usando solo ingredientes frescos y una receta que ha pasado de generación en generación.
                </p>
                <p className="text-muted-foreground">
                  Cada pizza que hacemos está llena de amor y tradición. Creemos que la buena comida une a las personas, y nos enorgullece ser parte de tus momentos especiales, desde una cena familiar hasta una celebración con amigos.
                </p>
              </div>
              <div className="rounded-lg overflow-hidden shadow-xl">
                <Image 
                  src="https://picsum.photos/800/600" 
                  alt="Familia preparando pizza" 
                  width={800} 
                  height={600}
                  className="w-full h-full object-cover"
                  data-ai-hint="family preparing pizza"
                />
              </div>
            </div>
          </div>
        </section>

        <section id="eventos" className="py-12 md:py-24">
          <div className="container px-4 md:px-6">
            <div className="grid md:grid-cols-2 gap-12 items-center">
                <div className="rounded-lg overflow-hidden shadow-xl">
                    <Image
                        src="https://picsum.photos/800/600?random=10"
                        alt="Celebración de cumpleaños con pizza"
                        width={800}
                        height={600}
                        className="w-full h-full object-cover"
                        data-ai-hint="birthday pizza party"
                    />
                </div>
                <div>
                    <span className="text-primary font-semibold">Eventos Especiales</span>
                    <h2 className="text-3xl md:text-4xl font-bold mt-2 mb-4">¡Celebra con Sabor a Fabichelo!</h2>
                    <p className="text-muted-foreground mb-6">
                        ¿Planeando un cumpleaños, una reunión familiar o un evento corporativo? Nuestras pizzas son la opción perfecta para deleitar a tus invitados sin complicaciones. Ofrecemos paquetes especiales y descuentos por volumen para que tu celebración sea un éxito.
                    </p>
                    <p className="text-muted-foreground mb-8">
                        Contáctanos para personalizar tu pedido y nos encargaremos de que tengas las mejores pizzas, listas para hornear y disfrutar.
                    </p>
                    <Button asChild>
                        <a href="#contacto">Cotizar Evento</a>
                    </Button>
                </div>
            </div>
          </div>
        </section>

        <section id="preparacion" className="bg-card py-12 md:py-24">
          <div className="container px-4 md:px-6">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-10">Consejos para una Pizza Perfecta</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 text-center">
              <div className="flex flex-col items-center">
                <div className="mx-auto bg-primary/10 p-4 rounded-full w-fit">
                  <CookingPot className="h-10 w-10 text-primary" />
                </div>
                <h3 className="text-xl font-bold mt-4">1. Precalienta el Horno</h3>
                <p className="text-muted-foreground mt-2">Para una base crujiente, precalienta tu horno a 220°C (425°F). Coloca la rejilla en el centro.</p>
              </div>
              <div className="flex flex-col items-center">
                <div className="mx-auto bg-primary/10 p-4 rounded-full w-fit">
                  <Pizza className="h-10 w-10 text-primary" />
                </div>
                <h3 className="text-xl font-bold mt-4">2. Hornea Directamente</h3>
                <p className="text-muted-foreground mt-2">Retira todos los envoltorios y coloca la pizza congelada directamente sobre la rejilla del horno. ¡No uses bandeja!</p>
              </div>
              <div className="flex flex-col items-center">
                <div className="mx-auto bg-primary/10 p-4 rounded-full w-fit">
                  <ThumbsUp className="h-10 w-10 text-primary" />
                </div>
                <h3 className="text-xl font-bold mt-4">3. Disfruta al Momento</h3>
                <p className="text-muted-foreground mt-2">Hornea de 10 a 15 minutos o hasta que el queso esté dorado y burbujeante. Deja enfriar un minuto y ¡a disfrutar!</p>
              </div>
            </div>
          </div>
        </section>

        <section id="contacto" className="py-12 md:py-24">
          <div className="container px-4 md:px-6">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-10">Contáctanos</h2>
            <div className="grid md:grid-cols-2 gap-12">
              <div>
                <h3 className="text-2xl font-bold mb-4">Información de Contacto</h3>
                <p className="text-muted-foreground mb-6">Estamos aquí para atenderte. ¡No dudes en llamarnos, enviarnos un correo o visitarnos!</p>
                <ul className="space-y-4">
                  <li className="flex items-center gap-3">
                    <Phone className="h-5 w-5 text-primary" />
                    <a href="tel:915044545" className="hover:text-primary">915 044 545</a>
                  </li>
                  <li className="flex items-center gap-3">
                    <Mail className="h-5 w-5 text-primary" />
                    <a href="mailto:pizzafabichelo@gmail.com" className="hover:text-primary">pizzafabichelo@gmail.com</a>
                  </li>
                  <li className="flex items-center gap-3">
                    <Facebook className="h-5 w-5 text-primary" />
                    <a href="https://www.facebook.com/pizzafabichelo/" target="_blank" rel="noopener noreferrer" className="hover:text-primary">@pizzafabichelo</a>
                  </li>
                </ul>
                <div className="mt-8 rounded-lg overflow-hidden border shadow-lg">
                  <iframe 
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d975.4986162232399!2d-76.94222953335528!3d-11.97982889912752!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9105c4ed41110fef%3A0x1b9a5e8b77b68e0c!2sPizzas%20%26%20Broaster%20Fabichelo!5e0!3m2!1ses-419!2spe!4v1721332021610!5m2!1ses-419!2spe"
                    width="100%" 
                    height="350" 
                    style={{border:0}} 
                    allowFullScreen={true}
                    loading="lazy" 
                    referrerPolicy="no-referrer-downgrade">
                  </iframe>
                </div>
              </div>
              <div>
                <h3 className="text-2xl font-bold mb-4">Envíanos un Mensaje</h3>
                <p className="text-muted-foreground mb-6">¿Tienes alguna pregunta o comentario? Completa el formulario y te responderemos pronto.</p>
                <ContactForm />
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer className="bg-card border-t">
        <div className="container flex flex-col items-center justify-between gap-4 py-6 sm:flex-row">
          <p className="text-sm text-muted-foreground">
            &copy; {new Date().getFullYear()} Pizzas Congeladas Fabichelo. Todos los derechos reservados.
          </p>
          <div className="flex gap-4">
            <a href="https://www.facebook.com/pizzafabichelo/" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary">
              <Facebook className="h-5 w-5" />
            </a>
            <a href="mailto:pizzafabichelo@gmail.com" className="text-muted-foreground hover:text-primary">
              <Mail className="h-5 w-5" />
            </a>
            <a href="tel:915044545" className="text-muted-foreground hover:text-primary">
              <Phone className="h-5 w-5" />
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}
