class MainApi {
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

  register = (name, email, password) => {
    return fetch(`${this._options.baseURL}/signup`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      withCredentials: true,
      credentials: 'include',
      body: JSON.stringify({name, email, password})
    })
    .then(this._handleResponse)
  };
  
  authorize = (email, password) => {
    return fetch(`${this._options.baseURL}/signin`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      withCredentials: true,
      credentials: 'include',
      body: JSON.stringify({password, email})
    })
    .then(this._handleResponse)
  };
  
  logout = () => {
    return fetch(`${this._options.baseURL}/logout`, {
      method: 'GET',
      withCredentials: true,
      credentials: 'include',
    })
    .then(this._handleResponse)
  }
  
  checkToken = () => {
    return fetch(`${this._options.baseURL}/users/me`, {
      method: 'GET',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
      },
      withCredentials: true,
      credentials: 'include',
    })
    .then(this._handleResponse)
  }

  deleteCard(id) {
    this._options.method = "DELETE";
    return fetch(this._options.baseURL+`/cards/${id}`, this._options)
    .then(res => {
      return this._handleResponse(res);
    });
  }

  getProfileInfo() {
    return fetch(this._options.baseURL+"/users/me", this._options)
    .then(res => {
      return this._handleResponse(res);
    });
  }

  setProfileInfo(userInfo) {
    this._options.body = JSON.stringify(userInfo);
    this._options.method = "PATCH";
    return fetch(this._options.baseURL+"/users/me", this._options)
    .then(res => {
      return this._handleResponse(res);
    });
  }

  updateAvatar(data) {
    this._options.body = JSON.stringify(data);
    this._options.method = "PATCH";
    return fetch(this._options.baseURL+"/users/me/avatar", this._options)
    .then(res => {
      return this._handleResponse(res);
    });
  }

  likeCard(id) {
    this._options.method = "PUT";
    return fetch(this._options.baseURL+`/cards/${id}/likes`, this._options)
    .then(res => {
      return this._handleResponse(res);
    });
  }

  unlikeCard(id) {
    this._options.method = "DELETE";
    return fetch(this._options.baseURL+`/cards/${id}/likes`, this._options)
    .then(res => {
      return this._handleResponse(res);
    });
  }

  changeLikeCardStatus(id, like) {
    if (like) {
      return this.likeCard(id);
    } else {
      return this.unlikeCard(id);
    }
  }
}

const api = new MainApi({
  // baseURL: 'https://api.movie.wardenclock.nomoreparties.co',
  baseURL: 'http://localhost:3000',
  mode: "cors",
  headers: {
    'Content-Type': 'application/json'
  },
  withCredentials: true,
  credentials: 'include',
});

export default api;