import React, { useState } from 'react';
import styled from "styled-components";
import { PayPalButtons } from "@paypal/react-paypal-js";
import Product from './Product';
import { useNavigate } from "react-router-dom";

const PaypalCheckoutButton = ({ cart }) => {


    let navigate = useNavigate();
    const price = cart.total.toString();
    const [paidFor, setPaidFor] = useState(false);
    const [error, setError] = useState(null);
    const product = {
        description: "test",
        amount: price
    };
    const handleApprove = (orderId) => {
        setPaidFor(true);
    };

    if(paidFor)
    {
   
    navigate("/",{ state: {msg:"Thank you for purchasing from EranSa Shopping!"} });
    }



    return (

        <PayPalButtons
            style={{
                color: "silver",
                layout: "horizontal",
                height: 48,
                tagline: false,
                shape: "pill"
            }}
          
            createOrder={(data, actions) => {
                return actions.order.create({
                    purchase_units:[
                        {
                            description: product.description,
                            amount: {value: product.amount}
                        }
                    ]
                });
            }}
            onApprove={async (data, actions) => {
                const order = await actions.order.capture();
                console.log("order", order);
                handleApprove(data.orderID);

            }}
            onCancel={() => { }}
            onError={(err) => {
                setError(err);
                console.log("PayPal Checkout Error!",err);
            }}
        />

    )
}

export default PaypalCheckoutButton;