import { AxiosResponse } from 'axios';

export async function apiRequest<T>(axiosRequest: () => Promise<AxiosResponse<T>>): Promise<T> {
  try {
    const response = await axiosRequest();
    return response.data;
  } catch (error) {
    console.error(error);
    throw error;
  }
}
