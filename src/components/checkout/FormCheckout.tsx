import { useForm } from 'react-hook-form';
import FormField from '@components/shared/ui/FormField';
import { useState, MutableRefObject } from 'react';
import cashOnDeliveryIcon from '@assets/checkout/icon-cash-on-delivery.svg';
import { FormValues } from '../../types/types';

type FormCheckoutProps = {
    submitRef: MutableRefObject<HTMLButtonElement>;
    onSubmit: () => void;
};

const FormCheckout = ({ submitRef, onSubmit }: FormCheckoutProps) => {
    const [selectedPayment, setSelectedPayment] = useState<'emoney' | 'cashOnDelivery'>('emoney');

    const { register,handleSubmit, formState: { errors }, } = useForm<FormValues>({
        mode: 'onChange',
        reValidateMode: 'onSubmit',
    });

    return (
        <div className="p-12 bg-white rounded-lg sm:p-6">
            <h3 className="text-h3 uppercase font-bold pt-1.5 pb-10 sm:text-h4 sm:pb-8">
                Checkout
            </h3>

            <form onSubmit={handleSubmit(onSubmit)}>
                <p className="text-dark-peach uppercase tracking-wide mb-4">
                    Billing details
                </p>

                <div className="grid grid-cols-2 gap-4 mb-12 sm:grid-cols-1">
                    <FormField
                        label="Name"
                        name="name"
                        type="text"
                        placeholder="Alexei Ward"
                        error={errors.name && 'Wrong Format'}
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
                        placeholder="+1 202-555-0136"
                        error={errors.tel && 'Wrong Format'}
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
                        placeholder="1137 Williams Avenue"
                        error={errors.address && 'Wrong Format'}
                        register={register}
                        column="col-span-2"
                        validationPattern={/^.{0,300}$/}
                    />
                    <FormField
                        label="Zip Code"
                        name="zipCode"
                        type="text"
                        placeholder="10001"
                        error={errors.zipCode && 'Wrong Format'}
                        register={register}
                        column="col-1 sm:col-span-2"
                        validationPattern={/^\d{4,9}$/}
                    />
                    <FormField
                        label="City"
                        name="city"
                        type="text"
                        placeholder="New York"
                        error={errors.city && 'Wrong Format'}
                        register={register}
                        column="col-1 sm:col-span-2"
                        validationPattern={/^[a-zA-Z\s\-']+$/}
                    />
                    <FormField
                        label="Country"
                        name="country"
                        type="text"
                        placeholder="United States"
                        error={errors.country && 'Wrong Format'}
                        register={register}
                        column="col-1 sm:col-span-2 "
                        validationPattern={/^[a-zA-Z\s]+$/}
                    />
                </div>

                <p className="text-dark-peach uppercase tracking-wide mb-4">
                    payment details
                </p>
                <div className="grid grid-cols-2 gap-4 mb-12 sm:grid-cols-1">
                    <p className="col-1 font-bold text-[12px]">
                        Payment Method
                    </p>
                    <div className="col-2 sm:col-span-2 inputFormCheckoutRadio">
                        <input
                            type="radio"
                            id="emoney"
                            value="emoney"
                            checked={selectedPayment === 'emoney'}
                            onChange={() => setSelectedPayment('emoney')}
                        />
                        <label
                            className="text-[14px] font-bold"
                            htmlFor="emoney"
                        >
                            e-Money
                        </label>
                    </div>
                    <div className="col-start-2 sm:col-span-2 inputFormCheckoutRadio">
                        <input
                            type="radio"
                            id="cashOnDelivery"
                            value="cashOnDelivery"
                            checked={selectedPayment === 'cashOnDelivery'}
                            onChange={() =>
                                setSelectedPayment('cashOnDelivery')
                            }
                        />
                        <label
                            className="text-[14px] font-bold"
                            htmlFor="cashOnDelivery"
                        >
                            Cash on delivery
                        </label>
                    </div>
                </div>
                <div className="grid grid-cols-2 gap-4 mb-12 sm:grid-cols-1">
                    {selectedPayment === 'emoney' && (
                        <>
                            <FormField
                                label="e-Money Number"
                                name="eMoneyNumber"
                                type="text"
                                placeholder="238521993"
                                error={errors.eMoneyNumber && 'Wrong Format'}
                                register={register}
                                column="col-1"
                                validationPattern={/^[0-9]{9}$/}
                            />
                            <FormField
                                label="e-Money PIN"
                                name="eMoneyPIN"
                                type="email"
                                placeholder="6891"
                                error={errors.eMoneyPIN && 'Wrong Format'}
                                register={register}
                                column="col-2"
                                validationPattern={/^[0-9]{4}$/}
                            />
                        </>
                    )}
                    {selectedPayment === 'cashOnDelivery' && (
                        <div className="flex items-center col-span-2 gap-8">
                            <img
                                src={cashOnDeliveryIcon}
                                alt="cash on delivery"
                            />
                            <p className='text-[15px] opacity-50'>
                                The ‘Cash on Delivery’ option enables you to pay
                                in cash when our delivery courier arrives at
                                your residence. Just make sure your address is
                                correct so that your order will not be
                                cancelled.
                            </p>
                        </div>
                    )}
                </div>
                <button
                    ref={submitRef}
                    type="submit"
                    style={{ display: 'none' }}
                />
           
            </form>
        </div>
    );
};

export default FormCheckout;
