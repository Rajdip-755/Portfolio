// src/components/Skills/skills-data.js
import {
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaReact,
  FaNodeJs,
  FaGitAlt,
  FaDrupal,
  FaPhp
} from 'react-icons/fa';
import { SiMongodb, SiTailwindcss } from 'react-icons/si';

export const skills = [
  { name: 'Drupal', icon: FaDrupal, level: 5 },
  { name: 'PHP', icon: FaPhp, level: 5 },
  { name: 'HTML5', icon: FaHtml5, level: 5 },
  { name: 'CSS3', icon: FaCss3Alt, level: 5 },
  { name: 'JavaScript', icon: FaJs, level: 5 },
  { name: 'React', icon: FaReact, level: 4 },
  { name: 'Node.js', icon: FaNodeJs, level: 4 },
  { name: 'MongoDB', icon: SiMongodb, level: 4 },
  { name: 'Tailwind CSS', icon: SiTailwindcss, level: 4 },
  { name: 'Git', icon: FaGitAlt, level: 5 },
];
