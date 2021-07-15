  
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataService {
status:any
  constructor(private hc:HttpClient) {
    if (localStorage.getItem("name")!=null)
    {
      this.status=true
    }
  
   }

  

  userLogout(){
    this.status=!this.status;
    localStorage.clear()
  }
  registerUser(userObj):Observable<any>
  { console.log("user in service",userObj)
    return this.hc.post<any>("/user/createuser",userObj)
  }

  onlogin(usercredentials):Observable<any>
  { 
    return this.hc.post("/user/login",usercredentials)
  }

  
  pushToCart(proObj):Observable<any>{
    console.log("in card ts",proObj)
    return this.hc.post("/user/add-to-cart",proObj)
  }

  getCartProducts(username):Observable<any>{
    console.log(username)
    return this.hc.get(`/user/getCart/${username}`)
  }

  deleteCartProduct(product,name):Observable<any>
{
  console.log("in delete",product)
  return this.hc.delete(`/user/deleteProduct/${name}/${product.title}`)
}

updateCart(name,updatedCart):Observable<any>
{
  return this.hc.put(`/user/updateProduct/${name}`,updatedCart)
}
  
}

