const navItems = [
  { name: "Home", href: "#" },
  { name: "Projects", href: "#projects" },
  { name: "About", href: "#about" },
  { name: "Contact", href: "#contact" },
];

const HeaderSection = () => {
  return (
    <div className="relative top-3 flex items-center justify-center">
      <nav className="flex gap-1 rounded-full border border-white/15 bg-white/10 p-0.5 backdrop-blur">
        {navItems.map((item) => (
          <a
            key={item.name}
            href={item.href}
            className="
              relative
              rounded-full
              px-4 py-1.5
              text-sm font-semibold
              text-white/70
              transition-colors
              duration-600
              hover:text-white

              after:absolute
              after:left-4
              after:bottom-0
              after:h-[2px]
              after:w-0
              after:bg-[#39FF14]
              after:shadow-[0_0_8px_#39FF14]
              after:transition-all
              after:duration-600

              hover:after:w-[calc(100%-2rem)]
            "
          >
            {item.name}
          </a>
        ))}
      </nav>
    </div>
  );
};

export { HeaderSection };