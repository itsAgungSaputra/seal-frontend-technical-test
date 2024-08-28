export const formatDate = (dateString) => {
  const options = { day: "2-digit", month: "long", year: "numeric" };
  return new Intl.DateTimeFormat("id-ID", options).format(new Date(dateString));
};

export const extractCategory = (link) => {
  const urlParts = link.split("/");
  return urlParts[3] || "Uncategorized";
};