import React, { Component } from 'react';
import myData from '../data.json';
import avatar from '../resources/avatar-image.png';


class CommentSection extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

   // componentDidMount(){
    //     fetch('https://api.mydomain.com')
    //   .then(response => response.json())
    //   .then(data => this.setState({ data }));
    // }

    render() {
        var comments;

        switch (this.props.location) {
            default: return <div id='error'> ERROR! </div>;
            case "Interchange": comments = myData.Comments.InterchangeComments;
                break;
            case "Customs": comments = myData.Comments.CustomsComments;
                break;
            case "Factory": comments = myData.Comments.FactoryComments;
                break;
            case "Woods": comments = myData.Comments.WoodsComments;
                break;
            case "Shoreline": comments = myData.Comments.ShorelineComments;
                break;
            case "Lab": comments = myData.Comments.LabComments;
                break;
        }

        return (
            <div className="App-comments">
                {comments.map((comment, key) => {
                    return (
                        <div className="comment" key={key}>
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