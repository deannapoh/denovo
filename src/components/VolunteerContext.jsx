import React, { createContext, Component } from 'react';
import { collection, onSnapshot } from 'firebase/firestore';
import { db } from './firebase/firebase';

export const VolunteerContext = createContext();

export class VolunteersContextProvider extends Component {
    state = {
      volunteers: []
    };
  
    componentDidMount() {
      const unsubscribe = onSnapshot(collection(db, 'volunteers'), (snapshot) => {
        const updatedVolunteers = snapshot.docs.map((doc) => ({
          VolunteerID: doc.id,
          ...doc.data()
        }));
        this.setState({ volunteers: updatedVolunteers });
      });
  
      this.setState({ unsubscribe });
    }
  
    componentWillUnmount() {
      this.state.unsubscribe();
    }
  
    render() {
      return (
        <VolunteerContext.Provider value={{ volunteers: this.state.volunteers }}>
          {this.props.children}
        </VolunteerContext.Provider>
      );
    }
  }
  
  