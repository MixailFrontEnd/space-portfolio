import React from 'react';
import {
    RxDiscordLogo,
    RxGithubLogo,
    RxInstagramLogo,
    RxTwitterLogo,
    RxLinkedinLogo,
} from 'react-icons/rx';

import { FaYoutube } from 'react-icons/fa';

const Footer = () => {
    return (
        <div className="w-full h-full bg-transparent text-gray-200 shadow-lg p-[15px]">
            <div className="w-full flex flex-col items-center justify-center m-auto">
                <div className="w-full h-full flex flex-row items-center justify-around flex-wrap  mb-8 z-20">
                    <ul className="min-w-[200px] h-auto flex flex-col items-center justify-start">
                        <li className="font-bold text-[16px]">Community</li>
                        {/* <li className="flex flex-row items-center my-[15px] cursor-pointer">
                            <FaYoutube />
                            <span className="text-[15px] ml-[6px]">YouTube</span>
                        </li> */}
                        <li className="flex flex-row items-center my-[15px] cursor-pointer">
                            <RxGithubLogo />
                            <a
                                href="https://github.com/MixailFrontEnd"
                                target="_blank"
                                rel="noopener noreferrer">
                                <span className="text-[15px] ml-[6px]">GitHub</span>
                            </a>
                        </li>
                        {/* <li className="flex flex-row items-center my-[15px] cursor-pointer">
                            <RxDiscordLogo />
                            <span className="text-[15px] ml-[6px]">Discord</span>
                        </li> */}
                    </ul>
                    {/* <ul className="min-w-[200px] h-auto flex flex-col items-center justify-start">
                        <li className="font-bold text-[16px]">Social Media</li>
                        <li className="flex flex-row items-center my-[15px] cursor-pointer">
                            <RxInstagramLogo />
                            <span className="text-[15px] ml-[6px]">Instagram</span>
                        </li>
                        <li className="flex flex-row items-center my-[15px] cursor-pointer">
                            <RxTwitterLogo />
                            <span className="text-[15px] ml-[6px]">Twitter</span>
                        </li>
                        <li className="flex flex-row items-center my-[15px] cursor-pointer">
                            <RxLinkedinLogo />
                            <span className="text-[15px] ml-[6px]">Lindedin</span>
                        </li>
                    </ul> */}
                    <ul className="min-w-[200px] h-auto flex flex-col items-center justify-start">
                        <li className="font-bold text-[16px]">About</li>
                        <li className="flex flex-row items-center my-[15px] cursor-pointer">
                            <a href="#" target="_blank" rel="noopener noreferrer">
                                <span className="text-[15px] ml-[6px]">Become Sponsor</span>
                            </a>
                        </li>
                        <li className="flex flex-row items-center my-[15px] cursor-pointer">
                            <a href="#" target="_blank" rel="noopener noreferrer">
                                <span className="text-[15px] ml-[6px]">Learning about me</span>
                            </a>
                        </li>
                        <li className="flex flex-row items-center my-[15px] cursor-pointer">
                            <a
                                href="http://vakulamykhailo@gmail.com"
                                target="_blank"
                                rel="noopener noreferrer">
                                <span className="text-[15px] ml-[6px]">
                                    vakulamykhailo@gmail.com
                                </span>
                            </a>
                        </li>
                    </ul>
                </div>

                <div className="mb-[20px] text-[15px] text-center">
                    &copy; Mikhail Dev 2023 Inc. All right reserved
                </div>
            </div>
        </div>
    );
};

export default Footer;
