import React, { FormEvent } from "react";
import clsx from "clsx";
import axios from "axios";

interface Data {
    result: number;
    from_unit: string;
    to_unit: string;
    original_value: number;
}

export default function LengthConverter() {
  const [length, setLength] = React.useState(0);
  const [fromUnit, setFromUnit] = React.useState("");
  const [toUnit, setToUnit] = React.useState("");
  const [lengthError, setLengthError] = React.useState('');
  const [fromUnitError, setFromUnitError] = React.useState('');
  const [toUnitError, setToUnitError] = React.useState('');

  const [convData, setConvData] = React.useState<Data | null>(null);


  const handleSubmitForm = (e: FormEvent) => {
    if (e !== undefined) { e.preventDefault(); }

    let hasError = false;

    if (length <= 0 || isNaN(length)) {
      setLengthError("Length must be a number greater than 0.");
      hasError = true;
    } else {
      setLengthError("");
    }

    if (fromUnit.trim() == '') {
      setFromUnitError('Please enter a valid "from" unit.');
      hasError = true;
    } else {
      setFromUnitError("");
    }

    if (toUnit.trim() == '') {
      setToUnitError('Please enter a valid "to" unit.');
      hasError = true;
    } else {
      setToUnitError("");
    }

    if (!hasError) {
      axios.post('http://localhost:3000/api/convert', {
          category: 'length',
          from_unit: fromUnit,
          to_unit: toUnit,
          value: length
      })
      .then(response => {
        const data: Data =response.data;
        console.log(data);
        setConvData(data);
      })
      .catch(error => {
        console.error('Error fetching data: ', error);
      });
    }
  }

  const handleResetConv = () => {
    setConvData(null);

    setLength(0);
    setFromUnit("");
    setToUnit("");
  }

  return (
    <div className="w-full">
      {convData ? (
        <div id="result" className="text-left flex flex-col justify-center">
          <h1 className="mt-2">Result of the calculation</h1>
          <h1 className="text-2xl my-2">{convData.original_value} {convData.from_unit} = {convData.result} {convData.to_unit}</h1>

          <button
            type="button"
            className="border-2 p-2 w-32 cursor-pointer hover:bg-black hover:text-white transition-colors duration-200 ease-in-out"
            onClick={handleResetConv}
          >

          Reset
          </button>
        </div>
      ) : (
      <form className="font-sans mt-5 flex flex-col justify-center items-start" onSubmit={handleSubmitForm}>
        <div className="text-left mb-2">
          <label className="block font-bold mb-1" htmlFor="length">Enter the length to convert</label>
          <input
            type="text"
            className={
              clsx(
                'p-1 border rounded border-2 text-center focus:outline-none focus:ring-0 focus:border-blue-600',
                {
                  'border-red-500': lengthError,
                  'border-gray-500': !lengthError,
                }
              )} name="length"
            value={length}
            onChange={(e) => setLength(parseInt(e.target.value) || 0)}
          />

          {lengthError && <p className="text-red-500 text-sm">{lengthError}</p>}

        </div>
        <div className="text-left mb-2">
          <label className="block font-bold mb-1" htmlFor="from-input">Unit to convert from</label>
          <input
            type="text"
            className={
              clsx(
                'p-1 border rounded border-2 text-center focus:outline-none focus:ring-0 focus:border-blue-600',
                {
                  'border-red-500': fromUnitError,
                  'border-gray-500': !fromUnitError,
                }
              )} name="from-input"
            value={fromUnit.toString()}
            onChange={(e) => setFromUnit(e.target.value)}
          />

          {fromUnitError && <p className="text-red-500 text-sm">{fromUnitError}</p>}
        </div>
        <div className="text-left mb-2">
          <label className="block font-bold mb-1" htmlFor="to-input">Unit to convert to</label>
          <input
            type="text"
            className={
              clsx(
                'p-1 border rounded border-2 text-center focus:outline-none focus:ring-0 focus:border-blue-600',
                {
                  'border-red-500': toUnitError,
                  'border-gray-500': !toUnitError,
                }
              )} name="to-input"
            value={toUnit.toString()}
            onChange={(e) => setToUnit(e.target.value)}
          />

          {toUnitError && <p className="text-red-500 text-sm">{toUnitError}</p>}

        </div>

        <button
          type="submit"
          className="my-2 border-2 p-2 w-32 cursor-pointer rounded-lg hover:bg-black hover:text-white transition-colors duration-200 ease-in-out"
        >

          Convert
        </button>
      </form>
      )
    }
    </div>
  )
}
