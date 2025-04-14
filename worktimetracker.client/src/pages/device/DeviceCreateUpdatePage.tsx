import { Button } from "antd";
import { redirect, useLoaderData } from "react-router";
import { wrapLoaderWithPermission } from "@/common/utils/loader";
import { useRef, useState } from "react";
import DeviceFormCreate, {
  DeviceFormCreateRefState,
} from "@/features/device/components/DeviceFormCreate/DeviceFormCreate";
import { deviceApi } from "@/services/apiClient";
import { wrapPromise } from "@/common/utils/promise";
import { DeviceDto } from "@/generate-api";
import DefaultPage from "@/layouts/default/components/DefaultPage/DefaultPage";
import DefaultHeader from "@/layouts/default/components/DefaultHeader/DefaultHeader";
import DefaultBreadcrumb from "@/layouts/default/components/DefaultBreadcrumb/DefaultBreadcrumb";
import DefaultContent from "@/layouts/default/components/DefaultContent/DefaultContent";

export const loader = wrapLoaderWithPermission(async ({ params }) => {
  if (params.id) {
    // await new Promise((res) => setTimeout(res, 1000));
    const data = await wrapPromise(() => deviceApi.deviceGetById(+params.id!));

    if (!data) {
      throw redirect(`/devices`);
    }

    return data;
  }
});

export function Component() {
  const data = useLoaderData() as DeviceDto;

  const [loading, setLoading] = useState(false);
  const formRef = useRef<DeviceFormCreateRefState | null>(null);

  const handleSave = () => {
    if (formRef.current) {
      formRef.current.handelUpsert();
    }
  };

  return (
    <DefaultPage>
      <DefaultHeader title={data ? "Update device" : "Create device"}>
        <Button
          type="primary"
          icon={<IIonSaveOutline width={16} height={16} />}
          onClick={handleSave}
          loading={loading}
        >
          Save
        </Button>
      </DefaultHeader>

      <DefaultBreadcrumb
        items={[
          { title: "Home", path: "/" },
          { title: "Devices Manager", path: "/devices" },
          { title: data ? "Update device" : "Create device" },
        ]}
      />

      <DefaultContent>
        <DeviceFormCreate ref={formRef} setLoading={setLoading} record={data} />
      </DefaultContent>
    </DefaultPage>
  );
}
