import { useForm } from 'react-hook-form';
import FormField from '@components/shared/ui/FormField'

type FormData = {
    name: string;
    email: string;
    tel: string;
    address: string;
    zipCode: string;
    city: string;
    country: string;

};

const FormCheckout = () => {
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm<FormData>({
        mode: 'onChange',
        reValidateMode: 'onSubmit',
    });
    const onSubmit = () => window.location.reload();

    return (
        <div className="p-12 bg-white rounded-lg sm:p-6">
            <h3 className="text-h3 uppercase font-bold pt-1.5 pb-10 sm:text-h4 sm:pb-8" >
                Checkout
            </h3>
            <form action="">
                <p className="text-dark-peach uppercase tracking-wide mb-4">
                    Billing details
                </p>

                <div className="grid grid-cols-2 gap-4 mb-12 sm:grid-cols-1">
                <FormField
                        label="Name"
                        name="name"
                        type="text"
                        placeholder="Alexei Ward"
                        error={errors.name && 'Can’t be empty'}
                        register={register}
                        column="col-1" 
                        validationPattern={/^.{0,50}$/}
    
                    />
                    <FormField
                        label="Email Address"
                        name="email"
                        type="email"
                        placeholder="alexei@mail.com"
                        error={errors.email && 'Wrong Format'}
                        register={register}
                        column="col-2" 
                        validationPattern={/^\S+@\S+\.\S+$/}
                    />
                    <FormField
                        label="Phone Number"
                        name="tel"
                        type="tel"
                        placeholder="+1 (202) 555-0136"
                        error={errors.tel && 'Can’t be empty'}
                        register={register}
                        column="col-1" 
                        validationPattern={/^[0-9\s\-()+]+$/}
                        />
                </div>
                <p className="text-dark-peach uppercase tracking-wide mb-4">
                    Shipping info
                </p>
                <div className="grid grid-cols-2 gap-4 mb-12 sm:grid-cols-1">
                <FormField
                        label="Address"
                        name="address"
                        type="text"
                        placeholder="123 Main St"
                        error={errors.address && 'Can’t be empty'}
                        register={register}
                        column="col-span-2 sm:col-span-1"
                        validationPattern={/^.{0,300}$/}
                    />
                    <FormField
                        label="Zip Code"
                        name="zipCode"
                        type="text"
                        placeholder="12345"
                        error={errors.zipCode && 'Can’t be empty'}
                        register={register}
                        column="col-1 sm:col-span-1"
                        validationPattern={/^\d{4,9}$/}
                    />
                    <FormField
                        label="City"
                        name="city"
                        type="text"
                        placeholder="New York"
                        error={errors.city && 'Can’t be empty'}
                        register={register}
                        column="col-1 sm:col-span-1"
                        validationPattern={/^[a-zA-Z\s\-']+$/}
                    />
                    <FormField
                        label="Country"
                        name="country"
                        type="text"
                        placeholder="United States"
                        error={errors.country && 'Can’t be empty'}
                        register={register}
                        column="col-1 sm:col-span-1"
                        validationPattern={/^[a-zA-Z\s]+$/}
                    />


                </div>   
         
            </form>
        </div>
    );
};

export default FormCheckout;
