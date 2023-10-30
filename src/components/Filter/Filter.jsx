import { useDispatch, useSelector } from 'react-redux';
import css from './Filter.module.css';
import { getFilter } from 'redux/selectors';
import { setFilter } from 'redux/filterSlice';

export const Filter = () => {
    const dispatch = useDispatch();
    const filter = useSelector(getFilter);

    return (
        <div className={css.filterContainer}>
            <p className={css.filterField}>Find contact by name</p>
            <input className={css.filterInput}
                name="filter"
                type="text"
                id="filter"
                value={filter}
                onChange={e => dispatch(setFilter(e.currentTarget.value))} />
        </div>
    );
};