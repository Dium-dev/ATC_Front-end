export const getAddresses = async (id: string) => {
  const response = await fetch(`http://localhost:3001/directions/${id}`);
  const data = await response.json();
  return data.directions;
};
export const deleteAddress = async (id: string) => {
  await fetch(`http://localhost:3001/directions/${id}`, {
    method: 'DELETE',
  });
};
export const getDepartmentByName = async (name: string) => {
  try {
    const response = await fetch('https://api-colombia.com/api/v1/Department');
    const data = await response.json();
    console.log(data);

    return data.map(
      (department: { id: string; name: string }) =>
        department.name === name && department
    );
  } catch (error) {
    console.error(error);
  }
};
