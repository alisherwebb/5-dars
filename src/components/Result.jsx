import React from "react";

function Result({ values, setValues }) {
  const { bill, tip, people } = values;
  const benom =
    people > 0 ? ((bill * (tip / 100)) / people).toFixed(2) : "0.00";
  const totalPerPerson =
    people > 0 ? ((bill + bill * (tip / 100)) / people).toFixed(2) : "0.00";
  const handleReset = () => {
    setValues({ bill: 0, tip: 0, people: 0 });
  };

  return (
    <div className="bg-dark-green text-white p-6 rounded-2xl flex flex-col justify-between">
      <div className="flex flex-col gap-6">
        <div className="flex items-center justify-between">
          <div>
            <p className="text-1xl text-gray-400 mb-2">Tip Amount</p>
            <span className="text-sm text-gray-500">/ person</span>
          </div>
          <p className="text-5xl font-bold text-primary">${benom}</p>
        </div>
        <div className="flex items-center justify-between">
          <div>
            <p className="text-1xl mb-2 text-gray-400">Total</p>
            <span className="text-sm text-gray-500">/ person</span>
          </div>
          <p className="text-5xl font-bold text-primary">${totalPerPerson}</p>
        </div>
      </div>
      <button
        onClick={handleReset}
        className="w-full bg-primary text-dark-green py-3.5 mt-6 rounded-md font-bold hover:bg-light-green"
        disabled={bill === 0 && tip === 0 && people === 0}
      >
        RESET
      </button>
    </div>
  );
}

export default Result;
