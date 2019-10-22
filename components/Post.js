import React, {Component} from 'react';
import User from './User';
export default class Post extends Component {
    render(){
        return(
            <div className="post">
                <User 
                src="https://cdn-images-1.medium.com/max/1200/1*z6mqxfO7d9gHzfdCopBGrw.jpeg" 
                alt="man" 
                name="vasya"
                min/>
                <img src={this.props.src} alt={this.props.alt}></img>
                <div className="post_name">
                    some account
                </div>
                <div className="post_descr">
                Sed ut perspiciatis, unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam eaque ipsa, quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt, explicabo. Nemo enim ipsam voluptatem, quia voluptas sit, aspernatur aut odit aut fugit
                </div>
            </div>
        )
    }
}