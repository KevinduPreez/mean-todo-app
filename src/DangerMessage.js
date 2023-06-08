import React from "react";
import { useState, useEffect } from "react";
import { chatGptCaller } from "./chat";
import { useTodosDispatchContext } from "./TodoContext";

export default function GptMessage() {
  const [ms, setMs] = useState("");

  const gptMess = chatGptCaller();

  const dispatch = useTodosDispatchContext();

  useEffect(() => {
    gptMess.then((data) => {
      setMs(data);
    });
  }, []);

  return (
    <div className="alert alert-danger text-center" role="alert">
      {/* {() => {
        dispatch({
          chatComm: ms,
        });
        //console.log(ms);
        return ms;
      }} */}
      <p>{ms}</p>
    </div>
  );
}

// export default function DangerMessage({ mess }) {
//   const [chatComm, setChatComm] = useState("");

//   useEffect(() => {
//     chatGptCaller()
//       .then((data) => {
//         setChatComm(data);
//       })
//       .catch((error) => {
//         console.error("Chat failed: ", error);
//       });
//   }, []);

//   return (
//     <div className="alert alert-danger" role="alert">
//       {mess}
//     </div>
//   );
// }
