import { Component, OnInit } from '@angular/core';
import { IDonor } from '../donormodel';
import { DonorService } from '../donorservice.service'
import { Router } from '@angular/router';

@Component({
  selector: 'app-newdonor',
  templateUrl: './newdonor.component.html',
  styleUrls: ['./newdonor.component.css']
})
export class NewDonorComponent implements OnInit {

  constructor(private donorService: DonorService,private router: Router){  } 
  donorItem= {
     donorId :'',
     donorName:'',
     donorCode:'',
     lastdonatedDate:'',
     address:'',
     phone:'',
     bloodgroup:'',
     imageUrl:''}
 // donorItem: IDonor;
  ngOnInit() {
  }
  AddDonor()
  {    
    this.donorService.newDonor(this.donorItem);
    console.log("Called");    
    alert("Success");
    this.router.navigate(['/']);
  }
}
