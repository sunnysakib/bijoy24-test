// console.log(userFormatted);

let userData: any = [];
const data = fetch("https://jsonplaceholder.typicode.com/users")
  .then((res) => res.json())
  .then((res) => (userData = [...res]));

export function getUser() {
  const userFormatted = userData.map((item: any) => ({
    key: item.id,
    name: item.name,
    phone: item.phone,
    email: item.email,
    city: item.address.city,
  }));

  const getAllUser = userFormatted;

  return {
    getAllUser,
  };
}
