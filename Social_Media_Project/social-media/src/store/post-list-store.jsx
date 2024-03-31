import { createContext, useReducer } from "react";

export const PostList = createContext({
  postList: [],
  addPost: () => {},
  deletePost: () => {},
});

const postListReducer = (currPostList, action) => {
  let newPostList = currPostList;
  if (action.type === "DELETE_POST") {
    newPostList = currPostList.filter(
      (post) => post.id !== action.payload.postid
    );
  } else if (action.type === "ADD_POST") {
    newPostList = [action.payload, ...currPostList];
  }
  return newPostList;
};

const PostListProvider = ({ children }) => {
  const [postList, dispatchPostList] = useReducer(
    postListReducer,
    defaultPostList
  );

  const addPost = (userIdd, postTitle, postBody, reaction, tags) => {
    dispatchPostList({
      type: "ADD_POST",
      payload: {
        id: Date.now(),
        title: postTitle,
        body: postBody,
        likes: reaction,
        tags: tags,
      },
    });
  };

  const deletePost = (postid) => {
    dispatchPostList({
      type: "DELETE_POST",
      payload: {
        postid,
      },
    });
  };

  return (
    <PostList.Provider
      value={{
        postList,
        addPost,
        deletePost,
      }}
    >
      {children}
    </PostList.Provider>
  );
};

const defaultPostList = [
  {
    id: "1",
    title: "In Mumbai",
    body: "Travelling To Mumbai.",
    likes: "4",
    userId: "user-9",
    tags: ["#vacations ", "#mumbai"],
  },
  {
    id: "2",
    title: "Passed",
    body: "Completed BE",
    likes: "7",
    userId: "user-10",
    tags: ["#completed ", "#degree"],
  },
];

export default PostListProvider;
