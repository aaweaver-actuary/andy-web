'use client';

import Layout from '../components/Layout.component';
import AccordionPart from '../components/AccordionPart.component';
import ProjectAccordion from './components/ProjectAccordion.component';

import projectsData from '@/app/projects/projects.data';

const ProjectsPage = () => {
  // const projectsExpanded = useStore(
  //   (state) => state.projectsExpanded,
  // );
  // const setProjectsExpanded = useStore(
  //   (state) => state.setProjectsExpanded,
  // );

  return (
    <Layout>
      <h2 className="text-3xl top-1 ubuntu px-7">.projects</h2>

      <div className="w-[vw100] grid grid-flow-row lg:grid-cols-3 mt-3">
        <ProjectAccordion
          title={'.react-projects'}
          dataType={['.simple-react', '.complex-react']}
          data={projectsData['.react-projects']}
        />
        <ProjectAccordion
          title={'.typescript-projects'}
          dataType={['.simple-ts', '.complex-ts']}
          data={projectsData['.typescript-projects']}
        />
      </div>
    </Layout>
  );
};

export default ProjectsPage;
