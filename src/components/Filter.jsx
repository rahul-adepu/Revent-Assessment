/* eslint-disable react-hooks/exhaustive-deps */
import * as React from 'react';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import ProductsData from '../db.json'
export default function Filter(props) {
    const [type, setType] = React.useState('');
    const { setSearchedData } = props;

    const handleChange = (event) => {
        setType(event.target.value);
    };

    React.useEffect(() => {

        if (type === "none") {
            return setSearchedData(ProductsData)
        }
        
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
            <FormControl sx={{ minWidth: 150, marginTop: "85px" }}>
                <InputLabel id="demo-simple-select-helper-label">Filter By Type</InputLabel>
                <Select
                    labelId="demo-simple-select-helper-label"
                    id="demo-simple-select-helper"
                    value={type}
                    label="Filter By Type"
                    onChange={handleChange}
                >
                    <MenuItem value="none">
                        None
                    </MenuItem>
                    <MenuItem value="electronics">Electronics</MenuItem>
                    <MenuItem value="clothing">Clothing</MenuItem>
                    <MenuItem value="home appliances">Home Appliances</MenuItem>
                </Select>
            </FormControl>
        </div>
    );
}