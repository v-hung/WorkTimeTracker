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
import { CreateProjectCommand, ProjectDto } from "@/generate-api";
import { useProjectAction } from "../../hooks/useProjectAction";
import { useNavigate } from "react-router";

type State = HTMLAttributes<HTMLDivElement> & {
  record?: ProjectDto;
  setLoading?: Dispatch<SetStateAction<boolean>>;
};

export type ProjectFormCreateRefState = {
  handelUpsert: () => void;
};

const ProjectFormCreate = forwardRef<ProjectFormCreateRefState, State>(
  (props, ref) => {
    const { className, record, setLoading, ...rest } = props;

    const navigate = useNavigate();
    const { loading, create, update, formDefault } = useProjectAction();

    useEffect(() => {
      if (setLoading) {
        setLoading(loading);
      }
    }, [loading, setLoading]);

    const [form] = Form.useForm();
    const [formState] = useState<CreateProjectCommand>(formDefault(record));

    useImperativeHandle(ref, () => ({
      handelUpsert() {
        form.validateFields().then(async () => {
          const formValues = form.getFieldsValue();

          if (!record) {
            await create(formValues);
          } else {
            await update(record.id, formValues);
          }

          navigate("/projects");
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
                label="Project name"
                name="name"
                rules={[{ required: true }]}
              >
                <Input placeholder="name" />
              </Form.Item>
            </Col>

            <Col span={24} />

            <Col xs={24} lg={12}>
              <Form.Item label="Description" name="description">
                <Input placeholder="description" />
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

export default ProjectFormCreate;
