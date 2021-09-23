
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DonorService } from '../donorservice.service';

@Component({
  selector: 'app-profile-donor',
  templateUrl: './profile-donor.component.html',
  styleUrls: ['./profile-donor.component.css']
})
export class ProfileDonorComponent implements OnInit {
  donorItem= {
    donorId :'',
    donorName:'',
    donorCode:'',
    lastdonatedDate:'',
    address:'',
    phone:'',
    bloodgroup:'',
    imageUrl:''}
 
  constructor(private router:Router,private donorService:DonorService) { }

  ngOnInit(): void {
    let donorId = localStorage.getItem("profileDonorId");
    this.donorService.getDonor(donorId).subscribe((data)=>{
      this.donorItem=JSON.parse(JSON.stringify(data));
  })
  }
  profileDonor()
  {    
    this.donorService.profileDonor(this.donorItem);   
    alert("Success");
    this.router.navigate(['donors']);
  }

}

