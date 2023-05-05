import { useEffect, useState } from "react"
import {getUser} from '../../Services/userServices'
import Box from '@mui/material/Box';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import {  Typography } from "@mui/material";
import Grid from "@mui/material/Grid";
import ListItemButton from "@mui/material/ListItemButton";
import { useNavigate } from "react-router-dom";

const AllUsers = () => {
const [users, setUsers] = useState([])
const navigate = useNavigate()


const goToUserCard = (userId) => {
  navigate(`/user/${userId}`)
}

 useEffect(() => {
    getAllUsers()
  }, [])

  const getAllUsers = async () => {
    const result = await getUser()
    setUsers(result)

  }

 const displayUsers = () => {
    if (users) {
      return users.map((user) => {
        console.log(user)
        return (
          <div key={user.id}>
            
                
                    <List  >
                    <ListItem disablePadding>
                    <ListItemButton sx={{  marginTop: 0.5 , backgroundColor: '#ee9e09', border: '0.10px solid black', color: 'black'}} onClick={() => goToUserCard(user.id)} >
                      <Grid container spacing={2} item xs={6} sx={{marginLeft: 2}}>
                            <Typography variant="caption" align="right">{user.id}</Typography>
                            </Grid>
                        <Grid container spacing={2} alignItems="center">
                            <Grid item xs={6}>
                            <Typography variant="subtitle1">{user.nickname}</Typography>
                            </Grid>
                            {user.private_info  ? 
                            <Grid item xs={6}>
                            <Typography variant="caption" align="left">{user.private_info.email}</Typography>

                            </Grid> : '' }
                            
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
  <Box sx={{ width: 700, bgcolor: 'background.paper', marginTop: 3 }}><nav aria-label="main mailbox folders">{displayUsers()}</nav></Box>
  </div>
  )
}



export default AllUsers



