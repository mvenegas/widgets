import React, { useState } from "react";
import Accordion from './components/Accordion';
import Search from './components/Search';
import Dropdown from './components/Dropdown';
import Translate from './components/Translate';
import Route from './components/Route';
import Header from "./components/Header";

const items = [
    {
        title: 'What is React?',
        content: 'React is a front-end javascript framework'
    },    
    {
        title: 'Why use React?',
        content: 'React is a favorite JS library among engineers'
    },
    {
        title: 'How do you use React?',
        content: 'You use react by creating components'
    }
];

const options = [
    {
        label: 'The color Red',
        value: 'red'
    },
    {
        label: 'The color Green',
        value: 'green'
    },
    {
        label: 'A shade of Blue',
        value: 'blue'
    }
];

const showAccordion = () => {
    if (window.location.pathname === '/') {
        return <Accordion items={items}/>;
    }
};

const showList = () => {
    if (window.location.pathname === '/list') {
        return <Search />;
    }
};

const showDropdown = () => {
    if (window.location.pathname === '/dropdown') {
        return <Dropdown />;
    }
};

const showTranslate = () => {
    if (window.location.pathname === '/translate') {
        return <Translate />
    }
};

export default () => {   
    const [selected, setSelected] = useState(options[0]);

    return (
        <div>
            <Header />
            <Route path='/'>
                <Accordion items={items} />
            </Route>
            <Route path='/list'>
                <Search />
            </Route>
            <Route path='/dropdown'>
                <Dropdown 
                    label='Select a color' 
                    options={options}
                    selected={selected}
                    onSelectedChange={setSelected}
                />
            </Route>
            <Route path='/translate'>
                <Translate />
            </Route>
        </div>
    );    
};