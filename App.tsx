import React, { useState, useEffect} from 'react';
import {View, Text, StatusBar,Image, TouchableOpacity} from 'react-native';
import {GameEngine} from 'react-native-game-engine';
import entities from './entities';
import Physics from './physics';

import { Dimensions } from 'react-native'

const widowWidth = Dimensions.get('window').width
const App = () => {
  const [running, setRunning] = useState(false);
  const [gameEngine, setGameengine] = useState(null);
  const [point, setpoint] = useState(0);
console.log(point);

  useEffect(() => {
    setRunning(true)
  }, []);
  return (
    <View style={{flex: 1}}>
      
      <StatusBar hidden />
      <Image
        source={{
          uri: 'https://images.pexels.com/photos/9251622/pexels-photo-9251622.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
        }}
        style={{
          width: '100%',
          height: '100%',
          flex: 1,
        }}
      />
      <GameEngine
      ref={(ref) => {setGameengine(ref)}}
      systems={[Physics]}
      entities={entities()}
      running= {running}
      onEvent={(e) => {
        console.log(e);
        
        switch(e.type){
        case 'game_over':
          setRunning(false);
          gameEngine.stop()
          break;
          case "new_point" :
            setpoint(point +1 )
            console.log("HELOWORLD");
            
            
      }}}
        style={{
          position: 'absolute',
          top: 0,
          bottom: 0,
          left: 0,
          right: 0,
        }}></GameEngine>
        {!running ? <View style={{backgroundColor: '#516b8f',}}>

          <Text
              style={{
                fontWeight: 'bold',
                color: 'white',
                fontSize: 30,
                backgroundColor: '#03203C',
                padding: 8,
                borderRadius: 6
              }}>
                     Point - {`${point}`}
            </Text>
          <TouchableOpacity
            style={{
              justifyContent: 'center',
              alignSelf: 'center',
              marginVertical: 300,
            }}
            onPress={() => {
              setpoint(0)
              setRunning(true)
              gameEngine.swap(entities())
            }}>
            <Text
              style={{
                fontWeight: 'bold',
                color: 'white',
                fontSize: 30,
                backgroundColor: '#03203C',
                padding: 8,
                borderRadius: 6,
              }}>
              Start Game
            </Text>
          </TouchableOpacity>
        </View>:  <View><Text style={{
          fontSize: 30,
          fontWeight: 'bold',
          color: 'white',
          alignSelf: 'center',
        }}>
        {point}
      </Text>
      </View>
      }
    </View>
  );
};

export default App;
