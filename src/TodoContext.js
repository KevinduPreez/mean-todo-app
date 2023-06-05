import React, { useContext, useEffect, useState } from "react";
import { createContext, useReducer } from "react";
import { chatGptCaller } from "./chat";

export const TodoContext = createContext(null);
export const TodoDispatchContext = createContext(null);
export const PastDueContext = createContext(null);
export const PastDueDispatchContext = createContext(null);

const initialTodos = [];
const initialGptMessage = "";

export function pastDueReducer(gptMessages, action) {
  return [
    ...gptMessages,
    {
      gptMessages: action.gptMessages,
    },
  ];
}

function todosReducer(todos, action) {
  return [
    ...todos,
    {
      id: action.id,
      title: action.title,
      date: action.date,
      isDue: action.isDue,
      chatComm: action.chatComm,
    },
  ];
}

export default function TodoContextProvider({ children }) {
  const [todos, dispatch] = useReducer(todosReducer, initialTodos);
  const [gptMessages, gptdispatch] = useReducer(
    pastDueReducer,
    initialGptMessage
  );

  return (
    <TodoContext.Provider value={todos}>
      <TodoDispatchContext.Provider value={dispatch}>
        <PastDueContext.Provider value={gptMessages}>
          <PastDueDispatchContext.Provider value={gptdispatch}>
            {children}
          </PastDueDispatchContext.Provider>
        </PastDueContext.Provider>
      </TodoDispatchContext.Provider>
    </TodoContext.Provider>
  );
}

export function useTodosContext() {
  return useContext(TodoContext);
}

export function useTodosDispatchContext() {
  return useContext(TodoDispatchContext);
}