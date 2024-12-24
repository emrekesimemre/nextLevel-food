import React from 'react'

const NotFound = () => {
  return (
    <main className='not-found'>
        <h1>Meal Not Found</h1>
        <p>
          Are you lost? Go back to the{' '}
          <a href='/'>main page</a>
        </p>
    </main>
  )
}

export default NotFound