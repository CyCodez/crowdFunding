import { useState, useEffect } from "react";
import React from "react";

function TransactionsList() {
  const [transactions, setTransactions] = useState([]);

  useEffect(() => {
    const fetchTransactions = async () => {
      try {
        const response = await fetch("https://api.paystack.co/transaction", {
          headers: {
            Authorization: `Bearer ${"pk_test_dd5f188919545e617ce374868d5438c118409e61"}`,
            "Content-Type": "application/json",
          },
        });
        const data = await response.json();
        setTransactions(data.data);
      } catch (error) {
        console.error(error);
      }
    };
    fetchTransactions();
  }, []);

  return (
    <ul>
      {transactions.map((transaction) => (
        <li key={transaction.id}>
          Transaction ID: {transaction.id} - Amount: {transaction.amount}
        </li>
      ))}
    </ul>
  );
}
export default TransactionsList;
