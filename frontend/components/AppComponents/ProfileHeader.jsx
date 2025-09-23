import { ArrowLeft, Phone } from "lucide-react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import React from "react";
import { BiLogoGmail } from "react-icons/bi";
import { PiWhatsappLogo } from "react-icons/pi";

const ProfileHeader = ({heading="Committee"}) => {
    const router = useRouter()
  return (
   <>
         <div className="relative">
           <div className="h-32 w-full rounded-b-3xl bg-gradient-to-r from-purple-100 to-blue-100"></div>
           <div className="absolute top-4 left-4 flex items-center gap-3">
            <ArrowLeft onClick={()=>router.back()} className="h-5 w-5 cursor-pointer text-black" />
             <h1 className="text-lg font-semibold">{heading}</h1>
           </div>
           <div className="absolute left-1/2 -bottom-12 transform -translate-x-1/2">
             <div className="w-32 h-32 rounded-full overflow-hidden border-4 border-white shadow-md">
               <Image
                 src="/profile.jpg"
                 alt="Profile"
                 width={128}
                 height={128}
                 className="object-cover w-full h-full"
               />
             </div>
           </div>
         </div>
   
         {/* Main Profile */}
         <div className="pt-15 flex flex-col items-center">
           <h2 className="text-xl font-semibold">Mason Caldwell</h2>
           <p className="text-sm text-[#FFA800] font-medium">President</p>
   
           {/* Contact Buttons */}
           <div className="flex gap-6 mt-4">
             <button className="w-20 h-12 flex items-center justify-center rounded-md border">
               <BiLogoGmail className="text-red-500" size={28} />
             </button>
             <button className="w-20 h-12 flex items-center justify-center rounded-md border">
               <PiWhatsappLogo className="text-green-500"  size={28} />
             </button>
             <button className="w-20 h-12 flex items-center justify-center rounded-md border">
               <Phone className="text-blue-500" size={28} />
             </button>
           </div>
         </div>
         </>
  );
};

export default ProfileHeader;
