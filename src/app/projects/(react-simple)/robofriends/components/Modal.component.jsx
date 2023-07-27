import { Modal as MuiModal } from '@mui/material';

const Modal = ({ handleExit, children }) => {
  return (
    <MuiModal
      open={true}
      onClose={handleExit}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      <div className="w-[65vw] h-[80vh] fixed top-[50%] left-[30%] translate-x-[-25%] translate-y-[-50%] z-[999] rounded-lg">
        <div className="bg-white w-full h-full">{children}</div>
      </div>
    </MuiModal>
  );
};

export default Modal;
