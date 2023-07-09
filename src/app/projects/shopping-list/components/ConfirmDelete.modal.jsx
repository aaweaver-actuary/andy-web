import { Box, Button, Modal } from '@mui/material';

const ConfirmDelete = ({
  isConfirmDeleteOpen,
  setIsConfirmDeleteOpen,
  handleDelete,
  itemToDelete,
  lookupNameFromId,
}) => {
  return (
    <Modal
      open={isConfirmDeleteOpen}
      className=""
      onClose={() => setIsConfirmDeleteOpen(false)}
    >
      <Box className="bg-white p-10 rounded-md flex flex-col fixed top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]">
        <h2 className="text-2xl font-bold mb-5">Are you sure?</h2>
        <p>Do you want to delete {lookupNameFromId(itemToDelete)}?</p>
        <div className="flex flex-row mt-5">
          <Button
            variant="contained"
            onClick={() => setIsConfirmDeleteOpen(false)}
            className="bg-red-500 mr-5"
          >
            Cancel
          </Button>
          <Button
            variant="contained"
            onClick={() => handleDelete(itemToDelete)}
            className="bg-green-500"
          >
            Delete
          </Button>
        </div>
      </Box>
    </Modal>
  );
};

export default ConfirmDelete;
