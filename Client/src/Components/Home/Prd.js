import shampoo from "../Assets/chicken-tandoori-sherpa-curry-house.jpg";
import axios from 'axios'
import './prd.css'
function Prd() {
  const amount = 10;
  const currency = "INR";
  const receiptId = "qwsaq1";
const crct_amount=Number(amount)*100
  const paymentHandler = async (e) => {
    e.preventDefault();
    const response=await axios.post("http://localhost:3001/order",{
    amount:crct_amount,
    currency,
    receipt: receiptId,})
    // const response = await fetch("http://localhost:3001/order", {
    //   method: "POST",
    //   body: JSON.stringify({
    //     amount,
    //     currency,
    //     receipt: receiptId,
    //   }),
    //   headers: {
    //     "Content-Type": "application/json",
    //   },
    // });
    const order=response.data
    console.log(order);
    
    console.log(crct_amount)

    var options = {
        
      key: "rzp_test_dzwWGeBNG6Wwiy", // Enter the Key ID generated from the Dashboard
      amount:crct_amount, // Amount is in currency subunits. Default currency is INR. Hence, 50000 refers to 50000 paise
      currency,
      name: "Single Spot", //your business name
      description: "Test Transaction",
      image: "https://example.com/your_logo",
      order_id: order.id, //This is a sample Order ID. Pass the id obtained in the response of Step 1
      handler: async function (response) {
        const body = {
          ...response,
        };

        const validateRes = await fetch(
          "http://localhost:3001/order/validate",
          {
            method: "POST",
            body: JSON.stringify(body),
            headers: {
              "Content-Type": "application/json",
            },
          }
        );
        const jsonRes = await validateRes.json();
        console.log(jsonRes);
      },
      prefill: {
        //We recommend using the prefill parameter to auto-fill customer's contact information, especially their phone number
        name: "Single Spot", //your customer's name
        email: "sshanhar3@gmail.com",
        contact: "9000000000", //Provide the customer's phone number for better conversion rates
      },
      notes: {
        address: "Razorpay Corporate Office",
      },
      theme: {
        color: "#3399cc",
      },
    };
    var rzp1 = new window.Razorpay(options);
    rzp1.on("payment.failed", function (response) {
      alert(response.error.code);
      alert(response.error.description);
      alert(response.error.source);
      alert(response.error.step);
      alert(response.error.reason);
      alert(response.error.metadata.order_id);
      alert(response.error.metadata.payment_id);
    });
    rzp1.open();
    
  };

  return (
    <>
    <div className="box">
    <div className="product">
      <h2>Alfahm</h2>
      <p>Instant Cooked</p>
      <img src={shampoo} style={{marginRight:20}} width="300px"/>
      <br />
      <button onClick={paymentHandler}>Pay 10$</button>
    </div>
    </div>
    </>
  );
}

export default Prd;