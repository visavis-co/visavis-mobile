import React, { Component } from 'react';
import { View, Text } from 'react-native';

// import { Link } from 'react-router-dom';
// import { Button, Image, Container, Row, Col, Jumbotron } from 'react-bootstrap';

// private route
// what a user sees when they go to "/" and are logged in
// this month's match is...

class Home extends Component {
  static navigationOptions = {
    title: 'Match History',
  };

    
    // const assets = '/client/assets/';

    // const current = props.currentMatch;
    // const matchPic = assets + current.pictureurl;

    // const history = [];
    // for (let i = 0; i < props.pastMatches.length; i++) {
    //     let temp = <Row className="pastMatches" key={i * 3}><Col md={6}><h5>{props.pastMatches[i].fullname}</h5></Col><Col md={6}><Image src={assets + props.pastMatches[i].pictureurl} roundedCircle className="imageProfile" key={i * 15} /></Col></Row>
    //     history.push(temp);
    //     // history.push(props.pastMatches[i].fullname);
    // }

  render (){
      return (<View style={{ flex: 1, alignItems: 'center', justifyContent: 'flex-start' }}>
        <Text>Match History</Text>
      </View>
      )

      // <div className="screenHome">
      //     <Jumbotron>
      //         <Container>
      //             <h3>{props.userInfo.fullname}, your match for this week is...{current.fullname}</h3>
      //                 <Image src={matchPic} className="img-fluid rounded img-thumbnail" width="40%" height="auto" alt="Match's profile pic" /><br></br>
      //             <Button><Link to="/match" className="linkButton" >Cordinate with your match</Link></Button>
      //         </Container>
      //     </Jumbotron>

      //     <Jumbotron>
      //         <Container>
      //             <h3>Past Matches</h3>
      //             {history}
      //         </Container>
      //     </Jumbotron>
      // </div>
  
  }
}

export default Home;