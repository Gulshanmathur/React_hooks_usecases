/*
import React from 'react';

function App() {
  return React.createElement(
    React.Fragment, 
    null, 
    React.createElement('h1', null, 'Hello There'), 
    React.createElement('p', null, 'test para')
  );
}
export default App; 
 */

/*
import React, { useState } from 'react';

function App() {
  const username = "chaiorcode";
  const [count, setCount] = useState(0);

  function handleClick() {
    setCount(count + 1);
  }

  return React.createElement(
    React.Fragment,
    null,
    React.createElement(
      'h1',
      null,
      `Hello There ${username}`
    ),
    React.createElement(
      'p',
      null,
      'test para'
    ),
    React.createElement(
      'button',
      { onClick: handleClick },
      `click me ${count}`
    )
  );
}

export default App;

 */
import { useState } from "react";
function App() {
  const [color, setColor] = useState("white");
  const colorTray = ["black", "yellow", "red", "green"];

  function handleClick(e) {
    if (e.target.value === "black") setColor(e.target.value);
    else if (e.target.value === "yellow") setColor(e.target.value);
    else if (e.target.value === "red") setColor(e.target.value);
    else setColor(e.target.value);
  }
  let style = {
    backgroundColor: color,
  };

  return (
    <>
      <div
        className="w-full h-screen border-2 border-red-600 duration-500 "
        style={style}
      >
        <div className="container mx-auto fixed flex flex-wrap justify-center inset-x-0 bottom-5   ">
          <div className="flex flex-wrap justify-center gap-3 shadow-lg bg-slate-300 p-2 rounded-3xl">
            <button
              type="button"
              className="rounded-md bg-black px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-black/80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
              value="black"
              onClick={handleClick}
            >
              Button text
            </button>
            <button
              type="button"
              className="rounded-md bg-yellow-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-yellow-600/80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-yellow-600"
              value="yellow"
              onClick={handleClick}
            >
              Button text
            </button>
            <button
              type="button"
              className="rounded-md bg-red-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-red-600/80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-red-600"
              value="red"
              onClick={handleClick}
            >
              Button text
            </button>
            <button
              type="button"
              className="rounded-md bg-green-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-green-600/80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-green-600"
              value="green"
              onClick={handleClick}
            >
              Button text
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
