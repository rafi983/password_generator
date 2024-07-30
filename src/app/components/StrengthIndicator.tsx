interface StrengthIndicatorProps {
  strength: "TOO WEAK!" | "WEAK" | "MEDIUM" | "STRONG";
}

export default function StrengthIndicator({
  strength,
}: StrengthIndicatorProps) {
  const getStrengthColor = () => {
    switch (strength) {
      case "TOO WEAK!":
        return "bg-[#F64A4A]";
      case "WEAK":
        return "bg-[#FB7C58]";
      case "MEDIUM":
        return "bg-[#F8CD65]";
      case "STRONG":
        return "bg-[#A4FFAF]";
      default:
        return "bg-[#817D92]";
    }
  };

  const getStrengthBars = () => {
    switch (strength) {
      case "TOO WEAK!":
        return 1;
      case "WEAK":
        return 2;
      case "MEDIUM":
        return 3;
      case "STRONG":
        return 4;
      default:
        return 0;
    }
  };

  return (
    <div className="bg-[#18171F] p-4 flex items-center justify-between font-jetbrains my-6">
      <span className="text-gray-500 uppercase">Strength</span>
      <div className="flex items-center space-x-4">
        <span className="text-white uppercase font-bold">{strength}</span>
        <div className="flex space-x-1">
          {[...Array(4)].map((_, index) => (
            <div
              key={index}
              className={`w-2 h-6 border-2 ${
                index < getStrengthBars()
                  ? getStrengthColor()
                  : "border-white bg-transparent"
              }`}
            ></div>
          ))}
        </div>
      </div>
    </div>
  );
}
