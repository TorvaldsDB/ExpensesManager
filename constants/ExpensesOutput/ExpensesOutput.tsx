import React from "react";
import { StyleSheet } from "react-native";
import ExpensesList from "./ExpensesList";
import ExpensesSummary from "./ExpensesSummary";

const ExpensesOutput = () => {
  return (
    <>
      <ExpensesSummary />
      <ExpensesList />
    </>
  );
};

export default ExpensesOutput;

const styles = StyleSheet.create({});
