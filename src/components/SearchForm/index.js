import React from 'react';
import styled from 'styled-components';

const SearchForm = props => {
  const { submit, change, value } = props;
  return (
    <form className="search-form" onSubmit={submit}>
      <input
        className="search-input"
        type="search"
        onChange={change}
        placeholder="type some movie title"
        value={value}
      />
    <button className="btn search-submit">Search</button>
    </form>
  )
}

export default SearchForm;
