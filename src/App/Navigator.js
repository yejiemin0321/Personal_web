import React from 'react';
import './App.css';
import { BsFillFileEarmarkPersonFill, BsMailbox2 } from "react-icons/bs";
import { ImOffice } from "react-icons/im";
import { AiFillGitlab } from "react-icons/ai";
import { Link, withRouter } from 'react-router-dom';
class Navigator extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            isActive: [1, 0, 0]
        }
    }
    handleClick = (index) => () => {
        const isActive = this.state.isActive.map((value, i) => i === index ? 1 : 0);
        // const newIsActive = [...this.state.isActive]
        //const newIsActive = Array.from({ length: this.state.isActive }, i === index ? 1 : 0);
        this.setState({ isActive: isActive })
    }

    render() {
        return (
            <ul>
                <li><Link className={this.state.isActive[0] ? "active" : "default"} onClick={this.handleClick(0)} to="/profile"><BsFillFileEarmarkPersonFill />&nbsp;Profile</Link></li>
                <li><Link className={this.state.isActive[1] ? "active" : "default"} onClick={this.handleClick(1)} to="/contact"><BsMailbox2 />&nbsp;Contact&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<ImOffice />&nbsp;Formation</Link></li>
                <li><Link className={this.state.isActive[2] ? "active" : "default"} onClick={this.handleClick(2)} to="/experience"><AiFillGitlab />&nbsp;Experience</Link></li>
            </ul>
        );
    }
}

export default withRouter(Navigator);