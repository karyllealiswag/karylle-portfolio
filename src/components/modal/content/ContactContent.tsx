import { portfolio } from "@/data/portfolio";
import { Cutout, GroupBox, Button, Divider } from "react95";

export default function ContactContent() {
  const { contact } = portfolio;

  return (
    <Cutout className="bg-[#c6c6c6] w-full h-full p-1">
      <div className="border-2 border-white border-b-gray-800 border-r-gray-800 p-4 sm:p-6 flex flex-col h-full bg-[#c6c6c6]">
        
        {/* Header Section */}
        <div className="flex items-center gap-4 mb-2">
          {/* A classic visual placeholder for an icon */}
          <div className="w-10 h-10 bg-[#000080] flex items-center justify-center shrink-0 border-[inset] border-2 border-gray-400">
            <span className="text-white text-xl font-bold">@</span>
          </div>
          <div>
            <h1 className="font-display text-lg font-bold text-black">
              Communications
            </h1>
            <p className="text-sm text-gray-700 leading-tight">
              Network Identity & Contact Protocols
            </p>
          </div>
        </div>

        <Divider className="my-4" />

        {/* Form Area wrapping the fields */}
        <GroupBox label="Contact Details" className="flex-1 text-black bg-[#c6c6c6]">
          <div className="space-y-3 p-2 mt-2">
            
            {/* Email */}
            <div className="flex flex-col sm:flex-row sm:items-center gap-1 sm:gap-4">
              <span className="w-20 font-bold text-sm">E-mail:</span>
              <Cutout className="flex-1 bg-white p-1 px-2 text-sm border border-gray-400 flex items-center">
                <a 
                  href={`mailto:${contact.email}`} 
                  className="text-[#000080] hover:underline cursor-pointer truncate"
                >
                  {contact.email}
                </a>
              </Cutout>
            </div>

            {/* Phone */}
            <div className="flex flex-col sm:flex-row sm:items-center gap-1 sm:gap-4">
              <span className="w-20 font-bold text-sm">Telephone:</span>
              <Cutout className="flex-1 bg-white p-1 px-2 text-sm border border-gray-400 flex items-center">
                <a href={`tel:${contact.phone}`} className="text-black">
                  {contact.phone}
                </a>
              </Cutout>
            </div>

            {/* LinkedIn */}
            <div className="flex flex-col sm:flex-row sm:items-center gap-1 sm:gap-4">
              <span className="w-20 font-bold text-sm">LinkedIn:</span>
              <Cutout className="flex-1 bg-white p-1 px-2 text-sm border border-gray-400 flex items-center">
                <a 
                  href="https://www.linkedin.com/in/karylle-vinces-aliswag-5a3a02306/" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="text-[#000080] hover:underline cursor-pointer truncate"
                >
                  linkedin.com/in/karylle-vinces-aliswag
                </a>
              </Cutout>
            </div>

            {/* GitHub */}
            <div className="flex flex-col sm:flex-row sm:items-center gap-1 sm:gap-4">
              <span className="w-20 font-bold text-sm">GitHub:</span>
              <Cutout className="flex-1 bg-white p-1 px-2 text-sm border border-gray-400 flex items-center">
                <a 
                  href="https://github.com/karyllealiswag" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="text-[#000080] hover:underline cursor-pointer truncate"
                >
                  github.com/karyllealiswag
                </a>
              </Cutout>
            </div>

          </div>
        </GroupBox>

        {/* Action Row */}
        <div className="pt-6 flex justify-end mt-auto gap-3">
          {/* Using a mailto wrapper on the button allows it to act as a quick-action */}
          <a href={`mailto:${contact.email}`} tabIndex={-1}>
            <Button className="font-bold cursor-pointer px-6 min-w-[100px]">
              Send Mail
            </Button>
          </a>
        </div>
      </div>
    </Cutout>
  );
}