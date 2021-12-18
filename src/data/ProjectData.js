import { SiDocker, SiReact, SiFastapi, SiJava, 
  SiJavascript, SiJira, SiMaterialui, SiPython, SiGnubash, 
  SiGithubactions, SiTailwindcss } from "react-icons/si";
import dungeonGIF from '../assets/dungeon.gif';
import websiteGIF from '../assets/website.gif';
import circlesGIF from '../assets/circles.gif';
import airbrbGIF from '../assets/airbrb.gif';

export const projectData = [
  {
    title: 'Circles',
    skills: [
      {icon: <SiDocker/>, title: 'Docker'},
      {icon: <SiGithubactions/>, title: 'GitHub Actions'},
      {icon: <SiGnubash/>, title: 'Bash'},
      {icon: <SiPython/>, title: 'Python'},
      {icon: <SiFastapi/>, title: 'FastAPI'},
      {icon: <SiJira/>, title: 'Jira'}
    ],
    description: 'A degree planner for UNSW students.',
    role: 'Backend',
    team: 5,
    image: circlesGIF,
    links: [

    ],
    video: 'https://youtu.be/Zeb-AiiMIc0',
    warning: 'Deployment expected in early 2022.',
  },
  {
    title: 'Portfolio',
    skills: [
      {icon: <SiMaterialui/>, title: 'Material UI'}, 
      {icon: <SiReact />, title: 'React'}, 
      {icon: <SiJavascript/>, title: 'Javascript'}
    ],
    description: 'A website to showcase my recent projects and technical skills.',
    role: 'Frontend',
    team: 1,
    image: websiteGIF,
    links: [

    ],
    video: 'https://youtu.be/7-kqjnNEzF0',
    warning: ''
  },
  {
    title: 'Dungeons',
    skills: [{icon: <SiJava/>, title: 'Java'}],
    description: 'A dungeon crawler developed with object-oriented design principles for a UNSW course.',
    role: 'Backend',
    team: 5,
    image: dungeonGIF,
    links: [

    ],
    video: 'https://youtu.be/6_Jzg-aua14',
    warning: ''
  },
  {
    title: 'AirBrB',
    skills: [
      {icon: <SiTailwindcss/>, title: 'TailwindCSS'}, 
      {icon: <SiReact/>, title: 'React'},
      {icon: <SiJavascript/>, title: 'Javascript'}
    ],
    description: 'An airBnB clone created for a UNSW front-end programming course.',
    role: 'Frontend',
    team: 2,
    image: airbrbGIF,
    links: [

    ],
    video: 'https://youtu.be/Htp4mX69vpg',
    warning: ''
  },
]
