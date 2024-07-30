interface LengthSliderProps {
  length: number;
  setLength: (length: number) => void;
}

export default function LengthSlider({ length, setLength }: LengthSliderProps) {
  return (
    <div className="my-4 font-jetbrains">
      <div className="flex flex-row justify-between mb-2">
        <label className="flex mb-2">Character Length</label>
        <span className="text-[#A4FFAF]">{length}</span>
      </div>
      <input
        type="range"
        min="1"
        max="20"
        value={length}
        onChange={(e) => setLength(parseInt(e.target.value))}
        className="w-full accent-[#A4FFAF] outline-none"
      />
    </div>
  );
}
