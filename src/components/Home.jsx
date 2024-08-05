/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect } from 'react'
import { getProductsData } from '../backend/api'

function Home(props) {
    const {setSearchedData } = props;

    useEffect(() => {
        const dataFromApi = async () => {
            try {
                const response = await getProductsData()
                setSearchedData(response.data)
                
            } catch (error) {
                console.log(error)
            }
        } 
        dataFromApi();
    },[])
  return (
    <div>
      
    </div>
  )
}

export default Home
