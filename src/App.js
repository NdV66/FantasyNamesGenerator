import React from 'react';
import {PageJumbotron} from './components/Jumbotron';
import NameGeneratorPage from './pages/NameGeneratorPage';

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
