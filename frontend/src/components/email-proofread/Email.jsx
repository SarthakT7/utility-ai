import ContentCopyIcon from '@mui/icons-material/ContentCopy';
import SendIcon from '@mui/icons-material/Send';
import { Box, Button, IconButton, TextField } from '@mui/material';
import React, { useState } from 'react';

const Email = () => {

  const [inputText, setInputText] = useState('');
  const [outputText, setOutputText] = useState('');

  const handleInputChange = (event) => {
    setInputText(event.target.value);
  }
  const handleClick = () => {
    const output = inputText.toUpperCase();
    setOutputText(output);
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

      <Button onClick={handleClick} variant="contained" sx={{ height: '30px', margin: 'auto', padding: 'auto' }} endIcon={<SendIcon />}>
        Send
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
    </Box>
  )
}

export default Email
