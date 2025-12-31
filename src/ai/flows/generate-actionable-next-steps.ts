'use server';

/**
 * @fileOverview This file contains the Genkit flow for generating actionable next steps based on the identified blocker.
 *
 * - generateActionableNextSteps - A function that takes the identified blocker as input and returns a list of actionable next steps.
 * - GenerateActionableNextStepsInput - The input type for the generateActionableNextSteps function.
 * - GenerateActionableNextStepsOutput - The return type for the generateActionableNextSteps function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const GenerateActionableNextStepsInputSchema = z.object({
  identifiedBlocker: z
    .string()
    .describe("The identified blocker preventing the user from accessing government schemes."),
});
export type GenerateActionableNextStepsInput = z.infer<
  typeof GenerateActionableNextStepsInputSchema
>;

const GenerateActionableNextStepsOutputSchema = z.object({
  actionableNextSteps: z
    .array(z.string())
    .describe("A list of actionable next steps to resolve the identified blocker."),
});
export type GenerateActionableNextStepsOutput = z.infer<
  typeof GenerateActionableNextStepsOutputSchema
>;

export async function generateActionableNextSteps(
  input: GenerateActionableNextStepsInput
): Promise<GenerateActionableNextStepsOutput> {
  return generateActionableNextStepsFlow(input);
}

const prompt = ai.definePrompt({
  name: 'generateActionableNextStepsPrompt',
  input: {schema: GenerateActionableNextStepsInputSchema},
  output: {schema: GenerateActionableNextStepsOutputSchema},
  prompt: `You are an AI assistant designed to provide actionable next steps to users based on their identified blocker in accessing government schemes.

  Based on the identified blocker: {{{identifiedBlocker}}},
  generate a list of actionable next steps the user can take to resolve the issue. Each step should be clear, concise, and easy to follow. The actionable next steps should be returned as an array of strings.
  `,
});

const generateActionableNextStepsFlow = ai.defineFlow(
  {
    name: 'generateActionableNextStepsFlow',
    inputSchema: GenerateActionableNextStepsInputSchema,
    outputSchema: GenerateActionableNextStepsOutputSchema,
  },
  async input => {
    const {output} = await prompt(input);
    return output!;
  }
);
