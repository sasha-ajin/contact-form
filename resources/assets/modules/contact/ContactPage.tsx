import React, {useState} from 'react';
import {ContactResponse, ContactValues} from "@/modules/contact/models";
import {FormTextControl} from "@/components/FormTextControl/FormTextControl";
import '@/utils/setupValidator'
import {useForm} from "@/utils/useForm";
import {FormikProvider} from "formik";
import Form from "react-bootstrap/Form";
import Container from 'react-bootstrap/Container';
import Col from 'react-bootstrap/Col';
import Button from "react-bootstrap/Button";
import * as yup from 'yup';
import {ContactModal} from "@/modules/contact/ContactModal";
import {handleBackEndValidation} from "@/utils/handleBackEndValidation";
import {sendContact} from "@/modules/contact/service";

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
        onSubmit: async (values, formikHelpers) => {
            const submitWithValidation = handleBackEndValidation<ContactValues>(async (values) => {
                return await sendContact(values);
            });
            const response = (await submitWithValidation(values, formikHelpers)) as ContactResponse;
            if (response) {
                formik.resetForm({values});
                handleShowModal()
            }
        },
    })

    return (
        <>
            <FormikProvider value={formik}>
                <Form onSubmit={formik.handleSubmit}>
                    <Container className="d-flex mt-5 justify-content-center">
                        <Col md={6} lg={4} sm={12} className="shadow rounded p-2">
                            <Form.Group className="mb-3" controlId="name">
                                <Form.Label>Name</Form.Label>
                                <FormTextControl name="name" placeholder="Enter name"/>
                            </Form.Group>
                            <Form.Group className="mb-3" controlId="email">
                                <Form.Label>Email</Form.Label>
                                <FormTextControl name="email" placeholder="Enter email"/>
                            </Form.Group>
                            <Form.Group className="mb-3" controlId="phone">
                                <Form.Label>Phone</Form.Label>
                                <FormTextControl name="phone" placeholder="Enter phone"/>
                            </Form.Group>
                            <Form.Group className="mb-3" controlId="message">
                                <Form.Label>Message</Form.Label>
                                <FormTextControl name="message" placeholder="Enter your message" as="textarea"/>
                            </Form.Group>
                            <div className="mb-3">
                                <Button variant="primary" type="submit" className="w-100">
                                    Submit
                                </Button>
                            </div>
                        </Col>
                    </Container>
                </Form>
            </FormikProvider>
            <ContactModal isShown={isShownModal} onHide={handleHideModal}/>
        </>
    );
}
