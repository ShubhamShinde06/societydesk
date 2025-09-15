import Image from "next/image";

export default function AuthRootLayout({ children }) {
  return (
    <div className="w-full h-screen flex flex-col justify-between items-center bg-gradient-to-b from-[#F8F7FE] to-[#EDEBFA] relative">
      {/* Top Section */}
      <div className="flex flex-col items-center justify-center gap-2 mt-5">
        {/* Logo */}
        <div className="bg-white shadow-lg rounded-2xl p-4">
          <Image
            src={"/LogoColor.png"}
            alt="SocietyDesk Logo"
            width={100}
            height={100}
            priority
          />
        </div>
        <div className="text-center mt-3">
          <h1 className="font-semibold text-3xl tracking-wide text-black">
            SocietyDesk
          </h1>
          <p className="text-sm text-gray-400">
            Developed by <span className="font-medium">DevSyntra</span>
          </p>
        </div>
      </div>

      {/* Action Section */}
      {children}
    </div>
  );
}
