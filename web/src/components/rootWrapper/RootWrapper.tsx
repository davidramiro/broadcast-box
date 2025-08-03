import { useContext } from 'react';
import { Link, Outlet } from 'react-router-dom'
import React from 'react';

const RootWrapper = () => {
  return (
    <div>
      <main>
        <Outlet />
      </main>
    </div>
  )
}

export default RootWrapper