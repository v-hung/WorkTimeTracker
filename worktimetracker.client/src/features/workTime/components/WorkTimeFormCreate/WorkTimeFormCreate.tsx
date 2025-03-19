import { Col, Form, Input, Row, Spin } from "antd";
import {
  Dispatch,
  forwardRef,
  HTMLAttributes,
  SetStateAction,
  useEffect,
  useImperativeHandle,
  useState,
} from "react";
import { CreateWorkTimeCommand, WorkTimeDto } from "@/generate-api";
import { useWorkTimeAction } from "../../hooks/useWorkTimeAction";
import MyTimePicker from "@/ui/form/MyTimePicker";
import { workTimeDisabledTime } from "../../utils/workTime.util";
import { formatDate, localTimeToDate } from "@/common/utils/date.util";
import { useNavigate } from "react-router";

type State = HTMLAttributes<HTMLDivElement> & {
  record?: WorkTimeDto;
  setLoading?: Dispatch<SetStateAction<boolean>>;
};

export type WorkTimeFormCreateRefState = {
  handelUpsert: () => void;
};

const WorkTimeFormCreate = forwardRef<WorkTimeFormCreateRefState, State>(
  (props, ref) => {
    const { className, record, setLoading, ...rest } = props;

    const navigate = useNavigate();
    const { loading, create, update, formDefault } = useWorkTimeAction();

    useEffect(() => {
      if (setLoading) {
        setLoading(loading);
      }
    }, [loading, setLoading]);

    const [form] = Form.useForm();
    const [formState] = useState<CreateWorkTimeCommand>(formDefault(record));

    useImperativeHandle(ref, () => ({
      handelUpsert() {
        form.validateFields().then(async () => {
          const formValues = form.getFieldsValue();

          if (!record) {
            await create(formValues);
          } else {
            await update(record.id, formValues);
          }

          navigate("/work-times");
        });
      },
    }));

    return (
      <div {...rest} className={`form-container ${className}`}>
        <Form
          layout="vertical"
          form={form}
          initialValues={formState}
          validateTrigger="onBlur"
          style={{
            paddingRight: "0.75rem",
            paddingTop: "1rem",
            paddingLeft: "0.75rem",
          }}
        >
          <Row wrap gutter={{ sm: 8, md: 16 }}>
            <Col xs={24} lg={12}>
              <Form.Item
                label="Work time title"
                name="title"
                rules={[{ required: true }]}
              >
                <Input placeholder="title" />
              </Form.Item>
            </Col>

            <Col span={24} />

            <Col xs={24} lg={12}>
              <Form.Item
                label="Start time morning"
                name="startTimeMorning"
                rules={[{ required: true }]}
                getValueFromEvent={(v) => v && formatDate(v)}
                getValueProps={(v) => ({
                  value: v ? localTimeToDate(v) : null,
                })}
              >
                <MyTimePicker
                  style={{ width: "100%" }}
                  disabledTime={workTimeDisabledTime}
                  hideDisabledOptions
                  showSecond={false}
                  showNow={false}
                />
              </Form.Item>
            </Col>

            <Col xs={24} lg={12}>
              <Form.Item
                label="End time morning"
                name="endTimeMorning"
                rules={[{ required: true }]}
                getValueFromEvent={(v) => v && formatDate(v)}
                getValueProps={(v) => ({
                  value: v ? localTimeToDate(v) : null,
                })}
              >
                <MyTimePicker
                  style={{ width: "100%" }}
                  disabledTime={workTimeDisabledTime}
                  format={"HH:mm:ss"}
                  hideDisabledOptions
                  showSecond={false}
                  showNow={false}
                />
              </Form.Item>
            </Col>

            <Col xs={24} lg={12}>
              <Form.Item
                label="Start time afternoon"
                name="startTimeAfternoon"
                rules={[{ required: true }]}
                getValueFromEvent={(v) => v && formatDate(v)}
                getValueProps={(v) => ({
                  value: v ? localTimeToDate(v) : null,
                })}
              >
                <MyTimePicker
                  style={{ width: "100%" }}
                  disabledTime={workTimeDisabledTime}
                  format={"HH:mm:ss"}
                  hideDisabledOptions
                  showSecond={false}
                  showNow={false}
                />
              </Form.Item>
            </Col>

            <Col xs={24} lg={12}>
              <Form.Item
                label="End time afternoon"
                name="endTimeAfternoon"
                rules={[{ required: true }]}
                getValueFromEvent={(v) => v && formatDate(v)}
                getValueProps={(v) => ({
                  value: v ? localTimeToDate(v) : null,
                })}
              >
                <MyTimePicker
                  style={{ width: "100%" }}
                  disabledTime={workTimeDisabledTime}
                  format={"HH:mm:ss"}
                  hideDisabledOptions
                  showSecond={false}
                  showNow={false}
                />
              </Form.Item>
            </Col>

            <Col xs={24} lg={12}>
              <Form.Item label="Allowed late minutes" name="allowedLateMinutes">
                <Input type="number" />
              </Form.Item>
            </Col>
          </Row>
        </Form>

        {loading && (
          <div className="loading-container">
            <Spin />
          </div>
        )}
      </div>
    );
  }
);

export default WorkTimeFormCreate;
