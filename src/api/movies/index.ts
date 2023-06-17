import { clientApi } from '../config';

export const getAll = async () => {
  const data = await clientApi.get('movies', {
    next: {
      revalidate: 30,
    },
  });
  return data;
};

export const getOne = async (id: number) => {
  const data = await clientApi.get(`movies/${id}`, {
    next: {
      revalidate: 30,
    },
  });
  return data;
};
