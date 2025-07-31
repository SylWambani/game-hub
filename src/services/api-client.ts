import axios from "axios";

export default axios.create({
  baseURL: "https://api.rawg.io/api",
  params: {
    key: "112208b9896140189213d28b9f12e9e2", //rawg api key
  },
});
