import { Component, OnInit,Input } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {
  @Input() pro:any;
  obj:any;
  obj1:any
  ngOnInit(): void{
    //this.obj=this.pro 
    this.obj=this.pro.title
    this.obj1="#"+this.obj
    console.log(this.obj)
    //console.log(this.obj)
    
    
    
  }
    currentRunningNumber = 1;
    afterCreatingNewCard(){
      var newRunningNumber = this.currentRunningNumber + 1;
      var newModalName = "modal"+newRunningNumber;
      var newModalToggleName = "#modal"+newRunningNumber;
      
      $("#modal1").attr("id", newModalName);
      $("#modalToggle").attr("data-target", newModalToggleName);
      this.currentRunningNumber = newRunningNumber;
    }
   
    
  
  
 

}
