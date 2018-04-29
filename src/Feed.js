import React, { Component } from 'react';
import axios from 'axios';

class Feed extends Component {
    constructor() {
        super()
        this.state = {user: []}
    }

    componentDidMount() {
        axios.get(`http://localhost:3005/user/${this.props.match.params.id}`)
        .then(res => {
            const person = res.data
            this.setState({ user: person });
        })
    }

    getInterestImage(interest){

      switch (interest) {
        case "Programming":
        return "http://icons.iconarchive.com/icons/icons8/windows-8/512/Programming-System-Task-icon.png";

        break;
        case "Theater":
        return "https://png.icons8.com/metro/1600/clapperboard.png";

        break;
        case "Playing guitar":
        return "https://www.freeiconspng.com/uploads/guitar-icon-png-1.png";
        break;

        case "Business":
        return "https://www.freeiconspng.com/uploads/bag-money-icon--33.png";
        break;

        case "Mathematics":
        return "https://cdn.pixabay.com/photo/2012/04/11/00/10/math-27248_1280.png";
        break;

        default:
        break;
      }

    }

    render() {
      const id = this.props.match.params.id;
      let interestImage = this.getInterestImage(this.state.user.interest);


      return(

        <div className="media">
  <img className="mr-3" src={this.state.user.img} style = {{borderRadius: "50%"}}/>
  <div className="media-body">
    <h3 className="mt-0">{this.state.user.name}</h3>
<<<<<<< HEAD
    <h5 className="mt-0"> School: {this.state.user.school}</h5>
    <h5 className="mt-0"> Major: {this.state.user.major} <img src={"https://pages.shanti.virginia.edu/pst/files/2013/05/box_icon_academic.png"} style = {{height: "50px", width: "50px"}}/></h5>
    <h5 className="mt-0"> Interest: {this.state.user.interest} <img src = {interestImage} style = {{maxWidth:"30px"}}/> </h5>
=======
<<<<<<< HEAD
    <h5 className="mt-0"> School: {this.state.user.school}</h5>
    <h5 className="mt-0"> Major: {this.state.user.major} <img src={"https://pages.shanti.virginia.edu/pst/files/2013/05/box_icon_academic.png"} style = {{height: "50px", width: "50px"}}/></h5>
    <h5 className="mt-0"> Interest: {this.state.user.interest} <img src = {interestImage} style = {{maxWidth:"30px"}}/> </h5>
=======
    <h5 className="mt-0"> <img src={"https://pages.shanti.virginia.edu/pst/files/2013/05/box_icon_academic.png"} style = {{height: "50px", width: "50px"}}/>Major: {this.state.user.major}</h5>
    <h5 className="mt-0">

    Interest: {this.state.user.interest}</h5>
>>>>>>> 9f25a7b8e62984417e033d20b641ce19963501ba
>>>>>>> 4ae597bd4e48fb0348409ffd3eb5bdc3ace0056b


    </div>
</div>
      )
    }
  }
export default Feed;
