import React,{useState,useEffect} from 'react'

export default function App(){
  const [users,setUsers]=useState([])
  useEffect(()=>{
    fetch(import.meta.env.VITE_APP_HOST+'/users')
    .then(res => res.json())
    .then(result => {
      setUsers(result.results)
    })
  },[])

  return(
    <div>
      <ul>
        {
        Array.isArray(users)?users.map(user =>(
          <li>{user.id} {user.name} {user.email}</li>
        )):null}
      </ul>
    </div>
    // <div>
    //   {users.map((user)=>(
    //     <div>user.id</div>
    //   ))}

    // </div>
  )
}