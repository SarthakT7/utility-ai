import ContentCopyIcon from '@mui/icons-material/ContentCopy';
import SendIcon from '@mui/icons-material/Send';
import { Box, Button, CircularProgress, IconButton, Snackbar, TextField } from '@mui/material';
import React, { useState } from 'react';
import { postEmailProofRead } from '../../api';

const Email = () => {

  const [inputText, setInputText] = useState('');
  const [outputText, setOutputText] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const [snackbarState, setSnackbarState] = useState({
    open: false,
    vertical: 'bottom',
    horizontal: 'center',
  });

  const handleSnackbarClose = () => {
    setSnackbarState({ ...snackbarState, open: false });
  }
  const { vertical, horizontal, open } = snackbarState;

  const handleInputChange = (event) => {
    setInputText(event.target.value);
  }

  const handleClick = async () => {
    setLoading(true);
    setError(null);
    try {
      const result = await postEmailProofRead({ input: inputText });
      setOutputText(result);
    } catch (error) {
      setSnackbarState({ ...snackbarState, open: true });
      setError('An error occurred while proofreading the email.');
    } finally {
      setLoading(false);
    }
  }

  const handleCopyClick = () => {
    navigator.clipboard.writeText(outputText);
  }
  return (


    <Box sx={{ display: 'flex', width: '100%', justifyContent: 'space-between' }}>
      <Box sx={{ width: '50%', paddingRight: 1 }}>

        <div>
          <TextField
            label="Email"
            onChange={handleInputChange}
            fullWidth={true}
            multiline
            rows={25}
            placeholder='Start typing..'
          />
        </div>
      </Box>

      <Button
        onClick={handleClick}
        variant="contained"
        sx={{
          height: '30px',
          margin: 'auto',
          padding: '0 16px', // Adjusted padding for better spacing
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        }}
        endIcon={loading ? <CircularProgress size={20} color="inherit" /> : <SendIcon />}
        disabled={loading} // Disable the button while loading
      >
        {loading ? 'Sending...' : 'Send'}
      </Button>
      <Box sx={{ width: '50%', paddingLeft: 1, paddingRight: 1 }}>

        <div>
          <TextField
            multiline
            fullWidth={true}
            value={outputText}
            rows={25}
            InputProps={{ readOnly: true }}

          />
          <IconButton
            sx={{ position: 'absolute', top: 32, right: 144 }}
            onClick={handleCopyClick}
            color="primary"
          >
            <ContentCopyIcon />
          </IconButton>

        </div>
      </Box>

      {snackbarState.open ?
        <Snackbar
          anchorOrigin={{ vertical, horizontal }}
          open={open}
          message={error}
          autoHideDuration={3000}
          onClose={handleSnackbarClose}
        /> : ''}

    </Box>
  )
}

export default Email
