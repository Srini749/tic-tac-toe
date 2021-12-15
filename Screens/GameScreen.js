import React, { Component } from 'react';
import {View, Text, SafeAreaView, Dimensions} from 'react-native';
import CrossLayout from './Components/GameScreen/CrossLayout';
import GameLayout from './Components/GameScreen/GameLayout';
import styles from './GameScreenStyle';
import CurrentPlayer from './Components/GameScreen/CurrentPlayer';
import getWinningConditions from './Functions/WinningConditions';
import Steps from './Components/GameScreen/Steps'

class GameScreen extends Component {

    constructor(props) {
        super(props);
        this.gridSize = this.props.route.params.gridSize;
        const matrix = [...Array(this.gridSize)].map(e => Array(this.gridSize).fill(0));
        this.state = {matrix: matrix, player: 1, history: []};
        this.windowWidth = Dimensions.get('window').width -30 ;
        this.windowHeight =  Dimensions.get('window').height;
        this.containerStyle = {...styles.container, height: this.windowHeight, backgroundColor: 'transparent'};  
         
    }

    componentDidMount(){
        const array = getWinningConditions(this.gridSize);
    }


    

   setMatrix = (matrix, player, history) => {
        const matrixToBeSet = matrix == null ? [...Array(this.gridSize)].map(e => Array(this.gridSize).fill(0)) : matrix   
        this.setState({matrix: matrixToBeSet, player: player, history:history}); 
   } 

    render() {
        return (
                  <SafeAreaView>   
                        <View style={styles.outerContainer}>
                            <View style={this.containerStyle}>
                                <CrossLayout size={this.gridSize} width={this.windowWidth}/>      
                            </View>
                            <View style={this.containerStyle}>
                                <GameLayout matrix={this.state.matrix} history={this.state.history}  player={this.state.player} width={this.windowWidth} setMatrix={this.setMatrix}/>
                            </View>
                            <View style={styles.playerContainer}>
                                <CurrentPlayer currentPlayer={this.state.player}/>
                                <Steps setMatrix={this.setMatrix} history={this.state.history} player={this.state.player}/> 
                            </View>
                        </View>                                                    
                </SafeAreaView>
        );
    }
}

export default GameScreen;