import { useState, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { Menu, X, Download } from "lucide-react";
import { Button } from "@/components/ui/button";

const navItems = [
  { label: "Home", id: "home" },
  { label: "Showreel", id: "showreel" },
  { label: "Work", id: "portfolio" },
  { label: "About", id: "about" },
  { label: "What I Do", id: "what-i-do" },
  { label: "Experience", id: "experience" },
  { label: "Contact", id: "contact" },
];

export const Navigation = () => {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 30);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const go = (id: string) => {
    setOpen(false);
    if (location.pathname !== "/") {
      navigate(`/#${id}`);
      return;
    }
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <>
      <nav
        className={`fixed top-0 inset-x-0 z-50 transition-all duration-500 ${
          scrolled
            ? "bg-background/80 backdrop-blur-xl border-b border-border"
            : "bg-transparent"
        }`}
      >
        <div className="container-narrow px-6 md:px-10 lg:px-16 xl:px-20">
          <div className="h-16 flex items-center justify-between">
            <button
              onClick={() => go("home")}
              className="font-heading font-bold text-lg tracking-tight"
            >
              Anil<span className="text-primary">.</span>
            </button>

            <div className="hidden lg:flex items-center gap-8">
              {navItems.map((it) => (
                <button
                  key={it.id}
                  onClick={() => go(it.id)}
                  className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                >
                  {it.label}
                </button>
              ))}
            </div>

            <div className="hidden lg:block">
              <Button
                asChild
                className="rounded-full h-10 px-5 bg-primary hover:bg-primary/90 text-primary-foreground text-sm"
              >
                <a
                  href="https://drive.google.com/file/d/17sJeawuPrk2VkPNe604u5E0Gc6Pn_rCI/view?usp=sharing"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Download className="w-4 h-4 mr-2" />
                  Resume
                </a>
              </Button>
            </div>

            <button
              onClick={() => setOpen(!open)}
              className="lg:hidden p-2 rounded-lg border border-border"
              aria-label="Toggle menu"
            >
              {open ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile menu */}
      <div
        className={`fixed inset-0 z-40 lg:hidden transition-opacity duration-300 ${
          open ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        }`}
      >
        <div className="absolute inset-0 bg-background/95 backdrop-blur-xl" onClick={() => setOpen(false)} />
        <div className="relative h-full flex flex-col items-center justify-center gap-7">
          {navItems.map((it) => (
            <button
              key={it.id}
              onClick={() => go(it.id)}
              className="text-2xl font-heading font-medium text-foreground hover:text-primary transition-colors"
            >
              {it.label}
            </button>
          ))}
          <a
            href="https://drive.google.com/file/d/17sJeawuPrk2VkPNe604u5E0Gc6Pn_rCI/view?usp=sharing"
            target="_blank"
            rel="noopener noreferrer"
            className="mt-4 inline-flex items-center gap-2 bg-primary text-primary-foreground rounded-full px-6 h-11 font-medium"
          >
            <Download className="w-4 h-4" /> Resume
          </a>
        </div>
      </div>
    </>
  );
};
