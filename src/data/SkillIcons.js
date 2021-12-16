import { SiC, SiCss3, SiDocker, SiHtml5, SiReact, SiFastapi, SiFlask, SiJava, 
  SiJavascript, SiJira, SiMaterialui, SiPython, SiGnubash, SiGit, SiGithub, 
  SiGitlab, SiGithubactions, SiPerl, SiTailwindcss } from "react-icons/si";

const ALL = '0';
const FRONTEND = '1';
const BACKEND = '2';
const TOOLS = '3';

export const skillIcons = [
  { icon: <SiC/>, types: [ALL, BACKEND], title: 'C', when: 'several UNSW courses and assistant tutoring in Programming Fundamentals' },
  { icon: <SiCss3/>, types: [ALL, FRONTEND], title: 'CSS3', when: 'UNSW Frontend Programming course projects and this website' },
  { icon: <SiDocker/>, types: [ALL, TOOLS], title: 'Docker', when: 'Sunswift Racing and CSESoc Circles project' },
  { icon: <SiHtml5/>, types: [ALL, FRONTEND], title: 'HTML5', when: 'UNSW Frontend Programming course projects and this website' },
  { icon: <SiFastapi/>, types: [ALL, BACKEND], title: 'FastAPI', when: 'CSESoc Circles project' },
  { icon: <SiFlask/>, types: [ALL, BACKEND], title: 'Flask', when: 'UNSW Software Engineering Fundamentals course' },
  { icon: <SiGit/>, types: [ALL, TOOLS], title: 'Git', when: ' everywhere!' },
  { icon: <SiGitlab/>, types: [ALL, TOOLS],  title: 'Gitlab', when: 'several UNSW courses' },
  { icon: <SiGithub/>, types: [ALL, TOOLS], title: 'Github', when: 'everywhere!' },
  { icon: <SiGithubactions/>, types: [ALL, TOOLS], title: 'Github Actions', when: 'Sunswift Racing and CSESoc Circles project' },
  { icon: <SiGnubash/>, types: [ALL, TOOLS], title: 'Bash', when: 'UNSW Software Construction Tools and Techniques course' },
  { icon: <SiJava/>, types: [ALL, BACKEND], title: 'Java', when: 'UNSW Object-Oriented Programming course projects'  },
  { icon: <SiJavascript/>, types: [ALL, FRONTEND], title: 'Javascript', when: 'UNSW Frontend Programming course projects, Sunswift Racing and this website' },
  { icon: <SiJira/>, types: [ALL, TOOLS], title: 'Jira', when: 'CSESoc Circles project' },
  { icon: <SiMaterialui/>, types: [ALL, FRONTEND], title: 'MaterialUI', when: 'Sunswift Racing and this website' },
  { icon: <SiPerl/>, types: [ALL, BACKEND], title: 'Perl', when: 'UNSW Software Construction Tools and Techniques course' },
  { icon: <SiPython/>, types: [ALL, BACKEND], title: 'Python', when: 'UNSW Software Engineering Fundamentals course and CSESoc Circles project' },
  { icon: <SiReact />, types: [ALL, FRONTEND], title: 'React', when: 'UNSW Frontend Programming course projects, Sunswift Racing, and this website' },
  { icon: <SiTailwindcss/>, types: [ALL, FRONTEND], title: 'TailwindCSS', when: 'UNSW Frontend Programming course project' },
]