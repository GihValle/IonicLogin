import { DatabaseService } from 'src/app/services/core/database.service';
import { Component, OnInit } from '@angular/core';
import { SQLite, SQLiteObject } from '@awesome-cordova-plugins/sqlite/ngx';

@Component({
  selector: 'app-favorite',
  templateUrl: './favorite.page.html',
  styleUrls: ['./favorite.page.scss'],
})
export class FavoritePage {

  db: SQLiteObject;

  constructor(private sqlite: SQLite, private DatabaseService: DatabaseService) { }

  createOpenDatabase(){
    try{
      this.sqlite.create({
        name:'favoritos.db',
        location: 'default'
      })
      .then((db:SQLiteObject)=>{
        this.db=db;
        alert('database created/opened');
      })
      .catch(e => alert(JSON.stringify(e)));
    }
    catch(err:any){
      alert(err);
    }
  }

  // selectData(){
  //   this.bookData=[];
  //   this.db.executeSql('select * from books',[])
  //   .then((result)=>{
  //     for(let i=0; i<result.rows.length;i++){
  //       this.bookData.push({book_name:result.rows.item(i).name,"book_price":result.rows.item(i).price});
  //     }
  //   })
  //   .catch(e => alert(JSON.stringify(e)))
  // }

  // deleteRecord(){
  //   this.db.transaction(()=>{
  //     this.db.executeSql('delete from books where name=?', ["vbook"])
  //   .then((result)=>{
  //     alert('record deleted');
  //   })
  //   .catch(e => alert(JSON.stringify(e)))
  //   }).then(()=>{
  //     alert('transaction successful')
  //   }).catch(e => alert(JSON.stringify(e)))
  // }

}
