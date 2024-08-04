/* eslint-disable react-hooks/exhaustive-deps */
import * as React from 'react';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import ProductsData from '../db.json'


export default function Sort(props) {
    const [type, setType] = React.useState('');
    const { searchedData, setSearchedData } = props;

    const handleChange = (event) => {
        setType(event.target.value);
    };

    React.useEffect(() => {

        const updatedSortedList = [...searchedData];

        if (type === "none") {
            return setSearchedData(ProductsData)
        }

        const sortedProducts = updatedSortedList.sort((a, b) => {
            if (type === 'low-to-high') {
                return a.price - b.price;
            } else if (type === 'high-to-low') {
                return b.price - a.price;
            }
            return 0;
        });
        setSearchedData(sortedProducts);

    }, [type])

    return (
        <div>
            <FormControl sx={{ minWidth: 150, marginTop: "85px" }}>
                <InputLabel id="demo-simple-select-helper-label">Sort By Price</InputLabel>
                <Select
                    labelId="demo-simple-select-helper-label"
                    id="demo-simple-select-helper"
                    value={type}
                    label="Sort By Price"
                    onChange={handleChange}
                >
                    <MenuItem value="none">None</MenuItem>
                    <MenuItem value="high-to-low">High to Low</MenuItem>
                    <MenuItem value="low-to-high">Low to High</MenuItem>
                </Select>
            </FormControl>
        </div>
    );
}