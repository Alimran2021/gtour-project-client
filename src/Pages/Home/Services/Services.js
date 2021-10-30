import { Row } from 'react-bootstrap';
import useServices from '../../../hooks/UseServices/useServices';
import Service from '../Service/Service';


const Services = () => {
    const services = useServices()


    return (
        <div className="my-20">
            <h1 className="text-center mb-4">Our Latest Services</h1>
            <Row className="container g-4 mx-auto" xs={1} md={3}>
                {
                    services?.map(service => <Service service={service}></Service>)
                }
            </Row>
        </div>
    );
};

export default Services;