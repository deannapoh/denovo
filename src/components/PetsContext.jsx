/*import React, {createContext} from 'react'
import { db } from '../Config'

export const PetsContext = createContext();

export class PetsContextProvider extends React.Component{
  
  //initial state: empty array of pets
  state = {
    pets:[]
  }

  componentDidMount(){
    // copy of the initial state
    const prevPets = this.state.pets;
    
    db.collection('pets').onSnapshot(snapshot => {
      let changes = snapshot.docChanges();
      changes.forEach(change => {
        if (change.type === 'added'){
          prevPets.push({
            // retrieve products and push into empty array
            PetID: change.doc.id,
            Name:change.doc.data().Name,
            Animal: change.doc.data().Animal,
            Age: change.doc.data().Age,
            AnimalShelter: change.doc.data().AnimalShelter,
            Breed: change.doc.data().Breed,
            Img: change.doc.data().Img,
          })
        }
        // update the state
        this.setState({
          pets: prevPets
        })
      })
    })
  }
  
  render(){
    return(
      // provide the value into the context
      <PetsContext.Provider value = {{pets: [...this.state.pets]}}>
        {this.props.children}
      </PetsContext.Provider>
    )
  }
} */
// PetsContext.jsx
import React, { createContext, Component } from 'react';
import { collection, onSnapshot } from 'firebase/firestore';
//import { db } from '../Config';
import { db } from './firebase/firebase';

export const PetsContext = createContext();

export class PetsContextProvider extends Component {
  state = {
    pets: []
  };

  componentDidMount() {
    const unsubscribe = onSnapshot(collection(db, 'pets'), (snapshot) => {
      const updatedPets = snapshot.docs.map((doc) => ({
        PetID: doc.id,
        ...doc.data()
      }));
      this.setState({ pets: updatedPets });
    });

    this.setState({ unsubscribe });
  }

  componentWillUnmount() {
    this.state.unsubscribe();
  }

  render() {
    return (
      <PetsContext.Provider value={{ pets: this.state.pets }}>
        {this.props.children}
      </PetsContext.Provider>
    );
  }
}

