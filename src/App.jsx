import React from "react";
import { Form, Title } from "./components";

function App() {
  return (
    <>
      <Title />
      <div className="w-full max-w-[920px] rounded-t-3xl p-8 bg-white md:rounded-3xl">
        <Form />
      </div>
    </>
  );
}

export default App;
