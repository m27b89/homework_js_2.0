class Valid {
  constructor(email, password, isValid) {
    this.email = email;
    this.password = password;
    this.isValid = isValid;
  }
  validate() {
    if (this.password.length > 6) {
      this.isValid = true;
      console.log(this.isValid);
    } else {
      this.isValid = false;
      console.log(this.isValid);
    }
  }
}
