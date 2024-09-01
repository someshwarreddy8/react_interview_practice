import { Box, TextField, Typography } from "@mui/material";
import { useEffect, useState } from "react";

const DataBindingDemo = () => {

    const [name, setName] = useState('1h1');
    const [nan, setNan] = useState(`it's not a numbe`);
    const [num, setNum] = useState(`it's a numbe`);

    const handleChanges = (e) => {
        setName(prev => e.target.value);
    }

    const handleFocus = (...e) => {
        const [eve, data] = e;
        console.log(data);
        console.log(eve.target.value);
    }

    const id = Symbol();

    const studentObj = {
        [id]: 1,
        name: "somesh",
        age: 23
    }

    const callConsolePrint = () => {
        console.log("This is called from useEffect!!!");
    }

    useEffect(() => {
        callConsolePrint();
    }, [nan]);

    return (
        <Box sx={{
            padding: '15px',
            border: '2px solid'
        }} style={{ height: '300px', width: '100vw' }}>

            <TextField autoComplete="off" label='username' value={name} onChange={handleChanges} onFocus={e => handleFocus(e, "focused")}></TextField>
            <Typography>{isNaN(name) ? nan : num}</Typography>
            <Typography>{isNaN(name) && nan}</Typography>

            <Typography>{studentObj[id] == 1 && Object.keys(studentObj).map(key => studentObj[key])}</Typography>
        </Box>
    )
}

export default DataBindingDemo;