export default function convert(category, from, to, value) {
  const conversions = {
    length: {
      m: 1,
      ft: 3.28084,
      cm: 100, 
      in: 39.3701,
      km: 0.001,
      ml: 0.000621371
    },
    weight: {
      kg: 1,
      lbs: 2.20462,
      g: 1000,
      oz: 35.274
    },
    temperature: {
      // special case handled separately
    }
  };

  if (category === 'temperature') {
    return convertTemperature(from, to, value);
  }

  const units = conversions[category];
  if (!units || !(from in units) || !(to in units)) {
    throw new Error('Unsupported category or units');
  }

  // Convert to base (e.g., meters or kilograms) and then to target
  const baseValue = value / units[from];
  return baseValue * units[to];
}

function convertTemperature(from, to, value) {
  if (from === to) return value;

  if (from === 'celsius') {
    if (to === 'fahrenheit') return (value * 9/5) + 32;
    if (to === 'kelvin') return value + 273.15;
  } else if (from === 'fahrenheit') {
    if (to === 'celsius') return (value - 32) * 5/9;
    if (to === 'kelvin') return (value - 32) * 5/9 + 273.15;
  } else if (from === 'kelvin') {
    if (to === 'celsius') return value - 273.15;
    if (to === 'fahrenheit') return (value - 273.15) * 9/5 + 32;
  }

  throw new Error('Unsupported temperature conversion');
}

