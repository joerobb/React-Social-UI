import React, { Component } from "react";

class Footer extends Component {

state = {
     comments: 5,
     retweets: 1,
     likes: 8
};

IncrementComments = () => {
  this.setState({ comments: this.state.comments + 1 });
}

IncrementLikes = () => {
  this.setState({ likes: this.state.likes + 1 });
}

IncrementRetweets = () => {
  this.setState({ retweets: this.state.retweets + 1 });
}

  render() {
  return (
    <div className="footer">
      <h3>Here's a little headline</h3>
      <p>Here's a little bit more info about the little headline, to fill the space out a bit.</p>
    <div className="social">
    <p className="url">joerobb.github.io</p>
    <button className="commentButton" onClick={this.IncrementComments}>Comment </button><p>{this.state.comments}</p>
    <button className="likeButton" onClick={this.IncrementLikes}>Like </button> <p>{this.state.likes}</p>
    <button className="retweetButton" onClick={this.IncrementRetweets}>Retweet </button> <p>{this.state.retweets}</p>
    </div>
    </div>
  );
}

}

export default Footer;
