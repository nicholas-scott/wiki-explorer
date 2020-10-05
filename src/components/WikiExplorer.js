import React, { Component } from 'react';
import { Box, Anchor, Heading, Grommet, ResponsiveContext } from 'grommet';
import WikiApi from '../util/WikiApi';
import WikiRoom from './WikiRoom';

class WikiExplorer extends Component {
    constructor(props){
         super(props);
    }

    state = {
      title: "",        //Title of the current room
      links: [],         //A list of the doors that exist in this room 
    }

    theme = {
        global: {
          colors: {
            brand: '#228BE6',
            ative: '#00FFFFFF',
            focus: '#00FFFFFF',
            back: '#c7aad4'
          },
          font: {
            family: 'Noto Sans, sans-serif',
            size: '18px',
            height: '20px',
          },
          size: {
            '1/1': '100%',
            '1/5': '20%',
            'wikiDoor-height': '450px',
            'wikiDoor-width': '200px'
          },
          breakpoints: {
            'small': {value: 0},
            'medium': {value: 1},
            '1-door': {value : 480},
            '2-door': {value : 820},
            '3-door': {value : 980},
            '4-door': {value : 1280},
            '5-door': {value : 1690},
            '5-door': {value: 4000}
          },
          focus: {
            outline : {
              color: '#00FFFF00'
            }
          }
        },
        anchor: {
          hover: {
            textDecoration: 'none'
          },
        }
    };
    

    render = () => {
        return(
            <Grommet theme={this.theme} >
            <ResponsiveContext.Consumer>
                {size => (
                    <Box fill background={{'color': 'back'}}>
                    <Heading  margin='auto' textAlign='center'><Anchor href={'https://en.wikipedia.org/wiki/' + this.state.title} label={this.state.title} /></Heading>
                    <WikiRoom 
                        pageSize={size}
                        links={this.state.links} 
                        handleDoorClick={this.handleDoorClick}
                        onScroll={this.handlScroll}/>
                      <Box height='100px'></Box>
                    </Box>
                    
                )} 
            </ResponsiveContext.Consumer>
            </Grommet>
        )
    }
    
    componentDidMount = async () => {
        window.addEventListener('scroll', this.handleScroll,true);
        this.loadRandomPage();
    }

    /**
     * This function takes the user to the room this door is for
     * @param {*} title The name of the article the door is attributed to
     */
    handleDoorClick = async (title) => {
        let newState = await WikiApi.getPage(title);
        window.scrollTo(0, 0);
        this.setState(newState);
    }  

    
    /**
     * This function loads more doors when the user scrolls to the bottom of the page 
     * @param {*} event the scroll event 
     */
    handleScroll = async  (event) => {
        let element = event.target.scrollingElement; 
        if (element.scrollHeight - element.scrollTop < element.clientHeight + 1) {
            console.log("BOTTOM");
            if(WikiApi.isComplete()) return;
            const newLinks = await WikiApi.getMoreLinks();
            const oldLinks = [...this.state.links];
            this.setState({links: [...oldLinks, ...newLinks]})
        }
    }

    /**
     * Sets the state of the app to be a new page
     */
    loadRandomPage = async () => {
        let newState = await WikiApi.getPage(null);
        this.setState(newState);
    }
        
    /**
     * This funtion takes a list of Wikipedia pages and returns a list of links
     * that 
     * @param {*} links A list of WikiPedia page articles
     */
    filterLinks =  (links) =>{
        //Check from back of list since these unwanted pages always appear at the end 
        for(let i = links.length - 1; i >= 0; i--){
            if(links[i].includes(":")){
                console.log("Popping: " + links[i]);
                links.pop();
            }
            else{
                break;
            }
        }
        return links; 
      }

}

export default WikiExplorer;
