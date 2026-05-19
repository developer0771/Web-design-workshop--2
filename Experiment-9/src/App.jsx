import React, { useEffect, useState } from 'react'
import './App.css'

const initialForm = {
  name: '',
  email: '',
  password: '',
}

function App() {
  const [formData, setFormData] = useState(initialForm)
  const [errors, setErrors] = useState({})
  const [registeredUsers, setRegisteredUsers] = useState([])
  const [apiUsers, setApiUsers] = useState([])
  const [loading, setLoading] = useState(true)
  const [apiError, setApiError] = useState('')
  const [success, setSuccess] = useState(false)

  useEffect(() => {
    let isMounted = true

    async function fetchUsers() {
      try {
        const response = await fetch('https://jsonplaceholder.typicode.com/users')

        if (!response.ok) {
          throw new Error('Unable to fetch user data')
        }

        const data = await response.json()
        const users = data.slice(0, 5).map((user) => ({
          id: `api-${user.id}`,
          name: user.name,
          email: user.email,
        }))

        if (isMounted) {
          setApiUsers(users)
          setApiError('')
        }
      } catch (error) {
        if (isMounted) {
          setApiError(error.message)
        }
      } finally {
        if (isMounted) {
          setLoading(false)
        }
      }
    }

    fetchUsers()

    return () => {
      isMounted = false
    }
  }, [])

  const validate = () => {
    const newErrors = {}
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

    if (!formData.name.trim()) {
      newErrors.name = 'Name is required'
    } else if (formData.name.trim().length < 3) {
      newErrors.name = 'Name must contain at least 3 characters'
    }

    if (!formData.email.trim()) {
      newErrors.email = 'Email is required'
    } else if (!emailPattern.test(formData.email)) {
      newErrors.email = 'Enter a valid email address'
    }

    if (!formData.password) {
      newErrors.password = 'Password is required'
    } else if (formData.password.length < 6) {
      newErrors.password = 'Password must contain at least 6 characters'
    }

    return newErrors
  }

  const handleChange = (event) => {
    const { name, value } = event.target

    setFormData({
      ...formData,
      [name]: value,
    })

    if (errors[name]) {
      setErrors({
        ...errors,
        [name]: '',
      })
    }

    setSuccess(false)
  }

  const handleSubmit = (event) => {
    event.preventDefault()

    const validationErrors = validate()

    if (Object.values(validationErrors).some(Boolean)) {
      setErrors(validationErrors)
      setSuccess(false)
      return
    }

    setRegisteredUsers([
      {
        id: Date.now(),
        name: formData.name.trim(),
        email: formData.email.trim(),
      },
      ...registeredUsers,
    ])
    setFormData(initialForm)
    setErrors({})
    setSuccess(true)
  }

  const displayedUsers = [...registeredUsers, ...apiUsers]

  return (
    <div className="page">
      <div className="card">
        <h1>Registration Form</h1>

        <form onSubmit={handleSubmit} noValidate>
          <div className="field">
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Enter Name"
              aria-label="Name"
            />
            {errors.name && <p className="error">{errors.name}</p>}
          </div>

          <div className="field">
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Enter Email"
              aria-label="Email"
            />
            {errors.email && <p className="error">{errors.email}</p>}
          </div>

          <div className="field">
            <input
              type="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              placeholder="Enter Password"
              aria-label="Password"
            />
            {errors.password && <p className="error">{errors.password}</p>}
          </div>

          <button type="submit">Register</button>
        </form>

        {success && <p className="success">Registration Successful!</p>}

        <div className="users-box">
          <h2>Registered Users</h2>

          {loading && <p className="status">Fetching API users...</p>}
          {apiError && <p className="error api-error">{apiError}</p>}

          {!loading && displayedUsers.length > 0 && (
            <ul>
              {displayedUsers.map((user) => (
                <li key={user.id}>
                  {user.name} - {user.email}
                </li>
              ))}
            </ul>
          )}
        </div>
      </div>
    </div>
  )
}

export default App
