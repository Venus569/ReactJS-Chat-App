import React from 'react'
import Alert from 'react-bootstrap/Alert'

export const ErrorAlert = () => {
  return (
    <div style={{position: "absolute", top: 0, left: 0, right: 0, zIndex: 999}}>
    <Alert variant="danger"   dismissible>
    <Alert.Heading>Oh snap! You got an error!</Alert.Heading>
    <p>
      Change this and that and try agasdsdsdin. Duis mollis, est non commodo
      luctus, nisi erat porttitor ligula, eget lacinia odio sem nec elit.
      Cras mattis consectetur purus sit amet fermentum.
    </p>
  </Alert>
  </div>
  )
}
