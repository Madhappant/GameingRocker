import React, { useState } from 'react';
import { loadStripe } from '@stripe/stripe-js';
import { Elements, CardElement, useStripe, useElements } from '@stripe/react-stripe-js';
import { Box, Button, Typography } from '@mui/material';

const stripePromise = loadStripe('pk_test_Your_Publishable_Key'); // Replace with your Stripe publishable key

const PaymentForm = ({ game, onClose }) => {
  const stripe = useStripe();
  const elements = useElements();
  const [error, setError] = useState(null);
  const [processing, setProcessing] = useState(false);

  const handleSubmit = async (event) => {
    event.preventDefault();
    setProcessing(true);

    if (!stripe || !elements) {
      return;
    }

    try {
      const response = await fetch('/api/payments/create-checkout-session', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ gameId: game.id }),
      });

      const { sessionId } = await response.json();
      const { error } = await stripe.redirectToCheckout({ sessionId });

      if (error) {
        setError(error.message);
      }
    } catch (err) {
      setError('Failed to initiate checkout');
    } finally {
      setProcessing(false);
    }
  };

  return (
    <Box sx={{ p: 3, textAlign: 'center' }}>
      <Typography variant="h6" sx={{ color: '#00FFE0', mb: 2 }}>
        Purchase {game.title}
      </Typography>
      <Typography sx={{ color: '#FFF', mb: 2 }}>
        Price: ${(game.price / 100).toFixed(2)}
      </Typography>
      <form onSubmit={handleSubmit}>
        <CardElement
          options={{
            style: {
              base: {
                color: '#FFF',
                fontSize: '16px',
                '::placeholder': { color: '#AAB7C4' },
              },
              invalid: { color: '#FF4500' },
            },
          }}
        />
        {error && (
          <Typography sx={{ color: '#FF4500', mt: 2 }}>{error}</Typography>
        )}
        <Button
          type="submit"
          variant="contained"
          disabled={!stripe || processing}
          sx={{
            mt: 2,
            backgroundColor: '#00FFE0',
            color: '#000',
            '&:hover': { backgroundColor: '#00FFD0' },
            borderRadius: '8px',
          }}
        >
          {processing ? 'Processing...' : 'Pay Now'}
        </Button>
        <Button
          onClick={onClose}
          sx={{
            ml: 2,
            color: '#FFF',
            border: '1px solid rgba(255, 255, 255, 0.2)',
            background: 'rgba(255, 255, 255, 0.05)',
            backdropFilter: 'blur(8px)',
            '&:hover': { background: 'rgba(255, 255, 255, 0.1)' },
          }}
        >
          Cancel
        </Button>
      </form>
    </Box>
  );
};

const PaymentFormWrapper = (props) => (
  <Elements stripe={stripePromise}>
    <PaymentForm {...props} />
  </Elements>
);

export default PaymentFormWrapper;