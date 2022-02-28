import { Component, OnInit } from '@angular/core';
import { CommandeService } from 'src/app/services/commande.service';

@Component({
  selector: 'app-commande',
  templateUrl: './commande.component.html',
  styleUrls: ['./commande.component.css'],
  providers: [CommandeService],
})
export class CommandeComponent implements OnInit {
  myArray: any =[];
  myCommande: any = {
    id:'',
    name:'',
    poids:'',
    prix:''
  }
  myCondition = false;

  constructor(private myVar: CommandeService) { }
  

  ngOnInit(): void {
    this.getCommande();
  }
  //CRUD
  //Methode get
  getCommande(){
    this.myVar.getAll()
    .subscribe(data => {
      this.myArray = data;
    })   
}
  //Methode delete
  deleteCommande(id: any){
    this.myVar.delete(id)
    .subscribe(()=> {
      this.myArray = this.myArray.filter
      ((myVariable: { id: any; }) => myVariable.id !=id);
    }) 
    

    }
  //Methode post  
  postCommandes(){
    this.myVar.postCo(this.myCommande)
    .subscribe( (myVariable) =>{
      this.myArray = [myVariable, ...this.myArray]
      this.videInput();
    })
  }//pour vider les inputs
  videInput(){
    this.myCommande = {
      id:'',
      name:'',
      poids:'',
      prix:''
    }

  }
  //pour update
  editCommande(myVariable: any){
    this.myCommande = myVariable;
    this.myCondition = true;
  }
  //methode update
  updateMyCommande(){
    this.myVar.updateCommande(this.myCommande)
    .subscribe(commande =>{
      this.videInput();
      this.myCondition = false;
    })
  }
  }



