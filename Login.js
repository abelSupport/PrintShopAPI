class  Login{
    constructor(User_Id,User_Name,User_Pass,Name,User_Email,User_Mobile,Role_ID,CreatedBy,modifyBy,modifyDate){
      this.User_Id = User_Id;
      this.User_Name = User_Name;
      this.User_Pass = User_Pass;
      this.Name = Name;
      this.User_Email = User_Email;
      this.User_Mobile=User_Mobile;
      this.Role_ID=Role_ID;
      this.CreatedBy=CreatedBy;
      this.modifyBy=modifyBy;
      this.modifyDate=modifyDate;
    }
  }
  
  module.exports = Login;

 