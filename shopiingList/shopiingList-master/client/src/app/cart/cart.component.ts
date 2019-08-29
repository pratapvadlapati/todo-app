import { Component, OnInit, Input } from '@angular/core';
import { ListService } from '../list.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css'],
  providers:[ListService]
})
export class CartComponent implements OnInit {
 
 ItemsRecieved: string[];

getItemsFromService(){
this.ItemsRecieved = this.dataService.getItems();

}
   
public users =[];
public errorMsg:string;
getUsersFromService(){
  this.dataService.getUsers()
  .subscribe(data=> this.users = data,
              error => this.errorMsg = error);
  console.log(this.users);
} 

constructor(private dataService: ListService) {

}

  ngOnInit() {
    
  }

}
