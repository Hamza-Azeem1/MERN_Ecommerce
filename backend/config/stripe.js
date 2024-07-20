const Stripe = require('stripe')

const stripe = Stripe(process.env.VITE_STRIPE_SECRET_KEY)

module.exports = stripe