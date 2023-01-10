import React from "react";
import { useState } from "react";
import appService from "../App/Appservices/AppService";
import Comments from "../Comments/Comments";
import { useForm } from "react-hook-form";
import { useLoginStore } from "../Login/useLoginStore";

const AddComment = () => {
  const { loggedIn, userInfo } = useLoginStore();
  const [postID, setPostID] = useState();
  console.log(userInfo);
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();
  const onSubmit = async (data) => {
    console.log("commentdata", data);
    const postData = {
      user_id: data.user_id,
      product_id: data.product_id,
      comment: data.comment,
      active: true,
      title: data.title,
    };
    try {
      const response = await appService.Create("comments", postData);

      if (response.status) {
        console.log(response.data);
        setPostID(response.data.new_id);
        reset();
      }
    } catch (error) {
      console.error(error);
    }
  };
  
  return (
    <>
      {loggedIn ? (
        <form onSubmit={handleSubmit(onSubmit)}>
          <input
            type="text"
            {...register("product_id")}
            id="product_id"
            value={1}
          />
          <input
            type="text"
            {...register("user_id")}
            value={userInfo.user_id}
          />
          {errors.title?.type === "required" && <p>FORKERT</p>}
          <input
            type="text"
            {...register("title", { required: true })}
            placeholder="Title"
          />
          <textarea
            {...register("comment", { required: true })}
            id="comment"
            rows="10"
            placeholder="Giv din mening til kende"
          ></textarea>
          <input type="submit" value="Send comment" />
          <Comments postID={postID} />
        </form>
      ) : (
        <p>Log dog ind</p>
      )}
    </>
  );
};

export default AddComment;
