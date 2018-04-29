import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class HoverCard extends Component {

    constructor(props) {
      super(props)
      this.state = {hovered: false};
    }

    onHover = () => {
      this.setState({hovered: true})
    }

    onLeave = () => {
      this.setState({hovered: false})
    }

    onClicked = () => {
    }

    render() {
      let isHovered = this.state.hovered;
      let bodyStyle = {
        display: isHovered ? 'block' : 'none',
        position: "absolute",
        bottom: 0,
        background: "rgba(0,0,0,0.5)",
        width: "100%",
        color: "#fff",
        padding: "10px 10px 10px 10px",
        minHeight: '0'
      }

      return (
        <div className="card" style={{width: "13rem", display: "inline-block", margin: "10px 10px 10px 10px"}} onMouseEnter={this.onHover} onMouseLeave={this.onLeave} onClick={this.onClicked}>
          <Link to={`/feed/${this.props.id}`}>
          <div>
          <img className="card-img-top" src={this.props.user.img} alt="Card image cap"/>
          <div className="card-body" style={bodyStyle}>
            <h5 className="card-title" style={{fontWeight: '800', fontSize: '0.8em'}}>{this.props.user.name}</h5>
            <p className="card-text" style={{fontSize: '0.9em'}}>{this.props.user.major} @ {this.props.user.school}</p>
            <p className="card-text" style={{fontSize: '0.9em'}}>{this.props.user.description}</p>
          </div>
          </div>
          </Link>
        </div>
      )
    }
  }

  export default HoverCard;
