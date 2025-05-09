import React from "react";

interface NavbarProps {
  converter: string;
  onConverterChange: React.Dispatch<React.SetStateAction<string>>,
}
export default function Navbar({ converter, onConverterChange }: NavbarProps) {

  const tabs = [
    { label: "Length", value: "length" },
    { label: "Weight", value: "weight" },
    { label: "Temperature", value: "temperature" },
  ];

  return (
    <nav className="p-5">
      <h1 className="font-bold text-2xl relative -left-20">Unit Converter</h1>
      <ul className="flex flex-wrap text-lg font-medium text-center mt-3 text-gray-500 dark:text-gray-400 font-sans" role="tablist">
        {tabs.map((tab) => (
          <li className="me-2" key={tab.value}>
            <button
              role="tab"
              aria-selected={converter === tab.value}
              onClick={() => onConverterChange(tab.value)}
              className={`inline-block md:p-4 p-2 rounded-t-lg border-b-2 ${converter === tab.value
                ? "text-blue-600 border-blue-600"
                : "text-gray-800 hover:text-blue-600 border-transparent"
                }`}
            >
              {tab.label}
            </button>
          </li>
        ))}
      </ul>

    </nav>
  );
}
