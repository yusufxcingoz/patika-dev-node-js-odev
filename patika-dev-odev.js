import axios from "axios";

const getData = async (user_id) => {
  const getUser = await axios(
    "https://jsonplaceholder.typicode.com/users/" + user_id
  );
  const getPost = await axios(
    "https://jsonplaceholder.typicode.com/posts?userId=" + user_id
  );

  console.log(getUser.data);
  console.log(getPost.data);
};

export default getData;
