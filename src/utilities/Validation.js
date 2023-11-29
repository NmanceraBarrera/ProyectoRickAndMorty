export default function validate(input){
    const emailRegExp = /\S+@\S+\.\S+/;
    const regexNum = /\d+/;
    const errors = {};
    
    //* email
    if(!input.email.length) errors.email = "Debe ingresar un email"
    if(input.email.length > 35) errors.email = "El correo debe tener menos de 35 caracteres" 
    else{
        if(!emailRegExp.test(input.email)) errors.email = "Debe ingresar un Email correcto"
    }

    //* password

    if(input.password.length < 6 || input.password.length > 10) errors.password = "La contraseña debe tener entre 6 y 10 caracteres" 
    else{
        if(!regexNum.test(input.password)) errors.password = "Debe ingresar una contraseña con al menos un numero"
    }

    return errors;

}
