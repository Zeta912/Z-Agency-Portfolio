import { useState } from "react";
import contactImg from "../assets/img/contact-img.svg"

export const Contact = () => {
    const formInitialdetails = {
        firstName: '',
        lastName: '',
        email: '',
        phonme: '',
        message: ''
    }

    const [formDetails, setFormDetails] = useState(formInitialDetails);
    const [buttonText, setButtonText] = useState('Send');
    const [status, setStatus] = useState({});

    return (
        <section className="contact" id="connect">
            <Container>
                <Row className="align-items-center">
                    <Col md={6}>
                        <img src={contactImg} alt="Contact Us" />
                    </Col>
                </Row>
            </Container>
        </section>
    )
}