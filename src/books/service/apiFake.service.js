import axios from 'axios';
export class ApiFakeService {
  async getAll() {
    const response = await axios.get('https://potterapi-fedeperin.vercel.app/es/books');
    return response.data;
  }
}