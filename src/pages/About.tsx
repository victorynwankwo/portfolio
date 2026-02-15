// import { IconLeaf } from '@tabler/icons-react';
import { motion } from 'framer-motion';
// import { SectionHeader } from '../components/SectionHeader';
// import { SectionMotion } from '../common/motion/Section';

export const About = () => {
  // const { section } = SectionMotion;
  // const sectionDescription = 'A short story of me';
  return (
    <motion.section
      // initial={section.initial}
      // animate={section.animated}
      // transition={section.transition}
      // className="space-y-6"
    >
      {/* <SectionHeader */}
         {/* icon={<IconLeaf />} */}
        {/* label="About" */}
         {/* description={sectionDescription} */}
      {/* / /> */}
      <div className="flex gap-2 text-md lg:text-xl font-medium">
        <h2 className="font-semibold">Hello, I,m Victory</h2>
        <div className="ml-1 animate-waving-hand">👋</div>
      </div>
      <p>
I am a Frontend Engineer skilled in React, TypeScript, and JavaScript.
I focus on building clean, efficient, and maintainable user interfaces.
I enjoy creating responsive and user-friendly web applications.
I apply modern design principles to deliver smooth user experiences.
I am eager to keep learning and improving my frontend development skills.


      </p>
      <p>
        My approach centers on writing clean, maintainable, and scalable code.
I enjoy transforming UI/UX designs into seamless digital experiences.
I pay close attention to detail to ensure pixel-perfect implementations.
I focus on optimizing applications for speed and smooth user interaction.
I continuously improve my problem-solving skills through real-world projects.
I am committed to following modern frontend best practices and standards.
I collaborate effectively with designers and backend developers when needed.
I am always eager to learn, grow, and take on new frontend challenges.
      </p>
    </motion.section>
  );
};
