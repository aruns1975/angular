
export class User{
  userName:String='';
  age:Number;
  gender:String='';
  address:Address=new Address();
}
  
export class Address{
  add1:String='';
  add2:String='';
  add3:String='';
  area:String='';
  city:String='';
  country:String='India';
}

export class EditModeEventData{
  
  constructor(public user:User, public index:number){}
}

export class UserBuilder{
  constructor(){
  }
  
  static construtUser(userName:String, age:Number, gender:String):User{
    const user:User=new User();
    user.userName=userName;
    user.age=age;
    user.gender=gender;
    user.address=this.getDefaultAddress();
    return user;
  }
  
  static getDefaultAddress():Address{
    const _defaultAddress=new Address();
    _defaultAddress.add1="21, Thamirabarani Street";
    _defaultAddress.add2="Bharat Nagar";
    _defaultAddress.area="Adambakkam";
    _defaultAddress.city="Chennai";
    _defaultAddress.country="India";
    return _defaultAddress;
  }

  static cloneUser(user:User):User{
    return {...user,address: {...user.address}};
  }
}
