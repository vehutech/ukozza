import logo from './images/ukozza_logoi.png'
import logoMain from './images/ukozza_logo_main.png'
import nextJs from './images/nextjs.png'
import tailwind from './images/tailwind-css.svg'
import react from './images/react-original-wordmark.svg'
import redux from './images/redux.svg'
import typescript from './images/file-type-typescript-official.svg'
import html from './images/html5-original-wordmark.svg'
import blog1 from './images/blog1.png'
import blog2 from './images/blog2.png'
import blog3 from './images/blog3.png'
import blog4 from './images/blog4.png'
import blog5 from './images/blog5.png'
import ai from './images/ukozza_ui.png'
import people from './images/Group 81.png'
import possibilityImg from './images/Feature Image.png';
import instagram from './images/instagram-1.svg';
import twitter from './images/TwitterXcopy.png';
import VehuImg from './images/vehus_w_bg.jpg';
import GideonImg from './images/gidBello.jpg';
import { Github, Globe, Globe2, Twitter } from 'react-bootstrap-icons'

export const brandName = "Ukozza";

export const brand = {

    name: brandName,
    logo: {
        src: logo,
        alt: "Our logo"
    },
    logoMain: {
        src: logoMain,
        alt: "Our logo"
    }
}

export const navLinks = [
    "Home", `What is ${brandName}`, "values", "Case Studies", "Library"
]

export const hero = {
    title1: "Delivering a rapid ",
    title2: "Customizable User Interface",
    text1: "Built with Next.js, powered by React, TypeScript, and Tailwind—this is UI customization redefined! Design user interfaces to match your exact vision without any coding experience. Simply download, edit a plain text file, and adjust colors, images, and text. Get ready to launch your site effortlessly, all backed by an innovative data abstraction technique.",
    text2: "Join the world to use industry standard web technologies",
    images: {
        leadImg: {
            src: ai,
            alt: "Image depicting facial recognition, an attribute of artificial intelligence"
        },
        subImg: {
            src: people,
            alt: "People"
        }
    }
}
export const colors = {
    darkMode: {
        primary: "#1a73e8",
        background: "#040C18",
        secondary: "#ff6d00",
        accent: "#34a853",
        gradientNormal: "linear-gradient(165deg, rgba(79,104,227,1) 0%, rgba(170,79,227,1) 100%)",
        gradientBright: "linear-gradient(165deg, rgba(228,211,24,1) 0%, rgba(255,255,0,1) 50%, rgba(255,109,0,1) 84%)",
        radialGradient: "radial-gradient(circle at 30% -100%, #042c54 25%, rgba(4, 44, 84, 1) 85%, rgba(27, 120, 222, 1) 100%)"
    },
    lightMode: {
        primary: "#1a73e8",
        background: "#040C18",
        secondary: "#ff6d00",
        accent: "#34a853",
        gradientNormal: "linear-gradient(165deg, rgba(79,104,227,1) 0%, rgba(170,79,227,1) 100%)",
        gradientBright: "linear-gradient(165deg, rgba(228,211,24,1) 0%, rgba(255,255,0,1) 50%, rgba(255,109,0,1) 84%)",
        radialGradient: "radial-gradient(circle at 30% -100%, #042c54 25%, rgba(4, 44, 84, 1) 85%, rgba(27, 120, 222, 1) 100%)"
    }
}

export const fonts = {
    style: "'Manrope', sans-serif",
    titleSize: "2rem",
    bodySize: "1rem",
    smallSize: "0.875rem"
}

export const technologies = [
    {
        src: html,
        alt: "HTML logo",
        info: "HTML is the foundation of Ukozza’s platform. It structures each page, defining the essential layout and content to ensure fast load times and an intuitive flow. Using clean, semantic HTML gives us a lightweight framework that enhances accessibility, search engine optimization (SEO), and overall platform efficiency."
    },
    {
        src: tailwind,
        alt: "Tailwind logo",
        info: "Tailwind CSS provides a modern, utility-first approach to styling. With it, we rapidly build and customize Ukozza’s interface with minimal CSS bloat. Tailwind’s responsive and scalable design framework ensures a consistent, visually appealing user experience across devices. The flexibility it offers means we can easily adapt the platform to changing design trends or client preferences."
    },
    {
        src: react,
        alt: "React logo",
        info: "React is the core library for building Ukozza’s user interface. Its component-based structure enables us to build reusable, efficient elements across the platform, making development faster and maintenance easier. React’s virtual DOM ensures that changes are handled efficiently, leading to a faster, smoother user experience."
    },
    {
        src: nextJs,
        alt: "Next.Js logo",
        info: "Next.js powers the backend of Ukozza’s platform, enabling server-side rendering (SSR) and static site generation (SSG). These features make our platform fast and SEO-friendly, delivering pre-rendered content to users with minimal delay. Next.js also gives us routing and API capabilities, which make it ideal for managing Ukozza’s high-performance requirements."
    },
    {
        src: redux,
        alt: "Redux logo",
        info: "Redux manages the global state of Ukozza’s platform. By centralizing the state, Redux ensures that data flows efficiently and predictably across the application, especially for complex interactions that require synchronized updates. It’s essential for creating a smooth and consistent experience, keeping user data and preferences accessible without unnecessary re-renders."
    },
    {
        src: typescript,
        alt: "Javascript Logo",
        info: "TypeScript provides type safety and more reliable code for our platform. By extending JavaScript with strong typing, TypeScript reduces bugs and improves code readability. This gives our developers confidence in building complex features, ultimately contributing to a smoother and more robust user experience on Ukozza."
    },
]
export const section1 = {
    lead: {
        title: "The possibilities are beyond your imagination",
        text: "Explore The Library"
    },
    items: [
        {
            title: `About ${brandName}`,
            text: "Ukozza is an innovative tech startup based in the heart of Kogi State, Nigeria. Operating fully remotely, our small, energetic team of four is set to disrupt the tech market with a groundbreaking solution: the world’s fastest platform for delivering customizable user interfaces, powered by"
        },
        {
            title: "Industry Standards",
            text: "Ukozza adheres to the latest industry standards, ensuring high performance, security, and scalability. Our platform is built on robust, professional-grade technologies that guarantee reliability and compliance with modern web development practices."
        },
        {
            title: "User Friendly",
            text: "We believe everyone should have the power to customize their digital presence. Ukozza’s platform empowers users to personalize websites without any coding knowledge. With simple, text-based editing, users can modify colors, images, and content to match their vision—quickly and effortlessly"
        },
        {
            title: "Modern Design",
            text: "Our platform is built on cutting-edge technology, using Next.js, React, and Tailwind to deliver a fast, visually appealing, and highly responsive experience. Ukozza embodies modern design and functionality, ensuring an attractive and seamless experience for end-users."
        },
        {
            title: "Developer Ready",
            text: "Ukozza is built with developers in mind, offering a structured, customizable framework that’s both powerful and flexible. Developers can easily extend functionality, integrate APIs, and modify the codebase to suit any project requirement, making it a valuable tool for both simple and complex projects."
        },
        {
            title: "Clear Documentation",
            text: "Our comprehensive, clear documentation guides users and developers alike, providing step-by-step instructions for setup, customization, and troubleshooting. This ensures a smooth experience, whether you're a beginner editing a few lines or a developer diving deep into advanced features."
        },
    ]
}
export const section2 = {
    lead: {
        title: "The Future is Now and You Just Need To Realize It. Step into Future Today & Make it Happen.",
        text: "Request Early to Get Started"
    },
    items: [
        {
            title: "Seamless Integration",
            text: "Effortlessly connect Ukozza with other platforms, tools, and APIs to create a unified and efficient workflow, saving time and boosting productivity."
        },
        {
            title: "Future-Proof",
            text: "Built for growth, Ukozza’s scalable architecture adapts as your needs evolve, ensuring long-term relevance and stability as technology advances."
        },
        {
            title: "Lightning Speed",
            text: "Optimized for performance, Ukozza delivers fast load times, enhancing user experience and engagement with a smooth, responsive interface."
        },
        {
            title: "Total Customization",
            text: "Enjoy complete control over your design, with options to personalize colors, layouts, and content to perfectly match your brand and vision."
        },
    ]
}

export const section3 = {
    title: "The possibilities are beyond your imagination",
    text1: "With Ukozza, the possibilities are truly beyond your imagination. Whether you're crafting a simple landing page or a complex, fully customized platform, our tools give you unmatched flexibility and creative freedom. Dive into a world where functionality meets creativity—bringing your boldest visions to life without the usual limitations. Build, personalize, and scale effortlessly as Ukozza adapts to your every need, empowering you to shape unique digital experiences that resonate with your audience.",
    text2: "Request Early Assess to Get Started",
    image: {
        src: possibilityImg,
        alt: "Possibility Image"
    }
}

export const section4 = [
    {
        title: ['Meet the Team', 'Hide']
    },
    {
        name: "D Vehu Alonge",
        image: VehuImg,
        job: "Software Engineer",
        about: "With a computer science degree and an experience using data structures plus an arsenal of modern technologies like React, Typescipt, Node, Python, and Java. Vehu is ready to jump on your next big idea.",
        network: [
            // Github 
            {
                link: "https://www.github.com/vehutech", icon: <Github />
            },
            // X | Twitter 
            {
                link: "https://www.x.com/vehutech", icon: <Twitter />
            },
            // Website
            {
                link: "https://vehutech.vercel.app", icon: <Globe2 />
            }
        ]
    },
    {
        name: "Gideon Bello",
        image: GideonImg,
        job: "Front-End Engineer",
        about: "He is a professional who is passionate about using technological innovations to solve human problems and make life easy for individuals, businesses and organizations. He has garnered experience in the use of HTML, CSS, JavaScript and currently learning React and Typescript",
        network: [
            // Github 
            {
                link: "https://www.github.com/gidbell", icon: <Github />
            },
            // X | Twitter 
            {
                link: "https://www.x.com/gidbell", icon: <Twitter />
            },
            // Website
            {
                link: "https://gidbell.vercel.app", icon: <Globe2 />
            }
        ]
    }
]

export const cta = {
    title: "Join the world to use industry standard web technologies.",
    text: "For Developers, business owners and just anyone that needs a website",
    btnText: "Get Started",
}
export const blog = {
    lead: {
        heading: "A lot is happening, We are blogging about it.",
    },
    readArticle: "Read Full Article",
    list: [
        {
            image: {
                src: blog1,
                alt: "image of artificial inteligence"
            },
            date: Date().substring(0, 15),
            title: "AI and the future of web dev. Let us explore!"
        },
        {
            image: {
                src: blog2,
                alt: "image of artificial inteligence"
            },
            date: Date().substring(0, 15),
            title: "How to handle data abstraction in web dev."
        },
        {
            image: {
                src: blog3,
                alt: "image of artificial inteligence"
            },
            date: Date().substring(0, 15),
            title: "Role of AI in web dev. Let us explore!"
        },
        {
            image: {
                src: blog4,
                alt: "image of artificial inteligence"
            },
            date: Date().substring(0, 15),
            title: "Becoming a decorated fron-end developer in 2025"
        },
        {
            image: {
                src: blog5,
                alt: "image of artificial inteligence"
            },
            date: Date().substring(0, 15),
            title: "The dark story of front end development"
        },
    ]
}
export const footer = {
    title: "Do you want to step into the future before others?",
    btnText: `Enroll at ${brandName}`,
    logo: {
        src: logo,
        alt: "Our logo"
    },
    address: "Remote, Kogi State, Nigeria, UKOZZA LIMITED",
    items: [
        {
            title: "Social Network",
            utility: [
                {
                    src: instagram,
                    alt: "Instagram logo",
                    link: "https://www.instagram.com/ukozza"
                },
                {
                    src: twitter,
                    alt: "Twitter logo",
                    link: "https://www.twitter.com/ukozza"
                }
            ]
        },
        {
            title: "Company",
            utility: [
                "Terms and Condition", "Privacy Policy", "Contact"
            ]
        },
        {
            title: "Get in touch",
            utility: [
                "+2348145256960", "+2347036497232", "ukozza@gmail.com"
            ]
        },
    ],
    copyRight: `${Date().substring(10, 15)} ${brandName}. All rights reserved.`
}
