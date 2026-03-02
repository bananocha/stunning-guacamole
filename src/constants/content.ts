import {
  User,
  ShieldCheck,
  Smartphone,
  Cloud,
} from 'lucide-react';
import type { WindowName, FileSystemSection } from '../types';
import type { LucideIcon } from 'lucide-react';

/* ════════════════════════════════════════════
   File system data (drives all window content)
   ════════════════════════════════════════════ */

export const FILE_SYSTEM: Record<WindowName, FileSystemSection> = {
  about: {
    title: 'System Info: About Me',
    icon: User,
    root: [
      {
        id: 'intro',
        name: 'Hello.txt',
        type: 'text',
        content:
          "Hi, I'm Olena (Helen).\n\nI've been in tech since February 2021. But what truly differentiates me isn't just experience - it's perspective.\n\nI operate at the intersection of product, technology, and business. I don't just write code. I help businesses build digital products that function as complete systems - scalable, structured, and aligned with real business goals.",
        tech: 'Product Thinking, Business Strategy',
      },
      {
        id: 'what-i-do',
        name: 'What I Do.txt',
        type: 'text',
        content:
          "I currently freelance in:\n\n Mobile development (Swift & Flutter)\n Mobile e-commerce applications\n Landing pages and lightweight platforms for small businesses\n\nMy focus is building mobile products that are not only well-designed, but revenue-oriented, scalable, and strategically aligned with business operations.\n\nMobile e-commerce, in particular, is an area I'm actively developing and expanding into.",
        tech: 'Swift, Flutter, E-commerce, Web',
      },
      {
        id: 'background',
        name: 'My Background.txt',
        type: 'text',
        content:
          "I hold a law degree (scholarship, top university in the country) and a Master's degree in Computer Science with a specialization in data analytics.\n\nBefore the rapid AI boom, I worked as a data analyst on projects involving neural networks. I've also worked within a monitoring team for a large enterprise-level organization and supported small businesses and agencies with DevOps infrastructure and operational setup.\n\nBeyond tech, I have professional experience in: Law, Banking, Recruiting.\n\nThis gives me a strong understanding of:\n• How CRM systems function from an active user perspective\n• How financial systems operate\n• How businesses structure internal processes\n• What \"customer-oriented\" truly means in practice\n\nI don't approach development as a task executor. I approach it as a product thinker.",
        tech: 'CS, Data Analytics, Law, DevOps',
      },
      {
        id: 'approach',
        name: 'My Approach.txt',
        type: 'text',
        content:
          "I work with a startup mindset.\n\nI'm most effective when building a product end-to-end:\n• Clarifying business logic\n• Structuring architecture\n• Designing user experience\n• Implementing the technical solution\n• Preparing for scalability\n\nI'm not interested in being a narrow task-based contributor.\nI'm interested in building complete, meaningful systems.\n\nI go deep where it creates business value - and stay pragmatic where simplicity is smarter.",
        tech: 'Architecture, UX, Scalability',
      },
      {
        id: 'discipline',
        name: 'Discipline.txt',
        type: 'text',
        content:
          "I trained in professional sports for 18 years.\n\nThat shaped my mindset:\n• Discipline\n• Resilience\n• Systems thinking\n• Absolute belief that every problem has a solution\n\nI don't believe in \"impossible tasks.\"\nI believe in finding the right approach and executing consistently.",
        tech: 'Mindset, Execution',
      },
      {
        id: 'why-me',
        name: 'Why Work With Me.txt',
        type: 'text',
        content:
          "• I think in terms of product, not just code\n• I understand business mechanics, not only technical implementation\n• I see the full system - from UX to infrastructure\n• I work as a strategic partner, not just a freelancer\n\nIf you're looking for someone who can move with you from idea to execution - and who understands both business and technology - we'll work well together.",
        tech: 'Product, Strategy, Partnership',
      },
      {
        id: 'photo',
        name: 'Profile Photo.png',
        type: 'image',
        url: '/my_image.png',
      },
    ],
  },
  projects: {
    title: 'Explorer: Mobile Development',
    icon: Smartphone,
    root: [
      {
        id: 'ai-flutter',
        name: 'AI Flutter App',
        type: 'folder',
        files: [
          {
            id: 'ai-txt',
            name: 'Description.txt',
            type: 'text',
            content:
              'Інтеграція нейронних мереж у мобільний інтерфейс. Оптимізація запитів та складний стейт-менеджмент через Riverpod.',
            tech: 'Flutter, OpenAI, Riverpod',
          },
          {
            id: 'ai-img',
            name: 'Preview.jpg',
            type: 'image',
            url: 'https://images.unsplash.com/photo-1618401471353-b98aadebc25a?auto=format&fit=crop&q=80&w=600',
          },
        ],
      },
      {
        id: 'mood-tracker',
        name: 'Secure Mood Tracker',
        type: 'folder',
        files: [
          {
            id: 'mood-txt',
            name: 'Privacy Specs.txt',
            type: 'text',
            content:
              'Додаток з фокусом на приватність. Реалізовано кастомний PDF-генератор та локальне шифрування.',
            tech: 'Dart, Firebase, Security',
          },
          {
            id: 'mood-img',
            name: 'Preview.jpg',
            type: 'image',
            url: 'https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?auto=format&fit=crop&q=80&w=600',
          },
        ],
      },
      {
        id: 'english-game',
        name: 'Phrasal Verbs Game',
        type: 'folder',
        files: [
          {
            id: 'eng-txt',
            name: 'Engine Notes.txt',
            type: 'text',
            content:
              'Гейміфіковане навчання з високою частотою анімацій. Оптимізація рендеру на Canvas.',
            tech: 'Flutter, Rive, Canvas',
          },
          {
            id: 'eng-img',
            name: 'Game UI.jpg',
            type: 'image',
            url: 'https://images.unsplash.com/photo-1550745165-9bc0b252726f?auto=format&fit=crop&q=80&w=600',
          },
        ],
      },
    ],
  },
  infrastructure: {
    title: 'Terminal: Cloud & DevOps',
    icon: Cloud,
    root: [
      {
        id: 'terraform',
        name: 'Terraform IaC',
        type: 'folder',
        files: [
          {
            id: 'tf-txt',
            name: 'Architecture.txt',
            type: 'text',
            content:
              'Повна автоматизація хмарної інфраструктури через Terraform Cloud. Модульна структура для швидкого розгортання VPC та EC2.',
            tech: 'HCL, Terraform Cloud, AWS',
          },
        ],
      },
      {
        id: 'docker',
        name: 'Container Optimization',
        type: 'folder',
        files: [
          {
            id: 'dk-txt',
            name: 'Optimization Report.txt',
            type: 'text',
            content:
              'Зменшення розміру Docker-образів на 60%. Налаштування multi-stage builds для мобільного бекенду.',
            tech: 'Docker, Alpine, CI/CD',
          },
        ],
      },
      {
        id: 'aws',
        name: 'AWS Security',
        type: 'folder',
        files: [
          {
            id: 'aws-txt',
            name: 'VPC Hardening.txt',
            type: 'text',
            content:
              'Налаштування ізольованих VPC, IAM ролей та Security Groups для захисту Enterprise-даних.',
            tech: 'AWS, Security, IAM',
          },
        ],
      },
    ],
  },
  legal: {
    title: 'Compliance Manager: IT Law',
    icon: ShieldCheck,
    root: [
      {
        id: 'gdpr',
        name: 'Privacy Compliance',
        type: 'folder',
        files: [
          {
            id: 'gdpr-txt',
            name: 'Summary.txt',
            type: 'text',
            content:
              'Аудит архітектури на відповідність GDPR та PIPEDA. Розробка Privacy Policy для мобільних додатків.',
            tech: 'GDPR, PIPEDA, IT Law',
          },
        ],
      },
      {
        id: 'ip',
        name: 'Intellectual Property',
        type: 'folder',
        files: [
          {
            id: 'ip-txt',
            name: 'IP Strategy.txt',
            type: 'text',
            content:
              'Захист коду та торгових марок. Консультації щодо ліцензування Open Source компонентів.',
            tech: 'IP Law, Licensing',
          },
        ],
      },
    ],
  },
};

/* ════════════════════════════════════════════
   Social links
   ════════════════════════════════════════════ */

export const SOCIAL_LINKS = {
  linkedin: 'https://www.linkedin.com/in/YOUR_USERNAME',
  github: 'https://github.com/YOUR_USERNAME',
} as const;

/* ════════════════════════════════════════════
   Derived helpers
   ════════════════════════════════════════════ */

/** Ordered list of window keys (used for rendering & taskbar). */
export const WINDOW_KEYS: WindowName[] = Object.keys(FILE_SYSTEM) as WindowName[];

/** Taskbar icon overrides (some windows use a different icon in the taskbar). */
export const TASKBAR_ICON_MAP: Partial<Record<WindowName, LucideIcon>> =
  Object.fromEntries(WINDOW_KEYS.map((k) => [k, FILE_SYSTEM[k].icon]));
