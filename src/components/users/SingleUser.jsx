import React from "react";
import { Container, Form, Modal, Button, Row, Col } from 'react-bootstrap';
import userService from "../../services/UsersService";
// import { withRouter } from "react-router";
import { useNavigate } from 'react-router-dom';


const SingleUser = (props) => {
    const navigate = useNavigate();
    const [show, setShow] = React.useState(false);
    const handleClose = () => {setShow(false)};
    const handleShow = () => {setShow(true)};

    const { user, onDelete, history } = props;
    console.log(props);

    const [fullName, setFullName] = React.useState("");
    const [email, setEmail] = React.useState("");
    const [contactNumber, setContactNumber] = React.useState("");
    const [password, setPassword] = React.useState("");

    const id = props.user._id;
    React.useEffect(() => {
        userService.getSingleUser(id).then((data) => {
            setFullName(data.fullName);
            setEmail(data.email);
            setContactNumber(data.contactNumber);
            setPassword(data.password);
        });
    }, []);


    return ( <Container>
        <Row>
            <Col sm={3}>
                <h5>{user.fullName}</h5>
            </Col>
            <Col sm={2}>
                <Button variant="secondary" onClick={(e) => {
                    handleShow();
                    console.log("navigate to update");
                    history.push("/users/" + user._id);
                }} >
                    Update
                </Button>
                    
                <Modal show={show} onHide={handleClose}>
                    <Modal.Header closeButton>
                    <Modal.Title>Update User</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                    <Form>
                        <Form.Group className="mb-3" controlId="">
                            <Form.Label>Full Name</Form.Label>
                            <Form.Control type="text" placeholder="" value={fullName}
                                onChange={(e) => {
                                    setFullName(e.target.value);
                                }} />
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="">
                            <Form.Label>Contact Number</Form.Label>
                            <Form.Control type="string" placeholder="" value={contactNumber}
                                onChange={(e) => {
                                    setContactNumber(e.target.value);
                                }} />
                            <Form.Label>Email Address</Form.Label>
                            <Form.Control type="email" placeholder="" value={email}
                                onChange={(e) => {
                                    setEmail(e.target.value);
                                }} />
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="">
                            <Form.Label>Password</Form.Label>
                            <Form.Control type="text" placeholder="" value={password}
                                onChange={(e) => {
                                    setPassword(e.target.value);
                                }} />
                        </Form.Group>
                    </Form>
                    </Modal.Body>
                    <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Close
                    </Button>
                    <Button variant="dark" type="submit" onClick={e=>{
                        console.log("Send API call");
                        userService
                            .updateUser(id, { fullName, email, contactNumber, password })
                            .then((data) => {
                                console.log(data);
                                props.history.push("/users");
                            })
                            .catch((err) => {
                                console.log(err);
                        });
                        handleClose();
                    }} >
                            Update User
                    </Button>
                    </Modal.Footer>
                </Modal>
            </Col>
            <Col sm={7}>
                <Button variant="danger" onClick={(e) => {
                    userService
                    .deleteUser(user._id)
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
            <p>{user.email}</p>
        </Row>
    </Container> );
}
 
export default SingleUser;