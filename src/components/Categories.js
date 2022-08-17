import { useDispatch } from 'react-redux';
import { checkStatus } from '../redux/categories/categories';

const Categories = () => {
  const dispatch = useDispatch();
  return (
    <div>
      <button type="button" onClick={() => { dispatch(checkStatus()); }}>Check status</button>
    </div>
  );
};
export default Categories;
