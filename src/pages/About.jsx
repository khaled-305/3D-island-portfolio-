import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";

import { CTA } from "../components";
import { experiences, skills } from "../constants";

import "react-vertical-timeline-component/style.min.css";

const About = () => {
  return (
    <section className='max-container'>
      <h1 className='head-text'>
        Hello, my name is{" "}
        <span className='blue-gradient_text font-semibold drop-shadow'>
          {" "}
          Chikeziem
        </span>{" "}
        👋
      </h1>

      <div className='mt-5 flex flex-col gap-3 text-slate-500'>
        <p>
          I'm a fullstack software engineer, with a track record of transforming complex systems and scaling cloud infrastructure. I architect end-to-end solutions using modern tech stacks, having led engineering teams through critical technical initiatives.
        </p>
      </div>

      <div className='py-10 flex flex-col'>
        <h3 className='subhead-text mb-3'>My Skills</h3>

        <p className="mb-3">
          Frontend Development <br />

          - Modern JavaScript/TypeScript ecosystems with deep expertise in React.js, Vue.js and Next.js. <br />
          - Built responsive, accessible applications using HTML5/CSS3 with a focus on performance optimization. <br />
          - State management at scale using Redux, Zustand and Recoil, enabling real-time collaboration features.
        </p>
        <p className="mb-3">
          Backend & Infrastructure <br />

          - Node.js/Express.js microservices handling high-throughput API requests. <br />
          - Database architecture across PostgreSQL, SQL, MySQL, MongoDB, and Redis for optimal data modeling. <br />
          - Cloud infrastructure on AWS, and Google Cloud, with containerized deployments using Docker. <br />
          -  API design and implementation (REST, GraphQL, GROQ) with comprehensive test coverage using Jest.
        </p>
        <p className="mb-3">
          Additional Technologies <br />

          - Cross-platform mobile app development using React Native. <br />
          - Python, Django, and FastAPI for data processing and automation workflows. <br />
          - Headless CMS architecture with WordPress, and Sanity. <br />
          - Firebase real-time databases and authentication. <br />
          - PHP backend services
        </p>
        <p className="mb-3">
          Development Practices <br />

          - Git workflow optimization and CI/CD pipeline implementation. <br />
          - Agile methodologies with focus on iterative development and continuous improvement. <br />
          - Performance monitoring and optimization across the full stack
        </p>

        <div className='mt-16 flex flex-wrap gap-12'>
          {skills.map((skill) => (
            <div className='block-container w-20 h-20' key={skill.name}>
              <div className='btn-back rounded-xl' />
              <div className='btn-front rounded-xl flex justify-center items-center'>
                <img
                  src={skill.imageUrl}
                  alt={skill.name}
                  className='w-1/2 h-1/2 object-contain'
                />
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className='py-16'>
        <h3 className='subhead-text'>Work Experience.</h3>
        <div className='mt-5 flex flex-col gap-3 text-slate-500'>
          <p>
            I've worked with all sorts of companies, leveling up my skills and
            teaming up with smart people. Here's the rundown:
          </p>
        </div>

        <div className='mt-12 flex'>
          <VerticalTimeline>
            {experiences.map((experience, index) => (
              <VerticalTimelineElement
                key={experience.company_name}
                date={experience.date}
                iconStyle={{ background: experience.iconBg }}
                icon={
                  <div className='flex justify-center items-center w-full h-full'>
                    <img
                      src={experience.icon}
                      alt={experience.company_name}
                      className='w-[60%] h-[60%] object-contain'
                    />
                  </div>
                }
                contentStyle={{
                  borderBottom: "8px",
                  borderStyle: "solid",
                  borderBottomColor: experience.iconBg,
                  boxShadow: "none",
                }}
              >
                <div>
                  <h3 className='text-black text-xl font-poppins font-semibold'>
                    {experience.title}
                  </h3>
                  <p
                    className='text-black-500 font-medium text-base'
                    style={{ margin: 0 }}
                  >
                    {experience.company_name}
                  </p>
                </div>

                <ul className='my-5 list-disc ml-5 space-y-2'>
                  {experience.points.map((point, index) => (
                    <li
                      key={`experience-point-${index}`}
                      className='text-black-500/50 font-normal pl-1 text-sm'
                    >
                      {point}
                    </li>
                  ))}
                </ul>
              </VerticalTimelineElement>
            ))}
          </VerticalTimeline>
        </div>
      </div>

      <hr className='border-slate-200' />

      <CTA />
    </section>
  );
};

export default About;
