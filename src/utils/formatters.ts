export const convertDateToFormattedString = (date: string): string => {
  const dateParts = date.split('-');
  return `${dateParts[2]}/${dateParts[1]}/${dateParts[0]}`;
};

export const convertImagePathToURL = (path: string): string => {
  return path ? `https://image.tmdb.org/t/p/w500${path}` : '/default-movie.png';
};

export const convertRantingToPorcentage = (rating: number): string => {
  return `${Math.round(rating) * 10}%`;
};

export const convertToHourMinute = (value: number): string => {
  const hours = Math.floor(value / 60);
  const minutes = value % 60;
  const hourText = hours > 0 ? hours + 'h' : '';
  const minuteText = minutes > 0 ? minutes + 'min' : '';
  return hourText + ' ' + minuteText;
};

export const convertToDollarFormat = (value: number): string => {
  const formattedValue = value.toLocaleString('pt-BR', {
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  });
  return '$' + formattedValue;
};
