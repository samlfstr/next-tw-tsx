import React from 'react';

export default function Basics() {
  const arr = [
    {
      id: 1,
      name: 'John',
      age: 30,
      address: 'New York',
      hobbies: ['Sports', 'Cooking'],
    },
  ];

  return (
    <div className='grid h-screen place-items-center'>
      <div>
        {arr.map((item) => (
          <div key={item.id}>
            <p>Name: {item.name}</p>
            <p>Age: {item.age}</p>
            <p>Address: {item.address}</p>
            <p>Hobbies: {item.hobbies.join(', ')}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
