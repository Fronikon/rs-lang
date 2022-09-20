import { AuthInputValueType } from "../types/types";

const validation = (prev: AuthInputValueType, name: string, value: string) => {
  const stateObj = { ...prev, [name]: "" };
  const pattern = /^[A-Z0-9._%+-]+@[A-Z0-9-]+.+.[A-Z]{2,4}$/i;
 
  switch (name) {
  case "username":
    if (!value) {
      stateObj[name] = "Пожалуйста введите логин.";
    }
    break;

  case "email":
    if (!value) {
      stateObj[name] = "Пожалуйста введите email.";
    } else if (!pattern.test(value)) {
      stateObj[name] = "Введите корректный email.";
    }
    break;
 
  case "password":
    if (!value) {
      stateObj[name] = "Пожалуйста введите пароль.";
    }
    if (value.length < 8 && value.length > 0) {
      stateObj[name] = "Пароль должен быть не менее 8ми символов.";
    }
    break;
 
  default:
    break;
  }
 
  return stateObj;
};

export default validation;
