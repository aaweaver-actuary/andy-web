import AccordionPart from '@/app/components/AccordionPart.component';
import ProjectAccordionPart from './ProjectAccordionPart.component';

const ProjectAccordion = ({ title, dataType, data }) => {
  return (
    <div className="mx-[20px] hover:scale-110">
      <AccordionPart title={title}>
        {dataType.map((type, index) => {
          console.log('title:', title);
          console.log('dataType:', dataType);
          console.log('data:', data);

          console.log('type:', type);
          console.log('data:', data);
          console.log('index:', index);
          console.log('data[type]:', data[type]);
          console.log('data[type].title:', data[type].title);
          console.log('data[type].list:', data[type].list);
          return (
            <ProjectAccordionPart
              key={index}
              title={data[type].title}
              data={data[type].list}
            />
          );
        })}
      </AccordionPart>
    </div>
  );
};

export default ProjectAccordion;
