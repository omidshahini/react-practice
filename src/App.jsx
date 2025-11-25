
///// SAMPLE FLASH CARD /////
{/*
function UserCard ( {name, age, email, onClick} ) {
  return (
    <div onClick={onClick}
    style={{
        border: '1px solid #ccc',
        padding: '10px',
        marginBottom: '10px',
        cursor: 'pointer',
        borderRadius: '5px',
        backgroundColor: '#f9f9f9',
      }}>
      <h2>{name}</h2>
      <p>{age}</p>
      <p>{email}</p>
    </div>
  )
}


function App () {
  const users = [
    { id: 1, name: 'Alice', age: 28, email: 'alice@example.com' },
    { id: 2, name: 'Bob', age: 34, email: 'bob@example.com' },
    { id: 3, name: 'Charlie', age: 25, email: 'charlie@example.com' },
  ];

  const handleUserClick = (id) => {
    console.log(`user id is : ${id}`)
  }

  return (
    <div>
      {users.map(user => 
        <UserCard
        key={user.id} 
        name={user.name}
        age={user.age}
        email={user.email}
        onClick={() => handleUserClick(user.id)}
        />

      )}
    </div>
  )
}

export default App*/}


//////// DATE COUNTER /////

import { useState } from 'react';

const DateCounter = () => {

  const [count, setCount] = useState(0);
  const [step, setStep] = useState(1); 

  const date = new Date("november 25 2025");
  date.setDate(date.getDate() + count);

  () => setStep((c) => c - 1)
 
  return (

    <div className='mt-10 mx-40'>
      <button onClick={() => setStep((s) => s - 1)}>-</button>
      <span>step is : {step}</span>
      <button onClick={() => setStep((s) => s + 1)}>+</button>
      <br /><br />
      <button onClick={() => setCount((c) => c - step)}>-</button>
      <span>count is : {count}</span>
      <button onClick={() => setCount((c) => c + step)}>+</button>

      <span>
        {count === 0
        ? 'Today is'
        : count > 0
        ? `${count} Days from Today is: `
        : `${Math.abs(count)} Day from Todays was: `}
      </span>
      <p>{date.toString()}</p>
    </div>
  )
}

export default DateCounter