"use client";

import Image from "next/image";
import { useState } from "react";

interface PasswordDisplayProps {
  password: string;
}

export default function PasswordDisplay({ password }: PasswordDisplayProps) {
  const [copied, setCopied] = useState(false);
  const [isHovering, setIsHovering] = useState(false);

  const copyToClipboard = () => {
    navigator.clipboard.writeText(password);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="bg-[#24232C] mb-6 pl-2 h-16 relative flex items-center">
      <input
        type="text"
        placeholder="P4$5W0rD!"
        value={password}
        readOnly
        className="w-full bg-[#24232C] p-2 rounded font-jetbrains"
      />
      {copied && (
        <span className="uppercase text-[#A4FFAF] mr-10">copied!</span>
      )}
      <button
        onClick={copyToClipboard}
        onMouseEnter={() => setIsHovering(true)}
        onMouseLeave={() => setIsHovering(false)}
        className="absolute p-1 right-2 text-[#A4FFAF] hover:text-[#E5E5EA]"
      >
        <Image
          src={
            isHovering ? "/images/icon-copy-white.svg" : "/images/icon-copy.svg"
          }
          alt="copy symbol"
          className=" w-[17px] h-5 md:w-5 md:h-6"
          width={17}
          height={20}
        />
      </button>
    </div>
  );
}
