const BASE_URL = 'https://product-catalog-api-0h4z.onrender.com';
const NEW_ENDPOINT = '/new/';
const DISCOUNT_ENDPOINT = '/discount/';
const AMOUNT_ENDPOINT = '/amount/';

const request = <T>(
  url: string,
): Promise<T> => {
  return fetch(BASE_URL + url)
    .then(response => {
      if (!response.ok) {
        throw new Error();
      }

      return response.json();
    });
};

export const client = {
  get: <T>(url: string) => request<T>(url),
  getNew: <T>(url: string) => request<T>(url + NEW_ENDPOINT),
  getDiscount: <T>(url: string) => request<T>(url + DISCOUNT_ENDPOINT),
  getAmount: <T>(url: string) => request<T>(url + AMOUNT_ENDPOINT),
};
