export default function formatEventDate(startDate, endDate) {
  const options = {
    month: "short",
    day: "numeric",
    hour: "numeric",
    minute: "numeric",
    hour12: true,
  };

  const start = new Date(startDate).toLocaleString("en-US", options);
  const end = new Date(endDate).toLocaleString("en-US", options);

  return `${start} - ${end}`;
}


