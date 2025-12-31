'use server';

import { identifyUserBlocker } from '@/ai/flows/identify-user-blocker';
import { generateActionableNextSteps } from '@/ai/flows/generate-actionable-next-steps';
import { z } from 'zod';

const resultSchema = z.object({
  blocker: z.string(),
  steps: z.array(z.string()),
});

export type AssistantResponse = {
  success: boolean;
  blocker?: string;
  steps?: string[];
  error?: string;
};

export async function getAssistance(
  userInput: string
): Promise<AssistantResponse> {
  if (!userInput) {
    return { success: false, error: 'Input cannot be empty.' };
  }

  try {
    // Step 1: Identify the high-level blocker from the user's query.
    const blockerResult = await identifyUserBlocker({ query: userInput });

    if (!blockerResult || !blockerResult.blocker) {
      throw new Error('Could not identify a blocker from the query.');
    }

    // Step 2: Use the identified blocker to generate a more detailed, actionable list of steps.
    const stepsResult = await generateActionableNextSteps({
      identifiedBlocker: blockerResult.blocker,
    });
    
    if (!stepsResult || !stepsResult.actionableNextSteps) {
        // Fallback to initial next steps if the second call fails
        return {
            success: true,
            blocker: blockerResult.blocker,
            steps: [blockerResult.nextSteps]
        }
    }
    
    return {
        success: true,
        blocker: blockerResult.blocker,
        steps: stepsResult.actionableNextSteps,
    };

  } catch (e) {
    console.error('Error getting assistance:', e);
    const errorMessage = e instanceof Error ? e.message : 'An unknown error occurred.';
    // Provide a user-friendly error message
    return { 
        success: false, 
        error: "I'm sorry, I'm having trouble understanding the issue right now. Could you please try rephrasing your problem?" 
    };
  }
}
