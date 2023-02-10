import React, { useState, useEffect } from "react";
import userUserForm from "../../hooks/Custom.hooks";

export const UserForm = () => {
  const { form, setForm, handleChanges } = userUserForm();

  const [areEquals, setAreEquals] = useState(true); // ve si las contraseñas son iguales

  const [passwordConfirmation, setpasswordConfirmation] = useState(); //para corroborar clave

  const [pass, setPass] = useState(true);

  const validPass = () => {
    //comprueba que la password no este indefinida
    const { password } = form;
    if (password !== undefined) {
      setPass(false);
    }
    return pass;
  };

  const handlePasswordConfirmation = (e) => {
    //la e hace refencia al input de donde se ejecuta la funcion(puede ser cualquier valor)

    setpasswordConfirmation(e.target.value); //aca vemos el valor de ese input - atrapamos el input- el valor de pasword es el siguiente
  };

  useEffect(() => {
    const { password } = form; //hago un destructuring de form, //negamos areequalssaco lo que me interesa de form(password), que es el name del input de contraseña
    setAreEquals(password === passwordConfirmation);
    validPass();
  }, [passwordConfirmation, pass]);

  const handleSubmit = (e) => {
    // FX para atrapar el envio del formulario

    e.preventDefault(); //puede ponerse cualquier valor por "e", es para no recargar la pagina
    //userService.save(form) hacer un servicio para guardar en la API
    console.log(form);
  };

  return (
    <div className="w-25 mx-auto mt-5">
      <h4 className="mb-3">Registrate!</h4>
      <form className="needs-validation" noValidate>
        <div className="row g-3">
          <div className="col-12">
            <label htmlFor="email" className="form-label">
              Email
            </label>
            <input
              type="email"
              className="form-control"
              id="email"
              placeholder="you@example.com"
              name="email"
              onChange={handleChanges}
            />
            <div className="invalid-feedback">
              Please enter a valid email address for shipping updates.
            </div>
          </div>

          <div className="col-12">
            <label htmlFor="address" className="form-label">
              Clave
            </label>
            <input
              type="password"
              className="form-control"
              id="address"
              placeholder="Clave"
              name="password" //con esto se va a ir generando el json que mandamos a la api porq asi lo armamos en el hook
              onChange={handleChanges}
              required
            />
            <div className="invalid-feedback">
              Please enter your shipping address.
            </div>
          </div>

          <div className="col-12">
            <label htmlFor="password2" className="form-label">
              Repetir Clave
            </label>
            <input
              // no le ponemos name porque no nos interesa mandarla a la api, la contraseña se manda del primer input
              type="password"
              className="form-control"
              id="password2"
              placeholder="Repetir clave"
              onChange={handlePasswordConfirmation}
            />
            {!areEquals && (
              <div className="form-text list-group-item-danger">
                Las claves no son iguales
              </div>
            )}
          </div>
          <button
            disabled={!areEquals || pass} //negamos areequals //IMPORTANTE! DESPUES SUMAR METODO PARA BLOQUEAR CONTRASEÑA CUANDO SE INTRODUCA VARIAS VECES MAL LA CONTRASEÑA
            className="w-100 btn btn-primary btn-lg"
            type="submit"
            onClick={handleSubmit} //si o si llamar a onClick
          >
            Registrarme
          </button>
        </div>
      </form>
    </div>
  );
};
