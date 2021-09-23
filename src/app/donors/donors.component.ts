import { Component, OnInit } from '@angular/core';
import { DonorService } from '../donorservice.service';
import {AuthService} from '../auth.service';
import { ActivatedRoute,Router } from '@angular/router';

@Component({
  selector: 'app-donors',
  templateUrl: './donors.component.html',
  styleUrls: ['./donors.component.css']
})
export class DonorsComponent { 
  pageTitle: string = 'Donor List';
  imageWidth: number = 50;
  imageMargin: number = 2;
  showImage: boolean = false;

  donors=[{
    donorId :'',
    donorName:'',
    donorCode:'',
    lastdonatedDate:'',
    address:'',
    phone:'',
    bloodgroup:'',
    imageUrl:''}]
  
  toggleImage(): void{
    this.showImage = !this.showImage;
  }
  constructor(private router:Router,private donorService: DonorService,public _auth:AuthService){   
    
  }
  ngOnInit(): void{
    this.donorService.getDonors().subscribe((data)=>{
      this.donors=JSON.parse(JSON.stringify(data));
  })
  }
 
  editDonor(donor:any)
  {
    localStorage.setItem("editDonorId", donor._id.toString());
    this.router.navigate(['update']);

  }
  profileDonor(donor:any)
  {
    localStorage.setItem("profileDonorId", donor._id.toString());
    this.router.navigate(['profile']);

  }
  deleteDonor(donor:any)
  {
    this.donorService.deleteDonor(donor._id)
      .subscribe((data) => {
        this.donors = this.donors.filter(p => p !== donor);
      })
  


  }
}
   