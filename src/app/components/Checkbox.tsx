import Image from "next/image";

interface CheckboxProps {
  label: string;
  checked: boolean;
  onChange: (checked: boolean) => void;
}

export default function Checkbox({ label, checked, onChange }: CheckboxProps) {
  return (
    <div className="my-4 font-jetbrains">
      <label className="flex items-center cursor-pointer">
        <div
          className={`relative flex items-center justify-center w-5 h-5 border-2 
            ${checked ? "bg-[#A4FFAF] border-[#A4FFAF]" : "border-white"}`}
        >
          {checked && (
            <Image
              src="/images/icon-check.svg"
              alt="Checked"
              width={12}
              height={12}
              className="absolute w-3 h-3"
            />
          )}
          <input
            type="checkbox"
            checked={checked}
            onChange={(e) => onChange(e.target.checked)}
            className="appearance-none w-full h-full absolute opacity-0 cursor-pointer"
          />
        </div>
        <span className="ml-2">{label}</span>
      </label>
    </div>
  );
}
