import { useState, useEffect, ChangeEvent } from 'react';
import { useForm, SubmitHandler } from 'react-hook-form';
import { MainButton } from '~/components/button/button';
import { useDashboardUserStore } from '~/store/dashboardUserStore';
import { useRouter } from 'next/navigation';
import { useParams } from 'next/navigation';
import Swal from 'sweetalert2';
import { useAddresses } from '~/hooks/userDashboard/useAddresses';

interface AddressForm {
  type: string;
  typeValue: string;
  number1: string;
  number2: string;
  department: string;
  city: string;
  phone: string;
  barrio: string;
  references: string;
}

interface Departament {
  id: string;
  name: string;
}
interface City {
  id: string;
  name: string;
}

const FormAddress = () => {
  const { id } = useParams();

  const { addresses, loading, update, create } = useAddresses();
  const address = addresses?.find((address) => address.id === id);

  const [departments, setDepartments] = useState<Departament[]>();
  const [cities, setCities] = useState<City[]>();
  const [loadingDepartments, setLoadingDepartments] = useState(true);
  const [loadingCities, setLoadingCities] = useState(true);
  const [idDepartment, setIdDepartment] = useState<string>(
    !id ? '9' : (address?.department.id as string)
  );
  const [notNumber, setNotNumber] = useState(false);

  const setFormAddress = useDashboardUserStore((state) => state.setFormAddress);

  const {
    handleSubmit,
    register,
    formState: { errors },
    watch,
    setValue,
  } = useForm<AddressForm>({
    defaultValues: {
      city: id && address?.city,
    },
  });

  const handleForm: SubmitHandler<AddressForm> = (data, event) => {
    event?.preventDefault();
    if (data.city === 'Cargando...') {
      if (cities?.length) {
        data.city = cities[0].name;
      } else {
        alertErrors('La conexión a Internet es inestable');
      }
    }
    if (data.city !== 'Cargando...') {
      const newAddress = {
        id,
        address: `${data.type} ${data.typeValue} ${
          data.number1 ? `#${data.number1}-${data.number2}` : 'S/N'
        }`,
        district:
          data.department === 'Cargando...'
            ? 'Caquetá'
            : data.department.split(',')[1] || data.department,
        city: data.city,
        phone: data.phone,
        neighborhood: data.barrio || '-',
        addressReference: data.references || '',
      };
      if (id) {
        update(newAddress);
        router.push('/dashboardUser/Direcciones');
      } else {
        const { id, ...newAddressWithoutId } = newAddress;
        try {
          create(newAddressWithoutId);
          setFormAddress(false);
          router.refresh();
        } catch (error: any) {
          alertErrors(error.message);
        }
      }
    } else {
      alertErrors('La conexión a Internet es inestable');
    }
  };

  const alertErrors = (text: string) => {
    Swal.fire({
      toast: true,
      position: 'top-end',
      title: 'Error en el formulario',
      text,
      icon: 'error',
      showConfirmButton: false,
      timer: 4000,
    });
  };
  const handleErrors = () => {
    errors.references?.message && alertErrors(errors.references.message);
    errors.phone?.message && alertErrors(errors.phone.message);
    errors.number2?.message && alertErrors(errors.number2.message);
    errors.number1?.message && alertErrors(errors.number1.message);
    errors.typeValue?.message && alertErrors(errors.typeValue.message);
    errors.barrio?.message && alertErrors(errors.barrio.message);
  };
  const validatePhoneNumber = (value: string) => {
    if (value.startsWith('3')) {
      return true;
    }
    return 'El número de teléfono no es válido';
  };

  const router = useRouter();

  useEffect(() => {
    if (id) {
      if (address) {
        const [type, typeValue, numbers] = address.address.split(' ');
        const [number1, number2] = numbers.split('-');
        setValue('department', address.department.name);
        setValue('city', address.city);
        setValue('barrio', address.barrio);
        setValue('type', type);
        setValue('typeValue', typeValue);
        setValue('number1', number1.slice(1));
        setValue('number2', number2);
        setValue('phone', address.phone);
        setValue('references', address.references);
        setIdDepartment(address.department.id);
      }
    }
  }, [address, addresses, id, setValue, loading]);

  useEffect(() => {
    fetch('https://api-colombia.com/api/v1/Department')
      .then((res) => res.json())
      .then((data) => setDepartments(data))
      .then(() => setLoadingDepartments(false));
  }, []);
  useEffect(() => {
    setCities([]);
    setLoadingCities(true);
    if (id && idDepartment === address?.department.id && !loading) {
      fetch(
        `https://api-colombia.com/api/v1/Department/${address?.department.id}/cities`
      )
        .then((res) => res.json())
        .then((data) => setCities(data))
        .then(() => setLoadingCities(false));
    } else {
      if (idDepartment) {
        fetch(
          `https://api-colombia.com/api/v1/Department/${idDepartment}/cities`
        )
          .then((res) => res.json())
          .then((data) => setCities(data))
          .then(() => setLoadingCities(false));
      }
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [idDepartment]);

  const handleCheckboxChange = (event: ChangeEvent<HTMLInputElement>) => {
    setNotNumber(event.target.checked);
    if (!notNumber) {
      setValue('number1', '');
      setValue('number2', '');
    }
  };

  return (
    <form
      className="max-w-full flex flex-col items-center h-[50vh] justify-evenly"
      onSubmit={handleSubmit(handleForm)}
    >
      {id && (
        <h1 className="text-4xl font-bold text-center">Edita la dirección</h1>
      )}
      <div className="w-full">
        <table className="w-full">
          <thead>
            <tr className="flex p-2 py-4 items-center justify-between text-center bg-primary-lm text-gray gap-x-0.5 text-sm">
              <th className="w-32">Departamento</th>
              <th className="w-36">Ciudad</th>
              <th className="w-36">Barrio</th>
              <th className="w-36">Tipo de calle</th>
              <th className="w-36">{watch('type') || 'Calle'}</th>
              <th className="w-36">Número</th>
              <th className="w-36">No tengo número</th>
              <th className="w-32">Celular</th>
            </tr>
          </thead>
          <tbody>
            <tr className="flex items-center justify-between p-2 py-4 bg-primary-dm gap-x-0.5 text-sm">
              <td className="w-32 flex items-center justify-center">
                <select
                  {...register('department', {
                    required: {
                      value: true,
                      message: 'Elije un departamento',
                    },
                  })}
                  onChange={(e) => {
                    setIdDepartment(e.target.value.split(',')[0]);
                  }}
                  className="w-full"
                >
                  {loadingDepartments && <option>Cargando...</option>}
                  {!loading && idDepartment && address && (
                    <option
                      value={[
                        `${address.department.id},${address.department.name}`,
                      ]}
                      selected
                      defaultChecked
                    >
                      {address.department.name}
                    </option>
                  )}
                  {id &&
                    departments
                      ?.filter(
                        (department) =>
                          department.name !== address?.department.name
                      )
                      .map((department) => (
                        <option
                          key={department.id}
                          value={[`${department.id},${department.name}`]}
                          selected={
                            department.name === address?.department.name
                          }
                        >
                          {department.name}
                        </option>
                      ))}
                  {!id &&
                    departments?.map((department) => (
                      <option
                        key={department.id}
                        value={[`${department.id},${department.name}`]}
                      >
                        {department.name}
                      </option>
                    ))}
                </select>
              </td>
              <td className="w-36 flex items-center justify-center">
                <select
                  className="w-full"
                  {...register('city', {
                    required: {
                      value: true,
                      message: 'Elije una ciudad',
                    },
                  })}
                >
                  {loadingCities && <option defaultChecked>Cargando...</option>}
                  {idDepartment === address?.department.id && address && (
                    <option value={address.city} selected>
                      {address.city}
                    </option>
                  )}
                  {id &&
                    cities
                      ?.filter((city) => city.name !== address?.city)
                      .map((city) => (
                        <option
                          key={city.id}
                          value={city.name}
                          defaultChecked={
                            city.name === address?.city ? true : false
                          }
                        >
                          {city.name}
                        </option>
                      ))}
                  {!id &&
                    cities?.map((city) => (
                      <option
                        key={city.id}
                        value={city.name}
                        defaultChecked={
                          id ? city.name === watch('department') && true : false
                        }
                      >
                        {city.name}
                      </option>
                    ))}
                </select>
              </td>
              <td className="w-36 flex items-center justify-center">
                <input
                  type="text"
                  className="w-full"
                  {...register('barrio', {
                    required: {
                      value: false,
                      message: 'Escribe el barrio',
                    },
                    minLength: {
                      value: 4,
                      message: 'El barrio no es válido',
                    },
                  })}
                />
              </td>
              <td className="w-36 flex items-center justify-center">
                <select
                  className="w-full"
                  {...register('type', {
                    required: {
                      value: true,
                      message: 'El tipo de calle es requerido',
                    },
                  })}
                >
                  <option value="Avenida">Avenida</option>
                  <option value="Avenida Calle">Avenida Calle</option>
                  <option value="Avenida Carrera">Avenida Carrera</option>
                  <option value="Calle">Calle</option>
                  <option value="Carrera">Carrera</option>
                  <option value="Circular">Circular</option>
                  <option value="Circunvalar">Circunvalar</option>
                  <option value="Diagonal">Diagonal</option>
                  <option value="Manzana">Manzana</option>
                  <option value="Transversal">Transversal</option>
                  <option value="Vía">Vía</option>
                </select>
              </td>
              <td className="w-36 flex items-center justify-center">
                <input
                  type="text"
                  className="w-full"
                  {...register('typeValue', {
                    required: {
                      value: true,
                      message: `Ingresa el número de la ${watch('type')}`,
                    },
                    minLength: {
                      value: 1,
                      message: `El número de la ${watch('type')} no es válido`,
                    },
                  })}
                />
              </td>
              <td className="w-36 flex items-center justify-center">
                <div className="flex items-center justify-center w-full">
                  <input
                    type="text"
                    className="w-1/3"
                    placeholder="#"
                    disabled={notNumber}
                    maxLength={2}
                    {...register('number1', {
                      required: {
                        value: notNumber ? false : true,
                        message: `Ingrese el primer par de números de la ${watch(
                          'type'
                        )}`,
                      },
                    })}
                  />
                  <input
                    type="text"
                    className="w-1/3"
                    disabled={notNumber}
                    maxLength={2}
                    {...register('number2', {
                      required: {
                        value: notNumber ? false : true,
                        message: `Ingrese el segundo par de números de la ${watch(
                          'type'
                        )}`,
                      },
                    })}
                  />
                </div>
              </td>
              <td className="w-36 flex items-center justify-center">
                <input
                  type="checkbox"
                  onChange={handleCheckboxChange}
                  checked={notNumber}
                />
              </td>
              <td className="w-32 flex items-center justify-center">
                <input
                  type="tel"
                  maxLength={10}
                  className="w-full p-2"
                  {...register('phone', {
                    required: {
                      value: true,
                      message: 'Ingresa un número de télefono',
                    },
                    minLength: {
                      value: 10,
                      message: 'El número de teléfono no es válido',
                    },
                    validate: validatePhoneNumber,
                  })}
                />
              </td>
            </tr>
          </tbody>
        </table>
        <div className="flex items-center w-full justify-between pb-3 px-2 gap-x-1.5 bg-primary-dm text-gray text-lg">
          <div className="bg-primary-lm p-2 grow text-center">
            <p>Referencias adicionales</p>
          </div>
          <input
            {...register('references', {
              required: false,
              minLength: {
                value: 20,
                message:
                  'Proporcione mayor información en el campo de referencias adicionales',
              },
            })}
            maxLength={50}
            type="text"
            className="w-[75.6%] text-black"
            placeholder="Ingrese alguna información necesaria para encontrar el destino. (Opcional)"
          />
        </div>
      </div>
      <div className="flex items-center gap-x-4 w-1/2 justify-center">
        <MainButton
          variant="secondary"
          color="red"
          className=" w-1/6"
          onClick={handleErrors}
          type="submit"
        >
          Guardar
        </MainButton>
        <MainButton
          type="button"
          variant="secondary"
          color="red"
          className=" w-1/6"
          onClick={() => {
            setFormAddress(false);
            router.push('/dashboardUser/Direcciones');
          }}
        >
          Cancelar
        </MainButton>
      </div>
    </form>
  );
};
export default FormAddress;
