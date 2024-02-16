import { createSlice, type PayloadAction } from '@reduxjs/toolkit';

export type UserId = string;

export interface User {
  name: string,
  email: string,
  github: string;
}

export interface UserWithId extends User {
  id: UserId;
}

const DEFAULT_STATE: UserWithId[] = [
  {
    id: "1",
    name: "Abel",
    email: "rrr",
    github: "nn"

  },
  {
    id: "2",
    name: "Simonetta Sommaruga",
    email: "rrrqwewq",
    github: "mm"

  },
  {
    id: "3",
    name: " Miguel",
    email: "rrrqweqwe12313",
    github: "ll"

  }
];

const initialState: UserWithId[] = (() => {
  const persistedState = localStorage.getItem("__redux__state__");
  return persistedState ? JSON.parse(persistedState).users : DEFAULT_STATE;
})();

// tambien una de las ventajas es que puedes mutar el estado en redux toolkit gracias a inner
export const userSlice = createSlice({
  name: 'users',
  initialState,
  reducers: {
    addNewUser: (state, action: PayloadAction<User>) => {
      const id = crypto.randomUUID();
      return [...state, { id, ...action.payload }];
    },

    deleteUserById: (state, action: PayloadAction<UserId>) => {
      const id = action.payload;
      return state.filter((user) => user.id !== id);
    },
    roolBackUser: (state, action: PayloadAction<UserWithId>) => {
      const isUserAlreadyDefined = state.some(user => user.id === action.payload.id);
      // si no esta y falla es eliminado optimista
      if (!isUserAlreadyDefined) {
        return [...state, action.payload];
      }
    }
  },

});



export default userSlice.reducer;

export const { deleteUserById, addNewUser, roolBackUser } = userSlice.actions;