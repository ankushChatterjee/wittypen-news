import React from 'react';
import NewsFeed from '../components/NewsFeed';
import Header from '../components/Header';
import '../style/newscard.scss';
export default class App extends React.Component{
    constructor(props){
        super(props);
        this.state = {country:"",loaded:false,countryName:""};
    }
    componentDidMount(){
        console.log("mount12"); 
        if('geolocation' in navigator){
            navigator.geolocation.getCurrentPosition(position=>{
                   let latitude = position.coords.latitude;
                   let longitude = position.coords.longitude;
                   console.log(latitude,longitude);
                   const url = `http://api.geonames.org/countryCodeJSON?lat=${latitude}&lng=${longitude}&username=ankushc`;

                   fetch(url).then(res=>{
                       return res.json();
                   }).then(data => {
                       this.setState({country:data.countryCode,loaded:true,countryName:data.countryName})
   
                       console.log(data);
                   }).catch(err =>{
                       console.log(err);
                   });
                   console.log(latitude,longitude);
               },error=>{
                   console.log(error.code);
               });
           }else{
               console.log("Not Supported");
           }
    }
    render(){

            if(!this.state.loaded){
                return(<div className="loading">
                <div className="lds-ripple"><div></div><div></div></div><br/>
                 Getting your country!
                </div>);
            }else{
                return (<div>
                    <Header countryName={this.state.countryName} />
                    <NewsFeed countryCode={this.state.country} />
                </div>);
            }
    }
}