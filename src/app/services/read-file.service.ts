import { Injectable } from '@angular/core';
import { from } from 'rxjs';
import { HttpClient} from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class ReadFileService {

  constructor( public http : HttpClient) { }

  file

  readFile(url){
    return this.http.get(url).subscribe(data=>this.file=data
      ,err=> console.log("err = " + err)
      ,()=>console.log(" complete"+ this.file))
  }
}
