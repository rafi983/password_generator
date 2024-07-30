import React from "react";
import PasswordGenerator from "./components/PasswordGenerator";

export default function Home() {
  return (
    <main className="min-h-screen bg-[#18171F] flex items-center justify-center overflow-x-hidden">
      <div className="w-[340px] md:w-[540px]">
        <h2 className="text-center text-[#817d92]">Password Generator</h2>
        <PasswordGenerator />
      </div>
    </main>
  );
}
