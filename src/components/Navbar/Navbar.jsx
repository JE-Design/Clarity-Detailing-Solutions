import React from "react";
import "./Navbar.scss";

const Navbar = () => {
    return (
        <header class="fixed flex flex-col w-full">
            <nav class="relative flex w-full p-3">
                <div class="w-9/12"></div>
                <div class="justify-end">
                    <a href="/services" class="p-3">
                        Services
                    </a>
                    <a href="/testimonials" class="p-3">
                        Testimonials
                    </a>
                    <a href="/contact" class="p-3">
                        Contact
                    </a>
                </div>
            </nav>
        </header>
    );
};

export default Navbar;
