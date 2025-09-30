"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react"; // أيقونات من lucide-react



interface SidebarItemProps {
  href: string;
  children: React.ReactNode;
  isActive?: boolean;
}

const SidebarItem = ({ href, children, isActive }: SidebarItemProps) => {
  return (
    <Button
      asChild
      variant="outline"
      className={cn(
        "w-full justify-start bg-transparent hover:bg-blue-800 rounded-md hover:border-primary border-transparent px-4 py-2 text-lg",
        isActive && "bg-white text-black hover:bg-white hover:text-black"
      )}
    >
      <Link href={href}>{children}</Link>
    </Button>
  );
};

const sidebarItems = [
  { href: "/", children: "Home" },
  { href: "/about", children: "About" },
  { href: "/features", children: "Features" },
  { href: "/pricing", children: "Pricing" },
  { href: "/contact", children: "Contact" },
];

export const Sidebar = () => {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      {/* زر القائمة العلوي (Burger Menu) */}
      <div className="p-4 bg-black text-white flex justify-between items-center lg:hidden">
        <button onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Sidebar للشاشات الكبيرة */}
      <aside className="hidden lg:flex w-64 min-h-screen border-r bg-black text-white flex-col font-medium p-4">
        {/* Sidebar Items */}
        <div className="flex flex-col gap-2">
          {sidebarItems.map((item) => (
            <SidebarItem
              key={item.href}
              href={item.href}
              isActive={pathname === item.href}
            >
              {item.children}
            </SidebarItem>
          ))}
        </div>
      </aside>

      {/* Sidebar للشاشات الصغيرة (Mobile Drawer) */}
      {isOpen && (
        <div className="fixed inset-0 bg-black/50 z-40 lg:hidden">
          <aside className="fixed top-0 left-0 w-64 min-h-screen bg-black text-white p-4 z-50">
            {/* زر الإغلاق فقط */}
            <div className="mb-8 flex justify-end">
              <button onClick={() => setIsOpen(false)}>
                <X size={28} />
              </button>
            </div>

            {/* Sidebar Items */}
            <div className="flex flex-col gap-2">
              {sidebarItems.map((item) => (
                <SidebarItem
                  key={item.href}
                  href={item.href}
                  isActive={pathname === item.href}
                >
                  {item.children}
                </SidebarItem>
              ))}
            </div>
          </aside>
        </div>
      )}
    </>
  );
};
