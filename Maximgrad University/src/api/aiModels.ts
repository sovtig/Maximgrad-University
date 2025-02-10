import openai from 'openai';

export const summarizeData = async (data: string) => {
  const response = await openai.Completions.create({
    model: 'text-davinci-003',
    prompt: `Summarize the following data: ${data}`,
    max_tokens: 150,
  });
  return response.choices[0].text;
};