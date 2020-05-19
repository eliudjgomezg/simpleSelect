import React from 'react';
import logo from './logo.svg';
import './App.css';
import SimpleSelect from './simple_select/simple_select'

function App() {
  const fakeData = [
    { _id: 1234, name: 'Toyota', status: 'active' },
    { _id: 5678, name: 'Chevrolet', status: 'inacive' },
    { _id: 9632, name: 'Ford', status: 'active' },
    { _id: 7897, name: 'Kia', status: 'inacive' },
    { _id: 9878, name: 'Chery', status: 'active' },
    { _id: 2585, name: 'Honda', status: 'inacive' }
  ]
  return (
    <div >
      <SimpleSelect
        options={fakeData}
        selectedOptions={[]}
        inactiveOptions={true}
        title={'Cars'}
        generateIsloading={false}
        isFetching={false}
        showIncludeInactiveOption={true}
        setOptions={() => { }}
        setInactiveOptions={() => { }}
      />
    </div>
  );
}

export default App;
