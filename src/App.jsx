
import Sum from './Sum.jsx';
import Sub from './Sub.jsx';
import Div from './Div.jsx';
import Mul from './Mul.jsx';


function App(){
    return (
        <>
        <ul>
            <li>Sum is :{Sum(10,20)} </li>
            <li>Sub is :{Sub(20,10)} </li>
            <li>Div is :{Div(20,10)} </li>
            <li>Mul is :{Mul(2,4)}  </li>
        </ul>
    </>
    );
}

export default App;