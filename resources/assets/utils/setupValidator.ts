import { isValidPhoneNumber } from 'libphonenumber-js';
import * as yup from 'yup';

yup.addMethod<ReturnType<typeof yup.mixed>>(
    yup.mixed,
    'phone',
    function (message = 'Enter valid phone number in format +359ХХХХХХХХХ.') {
        return this.test('phone', message, (value) => {
            if (!value) {
                return false;
            }

            return isValidPhoneNumber(value as string);
        });
    },
);
