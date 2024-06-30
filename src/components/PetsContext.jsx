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

