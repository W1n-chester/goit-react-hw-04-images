import { useState } from 'react';
import { Form, SearchbarHed, Button } from './Searchbar.styled';
export const Searchbar = ({ onAddRequest }) => {
  const [request, setRequest] = useState('');

  const writeInput = e => {
    const { value } = e.currentTarget;
    setRequest(value);
  };
  const formSubmit = e => {
    e.preventDefault();
    onAddRequest(request);
    reset();
  };
  const reset = () => {
    setRequest('');
  };

  return (
    <SearchbarHed>
      <Form onSubmit={formSubmit}>
        <Button type="submit">
          <span>Search</span>
        </Button>

        <input
          name="request"
          type="text"
          autoComplete="off"
          autoFocus
          placeholder="Search images and photos"
          value={request}
          onChange={writeInput}
        />
      </Form>
    </SearchbarHed>
  );
};
