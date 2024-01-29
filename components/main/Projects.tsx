import React from 'react';
import ProjectCard from '../sub/ProjectCard';

const Projects = () => {
    return (
        <div className="flex flex-col items-center justify-center pt-[20px] pb-20" id="projects">
            <h1 className="text-[40px] font-semibold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500 py-20">
                My Projects
            </h1>
            <div className="h-full w-full flex flex-col md:flex-row gap-10 px-10">
                <ProjectCard
                    src="/GoTrip.png"
                    title="Go Trip Adaptive "
                    description="The site was laid out according to the figma layout. It is adaptive and easy to use on any device."
                    url="https://mixailfrontend.github.io/GoTrip/#!"
                />
                <ProjectCard
                    src="/CosmicScroll.png"
                    title="Cosmic GSAP Scroll"
                    description="Minimalistic scrolling on GSAP with beautiful animation."
                    url="https://mixailfrontend.github.io/GSAP-ScrollTrigger/"
                />
                <ProjectCard
                    src="/LoftHouse.png"
                    title="Loft House"
                    description="Adaptive and responsive website layout with an interesting gallery, embedded video and Google map, created using a layout in Figma."
                    url="https://mixailfrontend.github.io/LoftHouse/"
                />
            </div>
        </div>
    );
};

export default Projects;
