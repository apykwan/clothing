import StripeCheckout from 'react-stripe-checkout';
import { useDispatch } from 'react-redux';
import axios from 'axios';

import { clearCart } from '../../redux/cart/cart.actions';

const StripeCheckoutButton = ({ price }) => {
    const dispatch = useDispatch();
    const priceForStripe = price * 100;
    const publishablekey = 'pk_test_51K9gkwKwUg51bZ8lZ5DALnkxCzHvk7VBdCAKZrIcDM6FKvyES8Rh8TGTVUeFYY1ZhLyZgJr4SmjxZOGP1jp8l6ez00ZF33jIxb';

    const onToken = token => {
        axios({
            url: 'payment',
            method: 'post',
            data: {
                amount: priceForStripe,
                token
            }
        })
            .then(response => {
                alert('Payment successful!');
                dispatch(clearCart());
            })
            .catch(error => {
                console.log(`Payment Error: ${JSON.parse(error)}`);
                alert('There was an issue with your payment. Please use the provided credit card!');
            });
    };
    
    return (
        <StripeCheckout 
            label='Pay Now'
            name='CLOTHING LTD.'
            billingAddress
            shippingAddress
            image='https://svgshare.com/i/CUz.svg'
            description={`Your total is $${price}`}
            amount={priceForStripe}
            panelLabel='Pay Now'
            token={onToken}
            stripeKey={publishablekey}
        />
    );
};

export default StripeCheckoutButton;