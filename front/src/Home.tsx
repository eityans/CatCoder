import React from "react";
import logo from './logo.svg';
import './App.css';
import { useEffect,useState } from 'react';

export const Home: React.FC = () => {
  const [text, setText] = useState<String | null>(null);

  useEffect(() => {
    const fetchInit = {
      method: "GET",
      headers: { "content-type": "application/json" }
    };

    const parsedURL = new URL("hello_world", process.env.REACT_APP_SERVER_URL).href;
    fetch(parsedURL, fetchInit)
      .then(response => response.json())
      .then(response => setText(response.text));
  });

  return (
    <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>Response: {text} </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header>
  );
};

