import { getMessageError } from "@/common/utils/error";
import { TeamDto, TeamDtoPaginated } from "@/generate-api";
import { teamApi } from "@/services/apiClient";
import { notification } from "antd";
import { useCallback, useEffect, useState } from "react";

export const useTeams = () => {
  const [loading, setLoading] = useState(false);

  // GET LIST team
  // =============

  const [teams, setTeams] = useState<TeamDtoPaginated>({
    data: [],
    currentPage: 1,
    pageSize: 10,
    totalCount: 100,
    totalPages: 10,
    hasNextPage: true,
    hasPreviousPage: false,
  });

  const [request, setRequest] = useState({
    pageNumber: 1,
    pageSize: 10,
    searchString: "",
  });

  const fetchTeams = useCallback(async () => {
    setLoading(true);
    try {
      const data = await teamApi.teamGetAll(
        request.pageNumber,
        request.pageSize,
        request.searchString
      );
      setTeams(data);
    } catch (e) {
      notification.error({
        message: getMessageError(e),
      });
    } finally {
      setLoading(false);
    }
  }, [request]);

  useEffect(() => {
    fetchTeams();
  }, [request]);

  // GET team BY ID
  // ==============

  const [team, setTeam] = useState<TeamDto | null>();

  const fetchTeam = async (id: number) => {
    setLoading(true);
    try {
      const data = await teamApi.teamGetById(id);
      setTeam(data);
    } catch (e) {
      notification.error({
        message: getMessageError(e),
      });
    } finally {
      setLoading(false);
    }
  };

  return { teams, loading, fetchTeams, request, setRequest, team, fetchTeam };
};
