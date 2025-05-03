import React, { FormEvent } from "react";
import clsx from "clsx";

export default function LengthConverter() {
  const [length, setLength] = React.useState(0);
  const [fromType, setFromType] = React.useState("");
  const [toType, setToType] = React.useState("");
  const [lengthError, setLengthError] = React.useState('');
  const [fromError, setFromError] = React.useState('');
  const [toError, setToError] = React.useState('');


  const handleSubmitForm = (e: FormEvent) => {
    if (e !== undefined) { e.preventDefault(); }

    let hasError = false;

    if (length <= 0 || isNaN(length)) {
      setLengthError("Length must be a number greater than 0.");
      hasError = true;
    } else {
      setLengthError("");
    }

    if (fromType.trim() == '') {
      setFromError('Please enter a valid "from" unit.');
      hasError = true;
    } else {
      setFromError("");
    }

    if (toType.trim() == '') {
      setToError('Please enter a valid "to" unit.');
      hasError = true;
    } else {
      setToError("");
    }

    if (!hasError) {
      console.log('Form is valid, proceed with conversion logic here...');
    }
  }

  return (
    <div className="w-full">
      <form className="font-sans mt-5 flex flex-col justify-center items-start" onSubmit={handleSubmitForm}>
        <div className="text-left mb-4">
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
        <div className="text-left mb-4">
          <label className="block font-bold mb-1" htmlFor="from-input">Unit to convert from</label>
          <input
            type="text"
            className={
              clsx(
                'p-1 border rounded border-2 text-center focus:outline-none focus:ring-0 focus:border-blue-600',
                {
                  'border-red-500': fromError,
                  'border-gray-500': !fromError,
                }
              )} name="from-input"
            value={fromType.toString()}
            onChange={(e) => setFromType(e.target.value)}
          />

          {fromError && <p className="text-red-500 text-sm">{fromError}</p>}
        </div>
        <div className="text-left mb-4">
          <label className="block font-bold mb-1" htmlFor="to-input">Unit to convert to</label>
          <input
            type="text"
            className={
              clsx(
                'p-1 border rounded border-2 text-center focus:outline-none focus:ring-0 focus:border-blue-600',
                {
                  'border-red-500': toError,
                  'border-gray-500': !toError,
                }
              )} name="to-input"
            value={toType.toString()}
            onChange={(e) => setToType(e.target.value)}
          />

          {toError && <p className="text-red-500 text-sm">{toError}</p>}

        </div>

        <button
          type="submit"
          className="border-2 p-2 w-32 cursor-pointer hover:bg-black hover:text-white transition-colors duration-200 ease-in-out"
        >

          Convert
        </button>
      </form>
    </div>
  )
}
