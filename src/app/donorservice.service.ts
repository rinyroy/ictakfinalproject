import { Injectable } from '@angular/core';
import {HttpClient ,HttpResponse} from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class DonorService {
  item= {
    donorId :'',
    donorName:'',
    donorCode:'',
    lastdonatedDate:'',
    address:'',
    phone:'',
    bloodgroup:'',
    imageUrl:''}
  constructor( private http:HttpClient) { }
  getDonor(id:any){
    return this.http.get("http://localhost:3000/"+id);
  }
  getDonors(){
    return this.http.get("http://localhost:3000/donors");
  }

  newDonor(item:any)
  {   
    return this.http.post("http://localhost:3000/insert",{"donor":item})
    .subscribe(data =>{console.log(data)})
  }
  deleteDonor(id:any)
  {

    return this.http.delete("http://localhost:3000/remove/"+id)

  }
  editDonor(donor:any)
  {
    console.log('client update')
    return this.http.put("http://localhost:3000/update",donor)
    .subscribe(data =>{console.log(data)})
  }
  profileDonor(donor:any)
  {
    console.log('client profile')
    return this.http.put("http://localhost:3000/profile",donor)
    .subscribe(data =>{console.log(data)})
  }
}
