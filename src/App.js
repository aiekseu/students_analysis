import React, {useState} from 'react';
import { Switch, Route } from 'react-router-dom';
import ImportPage from "./panels/ImportPage";

function App() {
    const [jsonTable, setJsonTable] = useState();

    return (
        <Switch>
            <Route exact path="/" render={() => <ImportPage setJsonTable={setJsonTable} />} />
        </Switch>
    );
}

export default App;
