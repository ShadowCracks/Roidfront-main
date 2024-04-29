import {inject} from '@angular/core';
import { Router } from '@angular/router';

import { AuthenticationService } from '@app/modules/auth/auth.service';
import { IS_LOGGED } from '@app/modules/user/user.selectors';
import { Store } from '@ngrx/store';
import { map } from 'rxjs';

export const notLoggedGuard = () => {
  const store = inject(Store);
  const router = inject(Router);

  const isLoggedIn$ = store.select(IS_LOGGED);

  return isLoggedIn$.pipe(
    map(res => {
      if (!res) {
        return true;
      }
      router.navigate(['/steroids/talk']);
      return false;
    })
  )
};