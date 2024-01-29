import Image from 'next/image';
import React from 'react';
import { Socials } from '../../constants/index';

const Navbar = () => {
    return (
        <div className="w-full h-[65px] fixed top-0 shadow-lg shadow-[#2A0E61]/50 bg-[#03001417] backdrop-blur-md z-50 px-[5px] md:px-10">
            <div className="w-full h-full flex flex-row items-center justify-between m-auto px-[10px]">
                <a href="#about-me" className="h-auto w-auto flex flex-row items-center">
                    <Image
                        src="/NavLogo.png"
                        priority
                        alt="logo"
                        width={70}
                        height={70}
                        className="cursor-pointer hover:animate-spin"
                    />

                    <span className="font-bold ml-[10px] mr-[10px] hidden text-center md:block text-gray-300">
                        Mikhail Dev
                    </span>
                </a>

                <div className="w-[500px] h-full hidden flex-row items-center justify-between lg:mr-20 lg:flex">
                    <div className="flex items-center justify-between w-full h-auto border border-[#7042f861] bg-[#0300145e] mr-[15px] px-[20px] py-[10px] rounded-full text-gray-200">
                        <a href="#about-me" className="cursor-pointer">
                            About me
                        </a>
                        <a href="#skills" className="cursor-pointer">
                            Skills
                        </a>
                        <a href="#projects" className="cursor-pointer">
                            Projects
                        </a>
                    </div>
                </div>
                <div className="flex flex-row gap-5">
                    {Socials.map((social) => (
                        <a href={social.url} target="_blank" rel="noreferrer noopener">
                            <Image
                                className="cursor-pointer"
                                src={social.src}
                                alt={social.name}
                                key={social.name}
                                width={24}
                                height={24}
                            />
                        </a>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Navbar;
