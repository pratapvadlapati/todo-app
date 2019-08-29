import { Component, OnInit } from '@angular/core';
import { ListService } from '../list.service';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css'],
  providers:[ListService]
  
})
export class ShoppingListComponent implements OnInit {

  ShoppingList:string[];
  List:string[] = ["samsung", "apple", "lenova", "vivo"];

  CartList:string[] = ['a','b'];

  //newItem:string = "";

  constructor(private dataservice: ListService) {

    this.ShoppingList = this.List;
  
   
   }

  /*  addItem(newItem){
     //console.log(newItem);
     this.List.push(newItem);
    
   } */
    
   /* addToCart(item){
    console.log(item)
   } */
  
   addItemToCart(item){
     this.dataservice.addItemToCart(item);
   }

  ngOnInit() {
  }

}
