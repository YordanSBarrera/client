import React from 'react'

class GoogleAuth extends React.Component{

    componentDidMount(){
        window.gapi.load('client:auth2',()=>{
            window.gapi.client.init({
                clientId:'958107640304-skghhbvovt70r9ul8hfhhlp4eio064ro.apps.googleusercontent.com',
                scope:'email'
            })
        })

    }

    render(){
        return(
            <div>
                GoogleAuth
            </div>
        )
    }
};

export default GoogleAuth;