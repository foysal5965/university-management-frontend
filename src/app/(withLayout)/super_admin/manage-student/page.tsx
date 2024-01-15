import { Button } from "antd";
import Link from "next/link";

const ManageStudents = () => {
  return (
    <div>
      manage student
      <Link href='/super_admin/manage-student/create'>
        <Button>create student</Button>
      </Link>
    </div>
  )
};

export default ManageStudents;
