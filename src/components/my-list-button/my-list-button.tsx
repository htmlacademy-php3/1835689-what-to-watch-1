import { setFavorite } from '../../store/api-actions';
import { getIsFavorite } from '../../store/films-data/selectors';
import { useAppDispatch, useAppSelector } from '../../hooks/';

type MyListButtonProps = {
  id: string;
};

function MyListButton({ id }: MyListButtonProps) {
  const dispatch = useAppDispatch();
  const isFavorite = useAppSelector((state) => getIsFavorite(state, id));

  const handleClick = () => {
    dispatch(setFavorite({ id, status: isFavorite ? 0 : 1 }));
  };

  return (
    <button
      className="btn btn--list film-card__button"
      type="button"
      onClick={handleClick}
    >
      <svg viewBox="0 0 19 20" width="19" height="20">
        {isFavorite ? (
          <use xlinkHref="#in-list"></use>
        ) : (
          <use xlinkHref="#add"></use>
        )}
      </svg>
      <span>My list</span>
    </button>
  );
}

export default MyListButton;
