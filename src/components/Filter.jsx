/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect } from 'react';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import { getProductsData } from '../backend/api';
export default function Filter(props) {
    const [filter, setFilter] = React.useState('');
    const { setSearchedData } = props;

    const handleChange = (event) => {
        setFilter(event.target.value);
    };

    useEffect(() => {
        const fetchData = async () => {
            try {
                const params = {};
                if (filter) {
                    params.type = filter;
                }
                const response = await getProductsData(params);
                setSearchedData(response.data);
            } catch (error) {
                console.log(error);
            }
        };

        fetchData();
    }, [filter])

    return (
        <div>
            <FormControl sx={{ minWidth: 150, marginTop: "85px" }}>
                <InputLabel id="demo-simple-select-helper-label">Filter By Type</InputLabel>
                <Select
                    labelId="demo-simple-select-helper-label"
                    id="demo-simple-select-helper"
                    value={filter}
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