import React from 'react'

const User = (props) => {
    const {data}=props;
  return (
    <div>
      User component {data.name} {data.age}
    </div>
  )
}

export default User
