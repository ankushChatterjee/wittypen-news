import React from 'react';
import '../style/newscard.scss';
export default class NewsCard extends React.Component{
    render(){
        let publishedAt = this.props.publishedAt;
        let pubStr = publishedAt.substring(0,publishedAt.length-1).split('T')[0];
        if(this.props.imgURL===null){
            console.log("hello");
            return(
                <div className="newscard">
                    <img src={this.props.imgURL} className="newsImg" />
                    <div className="nsource">{this.props.source}</div>
                    <div className="published"> {pubStr} </div>
                    <div className="newsTitle">{this.props.title}</div>
                    <div className="author">{this.props.author}</div>
                    <p className="newsDesc">{this.props.desc}</p>
                    <a className="readmore"href={this.props.link}>Read More</a>
                </div>
            );  
        }
        else {
        return(
            <div className="newscard">
                <img src={this.props.imgURL} className="newsImg" />
                <div className="newsSource">{this.props.source}</div>
                <div className="published"> {pubStr} </div>
                <div className="newsTitle">{this.props.title}</div>
                <div className="author">{this.props.author}</div>
                <p className="newsDesc">{this.props.desc}</p>
                <a className="readmore"href={this.props.link}>Read More</a>
            </div>
        );  
    }
    }
}