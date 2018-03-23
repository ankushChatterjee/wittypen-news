import React from 'react';
import '../style/newscard.scss';
export default class NewsCard extends React.Component{
    render(){
        return(
            <div className="newscard">
                <img src={this.props.imgURL} className="newsImg" />
                <div className="newsSource">{this.props.source}</div>
                <div className="newsTitle">{this.props.title}</div>
                <div className="author">{this.props.author}</div>
                <p className="newsDesc">{this.props.desc}</p>
                <a className="readmore"href={this.props.link}>Read More</a>
            </div>
        );  
    }
}