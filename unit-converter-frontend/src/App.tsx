import { useState } from 'react';
import './App.css'
import LengthConverter from './components/LengthConverter';
import Navbar from './components/NavBar'
import TemperatureConverter from './components/TemperatureConverter';
import WeightConverter from './components/WeightConverter';

function App() {
  const [converter, setConverter] = useState("length");
  return (
    <main className="flex flex-col justify-center items-center mt-5 mx-auto border-2 rounded-xl font-sans w-full sm:w-1/2 md:w-2/3 lg:w-2/5 xl:w-2/6">
      <Navbar converter={converter} onConverterChange={setConverter} />

      <section className="relative -top-4 -left-7 mb-4" role="tabpanel">
        {converter === "length" && <LengthConverter />}
        {converter === "weight" && <WeightConverter />}
        {converter === "temperature" && <TemperatureConverter />}
      </section>
    </main>
  )
}

export default App
