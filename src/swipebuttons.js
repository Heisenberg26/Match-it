import React from 'react'
import ReplayIcon from '@mui/icons-material/Replay';
import CloseRoundedIcon from '@mui/icons-material/CloseRounded';
import StarBorderIcon from '@mui/icons-material/StarBorder';
import FavoriteBorderOutlinedIcon from '@mui/icons-material/FavoriteBorderOutlined';
import FlashOnOutlinedIcon from '@mui/icons-material/FlashOnOutlined';
import EmojiEmotionsOutlinedIcon from '@mui/icons-material/EmojiEmotionsOutlined';
import { IconButton } from '@mui/material';
import "./swipebutttons.css"
function Swipebuttons() {
  return (
    <div className='swipeButtons'>
        <IconButton className='swipeButtons__ReplayIcon'>
            <ReplayIcon fontSize='large'/>
        </IconButton>
        <IconButton className='swipeButtons__CloseRoundedIcon'>
            <CloseRoundedIcon fontSize='large'/>
        </IconButton>
      
    </div>
  )
}

export default Swipebuttons
