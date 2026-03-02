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
        id: 'positioning',
        name: 'How I Think.txt',
        type: 'text',
        content:
          "I don't just build apps. I build products that operate across different layers of technology and business logic.\n\nOne project integrates AI into a productivity system, where the challenge is not just technical integration but intelligent data management at scale. Managing daily, monthly, and long-term task data requires architectural decisions that are both performance-efficient and cost-effective. I approach these decisions not only as a developer, but as a product owner balancing scalability and infrastructure cost.\n\nAnother product focuses on privacy-first mental health tracking. That project required secure local architecture, biometric protection, encrypted storage, and thoughtful UX decisions designed around user safety. It was a challenge in security, discretion, and trust-centered product design.\n\nNow, in mobile gaming-like development, my focus shifts to performance engineering. Optimizing animation-heavy SwiftUI applications for smooth rendering and device efficiency presents a different type of technical problem.\n\nAI integration.\nSecurity-first architecture.\nPerformance optimization.\n\nThese are different domains. What connects them is systems thinking.\n\nI approach development not as isolated feature implementation, but as solving product-level challenges across technology, user psychology, infrastructure cost, and long-term scalability.\n\nFor clients, this means you are not hiring someone to code screens.\nYou are working with someone who understands trade-offs, constraints, and business impact behind technical decisions.",
        tech: 'Systems Thinking, AI, Security, Performance',
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
        name: 'AI Productivity Startup',
        type: 'folder',
        files: [
          {
            id: 'ai-overview',
            name: 'Overview.txt',
            type: 'text',
            content:
              "AI-Powered Productivity Startup\nLead Mobile Engineer | Flutter\n\nI am currently leading mobile development for a startup-level AI-powered productivity application built with Flutter.\n\nThe product is designed as an intelligent task and scheduling system, combining structured planning tools with voice-driven input and AI-enhanced task processing.\n\nI am responsible for defining and implementing the mobile architecture, feature structure, and technical foundation of the application.",
            tech: 'Flutter, Riverpod, Drift, Firebase',
          },
          {
            id: 'ai-architecture',
            name: 'Architecture.txt',
            type: 'text',
            content:
              "Architecture & Product Foundation\n\n• Designed and implemented a scalable feature-based architecture\n• Established clean separation between presentation, domain, and data layers\n• Structured the project for long-term maintainability and rapid iteration\n• Implemented state management with Riverpod\n• Built local persistence layer using Drift\n• Integrated Firebase services for authentication and backend support\n\nThe application is structured as a modular system rather than a collection of isolated screens, allowing the product to evolve without architectural refactoring.",
            tech: 'Clean Architecture, Riverpod, Drift',
          },
          {
            id: 'ai-auth',
            name: 'Authentication.txt',
            type: 'text',
            content:
              "Authentication\n\n• Firebase authentication\n• Apple Sign-In\n• Google Sign-In\n• Anonymous user support",
            tech: 'Firebase Auth, Apple, Google',
          },
          {
            id: 'ai-tasks',
            name: 'Task System.txt',
            type: 'text',
            content:
              "Task & Scheduling System\n\n• Flexible task domain supporting both time-based events and simple to-do items\n• Calendar-based task management with advanced UI interactions\n• Drag-and-drop scheduling functionality\n• Categorized scheduling views such as time-based and type-based task grouping\n\nCalendar Integration\n\n• Integration with Google Calendar\n• Integration with Apple Calendar",
            tech: 'Calendar, Drag-and-Drop, Scheduling',
          },
          {
            id: 'ai-voice',
            name: 'Voice Input.txt',
            type: 'text',
            content:
              "Voice Task Creation\n\n• Speech-to-text task input\n• Parsing spoken input into structured task entities\n• Automated field population based on voice input",
            tech: 'Speech-to-Text, NLP',
          },
          {
            id: 'ai-integration',
            name: 'AI Integration.txt',
            type: 'text',
            content:
              "AI Integration\n\nA dedicated AI API layer has already been developed and is operational.\n\nThe mobile application is structured to connect directly to this AI backend, enabling intelligent task processing and structured natural language interpretation within the product.",
            tech: 'AI API, NLP, Task Processing',
          },
          {
            id: 'ai-role',
            name: 'My Role.txt',
            type: 'text',
            content:
              "Role Positioning\n\nThis is a startup-level build where I operate as the primary mobile engineer, responsible for:\n\n• System architecture\n• Core feature implementation\n• Product scalability decisions\n• Technical execution from foundation to deployment\n\nI focus on building coherent systems aligned with product vision and business objectives, not isolated feature delivery.",
            tech: 'Lead Engineer, Product, Strategy',
          },
        ],
      },
      {
        id: 'mood-tracker',
        name: 'Secure Mood Tracker',
        type: 'folder',
        files: [
          {
            id: 'mood-overview',
            name: 'Overview.txt',
            type: 'text',
            content:
              "Secure Mood Tracker\nProduct Design & iOS Development | Swift, SwiftUI\n\nSecure Mood Tracker is a privacy-focused mental health tracking application designed for users who need structured, secure, and discreet monitoring of their emotional states.\n\nThis product was fully designed and developed by me, from initial research and UX decisions to technical architecture and implementation in Swift and SwiftUI.",
            tech: 'Swift, SwiftUI, iOS',
          },
          {
            id: 'mood-vision',
            name: 'Product Vision.txt',
            type: 'text',
            content:
              "Product Vision\n\nThe goal was not simply to build another mood tracking app.\n\nThe objective was to create a secure, psychologically safe environment where users can:\n\n• Track emotional patterns over time\n• Maintain sensitive records privately\n• Share structured reports with medical professionals when needed\n• Protect their data from unintended exposure\n\nThis app was designed specifically for individuals who require discretion, including users managing complex or sensitive mental health histories.",
            tech: 'Product Strategy, Mental Health',
          },
          {
            id: 'mood-privacy',
            name: 'Privacy Architecture.txt',
            type: 'text',
            content:
              "Privacy-First Architecture\n\n• Fully local data storage on device\n• Biometric protection via Face ID\n• Secure storage mechanisms using Apple Keychain\n• No unnecessary external data transmission\n\nDiscreet Mode\n\n• Optional terminology masking feature\n• Sensitive diagnostic terms can be replaced with neutral language\n• Allows users to maintain privacy even if the app interface is viewed by others\n\nThis feature directly addresses a real-world user pain point: social and environmental safety.",
            tech: 'Keychain, Face ID, Local Storage',
          },
          {
            id: 'mood-export',
            name: 'Clinical Export.txt',
            type: 'text',
            content:
              "Clinical-Ready Data Export\n\n• Structured analytics generation\n• Exportable reports summarizing mood history\n• Shareable documents suitable for therapists or medical professionals\n\nThis transforms the app from a personal diary into a medically useful tracking tool.",
            tech: 'PDF Generation, Analytics',
          },
          {
            id: 'mood-ux',
            name: 'UX Design.txt',
            type: 'text',
            content:
              "User Experience & System Design\n\n• Built entirely with Swift and SwiftUI\n• Light and dark mode support\n• Custom notification system for consistent tracking habits\n• Designed UI system for clarity and emotional neutrality",
            tech: 'SwiftUI, Design System, UX',
          },
          {
            id: 'mood-role',
            name: 'My Role.txt',
            type: 'text',
            content:
              "My Role\n\nThis is a fully independent product build.\n\nI led:\n• Product research\n• UX logic and behavioral design decisions\n• Security architecture\n• iOS development in Swift\n• SwiftUI-based design system implementation\n\nUnlike feature-based freelance work, this project demonstrates my ability to:\n• Identify a real user problem\n• Translate it into product strategy\n• Architect a secure technical solution\n• Deliver a complete, production-ready application",
            tech: 'Product Owner, iOS Engineer',
          },
          {
            id: 'mood-business',
            name: 'Business Value.txt',
            type: 'text',
            content:
              "Business Value Perspective\n\nFrom a business standpoint, this project demonstrates my ability to:\n\n• Work within sensitive domains where privacy and compliance matter\n• Design trust-driven products\n• Implement secure local-first architectures\n• Think beyond UI and focus on user safety and product integrity\n\nFor clients, this signals reliability in building applications that require discretion, security, and thoughtful UX design.",
            tech: 'Privacy, Compliance, Trust',
          },
        ],
      },
      {
        id: 'english-game',
        name: 'Phrasal Verbs Game',
        type: 'folder',
        files: [
          {
            id: 'eng-overview',
            name: 'Overview.txt',
            type: 'text',
            content:
              "Phrasal Verb Game\nProduct Concept, Performance Engineering & iOS Development | SwiftUI\nR&D Stage · Active Development\n\nPhrasal Verb Game is an interactive, animation-driven educational product currently in active development.\n\nThe concept is fully defined: a game-like language learning system focused on phrasal verbs, built around engagement mechanics, repetition psychology, and dynamic UI transitions.\n\nThis is not a static learning app. It is being designed as a high-interaction, motion-heavy experience that blends education with game dynamics.",
            tech: 'SwiftUI, iOS, Game Design',
          },
          {
            id: 'eng-status',
            name: 'Product Status.txt',
            type: 'text',
            content:
              "Product Status\n\n• The idea, product logic, and UX system are completed\n• The design system is defined\n• Core UI components, folder structure, and foundational architecture are implemented\n\nThe project is now entering deeper technical realization and performance-focused development.",
            tech: 'Architecture, UX, Design System',
          },
          {
            id: 'eng-performance',
            name: 'Engineering Challenge.txt',
            type: 'text',
            content:
              "Engineering Challenge\n\nThe core challenge of this product is optimization.\n\nBecause the experience relies on animation layers, interactive transitions, and dynamic UI rendering, the technical focus is:\n\n• Maintaining stable frame rates\n• Preventing memory spikes\n• Ensuring battery-efficient animation handling\n• Keeping the experience smooth across device tiers\n\nThis project represents deliberate performance engineering within SwiftUI, rather than straightforward feature delivery.",
            tech: 'SwiftUI, Animation, Performance',
          },
          {
            id: 'eng-why',
            name: 'Why This Matters.txt',
            type: 'text',
            content:
              "Why This Matters\n\nThis project demonstrates:\n\n• My ability to move from product idea to technical architecture\n• My understanding of interaction design at system level\n• My focus on device-level optimization and performance constraints\n• My willingness to take on technically demanding builds early in the lifecycle\n\nIt is intentionally built as an R&D-driven product, where architectural decisions are made with long-term performance and scalability in mind.",
            tech: 'R&D, Product Thinking, Scalability',
          },
          {
            id: 'eng-positioning',
            name: 'Positioning.txt',
            type: 'text',
            content:
              "Positioning\n\nWhile still in development, this product reflects how I approach complex builds:\n\nNot just shipping features.\nNot just designing screens.\nBut engineering interactive systems that balance UX ambition with technical discipline.",
            tech: 'Systems Thinking, UX Engineering',
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
  linkedin: 'https://www.linkedin.com/in/maximiv',
  github: 'https://github.com/bananocha',
} as const;

/* ════════════════════════════════════════════
   Derived helpers
   ════════════════════════════════════════════ */

/** Ordered list of window keys (used for rendering & taskbar). */
export const WINDOW_KEYS: WindowName[] = Object.keys(FILE_SYSTEM) as WindowName[];

/** Taskbar icon overrides (some windows use a different icon in the taskbar). */
export const TASKBAR_ICON_MAP: Partial<Record<WindowName, LucideIcon>> =
  Object.fromEntries(WINDOW_KEYS.map((k) => [k, FILE_SYSTEM[k].icon]));
