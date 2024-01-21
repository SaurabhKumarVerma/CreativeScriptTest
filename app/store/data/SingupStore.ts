import { action, makeAutoObservable, observable } from "mobx";
import RootStore from "../RootStore";
import { signupService } from "../../api/login.api";
import { useNavigation } from "@react-navigation/native";
import { navigate, replaceScreen } from "../../navigation/RootNavigation";
import { ScreenName } from "../../types/ScreenName";

export class SignupStore {
  rootStore: typeof RootStore;
  @observable userName: string;
  @observable isValidUserName: boolean = false;
  @observable errorMessage: string;
  @observable isLoading: boolean = false;
  @observable isError: boolean = false;

  constructor(rootStore: typeof RootStore) {
    makeAutoObservable(this);
    this.rootStore = rootStore;
  }

  @action
  userEmailSignup = (email: string) => {
    this.rootStore.LoginStore.setIsEmailError(false);
    this.rootStore.LoginStore.setUserName(email);
  };

  @action
  userPasswordSignup = (password: string) => {
    this.rootStore.LoginStore.setIsValidPasswordError(false);
    this.rootStore.LoginStore.setUserPassword(password);
  };

  @action
  setIsError = (status: boolean) => {
    this.isValidUserName = status;
  };

  @action
  setUserName = (name) => {
    const regex = /^[a-zA-Z0-9]+$/;
    this.isValidUserName = false;
    if (!regex.test(name)) {
      this.isValidUserName = true;
      this.errorMessage = "Username Should Be AlphaNumeric";
    } else {
      this.isValidUserName = false;
      this.userName = name;
    }
  };

  @action
  setIsErrorMessage = () => {
    this.isError = false;
    this.errorMessage = undefined;
  };

  @action
  checkInputField = () => {
    this.isValidUserName = false;
    this.isLoading = false;
    this.setIsErrorMessage();
    if (
      !this.userName &&
      !this.rootStore.LoginStore.userName &&
      !this.rootStore.LoginStore.userPassword
    ) {
      this.isError = true;
      this.errorMessage = "Fields Can Not Empty";
    } else {
      this.isError = false;
      this.signupUser();
    }
  };
  @action
  signupUser = () => {
    this.isLoading = true;
    signupService(
      this.userName,
      this.rootStore.LoginStore.userName,
      this.rootStore.LoginStore.userPassword
    )
      .then(
        action((response) => {
          this.isLoading = false;
          if (response.data.code === 1 && !this.isLoading) {
            this.isError = true;
            this.errorMessage = response.data.message;
          } else if (response.data.code === 0) {
            this.rootStore.LoginStore.userName = undefined;
            this.rootStore.LoginStore.userPassword = undefined;
            navigate(ScreenName.LOGIN);
          }
        })
      )
      .catch(
        action((error) => {
          this.isLoading = false;
          console.log(error);
        })
      );
  };
}
