//import React from "react";
import { Configuration, OpenAIApi } from "openai";

const chatConfig = new Configuration({
  //TODO: Recreate API key and setup DONEV enviroment for storing it.
  apiKey: "[THIS SHOULD BE AN API KEY]",
});
const openai = new OpenAIApi(chatConfig);

export async function chatGptCaller() {
  const chatResponse = await openai.createCompletion({
    model: "text-ada-001",
    prompt: "Write a sarcastic comment about my failures",
    temperature: 0.3,
    max_tokens: 36,
  });
  //console.log(chatResponse.data.choices[0].text);
  return chatResponse.data.choices[0].text;
}
