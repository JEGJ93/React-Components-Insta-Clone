//Complete the necessary code in this file
// import useState
import React, {useState} from "react";
import Post from "./Post";
import "./Posts.css";
import Data from "../../dummy-data";
// import data 

const PostsPage = () => {
  // set up state for your data
  const [dummyData2, setdummyData2] = useState( Data )

  return (
    <div className="posts-container-wrapper">

      {/* map through data here to return a Post and pass data as props to Post */}
      {dummyData2.map(object => {
        return <Post post = {object}/>
      })}
      {/* I created a function called PostPage 
      and then set up state for my data which is the 
      data inside of dummyData. I called it dummyData2. 
      Then I returned a div with a class that gives it styling
      Then I mapped through dummyData2 which is equivalent to Data which
      is dummyData that is an array of objects. for every single object
      in the dummyData array I want to call a function called Post 
      and give it a props called post, which is equal to the object. */}
    </div>
  );
};

export default PostsPage;
