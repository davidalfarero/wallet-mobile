import { useState, useEffect, useCallback } from 'react';
import { API } from '../lib/api';
import { Alert } from 'react-native';

export const useTransactions = (userId) => {
  const [transactions, setTransactions] = useState([]);
  const [summary, setSummary] = useState({
    balance: 0,
    income: 0,
    expenses: 0,
  });
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  const getTransactions = useCallback(async () => {
    try {
      const response = await fetch(`${API}/transactions/${userId}`);
      const data = await response.json();
      setTransactions(data);
    } catch (error) {
      console.error("Error fetching transactions:", error);
    }
  }, [userId]);

  const getSummary = useCallback(async () => {
    try {
      console.log("🔗 Fetching summary from:", `${API}/transactions/summary/${userId}`);
      const response = await fetch(`${API}/transactions/summary/${userId}`);
      const data = await response.json();
      setSummary(data);
    } catch (error) {
      console.error("Error fetching transactions:", error);
    }
  }, [userId]);

  const loadData = useCallback(async () => {
    if (!userId) return;
    setLoading(true);
    try {
      await Promise.all([getTransactions(), getSummary()]);
    } catch (error) {
      console.error("Error loading data:", error);
    } finally {
      setLoading(false);
    }
  }, [getTransactions, getSummary, userId]);

  const deleteTransaction = async (id) => {
    try {
      const response = await fetch(`${API}/transactions/${id}`, { method: "Delete" });
      if (!response.ok) throw new Error("Failed to delete transaction");

      if (!id) {
        console.error('No ID provided to deleteTransaction!');
        Alert.alert('Error', 'Missing transaction ID');
        return;
      }

      loadData();
      Alert.alert("Success", "Transaction deleted successfully");
    } catch (error) {
      console.error("Error deleting transaction:", error);
      Alert.alert("Error", error.message);
    }
  };

  return {
    transactions,
    summary,
    loading,
    loadData,
    deleteTransaction
  };
};