import React from 'react'

class GoogleAuth extends React.Component {
    state = { isSignedIn: null }

    componentDidMount() {
        window.gapi.load('client:auth2', () => {
            window.gapi.client.init({
                clientId: '958107640304-skghhbvovt70r9ul8hfhhlp4eio064ro.apps.googleusercontent.com',
                scope: 'email'
            }).then(() => {
                this.auth = window.gapi.auth2.getAuthInstance();
                this.setState({ isSignedIn: this.auth.isSignedIn.get() })
                this.auth.isSignedIn.listen(this.onAuthChange);
            })
        })
        /*   958107640304-skghhbvovt70r9ul8hfhhlp4eio064ro.apps.googleusercontent.com
           CLIENT ID
           
           lIiLw3gq7fkIj3wo-0EQxojI
           Client Secret
           */
    }

    onSignInClick = () => {
        this.auth.signIn();
    }
    onSignOutClick = () => {
        this.auth.signOut();
    }

    onAuthChange = () => {
        this.setState({ isSignedIn: this.auth.isSignedIn.get() })
    }
    renderAuthButton() {
        if (this.state.isSignedIn === null) {
            return null;
        }
        if (this.state.isSignedIn) {
            return (
                <button 
                className="ui red google button"
                onClick={this.onSignOutClick}
                >
                    <i className="google icon" />
                    Sign Out
                </button>
            )
        } else {
            return (
                <button 
                className="ui red google button"
                onClick={this.onSignInClick}
                >
                    <i className="google icon" />
                    Sign In with Google
                </button>
            )
        }
    }

    render() {
        return (
            <div>
                {this.renderAuthButton()}
            </div>
        )
    }
};

export default GoogleAuth;