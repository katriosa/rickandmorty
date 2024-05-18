export const getStatusIcon = (status) => {
  switch (status) {
    case "Alive":
      return "🟢";
    case "Dead":
      return "🔴";
    default:
      return "🟠";
  }
};
