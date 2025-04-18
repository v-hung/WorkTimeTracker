import MainTable from "@/ui/table/MainTable";
import { DataUserTableType, userTableColumns } from "./constants";
import { useUsers } from "../../hooks/useUsers";
import { useEffect, useMemo } from "react";
import { format } from "@/common/utils/date.utils";

const UserTable = () => {
  const { userPaginated, setRequest, loading } = useUsers();

  useEffect(() => {
    setRequest((r) => ({ ...r, pageNumber: 1, searchString: "" }));
  }, []);

  const data = useMemo(
    () =>
      userPaginated.data.map<DataUserTableType>((v) => ({
        id: v.id,
        email: v.email,
        fullName: v.fullName,
        image: v.email,
        createdAt: format(v.createdAt, "dd/MM/yyyy"),
      })),
    [userPaginated.data]
  );

  return (
    <MainTable columns={userTableColumns} dataSource={data} loading={loading} />
  );
};

export default UserTable;
