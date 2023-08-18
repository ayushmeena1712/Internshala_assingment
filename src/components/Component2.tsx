import { Box, Checkbox, FormControlLabel } from "@mui/material";
import { useState } from "react";
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
const data = [
    {
        id: 1,
        department: "customer_service",
        sub_departments: [
            "support",
            "customer_success"
        ]
    },
    {
        id: 2,
        department: "design",
        sub_departments: [
            "graphic_design",
            "product_design",
            "web_design"
        ]
    }
];
export default function Component2() {
    return (
        <div style={{ display: "flex", justifyContent: "center" }}>
            <div style={{ display: "flex", margin: "100px", flexDirection: "column" }}>
                <Department1></Department1>
                <Department2></Department2>
            </div>
        </div>
    );
}
function Department1() {
    const [checked, setChecked] = useState([false, false]);
    const [open, setOpen] = useState(false);
    const handleOpen = () => setOpen(!open);
    const handleCheckbox = (event: React.ChangeEvent<HTMLInputElement>) => setChecked([event.target.checked, event.target.checked])
    const handleChange1 = (event: React.ChangeEvent<HTMLInputElement>) => setChecked([event.target.checked, checked[1]])
    const handleChange2 = (event: React.ChangeEvent<HTMLInputElement>) => setChecked([checked[0], event.target.checked])
    const subDep1 = (
        <Box sx={{ display: 'flex', flexDirection: 'column', ml: 3 }}>
            {data[0].sub_departments.map((subDep, index) => (
                <FormControlLabel
                    key={index}
                    label={subDep.split('_').join(" ").toUpperCase()}
                    control={<Checkbox checked={checked[index]} onChange={index === 0 ? handleChange1 : handleChange2} />}
                />
            ))}
        </Box>
    );

    return (
        <div>
            <FormControlLabel
                label={data[0].department.split('_').join(" ").toUpperCase()}
                control={
                    <Checkbox
                        checked={!checked.includes(false)}
                        onChange={handleCheckbox}
                    />
                }
            />
            {(open) ? <KeyboardArrowUpIcon onClick={handleOpen}></KeyboardArrowUpIcon> : <KeyboardArrowDownIcon onClick={handleOpen}></KeyboardArrowDownIcon>}
            {open && subDep1}
        </div>
    )
}
function Department2() {
    const [checked, setChecked] = useState([false, false, false]);
    const [open, setOpen] = useState(false);
    const handleCheckbox = (event: React.ChangeEvent<HTMLInputElement>) => setChecked([event.target.checked, event.target.checked, event.target.checked])
    const handleChange1 = (event: React.ChangeEvent<HTMLInputElement>) => setChecked([event.target.checked, checked[1], checked[2]])
    const handleChange2 = (event: React.ChangeEvent<HTMLInputElement>) => setChecked([checked[0], event.target.checked, checked[2]])
    const handleChange3 = (event: React.ChangeEvent<HTMLInputElement>) => setChecked([checked[0], checked[1], event.target.checked])
    const handleOpen = () => setOpen(!open);
    const subDep2 = (
        <Box sx={{ display: 'flex', flexDirection: 'column', ml: 3 }}>
            {data[1].sub_departments.map((subDep, index) => (
                <FormControlLabel
                    key={index}
                    label={subDep.split('_').join(" ").toUpperCase()}
                    control={<Checkbox checked={checked[index]} onChange={index === 0 ? handleChange1 : index === 1 ? handleChange2 : handleChange3} />}
                />
            ))}
        </Box>
    );

    return (
        <div>
            <FormControlLabel
                label={data[1].department.split('_').join(" ").toUpperCase()}
                control={
                    <Checkbox
                        checked={!checked.includes(false)}
                        onChange={handleCheckbox}
                    />
                }
            />
            {(open) ? <KeyboardArrowUpIcon onClick={handleOpen}></KeyboardArrowUpIcon> : <KeyboardArrowDownIcon onClick={handleOpen}></KeyboardArrowDownIcon>}
            {open && subDep2}
        </div>
    )
}