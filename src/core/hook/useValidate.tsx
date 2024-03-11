import React, { useState } from "react";
import { UserType } from "../Type/userType";

type errorMessage = {
    firstName?: string,
    middleName?: string,
    lastName?: string
}

const useFormValidate = () => {
    const [errors, setErrors] = useState<errorMessage>({});
    
    const useValidate = (value: any) => {
        const message: errorMessage = {}

        if (!value.firstName) {
            message.firstName = 'First Name is required';
        }
        if (!value.middleName) {
            message.middleName = 'Middle Name is required';
        }
        if (!value.lastName) {
            message.lastName = 'Last Name is required';
        }

        setErrors(message);
        return Object.keys(message).length === 0;
    };

    return { errors, useValidate };
};

export default useFormValidate;
