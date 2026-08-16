import { Home, FolderKanban, Mail, User } from "lucide-react";

const navItems = [
  { name: "Home", href: "#", icon: Home },
  { name: "Projects", href: "#projects", icon: FolderKanban },
  { name: "About", href: "#about", icon: User },
  { name: "Contact", href: "#contact", icon: Mail },
];

const Navbar = () => {
  return (
    <nav
      className="
        fixed
        z-50

        /* Mobile */
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

        /* Desktop */
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

        return (
          <a
            key={item.name}
            href={item.href}
            className="
              group
              relative
              rounded-full
              px-4
              py-1.5
              text-md
              font-semibold
              text-white/70
              transition-colors
              duration-300
              hover:text-primary

              after:absolute
              after:left-4
              after:bottom-0
              after:h-0.5
              after:w-0
              after:bg-primary
              after:shadow-[0_0_8px_#39FF14]
              after:transition-all
              after:duration-300
              hover:after:w-[calc(100%-2rem)]
            "
          >
            {/* Mobile icon */}
            <Icon
              size={20}
              className="
                block
                text-white/70
                transition-colors
                duration-300
                group-hover:text-primary
                md:hidden
              "
            />

            {/* Desktop text */}
            <span className="hidden md:block">
              {item.name}
            </span>
          </a>
        );
      })}
    </nav>
  );
};

export default Navbar;