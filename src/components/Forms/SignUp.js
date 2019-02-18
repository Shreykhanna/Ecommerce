import React from 'react'
import {Container,Form,Button} from 'semantic-ui-react'
export default class SignUp extends React.Component{
  state={
    data:
    {
    email:"",
    password: ""
  },
  loading:false,
  errors:{}
}
onSubmit
render()
{
  const {data,loading,errors}=this.state;
  return(
    <Container fluid>
    <Form onSubmit={this.onSubmit} loading={loading}>
      <Form.Field  error={!!errors.email}>
      <label htmlFor="email">Email</label>
      <input
          type="text"
          placeholder="email"
          value={data.email}
          id="email"
          name="email"
          onChange={this.onChange}/>
     </Form.Field>
      <Form.Field  error={!!errors.password}>
      <label htmlFor= "password">Password</label>
      <input
          type="password"
          placeholder="password"
          value={data.password}
          id="password"
          name="password"
          onChange={this.onChange}/>
      </Form.Field>
      <Button primary> SignUp </Button>
   </Form>
   </Container>
 )
}
}
