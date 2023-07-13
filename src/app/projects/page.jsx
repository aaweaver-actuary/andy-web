'use client';

import Layout from '../components/Layout.component';
import AccordionPart from '../components/AccordionPart.component';
import ProjectItem from './components/ProjectItem.component';

import projectsData from './projects.data';

const ProjectsPage = () => {
  return (
    <Layout>
      <h2 className="text-3xl top-1 ubuntu px-7">
        .projects
      </h2>
      <div className="flex flex-row mx-5 mt-3">
        <AccordionPart title=".react-projects">
          <AccordionPart title=".simple-react-projects">
            <ul>
              {projectsData.simple_react.map(
                (project, index) => (
                  <ProjectItem
                    key={index}
                    project={project.name}
                    link={project.url}
                  />
                ),
              )}
            </ul>
          </AccordionPart>
          <AccordionPart title=".complex-react-projects"></AccordionPart>
        </AccordionPart>
      </div>
    </Layout>
  );
};

export default ProjectsPage;
