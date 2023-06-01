//import React from "react";
import { Configuration, OpenAIApi } from "openai";

const chatConfig = new Configuration({
  apiKey: "",
});

const openai = new OpenAIApi(chatConfig);
const chatResponse = await openai.createCompletion({
  model: "text-ada-001",
  prompt: "Write a sarcastic comment about my failures",
  temperature: 0.3,
  max_tokens: 36,
});

export default function ChatResponse() {
  //   console.log(chatResponse.data.choices[0].text);
  const chatFailed = chatResponse.data.choices[0].text;
  return chatFailed;
}
