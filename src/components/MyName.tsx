import React from 'react';

interface MyNameProps {
  nome: string;
}

function MyName(props: MyNameProps, ) {
  return (
    <div>
      <p>Meu nome é: {props.nome}</p>
    </div>
  );
}

export default MyName;
