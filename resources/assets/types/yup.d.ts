import { AnyObject } from 'yup/lib/types';

declare module 'yup' {
    interface MixedSchema<TCast = any, TContext = AnyObject, TOutput = any> {
        phone(): this;
    }
}
