import { useEffect, useState } from "react"
import {getUser} from '../../Services/userServices'
import Box from '@mui/material/Box';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import {  Typography } from "@mui/material";
import Grid from "@mui/material/Grid";
import ListItemButton from "@mui/material/ListItemButton";

const AllUsers = () => {
const [users, setUsers] = useState([])

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
        return (
          <div key={user.id}>
            <Box sx={{ width: 700, bgcolor: 'background.paper', marginTop: 2 }}>
                <nav aria-label="main mailbox folders">
                    <List>
                    <ListItem disablePadding>
                    <ListItemButton>
                        <Grid container spacing={2} alignItems="center">
                            <Grid item xs={6}>
                            <Typography variant="subtitle1">{user.nickname}</Typography>
                            </Grid>
                            <Grid item xs={6}>
                            <Typography variant="caption" align="right">{user.id}</Typography>
                            </Grid>
                        </Grid>
                    </ListItemButton>
                    </ListItem>
                    </List>
                </nav>
            </Box>
          </div>
        )
      })
    }
}
  

  return (
  <div>
  {displayUsers()}
  </div>
  )
}



export default AllUsers



