const { data, isLoading } = useGet<Expense[]>(
["expenses"],
"/expenses"
);

const createExpense = useApiMutation<Expense, ExpensePayload>(
"post",
"/expenses",
["expenses"]
);

createExpense.mutate({
title: "Food",
amount: 500,
});

const updateExpense = useApiMutation(
"patch",
`/expenses/${id}`,
["expenses"]
);

const deleteExpense = useApiMutation(
"delete",
`/expenses/${id}`,
["expenses"]
);
