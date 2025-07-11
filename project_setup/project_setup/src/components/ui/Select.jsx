import React, { useState, useRef, useEffect } from "react";
import { ChevronDown } from "lucide-react";
import { clsx } from "clsx";

// Select wrapper
export function Select({ value, onChange, children }) {
  return (
    <SelectContext.Provider value={{ value, onChange }}>
      <div className="relative w-full">{children}</div>
    </SelectContext.Provider>
  );
}

// Trigger
export function SelectTrigger({ placeholder = "Select an option" }) {
  const { value } = React.useContext(SelectContext);
  const [open, setOpen] = useState(false);

  return (
    <SelectDropdown open={open} setOpen={setOpen}>
      <button
        type="button"
        onClick={() => setOpen(!open)}
        className="flex w-full justify-between items-center px-4 py-2 text-left border rounded-md bg-white shadow-sm hover:border-gray-400"
      >
        <span className="truncate">{value?.label || placeholder}</span>
        <ChevronDown className="w-4 h-4 ml-2" />
      </button>
    </SelectDropdown>
  );
}

// Content
function SelectDropdown({ children, open, setOpen }) {
  const wrapperRef = useRef();
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (wrapperRef.current && !wrapperRef.current.contains(event.target)) {
        setOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [setOpen]);

  return <div ref={wrapperRef}>{children}</div>;
}

// Content display
export function SelectContent({ children }) {
  const { open } = React.useContext(SelectContextInternal);

  if (!open) return null;
  return (
    <div className="absolute z-10 mt-1 w-full rounded-md bg-white shadow-lg border max-h-60 overflow-auto">
      {children}
    </div>
  );
}

// Item
export function SelectItem({ value, label }) {
  const { onChange } = React.useContext(SelectContext);

  return (
    <div
      onClick={() => onChange({ value, label })}
      className="cursor-pointer px-4 py-2 hover:bg-gray-100"
    >
      {label}
    </div>
  );
}

// Value (used to show outside as text if needed)
export function SelectValue() {
  const { value } = React.useContext(SelectContext);
  return <span>{value?.label || ""}</span>;
}

// Internal context
const SelectContext = React.createContext({});
const SelectContextInternal = React.createContext({});