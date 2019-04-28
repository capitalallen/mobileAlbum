const processContact = contact => ({
  name: contact.name,
  phone: contact.phone,
})

export const fetchUsers = async () => {
  const response =  await fetch('https://jsonplaceholder.typicode.com/users')
  const results =  await response.json()
  return results.map(processContact)
}


export const login = async (username, password) => {
  const response = await fetch('http://localhost:8000', {
    method: 'POST',
    headers: {'content-type': 'application/json'},
    body: JSON.stringify({username, password}),
  })

  if (response.ok) {
    return true
  }

  const errMessage = await response.text()
  throw new Error(errMessage)
}
