import cn from 'classnames';
import React from 'react';
import styles from './Authorization.module.css';
import { createUser } from './createUser';

const Authorization: React.FC = () => {
  const [register, setRegister] = React.useState(() => {
    return {
      username: "",
      email: "",
      password: "",
    };
  });
  
  const changeInputRegister = (event: { persist: () => void; target: { name: string; value: string; }; }) => {
    event.persist();
    setRegister(prev => {
      return {
        ...prev,
        [event.target.name]: event.target.value,
      };
    });
  };
  
  const submitChackin = (event: React.FormEvent) => {
    event.preventDefault();
    createUser({
      username: register.username,
      email: register.email,
      password: register.password,
    });
  };

  return (
    <main className={cn(styles.author)}>
      
      <form className={cn(styles.author__form)}  onSubmit={submitChackin}>
        <h2 className={cn(styles.author__title)}>Регистрация</h2>
        <label className={cn(styles.author__label)}>
          Логин
          <input className={cn(styles.author__input)}
            type="username"
            name="username"
            value={register.username}
            onChange={changeInputRegister}
            placeholder={"Введите логин"}>
          </input>
        </label>
        <label className={cn(styles.author__label)}>
          E-mail
          <input className={cn(styles.author__input)}
            type="email"
            name="email"
            value={register.email}
            onChange={changeInputRegister}
            placeholder={"Введите e-mail"}>
          </input>
        </label>
        <label className={cn(styles.author__label)}>
          Пароль
          <input className={cn(styles.author__input)}
            type="password"
            name="password"
            value={register.password}
            onChange={changeInputRegister}
            placeholder={"Введите пароль"}>   
          </input>
        </label>
        <input className={cn(styles.button, "button")} type='submit' value="Регистрация"/>
      </form>

      <form className={cn(styles.author__form)}>
        <h2 className={cn(styles.author__title)}>Войти</h2>
        <label className={cn(styles.author__label)}>
          E-mail
          <input className={cn(styles.author__input)} placeholder={"Введите e-mail"}></input>
        </label>
        <label className={cn(styles.author__label)}>
          Пароль
          <input className={cn(styles.author__input)} placeholder={"Введите пароль"}></input>
        </label>
        <input className={cn(styles.button, "button")} type='submit' value="Войти"/>
      </form>

    </main>
  );
};

export default Authorization;