import { inject } from '@angular/core';
import { signalStore, withHooks, withMethods, withState, patchState } from '@ngrx/signals';
import { firstValueFrom } from 'rxjs';
import { ApiService, UserSettingDto } from '@/shared/api/generated';
import { REFRESH_TOKEN_ERROR } from '../constants';

export interface UserState {
    isInited: boolean;
    isSignedIn: boolean;
    isAdmin: boolean;
    profile: unknown;
    userSettings: UserSettingDto | null;
}

const initialState: UserState = {
    isInited: false,
    isSignedIn: false,
    isAdmin: false,
    profile: null,
    userSettings: null,
};

export const UserStore = signalStore(
    { providedIn: 'root' },
    withState(initialState),
    withMethods((store, apiService = inject(ApiService)) => ({
        async initProfile() {
            const user = await firstValueFrom(apiService.profileControllerGetUserVocabulary()).catch((err) => {
                console.error(err);
                if (err === REFRESH_TOKEN_ERROR) {
                    patchState(store, { isInited: true });
                }
            });
            console.log(user);
            patchState(store, { profile: user, isInited: true });
        },
    })),
    withHooks({
        onInit(store) {
            store.initProfile();
        },
    }),
);
