import { Button, Layout } from "antd";
import MainContent from "@/layouts/main/components/MainContent";
import MainHeader from "@/layouts/main/components/MainHeader";
import MainBreadcrumb from "@/layouts/main/components/MainBreadcrumb";
import { useNavigate } from "react-router";
import { wrapLoaderWithPermission } from "@/common/utils/loader";
import WorkTimeTable from "@/features/workTime/components/WorkTimeTable/WorkTimeTable";
import { WorkTimeProvider } from "@/features/workTime/contexts/WorkTimeContext";

export const loader = wrapLoaderWithPermission();

export function Component() {
  const navigate = useNavigate();

  return (
    <Layout className="main-layout h-screen">
      <MainHeader title="Work times Manager">
        <Button
          type="primary"
          onClick={() => navigate("/work-times/create")}
          icon={<IIonPlus width={16} height={16} />}
        >
          Add work time
        </Button>
      </MainHeader>

      <MainBreadcrumb
        items={[{ title: "Home", path: "/" }, { title: "Work time Manager" }]}
      />

      <MainContent>
        <WorkTimeProvider>
          <WorkTimeTable />
        </WorkTimeProvider>
      </MainContent>
    </Layout>
  );
}
