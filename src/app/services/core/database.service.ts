import { Injectable } from '@angular/core';
import { SQLite, SQLiteObject } from '@awesome-cordova-plugins/sqlite/ngx';
import { Product } from 'src/app/cart/shared/products';

@Injectable({
  providedIn: 'root'
})
export class DatabaseService {
  db: SQLiteObject;
  book_name: string = "";
  book_email: string = "";
  book_password: string = "";
  book_price: string = "";
  bookData: Product[];

  constructor(private sqlite: SQLite) { }

  createOpenDatabase() {
    try {
      this.sqlite.create({
        name: 'databook.db',
        location: 'default'
      }).then((db:SQLiteObject) => {
        this.db=db;
        alert('database created/opened')
      }).catch(e => {
        alert(JSON.stringify(e));
      })
    } catch (err:any) {

    }
  }

  createTable() {
    this.db.executeSql('create table IF NOT EXISTs books(name VARCHAR(32), price VARCHAR(10), [])')
    .then(() => {
      alert('table created');
    })
    .catch((e) => {
      alert(JSON.stringify(e));
    });
  }

  insertData(){
    let query:string=`insert into books(name, price) values ("${this.book_name}", "${this.book_price}")`;

    this.db.executeSql(query, [])
    .then(() => {
      alert('Record inserted');
    })
    .catch((e) => {
      alert(JSON.stringify(e));
    });
  }

  selectData() {
    this.bookData = [];
    this.db.executeSql('select * from books', [])
    .then((result) => {
      for(let i=0; i < result.rows.length; i++){
        this.bookData.push({ book_name: result.rows.item(i).name, book_price: result.rows.item(i).price, book_email: result.rows.item(i).email, book_password: result.rows.item(i).password});
      }
    })
    .catch((e) => {
      alert(JSON.stringify(e));
    });
  }

  selectByCondition() {
    this.bookData = [];
    this.db.executeSql('select * from books where email=?', ['costasamuca8@gmail.com'])
    this.db.executeSql('select * from books where password=?', [1234])
    .then((result) => {
      for(let i=0; i < result.rows.length; i++){
        this.bookData.push({ book_name: result.rows.item(i).name, book_price: result.rows.item(i).price, book_email: result.rows.item(i).email, book_password: result.rows.item(i).password});
      }
    })
    .catch((e) => {
      alert(JSON.stringify(e));
    });
  }

  updateRecord(){
    this.db.transaction(()=>{
      this.db.executeSql('update books set name=? where name=?', ["The Final Trial", "vbook"])

      .then((result)=>{
        alert(JSON.stringify(result));
        alert('table updated')
      }). catch(e=> alert(JSON.stringify(e)))
    }). then(()=>{
      alert('transaction successful');
    }). catch(e=> alert(JSON.stringify(e)));
  }

  deleteRecord(){
    this.db.transaction(()=>{
      this.db.executeSql('delete from books where name=?', ["vbook"])

      .then((result)=>{
        alert(JSON.stringify(result));
        alert('table deleted')
      }). catch(e=> alert(JSON.stringify(e)))
    }). then(()=>{
      alert('Deletion successful');
    }). catch(e=> alert(JSON.stringify(e)));
  }

  dropTable(){
    this.db.executeSql('DROP TABLE IF EXISTS books', [])
    .then(()=> alert('table deleted'))
    .catch(e=>alert(JSON.stringify(e)));
  }

  closeDB(){
    this.db.close()
    .then(()=> alert('DataBase closed'))
    .catch(e=>alert(JSON.stringify(e)));
  }
}
