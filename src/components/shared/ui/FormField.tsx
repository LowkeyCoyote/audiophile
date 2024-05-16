import React from 'react';

interface FormFieldProps {
    label: string;
    name: string;
    type: string;
    placeholder: string;
    error?: string;
    register: any;
    column?: string;
    validationPattern?: RegExp;
}

const FormField: React.FC<FormFieldProps> = ({ label, name, type, placeholder, error, register, column, validationPattern }) => {


    let maxLength = 80; 

    if (name === "eMoneyPIN") {
        maxLength = 4;
    }

    if(name === "eMoneyNumber"){
        maxLength = 9
    }

    if(type === 'tel'){
        maxLength = 12
    }

    return (
        <div className={column}>
            <div className="flex items-center justify-between mb-2">
                <label htmlFor={name} className="flex flex-col font-bold ">
                    {label}
                </label>
                {error ? (
                    <p className="text-[12px] text-[#CD2C2C]" role="alert">
                        {error}
                    </p>
                ) : (
                    <p className="text-[12px] opacity-0" role="alert">
                        Can’t be empty
                    </p>
                )}
            </div>
            <input
                className={`inputFormCheckout w-full ${error ? '!outline-[#CD2C2C]' : ''}`}
                type={type}
                placeholder={placeholder}
                maxLength= {maxLength}
                id={name}
                {...register(name, {
                    required: true,
                    maxLength: maxLength,
                    pattern: validationPattern,
                })}
                aria-invalid={error ? 'true' : 'false'}
            
            />
        </div>
    );
};

export default FormField;