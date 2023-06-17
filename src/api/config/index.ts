/* eslint-disable @typescript-eslint/no-explicit-any */
const BASE_URL = process.env.CLIENT_BASE_URL;

export const clientApi = {
  get: async <T = any>(input: RequestInfo, init?: RequestInit) => {
    const res = await fetch(`${BASE_URL}/${input}`, {
      ...init,
    });

    if (res.ok) {
      const data = await res.json();
      return data as T;
    }

    throw res;
  },
  post: async <T = any>(input: RequestInfo, init?: RequestInit) => {
    const res = await fetch(`${BASE_URL}${input}`, {
      ...init,

      method: 'POST',
    });

    if (res.ok) {
      const { data } = await res.json();
      return data as T;
    }

    throw res;
  },
  put: async <T = any>(input: RequestInfo, init?: RequestInit) => {
    const res = await fetch(`${BASE_URL}${input}`, {
      ...init,
      method: 'PUT',
    });

    if (res.ok) {
      const { data } = await res.json();
      return data as T;
    }

    throw res;
  },
  patch: async <T = any>(input: RequestInfo, init?: RequestInit) => {
    const res = await fetch(`${BASE_URL}${input}`, {
      ...init,
      method: 'PATCH',
    });

    if (res.ok) {
      const { data } = await res.json();
      return data as T;
    }

    throw res;
  },
  delete: async <T = any>(input: RequestInfo, init?: RequestInit) => {
    const res = await fetch(`${BASE_URL}${input}`, {
      ...init,
      method: 'DELETE',
    });

    if (res.ok) {
      const { data } = await res.json();
      return data as T;
    }

    throw res;
  },
};
