import bcrypt from 'bcryptjs'

const users = [
  {
    name: 'Admin User',
    email: 'admin@example.com',
    password: bcrypt.hashSync('123456', 10),
    isAdmin: true,
  },
  {
    name: 'amir',
    email: 'amir@example.com',
    password: bcrypt.hashSync('123456', 10),
  },
  {
    name: 'hasan',
    email: 'hasan@example.com',
    password: bcrypt.hashSync('123456', 10),
  },
]

export default users