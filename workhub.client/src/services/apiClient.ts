import {
  AccountApi,
  DeviceApi,
  DeviceCategoryApi,
  NotificationApi,
  ProjectApi,
  RequestsApi,
  RoleApi,
  TeamApi,
  TimesheetApi,
  UserApi,
  WorkTimeApi,
  createConfiguration,
  server1,
} from "@/generate-api";
import type { ConfigurationParameters } from "@/generate-api/configuration";
import { FetchHttpLibrary } from "./interceptors";

const baseServer = server1;

const configurationParameters: ConfigurationParameters = {
  baseServer: baseServer,
  httpApi: new FetchHttpLibrary(),
};

export const config = createConfiguration(configurationParameters);
export const configWithRefreshToken = createConfiguration({
  ...configurationParameters,
  httpApi: new FetchHttpLibrary(true),
});

const accountApi = new AccountApi(config);
const accountApiWithRefreshToken = new AccountApi(configWithRefreshToken);
const userApi = new UserApi(configWithRefreshToken);
const teamApi = new TeamApi(configWithRefreshToken);
const projectApi = new ProjectApi(configWithRefreshToken);
const workTimeApi = new WorkTimeApi(configWithRefreshToken);
const roleApi = new RoleApi(configWithRefreshToken);
const timesheetApi = new TimesheetApi(configWithRefreshToken);
const deviceApi = new DeviceApi(configWithRefreshToken);
const deviceCategoryApi = new DeviceCategoryApi(configWithRefreshToken);
const requestApi = new RequestsApi(configWithRefreshToken);
const notificationApi = new NotificationApi(configWithRefreshToken);

export {
  accountApi,
  accountApiWithRefreshToken,
  userApi,
  teamApi,
  projectApi,
  workTimeApi,
  roleApi,
  timesheetApi,
  deviceApi,
  deviceCategoryApi,
  requestApi,
  notificationApi,
};
