import { Button } from "antd";
import { useNavigate } from "react-router";
import { wrapLoaderWithPermission } from "@/common/utils/loader";
import TeamTable from "@/features/team/components/TeamTable/TeamTable";
import { TeamProvider } from "@/features/team/contexts/TeamContext";
import DefaultPage from "@/layouts/default/components/DefaultPage/DefaultPage";
import DefaultHeader from "@/layouts/default/components/DefaultHeader/DefaultHeader";
import DefaultContent from "@/layouts/default/components/DefaultContent/DefaultContent";
import DefaultBreadcrumb from "@/layouts/default/components/DefaultBreadcrumb/DefaultBreadcrumb";

export const loader = wrapLoaderWithPermission();

export function Component() {
  const navigate = useNavigate();

  return (
    <DefaultPage pageClassName="h-screen">
      <DefaultHeader title="Teams Manager">
        <Button
          type="primary"
          onClick={() => navigate("/teams/create")}
          icon={<IIonPlus width={16} height={16} />}
        >
          Add team
        </Button>
      </DefaultHeader>

      <DefaultBreadcrumb
        items={[{ title: "Home", path: "/" }, { title: "Team Manager" }]}
      />

      <DefaultContent>
        <TeamProvider>
          <TeamTable />
        </TeamProvider>
      </DefaultContent>
    </DefaultPage>
  );
}
