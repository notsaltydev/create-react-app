import React from 'react';
import {shallow} from 'enzyme';
import App from './App';
import UsersList from './UsersList';

it('should render App component without crashing', () => {
    shallow(<App/>);
});

it('should includes input', () => {
    const app = shallow(<App/>);

    expect(app.containsMatchingElement(<UsersList/>)).toEqual(true);
});

it('passes all users to the UsersList', () => {
    const app = shallow(<App/>);
    expect(app.find('UsersList').prop('users')).toEqual(['Michal', 'Kasia', 'Jacek', 'Marta', 'Tomek', 'Ania']);
});

it('filters names on input', () => {
    const app = shallow(<App/>);
    expect(app.find('UsersList').prop('users')).toEqual(['Michal', 'Kasia', 'Jacek', 'Marta', 'Tomek', 'Ania']);

    app.find('input').simulate('input', {currentTarget: {value: 'M'}});
    expect(app.find('UsersList').prop('users')).toEqual(['Michal', 'Marta', 'Tomek']);

    // app.find('input').simulate('keyUp', { key: 'backspace', keyCode: 8, which: 8 });
    app.find('input').simulate('input', {currentTarget: {value: ''}});
    expect(app.find('UsersList').prop('users')).toEqual(['Michal', 'Kasia', 'Jacek', 'Marta', 'Tomek', 'Ania']);

});
