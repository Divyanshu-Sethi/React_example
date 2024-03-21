import React from 'react'

const TestWithMockDataInputFieldButton = () => {
  return (
    <div>
        <input placeholder='Enter name'/>
        <button> Submit </button>
        <button> Apply </button>
        <input placeholder='Enter description'/>

        <label htmlFor='password'> Enter password</label>
        <input type='password' id='password'/>

        
    </div>
  )
}

export default TestWithMockDataInputFieldButton;