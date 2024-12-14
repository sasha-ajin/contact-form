import {FormikValues} from 'formik';

export interface ContactValues extends FormikValues {
    name: string;
    email: string;
    phone: string;
    message: string;
}

export type ContactResponse = {
    contactID: number;
}
