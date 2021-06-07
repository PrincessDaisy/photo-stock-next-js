import { Formik, Form } from 'formik';
import HeaderInput from './HeaderInput';

export default function HeaderSearch({ setSearchValue }) {
  const SetSearchHistory = (searchValue) => {
    function capitalizeFirstLetter(string) {
      return string.charAt(0).toUpperCase() + string.slice(1);
    }
    const value = capitalizeFirstLetter(searchValue);
    if (!localStorage.getItem('SearchHistory')) {
      localStorage.setItem('SearchHistory', JSON.stringify([value]));
    } else {
      let SearchHistory = JSON.parse(localStorage.getItem('SearchHistory'));
      if (SearchHistory.includes(value)) {
        SearchHistory = SearchHistory.filter((item) => item !== value);
        localStorage.setItem('SearchHistory', JSON.stringify([...SearchHistory, value]));
      } else {
        SearchHistory = [...SearchHistory, value];
        localStorage.setItem('SearchHistory', JSON.stringify(SearchHistory));
      }
    }
  };

  return (
    <div>
      <Formik
        initialValues={{
          searchValue: '',
          page: 1,
        }}
        onSubmit={(value) => {
          setSearchValue(value.searchValue);
          SetSearchHistory(value.searchValue);
        }}
      >
        <Form>
          <HeaderInput id="searchValue" name="searchValue" />
        </Form>
      </Formik>
    </div>
  );
}
