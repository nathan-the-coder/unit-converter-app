import { useState, FormEvent } from "react";
import { Data } from "../types";
import clsx from "clsx";
import axios from "axios";
import UnitInput from "./UnitInput";

export default function WeightConverter() {
  const [weight, setWeight] = useState(0);
  const [fromUnit, setFromUnit] = useState("");
  const [toUnit, setToUnit] = useState("");
  const [weightError, setWeightError] = useState('');
  const [fromUnitError, setFromUnitError] = useState('');
  const [toUnitError, setToUnitError] = useState('');

  const [convData, setConvData] = useState<Data | null>(null);


  const handleSubmitForm = (e: FormEvent) => {
    if (e !== undefined) { e.preventDefault(); }

    let hasError = false;

    if (weight <= 0 || isNaN(weight)) {
      setWeightError("Weight must be a number greater than 0.");
      hasError = true;
    } else {
      setWeightError("");
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
        category: 'weight',
        from_unit: fromUnit,
        to_unit: toUnit,
        value: weight
      })
        .then(response => {
          const data: Data = response.data;
          setConvData(data);
        })
        .catch(error => {
          console.error('Error fetching data: ', error);
        });
    }
  }

  const handleResetConv = () => {
    setConvData(null);

    setWeight(0);
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
            <label className="block font-bold mb-1" htmlFor="weight">Enter the weight to convert</label>
            <input
              type="text"
              className={
                clsx(
                  'p-1 rounded border-2 text-center focus:outline-none focus:ring-0 focus:border-blue-600',
                  {
                    'border-red-500': weightError,
                    'border-gray-500': !weightError,
                  }
                )}
              name="weight"
              value={weight}
              onChange={(e) => setWeight(parseInt(e.target.value) || 0)}
            />

            {weightError && <p className="text-red-500 text-sm">{weightError}</p>}

          </div>

          <UnitInput label={"Unit to convert from"} name={"fromInput"} value={fromUnit} onChange={(e) => setFromUnit(e.target.value)} error={fromUnitError} />

          <UnitInput label={"Unit to convert to"} name={"toInput"} value={toUnit} onChange={(e) => setToUnit(e.target.value)} error={toUnitError} />

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
