import React from 'react';

interface MyAgeProps {
  age: number;
}

function MyAge(props: MyAgeProps) {
  return (
    <div>
      <p>Minha idade é: {props.age}</p>
    </div>
  );
}

export default MyAge;