import React from "react";
import "./post.css";

function Post() {
  return (
    <div className="post">
      <img
        className="postImg"
        src="https://images.pexels.com/photos/6685428/pexels-photo-6685428.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
        alt="blog_image"
      />
      <div className="postInfo">
        <div className="postCat">
          <span className="spna"> Music</span>
          <span>Life</span>
        </div>
      </div>
      <span className="postTitle">This is post tittle</span>

      <span className="postDate"> 1 hour ago</span>
      <p className="postDesc">
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Assumenda
        officia architecto deserunt deleniti? Labore ipsum aspernatur magnam
        fugiat, reprehenderit praesentium blanditiis quos cupiditate ratione
        atque, exercitationem quibusdam, reiciendis odio laboriosam?
      </p>
    </div>
  );
}

export default Post;
