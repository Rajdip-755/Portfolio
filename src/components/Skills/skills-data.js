// src/components/Skills/skills-data.js
import {
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaReact,
  FaNodeJs,
  FaGitAlt,
  FaDrupal,
  FaPhp,
  FaDatabase,
} from 'react-icons/fa';
import { SiMongodb, SiTailwindcss } from 'react-icons/si';

export const skills = [
  { name: 'Drupal', icon: FaDrupal, level: 5 },
  { name: 'PHP', icon: FaPhp, level: 5 },
  { name: 'Git', icon: FaGitAlt, level: 5 },
  { name: 'DBMS', icon: FaDatabase, level: 4 },
  { name: 'Node.js', icon: FaNodeJs, level: 4 },
  { name: 'HTML5', icon: FaHtml5, level: 4 },
  { name: 'CSS', icon: FaCss3Alt, level: 3 },
  { name: 'JavaScript', icon: FaJs, level: 3 },
  { name: 'React', icon: FaReact, level: 3 },
];
