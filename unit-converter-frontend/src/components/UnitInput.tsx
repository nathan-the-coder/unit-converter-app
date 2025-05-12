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
        <div className="flex flex-col mb-2 text-left">
            <label className="block font-bold mb-1" htmlFor={name}>{label}</label>
            <input
                type="text"
                id={name}
                name={name}
                value={value}
                onChange={onChange}
                className={clsx(
                    'p-1 rounded border-2 text-center focus:outline-none focus:ring-0 focus:border-blue-600',
                    {
                        'border-red-500': error,
                        'border-gray-500': !error,
                    }
                )}
            />
            {error && <span className="text-red-500 text-sm mt-1">{error}</span>}
        </div>
    )
}
