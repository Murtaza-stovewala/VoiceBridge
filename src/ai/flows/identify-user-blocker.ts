'use server';
/**
 * @fileOverview Identifies the user's blocker preventing them from accessing a government scheme.
 *
 * - identifyUserBlocker - A function that identifies the user's blocker.
 * - IdentifyUserBlockerInput - The input type for the identifyUserBlocker function.
 * - IdentifyUserBlockerOutput - The return type for the identifyUserBlocker function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const IdentifyUserBlockerInputSchema = z.object({
  query: z.string().describe('The user query regarding their issue accessing a government scheme.'),
});
export type IdentifyUserBlockerInput = z.infer<typeof IdentifyUserBlockerInputSchema>;

const IdentifyUserBlockerOutputSchema = z.object({
  blocker: z.string().describe('The identified blocker preventing the user from accessing the scheme.'),
  nextSteps: z.string().describe('Actionable next steps to overcome the identified blocker.'),
});
export type IdentifyUserBlockerOutput = z.infer<typeof IdentifyUserBlockerOutputSchema>;

export async function identifyUserBlocker(input: IdentifyUserBlockerInput): Promise<IdentifyUserBlockerOutput> {
  return identifyUserBlockerFlow(input);
}

const prompt = ai.definePrompt({
  name: 'identifyUserBlockerPrompt',
  input: {schema: IdentifyUserBlockerInputSchema},
  output: {schema: IdentifyUserBlockerOutputSchema},
  prompt: `You are an AI assistant helping users identify why they are blocked from accessing a government scheme and providing actionable next steps.

  Analyze the following user query and identify the most likely blocker. Provide clear and concise next steps to resolve the blocker.

  Query: {{{query}}}
  `,
});

const identifyUserBlockerFlow = ai.defineFlow(
  {
    name: 'identifyUserBlockerFlow',
    inputSchema: IdentifyUserBlockerInputSchema,
    outputSchema: IdentifyUserBlockerOutputSchema,
  },
  async input => {
    const {output} = await prompt(input);
    return output!;
  }
);
