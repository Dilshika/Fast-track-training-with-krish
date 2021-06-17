import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { PetService } from 'src/app/_service/pet-service.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-add-pet',
  templateUrl: './add-pet.component.html',
  styleUrls: ['./add-pet.component.scss']
})
export class AddPetComponent implements OnInit {

  name:string='';
  breed:string='';
  color:string='';
  age:number=0;
  message:string='';

  @Output() addEvent=new EventEmitter<string>();

  constructor(private service:PetService) { }

  ngOnInit(): void {
  }

  onSubmit(){
    this.service.create({name:this.name,age:this.age,breed:this.breed,color:this.color}).subscribe(
      async (data)=>{
        this.message=data.message;
          await Swal.fire(
          {
          text:this.message}
          );
        this.addEvent.emit();
      }   
    )
    
  }

}
