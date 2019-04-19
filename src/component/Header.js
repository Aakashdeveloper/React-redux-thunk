import React, {Component} from 'react';
import { Link } from 'react-router-dom';
import firebase from "./FireStore";


class Header extends Component {


    saveUid = e => {
        e.preventDefault();
        const db = firebase.firestore();
        db.settings({
            timestampsInSnapshots: true
        });
        db.collection('user').add({
            userid: localStorage.getItem('userId')
        });
      };

    render(){
        return(
            <div>
                <nav class="navbar navbar-expand-md bg-dark navbar-dark">
                    <a class="navbar-brand">SimplyRets</a>
    
                    <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#collapsibleNavbar">
                        <span class="navbar-toggler-icon"></span>
                    </button>
    
                    <div class="collapse navbar-collapse" id="collapsibleNavbar">
                        <ul class="navbar-nav">
                        <li class="nav-item">
                            <Link to="/" className="nav-link">Home</Link>
                        </li>
                        </ul>
                        <ul class="navbar-nav ml-auto">
                        <li class="nav-item">
                            <button className="btn btn-success"
                                onClick={this.saveUid}>
                                Save UiD
                            </button>
                        </li>
                        </ul>
                    </div> 
                </nav>
            </div>
        )
    }
}

export default Header;