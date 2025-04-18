import { getNotification } from "@/common/contexts/FeedbackProvider";
import { getMessageError } from "@/common/utils/error.utils";
import { TimesheetDto } from "@/generate-api";
import { timesheetApi } from "@/services/apiClient";
import { getMonth, getYear, isSameMonth } from "date-fns";
import { useCallback, useEffect, useMemo, useState } from "react";

export const useTimesheets = () => {
  const [loading, setLoading] = useState(false);
  const [timesheets, setTimesheets] = useState<TimesheetDto[]>([]);
  const [selectedDate, setSelectedDate] = useState(new Date());

  const isCurrentMonth = useMemo(
    () => isSameMonth(selectedDate, new Date()),
    [selectedDate]
  );

  // Get timesheets
  // =============

  const getTimesheets = useCallback(async () => {
    setLoading(true);
    try {
      const data = await timesheetApi.timesheetGetCurrentUserMonthlyTimesheets(
        getMonth(selectedDate) + 1,
        getYear(selectedDate)
      );
      setTimesheets(data);
    } catch (e) {
      getNotification().error({
        message: getMessageError(e),
      });
    } finally {
      setLoading(false);
    }
  }, [selectedDate]);

  useEffect(() => {
    getTimesheets();
  }, [selectedDate]);

  return {
    timesheets,
    loading,
    selectedDate,
    isCurrentMonth,
    setSelectedDate,
    getTimesheets,
  };
};
