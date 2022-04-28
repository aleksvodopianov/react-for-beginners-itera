import React from 'react';
import './app.css';
import Footer from '../footer/Footer';
import Card from '../card/Card';
import data from '../../data.json';

// const data = {
//     name: 'John Snow',
//     bio: 'English physician and leader in anesthesia and medical hygiene. He is considered one of the fathers of modern epidemiology, mainly due to the classic work to identify the source of the cholera outbreak in Soho in 1854.',
//     contacts: 'York, United Kingdom',
// };

// var libraries = JSON.parse(fs.readFileSync('./libraries.json'));


const App = () => (
    <div className="app">
        <Card name={data.name}
              bio={data.bio}
              contacts={data.contacts} />
        <Footer copyright="SomeText" />
    </div>
);

export default App;
