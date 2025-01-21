import React from 'react';
import Header from '../../../widgets/Header';
import Todos from '../../../widgets/Todos';

export default function Main(): React.ReactNode {
  return (
    <>
      <Header />
      <Todos />
    </>
  );
}
