"use client";

import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarTrigger,
  useSidebar,
} from "../ui/sidebar";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Settings, Info, Shield, Share2, LogOut } from "lucide-react";
import Image from "next/image";

// Sidebar Items
const items = [
  { title: "Settings", url: "/settings", icon: Settings },
  { title: "About Us", url: "/about", icon: Info },
  { title: "Privacy Policy", url: "/privacy", icon: Shield },
  { title: "Share", url: "/share", icon: Share2 },
];

export default function AppSideBar() {
  const { toggleSidebar } = useSidebar();
  const pathname = usePathname();

  return (
    <Sidebar collapsible="icon" className="print:hidden h-full hide-scrollbar">
      {/* Profile Header */}
      <SidebarHeader className="w-full bg-gradient-to-r from-indigo-800 to-purple-700 text-white p-4">
        <div className="flex items-center gap-3">
          <Image
            src="/LogoWhite.png" // replace with dynamic user image
            alt="Profile"
            width={60}
            height={60}
            className="rounded-full border-2 border-white"
          />
          <div>
            <h3 className="text-lg font-semibold">John Doe</h3>
            <p className="text-sm text-gray-200">302, Wing A, Jackson Height</p>
            <Link
              href="/my-profile"
              className="text-yellow-400 underline text-sm hover:text-yellow-300"
            >
              View Profile
            </Link>
          </div>
        </div>
      </SidebarHeader>

      {/* Menu Section */}
      <SidebarContent className="space-y-2">
        <SidebarGroup>
          <SidebarGroupContent>
            <SidebarMenu>
              {items.map((item) => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton asChild>
                    <Link
                      href={item.url}
                      onClick={() =>
                        window.innerWidth < 1024 && toggleSidebar()
                      }
                      className={`flex items-center gap-4 px-3 py-2 rounded-md transition-colors duration-200 
                        ${
                          pathname === item.url
                            ? "bg-gray-100  font-medium"
                            : "hover:bg-gray-100 "
                        }`}
                    >
                      <item.icon className="h-10 w-10 text-lg text-gray-400" />
                      <span className="text-black text-lg">{item.title}</span>
                    </Link>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>

        {/* Log out */}
        <div className="mt-auto border-t p-3">
          <Link
            href="/logout"
            className="flex items-center gap-2 text-red-500 hover:text-red-600"
          >
            <LogOut className="h-5 w-5" />
            <span>Log out</span>
          </Link>
        </div>
      </SidebarContent>
    </Sidebar>
  );
}
