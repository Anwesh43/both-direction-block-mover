import {useAnimatedScale, useDimension} from './hooks'
import React from 'react'
import BVHPresentional from './BVHPresentional'

const BVHComponent = (props) => {
    const {scale, i, start} = useAnimatedScale(0.02, 20)
    const {w, h} = useDimension()
    return <BVHPresentional w = {w} h = {h} scale = {scale} i = {i} onClick = {start}>
    </BVHPresentional>
}

export default BVHComponent
