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
