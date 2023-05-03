import { useState } from 'react';

const SearchBar = () => {
  const [text, setText] = useState('');

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = event.target;

    setText(value);
  };

  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    console.log(event);
  };

  const handleKeyDown = (event: React.KeyboardEvent<HTMLInputElement>) => {
    const { key } = event;

    if (key === 'Enter') {
      console.log('엔터 눌렸다!');
    }
  };

  return (
    <div>
      <label htmlFor="search-input">
        <input
          id="search-input"
          type="text"
          name="search-input"
          value={text}
          onChange={handleChange}
          onKeyDown={handleKeyDown}
        />
      </label>
      <button type="button" onClick={handleClick}>
        검색
      </button>
    </div>
  );
};

export default SearchBar;
