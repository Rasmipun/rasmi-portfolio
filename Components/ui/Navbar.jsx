"use client";

import { Home, FolderKanban, Mail, User } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";

const navItems = [
  { name: "Home", path: "/", icon: Home },
  { name: "Projects", path: "/projects", icon: FolderKanban },
  { name: "About", path: "/about", icon: User },
  { name: "Contact", path: "/contact", icon: Mail },
];

const Navbar = () => {
  const pathname = usePathname();

  return (
    <nav
      className="
        fixed
        z-50
        bottom-4
        left-1/2
        -translate-x-1/2
        flex
        gap-3
        rounded-full
        border
        border-white/20
        bg-white/10
        p-2
        backdrop-blur-xl
        shadow-lg

        md:top-0
        md:right-0
        md:bottom-auto
        md:left-0
        md:translate-x-0
        md:flex
        md:justify-center
        md:gap-5
        md:rounded-none
        md:border-0
        md:bg-white/10
        md:p-5
        md:backdrop-blur-xl
        md:shadow-lg
      "
    >
      {navItems.map((item) => {
        const Icon = item.icon;
        const isActive = item.path === pathname;

        return (
          <Link
            key={item.name}
            href={item.path}
            className={`
              group
              relative
              px-4
              py-1.5
              font-semibold
              transition-colors
              duration-700

              ${isActive ? "text-primary" : "text-white"}

              hover:text-primary

              after:absolute
              after:left-4
              after:bottom-0
              after:h-0.5
              after:bg-primary
              after:shadow-[0_0_8px_#39FF14]
              after:transition-all
              after:duration-700
              after:ease-in-out

              ${
                isActive
                  ? "after:w-[calc(100%-2rem)]"
                  : "after:w-0 hover:after:w-[calc(100%-2rem)]"
              }
            `}
          >
            {/* Mobile icon */}
            <Icon
              size={20}
              className={`
                block
                transition-colors
                duration-600
                md:hidden

                ${
                  isActive
                    ? "text-primary"
                    : "text-white group-hover:text-primary"
                }
              `}
            />

            {/* Desktop text */}
            <span className="hidden md:block">
              {item.name}
            </span>
          </Link>
        );
      })}
    </nav>
  );
};

export default Navbar;