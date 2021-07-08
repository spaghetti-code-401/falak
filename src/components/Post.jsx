import React from 'react';
import '../css/post.scss'

export default function Post() {
  
        return (
            <div>
                <form name="blog_post" className="form-horizontal">

                
                <div className='onlineFriend'>
                    <img className='profilePic' src="https://cdn.icon-icons.com/icons2/2643/PNG/512/male_boy_person_people_avatar_icon_159358.png" alt="" />
                    <p className='userName'>username</p>
                </div>
                    
                    <div id="blog_post">
                     
                        <div className="form-group">
                            <label className="col-sm-2 control-label required" htmlFor="blog_post_body" ></label>
                            <div className="col-sm-10">
                                <textarea type="text"
                                       id="blog_post_body"
                                       required="required"
                                       className="form-control"
                                       placeholder="write here"></textarea>
                                       
                            </div>
                        </div>
                        <div className="form-group">
                        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"></link>

                            <div className="col-sm-2"></div>
                            <div className="col-sm-10">
                                {/* <button type="submit"
                                        id="blog_post_submit"
                                        className="btn-default btn">
                                    Submit
                                </button> */}
                                <i class="fa fa-thumbs-up"></i>
                                <i class="fa fa-thumbs-down"></i>
                                <i class="fa fa-reply-all"></i>
                                <i class="fa fa-send-o"></i>
                            </div>
                        </div>
                    </div>
                </form>
            </div>
            
        );
    
}