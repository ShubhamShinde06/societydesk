"use client";
import { useEffect, useState } from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";

export default function Home() {
  const [step, setStep] = useState(1);
  const [onboardingPage, setOnboardingPage] = useState(0);
  const [showContent, setShowContent] = useState(false);
  const router = useRouter();

  useEffect(() => {
    // Step 1 → Step 2 after 2s

    if (step === 1) {
      let timer, t1;

      timer = setTimeout(() => {
        setShowContent(true);
        t1 = setTimeout(() => setStep(2), 1000);
      }, 1000);

      return () => {
        clearTimeout(timer);
        clearTimeout(t1);
      };
    }

    // Step 2 → Step 3 after 2s
    if (step === 2) {
      const t2 = setTimeout(() => setStep(3), 2000);
      return () => clearTimeout(t2);
    }
  }, [step]);

  // ==========================
  // STEP 1: Splash
  // ==========================
  if (step === 1) {
    return (
      <div className="w-full h-screen bg-[#87A6FC] flex flex-col items-center justify-center overflow-hidden pt-20">
        {/* Logo + Content */}
        <div
          className={`h-full flex flex-col items-center justify-between space-y-4 transition-opacity duration-1000 ${
            showContent ? "opacity-100" : "opacity-0"
          }`}
        >
          <div className="flex flex-col items-center justify-center gap-1">
            {/* Logo */}
            <Image
              src={"/LogoWhite.png"}
              alt="SocietyDesk Logo"
              width={120}
              height={120}
              priority
            />
            <div className=" text-center">
              <h1 className="heading font-medium text-2xl uppercase text-white">
                SocietyDesk
              </h1>
              <p className="text-xs">Develop By DevSyntra</p>
            </div>
          </div>

          {/* Full width loading image */}
          <div className="w-full">
            <Image
              src={"/LoadingScreen.png"}
              alt="Loading screen"
              width={1920}
              height={1080}
              className="w-full h-auto"
              priority
            />
          </div>
        </div>
      </div>
    );
  }

  // ==========================
  // STEP 2: Multi-Step Onboarding
  // ==========================
  const onboardingScreens = [
    {
      img: "/onboarding-family.png",
      title: "Improve your family safety",
      desc: "Keep your society safe and secure with modern tools.",
    },
    {
      img: "/onboarding-communication.png",
      title: "Better Communication",
      desc: "Stay updated with announcements and events instantly.",
    },
    {
      img: "/onboarding-management.png",
      title: "Smart Management",
      desc: "Handle payments, complaints, and more from your app.",
    },
  ];

  const current = onboardingScreens[onboardingPage];

  return (
    <div
      className="w-full h-screen flex flex-col justify-between items-center bg-[#F8F7FE] bg-center bg-no-repeat bg-cover"
     // style={{ backgroundImage: "url('/BgImg.png')" }}
    >
      <div className="w-full flex justify-end p-3">
        <button
            className="text-gray-500 text-sm"
            onClick={() => router.push("/auth")}
          >
            Skip
          </button>
      </div>
      {/* Illustration */}
      <div className="w-60 h-60 flex items-center justify-center rounded-full overflow-hidde shadow-2x mt-20">
        <Image
          src={current.img}
          alt={current.title}
          width={300}
          height={300}
          className="object-cover w-full h-full"
          priority
        />
      </div>

      {/* Content Box */}
      <div className="w-full bg-white shadow-2xl p-6 text-center rounded-tl-3xl rounded-tr-3xl">
        {/* Dots */}
        <div className="flex justify-center mb-3 space-x-2">
          {onboardingScreens.map((_, i) => (
            <span
              key={i}
              onClick={() => setOnboardingPage(i)}
              className={`w-2 h-2 rounded-full ${
                i === onboardingPage ? "bg-yellow-500" : "bg-gray-300"
              }`}
            ></span>
          ))}
        </div>

        <h2 className="text-lg text-gray-500 font-semibold">{current.title}</h2>
        <p className="text-sm text-gray-500 mt-2">{current.desc}</p>

        <div className="flex justify-between items-center mt-4">
          <button
            className="btn-orange"
            onClick={() => {
              if (onboardingPage < onboardingScreens.length - 1) {
                setOnboardingPage(onboardingPage + 1);
              } else {
                router.push("/auth");
              }
            }}
          >
            {onboardingPage < onboardingScreens.length - 1
              ? "Next"
              : "Get Started"}
          </button>
        </div>
      </div>
    </div>
  );
}
