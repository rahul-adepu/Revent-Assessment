/* eslint-disable react-hooks/exhaustive-deps */
import * as React from 'react';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
export default function Sort(props) {
    const [type, setType] = React.useState('');
    const { searchedData, setSearchedData } = props;
    const handleChange = (event) => {
        setType(event.target.value);
    };
    
    console.log(searchedData)
    React.useEffect(() => {

        const updatedSortedList = [...searchedData];
        
        const sortedProducts = updatedSortedList.sort((a, b) => {
            if (type === 'low-to-high') {
                return a.price - b.price;
            } else if (type === 'high-to-low') {
                return b.price - a.price;
            }
            return 0;
        });
        console.log("Inside UseEffect: ", sortedProducts)
        setSearchedData(sortedProducts);

    }, [type])

    return (
        <div>
            <FormControl sx={{ m: 1, minWidth: 150 }}>
                <InputLabel id="demo-simple-select-helper-label">Sort By Price</InputLabel>
                <Select
                    labelId="demo-simple-select-helper-label"
                    id="demo-simple-select-helper"
                    value={type}
                    label="Sort By Price"
                    onChange={handleChange}
                >
                    <MenuItem value="">
                        <em>None</em>
                    </MenuItem>
                    <MenuItem value="high-to-low">High to Low</MenuItem>
                    <MenuItem value="low-to-high">Low to High</MenuItem>
                </Select>
            </FormControl>
        </div>
    );
}