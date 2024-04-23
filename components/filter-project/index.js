import React, { useState } from "react";
import { Listbox, Transition } from "@headlessui/react";
import { Fragment } from "react";
import { ChevronUpDownIcon } from "@heroicons/react/20/solid";

const options = [
  { id: 1, name: "Popular", unavailable: false },
  { id: 2, name: "Latest", unavailable: false },
];

export default function FilterProject({ onChange }) {
  const [selected, setSelected] = useState(options[0]);

  const handleSelectedChange = (selectedOption) => {
    setSelected(selectedOption);
    onChange(selectedOption);
  };

  return (
    <Listbox value={selected} onChange={handleSelectedChange}>
      <div className="relative mt-1 z-40">
        <Listbox.Button className="relative w-full cursor-default rounded-lg border bg-white py-2 pl-3 pr-10 text-left shadow-md focus:outline-none focus-visible:border-indigo-500 focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75 focus-visible:ring-offset-2 focus-visible:ring-offset-orange-300 sm:text-sm">
          <span className="block truncate">{selected.name}</span>
          <span className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-2">
            <ChevronUpDownIcon className="h-5 w-5 text-gray-400" aria-hidden="true" />
          </span>
        </Listbox.Button>
        <Transition as={Fragment} leave="transition ease-in duration-100" leaveFrom="opacity-100" leaveTo="opacity-0">
          <Listbox.Options className="absolute mt-1 max-h-60 overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 w-fit ring-black ring-opacity-5 focus:outline-none sm:text-sm">
            {options.map((option, index) => (
              <Listbox.Option key={index} className={({ active }) => `relative cursor-default select-none py-2 pl-2 pr-8 ${active ? "bg-amber-100 text-amber-900" : "text-gray-900"}`} value={option}>
                {({ selected }) => <span className={`block truncate ${selected ? "font-medium" : "font-normal"}`}>{option.name}</span>}
              </Listbox.Option>
            ))}
          </Listbox.Options>
        </Transition>
      </div>
    </Listbox>
  );
}
