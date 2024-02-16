import { configureStore, type Middleware } from '@reduxjs/toolkit';
import { toast } from 'sonner';
import usersReducer, { roolBackUser } from './users/slice';
const persistanceLocalStorageMiddleware: Middleware = store => next => action => {
  // estado anterior
  // accion que le enviamos
  next(action);
  // nuevo estado
  localStorage.setItem("__redux__state__", JSON.stringify(store.getState()));

};

// UI optimista
const asyncWidthDatabasedMiddleware: Middleware = store => next => action => {
  const { type, payload } = action;
  // estado anterior en caso de roolback
  const statebefore = store.getState();
  next(action);
  if (type === 'users/deleteUserById') {
    const idUserRemove = payload;
    const userRemove = statebefore.users.find(user => user.id === idUserRemove);
    // modificar url para que lanse error
    fetch(`https://jsonplaceholder.typicode.com/users/${idUserRemove}`, {
      method: 'DELETE'
    })
      .then(res => {
        if (res.ok) {
          console.log('hola');

          return toast.success(`Usuario ${payload} eliminado correctamente`);
        }
      })
      .catch(err => {
        toast.error('Erro al eliminar el usuario');
        // hacemos el rollback
        if (userRemove) store.dispatch(roolBackUser(userRemove));
        console.log("🚀 ~ err:", err);

      });
  }
};




export const store = configureStore({
  reducer: {
    users: usersReducer,
  },

  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(persistanceLocalStorageMiddleware, asyncWidthDatabasedMiddleware)
});
export type RootState = ReturnType<typeof store.getState>;
export type AppDispacth = typeof store.dispatch;