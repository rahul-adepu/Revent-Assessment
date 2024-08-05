/* eslint-disable react-hooks/exhaustive-deps */
import * as React from 'react';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import { getProductsData } from '../backend/api';

export default function Sort(props) {
    const [sort, setSort] = React.useState({ key: '', order: '' });
    const { setSearchedData } = props;

    const handleChange = (event) => {
        const value = event.target.value;
        if (value === "price-desc") {
            setSort({ key: 'price', order: 'desc' });
        } else if (value === "price-asc") {
            setSort({ key: 'price', order: 'asc' });
        } else {
            setSort({ key: '', order: '' });
        }
    };

    React.useEffect(() => {
        const fetchData = async () => {
            try {
                const params = {};
                if (sort.key) {
                    params._sort = sort.key;
                    params._order = sort.order;
                }
                const response = await getProductsData(params);
                setSearchedData(response.data);
            } catch (error) {
                console.log(error);
            }
        };
        fetchData();
    }, [sort]);

    return (
        <div>
            <FormControl sx={{ minWidth: 150, marginTop: "85px" }}>
                <InputLabel id="sort-by-price-label">Sort By Price</InputLabel>
                <Select
                    labelId="sort-by-price-label"
                    id="sort-by-price-select"
                    value={sort.key ? `${sort.key}-${sort.order}` : ''}
                    label="Sort By Price"
                    onChange={handleChange}
                >
                    <MenuItem value="">None</MenuItem>
                    <MenuItem value="price-desc">High to Low</MenuItem>
                    <MenuItem value="price-asc">Low to High</MenuItem>
                </Select>
            </FormControl>
        </div>
    );
}
