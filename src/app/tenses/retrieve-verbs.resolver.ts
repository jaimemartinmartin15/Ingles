import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { Resolve } from '@angular/router';
import { Observable } from 'rxjs';
import { Verb } from './verb';

@Injectable()
export class RetrieveVerbsResolver implements Resolve<Verb[]> {
  private http = inject(HttpClient);

  public resolve(): Observable<Verb[]> {
    return this.http.get<Verb[]>('assets/no-cache/tenses/verbs.json');
  }
}
