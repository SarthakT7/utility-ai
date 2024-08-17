
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
  };

  const { vertical, horizontal, open } = snackbarState;

  const handleInputChange = (event) => {
    setInputText(event.target.value);
  };

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
  };

  const handleCopyClick = () => {
    navigator.clipboard.writeText(outputText);
  };

  return (
    <Box sx={{ 
      display: 'flex', 
      flexDirection: { xs: 'column', md: 'row' }, // Stack vertically on small screens, horizontally on larger screens
      width: '100%',
      gap: 2, // Space between elements
    }}>
      <Box sx={{ 
        width: { xs: '100%', md: '50%' }, 
        paddingRight: { md: 1 }, 
        marginBottom: { xs: 2, md: 0 } 
      }}>
        <TextField
          label="Email"
          onChange={handleInputChange}
          fullWidth
          multiline
          rows={25}
          placeholder='Start typing..'
          variant="outlined"
        />
      </Box>

      <Button
        onClick={handleClick}
        variant="contained"
        sx={{
          height: '30px',
          alignSelf: 'center',
          padding: '0 16px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          margin: { xs: 'auto', md: 0 } // Center button on small screens
        }}
        endIcon={loading ? <CircularProgress size={20} color="inherit" /> : <SendIcon />}
        disabled={loading}
      >
        {loading ? 'Sending...' : 'Send'}
      </Button>

      <Box sx={{ 
        width: { xs: '100%', md: '50%' }, 
        paddingLeft: { md: 1 }, 
        position: 'relative' 
      }}>
        <TextField
          multiline
          fullWidth
          value={outputText}
          rows={25}
          InputProps={{ readOnly: true }}
          variant="outlined"
        />
        <IconButton
          sx={{ 
            position: 'absolute', 
            top: 16, 
            right: 16 
          }}
          onClick={handleCopyClick}
          color="primary"
        >
          <ContentCopyIcon />
        </IconButton>
      </Box>

      {snackbarState.open &&
        <Snackbar
          anchorOrigin={{ vertical, horizontal }}
          open={open}
          message={error}
          autoHideDuration={3000}
          onClose={handleSnackbarClose}
        />
      }
    </Box>
  );
};

export default Email;