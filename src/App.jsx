import React, { useState } from "react";
import { Form, Title } from "./components";
import Result from "./components/Result";

function App() {
  const [values, setValues] = useState({ bill: 0, tip: 0, people: 0 });

  return (
    <>
      <Title />
      <div className="w-full max-w-[920px] rounded-t-3xl p-8 bg-white md:rounded-3xl grid md:grid-cols-2 gap-8">
        <Form setValues={setValues} />
        <Result values={values} setValues={setValues} />
      </div>
    </>
  );
}

export default App;
