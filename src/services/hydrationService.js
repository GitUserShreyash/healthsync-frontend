import {
  getHydrationLogsApi,
  addHydrationLogApi,
  deleteHydrationLogApi,
  getHydrationHistoryApi,
} from "../api/hydrationApi";

const getHydrationLogs = async () => {
  const response = await getHydrationLogsApi();
  return response.data;
};

const addHydrationLog = async (hydrationRequest) => {
  const response = await addHydrationLogApi(hydrationRequest);
  return response.data;
};

const deleteHydrationLog = async (logId) => {
  const response = await deleteHydrationLogApi(logId);
  return response.data;
};

const getHydrationHistory = async () => {
  const response = await getHydrationHistoryApi();
  return response.data;
};

const hydrationService = {
  getHydrationLogs,
  addHydrationLog,
  deleteHydrationLog,
  getHydrationHistory,
};

export default hydrationService;