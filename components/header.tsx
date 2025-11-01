// Header.tsx
import { Menu } from "lucide-react";
import Image from "next/image";

export default function Header() {
    return (
        <header className="flex items-center justify-between px-8 py-4 bg-neutral-900 text-white shadow-lg">
            <div className="flex items-center space-x-3">
                <Image
                    src="/logo.png"
                    alt="Motion Resident Community Logo"
                    width={80}
                    height={80}
                    className="w-20 h-20"
                />
                <h1 className="text-2xl font-semibold tracking-tight" style={{ paddingLeft: '10px' }}>Motion Resident Community</h1>
            </div>

            <nav className="hidden md:flex space-x-8 text-sm uppercase tracking-wide text-gray-300">
                <a href="/home" className="hover:text-white transition">Home</a>
                <a href="/events" className="hover:text-white transition">Events</a>
                <a href="/artists" className="hover:text-white transition">Artists</a>
                <a href="/contact" className="hover:text-white transition">Contact</a>
            </nav>

            <button className="md:hidden">
                <Menu size={24} />
            </button>
        </header>
    );
}
