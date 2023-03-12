
import { Dimensions } from 'react-native'

const widowHeight = Dimensions.get('window').height
const widowWidth = Dimensions.get('window').width


export const getRandom = (min, max ) => {
    return Math.floor(Math.random() * (max - min + 1) + min)
}
export const getPipsSizePosPair = (addToPosX = 0) => {
    let yPosTop = -getRandom(300, widowHeight - 100)

    const pipeTop ={ pos : {x: widowWidth +addToPosX, y: yPosTop}, size:{height: widowHeight *2 , width: 75}}
    const pipeBottom ={pos : {x: widowWidth +addToPosX, y: widowHeight * 2 + 200 + yPosTop}, size:{height: widowHeight *2 , width: 75}}

    return{
        pipeTop, 
        pipeBottom
    }

}