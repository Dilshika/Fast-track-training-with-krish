import { Component, OnInit } from '@angular/core';
import { PetService} from 'src/app/_service/pet-service.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss']
})
export class TableComponent implements OnInit {

  isEditClicked:boolean=false;
  Pet:any=[];
  message:string='';

  constructor(private petService:PetService) { }

  ngOnInit(): void {
    this.getPets();
    
  }

  //Methods for Buttons
  onClick(pet:any){
    pet.isEditClicked=true;
  }

  onCancel(pet:any){
    pet.isEditClicked=false;
  }

  onDelete(id:string){
    this.petService.delete(id)
    .subscribe(
      async (data)=>{
        this.message=data.message;
        await Swal.fire({
          text:this.message
        });
        window.location.reload();
      }
    )
  }

  onUpdate(pet:any){
    this.petService.update(pet._id,
      {name:pet.name,age:pet.age,breed:pet.breed,color:pet.color}
      ).subscribe(
      async (data)=>{
        this.message=data.message;
        await Swal.fire({
          text:this.message
        });
        window.location.reload();
      }
    )
  }

  //List
  getPets(){
    this.petService.getPets()
    .subscribe(
      data=>{
        this.Pet=data.pet;
      }
    )
  }

}
