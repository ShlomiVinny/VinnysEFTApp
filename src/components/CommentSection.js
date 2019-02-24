import React, { Component } from 'react';
import myData from '../data.json';
import avatar from '../resources/avatar-image.png';


class CommentSection extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    render() {
        var comments;

        switch (this.props.location) {
            default: return null;
            case "Interchange": comments = myData.comments.InterchangeComments;
                break;
            case "Customs": comments = myData.comments.CustomsComments;
                break;
            case "Factory": comments = myData.comments.FactoryComments;
                break;
            case "Woods": comments = myData.comments.WoodsComments;
                break;
            case "Shoreline": comments = myData.comments.ShorelineComments;
                break;
            case "Lab": comments = myData.comments.LabComments;
                break;
        }

        return (
            <div className="App-comments">
                {comments.map((comment, key) => {
                    return (
                        <div className="comment">
                            <img className="comment-avatar" src={avatar} style={{ backgroundColor: `${comment.avatarColor}` }} alt=" avatar "></img>
                            <div className="comment-text">
                                <span className="comment-author">{comment.author}</span>
                                <span className="comment-content">{comment.commentContent}</span>
                                <span className="comment-date">{comment.datePosted}</span>
                            </div>
                        </div>
                    )
                }
                )
                }
            </div>
        )
    }
}

export default CommentSection;