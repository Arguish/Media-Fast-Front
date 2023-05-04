import { Button } from "@mui/material"
import { useNavigate } from "react-router-dom"
import React from "react"

const AdminPage =() => {
    const navigate = useNavigate()
    
    const enjoy = () => {
        navigate('/time')
    }

    const  work = () => {
        navigate('/admin/options')
    }

    return (
       <div>
        <Button variant="contained" size="medium" sx={{display: 'block', margin: 2, color: 'black', width: 200}} onClick= {enjoy} > ENJOY</Button>
         
         <Button variant="contained" size="medium" sx={{display: 'block', margin: 2 , color: 'black', width: 200}} onClick= {work} >WORK</Button> 
      

       </div>
    )

    } 

export default AdminPage

