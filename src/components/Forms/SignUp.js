import React from 'react'
import { Container, Form, Button } from 'semantic-ui-react'

export default class SignUp extends React.Component {
  state = {
    email: "",
    password: "",
    loading: false,
    errors: {}
  }

  onChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value
    })
    console.log("Email and password : ", this.state.email)
  }
  onSubmit = (event) => {
    event.preventDefault();
    this.props.userSignUpRequests(this.state)
  }
  render() {
    const { loading, errors } = this.state;
    return (
      <Container fluid>
        <Form onSubmit={this.onSubmit} loading={loading}>
          <Form.Field error={!!errors.email}>
            <label htmlFor="email">Email</label>
            <input
              type="text"
              placeholder="email"
              value={this.state.email}
              name="email"
              onChange={this.onChange} />
          </Form.Field>
          <Form.Field error={!!errors.password}>
            <label htmlFor="password">Password</label>
            <input
              type="password"
              placeholder="password"
              value={this.state.password}
              id="password"
              name="password"
              onChange={this.onChange} />
          </Form.Field>
          <Button primary> SignUp </Button>
        </Form>
      </Container>
    )
  }
}
