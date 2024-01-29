import Image from 'next/image';
import React from 'react';

interface IProps {
    src: string;
    title: string;
    description: string;
    url: string;
}

const ProjectCard = ({ src, title, description, url }: IProps) => {
    return (
        <div className="relative overflow-hidden rounded-lg shadow-lg border border-[#2A0E61] flex flex-col basis-[33%] z-20">
            <a
                href={url}
                className="block w-full max-h-[60%]"
                target="_blank"
                rel="noopener noreferrer">
                <Image
                    src={src}
                    alt={title}
                    width={1000}
                    height={1000}
                    className="w-full h-full object-fill"
                />
            </a>
            <div className="relative p-4 flex-grow">
                <h1 className="text-2xl font-semibold text-white">{title}</h1>
                <p className="mt-2 text-gray-300">{description}</p>
            </div>
        </div>
    );
};

export default ProjectCard;
