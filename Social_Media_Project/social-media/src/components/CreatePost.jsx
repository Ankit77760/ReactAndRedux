import { useContext, useRef } from "react";
import {PostList as PostListData} from "../store/post-list-store";

const CreatePost = ()=>{

  const {addPost} = useContext(PostListData);

  const userIdElm=useRef();
  const postTitleElm=useRef();
  const postBodyElm=useRef();
  const ReactionElm=useRef();
  const tagsElm=useRef();

  const handleSubmit = (event)=>{
    event.preventDefault();
    const userIdd=userIdElm.current.value;
    const postTitle = postTitleElm.current.value;
    const postBody = postBodyElm.current.value;
    const reaction = ReactionElm.current.value;
    const tags= tagsElm.current.value.split(" ");
    addPost(userIdd,postTitle,postBody,reaction,tags);
    userIdElm.current.value="";
    postTitleElm.current.value="";
    postBodyElm.current.value="";
    reaction.current.value="";
    tags.current.value=""


  }

    return(
        <form className="createPost" onSubmit={handleSubmit}>

      <div className="mb-3">
        <label htmlFor="userId" className="form-label">Enter Your UserName</label>
        <input ref={userIdElm} type="text" className="form-control" id="userId" placeholder="Your User Id" />
      </div>

  <div className="form-group">
    <label htmlFor="exampleInputEmail1" className="postTitle">Post Title</label>
    <input type="text" ref={postTitleElm} className="form-control postTitleinput" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter Post Title" />
  </div>
    
  <div className="form-group">
    <label htmlFor="body" className="content">Post Content</label>
    <textarea type="text" ref={postBodyElm} rows="4" className="form-control contentinput" id="body"  placeholder="Enter Post Content" />
  </div>


  <div className="form-group" style={{margin:'10px'}}>
    <label htmlFor="reactionn" className="reaction">No Of Reaction</label>
    <input type="text" ref={ReactionElm} className="form-control reaction" id="reactionn"  placeholder="Enter Your Reaction" />
  </div>

  <div className="form-group" style={{margin :"10px"}}>
    <label htmlFor="hashtag" className="hashtagg">Post Title</label>
    <input type="text" ref={tagsElm} className="form-control hashtag" id="hashtag" placeholder="Enter Post HashTag With Spaces" />
  </div>

  <button type="submit" className="btn btn-primary" style={{margin :'10px'}}>Submit</button>
</form>
    )

}
export default CreatePost;