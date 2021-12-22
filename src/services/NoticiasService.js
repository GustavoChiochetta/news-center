import Base from "./base";

class Noticias {
  async getNoticias() {
    const response = await Base.get(this.endpoint);
    return  response.data;
  }

  async updateNoticia(id, payload) {
    const response =  await Base.patch(`${this.endpoint}/${id}`, payload);
    return response.data
  }

  async deleteNoticia(id) {
    const response = await Base.delete(`${this.endpoint}/${id}`);
    return response.data;
  }

  get endpoint() {
    return '/noticias';
  }
}

export default new Noticias();