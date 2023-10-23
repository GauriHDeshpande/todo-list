import React from 'react';

export function Footer() {
  let footerStyle = {
    position: "absolute",
    top: "100vh",
    width: "100%",
    border: "2px solid red"
  }

  return (
    <>
      <footer className='bg-dark text-light' style={footerStyle}>
        <p className='text-center py-3'>Copyright &copy; MyTodoList.com</p>
      </footer>
    </>
  );
}
