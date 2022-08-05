const myName = 'Utkarsh Singh Chouhan';

const favProgram = 'React JS';


function favYoutuber(){
    return("David dobrik");
}

function favYoutuber2(){

    let name1 = "Mark Rober";

    return name1;
}


// Here we are exporting a single data, hence instead of exporting 'App' we need to write 'myname'
export default myName;

export {favProgram, favYoutuber, favYoutuber2};