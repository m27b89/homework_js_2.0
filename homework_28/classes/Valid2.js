class Valid2 extends Valid {
  constructor(email, password, isValid, emailError, passwordError) {
    super(email, password, isValid, emailError, passwordError);
    this.emailError = emailError;
    this.passwordError = passwordError;
  }
  validate() {
    if (this.email.length == "") {
      this.emailError = "email empty";
      console.log(this.emailError);
    } else if (this.password.length == "") {
      this.passwordError = "password min length 6";
      console.log(this.passwordError);
    }
  }
}
