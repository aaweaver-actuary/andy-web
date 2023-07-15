import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Divider,
} from '@mui/material';

// import useStore from '@/app/store';

const AccordionPart = ({ title, children }) => {
  // const isExpanded = useStore((state) =>
  //   state.projectsExpanded.includes(title),
  // );

  // const addProjectsExpanded = useStore(
  //   (state) => state.addProjectsExpanded,
  // );

  // const removeProjectsExpanded = useStore(
  //   (state) => state.removeProjectsExpanded,
  // );

  // const handleClick = (title) => {
  //   if (isExpanded) {
  //     removeProjectsExpanded(title);
  //   } else {
  //     addProjectsExpanded(title);
  //   }
  // console.log(useStore.getState());
  // };

  return (
    <Accordion
      onChange={() => console.log('change') /*() => handleClick(title)*/}
    >
      <AccordionSummary className="ubuntu px-4 py-0 my-0">
        {title}
      </AccordionSummary>
      <Divider />

      <AccordionDetails>{children}</AccordionDetails>
    </Accordion>
  );
};

export default AccordionPart;
