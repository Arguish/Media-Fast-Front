import { useEffect, useState } from 'react'
import {getMedia} from '../../Services/mediaServices'
import { useNavigate } from 'react-router-dom'
import { Box, Grid, List, ListItem, ListItemButton, Typography } from '@mui/material'

const AllMedia = () =>{
    const [media, setMedia] = useState([])
    const navigate = useNavigate()
    
    
    const goToMediaCard = (mediaId) => {
      navigate(`/media/${mediaId}`)
    }
    
     useEffect(() => {
        getAllMedia()
      }, [])
    
      const getAllMedia = async () => {
        const result = await getMedia()
        setMedia(result)
    
      }
    
     const displayMedia = () => {
        if (media) {
          return media.map((film) => {
            return (
              <div key={film.id}>
                
                    
                        <List  >
                        <ListItem disablePadding>
                        <ListItemButton sx={{  marginTop: 0.5 , backgroundColor: '#ee9e09', border: '0.10px solid black', color: 'black'}} onClick={() => goToMediaCard(film.id)} >
                          <Grid container spacing={2} item xs={6} sx={{marginLeft: 2}}>
                                <Typography variant="caption" align="right">{film.id}</Typography>
                                </Grid>
                            <Grid container spacing={2} alignItems="center">
                                <Grid item xs={6}>
                                <Typography variant="subtitle1">{film.title}</Typography>
                                </Grid>
                                <Grid item xs={6}>
                                <Typography variant="caption" align="left">{film.type}</Typography>
    
                                </Grid> 
                                
                            </Grid>
                        </ListItemButton>
                        </ListItem>
                        </List>
                   
              </div>
            )
          })
        }
    }
      
    
      return (
      <div>
      <Box sx={{ width: 700, bgcolor: 'background.paper', marginTop: 3 }}><nav aria-label="main mailbox folders">{displayMedia()}</nav></Box>
      </div>
      )
}

export default AllMedia