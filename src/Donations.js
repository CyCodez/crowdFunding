import React, { useState, useEffect } from "react";
import { PaystackButton } from "react-paystack";
import { useNavigate } from "react-router-dom";

function Donatepay() {
  const [paystackClient, setPaystackClient] = useState(
    "pk_test_dd5f188919545e617ce374868d5438c118409e61"
  );
  const [donations, setDonations] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    setPaystackClient(window.PaystackPop);
  }, []);

  useEffect(() => {
    const fetchDonations = async () => {
      const response = await fetch(
        "https://api.paystack.co/transaction?status=success&perPage=10",
        {
          headers: {
            Authorization: `Bearer ${"sk_test_ebcb964a83cff3bbb27b251ebfe650920e68b723"}`,
          },
        }
      );
      const data = await response.json();
      setDonations(data.data);
    };
    fetchDonations();
  }, []);
  const onSuccess = () => navigate("/home");
  return (
    <div>
      <div>
        <div style={{ color: "grren" }}>
          <PaystackButton
            className="paystack-button"
            class="color:'red'"
            text="Make a Donation"
            amount={400000}
            email="donor@example.com"
            publicKey={"pk_test_dd5f188919545e617ce374868d5438c118409e61"}
            onSuccess={onSuccess}
            onClose={() => console.log("Transaction closed")}
          />
        </div>
      </div>
    </div>
  );
}

export default Donatepay;

// const tableRows = donations.map((donation) => (
//   <tr key={donation.id}>
//     <td>{donation.id}</td>
//     <td>{new Date(donation.paid_at).toLocaleDateString()}</td>
//     <td>{donation.amount / 100} NGN</td>
//     <td>{donation.status}</td>
//   </tr>
// ));

// <table id="customers">
//   <tr>
//     <th>Transaction_id</th>
//     <th>date</th>
//     <th>amount</th>
//     <th>status</th>
//   </tr>
//   <tr> {tableRows}</tr>
// </table>;
