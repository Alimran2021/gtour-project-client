import { useEffect } from 'react';
import { useState } from 'react';

const useServices = () => {
    const [services, setServices] = useState([])
    useEffect(() => {
        fetch('https://obscure-caverns-66602.herokuapp.com/services')
            .then(res => res.json())
            .then(data => setServices(data))
    }, [])
    return services
};

export default useServices;