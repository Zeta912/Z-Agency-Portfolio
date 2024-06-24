import {useState, useEffect} from "react";
import { Container, Row, Col} from "react-bootstrap";
import { ArrowRightCircle } from "react-bootstrap-icons";
import headerImg from "../assets/img/header-img.svg"

export const Banner =() =>{
    const toRotate = [ "Desarrollo Web", "Diseño Web", "SEO"]

    return (
        <section className="banner" id="home">
            <Container>
                <Row className="align-items-center">
                    <Col xs={12} md={6} xl={7}>
                    <span className="tagline">Welcome to our Portfolio</span>
                    <h1>{'Somos Z Agency'}<span className="wrap">Desarrollo Web</span> </h1>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi ipsum ante, bibendum nec mi a,
                    varius aliquet turpis. Mauris sit amet justo eget diam consequat sodales.</p>
                    <button onClick={() => console.log('connect')}>Let's Connect <ArrowRightCircle size={25}/></button>
                    </Col>
                    <Col xs={12} md={6} xl={5}>
                    <img src={headerImg} alt="Header Img" />
                    </Col>
                </Row>
            </Container>
        </section>
    )
}