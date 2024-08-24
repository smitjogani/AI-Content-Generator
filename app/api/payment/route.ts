import { NextResponse, NextRequest } from "next/server";
import Stripe from "stripe";

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!);

interface bodyData {
  name: string;
  price: number;
}

export const POST = async (request: NextRequest) => {
  try {
    const data: bodyData = await request.json();

    const customer = await stripe.customers.create({
      email: "customer@example.com",
      address:{
        city: 'Pune',
        country: 'India',
        line1:'Shivajinagar',
        postal_code:'411047',
        state: 'Maharastra'
      },
      name:"Customer"
    });

    const checkOutSession = await stripe.checkout.sessions.create({
      payment_method_types:['card'],
      customer:customer.id,
      mode:'payment',
      success_url:"http://localhost:3000/dashboard",
      cancel_url:"http://localhost:3000/",
      line_items:[
        {
          quantity:1,
          price_data:{
            product_data:{
              name: "Ai Content Generator"
            },
            currency: 'INR',
            unit_amount: 999 * 100,
          }
        }
      ]
    });

    return NextResponse.json(
      { msg: checkOutSession, url:checkOutSession.url },
      {
        status: 200,
      }
    );
  } catch (error: any) {
    return NextResponse.json(
      { error: error.message },
      {
        status: 500,
      }
    );
  }
};
