import React from 'react';
import User from './User';

export default function Users(){
    return(
        <div className="right">
            <User 
                src="https://cdn-images-1.medium.com/max/1200/1*z6mqxfO7d9gHzfdCopBGrw.jpeg" 
                alt="man" 
                name="vasya"/>
            <div className="users_block">
            <User 
                src="https://cdn-images-1.medium.com/max/1200/1*z6mqxfO7d9gHzfdCopBGrw.jpeg" 
                alt="man" 
                name="vasya"
                min/>
            <User 
                src="https://cdn-images-1.medium.com/max/1200/1*z6mqxfO7d9gHzfdCopBGrw.jpeg" 
                alt="man" 
                name="vasya"
                min/>
            <User 
                src="https://cdn-images-1.medium.com/max/1200/1*z6mqxfO7d9gHzfdCopBGrw.jpeg" 
                alt="man" 
                name="vasya"
                min/>
            <User 
                src="https://cdn-images-1.medium.com/max/1200/1*z6mqxfO7d9gHzfdCopBGrw.jpeg" 
                alt="man" 
                name="vasya"
                min/>
            </div>
        </div>
    )
}