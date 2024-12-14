import {convertObjectToFormData} from "@/utils/convertObjectToFormData";
import {ContactResponse, ContactValues} from "@/modules/contact/models";
import axios from 'axios';

const STORE_CONTACT_ENDPOINT = '/api/contact'

export async function storeContact(values: ContactValues) {
    const formData = convertObjectToFormData(values);

    const response = await axios.post<ContactResponse>(
        STORE_CONTACT_ENDPOINT,
        formData,
        {
            headers: {'Content-Type': 'multipart/form-data'},
        }
    );

    return response.data;
}
