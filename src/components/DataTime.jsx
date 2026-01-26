import React, { useState, useEffect } from 'react'

const DataTime = () => {
  const [dateTime, setDateTime] = useState(new Date())

  useEffect(() => {
    const timer = setInterval(() => {
      setDateTime(new Date())
    }, 1000)

    return () => clearInterval(timer)
  }, [])

  const days = ['Sun', 'Mon', 'Tue', 'Wed', 'Thur', 'Fri', 'Sat']
  const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']
  
  const day = days[dateTime.getDay()]
  const month = months[dateTime.getMonth()]
  const date = dateTime.getDate()
  
  const time = dateTime.toLocaleTimeString('en-US', { 
    hour: '2-digit', 
    minute: '2-digit',
    hour12: true
  })

  const formatted = `${day} ${month} ${date} ${time}`

  return (
    <div>
      <p>{formatted}</p>
    </div>
  )
}

export default DataTime
