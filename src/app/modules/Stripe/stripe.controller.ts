
import config from "../../config";
import catchAsync from "../../utils/catchAsync";
const stripe = require("stripe")(config.stripe_secret_kay);


const createPayment = catchAsync(async (req, res) => {
  const { price } = req.body;
  
  const amount = (price * 100); 
  const paymentIntent = await stripe.paymentIntents.create({
    amount: amount,
    currency: "usd",
    payment_method_types: [
      'card'
    ],    
    // automatic_payment_methods: {
    //   enabled: true,
    // },
  });

  res.send({
    clientSecret: paymentIntent.client_secret,
    // dpmCheckerLink: `https://dashboard.stripe.com/settings/payment_methods/review?transaction_id=${paymentIntent.id}`,
  });
});

export const StripeControllers = {
  createPayment
};
