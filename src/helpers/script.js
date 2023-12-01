// формат номера з тире
export const formatPhoneNumber = number => {
  const cleaned = number.replace(/\D/g, '');

  const match = cleaned.match(/^(\d{3})(\d{2})(\d{2})$/);

  if (match) {
    return `${match[1]}-${match[2]}-${match[3]}`;
  }

  return number;
};
// контакти з великої літери
export const formatName = str => {
  return str.charAt(0).toUpperCase() + str.slice(1);
};
