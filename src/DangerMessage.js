import React from "react";
import { useState, useEffect } from "react";
import { chatGptCaller } from "./chat";

export function gptMessage() {
  //TODO get message from chatGPT and return a div with said message.
}

export default function DangerMessage({ mess }) {
  const [chatComm, setChatComm] = useState("");

  useEffect(() => {
    chatGptCaller()
      .then((data) => {
        setChatComm(data);
      })
      .catch((error) => {
        console.error("Chat failed: ", error);
      });
  }, []);

  return (
    <div className="alert alert-danger" role="alert">
      {mess}
    </div>
  );
}
