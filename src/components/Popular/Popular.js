import React from "react";
import "./Popular.css";
import { BsArchive , BsChevronDoubleDown,BsHeartFill,BsFillChatLeftTextFill} from "react-icons/bs";

const Popular = () => {
  return (
    <div className="popular">
      <div className="test">
        <div className="test1"><BsArchive /> <h6>Popular Posts</h6></div>
        <div className="test2">
          <div className="photo">
        <div className="pho">
         <div className="photo0"> </div>
         <div className="like">
          <div className="like1"><BsHeartFill className="text-danger" /> 867.87k</div>
          <div className="like2"><BsFillChatLeftTextFill />5,208K</div>
         </div>
         <div className="date">Sep 23,2022</div>
          <p><b>berloapp</b>  NEW EBOOK!   Leave a comment and we’ll DM you the download link (but only if you like getting huyndreds of store visitors without paying a penny)</p>
          </div>
          <div className="pho">
          <div className="photo1"></div>
          <div className="like">
          <div className="like1"><BsHeartFill className="text-danger" /> 867.87k</div>
          <div className="like2"><BsFillChatLeftTextFill />5,208K</div>
         </div>
         <div className="date">Sep 23,2022</div>
       <p>berloapp          NEW EBOOK!            Leave a comment and we’ll DM you the download link (but only if you like getting huyndreds of store visitors without paying a penny)</p>
       </div>
       {/* <div className="pho">
       <div className="photo2"></div>
       <div className="like">
          <div className="like1"><BsHeartFill className="text-danger" /> 867.87k</div>
          <div className="like2"><BsFillChatLeftTextFill />5,208K</div>
         </div>
         <div className="date">Sep 23,2022</div>
          <p><b>berloapp</b>         NEW EBOOK!            Leave a comment and we’ll DM you the download link (but only if you like getting huyndreds of store visitors without paying a penny)</p>
          </div> */}

        
      
        </div>
       </div>
      </div>
      <div className="test3"> <h6>View All</h6> <BsChevronDoubleDown /></div>
    </div>
  );
};

export default Popular;
