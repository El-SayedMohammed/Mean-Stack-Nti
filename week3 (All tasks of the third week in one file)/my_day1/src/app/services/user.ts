import { Injectable } from '@angular/core';
import { Iuser } from '../models/user.model';

@Injectable({
  providedIn: 'root'
})
export class User {
   private users: Iuser[] = [
        {
      "id": 1,
      "name": "El-Sayed Mohammed",
      "imgurl": "https://westerndeserttravel.com/wp-content/uploads/2024/07/unnamed-4-1.png",
      "password": "123"
    },
    {
      "id": 2,
      "name": "Ahmed Mohammed",
      "imgurl": "https://westerndeserttravel.com/wp-content/uploads/2024/07/1adc14f8-efe3-4203-9677-ce6851320252.jpeg",
      "password": "1234"
    },
    {
      "id": 3,
      "name": "Arwa Mohammed",
      "imgurl": "https://www.egypttoursportal.com/images/2025/04/The-Red-Sea-Egypt-Tours-Portal.jpg",
      "password": "123456"
    },
    {
      "id": 4,
      "name": "Mariem Mohammed",
      "imgurl": "https://www.egypttoursportal.com/images/2025/04/Kitchener-s-Island-Egypt-Tours-Portal.jpg",
      "password": "1234567"
    }
  ];
    getAllUsers(): Iuser[] {
      return this.users;
    }
    getUserById(id:number):Iuser|undefined{
       return this.users.find(user => user.id === id);
    }
    addUser(user:Iuser){
      this.users.push(user);
    }
     updateUser(updatedUser: Iuser){
     const index = this.users.findIndex(user => user.id === updatedUser.id);
      this.users[index] = { ...updatedUser };
     }
    deleteUser(id: number){
      this.users= this.users.filter(u=>u.id!==id);
    }
    login(name:string,password:string):Iuser|undefined{
      return  this.users.find(u=>u.name===name&&u.password===password);
    }
    loggedinuser:Iuser|null=null;
    setlogeduser(user:Iuser){
      this.loggedinuser=user
      localStorage.setItem('user',JSON.stringify(user));
    }
    getlogeduser():Iuser{
      return this.loggedinuser||JSON.parse(localStorage.getItem('user')!);
    }
    logout(){
      this.loggedinuser=null;
      localStorage.removeItem('user');
    }
    getuser():Iuser|null{  
    return this.loggedinuser||JSON.parse(localStorage.getItem('user')!);  
    }
  Authenticated():boolean{
      return this.getuser() !==null;
    }
 
  }



 