import ContentCopyIcon from '@mui/icons-material/ContentCopy';
import SendIcon from '@mui/icons-material/Send';
import { Box, Button, CircularProgress, IconButton, Snackbar, TextField } from '@mui/material';
import React, { useState } from 'react';
import { postCheckGrammar } from '../../api';

const CheckGrammar = () => {
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
      const result = await postCheckGrammar({ input: inputText });
      setOutputText(result);
    } catch (error) {
      setSnackbarState({ ...snackbarState, open: true });
      setError('An error occurred while checking and enhancing grammar.');
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
          label="Enter your paragraph"
          onChange={handleInputChange}
          fullWidth
          multiline
          rows={25}
          placeholder='Your paragraph..'
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
          marginLeft: { xs: 0, md: 2 }, // Margin between button and right side on medium screens and up
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
          sx={{ position: 'absolute', top: 16, right: 16 }} // Adjusted right position for better alignment
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

export default CheckGrammar;
