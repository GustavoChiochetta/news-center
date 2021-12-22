import { Box, Typography, Modal, Button } from '@mui/material';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};

const ConfirmationModal = ({
  open,
  onConfirm,
  onClose,
  titulo,
  descricao
}) => {

  return (
    <Modal
      open={open}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      <Box sx={style}>
        <Typography id="modal-modal-title" variant="h6" component="h2">
          {titulo}
        </Typography>
        <Typography id="modal-modal-description" sx={{ mt: 2 }}>
          {descricao}
        </Typography>
        <Button onClick={onConfirm}>Sim!</Button>
        <Button onClick={onClose}>Não!</Button>
      </Box>
    </Modal>
  );
}

export default ConfirmationModal;