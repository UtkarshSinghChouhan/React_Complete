import React from "react";

const SlotMachine = (props) => {
    // let x = '😄',
    //     y = '😄',
    //     z = '😄';


    // To be more readable we can destructure the properties of the prop-object
    // let {x, y, z} = props;

    if((props.x === props.y) && (props.y === props.z)){
        return(
            <>
                <div classsName='slot_inner'>
                    <h1> {props.x} {props.y} {props.z} </h1>
                    <h1> This is Matching </h1>
                    <hr/>
                </div>
            </>
        );
    }

    else{
        return(
            <>
                <div classsName='slot_inner'>
                    <h1> {props.x} {props.y} {props.z} </h1>
                    <h1> This is Not Matching </h1>
                    <hr/>
                </div>
            </>
        );
    }

}

export default SlotMachine;