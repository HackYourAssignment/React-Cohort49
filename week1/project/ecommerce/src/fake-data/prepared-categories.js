import fakeCategories from './all-categories';
import { v4 as uuid } from 'uuid';

const categories = fakeCategories.map((name) => {
  name = name.replace('FAKE: ', '');
  return {
    id: uuid(),
    name,
  };
});

export default categories;
