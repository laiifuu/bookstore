import { useDispatch, useSelector } from 'react-redux';
import { checkStatusAction } from '../redux/categories/categories';

function Categories() {
  const dispatch = useDispatch();
  const statusMsg = useSelector((state) => state.categories);

  const statusCheck = () => {
    dispatch(checkStatusAction());
  };

  return (
    <div className="categories">
      <button type="button" onClick={() => statusCheck()}>CHECK STATUS</button>
      <span className="checkMsg">{statusMsg}</span>
    </div>
  );
}

export default Categories;
