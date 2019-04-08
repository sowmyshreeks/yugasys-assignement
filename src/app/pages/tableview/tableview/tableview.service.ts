import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions} from '@angular/http';
import { Observable } from 'rxjs/Rx'
import 'rxjs/add/observable/of';
import 'rxjs/add/observable/throw';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/debounceTime';
import 'rxjs/add/operator/distinctUntilChanged';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/filter';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/switchMap';
import { environment } from 'src/environments/environment';



@Injectable()

export class TableViewService {
  router: any;

  isLoggedIn: boolean = false;    
  public redirectUrl: string;
  constructor(private http: Http) { }
  
  list() { 
  let header = new Headers({ 'Content-Type': 'application/json' });
  let options = new RequestOptions({ headers: header });
  return this.http.get(environment.serverUrl +'/api/unknown')
    .map(Response =>
       {return Response.json()})
    .catch(this.handleErrors);
}
  
private handleErrors (error: Response | any) {
  return Observable.throw(error.json().message || 'backend server error');
}

}



