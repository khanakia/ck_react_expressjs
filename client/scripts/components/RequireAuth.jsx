import React from 'react';
import Auth from '../helpers/auth.js'

export default function(WrappedComponent) {
    class AuthenticatedComponent extends React.Component {
        componentWillMount() {
            if (!Auth.check()) {
                hashHistory.push('/')
            }
        }

        render() {
            return (
                <div>
                    {Auth.check() === true
                        ? <WrappedComponent {...this.props}/>
                        : null
                    }
                </div>
            )
        }
    }
}