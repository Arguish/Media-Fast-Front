import React from "react"
import { useNavigate } from "react-router-dom"
import { Button } from "@mui/material"

const AdminOptions = () => {
 const navigate = useNavigate()
    
    const enjoy = () => {
        navigate('/time')
    }

    const  work = () => {
        
    }

    return (
       <div>
        <Button variant="contained" size="medium" sx={{display: 'block', margin: 2, color: 'black', width: 200}} onClick= {enjoy} > USERS</Button>
         
         <Button variant="contained" size="medium" sx={{display: 'block', margin: 2 , color: 'black', width: 200}} onClick= {work} >MEDIA</Button> 
      
       <Button variant="contained" size="medium" sx={{display: 'block', margin: 2, color: 'black', width: 200}} onClick= {enjoy} > PLATFORMS</Button>
         
         <Button variant="contained" size="medium" sx={{display: 'block', margin: 2 , color: 'black', width: 200}} onClick= {work} >CATEGORIES</Button> 

       </div>
    )
}

export default AdminOptions