import { signalStore, withState } from '@ngrx/signals';

export interface AccessToken {
    accessToken: string;
}

type TokenState = {
    accessToken: AccessToken | null;
    isLoggedIn: boolean;
};

const initialState: TokenState = {
    accessToken: null,
    isLoggedIn: false,
};

export const BooksStore = signalStore(withState(initialState));
