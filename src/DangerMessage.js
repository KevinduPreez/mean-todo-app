import React from "react";
import { useState, useEffect } from "react";
import { chatGptCaller } from "./chat";

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
