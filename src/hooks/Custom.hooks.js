import { useState } from "react";

export const userUserForm = (initialState = {}) => {
  const [form, setForm] = useState(initialState);

  const handleChanges = ({ target }) => {
    //escucha cambios en el input y  toma el target
    const { name, value } = target;
    //cuando llame a handleChange se muestra quien lo llamo y muestra su nombre y valur
   // console.log("target: ", target);
   // console.log("name: ", name);
    //console.log("value: ", value);
    setForm({
      ...form, //???
      [name]: value,
    });
  };

  return {
    form,
    setForm,
    handleChanges,
  };
};

export default userUserForm;
