import Base from './base';

class NoticiasAutoresService {
  async getNoticiaAutor(id) {
    const response = await Base.get(`${this.endpoint}/${id}`)
    return response.data;
  }

  async createNoticiaAutor(payload) {
    const response = await Base.post(`${this.endpoint}`, payload);
    return response.data;
  }

  get endpoint() {
    return '/noticias_autores';
  }
}

export default new NoticiasAutoresService();