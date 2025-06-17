// Skills Section Logo's
import htmlLogo from './assets/tech_logo/html.png';
import cssLogo from './assets/tech_logo/css.png';
import javascriptLogo from './assets/tech_logo/javascript.png';
import reactjsLogo from './assets/tech_logo/reactjs.png';
import tailwindcssLogo from './assets/tech_logo/tailwindcss.png';
import bootstrapLogo from './assets/tech_logo/bootstrap.png';
import springbootLogo from './assets/tech_logo/springboot.png';
import nodejsLogo from './assets/tech_logo/nodejs.png';
import expressjsLogo from './assets/tech_logo/express.png';
import mysqlLogo from './assets/tech_logo/mysql.png';
import mongodbLogo from './assets/tech_logo/mongodb.png';
import cLogo from './assets/tech_logo/c.png';
import javaLogo from './assets/tech_logo/java.png';
import pythonLogo from './assets/tech_logo/python.png';
import githubLogo from './assets/tech_logo/github.png';
import vscodeLogo from './assets/tech_logo/vscode.png';
import oracleLogo from './assets/tech_logo/oracle.png';
import compassLogo from './assets/tech_logo/mc.png';
import vercelLogo from './assets/tech_logo/Vercel.svg';

//Education Section Logo's
import au from './assets/education_logo/au.png';
import gvjc from './assets/education_logo/gvjc.png';
import pmvs from './assets/education_logo/pmvs.png';

// Work Section Logo's
import lsLogo from '/public/LifeStyle.png';
import bsLogo from '/public/bus.png';
import pfLogo from '/public/portfolio.png';

export const SkillsInfo = [
    {
        title: 'Frontend',
        skills: [
        { name: 'HTML', logo: htmlLogo },
        { name: 'CSS', logo: cssLogo },
        { name: 'JavaScript', logo: javascriptLogo },
        { name: 'React JS', logo: reactjsLogo },
        { name: 'Tailwind CSS', logo: tailwindcssLogo },
        { name: 'Bootstrap', logo: bootstrapLogo },
        ],
    },
    {
        title: 'Backend',
        skills: [
        { name: 'MySQL', logo: mysqlLogo },
        { name: 'MongoDB', logo: mongodbLogo },
        { name: 'Oracle', logo: oracleLogo },
        { name: 'Node JS', logo: nodejsLogo },
        { name: 'Express JS', logo: expressjsLogo },
        { name: 'Springboot', logo: springbootLogo },
        ],
    },
    {
        title: 'Languages',
        skills: [
        { name: 'C', logo: cLogo },
        { name: 'Java', logo: javaLogo },
        { name: 'Python', logo: pythonLogo },
        { name: 'JavaScript', logo: javascriptLogo },
        ],
    },
    {
        title: 'Tools',
        skills: [
        { name: 'GitHub', logo: githubLogo },
        { name: 'VS Code', logo: vscodeLogo },
        { name: 'MongoDB Compass', logo: compassLogo },
        { name: 'Oracle SQLcl', logo: oracleLogo },
        { name: 'Vercel', logo: vercelLogo },
        ],
    },
];

export const experiences = [
    {
      id: 0,
      role: "",
      company: "",
      date: "",
      desc: "",
      skills: [
        
      ],
    },
    {
      id: 1,
      role: "",
      company: "",
      date: "",
      desc: "",
      skills: [
        
      ],
    },
  ];

export const EducationInfo = [
    {
        id: 0,
        img: au,
        school: "Anurag University, Hyderabad",
        degree: "Bachelor of Technology - B.Tech(Computer Science and Engineering)",
        date: "Nov 2022 - Present",
        grade: "9.05 CGPA",
        desc: "I am currently pursuing my Bachelor's degree in Computer Science and Engineering(B.Tech) from Anurag University, Hyderabad. My academic journey has equipped me with a solid foundation in core computer science subjects such as Data Structures and Algorithms, Object-Oriented Programming, Operating Systems, and Computer Networks. Alongside theoretical learning, I've gained hands-on experience through projects in Web Development, Database Management, and emerging technologies like Artificial Intelligence and Machine Learning. My time at Anurag University has helped me develop both technical and problem-solving skills while actively engaging in team-based projects and innovation-driven coursework.",
    },
    {
        id: 1,
        img: gvjc,
        school: "Gyanavapi Junior College, Hyderabad",
        degree: "Senior Secondary Education - Intermediate (MPC)",
        date: "2020 - 2022",
        grade: "94.7 %",
        desc: "Completed my Intermediate Education at Gyanavapi Junior College, Hyderabad, with a focus on Mathematics, Physics, and Chemistry(MPC). This period strengthened my analytical skills and provided a solid foundation for my engineering studies. I excelled in subjects like Mathematics and Physics, which are crucial for my current studies in Computer Science and Engineering. The rigorous curriculum and practical exposure during this time played a significant role in shaping my academic and career aspirations.",
    },
    {
        id: 2,
        img: pmvs,
        school: "Panineeya MahVidyalaya Public School, Hyderabad",
        degree: "CBSE(X) - Secondary Education",
        date: "2010 - 2020",
        grade: "84.5 %",
        desc: "Completed my Secondary Education at Panineeya MahVidyalaya Public School, Hyderabad, under the CBSE board. This early education laid the groundwork for my academic journey and instilled a strong work ethic. It provided me with a well-rounded education, fostering my curiosity and passion for learning across various subjects.",
    },
];

export const projects = [
    {
      id: 0,
      title: "Solace App",
      description:
        "It's an AI-powered Mobile application that supports individuals experiencing depression. It scans the user's face upon entry, detects emotional anomalies, and starts a personalized conversation. Using AI-driven sentiment analysis, it provides empathetic responses, mental health resources, and guidance. The app ensures privacy and security, offering a safe space for users to express themselves and receive AI-driven support.",
      image: "",
      tags: ["Dart", "CSS", "JavaScript", "MySQL", "AI/ML","NLP"],
      github: "https://github.com/JigeeshaVardhan/Solace-app.git",
      webapp: "",
    },
    {
        id: 1,
        title: "Local Food Donation Platform",
        description:
          "A web application that connects individuals and organizations with surplus food to local charities and food banks. It allows users to post available food items, view nearby donation opportunities, and track their contributions. The platform aims to reduce food waste and support those in need by facilitating efficient food donations. It includes features like user authentication, real-time notifications, and a user-friendly interface for easy navigation.",
        image: "",
        tags: ["React.js", "Springboot.js", "Tailswindcss", "MySQL",],
        github: "",
        webapp: "",
    },
    {
        id: 2,
        title: "Portfolio Website",
        description:
          "A personal portfolio website showcasing my skills, projects, and experiences. It features a clean and modern design with sections for an introduction, skills, projects, and contact information. The website is responsive and optimized for various devices, providing a seamless user experience. It includes interactive elements like animations and hover effects to enhance engagement. The portfolio highlights my expertise in web development and serves as a platform to demonstrate my work to potential employers and collaborators.",
        image: pfLogo,
        tags: ["React.js", "Tailwind CSS", "JavaScript"],
        github: "https://github.com/JigeeshaVardhan/portfolio.git",
        webapp: "https://jv-portfolio-theta.vercel.app/",
    },
    {
        id: 3,
        title: "LifeStyle Blog",
        description:
          "A personal blog website is my mini - project where I share my thoughts, experiences, and insights on various topics related to lifestyle, travel, food, and wellness. The blog features a clean and user-friendly design with categories for easy navigation. The website is optimized for SEO to increase visibility and attract a wider audience. It serves as a creative outlet to express my passion for writing and connect with like-minded individuals. ",
        image: lsLogo,
        tags: ["HTML", "CSS", "JavaScript"],
        github: "https://github.com/JigeeshaVardhan/LifeStyle.git",
        webapp: "https://life-style-azure.vercel.app/",
    },
    {
        id: 4,
        title: "Scientific Calculator",
        description:
          "A web-based scientific calculator that performs advanced mathematical calculations, including trigonometric functions, logarithms, graphs, matrix and exponentiation. It features a user-friendly interface with buttons for various operations and a display area for results. The calculator supports both basic arithmetic, complex calculations and advanced calculations, making it a versatile tool for students and professionals alike.",
        image: "",
        tags: ["HTML", "CSS", "JavaScript"],
        github: "",
        webapp: "",
    },
];