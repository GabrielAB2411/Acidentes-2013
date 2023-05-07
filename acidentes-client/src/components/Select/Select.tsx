import React from "react"

type SelectProps = {
    onChange: React.ChangeEventHandler
    options: {
        id: number,
        text: string,
    }[]
}

export default function Select({options, onChange}: SelectProps) {
    return (
        <>
            <label htmlFor="select-input" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Selecione uma opção</label>
            <select id="select-input" onChange={onChange} className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                <option value="" selected>Selecione</option>
                {options.map(opt => (
                    <option key={opt.id} value={opt.text}>{opt.text}</option>
                ))}
            </select>
        </>
    )
}