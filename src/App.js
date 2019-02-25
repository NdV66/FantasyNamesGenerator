import React from 'react';
import {PageJumbotron} from './pages/Jumbotron';
import NameGeneratorPage from './pages/NameGeneratorPage';
import {FooterPage} from './pages/FooterPage';

const App = () => <div>
    <header>
        <PageJumbotron />
    </header>
    <main>
        <NameGeneratorPage />
    </main>
    <footer>
        <FooterPage />
    </footer>
</div>;

export default App;
