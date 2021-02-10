import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';

const Page1 = () => {
    return <div>Pagina 1</div>
}
const Page2 = () => {
    return <div>Pagina 2</div>
}
const Page3 = () => {
    return <div>Pagina 3</div>
}
const Page4 = () => {
    return <div>Pagina 4</div>
}

const App = () => {
    return (
        <div>
            <BrowserRouter>
                <div>
                    <Route path="/" exact component={Page1} />
                    <Route path="/Page2" component={Page2} />
                    <Route path="/Page3" component={Page3} />
                    <Route path="/Page4" component={Page4} />
                </div>
            </BrowserRouter>
        </div>
    )
}

export default App;