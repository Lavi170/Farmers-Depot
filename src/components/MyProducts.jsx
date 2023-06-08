import React from 'react'
import {db} from './firebase-config'
import {getDocs,collection} from 'firebase/firestore'
function MyProducts({farmersList}) {
  return (
    <div>
          {farmersList.map((farmer)=>(
        <div>
          <h1>name:{farmer.email}</h1>
          <p>years of expirience:{farmer.password}</p>
          <p>location:{farmer.usernmae}</p>
          <button>delete</button>
        </div>
      ))}
    </div>
  )
}

export default MyProducts