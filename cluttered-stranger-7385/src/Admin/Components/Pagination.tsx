import React, { Dispatch, SetStateAction } from 'react'
import { styled } from 'styled-components';

interface Pagination {
    val: number;
    setPage: Dispatch<SetStateAction<number>>
}

const Pagination = ({val,setPage}: Pagination) => {


    const handlePage =()=>{
        setPage(val)
    }

  return (
    <DIV>
        <button className='btn' onClick={handlePage}>
            {val}
        </button>
    </DIV>
  )
}

export default Pagination

const DIV = styled.div`
.btn{
    background-color: #283593;
    border-radius: 10px;
    color: white;
    padding: 5px 15px;
    

}
.btn:hover{
    background-color: #5c6bc0;
    scale: 1.2;
    transition: 500ms;
}

`;