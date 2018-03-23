import React from 'react';
import '../style/header.scss';
export default class Header extends React.Component{
    render(){
        return(
            <header className="header">
                <div className="heading">
                <div uk-spinner="true" />
                    News Feed
                </div>
                <div className="subhead" uk-sticky="true">
                    Country: {this.props.countryName}
                </div>
            </header>
        );  
    }
}