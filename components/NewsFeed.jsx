import React from 'react';
import NewsCard from './NewsCard';
import Grid from 'react-uikit-grid';
import '../style/newscard.scss'
export default class NewsFeed extends React.Component{
    constructor(props){
        super(props);
        console.log(props);
        this.state = {countryCode:props.countryCode,loaded:false,news:[]};
    }
    componentDidMount(){

        const apiKey = "1d51f86e8dda48779cbeb685a4cc174e";
        console.log(this.state);

        const url = `https://newsapi.org/v2/top-headlines?country=${this.state.countryCode}&apiKey=${apiKey}`;
        fetch(url).then(res=>{
            return res.json();
        }).then(data=>{
            console.log(data);
            this.setState({news:data.articles,loaded:true});
        }).catch(err=>{
            console.log(err);
        });

    }
    render(){
        let newsElements = this.state.news.map(item=>{
            return (<NewsCard key={item.url} imgURL={item.urlToImage} publishedAt={item.publishedAt} source={item.source.name} title={item.title} desc={item.description} link={item.url} author={item.author} />);
        });

        if(this.state.loaded){
            return(<div className="wrapper"><div className="grid">
                {newsElements}
                </div></div>
            );
        }else{
            console.log(this.state);
            return(
                <div className="loading"> <div className="lds-ripple"><div></div><div></div></div>  Loading News</div>
            );
        }
    }
}