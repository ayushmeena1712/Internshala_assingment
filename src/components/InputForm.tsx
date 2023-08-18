import { TextField,Button,Typography } from "@mui/material";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Inputform(){
    const navigate = useNavigate();
    const [name, setName] = useState("");
    const [phoneNumber, setPhoneNumber] = useState("");
    const [email, setEmail] = useState("");

    const handleNameChange = (event: React.ChangeEvent<HTMLInputElement>) => setName(event.target.value)
    const handlePhoneNumberChange = (event: React.ChangeEvent<HTMLInputElement>) => setPhoneNumber(event.target.value)
    const handleEmailChange = (event: React.ChangeEvent<HTMLInputElement>) => setEmail(event.target.value)

    const handleOnSave = () => {
        if(name.length > 0 && phoneNumber.length === 10 && email.includes("@")){
            localStorage.setItem("name", name);
            localStorage.setItem("phoneNumber", phoneNumber);
            localStorage.setItem("email", email);
            navigate("/page2");
        }else{
            alert('Enter valid inputs !');
        }
    }

    return(
        <div style={{display:"flex",justifyContent:"center",marginTop:"100px",flexDirection:"column",alignItems:"center",gap:"15px"}}>
            <Typography variant="h6">Input Form</Typography>
            <TextField onChange={handleNameChange} type="text" variant="outlined" label="Name"></TextField>
            <TextField onChange={handlePhoneNumberChange} variant="outlined" label="Phone Number"></TextField>
            <TextField onChange={handleEmailChange} type="email" variant="outlined" label="Email"></TextField>
            <Button onClick={handleOnSave} variant="contained">Save</Button>
        </div>
    )
}