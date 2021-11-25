import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import CheckoutForm from './CheckoutForm';

const stripePromise = loadStripe('pk_test_51JvkNIBrm0NfoostevnLE4IWHgryehQbJqgpOSAIPQViKTN0cKjbr8irdsae4gIcSqjebi9TAESKSU2Zz8rnRo8S00s9KqkuaY')

const Payment = () => {
    const { appointmentId } = useParams();
    const [appointment, setAppointment] = useState({});
    useEffect(() => {
        fetch(`http://localhost:5000/appointments/${appointmentId}`)
            .then(res => res.json())
            .then(data => setAppointment(data));
    }, [appointmentId]);
    return (
        <div>
            <h2>Please Pay for: {appointment.patientName} for {appointment.serviceName}</h2>
            <h4>Pay: ${appointment.price}</h4>

            {appointment?.price && <Elements stripe={stripePromise}>
                <CheckoutForm
                    appointment={appointment} />
            </Elements>}
        </div>
    );
};

export default Payment;