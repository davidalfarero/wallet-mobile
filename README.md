# 💸 Wallet App

A simple and elegant mobile wallet application built using React Native and Expo. Users can securely sign up, manage income and expenses, and track their financial summary — all synced with a MongoDB backend.

This app includes:

- 🔐 User Authentication using Clerk (with email verification)
- ➕ Add Transactions (Income or Expense)
- 🧮 Insert Amount, Title, Select Category
- 💾 Save data to MongoDB
- 📊 Transaction Summary: Total Balance, Income, Expense
- 📅 Detailed Transaction Logs with creation dates
- 🧹 Filter Transactions by All / Income / Expense
- 🗑️ Delete individual transactions

Tech Stack:

- React Native (Expo)
- Clerk (Authentication)
- Node.js (optional for backend)
- MongoDB

To run this project:

**Backend**

```bash
cd backend
npm install
npm run dev

**Backend**
cd frontend
npm install
npx expo start

Folder Structure:
wallet-app/
├── backend/            # Node.js + MongoDB API
└── frontend/           # React Native App (Expo)
    ├── assets/
    ├── components/
    ├── constants/
    ├── hook/
    └── screens/
```
