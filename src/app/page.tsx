import { getUser } from "@/libs/getUser";
import { Table } from "antd";

const dataSource = [
  {
    key: "1",
    name: "Mike",
    age: 32,
    email: "10 Downing Street",
  },
  {
    key: "2",
    name: "John",
    age: 42,
    email: "10 Downing Street",
  },
];

const columns = [
  {
    title: "Name",
    dataIndex: "name",
    key: "name",
  },
  {
    title: "Phone",
    dataIndex: "phone",
    key: "phone",
  },
  {
    title: "Email",
    dataIndex: "email",
    key: "email",
  },
  {
    title: "City",
    dataIndex: "city",
    key: "city",
  },
];

export default async function Home() {
   const {getAllUser} = await getUser()
  return (
    <main className="flex justify-center flex-col items-center gap-y-5">
      <h1 className="text-3xl font-bold pt-5">BIJOY24 Table</h1>
      <div className="container px-3">
        <Table  columns={columns} dataSource={getAllUser} scroll={{ x: 1300 }} />
      </div>
    </main>
  );
}
