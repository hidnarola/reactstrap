import React,{useEffect,useState} from 'react'
import TableRecords from '../Component/TableRecords'
import axios from "axios";





const Table = () => {
    const [data, setdata] = useState([])
    
    
    useEffect(() => {
        axios.get("https://jsonplaceholder.typicode.com/comments")
            .then(res => {
                const allData = res.data
                setdata(allData)
            })
}, [])
console.log("get",data);
    
    return (
        <div>
           <TableRecords records={data} /> 
        </div>
    )
}

export default Table
