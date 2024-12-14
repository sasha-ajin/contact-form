import React, {useState} from 'react';
import {ContactModal} from "@/components/ContactModal/ContactModal";
import {ContactValues} from "@/modules/contact/models";
import * as yup from 'yup';
import '@/utils/setupValidator'
import {useForm} from "@/utils/useForm";
import Container from 'react-bootstrap/Container';
import Col from 'react-bootstrap/Col';
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";

export function ContactPage() {
    const [isShownModal, setIsShownModal] = useState(false);

    function handleShowModal() {
        setIsShownModal(true)
    }

    function handleHideModal() {
        setIsShownModal(false)
    }

    const formik = useForm<ContactValues>({
        initialValues: {
            name: '',
            email: '',
            phone: '',
            message: '',
        },
        validationSchema: yup.object().shape({
            name: yup.string().required().max(50),
            email: yup.string().email().required().max(50),
            phone: yup.mixed().phone().required(),
            message: yup.string().required().max(500),
        }),
        onSubmit: (values) => {
            // formik.resetForm({ values: initialValues });
            console.log('validation passed')
            handleShowModal()
        },
    })

    return (
        <>
            <Form onSubmit={formik.handleSubmit}>
                <Container className="d-flex pt-5 justify-content-center">
                    <Col md={6} lg={4} sm={12}>
                        <Form.Group className="mb-3" controlId="name">
                            <Form.Label>Name</Form.Label>
                            <Form.Control
                                onChange={formik.handleChange}
                                value={formik.values.name}
                                type="text"
                                placeholder="Enter name"
                                name="name"
                            />
                            <p className="text-danger">{formik.errors.name}</p>
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="email">
                            <Form.Label>Email</Form.Label>
                            <Form.Control
                                onChange={formik.handleChange}
                                value={formik.values.email}
                                type="email"
                                placeholder="Enter Email"
                                name="email"
                            />
                            <p className="text-danger">{formik.errors.email}</p>
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="phone">
                            <Form.Label>Phone</Form.Label>
                            <Form.Control
                                onChange={formik.handleChange}
                                value={formik.values.phone}
                                type="text"
                                placeholder="Enter your phone"
                                name="phone"
                            />
                            <p className="text-danger">{formik.errors.phone}</p>
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="message">
                            <Form.Label>Message</Form.Label>
                            <Form.Control
                                onChange={formik.handleChange}
                                value={formik.values.message}
                                as="textarea"
                                type="text"
                                placeholder="Enter your message"
                                name="message"
                            />
                            <p className="text-danger">{formik.errors.message}</p>
                        </Form.Group>
                        <div className="mb-3">
                            <Button variant="primary" type="submit" className="w-100">
                                Submit
                            </Button>
                        </div>
                    </Col>
                </Container>
            </Form>
            <ContactModal isShown={isShownModal} onHide={handleHideModal}/>
        </>
    );
}
