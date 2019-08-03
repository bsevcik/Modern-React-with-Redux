import axios from "axios";

export default axios.create({
  baseURL: "https://api.unsplash.com",
  headers: {
    Authorization:
      "Client-ID 2cacfb1ed0b3e1f179781ae897bddb676a918d245643dc2c7947cb66ef331709"
  }
});
