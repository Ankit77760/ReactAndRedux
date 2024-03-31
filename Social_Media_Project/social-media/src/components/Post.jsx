import { useContext } from "react";
import { MdDelete } from "react-icons/md";
import { PostList as PostListData } from "../store/post-list-store";

const Post = ({post}) => {
  
  const {deletePost } = useContext(PostListData);

  return (
    <div className="card post-card" style={{ width: '50%' }}>
      <div className="card-body">


        <h5 className="card-title">{post.title}</h5>
        <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger" onClick={()=>deletePost(post.id)}><MdDelete/></span>
        <p className="card-text">
          {post.body}
        </p>
        {post.tags.map((posttag)=><span key={posttag} className="badge text-bg-primary hashtag">{posttag}</span>)}
        <div className="alert alert-success likes" role="alert">
          This post has been liked by {post.likes} people
        </div>
      </div>
    </div>
  );
};
export default Post;
