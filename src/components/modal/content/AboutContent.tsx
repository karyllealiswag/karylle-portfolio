import { portfolio } from "@/data/portfolio";
import { Button, Cutout } from "react95";
import Image from "next/image";

export default function AboutContent() {
  return (
    <Cutout className="bg-white w-full h-full">
      {/* 
        The grid strictly divides the wide window into two columns. 
        1.5fr for text (left), 1fr for the image (right). 
      */}
      <div className="grid grid-cols-1 sm:grid-cols-[1.5fr_1fr] gap-6 sm:gap-10 p-6 sm:p-8">
        
        {/* Left Column: Heavy Header & Compact Text */}
        <div className="flex flex-col gap-5">
          <h1 
            className="text-black drop-shadow-sm"
            style={{ 
              fontSize: "clamp(2.5rem, 5vw, 3.5rem)", // Forces the text to be massive and scale with the window
              lineHeight: "1", 
              fontWeight: "900",
              letterSpacing: "-0.05em"
            }}
          >
            Welcome to<br />
            {portfolio.name}!
          </h1>
          
          <div className="space-y-4 text-sm leading-snug text-black">
            {portfolio.about.paragraphs.map((paragraph) => (
              <p key={paragraph.slice(0, 24)}>{paragraph}</p>
            ))}
          </div>

          <div className="pt-2">
            <Button className="font-bold cursor-pointer px-4">
              View Resume
            </Button>
          </div>
        </div>

        {/* Right Column: Anchored Image */}
        <div className="flex justify-center items-start pt-2">
          <Image 
            src="/pfp.jpg" 
            alt={`${portfolio.name}'s Profile`} 
            width={280} 
            height={280} 
            className="w-full max-w-[240px] h-auto object-contain"
            style={{ imageRendering: "pixelated" }}
            priority
          />
        </div>
        
      </div>
    </Cutout>
  );
}