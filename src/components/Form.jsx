import React from "react";
import { Input } from "./";
import SelectTip from "./SelectTip";

function Form({ setValues }) {
  return (
    <div className="flex flex-col gap-8 ">
      <Input label="Bill" icon="dollar" setValues={setValues} />
      <SelectTip setValues={setValues} />
      <Input label="Number of People" icon="user" setValues={setValues} />
    </div>
  );
}

export default Form;
