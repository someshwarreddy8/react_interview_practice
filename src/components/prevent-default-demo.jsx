import { Box, Button, TextField } from "@mui/material";
import { useState } from "react";

const PreventDefaultDemo = () => {
    const [username, setUsername] = useState('abc');
    const handleChange = (e) => {
        setUsername(e.target.value);
    }
    const handleSubmit = (data) => {
        data.preventDefault();

    }
    return (
        <Box>
            <form onSubmit={handleSubmit}>
                <TextField value={username} onChange={handleChange} label='username' size="small" name='username' />
                <Button type="submit" size="small" variant="contained">Submit</Button>
            </form>
        </Box>
    )
}

export default PreventDefaultDemo;