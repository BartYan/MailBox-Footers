export default function validateInfo(values) {
    let errors = {};

    if (!values.username.trim()) {
      errors.username = 'Podaj Imię';
    }
    // else if (!/^[A-Za-z]+/.test(values.name.trim())) {
    //   errors.name = 'Enter a valid name';
    // }
    if (!values.surname.trim()) {
      errors.surname = 'Podaj nazwisko';
    }
    if (!values.position.trim()) {
      errors.position = 'Podaj stanowisko';
    }
    if (!values.email) {
      errors.email = 'Podaj adres email';
    } else if (!/\S+@\S+\.\S+/.test(values.email)) {
      errors.email = 'Podaj prawidłowy adres email';
    }

    if (!values.phone) {
    } else if (!/^[0-9\b]+$/.test(values.phone)) {
      errors.phone = 'Wpisz tylko cyfry bez spacji';
    } else if (values.phone.trim().length != 9) {
      errors.phone = 'Wpisz 9 cyfrowy numer bez spacji';
    }

    return errors;
  }