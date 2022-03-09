import {
  useDispatch,
  useSelector,
  TypedUseSelectorHook,
} from 'react-redux';
import { TRootState, TRootDispatch } from './redux';

export const useAppSelector: TypedUseSelectorHook<TRootState> = useSelector;

export const useAppDispatch = () => useDispatch<TRootDispatch>();
