import { Home, FolderKanban, Mail, User } from "lucide-react";

const navItems = [
  { name: "Home", href: "#", icon: Home },
  { name: "Projects", href: "#projects", icon: FolderKanban },
  { name: "About", href: "#about", icon: User },
  { name: "Contact", href: "#contact", icon: Mail },
];

const Navbar = () => {
  return (
    <div className="z-50
        fixed bottom-0 left-0 right-0
        flex justify-center backdrop-blur-2xl
      bg-white/15 
        md:bottom-auto
        md:fixed ">
          <nav
      className="
        fixed
        bottom-4
        left-1/2
        z-50
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

        md:static
        md:translate-x-0
        md:flex
        md:gap-5
        md:rounded-none
        md:border-0
        md:bg-transparent
        md:p-5
        md:backdrop-blur-none
        md:shadow-none
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
              duration-600
              hover:text-primary

              after:absolute
              after:left-4
              after:bottom-0
              after:h-0.5
              after:w-0
              after:bg-primary
              after:shadow-[0_0_8px_#39FF14]
              after:transition-all
              after:duration-600
              hover:after:w-[calc(100%-2rem)]

              md:px-4
              md:py-1.5
            "
          >
            {/* Mobile icon */}
            <Icon
              size={20}
              className="
                block
                text-white/70
                transition-colors
                
                hover:duration-500
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

    </div>
    
  );
};

export default Navbar;