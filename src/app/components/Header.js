import React from 'react'
import Link from 'next/link';
import "../style.css"

const Header = () => {
    return (
        <div>
            <header className="header h-14 flex items-center">
                <Link className="flex items-center justify-center" href="#">
                    <MountainIcon className="h-6 w-6" />
                    <span className="sr-only">Acme Inc</span>
                </Link>
                <nav className="ml-auto flex gap-4 sm:gap-6">
                    <Link className="text-sm font-medium hover:underline underline-offset-4" href="/create">
                        Features
                    </Link>
                    <Link className="text-sm font-medium hover:underline underline-offset-4" href="/create">
                        Pricing
                    </Link>
                    <Link className="text-sm font-medium hover:underline underline-offset-4" href="/create">
                        About
                    </Link>
                    <Link className="text-sm font-medium hover:underline underline-offset-4" href="/create">
                        Contact
                    </Link>
                </nav>
            </header>
        </div>
    )
}

export default Header;

function MountainIcon(props) {
    return (
        <svg
            {...props}
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
        >
            <path d="m8 3 4 8 5-5 5 15H2L8 3z" />
        </svg>
    )
}
