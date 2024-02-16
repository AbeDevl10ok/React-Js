import type { User, UserId } from 'src/store/users/slice';
import { addNewUser, deleteUserById } from 'src/store/users/slice';
import { useAppDispatch } from './store';
export function useUserAction() {
  // enviar accion
  const dispatch = useAppDispatch();

  const addUser = ({ name, email, github }: User) => {
    dispatch(addNewUser({ name, email, github }));
  };

  const removeUser = (id: UserId) => {
    dispatch(deleteUserById(id));
  };
  return { removeUser, addUser };
}