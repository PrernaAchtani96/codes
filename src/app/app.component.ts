import { Component } from '@angular/core';
import { HttpClient, HttpHeaders, HttpClientModule } from '@angular/common/http';
import {HttpsService} from './https.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  constructor(public http : HttpClient, public service : HttpsService){

  }
  title = 'cns-lab-project';

ngOnInit(){
  var idVal: [];
  var labData = this.http.get('https://asctb-api.herokuapp.com/v2/18lJe-9fq5fHWr-9HuFTzhWnmfygeuXs2bbsXO8vh1FU/0').subscribe(data => {
  var jsonSt = JSON.stringify(data)
  var parse = JSON.parse(jsonSt)
  var i;
  var result = [];
  for (i=0; i<80; i++){
    for(var j=0; j<2; j++){
      idVal =  parse.data[i].anatomical_structures[j].id;
    if(result.indexOf(parse.data[i].anatomical_structures[j].name, parse.data[i].anatomical_structures[j].id) == -1){
      result.push(parse.data[i].anatomical_structures[j].name, parse.data[i].anatomical_structures[j].id)
    }
   // console.log("re---->",result)
    this.service.resultArr = result;
   // console.log(" this.service.resultArr=", this.service.resultArr)
    }
  }
});   

console.log("id",id, idVal, idVal.length)
var id;
for(var n =0; n<idVal.length; n++){
   id = idVal[n];
   

  var anatomyData = this.http.get('https://www.ebi.ac.uk/ols/api/ontologies/uberon%20/terms?iri=http://purl.obolibrary.org/obo/'+ id).subscribe(data => {

});
}
}
}
