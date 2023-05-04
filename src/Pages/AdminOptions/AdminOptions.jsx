import React from "react"
import { useNavigate } from "react-router-dom"
import { Button } from "@mui/material"

const AdminOptions = () => {
 const navigate = useNavigate()
    
    const goToAllUsers = () => {
        navigate('/allusers')
    }

    const  work = () => {
        
    }

    return (
       <div>
        <Button variant="contained" size="medium" sx={{display: 'block', margin: 2, color: 'black', width: 200}} onClick={goToAllUsers} > USERS</Button>
         
         <Button variant="contained" size="medium" sx={{display: 'block', margin: 2 , color: 'black', width: 200}}  >MEDIA</Button> 
      
       <Button variant="contained" size="medium" sx={{display: 'block', margin: 2, color: 'black', width: 200}}  > PLATFORMS</Button>
         
         <Button variant="contained" size="medium" sx={{display: 'block', margin: 2 , color: 'black', width: 200}}  >CATEGORIES</Button> 

       </div>
    )
}

export default AdminOptions