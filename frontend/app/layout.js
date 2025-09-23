import { ThemeProvider } from "@/provider/Themeprovider";
import "./globals.css";
import { Inter, Poppins } from "next/font/google";
import ClientLayout from "@/provider/ClientLayout";

// Load fonts
const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"], // normal + bold
  variable: "--font-poppins",
});

const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  variable: "--font-inter",
});

export const metadata = {
  title: "SocietyDesk",
  description: "Smart Society Management Web App",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="icon" href="/icon.ico" />
      </head>
      <body
        className={`${poppins.variable} ${inter.variable} `}
        suppressHydrationWarning
      >
        <ClientLayout>{children}</ClientLayout>

        {/* <Toaster position="top-center" /> */}
      </body>
    </html>
  );
}
