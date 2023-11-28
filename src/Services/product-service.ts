import axios from 'axios';

const Base_URL = "https://api.github.com/users";

export function findUser(user: string) {
  return axios.get(`${Base_URL}/${user}`);
}

