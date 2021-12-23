import StripeCheckout from 'react-stripe-checkout';

const StripeCheckoutButton = ({ price }) => {
    const priceForStripe = price * 100;
    const publishablekey = 'pk_test_51K9gkwKwUg51bZ8lZ5DALnkxCzHvk7VBdCAKZrIcDM6FKvyES8Rh8TGTVUeFYY1ZhLyZgJr4SmjxZOGP1jp8l6ez00ZF33jIxb';

    const onToken = token => {
        console.log(token);
        alert('Payment Successful');
    }
    
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