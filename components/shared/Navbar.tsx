'use client';

import React from 'react';
import Link from './Link';

export default function Navbar(): React.ReactElement {
    const scrollToSection = (id: string) => {
        const element = document.getElementById(id);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
        }
    };

    return (
        <div className="navbar-root">
            <div className="navbar-right-container">
                {/* Smooth scroll using scrollIntoView */}
                <Link as="button" onClick={() => scrollToSection('about')} cssID="dark-link">
                    About
                </Link>
                <Link as="button" onClick={() => scrollToSection('more')} cssID="dark-link">
                    More
                </Link>

                {/* Regular navigation for external links */}
                <Link href="./" cssID="resume-link">
                    Resume
                </Link>
            </div>
        </div>
    );
}
