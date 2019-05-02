import React, { Component } from 'react';


//Login page
 class LoginPage extends Component {
  render() {
    return (
        <body className="text-center">
            <div className="container-fluid" >
                <div className="row">
                    <div className="col-sm-9 col-md-7 col-lg-5 mx-auto">
                        <form className="form-group">

                            <h1 className="h3 mb-3 font-weight-normal">Please sign in</h1>

                            <label for="inputEmail" className="sr-only">Email address</label>
                            <input type="email" id="inputEmail" className="form-control" placeholder="Email address" required autofocus />
                            <label for="inputPassword" className="sr-only">Password</label>
                            <input type="password" id="inputPassword" className="form-control" placeholder="Password" required />

                            <button className="btn btn-lg btn-primary btn-block" type="submit">Sign in</button>

                        </form>
                    </div>
                </div>
            </div>
        </body>
        
    );
  }
}

export default LoginPage;