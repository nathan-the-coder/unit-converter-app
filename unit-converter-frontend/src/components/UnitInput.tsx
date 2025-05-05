import React from "react"
import clsx from "clsx"

interface UnitInputProps {
    label: string;
    name: string;
    value: string;
    error: string;
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

export default function UnitInput({ label, name, value, error, onChange }: UnitInputProps) {
    return (
        <div className="flex flex-col mb-4">
            <label htmlFor={name} className="text-gray-700 font-semibold mb-2">{label}</label>
            <input
                type="text"
                id={name}
                name={name}
                value={value}
                onChange={onChange}
                className={clsx(
                    "border rounded px-3 py-2",
                    error ? "border-red-500" : "border-gray-300"
                )}
            />
            {error && <span className="text-red-500 text-sm mt-1">{error}</span>}
        </div>
    )
}