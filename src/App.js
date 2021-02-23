import React, {useState} from 'react';
import { Switch, Route } from 'react-router-dom';
import ImportPage from "./panels/ImportPage";
import AnalysisPage from "./panels/AnalysisPage";

function App() {
    const [jsonTable, setJsonTable] = useState();

    return (
        <Switch>
            <Route exact path="/import" render={() => <ImportPage setJsonTable={setJsonTable} />} />
            <Route path='/result' render={() => <AnalysisPage jsonTable={jsonTable} />} />
        </Switch>
    );
}

export default App;
