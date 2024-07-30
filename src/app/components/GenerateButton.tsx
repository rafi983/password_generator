interface GenerateButtonProps {
  onClick: () => void;
}

export default function GenerateButton({ onClick }: GenerateButtonProps) {
  return (
    <button
      onClick={onClick}
      className="bg-[#A4FFAF] text-black hover:text-[#A4FFAF] p-2 rounded w-full hover:bg-transparent border-2 border-[#A4FFAF] transition-colors flex flex-row items-center justify-center font-jetbrains uppercase"
    >
      Generate
      <svg
        width="12"
        height="12"
        xmlns="http://www.w3.org/2000/svg"
        className="ml-2 transition-colors group-hover:fill-[#A4FFAF]"
      >
        <path
          d="m5.106 12 6-6-6-6-1.265 1.265 3.841 3.84H.001v1.79h7.681l-3.841 3.84z"
          className="fill-current"
        />
      </svg>
    </button>
  );
}
