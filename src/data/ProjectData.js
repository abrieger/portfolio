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
    video: ''
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
    video: ''
  },
  {
    title: 'Dungeon Game',
    skills: [{icon: <SiJava/>, title: 'Java'}],
    description: 'A dungeon crawler developed with object-oriented design principles for a UNSW course.',
    role: 'Backend',
    team: 5,
    image: dungeonGIF,
    links: [

    ],
    video: ''
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
    video: ''
  },
]
// <iframe width="1504" height="855" src="https://www.youtube.com/embed/2r7jq_amiPQ" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>