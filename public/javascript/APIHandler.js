class APIHandler {
  constructor (baseUrl) {
    this.BASE_URL = baseUrl;
    this.APIRequest = axios.create({
      baseURL: this.BASE_URL,
    })
  }

  async getFullList () {
    try {
      const { data: characters } = await this.APIRequest.get('/characters');
      console.log("characters", characters);
      return characters;
    } catch (err) {
      console.error(err)
    }
  }

  async getOneRegister (id) {
    const { data: character } = await this.APIRequest.get('/characters/' + id);
    console.log("character", character);
    return character;
  }

  async createOneRegister (newData) {
    const test = await this.APIRequest.post('/characters/', newData);
    console.log(test)
    return test
  }

  async updateOneRegister (id, newData) {
    const updateUser = await this.APIRequest.put('/characters/' + id, newData)
    console.log(updateUser)
    return updateUser
  }

  async deleteOneRegister (id) {
    const deleteUser = await this.APIRequest.delete('/characters/' + id);
  }
}
