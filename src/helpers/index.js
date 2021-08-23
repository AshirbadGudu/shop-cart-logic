export const convertObjectToArray = (object, arr = []) => {
  for (const id in object) arr.push({ id, ...object[id] });
  return arr;
};
export const formatCurrency = (amount) => {
  return new Intl.NumberFormat("en-IN", {
    style: "currency",
    currency: "INR",
  }).format(amount);
};
