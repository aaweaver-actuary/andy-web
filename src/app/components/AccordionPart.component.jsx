import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Divider,
} from '@mui/material';

const AccordionPart = ({ title, children }) => {
  return (
    <Accordion>
      <AccordionSummary className="ubuntu px-4 py-0 my-0">
        {title}
      </AccordionSummary>
      <Divider />

      <AccordionDetails>{children}</AccordionDetails>
    </Accordion>
  );
};

export default AccordionPart;
