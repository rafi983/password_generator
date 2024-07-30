"use client";
import { useEffect, useState } from "react";
import Checkbox from "./Checkbox";
import GenerateButton from "./GenerateButton";
import LengthSlider from "./LengthSlider";
import PasswordDisplay from "./PasswordDisplay";
import StrengthIndicator from "./StrengthIndicator";

export default function PasswordGenerator() {
  const [password, setPassword] = useState("");
  const [length, setLength] = useState(10);
  const [includeUppercase, setIncludeUppercase] = useState(true);
  const [includeLowercase, setIncludeLowercase] = useState(true);
  const [includeNumbers, setIncludeNumbers] = useState(true);
  const [includeSymbols, setIncludeSymbols] = useState(false);
  const [strength, setStrength] = useState<
    "TOO WEAK!" | "WEAK" | "MEDIUM" | "STRONG"
  >("TOO WEAK!");

  const generatePassword = () => {
    let charset = "";
    if (includeUppercase) charset += "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    if (includeLowercase) charset += "abcdefghijklmnopqrstuvwxyz";
    if (includeNumbers) charset += "0123456789";
    if (includeSymbols) charset += "!@#$%^&*()_+{}[]|:;<>,.?/~";

    let newPassword = "";
    for (let i = 0; i < length; i++) {
      newPassword += charset.charAt(Math.floor(Math.random() * charset.length));
    }
    setPassword(newPassword);
  };

  const getPasswordStrength = ():
    | "TOO WEAK!"
    | "WEAK"
    | "MEDIUM"
    | "STRONG" => {
    let score = 0;
    if (length >= 8) score += 2;
    if (length >= 12) score += 2;
    if (includeUppercase) score++;
    if (includeLowercase) score++;
    if (includeNumbers) score++;
    if (includeSymbols) score++;

    if (score <= 3) return "TOO WEAK!";
    if (score <= 4) return "WEAK";
    if (score <= 6) return "MEDIUM";
    return "STRONG";
  };

  useEffect(() => {
    setStrength(getPasswordStrength());
  }, [
    length,
    includeUppercase,
    includeLowercase,
    includeNumbers,
    includeSymbols,
  ]);

  return (
    <div className="text-white p-6 rounded-lg max-w-md mx-auto">
      <PasswordDisplay password={password} />

      <div className="bg-[#24232C] p-4">
        <div className="mb-8">
          <LengthSlider length={length} setLength={setLength} />
        </div>
        <Checkbox
          label="Include Uppercase Letters"
          checked={includeUppercase}
          onChange={setIncludeUppercase}
        />
        <Checkbox
          label="Include Lowercase Letters"
          checked={includeLowercase}
          onChange={setIncludeLowercase}
        />
        <Checkbox
          label="Include Numbers"
          checked={includeNumbers}
          onChange={setIncludeNumbers}
        />
        <Checkbox
          label="Include Symbols"
          checked={includeSymbols}
          onChange={setIncludeSymbols}
        />
        <StrengthIndicator strength={strength} />
        <GenerateButton onClick={generatePassword} />
      </div>
    </div>
  );
}
