import { Injectable } from '@angular/core';
import { IonicStorageModule } from '@ionic/Storage';
import { Storage } from '@ionic/Storage';
/*
  Generated class for the StorageProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class StorageProvider {

  constructor(public storage: Storage) {
    console.log('Hello StorageProvider Provider');
  }
  public setData(key,value){
    console.log("data stored");
    return this.storage.set(key,value);
  }
  public async getData(key){
    return new Promise((resolve) => {
      this.storage.get(key)
        .then((data) =>{
          console.log(data);
          resolve(data),
          error => resolve("")
          
        });
  });
  }

  public async remove(settingName){
    console.log(settingName+"removed")
    return await this.storage.remove(settingName);
  }
  public clearAll() {
    this.storage.clear().then(() => {
      console.log('all keys cleared');
    });
  }
}
