'use client';


const Error = ({error}) => {
  console.log('🚀 ~ file: error.js:6 ~ Error ~ error:', error)
  return <main className="error">
    <h1>An error accured!</h1>
    <p>
      {error.message}
    </p>
  </main>;
};

export default Error;
