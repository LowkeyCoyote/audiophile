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
    maxLength ?: number;
}

const FormField: React.FC<FormFieldProps> = ({ label, name, type, placeholder, error, register, column, validationPattern, maxLength }) => {

    return (
        <div className={column}>
            <div className="flex items-center justify-between mb-2">
                <label htmlFor={name} className="flex flex-col font-bold labelForm ">
                    {label}
                </label>
                {error ? (
                    <p className="text-[12px] text-[#CD2C2C] opacity-100" role="alert">
                        {error}
                    </p>
                ) : (
                    <p className="text-[12px] opacity-0" role="alert">
                        Can’t be empty
                    </p>
                )}
            </div>
            <input
                className={`inputFormCheckout w-full ${error ? '!outline-[#CD2C2C] !outline-2' : ''}`}
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