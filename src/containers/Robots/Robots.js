import React, {Component} from 'react';
import Card from '../../components/Card';
import './Robots.css';
import Header from '../../components/Header/Header';
import {robotsArray} from '../RobotsRepository';
import axios from 'axios';
import Scroll from '../../components/Scroll/Scroll';

class Robots extends Component {
    state = {
        robots: [],
        filteredRobots: [],
        searchField: ''
    }

    onChangeHandler = (event) => {
        let input = event.target.value;
        this.setState({searchField: input});
    }

    filterRobots = () => {
        const {robots, searchField} = this.state;
        const filter = searchField;
        const filteredArray = robots.filter(robot => {
            return robot.name.toLowerCase().includes(filter.toLowerCase());
        });
        if (!filteredArray.length) { // zero is false
            this.setState({filteredRobots: this.state.robots});
        } else {
            this.setState({filteredRobots: filteredArray});
        }
        
    }

    componentDidMount () {
        fetch('https://jsonplaceholder.typicode.com/users')
        .then(response => {
            response.json()
            .then(users => {
                this.setState({
                    robots: users
                })});
        });
    }

    componentDidUpdate (prevProps, prevState) {
        if (prevState.searchField !== this.state.searchField) {
            this.filterRobots();    
        }
        
    }

    render() {
        let cards;
        const {robots, filteredRobots} = this.state;
        if (!robots.length) {
            cards = (<h2>Loading Robots...</h2>);    
        } else {
            if (!filteredRobots.length) {
                cards = (robots.map(card => <Card 
                    key={card.id}
                    name={card.name} 
                    email={card.email}
                    imgSrc={`https://robohash.org/${card.id}?200x200`}
                    />));
            } else {
                cards = (filteredRobots.map(card => <Card 
                    key={card.id}
                    name={card.name} 
                    email={card.email}
                    imgSrc={`https://robohash.org/${card.id}?200x200`}
                    />));    
            }
        }
        
        return (<div className='tc'>  
                    <Header 
                        changed={(event) => this.onChangeHandler(event)}
                        inputText={this.state.searchField}
                        />
                        <Scroll>
                            {cards}
                        </Scroll>
                </div>);
    }
}

export default Robots;