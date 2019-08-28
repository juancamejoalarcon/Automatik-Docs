import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { ApiService } from './api.service';
import { Profile } from '../models';
import { map } from 'rxjs/operators';

@Injectable()
export class ProfilesService {
  constructor (
    private apiService: ApiService
  ) {}

  get(username: string): Observable<Profile> {
    return this.apiService.get('/profile/' + username)
      .pipe(map((data: {profile: Profile}) => data.profile));
  }
  // A implantar en el futuro

  // follow(username: string): Observable<Profile> {
  //   return this.apiService.post('/profiles/' + username + '/follow');
  // }

  // unfollow(username: string): Observable<Profile> {
  //   return this.apiService.delete('/profiles/' + username + '/follow');
  // }

}
