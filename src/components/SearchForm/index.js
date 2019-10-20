import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const SearchForm = props => {
  const { submit, change, value } = props;
  return (
    <Form onSubmit={submit}>
      <Input
        className="search-input"
        type="search"
        onChange={change}
        placeholder="type some movie title"
        value={value}
      />
    <Button type="button">Search</Button>
    </Form>
  )
}

const Form = styled.form`
  align-items: center;
  background-color: #fff;
  border-radius: 5px;
  border: 1px solid #ddd;
  display: flex;
  height: 40px;
  padding-right: 15px;
  position: relative;
  width: 100%;
`
const Input = styled.input`
  background-color: transparent;
  border: 0;
  height: 40px;
  line-height: 40px;
  margin-right: 15px;
  padding: 0 15px;
  width: 100%;
`
const Button = styled.button`
  background-color: #ededed;
  border-radius: 5px;
  border: 1px solid #ddd;
  cursor: pointer;
  display: inline-block;
  height: 30px;
  line-height: 20px;
  padding: 5px 30px;
  transition: .3s;

  &:hover {
  background-color: #dedede;
  transition: .3s;
}
`

SearchForm.propTypes = {
  submit: PropTypes.func.isRequired,
  change: PropTypes.func.isRequired,
  value: PropTypes.string.isRequired,
}

export default SearchForm;
