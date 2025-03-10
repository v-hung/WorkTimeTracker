import { Button, Layout } from "antd";
import MainContent from "@/layouts/main/components/MainContent";
import MainHeader from "@/layouts/main/components/MainHeader";
import MainBreadcrumb from "@/layouts/main/components/MainBreadcrumb";
import { useNavigate } from "react-router";
import UserTable from "@/features/user/components/UserTable/UserTable";
import { wrapLoaderWithPermission } from "@/common/utils/loader";

export const loader = wrapLoaderWithPermission();

export function Component() {
  const navigate = useNavigate();

  return (
    <Layout className="main-layout h-screen">
      <MainHeader title="User Manager">
        <Button
          type="primary"
          onClick={() => navigate("/users/create")}
          icon={<IIonPersonAddOutline width={16} height={16} />}
        >
          Add user
        </Button>
      </MainHeader>

      <MainBreadcrumb
        items={[{ title: "Home", path: "/" }, { title: "Users Manager" }]}
      />

      <MainContent>
        <UserTable />
      </MainContent>
    </Layout>
  );
}
