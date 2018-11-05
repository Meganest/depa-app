import { types } from "mobx-state-tree";

const Login = types
	.model("List", {
		email: types.optional(types.string, ""),
		password: types.optional(types.string, ""),
		emailError: types.optional(types.string, ""),
		passwordError: types.optional(types.string, ""),
		isValid: types.optional(types.boolean, false),
		isLoggedIn: types.optional(types.boolean, false),
	})
	.actions(self => {
		function emailOnChange(id) {
			self.email = id;
			validateEmail();
		}
		function validateEmail() {
			const emailPatter = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i;
			const required = self.email ? undefined : "Required";
			self.emailError = required ? required : emailPatter.test(self.email) ? undefined : "Invalid email address";
		}
		function passwordOnChange(pwd) {
			self.password = pwd;
			validatePassword();
		}
		function validatePassword() {
			const alphaNumeric = /[^a-zA-Z0-9 ]/i.test(self.password) ? "Only alphanumeric characters" : undefined;
			const maxLength = self.password.length > 15 ? "Must be 15 characters or less" : undefined;
			const minLength = self.password.length < 8 ? "Must be 8 characters or more" : undefined;
			const required = self.password ? undefined : "Required";
			self.passwordError = required ? required : alphaNumeric ? alphaNumeric : maxLength ? maxLength : minLength;
		}
		function validateForm() {
			if (self.emailError === "" && self.passwordError === "" && self.email !== "" && self.password !== "") {
				self.isValid = true;
			}
		}
		function clearStore() {
			self.email = "";
			self.isValid = false;
			self.emailError = "";
			self.password = "";
			self.passwordError = "";
		}
		function onLogIn() {
			self.isLoggedIn = true;
		}
		function onLogOut() {
			self.isLoggedIn = false;
		}
		return { emailOnChange, validateEmail, passwordOnChange, validatePassword, validateForm, clearStore, onLogIn, onLogOut };
	});

const LoginStore = Login.create({
	email: "",
	password: "",
	emailError: "",
	passwordError: "",
	isValid: false,
	isLoggedIn: false
});

export default LoginStore;

// class LoginStore {
//   @observable email = "";
//   @observable password = "";
//   @observable isValid = false;
//   @observable emailError = "";
//   @observable passwordError = "";

//   @action
//   emailOnChange(id) {
//     this.email = id;
//     this.validateEmail();
//   }

//   @action
//   validateEmail() {
//     const emailPatter = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i;
//     const required = this.email ? undefined : "Required";
//     this.emailError = required
//       ? required
//       : emailPatter.test(this.email) ? undefined : "Invalid email address";
//   }

//   @action
//   passwordOnChange(pwd) {
//     this.password = pwd;
//     this.validatePassword();
//   }

//   @action
//   validatePassword() {
//     const alphaNumeric = /[^a-zA-Z0-9 ]/i.test(this.password)
//       ? "Only alphanumeric characters"
//       : undefined;
//     const maxLength =
//       this.password.length > 15 ? "Must be 15 characters or less" : undefined;
//     const minLength =
//       this.password.length < 8 ? "Must be 8 characters or more" : undefined;
//     const required = this.password ? undefined : "Required";
//     this.passwordError = required
//       ? required
//       : alphaNumeric ? alphaNumeric : maxLength ? maxLength : minLength;
//   }

//   @action
//   validateForm() {
//     if (this.emailError === undefined && this.passwordError === undefined) {
//       this.isValid = true;
//     }
//   }

//   @action
//   clearStore() {
//     this.email = "";
//     this.isValid = false;
//     this.emailError = "";
//     this.password = "";
//     this.passwordError = "";
//   }
// }

// export default LoginStore;
