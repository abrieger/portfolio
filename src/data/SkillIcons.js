import { SiC, SiCss3, SiDocker, SiHtml5, SiReact, SiFastapi, SiFlask, SiJava, 
  SiJavascript, SiJira, SiMaterialui, SiPython, SiGnubash, SiGit, SiGithub, 
  SiGitlab, SiGithubactions, SiPerl, SiTailwindcss } from "react-icons/si";

const ALL = '0';
const FRONTEND = '1';
const BACKEND = '2';
const TOOLS = '3';

export const skillIcons = [
  { icon: <SiC/>, types: [ALL, BACKEND], title: 'C', when: 'university courses and tutoring' },
  { icon: <SiCss3/>, types: [ALL, FRONTEND], title: 'CSS3', when: 'university course and this website' },
  { icon: <SiDocker/>, types: [ALL, TOOLS], title: 'Docker', when: 'Sunswift Racing and Circles project' },
  { icon: <SiHtml5/>, types: [ALL, FRONTEND], title: 'HTML5', when: 'university course and this website' },
  { icon: <SiFastapi/>, types: [ALL, BACKEND], title: 'FastAPI', when: 'Circles project' },
  { icon: <SiFlask/>, types: [ALL, BACKEND], title: 'Flask', when: 'university course' },
  { icon: <SiGit/>, types: [ALL, TOOLS], title: 'Git', when: ' everywhere!' },
  { icon: <SiGitlab/>, types: [ALL, TOOLS],  title: 'Gitlab', when: 'university courses' },
  { icon: <SiGithub/>, types: [ALL, TOOLS], title: 'Github', when: 'everywhere!' },
  { icon: <SiGithubactions/>, types: [ALL, TOOLS], title: 'Github Actions', when: 'Sunswift Racing and Circles project' },
  { icon: <SiGnubash/>, types: [ALL, TOOLS], title: 'Bash', when: 'university course' },
  { icon: <SiJava/>, types: [ALL, BACKEND], title: 'Java', when: 'university course'  },
  { icon: <SiJavascript/>, types: [ALL, FRONTEND], title: 'Javascript', when: 'university course, Sunswift Racing and this website' },
  { icon: <SiJira/>, types: [ALL, TOOLS], title: 'Jira', when: 'Circles project' },
  { icon: <SiMaterialui/>, types: [ALL, FRONTEND], title: 'MaterialUI', when: 'Sunswift Racing and this website' },
  { icon: <SiPerl/>, types: [ALL, BACKEND], title: 'Perl', when: 'university course' },
  { icon: <SiPython/>, types: [ALL, BACKEND], title: 'Python', when: 'university courses and Circles project' },
  { icon: <SiReact />, types: [ALL, FRONTEND], title: 'React', when: 'university course, Sunswift Racing, and this website' },
  { icon: <SiTailwindcss/>, types: [ALL, FRONTEND], title: 'TailwindCSS', when: 'university course' },
]