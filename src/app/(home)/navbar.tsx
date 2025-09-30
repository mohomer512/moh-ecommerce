"use client";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { Poppins } from "next/font/google";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Sidebar } from "./navbar-sdiebar";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["700"],
});

interface NavbarItemProps {
  href: string;
  children: React.ReactNode;
  isActive?: boolean;
}

const NavbarItem = ({ href, children, isActive }: NavbarItemProps) => {
  return (
    <Button
      asChild
      variant="outline"
      className={cn(
        "bg-transparent hover:bg-blue-800 rounded-full hover:border-primary border-transparent px-3.5 text-lg",
        isActive && "bg-white text-black hover:bg-white hover:text-black"
      )}
    >
      <Link href={href}>{children}</Link>
    </Button>
  );
};

const navbarItems = [
  { href: "/", children: "Home" },
  { href: "/about", children: "About" },
  { href: "/features", children: "Features" },
  { href: "/pricing", children: "Pricing" },
  { href: "/contact", children: "Contact" },
];

export const Navbar = () => {
  const pathname = usePathname();

  return (


    <nav className="h-20 flex border-b justify-between items-center px-6 font-medium bg-black text-white">
      {/* Logo */}
           <div className="lg:hidden">
        <Sidebar />
</div>
      <Link href="/" className="flex items-center">
        <span className={cn("text-3xl font-semibold", poppins.className)}>
          funroad
        </span>
      </Link>
 

      {/* Navigation Items */}
      <div className="flex gap-4">
        {navbarItems.map((item) => (
          <NavbarItem
            key={item.href}
            href={item.href}
            isActive={pathname === item.href}
          >
            {item.children}
          </NavbarItem>
        ))}
      </div>
        <div className="hidden lg:flex">
            
        <Button variant="secondary" className="border-l border-t-0 border-b-0 border-r-0 px-12 h-full rounded-none bg-white hover:bg-pink-400 transition-colors text-lg">
            <Link href="/sign-in">
            Login
        </Link>
        </Button>
        <Button className="border-l border-t-0 border-b-0 border-r-0 px-12 h-full rounded-none bg-black text-white hover:bg-pink-400 hover:text-black transition-colors text-lg">
            <Link href="/sign-up">

            Star selling
            </Link>
            </Button>

        </div>

    </nav>
  );
};