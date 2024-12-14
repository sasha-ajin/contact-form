import {convertObjectToFormData} from "@/utils/convertObjectToFormData";
import {ContactResponse, ContactValues} from "@/modules/contact/models";
import axios from 'axios';

const SEND_CONTACT_ENDPOINT = '/api/contact'

export async function sendContact(values: ContactValues) {
    const formData = convertObjectToFormData(values);

    const response = await axios.post<ContactResponse>(
        SEND_CONTACT_ENDPOINT,
        formData,
        {
            headers: {'Content-Type': 'multipart/form-data'},
        }
    );

    return response.data;
}
