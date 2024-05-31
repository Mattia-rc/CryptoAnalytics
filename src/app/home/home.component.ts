import { Component, OnInit } from '@angular/core';
import { ServicioApiHomeService } from '../servicio-api-home.service';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { PipeModulsModule } from '../pipe-moduls/pipe-moduls.module';
@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule,FormsModule, PipeModulsModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent implements OnInit{

pageNumber:number=1;
CryptoData:any;
CryptoDataAll:any;
cryptoSearch:string='';
cryptoSearchDevolution:any;


constructor(private serviceApi:ServicioApiHomeService) { }

ngOnInit(): void {
this.getData()
this.getAllData()
this.getCryptoSearch()

}

async getData() {
  
  try{

    this.serviceApi.obtenerdatosCryptoBitcoin().subscribe(data=>{
      this.CryptoData = data;

    })

  }catch(error){

  }

}


sumarValor(){
  this.pageNumber++;
  console.log(this.pageNumber)
  this.getAllData();
}

restarValor(){
this.pageNumber--;
this.getAllData();
}

async getAllData(){

  try{
      
      this.serviceApi.obtenerAllCryptos(this.pageNumber).subscribe(data=>{
          this.CryptoDataAll = data;

        }
      )


  }catch(error){
    console.log(error)
  }
}


  async getCryptoSearch(){
    try{
      this.serviceApi.obtenerCryptoSearch(this.cryptoSearch).subscribe(data=>{
        this.cryptoSearchDevolution = data
        console.log(this.cryptoSearch)
      })
    }catch(error){
      console.error("No funciona correcxtamente el search")
    }
  }
}
