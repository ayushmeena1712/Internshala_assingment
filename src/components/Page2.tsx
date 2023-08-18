import { useNavigate } from "react-router-dom";
import Component1 from "./Component1";
import Component2 from "./Component2";
import { Button } from "@mui/material";
export default function Page2() {
    const navigate = useNavigate();
    // Checking whether the user entered correct details or not.
    if (localStorage.getItem("name") === null || localStorage.getItem("phoneNumber") === null || localStorage.getItem("email") === null) {
        return (
            <div style={{ display: "flex", justifyContent: "center", marginTop: "100px" }}>
                <Button variant="outlined" color="error" onClick={() => { navigate("/") }}>First enter details !</Button>
            </div>
        )
    } else {
        return (
            <div style={{ display: "flex", justifyContent: "center", flexDirection: "column" }}>
                <Component1></Component1>
                <Component2></Component2>
            </div>
        )
    }
}

