import cn from 'classnames';
import React from 'react';
import styles from './Authorization.module.css';
import { createUser } from './createUser';
import { loginUser } from './loginUser';

const Authorization: React.FC = () => {
  const [input, setInput] = React.useState(() => {
    return {
      username: "",
      email: "",
      password: "",
    };
  });

  const [error, setError] = React.useState({
    username: "",
    email: "",
    password: "",
  });
  
  const changeInput = (event: { persist: () => void; target: { name: string; value: string; }; }) => {
    event.persist();
    setInput(prev => {
      return {
        ...prev,
        [event.target.name]: event.target.value,
      };
    });
    validateInput(event);
  };

  
  const validateInput = (event: { persist?: () => void; target: { name: string; value: string; }; }) => {
    
    const pattern = /^[A-Z0-9._%+-]+@[A-Z0-9-]+.+.[A-Z]{2,4}$/i;
    const { name, value } = event.target;
    setError(prev => {
      const stateObj = { ...prev, [name]: "" };
 
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
    });
  };

  const submitCreateUser = (event: React.FormEvent) => {
    event.preventDefault();
    createUser({
      username: input.username,
      email: input.email,
      password: input.password,
    });
  };

  const submitLogin = (event: React.FormEvent) => {
    event.preventDefault();
    loginUser({
      email: input.email,
      password: input.password,
    });
  };

  return (
    <main className={cn(styles.author)}>

      <form className={cn(styles.author__form)}  onSubmit={submitCreateUser}>
        <h2 className={cn(styles.author__title)}>Регистрация</h2>
        <label className={cn(styles.author__label)}>Логин
          <input className={cn(styles.author__input)} type="username" name="username" value={input.username}
            onChange={changeInput} onBlur={validateInput} placeholder={"Введите логин"}>
          </input>
          {error.username && <span className={cn(styles.err)}>{error.username}</span>}
        </label>
        <label className={cn(styles.author__label)}>E-mail
          <input className={cn(styles.author__input)} type="email" name="email" value={input.email}
            onChange={changeInput} onBlur={validateInput} placeholder={"Введите e-mail"}>
          </input>
          {error.email && <span className={cn(styles.err)}>{error.email}</span>}
        </label>
        <label className={cn(styles.author__label)}>Пароль
          <input className={cn(styles.author__input)} type="password" name="password" value={input.password}
            onChange={changeInput} onBlur={validateInput} placeholder={"Введите пароль"}>   
          </input>
          {error.password && <span className={cn(styles.err)}>{error.password}</span>}
        </label>
        <input className={cn(styles.button, "button")} type="submit" value="Регистрация"/>
      </form>

      <form className={cn(styles.author__form)}  onSubmit={submitLogin}>
        <h2 className={cn(styles.author__title)}>Войти</h2>
        <label className={cn(styles.author__label)}>E-mail
          <input className={cn(styles.author__input)} type="email" name="email" value={input.email}
            onChange={changeInput} onBlur={validateInput} placeholder={"Введите e-mail"}>
          </input>
          {error.email && <span className={cn(styles.err)}>{error.email}</span>}
        </label>
        <label className={cn(styles.author__label)}>Пароль
          <input className={cn(styles.author__input)} type="password" name="password" value={input.password}
            onChange={changeInput} onBlur={validateInput} placeholder={"Введите пароль"}>   
          </input>
          {error.password && <span className={cn(styles.err)}>{error.password}</span>}
        </label>
        <input className={cn(styles.button, "button")} type="submit" value="Войти"/>
      </form>

    </main>
  );
};

export default Authorization;