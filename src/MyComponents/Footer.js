import React from 'react';

export function Footer() {
  const myStyle = {
    position: "relative"
  }
  return (
    <>
      <footer className='bg-dark text-light py-3' style={myStyle}>
        <p className='text-center'>Copyright &copy; MyTodoList.com</p>
      </footer>
    </>
  );
}
