//import React from "react";
import { Configuration, OpenAIApi } from "openai";

const chatConfig = new Configuration({
  //TODO: Setup DONEV enviroment for storing key.
  apiKey: "APIKEY GOES HERE",
});
const openai = new OpenAIApi(chatConfig);

export async function chatGptCaller() {
  const chatResponse = await openai.createCompletion({
    model: "text-ada-001",
    prompt: "Write a sarcastic comment about my failure",
    temperature: 0.4,
    max_tokens: 100,
  });

  return chatResponse.data.choices[0].text;
}
