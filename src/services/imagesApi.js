import axios from "axios";

const apiKey = "19947023-b7017f4974f73f87e742a194c";

const fetchImages = ({ currentPage = 1, searchQuery = "" }) => {
  return axios
    .get(
      `https://pixabay.com/api/?key=${apiKey}&q=${searchQuery}&per_page=6&page=${currentPage}`
    )
    .then((response) => response.data.hits);
};

// eslint-disable-next-line
export default { fetchImages };
