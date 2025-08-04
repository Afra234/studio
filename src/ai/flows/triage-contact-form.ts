'use server';

/**
 * @fileOverview A contact form triage AI agent.
 *
 * - triageContactForm - A function that handles the contact form triage process.
 * - TriageContactFormInput - The input type for the triageContactForm function.
 * - TriageContactFormOutput - The return type for the triageContactForm function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const TriageContactFormInputSchema = z.object({
  name: z.string().describe('The name of the person submitting the form.'),
  company: z.string().describe('The company of the person submitting the form.'),
  email: z.string().email().describe('The email address of the person submitting the form.'),
  message: z.string().describe('The message submitted in the contact form.'),
});
export type TriageContactFormInput = z.infer<typeof TriageContactFormInputSchema>;

const TriageContactFormOutputSchema = z.object({
  category: z
    .enum(['sales', 'support', 'other'])
    .describe(
      'The category the contact form submission falls into, based on the message content.  Sales inquiries should be categorized as \'sales\', support requests as \'support\', and all other submissions as \'other\'.'
    ),
  reason: z
    .string()
    .describe(
      'A short explanation (one sentence) explaining why the submission was categorized as such.'
    ),
});
export type TriageContactFormOutput = z.infer<typeof TriageContactFormOutputSchema>;

export async function triageContactForm(input: TriageContactFormInput): Promise<TriageContactFormOutput> {
  return triageContactFormFlow(input);
}

const prompt = ai.definePrompt({
  name: 'triageContactFormPrompt',
  input: {schema: TriageContactFormInputSchema},
  output: {schema: TriageContactFormOutputSchema},
  prompt: `You are an expert customer service agent, specializing in triaging contact form submissions.

You will use the information provided in the contact form to categorize the submission as either \'sales\', \'support\', or \'other\'.

Consider the following rubric:

- If the message indicates an interest in purchasing the company's products or services, or requests a sales consultation, categorize it as \'sales\'.
- If the message requests assistance with a product or service, reports a problem, or asks a question about how to use the company's offerings, categorize it as \'support\'.
- If the message is a general inquiry, a comment, or is otherwise not related to sales or support, categorize it as \'other\'.

Name: {{{name}}}
Company: {{{company}}}
Email: {{{email}}}
Message: {{{message}}}

Now, categorize the contact form submission.

Category: {{category}}
Reason: {{reason}}`,
});

const triageContactFormFlow = ai.defineFlow(
  {
    name: 'triageContactFormFlow',
    inputSchema: TriageContactFormInputSchema,
    outputSchema: TriageContactFormOutputSchema,
  },
  async input => {
    const {output} = await prompt(input);
    return output!;
  }
);
