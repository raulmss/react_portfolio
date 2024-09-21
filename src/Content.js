// import images
import Hero_person from "./assets/images/Hero/Raul_Hero.png";

import spring from "./assets/images/Skills/spring.png";
import reactjs from "./assets/images/Skills/react.png";
import java from "./assets/images/Skills/java.png";
import mysql from "./assets/images/Skills/MySQL.png";
import postgresql from "./assets/images/Skills/PostgresSQL.png";
import javascript from "./assets/images/Skills/JavaScript.png";
import postman from "./assets/images/Skills/Postman.png";
import playwrite from "./assets/images/Skills/Playwrite.png";

import ufrn from "./assets/images/Services/UFRN.png";
import miu from "./assets/images/Services/miu.png";

import project1 from "./assets/images/projects/img1.png";
import project2 from "./assets/images/projects/img2.png";
import project3 from "./assets/images/projects/img3.png";
import person_project from "./assets/images/projects/person.png";

import avatar1 from "./assets/images/Testimonials/avatar1.png";
import avatar2 from "./assets/images/Testimonials/avatar2.png";
import avatar3 from "./assets/images/Testimonials/avatar3.png";
import avatar4 from "./assets/images/Testimonials/avatar4.png";

import Hireme_person from "./assets/images/Hireme/person.png";
import Hireme_person2 from "./assets/images/Hireme/person2.png";

// import icons from react-icons
import { GrMail } from "react-icons/gr";
import { MdArrowForward, MdCall } from "react-icons/md";
import { BsLinkedin } from "react-icons/bs";
import { TbSmartHome } from "react-icons/tb";
import { BiUser } from "react-icons/bi";
import { RiMapPinTimeLine } from "react-icons/ri";
import { MdOutlinePermContactCalendar, MdBook } from "react-icons/md";

export const content = {
  nav: [
    {
      link: "#home",
      icon: TbSmartHome,
    },
    {
      link: "#skills",
      icon: BiUser,
    },
    {
      link: "#experiences",
      icon: RiMapPinTimeLine,
    },
    {
      link: "#education",
      icon: MdBook,
    },
    {
      link: "#contact",
      icon: MdOutlinePermContactCalendar,
    },
  ],
  hero: {
    title: "Software Engineer",
    firstName: "RAUL",
    LastName: "SOUTO",
    btnText: "Hire Me",
    image: Hero_person,
    hero_content: [
      {
        count: "2+",
        text: "Years of Experience in Software Engineering",
      },
      {
        count: "3",
        text: "Domains of expertise: EdTech, Public Administration, and LegalTech. ",
      },
    ],
  },
  skills: {
    title: "Skills",
    subtitle: "MY TOP SKILLS",
    skills_content: [
      {
        name: "Java",
        para: "OOP Development.",
        logo: java,
      },
      {
        name: "JavaScript",
        para: "Test Scripting (on Postman and Playwrite).",
        logo: javascript,
      },
      {
        name: "Spring Boot",
        para: "Back-end Development.",
        logo: spring,
      },
      {
        name: "React js",
        para: "Front-end development.",
        logo: reactjs,
      },
      {
        name: "MySQL",
        para: "Database Management.",
        logo: mysql,
      },
      {
        name: "PostgreSQL",
        para: "Database Management.",
        logo: postgresql,
      },
      {
        name: "Postman",
        para: "API Automation Testing.",
        logo: postman,
      },
      {
        name: "Playwrite",
        para: "API, Regression, End-to-End, Dynamic Content and more.",
        logo: playwrite,
      },
    ],
    icon: MdArrowForward,
  },
  education: {
    title: "Education",
    subtitle: "",
    service_content: [
      {
        title: "Bachelor's in Information Technology",
        para: "Feb/2018 - July/2022",
        logo: ufrn,
      },
      {
        title: "Master's in Computer Science",
        para: "Aug/2023 - April/2026",
        logo: miu,
      },
    ],
  },
  Projects: {
    title: "Projects",
    subtitle: "MY CREATION",
    image: person_project,
    project_content: [
      {
        title: "Gym Website",
        image: project1,
      },
      {
        title: "Social Media web",
        image: project2,
      },
      {
        title: "Creative Website",
        image: project3,
      },
    ],
  },
  Testimonials: {
    title: "Testimonials",
    subtitle: "MY CLIENT REVIEWS",
    testimonials_content: [
      {
        review:
          "“In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstra”",
        img: avatar1,
        name: "JOHN DOE",
      },
      {
        review:
          "“In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstra”",
        img: avatar2,
        name: "Tom Alex",
      },
      {
        review:
          "“In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstra”",
        img: avatar3,
        name: "Johnny",
      },
      {
        review:
          "“In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstra”",
        img: avatar4,
        name: "ROBBIN",
      },
    ],
  },
  Hireme: {
    title: "Hire Me",
    subtitle: "FOR YOUR PROJECTS",
    image1: Hireme_person,
    image2: Hireme_person2,
    para: "In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document elying on mean",
    btnText: "Hire Me",
  },
  Contact: {
    title: "Contect Me",
    subtitle: "GET IN TOUCH",
    social_media: [
      {
        text: "raul.soutos96@gmail.com",
        icon: GrMail,
        link: "mailto:raul.soutos96@gmail.com",
      },
      {
        text: "(641) 233-9071",
        icon: MdCall,
        link: "https://wa.me/16412339071",
      },
      {
        text: "linkedin",
        icon: BsLinkedin,
        link: "https://www.linkedin.com/in/raul-souto/",
      },
    ],
  },
  Footer: {
    text: "All © Copy Right Reserved 2022",
  },
};
