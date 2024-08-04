import * as React from 'react';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import DisplayProducts from './DisplayProducts';
import ProductsData from '../db.json'
export default function Filter(props) {
    const [type, setType] = React.useState('');
    const { searchedData, setSearchedData } = props;

    const handleChange = (event) => {
        setType(event.target.value);
    };

    React.useEffect(() => {
        const filtered = ProductsData.filter((ele) => {
            const element = ele.type.toLowerCase();
            const selectedData = type.toLowerCase();

            if (element.includes(selectedData)) {
                return true;
            }
            return false
        })
        if (filtered) {
            setSearchedData(filtered);
        }

    }, [type])

    return (
        <div>
            <FormControl sx={{ m: 1, minWidth: 150 }}>
                <InputLabel id="demo-simple-select-helper-label">Filter By Type</InputLabel>
                <Select
                    labelId="demo-simple-select-helper-label"
                    id="demo-simple-select-helper"
                    value={type}
                    label="Filter By Type"
                    onChange={handleChange}
                >
                    <MenuItem value="">
                        <em>None</em>
                    </MenuItem>
                    <MenuItem value="electronics">Electronics</MenuItem>
                    <MenuItem value="clothing">Clothing</MenuItem>
                    <MenuItem value="home appliances">Home Appliances</MenuItem>
                </Select>
            </FormControl>
        </div>
    );
}