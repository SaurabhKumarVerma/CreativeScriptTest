import { action, makeAutoObservable, observable } from "mobx";
import RootStore from "../RootStore";
import { loginService } from "../../api/login.api";
import { navigate } from "../../navigation/RootNavigation";
import { ScreenName } from "../../types/ScreenName";
import { IUserData } from "../../interface/user.interface";

export class LoginStore {
  rootStore: typeof RootStore;
  @observable userName: string;
  @observable isEmailError: boolean = false;
  @observable userPassword: string;
  @observable isValidPasswordError: boolean = false;
  @observable isUserInputError: string;
  @observable isLoading: boolean = false;
  @observable name: string;
  @observable email: string;
  @observable isError: boolean = false;
  @observable userData: IUserData;

  constructor(rootStore: typeof RootStore) {
    makeAutoObservable(this);
    this.rootStore = rootStore;
  }

  @action
  setIsEmailError = (status: boolean) => {
    this.isEmailError = status;
  };

  @action
  setIsValidPasswordError = (status: boolean) => {
    this.isValidPasswordError = status;
  };

  @action
  setIsError = () => {
    this.isError = false;
    this.isUserInputError = undefined;
  };
  @action
  checkValidData = () => {
    this.setIsValidPasswordError(false);
    this.setIsEmailError(false);
    this.isUserInputError = undefined;
    if (!this.userName && !this.userPassword) {
      this.isError = true;
      this.isUserInputError = "Invalid Input";
    } else {
      this.isError = false;
      this.submitLoginCredentials();
    }
  };
  @action
  setUserName = (name: string) => {
    this.setIsError();
    const regex = /^[A-Za-z0-9][A-Za-z0-9._%+-]*@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/;
    this.isEmailError = false;
    if (!regex.test(name)) {
      this.isEmailError = true;
      this.isUserInputError = "Enter Valid Email";
    } else {
      this.isEmailError = false;
      this.userName = name;
      this.isUserInputError;
    }
  };

  @action
  setUserPassword = (password: string) => {
    this.setIsError();
    const regex =
      /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/;
    this.isValidPasswordError = false;
    if (!regex.test(password)) {
      this.isUserInputError =
        "Minimum eight characters, at least one letter, one number and one special character";
      this.isValidPasswordError = true;
    } else {
      this.isValidPasswordError = false;
      this.userPassword = password;
      this.isUserInputError;
    }
  };

  @action
  submitLoginCredentials = () => {
    this.isLoading = true;
    loginService(this.userName, this.userPassword)
      .then(
        action((response) => {
          this.isLoading = false;
          if (response.data.code === 1 && !this.isLoading) {
            this.isError = true;
            this.isUserInputError = response.data.message;
          } else if (response.data.code === 0) {
            this.userData = response.data.data;
            navigate(ScreenName.MAIN_SCREEN);
          }
        })
      )
      .catch(
        action((error) => {
          console.log(error.message);
          this.isLoading = false;
        })
      );
  };
}
