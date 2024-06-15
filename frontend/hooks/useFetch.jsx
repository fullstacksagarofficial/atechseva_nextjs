import { useState, useEffect } from 'react';
import axios from 'axios';

const useFetch = (url) => {
  const [data, setData] = useState({ data: [], loading: true, error: null, notFound: false });

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(url);
        if (response.status === 200) {
          if (response.data && response.data.data && response.data.data.length > 0) {
            setData({ data: response.data.data, loading: false, error: null, notFound: false }); 
          } else {
            setData({ data: [], loading: false, error: 'Data not found', notFound: true });
          }
        } else {
          setData({ data: [], loading: false, error: `Unexpected response status: ${response.status}`, notFound: false });
        }
      } catch (error) {
        if (error.response && error.response.status === 404) {
          setData({ data: [], loading: false, error: null, notFound: true }); 
        } else {
          setData({ data: [], loading: false, error: 'Error fetching data', notFound: false });
        }
      }
    };

    fetchData();
    setTimeout(() => {
    }, 200);

  }, [url]);

  return data;
};

export default useFetch;
