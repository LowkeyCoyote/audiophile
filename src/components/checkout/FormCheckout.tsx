import { useState, MutableRefObject } from 'react';
import { useForm } from 'react-hook-form';

import FormField from '@components/shared/ui/FormField';

import { FormValues } from '../../types/types';

import cashOnDeliveryIcon from '@assets/checkout/icon-cash-on-delivery.svg';

type FormCheckoutProps = {
  submitRef: MutableRefObject<HTMLButtonElement>;
  onSubmit: () => void;
};

const FormCheckout = ({ submitRef, onSubmit }: FormCheckoutProps) => {
  const [selectedPayment, setSelectedPayment] = useState<'emoney' | 'cashOnDelivery'>('emoney');

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormValues>({
    mode: 'onChange',
    reValidateMode: 'onSubmit',
  });

  return (
    <div className="rounded-lg bg-white p-12 sm:p-6">
      <h3 className="pb-10 pt-1.5 sm:pb-8">Checkout</h3>

      <form onSubmit={handleSubmit(onSubmit)}>
        <p className="subtitle text-dark-peach">Billing details</p>

        <div className="mb-12 grid grid-cols-2 gap-4 sm:grid-cols-1">
          <FormField
            label="Name"
            name="name"
            type="text"
            placeholder="Alexei Ward"
            error={errors.name && 'Wrong Format'}
            register={register}
            column="col-1"
            validationPattern={/^[a-zA-ZÀ-ÿ'-]{1,30}(?:\s[a-zA-ZÀ-ÿ'-]{1,30})?$/}
            maxLength={30}
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
            maxLength={70}
          />
          <FormField
            label="Phone Number"
            name="tel"
            type="tel"
            placeholder="+1 202-555-0136"
            error={errors.tel && 'Wrong Format'}
            register={register}
            column="col-1"
            validationPattern={/^[0-9\s\-()+]{1,12}$/}
            maxLength={12}
          />
        </div>
        <p className="subtitle text-dark-peach">Shipping info</p>
        <div className="mb-12 grid grid-cols-2 gap-4 sm:grid-cols-1">
          <FormField
            label="Address"
            name="address"
            type="text"
            placeholder="1137 Williams Avenue"
            error={errors.address && 'Wrong Format'}
            register={register}
            column="col-span-2"
            validationPattern={/^.{0,150}$/}
            maxLength={150}
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
            maxLength={9}
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
            maxLength={50}
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
            maxLength={50}
          />
        </div>

        <p className="subtitle text-dark-peach">payment details</p>
        <div className="mb-12 grid grid-cols-2 gap-4 sm:grid-cols-1">
          <p className="col-1 text-[12px] font-bold">Payment Method</p>
          <div className="col-2 inputFormCheckoutRadio sm:col-span-2">
            <input
              type="radio"
              id="emoney"
              value="emoney"
              checked={selectedPayment === 'emoney'}
              onChange={() => setSelectedPayment('emoney')}
            />
            <label className="text-[14px] font-bold" htmlFor="emoney">
              e-Money
            </label>
          </div>
          <div className="inputFormCheckoutRadio col-start-2 sm:col-span-2">
            <input
              type="radio"
              id="cashOnDelivery"
              value="cashOnDelivery"
              checked={selectedPayment === 'cashOnDelivery'}
              onChange={() => setSelectedPayment('cashOnDelivery')}
            />
            <label className="text-[14px] font-bold" htmlFor="cashOnDelivery">
              Cash on delivery
            </label>
          </div>
        </div>
        <div className="mb-12 grid grid-cols-2 gap-4 sm:grid-cols-1">
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
                maxLength={9}
              />
              <FormField
                label="e-Money PIN"
                name="eMoneyPIN"
                type="text"
                placeholder="6891"
                error={errors.eMoneyPIN && 'Wrong Format'}
                register={register}
                column="col-2"
                validationPattern={/^[0-9]{4}$/}
                maxLength={4}
              />
            </>
          )}
          {selectedPayment === 'cashOnDelivery' && (
            <div className="col-span-2 flex items-center gap-8">
              <img src={cashOnDeliveryIcon} alt="cash on delivery" />
              <p>
                The ‘Cash on Delivery’ option enables you to pay in cash when our delivery courier arrives at your
                residence. Just make sure your address is correct so that your order will not be cancelled.
              </p>
            </div>
          )}
        </div>
        <button ref={submitRef} type="submit" style={{ display: 'none' }}>
          submit
        </button>
      </form>
    </div>
  );
};

export default FormCheckout;
