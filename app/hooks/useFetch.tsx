import { useQuery } from '@tanstack/react-query';
import axios from 'axios';

export function fetchData(type: string, category: string, numberOfImages: number) {
  return useQuery(['fetchData', type, category, numberOfImages], async () => {
    try {
      const response = await axios.post(`${process.env.BASE_URL}/${type}/${category}`, {
        exclude: [], 
      });

      if (!response.data || !response.data.files || response.data.files.length === 0) {
        throw new Error('No data found');
      }

      const images = response.data.files.slice(0, numberOfImages);

      return images;
    } catch (error) {
      throw error;
    }
  });
}
