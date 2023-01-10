import React from "react";
import useGetByIdApiDataFromEnpoint from "../../Hooks/useGetByIdApiDataFromEnpoint";

const Comments = ({ postID }) => {
  const product_id = 1;
  // const [comments, setComments] = useState([]);
  const {state: comments} = useGetByIdApiDataFromEnpoint("comments", product_id, "items")
  console.log("jeg er fra state ", comments)
 const Name = () => "hej"
  return (
    <ul>
      <li><Name /></li>
      {comments
        .filter(item => item.title !== "")
        .map(item => <li key={item.id}>{item.title}</li>
        )}
    </ul>
  );
};

export default Comments;
