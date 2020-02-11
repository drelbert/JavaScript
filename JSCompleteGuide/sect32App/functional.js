//What are the logical blocks to build the functions

const REQUIRED = 'REQUIRED';
const MIN_LENGTH = 'MIN_LENGTH';

const validate = (value, flag, validatorValue) => {
    if (flag === REQUIRED) {
        return value.trim().length > 0;
    }
    if (flag === MIN_LENGTH) {
        return value.trim().length > validatorValue;
    }
}

const getUserInput = (inputElementId) => {
    return document.getElementById(inputElementId).value;
}

const createUser = (userName, userPassword) => {
    if (!validate(userName, REQUIRED) || !validate(userPassword, MIN_LENGTH, 5)) {
        throw new Error(
            'Invalid Input...'
        );
    }
    return {
        userName: userName,
        userPassword: userPassword
    };
}

const greetUser = (user) => {
    console.log('Hola' + user.userName);
}

const signupHandler = (event) => {
    event.preventDefault();

    const enteredUsername = getUserInput('username');
    const enteredPassword = getUserInput('password');
    
    try {
        const newUser = createUser(enteredUsername, enteredPassword);
        console.log(newUser);
        greetUser(newUser);
    } catch (err) {
        alert(err.message);
    }
}

const connectForm = (formId, formSubmitHandler) => {
    const form = document.getElementById(formId);
    form.addEventListener('submit', formSubmitHandler);
}

connectForm('user-input', signupHandler);