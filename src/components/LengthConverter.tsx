import React, { FormEvent } from "react";

export default function LengthConverter() {
  const [length, setLength] = React.useState(0);
  const [fromType, setFromType] = React.useState("");
  const [toType, setToType] = React.useState("");
  const [error, setError] = React.useState("");

  const handleSubmitForm = (e: FormEvent) => {
    e.preventDefault();

    if (length == 0) {
      setError("Invalid length input. please make sure its above zero.");
    } else  if (fromType == "" || toType == "") {
      setError("Unit type is invalid. Please input another a valid ones.");
    } else {
      setError('');
      
    }
  }

  return (
    <div className="w-full">
      <form className="font-sans mt-5 flex flex-col justify-center items-start" onSubmit={handleSubmitForm}>
        <div className="text-left mb-4">
          <label className="block font-bold mb-1" htmlFor="length">Enter the length to convert</label>
          <input
            type="text"
            className="p-1 border rounded border-2 text-center focus:outline-none focus:ring-0 focus:border-blue-600  ${error ? 'border-red-500' : ''}" name="length"
            value={length}
            onChange={(e) => setLength(parseInt(e.target.value))}
          />

        </div>
        <div className="text-left mb-4">
          <label className="block font-bold mb-1" htmlFor="from-input">Unit to convert from</label>
          <input
            type="text"
            className=" p-1 border rounded border-2 text-center  focus:outline-none focus:ring-0 focus:border-blue-600" name="from-input"
            value={fromType}
            onChange={(e) => setFromType(e.target.value)}
          />
        </div>
        <div className="text-left mb-4">
          <label className="block font-bold mb-1" htmlFor="to-input">Unit to convert to</label>
          <input
            type="text"
            className="p-1 border rounded border-2 text-center  focus:outline-none focus:ring-0 focus:border-blue-600" name="to-input"
            value={toType}
            onChange={(e) => setToType(e.target.value)}
          />
        </div>

        <button
          type="submit"
          className="border-2 p-2 w-32 cursor-pointer hover:bg-black hover:text-white transition-colors duration-200 ease-in-out"
          onClick={handleSubmitForm()}
        >

          Convert
        </button>
      </form>
    </div>
  )
}
