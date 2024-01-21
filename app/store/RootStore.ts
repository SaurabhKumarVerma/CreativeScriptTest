import { LoginStore } from "./data/LoginStore";
import { SignupStore } from "./data/SingupStore";

export type PropsWithStore<T> = T & {
  rootStore?: RootStore;
};
class RootStore {
  LoginStore: LoginStore;
  SignupStore: SignupStore;
  stores: any[];

  constructor() {
    this.LoginStore = new LoginStore(this);
    this.SignupStore = new SignupStore(this);
    this.stores = [this.LoginStore];
  }
}

export default new RootStore();
