import AccordionPart from '@/app/components/AccordionPart.component';
import ProjectItem from '@/app/projects/components/ProjectItem.component';

const nullData = [];
const ProjectAccordionPart = ({ title, data = nullData }) => {
  return (
    <AccordionPart title={title}>
      <ul>
        {data.map((project, index) => (
          <ProjectItem key={index} project={project.name} link={project.url} />
        ))}
      </ul>
    </AccordionPart>
  );
};

export default ProjectAccordionPart;
