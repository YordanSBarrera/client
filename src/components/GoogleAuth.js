import React from 'react'

class GoogleAuth extends React.Component{

    componentDidMount(){
        window.gapi.load('client:auth2',()=>{
            window.gapi.client.init({
                clientId:'958107640304-skghhbvovt70r9ul8hfhhlp4eio064ro.apps.googleusercontent.com',
                scope:'email'
            })
        })
     /*   958107640304-skghhbvovt70r9ul8hfhhlp4eio064ro.apps.googleusercontent.com
        CLIENT ID
        
        lIiLw3gq7fkIj3wo-0EQxojI
        Client Secret
        */
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