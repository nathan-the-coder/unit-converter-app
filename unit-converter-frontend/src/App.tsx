import { useState } from 'react';
import './App.css'
import LengthConverter from './components/LengthConverter';
import Navbar from './components/NavBar'
import TemperatureConverter from './components/TemperatureConverter';
import WeightConverter from './components/WeightConverter';

function App() {
  const [converter, setConverter] = useState("length");
  return (
    <main className="flex flex-col justify-center items-center mt-10 mx-auto border-2 rounded-xl font-sans w-2/5">
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
