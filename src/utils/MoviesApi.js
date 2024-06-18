class MoviesApi {
  constructor(options) {
    this._options = options;
  }

  _handleResponse(response) {
    if (response.ok) {
      return response.json();
    }
    else {
      return Promise.reject(`Ошибка: ${response.status}`);
    }
  }

  getMovies() {
    return fetch(this._options.baseURL, this._options)
    .then(res => {
      return this._handleResponse(res);
    });
  }
}

const api = new MoviesApi({
  baseURL: 'https://api.nomoreparties.co/beatfilm-movies',
  mode: "cors",
  headers: {
    'Content-Type': 'application/json'
  },
  withCredentials: false,
});

export default api;