import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DataService } from '../data.service';

@Component({
  selector: 'app-library',
  templateUrl: './library.component.html',
  styleUrls: ['./library.component.css']
})
export class LibraryComponent implements OnInit {
  cart:any;
  libraryProducts:[];
  updateCart:any;
  constructor(private dsobj:DataService,private router: Router) { 
    this.dsobj.getCartProducts(localStorage.getItem("name")).subscribe(
      res=>{this.cart=res.message;
        this.libraryProducts=this.cart.cartProducts
      console.log(this.libraryProducts)
   },
      err=>{console.log("error in library",err)}

    )
  }
userName:string;
  ngOnInit(): void {
    this.userName=localStorage.getItem("name")
  }
  onBack()
  {
    this.router.navigateByUrl(`user-profile/${this.userName}/games`);
  }
  ondelete(ind)
  { console.log(this.cart.cartProducts,ind)
    
    console.log(this.libraryProducts.splice(ind, 1));
    this.updateCart={"email":localStorage.getItem("email"),
    "name":localStorage.getItem("name"),
    "cartProducts":this.libraryProducts
  }
    this.dsobj.updateCart(localStorage.getItem("name"),this.updateCart).subscribe
    (
      res=>{console.log(res.message)},
      err=>{console.log("error in deleting",err)}
    )
    console.log("ind deleting",this.cart.getCartProducts)
  }
}
