import {useState, useEffect} from 'react';
import axios from 'axios';


export default function useFetch() {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // This function is used to pull data with the Google Place API.
    const fetchData = async () => {
      const url = 'https://maps.googleapis.com/maps/api/place/textsearch/json';
      const config = {
        params: {
          query: 'restaurants',
          location: `${Math.random() * 90 - 45},${Math.random() * 180 - 90}`,
          radius: 5000000,
          key: "AIzaSyDwbUC9rxHIOVfEFnftJUhFqnBfE_iC9Jk"
        },
      };

      try {
        const response = await axios.get(url, config);
        setData(response.data);
        setLoading(false);
      } catch (error) {
        console.log(error);
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  return {data, loading};
}