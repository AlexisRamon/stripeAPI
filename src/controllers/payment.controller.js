import Stripe from "stripe"
import { STRIPE_SECRET_KEY } from "../config.js"

const stripe = new Stripe(STRIPE_SECRET_KEY)

export const createSession = async (req,res) => {
    const session = await stripe.checkout.sessions.create({
        line_items: [
            {
                price_data: {
                    product_data: {
                        name: 'Membership',
                        description: 'Membresia ENARMAD',
                    },
                    currency: 'mxn',
                    unit_amount: 300000
                },
                quantity: 1
            }
        ],
        mode: 'payment',
        success_url: 'https://enarmad.flutterflow.app/home',
        cancel_url: 'https://enarmad.flutterflow.app/suscription'
    })
    return res.json(session)
}