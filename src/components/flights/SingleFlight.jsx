import React from "react";
import { Container, Form, Modal, Button, Row, Col } from 'react-bootstrap';
// import { withRouter } from "react-router";
import { useNavigate } from 'react-router-dom';
import flightService from "./../../services/FlightsService";

const SingleFlight = (props) => {
    const navigate = useNavigate();
    const [show, setShow] = React.useState(false);
    const handleClose = () => {setShow(false)};
    const handleShow = () => {setShow(true)};

    const { flight, onDelete, history } = props;
    console.log(props);

    const [flightCompany, setFlightCompany] = React.useState("");
    const [flightNumber, setFlightNumber] = React.useState("");
    const [departureCity, setDepartureCity] = React.useState("");
    const [arrivalCity, setArrivalCity] = React.useState("");
    const [departureDate, setDepartureDate] = React.useState("");
    const [arrivalDate, setArrivalDate] = React.useState("");
    const [passengerCapacity, setPassengerCapacity] = React.useState("");

    const id = props.flight._id;
    React.useEffect(() => {
        flightService.getSingleFlight(id).then((data) => {
            setFlightCompany(data.flightCompany);
            setFlightNumber(data.flightNumber);
            setDepartureCity(data.departureCity);
            setArrivalCity(data.arrivalCity);
            setDepartureDate(data.departureDate);
            setArrivalDate(data.arrivalDate);
            setPassengerCapacity(data.passengerCapacity);
        });
    }, []);

    return ( <Container>
        <Row>
            <Col sm={3}>
                <h5>{flight.flightCompany}</h5>
            </Col>
            <Col sm={2}>
                <Button variant="secondary" onClick={(e) => {
                    handleShow();
                    console.log("navigate to update");
                    history.push("/flights/" + flight._id);
                }} >
                    Update
                </Button>

                <Modal show={show} onHide={handleClose}>
                    <Modal.Header closeButton>
                    <Modal.Title>Update Flight</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                    <Form>
                        <Form.Group className="mb-3" controlId="">
                            <Form.Label>Company</Form.Label>
                            <Form.Control type="string" placeholder="Enter Company" value={flightCompany}
                                onChange={(e) => {
                                    setFlightCompany(e.target.value);
                            }} />
                            <Form.Label>Flight Number</Form.Label>
                            <Form.Control type="string" placeholder="Enter Flight Number" value={flightNumber}
                                onChange={(e) => {
                                    setFlightNumber(e.target.value);
                            }} />
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="">
                            <Form.Label>Departure City Or Airport</Form.Label>
                            <Form.Control type="text" placeholder="Departure City Or Airport" value={departureCity}
                                onChange={(e) => {
                                    setDepartureCity(e.target.value);
                            }} />
                            <Form.Label>Arrival City Or Airport</Form.Label>
                            <Form.Control type="text" placeholder="Arrival City Or Airport" value={arrivalCity}
                                onChange={(e) => {
                                    setArrivalCity(e.target.value);
                            }} />
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="">
                            <Form.Label>Departure Date</Form.Label>
                            <Form.Control type="date" placeholder="Departure Date" value={departureDate}
                                onChange={(e) => {
                                    setDepartureDate(e.target.value);
                            }} />
                            <Form.Label>Arrival Date</Form.Label>
                            <Form.Control type="date" placeholder="Arrival Date" value={arrivalDate}
                                onChange={(e) => {
                                    setArrivalDate(e.target.value);
                            }} />
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="">
                            <Form.Label>Passenger Capacity</Form.Label>
                            <Form.Control type="number" placeholder="Enter Passenger Capacity" value={passengerCapacity}
                                onChange={(e) => {
                                    setPassengerCapacity(e.target.value);
                            }} />
                        </Form.Group>

                    </Form>
                    </Modal.Body>
                    <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Close
                    </Button>
                    <Button variant="dark" type="submit"  onClick={e=>{
                        console.log("Send API call");
                        flightService
                            .updateFlight(id, { flightCompany, flightNumber, departureCity, arrivalCity, departureDate, arrivalDate, passengerCapacity })
                            .then((data) => {
                                console.log(data);
                                props.history.push("/flights");
                            })
                            .catch((err) => {
                                console.log(err);
                        });
                        handleClose();
                    }} >
                            Update Flight
                    </Button>
                    </Modal.Footer>
                </Modal>
            </Col>
            <Col sm={7}>
                <Button variant="danger" onClick={(e) => {
                    flightService
                    .deleteFlight(flight._id)
                    .then((data) => {
                        console.log(data);
                        onDelete();
                    })
                    .catch((err) => {
                        console.log(err);
                    });
                }} >
                    Delete
                </Button>
            </Col>
        </Row>
        <Row className="Bottom-border mb-3">
            <p>{flight.flightNumber}</p>
        </Row>
    </Container> );
}
 
export default SingleFlight;