"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { generateCustomOrderMessage } from "@/ai/flows/custom-order-assistant";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { useToast } from "@/hooks/use-toast";
import { Wand2, Copy, Loader2 } from "lucide-react";

const formSchema = z.object({
  flavor: z.string().min(1, "Debes seleccionar un sabor."),
  quantity: z.coerce.number().min(1, "La cantidad mínima es 1."),
  event: z.string().min(3, "El evento debe tener al menos 3 caracteres."),
  additionalRequests: z.string().optional(),
});

type FormValues = z.infer<typeof formSchema>;

export default function SpecialOrderForm() {
  const [generatedMessage, setGeneratedMessage] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const { toast } = useToast();

  const form = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      flavor: "",
      quantity: 1,
      event: "Cumpleaños",
      additionalRequests: "",
    },
  });

  async function onSubmit(values: FormValues) {
    setIsLoading(true);
    setGeneratedMessage("");
    try {
      const result = await generateCustomOrderMessage(values);
      setGeneratedMessage(result.message);
    } catch (error) {
      console.error("Error generating message:", error);
      toast({
        variant: "destructive",
        title: "Error",
        description: "No se pudo generar el mensaje. Inténtalo de nuevo.",
      });
    } finally {
      setIsLoading(false);
    }
  }

  const handleCopy = () => {
    navigator.clipboard.writeText(generatedMessage);
    toast({
      title: "Copiado",
      description: "Mensaje copiado al portapapeles.",
    });
  };

  return (
    <Card className="shadow-lg">
      <CardHeader>
        <CardTitle>Asistente de Pedidos con IA</CardTitle>
        <CardDescription>
          Completa los detalles y generaremos un mensaje de pedido para ti.
        </CardDescription>
      </CardHeader>
      <CardContent>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
            <FormField
              control={form.control}
              name="flavor"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Sabor de Pizza</FormLabel>
                  <Select onValueChange={field.onChange} defaultValue={field.value}>
                    <FormControl>
                      <SelectTrigger>
                        <SelectValue placeholder="Selecciona un sabor" />
                      </SelectTrigger>
                    </FormControl>
                    <SelectContent>
                      <SelectItem value="Americana">Americana</SelectItem>
                      <SelectItem value="Hawaiana">Hawaiana</SelectItem>
                      <SelectItem value="Pepperoni">Pepperoni</SelectItem>
                      <SelectItem value="Cuatro Quesos">Cuatro Quesos</SelectItem>
                      <SelectItem value="Vegetariana">Vegetariana</SelectItem>
                      <SelectItem value="Carbonara">Carbonara</SelectItem>
                    </SelectContent>
                  </Select>
                  <FormMessage />
                </FormItem>
              )}
            />
             <div className="grid grid-cols-2 gap-4">
                <FormField
                  control={form.control}
                  name="quantity"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Cantidad</FormLabel>
                      <FormControl>
                        <Input type="number" min="1" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="event"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Evento</FormLabel>
                      <FormControl>
                        <Input placeholder="Ej. Cumpleaños" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
            </div>
            <FormField
              control={form.control}
              name="additionalRequests"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Pedidos Adicionales</FormLabel>
                  <FormControl>
                    <Textarea placeholder="Ej. Sin aceitunas, extra queso..." {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <Button type="submit" disabled={isLoading} className="w-full bg-accent text-accent-foreground hover:bg-accent/90">
              {isLoading ? (
                <Loader2 className="mr-2 h-4 w-4 animate-spin" />
              ) : (
                <Wand2 className="mr-2 h-4 w-4" />
              )}
              Generar Mensaje
            </Button>
          </form>
        </Form>
        {(isLoading || generatedMessage) && (
          <div className="mt-6">
            <Label>Mensaje Generado</Label>
            <div className="relative mt-2">
              <Textarea
                readOnly
                value={isLoading ? "Generando tu mensaje..." : generatedMessage}
                className="min-h-[150px] pr-12"
              />
              {!isLoading && generatedMessage && (
                <Button variant="ghost" size="icon" className="absolute top-2 right-2 h-8 w-8" onClick={handleCopy}>
                  <Copy className="h-4 w-4" />
                </Button>
              )}
            </div>
          </div>
        )}
      </CardContent>
    </Card>
  );
}
