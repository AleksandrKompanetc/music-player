import { useState } from 'react'

const UserForm = () => {

  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [phone, setPhone] = useState('')

  return (
    <form onSubmit={handleSubmit} className='user-form'>
      <div>
        <label>Name:</label>
        <input
          placeholder='Enter name'
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
      </div>
      <div>
        <label>Email:</label>
        <input
          placeholder='Enter email'
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
      </div>
      <div>
        <label>Phone:</label>
        <input
          placeholder='Enter phone'
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
        />
      </div>
      <button type='submit'>Add user</button>
    </form>
  )
}

export default UserForm