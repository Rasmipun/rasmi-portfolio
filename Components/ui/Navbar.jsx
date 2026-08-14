
import { Home, FolderKanban, Mail, User } from "lucide-react";


const navItems = [
  { name: "Home", href: "#", icon: Home },
  { name: "Projects", href: "#projects", icon: FolderKanban },
  { name: "About", href: "#about", icon: User },
  { name: "Contact", href: "#contact", icon: Mail },
];

const Navbar = () => {
    return (
        <div>
            <nav className="flex gap-5 p-5 ">
        {navItems.map((item) => {
          const Icon = item.icon;
          return (
            <a
            key={item.name}
            href={item.href}
           
            className="
            group
              relative          
              px-4 py-1.5
              text-md font-semibold
              text-white/70
              transition-colors
              duration-600
              hover:text-white
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

            {/**Mobile icon  */}
            <Icon size={20}
            className="block
            transition-colors
            duration-400
            group-hover:text-primary
            md:hidden"

             />

            {/* Desktop text */}
            <span className="hidden md:block">{item.name}</span>
            
          </a>
        );
    })}
      </nav>
    </div>
    )
}

export default Navbar;

