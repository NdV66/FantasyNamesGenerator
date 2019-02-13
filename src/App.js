import React from 'react';
import {Row} from 'reactstrap';
import {PageJumbotron} from './components/Jumbotron';
import {NameGeneratorPage} from './components/NameGeneratorPage';

const App = () => <div>
    <header>
        <PageJumbotron />
    </header>
    <main>
        <NameGeneratorPage />
    </main>
    <footer>

    </footer>
</div>;

export default App;
