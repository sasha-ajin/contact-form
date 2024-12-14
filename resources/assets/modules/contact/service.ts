import { ContactResponse, ContactValues } from '@/modules/contact/models';
import axios from 'axios';

const STORE_CONTACT_ENDPOINT = '/api/contact';

export async function storeContact(values: ContactValues) {
    const response = await axios.post<ContactResponse>(STORE_CONTACT_ENDPOINT, values, {
        headers: { 'Content-Type': 'application/json' },
    });

    return response.data;
}
