import React,{useEffect} from 'react'
import './App.css'
import TableRecords from './Component/TableRecords'
import Table from './pages/Table';



function  App () {
    return (
      <div >
         <header className="App-header">Employee Table using TypeScript & React</header>
            <Table />  
        </div>
    );
}

export default App
