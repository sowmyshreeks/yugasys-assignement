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

export class LoginService {
  router: any;

  isLoggedIn: boolean = false;    
  // store the URL so we can redirect after logging in
  public redirectUrl: string;
  constructor(private http: Http) { }
  
// LOGIN SERVICE BEGINS HERE
  login(userdata:any) { //userdata is a reference variable
    let header = new Headers({ 'Content-Type': 'application/json' });
    let options = new RequestOptions({ headers: header });
    // Url is the  actual baseUrl
    return this.http.post(environment.serverUrl +'/api/login',JSON.stringify(userdata),  options)
      .map(Response =>
         {return Response.json()})
      .catch(this.handleErrors);
  }
  
// LOGIN SERVICE ENDS HERE

// ERROR HANDLER
private handleErrors (error: Response | any) {
  return Observable.throw(error.json().message || 'backend server error');
}

}



