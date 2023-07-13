import { Snackbar, Alert } from '@mui/material';

const PopupInfo = ({
  message,
  isSnackbarOpen,
  setIsSnackbarOpen,
  snackbarSeverity,
  autoHideDuration = 3000,
  sx = {
    width: '100%',
    top: '10px',
    left: '50%',
    opacity: 0.7,
  },
}) => {
  return (
    <Snackbar
      open={isSnackbarOpen}
      autoHideDuration={autoHideDuration}
      onClose={() => setIsSnackbarOpen(false)}
    >
      <Alert
        onClose={() => setIsSnackbarOpen(false)}
        severity={snackbarSeverity}
        sx={sx}
      >
        {message}
      </Alert>
    </Snackbar>
  );
};

export default PopupInfo;
