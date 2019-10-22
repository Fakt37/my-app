import React, {Component} from 'react';
import Post from './Post';
export default class Posts extends Component {
    render(){
        return(
            <div className="left">
                <Post src="https://cdn-images-1.medium.com/max/1200/1*z6mqxfO7d9gHzfdCopBGrw.jpeg"  alt="inst" />
                <Post srс="https://img2.goodfon.ru/original/2000x1374/1/ed/rozy-kally-cvety-buket.jpg" alt="second" />
            </div>
        )
    }
}