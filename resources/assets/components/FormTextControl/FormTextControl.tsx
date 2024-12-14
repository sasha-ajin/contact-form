import React from 'react';
import {Form, FormControlProps as BaseFormControlProps} from 'react-bootstrap';
import {useFormikContext} from "formik";
import clsx from 'clsx';

type FormControlProps = Omit<BaseFormControlProps, 'size'> & {
    name: string;
    className?: string;
    isReadOnly?: boolean;
    hasSolidBackground?: boolean;
};

export function FormTextControl({
                                name,
                                className,
                                isReadOnly = false,
                                hasSolidBackground = true,
                                ...props
                            }:
                                FormControlProps) {
    const formik = useFormikContext();
    const field = formik.getFieldMeta<string>(name);
    const fieldProps = formik.getFieldProps<string>(name);
    const isInvalid = Boolean(field.error);

    return (
        <>
            <Form.Control
                {...fieldProps}
                {...props}
                type="text"
                name={name}
                onChange={formik.handleChange}
                value={field.value ?? ''}
                className={clsx(`form-control`, className, {
                    'is-invalid': isInvalid,
                    'form-control-solid': hasSolidBackground,
                    'form-control-edit': isReadOnly,
                })}
            />
            {isInvalid && <p className="text-danger">{field.error}</p>}
        </>
    );
}
