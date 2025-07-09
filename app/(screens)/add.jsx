import { View, Text, TouchableOpacity, TextInput, Keyboard, TouchableWithoutFeedback, Alert, ActivityIndicator } from 'react-native';
import { styles } from '../../assets/styles/addStyles';
import { useState } from 'react';
import { Ionicons } from '@expo/vector-icons';
import { COLORS } from '../../constants/Colors';
import CATEGORIES from '../../data/CATEGORIES';
import { API } from '../../lib/api';
import { useUser } from '@clerk/clerk-expo';
import { useRouter } from 'expo-router';

const Add = () => {
  const { user } = useUser();
  const router = useRouter();
  const [title, setTitle] = useState('');
  const [amount, setAmount] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('');
  const [isIncome, setIsIncome] = useState(true);
  const [isLoading, setIsLoading] = useState(false);

  const handleAdd = async () => {
    if (!amount || isNaN(parseFloat(amount)) || parseFloat(amount) <= 0) {
      Alert.alert("Error", "Please enter a valid amount");
      return;
    }
    if (!title.trim()) return Alert.alert("Error", "Please enter a transaction title");
    if (!selectedCategory) return Alert.alert("Error", "Please select a category");

    setIsLoading(true);

    try {
      const response = await fetch(`${API}/transactions`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          userId: user.id,
          title,
          amount,
          category: selectedCategory,
        })
      });

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.error || "Failed to create transaction");
      }

      Alert.alert("Success", "Transaction created successfully");
      router.push('/');

      setAmount('');
      setTitle('');
      setSelectedCategory(null);
    } catch (error) {
      Alert.alert("Error", error.message || "Failed to create transaction");
      console.error("Error creating transaction", error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss} accessible={false}>
      <View style={styles.container}>
        <View style={styles.headerContainer}>
          <Text style={styles.title}>Add Transactions</Text>
          <View style={{ flexDirection: 'row', gap: 5, alignItems: 'center' }}>
            <Ionicons
              name='checkmark-outline'
              size={20}
              color={COLORS.text}
            />
            <TouchableOpacity
              onPress={handleAdd}
              disabled={isLoading}
            >
              <Text style={styles.addText}>
                {isLoading ? 'Adding...' : 'Add'}
              </Text>
            </TouchableOpacity>
          </View>
        </View>

        <View style={styles.card}>
          <View style={styles.typeSelector}>
            {/* Income Button */}
            <TouchableOpacity
              style={[styles.typeButton, isIncome && styles.typeButtonActive]}
              onPress={() => setIsIncome(true)}
            >
              <Ionicons
                name='arrow-down-circle-outline'
                size={20}
                color={isIncome ? COLORS.white : COLORS.text}
              />
              <Text
                style={[styles.typeText, isIncome && styles.typeTextActive]}
              >
                Income
              </Text>
            </TouchableOpacity>

            {/* Expense Button */}
            <TouchableOpacity
              style={[styles.typeButton, !isIncome && styles.typeButtonActive]}
              onPress={() => setIsIncome(false)}
            >
              <Ionicons
                name='arrow-up-circle-outline'
                size={20}
                color={isIncome ? COLORS.text : COLORS.white}
              />
              <Text
                style={[styles.typeText, !isIncome && styles.typeTextActive]}
              >
                Expense
              </Text>
            </TouchableOpacity>
          </View>

          <Text style={styles.sectionTitle}>
            <Ionicons
              name='cash-outline'
              size={16}
              color={COLORS.text}
            /> Amount
          </Text>

          <View style={styles.amountContainer}>
            <Text style={styles.currencySymbol}>₱</Text>
            <TextInput
              style={styles.amountInput}
              placeholder="0.00"
              placeholderTextColor={COLORS.textLight}
              value={amount}
              onChangeText={setAmount}
              keyboardType='numeric'
            />
          </View>

          <Text style={styles.sectionTitle}>
            <Ionicons
              name='create-outline'
              size={16}
              color={COLORS.text}
            /> Title
          </Text>

          <View style={styles.inputContainer}>
            <TextInput
              style={styles.input}
              placeholder='Transaction Title'
              placeholderTextColor={COLORS.textLight}
              value={title}
              onChangeText={setTitle}
            />
          </View>

          <Text style={styles.sectionTitle}>
            <Ionicons
              name='pricetag-outline'
              size={16}
              color={COLORS.text}
            /> Category: {selectedCategory || ''}
          </Text>

          <View style={styles.categoryContainer}>
            {CATEGORIES.map((category) => (
              <TouchableOpacity
                key={category.id}
                style={[
                  styles.categoryButton,
                  selectedCategory === category.name && styles.categoryButtonActive,
                ]}
                onPress={() => setSelectedCategory(category.name)}
              >
                <Ionicons
                  name={category.icon}
                  size={20}
                  color={selectedCategory === category.name ? COLORS.white : COLORS.text}
                  style={styles.categoryIcon}
                />
                <Text style={[
                  styles.categoryButtonText,
                  selectedCategory === category.name && styles.categoryButtonTextActive,
                ]}
                >
                  {category.name}
                </Text>
              </TouchableOpacity>
            ))}
          </View>
        </View>

        {isLoading && (
          <View style={styles.loadingOverlay}>
            <ActivityIndicator size='large' color={COLORS.primary} />
          </View>
        )}
      </View>
    </TouchableWithoutFeedback>
  );
};
export default Add;