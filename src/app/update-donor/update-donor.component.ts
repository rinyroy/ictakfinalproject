import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DonorService } from '../donorservice.service';

@Component({
  selector: 'app-update-donor',
  templateUrl: './update-donor.component.html',
  styleUrls: ['./update-donor.component.css']
})
export class UpdateDonorComponent implements OnInit {
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
    let donorId = localStorage.getItem("editDonorId");
    this.donorService.getDonor(donorId).subscribe((data)=>{
      this.donorItem=JSON.parse(JSON.stringify(data));
  })
  }
  editDonor()
  {    
    this.donorService.editDonor(this.donorItem);   
    alert("Success");
    this.router.navigate(['donors']);
  }

}
