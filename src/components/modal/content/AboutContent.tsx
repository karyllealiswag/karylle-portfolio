import { portfolio } from "@/data/portfolio";
import { Button, Cutout, GroupBox, Divider } from "react95";
import Image from "next/image";

export default function AboutContent() {
  return (
    <Cutout className="bg-[#c6c6c6] w-full h-full p-1">
      <div className="border-2 border-white border-b-gray-800 border-r-gray-800 p-4 sm:p-6 flex flex-col h-full bg-[#c6c6c6]">
        
        {/* Header: Classic Win95 System Dialog Style */}
        <div className="flex flex-col items-center gap-6 text-center sm:flex-row-reverse sm:items-start sm:text-left mb-2 sm:justify-between">
          
          {/* Inset Cutout around the image */}
          <Cutout className="shrink-0 inline-block bg-white p-1">
            <Image
              src="/pfp.jpg"
              alt={`${portfolio.name}'s Profile`}
              width={140}
              height={140}
              className="h-auto w-32 object-cover [image-rendering:pixelated] sm:w-36 border border-gray-400"
              priority
            />
          </Cutout>

          <div className="flex-1 w-full text-left font-sans">
            <div className="mb-4">
              <p className="text-sm text-black">System:</p>
              <p className="text-[#000080] text-lg font-bold leading-tight">
                Portfolio OS
              </p>
              <p className="text-[#000080] text-sm font-bold">
                Version 1.0
              </p>
            </div>

            {/* Classic "Registered To" block */}
            <div className="text-sm text-black space-y-1">
              <p>Registered to:</p>
              <p className="pl-4">{portfolio.name}</p>
              <p className="pl-4">B.S. Computer Science</p>
            </div>
          </div>
        </div>

        <Divider className="my-4" />

        {/* Content: GroupBox creates the native tabbed-window feel */}
        <GroupBox label="Biography" className="flex-1 text-black bg-[#c6c6c6]">
          <div className="mt-2 space-y-3 text-sm leading-relaxed p-2 overflow-y-auto max-h-[35vh]">
            {portfolio.about.paragraphs.map((paragraph) => (
              <p key={paragraph.slice(0, 24)}>{paragraph}</p>
            ))}
          </div>
        </GroupBox>

        {/* Action Row */}
        <div className="pt-6 flex justify-end mt-auto">
          <Button className="font-bold cursor-pointer px-6 min-w-[120px]">
            View Resume
          </Button>
        </div>
      </div>
    </Cutout>
  );
}