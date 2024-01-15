import { Button } from "antd";
import Link from "next/link";

const Admin = () => {
  return (
    <div>
    <Link href='/super_admin/admin/create'><Button>Create Admin</Button></Link>
    </div>
  )
};

export default Admin;
