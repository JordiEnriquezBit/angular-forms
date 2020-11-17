export class User {
   private _id: string;
   private _realname: string;
   private _username: string;
   private _password: string;
   private _singingUpDate: string;
   private _email: string;
   private _continent: string;
   private _gender: string;
   private _upTo18: boolean;
    constructor() {
     this._id = this.uniqueId();
     this._realname = '';
     this._username = '';
     this._password = '';
     this._singingUpDate = this.getActualDate();
     this._email = '';
     this._continent = '';
     this._gender = '';
     this._upTo18 = true;
   }
    /**
   * Setters de la clase
   */
   public set realname(realname) {
     this._realname = realname;
   }
   public set username(username) {
     this._username = username;
   }
   public set password(password) {
     this._password = password;
   }
   public set email(email) {
     this._email = email;
   }
   public set continent(continent) {
     this._continent = continent;
   }
   public set gender(gender) {
     this._gender = gender;
   }
   public set upTo18(upTo18) {
     this._upTo18 = upTo18;
   }
    /**
    * Getters de la clase
    */
   public get id() {
     return this._id;
   }
   public get realname() {
     return this._realname;
   }
   public get username() {
     return this._username;
   }
   public get password() {
     return this._password;
   }
   public get singingUpDate() {
     return this._singingUpDate;
   }
   public get email() {
     return this._email;
   }
   public get continent() {
     return this._continent;
   }
   public get gender() {
     return this._gender;
   }
   public get upTo18() {
     return this._upTo18;
   }
    /**
    * Generador de id único
    */
   private uniqueId() {
     const thisMS: number = Date.now();
     const shake = Math.random();
     let unique: string = Math.pow(thisMS, shake).toString();
     unique = unique.toString().replace('.', thisMS.toString());
     return unique;
   }
    /**
    * Obtiene la fecha actual
    */
   private getActualDate(): string {
     const actualDate = new Date();
     let actualDay = actualDate.getDate().toString();
     if (actualDay.length < 2) { actualDay = '0' + actualDay; }
     let actualMonth = actualDate.getMonth().toString();
     if (actualMonth.length < 2) { actualMonth = '0' + actualMonth; }
     const actualYear = actualDate.getFullYear().toString();
     const finalDate = actualDay + '-' + actualMonth + '-' + actualYear;
     return finalDate;
   }
  }
