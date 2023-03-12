import Matter from 'matter-js'
import Bird from '../component/Bird'
import Floor from '../component/Floor'
import Obstacle from '../component/Obstacle'
import { getPipsSizePosPair } from '../utils/random'
import { Dimensions } from 'react-native'

const widowHeight = Dimensions.get('window').height
const widowWidth = Dimensions.get('window').width


export default restart => {
    let engine =  Matter.Engine.create({enableSleeping: false})

    let world = engine.world

    world.gravity.y = 0.4

    const pipeSizePosA = getPipsSizePosPair()
    const pipeSizePosB = getPipsSizePosPair( widowWidth * 0.9)
    const pipeSizePosC = getPipsSizePosPair(widowWidth * 1.8)
    const pipeSizePosD = getPipsSizePosPair(widowWidth * 2.7)
    const pipeSizePosE = getPipsSizePosPair(widowWidth * 3.6)


    return{
        physics: {engine, world},

        Bird: Bird(world, 'green', {x: 50 , y:300}, {height: 40, width: 40}),
        
        ObstacleTop1: Obstacle(
            world, 'ObstacleTop1','red', 
            pipeSizePosA.pipeTop.pos,
             pipeSizePosA.pipeTop.size),


        ObstacleBottom1: Obstacle(
            world, 'ObstacleBottom1','blue', 
            pipeSizePosA.pipeBottom.pos, 
            pipeSizePosA.pipeBottom.size),

            ObstacleTop2: Obstacle(
                world, 'ObstacleTop2','red', 
                pipeSizePosB.pipeTop.pos,
                 pipeSizePosB.pipeTop.size),
    
    
            ObstacleBottom2: Obstacle(
                world, 'ObstacleBottom2','blue', 
                pipeSizePosB.pipeBottom.pos, 
                pipeSizePosB.pipeBottom.size),


                ObstacleTop3: Obstacle(
                    world, 'ObstacleTop3','red', 
                    pipeSizePosC.pipeTop.pos,
                     pipeSizePosC.pipeTop.size),
        
        
                ObstacleBottom3: Obstacle(
                    world, 'ObstacleBottom3','blue', 
                    pipeSizePosC.pipeBottom.pos, 
                    pipeSizePosC.pipeBottom.size),

                    ObstacleTop4: Obstacle(
                        world, 'ObstacleTop4','red', 
                        pipeSizePosD.pipeTop.pos,
                         pipeSizePosD.pipeTop.size),
            
            
                    ObstacleBottom4: Obstacle(
                        world, 'ObstacleBottom4','blue', 
                        pipeSizePosD.pipeBottom.pos, 
                        pipeSizePosD.pipeBottom.size),

                        ObstacleTop5: Obstacle(
                            world, 'ObstacleTop5','red', 
                            pipeSizePosE.pipeTop.pos,
                             pipeSizePosE.pipeTop.size),
                
                
                        ObstacleBottom5: Obstacle(
                            world, 'ObstacleBottom5','blue', 
                            pipeSizePosE.pipeBottom.pos, 
                            pipeSizePosE.pipeBottom.size),
                                        
        Floor: Floor(world, '#183140', {x: widowWidth/ 2 , y:widowHeight}, {height: 82, width: widowWidth}),

    }
}