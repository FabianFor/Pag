import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Phone, Mail, Facebook, Cake, Pizza } from "lucide-react";
import SpecialOrderForm from "@/components/special-order-form";
import ContactForm from "@/components/contact-form";
import { PizzaIcon } from "@/components/pizza-icon";

const pizzas = [
  {
    name: "Americana",
    description: "La clásica combinación de queso mozzarella, salsa de tomate y jamón de primera.",
    image: "https://picsum.photos/600/400?random=1",
    aiHint: "american pizza"
  },
  {
    name: "Hawaiana",
    description: "Una mezcla tropical de jamón y piña jugosa sobre una base de queso derretido.",
    image: "https://picsum.photos/600/400?random=2",
    aiHint: "hawaiian pizza"
  },
  {
    name: "Pepperoni",
    description: "Para los amantes del picante, cubierta de pepperoni de alta calidad y mucho queso.",
    image: "https://picsum.photos/600/400?random=3",
    aiHint: "pepperoni pizza"
  },
  {
    name: "Cuatro Quesos",
    description: "Una sinfonía de sabores con queso mozzarella, provolone, parmesano y azul.",
    image: "https://picsum.photos/600/400?random=4",
    aiHint: "cheese pizza"
  },
  {
    name: "Vegetariana",
    description: "Fresca y saludable, con pimientos, cebolla, champiñones, aceitunas y maíz.",
    image: "https://picsum.photos/600/400?random=5",
    aiHint: "vegetarian pizza"
  },
  {
    name: "Carbonara",
    description: "Inspirada en la pasta, con base de nata, bacon, cebolla y un toque de pimienta negra.",
    image: "https://picsum.photos/600/400?random=6",
    aiHint: "carbonara pizza"
  },
];

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container flex h-14 items-center">
          <a href="#" className="flex items-center gap-2 font-bold font-headline text-xl">
            <PizzaIcon className="h-8 w-8 text-primary" />
            Fabichelo
          </a>
          <nav className="ml-auto hidden md:flex gap-6 text-sm font-medium">
            <a href="#pizzas" className="transition-colors hover:text-primary">Nuestras Pizzas</a>
            <a href="#pedidos" className="transition-colors hover:text-primary">Pedidos Especiales</a>
            <a href="#contacto" className="transition-colors hover:text-primary">Contacto</a>
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
          <div className="absolute inset-0 bg-black/60 -z-10" />
          <div className="container px-4 md:px-6">
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tighter mb-4">
              Sabor Artesanal, Listo en Minutos
            </h1>
            <p className="max-w-[700px] mx-auto text-lg md:text-xl text-primary-foreground/90 mb-8">
              Descubre nuestras pizzas congeladas Fabichelo, preparadas con los ingredientes más frescos para que disfrutes en casa.
            </p>
            <Button size="lg" asChild className="bg-accent text-accent-foreground hover:bg-accent/90">
              <a href="#pizzas">Ver Menú</a>
            </Button>
          </div>
        </section>

        <section id="pizzas" className="py-12 md:py-24">
          <div className="container px-4 md:px-6">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-10">Nuestras Pizzas</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
              {pizzas.map((pizza) => (
                <Card key={pizza.name} className="overflow-hidden transition-transform duration-300 hover:scale-105 hover:shadow-xl">
                  <CardHeader className="p-0">
                    <Image src={pizza.image} alt={pizza.name} width={600} height={400} className="w-full h-48 object-cover" data-ai-hint={pizza.aiHint} />
                  </CardHeader>
                  <CardContent className="p-6">
                    <CardTitle className="text-2xl mb-2">{pizza.name}</CardTitle>
                    <CardDescription>{pizza.description}</CardDescription>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        <section id="pedidos" className="bg-card py-12 md:py-24">
          <div className="container px-4 md:px-6">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <span className="text-primary font-semibold">Eventos Especiales</span>
                <h2 className="text-3xl md:text-4xl font-bold mt-2 mb-4">Pedidos para Cumpleaños y Celebraciones</h2>
                <p className="text-muted-foreground mb-6">
                  ¿Planeando un evento? Deja que nos encarguemos de la comida. Ofrecemos pedidos especiales de nuestras pizzas congeladas para que tu celebración sea un éxito. Utiliza nuestro asistente de IA para generar un mensaje de pedido personalizado.
                </p>
                <div className="flex items-center gap-4 text-primary">
                  <Pizza className="h-6 w-6" />
                  <span>Sabor inolvidable</span>
                  <Cake className="h-6 w-6" />
                  <span>Perfecto para fiestas</span>
                </div>
              </div>
              <SpecialOrderForm />
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
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15607.447545920153!2d-77.04351896803213!3d-12.05051613008985!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9105c8b6a333c3f3%3A0x8a333af24103a80!2sCentro%20C%C3%ADvico!5e0!3m2!1ses-419!2spe!4v1720216123067!5m2!1ses-419!2spe" 
                    width="100%" 
                    height="350" 
                    style={{border:0}} 
                    allowFullScreen={true}
                    loading="lazy" 
                    referrerPolicy="no-referrer-when-downgrade">
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
