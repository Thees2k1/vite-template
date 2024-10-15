import { useState } from "react";
import "./styles/App.css";

function App() {
  return (
    <>
      <div className="justify-center items-center flex flex-col h-screen w-full">
        <h3> React JS Application </h3>
        <h5>Tools: </h5>
        <ul>
          <li>
            <p>Vite</p>
          </li>
          <li>
            <p>Typescript</p>
          </li>
          <li>
            <p>yarn</p>
          </li>
          <li>
            <p>TailwindCSS</p>
          </li>
          <li>
            <p>Shadcn</p>/UI
          </li>
        </ul>
        <h3>Fonts:</h3>
        <ol>
          <li>Satoshi</li>
          <li>Inter</li>
        </ol>
      </div>

    </>
  );
}

export default App;
