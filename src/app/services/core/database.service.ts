import { SQLitePorter } from '@awesome-cordova-plugins/sqlite-porter/ngx';
import { Injectable } from '@angular/core';
import { SQLite, SQLiteObject } from '@awesome-cordova-plugins/sqlite/ngx';

@Injectable({
  providedIn: 'root'
})
export class DatabaseService {
  db: SQLiteObject;
  databaseName: string = 'favoritos.db';

  constructor(private sqlite: SQLite, private sqlitePorter: SQLitePorter) { }

  async openDatabase(){
    try{
      this.db = await this.sqlite.create({name: this.databaseName, location: 'default'});
      await this.createDatabase();
    } catch (error){
      console.error('Ocorreu um erro ao criar o banco de dados', error)
    }
  }

  async createDatabase() {
    const sqlCreateDatabase = this.getCreateTable();
    const result = await this.sqlitePorter.importSqlToDb(this.db, sqlCreateDatabase);
    return result ? true : false;
  }

  getCreateTable(){
    const sqls = [];
    sqls.push('CREATE TABLE IF NOT EXISTS favoritos (id integer primary key, AUTOINCREMENT, foreign key (fk_produto) references produto (pk_produto));');
    return sqls.join('\n');
  }

  executeSQL(sql: string, params?: any[]){
    return this.db.executeSql(sql, params);
  }
}
