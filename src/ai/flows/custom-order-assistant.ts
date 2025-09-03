'use server';

/**
 * @fileOverview A custom order AI assistant for generating messages to Fabichelo Frozen Pizza.
 *
 * - generateCustomOrderMessage - A function that generates a custom order message.
 * - CustomOrderAssistantInput - The input type for the generateCustomOrderMessage function.
 * - CustomOrderAssistantOutput - The return type for the generateCustomOrderMessage function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const CustomOrderAssistantInputSchema = z.object({
  flavor: z.string().describe('The desired flavor of the frozen pizza.'),
  quantity: z.number().describe('The number of frozen pizzas desired.'),
  event: z.string().describe('The type of event (e.g., birthday).'),
  additionalRequests: z.string().describe('Any special or additional requests.'),
});
export type CustomOrderAssistantInput = z.infer<typeof CustomOrderAssistantInputSchema>;

const CustomOrderAssistantOutputSchema = z.object({
  message: z.string().describe('The generated custom order message.'),
});
export type CustomOrderAssistantOutput = z.infer<typeof CustomOrderAssistantOutputSchema>;

export async function generateCustomOrderMessage(input: CustomOrderAssistantInput): Promise<CustomOrderAssistantOutput> {
  return customOrderAssistantFlow(input);
}

const prompt = ai.definePrompt({
  name: 'customOrderAssistantPrompt',
  input: {schema: CustomOrderAssistantInputSchema},
  output: {schema: CustomOrderAssistantOutputSchema},
  prompt: `You are an AI assistant helping users to generate messages for special pizza orders.

  The user wants to order {{{quantity}}} {{{flavor}}} frozen pizzas for a {{{event}}} event.

  They also have the following additional requests: {{{additionalRequests}}}

  Generate a professional and friendly message to Fabichelo Frozen Pizza, incorporating the above information.
  `,
});

const customOrderAssistantFlow = ai.defineFlow(
  {
    name: 'customOrderAssistantFlow',
    inputSchema: CustomOrderAssistantInputSchema,
    outputSchema: CustomOrderAssistantOutputSchema,
  },
  async input => {
    const {output} = await prompt(input);
    return output!;
  }
);
