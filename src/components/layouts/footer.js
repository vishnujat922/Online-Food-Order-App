import { Box, IconButton, Typography } from '@mui/material'
import YouTubeIcon from '@mui/icons-material/YouTube';
import React from 'react'
import InstagramIcon from '@mui/icons-material/Instagram';
import GitHubIcon from '@mui/icons-material/GitHub';
import TwitterIcon from '@mui/icons-material/Twitter';
import FacebookIcon from '@mui/icons-material/Facebook';
const Footer = () => {
  const handleYouTubeClick = () => {
    window.open('https://www.youtube.com');
  };
  const handleInstagramClick = () => {
    window.open('https://www.instagram.com');
  };

  const handleGitHubClick = () => {
  window.open('https://www.github.com')
  };

  const handleTwitterClick = () => {
  window.open('https://www.twitter.com')
  };

  const handleFacebookClick = () => {
    window.open('https://www.facebok.com')
  };
  return (
    <>
      <Box sx={{ textAlign: "center", background: '#1a1a19', color: '#ffff', padding: 3 }}>
        <Box sx={{
          my: 3, "& svg": {
            fontSize: '60px',
            cursor: 'pointer',
            mr: 2,
            color:'white'
          },
          "& svg:hover": {
            color: 'goldenrod',
            transform: 'translateX(5px)',
            transition: 'all 400ms'
          }
        }}>
        {/* Social Media Icon Buttons */}
        <IconButton onClick={handleYouTubeClick}>
          <YouTubeIcon />
        </IconButton>
        <IconButton onClick={handleInstagramClick}>
          <InstagramIcon />
        </IconButton>
        <IconButton onClick={handleGitHubClick}>
          <GitHubIcon />
        </IconButton>
        <IconButton onClick={handleTwitterClick}>
          <TwitterIcon />
        </IconButton>
        <IconButton onClick={handleFacebookClick}>
          <FacebookIcon />
        </IconButton>
      </Box>
        <Typography
          variant="h5"
          sx={{
            "@media (max-width:600px)": {
              fontSize: "1rem",
            },
          }}
        >
          All Rights Reserved &copy; My First Food Order App
        </Typography>

      </Box>
    </>
  )
}

export default Footer 