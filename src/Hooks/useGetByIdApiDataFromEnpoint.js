import { useEffect, useState } from 'react'
import appService from '../Components/App/Appservices/AppService';

const useGetByIdApiDataFromEnpoint = (endpoint, id, key) => {
  console.log("endpoint", endpoint)
    const [state, setState] = useState([]);
    useEffect(() => {
        const renderData = async () => {    
          try {
            const response = await appService.Get(endpoint, id);
            if (response.data) {
              !key && console.log(response.data)
              key && setState(response.data[key]);
            }
          } catch (error) {
            console.error(error);
          }
        };
        renderData();
      }, [endpoint, id, key]);
  return {state}
}

export default useGetByIdApiDataFromEnpoint