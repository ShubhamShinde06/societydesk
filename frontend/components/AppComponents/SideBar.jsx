"use client";

import { Home, PackageSearch, Users} from "lucide-react";
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

//  Sidebar Items
const items = [
  { title: "Dashboard", url: "/dashboard", icon: Home },
  { title: "Customers / Vendors", url: "/account", icon: Users },
  { title: "Items", url: "/item", icon: PackageSearch },
];

//  Component
export default function AppSideBar() {
  const { toggleSidebar } = useSidebar();
  const pathname = usePathname();

  return (
    <Sidebar collapsible="icon" className="print:hidden h-full hide-scrollbar">
      <SidebarHeader>
        <SidebarMenu>
          <SidebarMenuItem className="flex items-center">
            <SidebarTrigger className="cursor-pointer hidden lg:flex" />
            <SidebarMenuButton asChild>
              <Link href="/" className="w-full">
                <div className="relative text-3xl logo mt-[-5px] ">Imitech</div>
              </Link>
            </SidebarMenuButton>
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarHeader>

      <SidebarContent className="space-y-2">
        {/* Static Top Menu */}
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
                      className={`flex items-center gap-2 px-3 py-2 rounded-md transition-colors duration-200 
                        ${
                          pathname === item.url
                            ? "bg-blue-600 text-white dark:bg-[#262626]"
                            : "hover:bg-gray-200 dark:hover:bg-[#1e1e1e]"
                        }`}
                    >
                      <item.icon />
                      <span className="lg:inline">{item.title}</span>
                    </Link>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
    </Sidebar>
  );
}
