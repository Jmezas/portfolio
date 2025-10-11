import {
  Database,
  Code2,
  Server,
  Smartphone,
  Cloud,
  GitBranch,
  Layers,
  Box,
  Braces,
  FileCode,
  Terminal,
  Cpu,
  LucideIcon
} from 'lucide-react';

export const skillIcons: Record<string, LucideIcon> = {
  // Backend
  'C# / .NET Core': Code2,
  'Node.js': Server,
  'Java / Spring': Server,
  'Python': Terminal,
  'ASP.NET MVC': Layers,
  'Nest.js': Server,

  // Frontend
  'Angular': Braces,
  'TypeScript': FileCode,
  'JavaScript': FileCode,
  'Vue.js': Braces,
  'HTML5 / CSS3': Code2,
  'Bootstrap': Layers,

  // Database
  'SQL Server': Database,
  'PostgreSQL': Database,
  'MySQL': Database,
  'MongoDB': Database,
  'Oracle': Database,

  // DevOps
  'Docker': Box,
  'AWS': Cloud,
  'Git / GitHub': GitBranch,
  'CI/CD': GitBranch,

  // Mobile
  'Flutter': Smartphone,
  'Ionic': Smartphone,
  'Android': Smartphone,
  'iOS': Smartphone,
};

export const getSkillIcon = (skillName: string) => {
  return skillIcons[skillName] || Cpu; // Default icon if not found
};
