import MainTable from "@/ui/table/MainTable";
// import { useTeams } from "../../hooks/useTeams";
import { useEffect, useMemo } from "react";
import { teamTableColumns } from "./constants";
import { useTeamContext } from "../../contexts/TeamContext";

const TeamTable = () => {
  const { teamPaginated, setRequest, loading } = useTeamContext();

  useEffect(() => {
    setRequest((r) => ({ ...r, pageNumber: 1, searchString: "" }));
  }, []);

  const data = useMemo(() => teamPaginated.data, [teamPaginated.data]);

  return (
    <MainTable columns={teamTableColumns} dataSource={data} loading={loading} />
  );
};

export default TeamTable;
