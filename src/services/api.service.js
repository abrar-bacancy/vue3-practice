const API_URL = "http://localhost:3000/"

const ApiService = {
  async query(resource) {
    let res = await fetch(API_URL + resource)
    if (!res.ok) {
      throw Error('ApiService error')
    }
    let data = await res.json()
    return data;
  },

  async get(resource, id = "") {
    return fetch(API_URL + resource + '/' + id).then((res) => {
      if (!res.ok) {
        throw Error('ApiService error')
      }
      return res.json();
    })
  },

  async post(resource, params) {
    return await fetch(API_URL + resource, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(params)
      })
  },

  // update(resource, id, params) {
    
  // },

  // put(resource, params) {

  // },

  // delete(resource) {
    
  // }
};

export default ApiService;


export const PostsService = {
  query() {
    return ApiService.query("posts")
  },
  get(id) {
    return ApiService.get("posts", id)
  },
  create(params) {
    return ApiService.post("posts", params);
  },
  // update(id, params) {
  //   return ApiService.update("posts", id, { post: params });
  // },
  // destroy(id) {
  //   return ApiService.delete(`posts/${id}`);
  // }
};