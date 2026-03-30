import { motion } from "framer-motion";
import { Mail } from "lucide-react";

function NavBar() {
    const navLinks = ["ABOUT", "LEADERS", "ROLES"];

    return (
        <nav className="relative z-20 flex">
            <div className="flex items-center gap-4">
                <div className=" h-10">
                    <div className="h-5">

                    </div>

                    {/* for logo */}
                    {/* <span className="text-[10px]">
                        Software
                    </span> */}
                </div>

                <ul className="hidden md:flex gap-10">
                    {navLinks.map((link) => (
                        <li key={link}>
                        <a href={`#${link.toLowerCase()}`} className="text-[9px] tracking-[0.2em] transition-colors">
                            {link}
                        </a>
                        </li>
                    ))}
                </ul>
            </div>
        </nav>
    )
}

export default NavBar