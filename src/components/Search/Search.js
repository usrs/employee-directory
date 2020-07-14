import React from 'react'
import {
  Button,
  Form,
  FormGroup,
  Label,
  Input
}
  from 'reactstrap'

const Search = props => {
  return (
    <>
      <Form inline>
        <FormGroup className="mb-2 mr-sm-2 mb-sm-0">
          <Label htmlFor="user" className="mr-sm-2"></Label>
          <Input
            type="user"
            name="user"
            id="user"
            placeholder="Enter Search Criteria..."
            onChange={props.handleInputChange}
            value={props.first_name}
          />
        </FormGroup>
        <Button onClick={props.handleSubmit}>Search</Button>
      </Form>
    </>
  )
}

export default Search
