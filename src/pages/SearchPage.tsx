import KeywordLine from '../components/KeywordLine';
import SearchBar from '../components/SearchBar';
import Title from '../components/Title';

const SearchPage = () => {
  return (
    <div>
      <Title />
      <SearchBar />
      <ul>
        <KeywordLine key="1" name="테스트" />
      </ul>
    </div>
  );
};

export default SearchPage;
