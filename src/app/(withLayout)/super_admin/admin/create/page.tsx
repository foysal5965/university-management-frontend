'use client'
import Form from "@/components/Forms/Form";
import FormDatePicker from "@/components/Forms/FormDatePicker";
import FormInput from "@/components/Forms/FormInput";
import FormSelectField from "@/components/Forms/FormSelectFieled";
import FormTextArea from "@/components/Forms/FormTextArea";
import UploadImage from "@/components/ui/UploadImage";
import { bloodGroupOption, genderOptions } from "@/constants/global";
import { useDepartmentsQuery } from "@/redux/api/departmentApi";
import { adminSchema } from "@/schemas/adminSchema";
import { IDepartment } from "@/types";
import { yupResolver } from "@hookform/resolvers/yup";
import { Button, Col, Row } from "antd";

const CreateAdmin = () => {
    const onSubmit = async (data: any) => {
        try {
            console.log(data)
        }

        catch (err) { }
    };
    const {data}= useDepartmentsQuery({page: 1, limit:100})
     //@ts-ignore
    const departments:IDepartment[] = data?.departments;
    const departmentOptions =
    departments &&
    departments?.map((department) => {
      return {
        label: department?.title,
        value: department?.id,
      };
    })
    return (
        <div>
            <h1>form data</h1>
            <Form submitHandler={onSubmit}resolver={yupResolver(adminSchema)}>
                <div style={{
                    border: '1px solid #d9d9d9',
                    borderRadius: '5px',
                    padding: '15px',
                    marginBottom: '10px'
                }}> Admin Information
                    <Row gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}>
                        <Col className="gutter-row" span={8} style={{
                            marginBottom: "10px",
                        }}>
                            <FormInput name="admin.name.firstName" type="text" size="large" label="First Name" />
                        </Col>
                        <Col className="gutter-row" span={8} style={{
                            marginBottom: "10px",
                        }}>
                            <FormInput name="admin.name.middleName" type="text" size="large" label="Middle Name" />
                        </Col>
                        <Col className="gutter-row" span={8} style={{
                            marginBottom: "10px",
                        }}>
                            <FormInput name="admin.name.lastName" type="text" size="large" label="Last Name" />
                        </Col>
                        <Col
                            className="gutter-row"
                            span={8}
                            style={{
                                marginBottom: "10px",
                            }}
                        >
                            <FormInput
                                type="password"
                                name="password"
                                size="large"
                                label="Password"
                            />
                        </Col>
                        <Col
                            className="gutter-row"
                            span={8}
                            style={{
                                marginBottom: "10px",
                            }}
                        >
                            <FormSelectField
                                size="large"
                                name="admin.gender"
                                options={genderOptions}
                                label="Gender"
                                placeholder="Select"
                            />
                        </Col>
                        <Col
                            className="gutter-row"
                            span={8}
                            style={{
                                marginBottom: "10px",
                            }}
                        >
                            <FormSelectField
                                size="large"
                                name="admin.managementDepartment"
                                options={departmentOptions}
                                label="Department"
                                placeholder="Select"
                            />
                        </Col>
                        <Col
                className="gutter-row"
                span={8}
                style={{
                  marginBottom: "10px",
                }}
              >
                <UploadImage name="file" />
              </Col>

                    </Row>
                </div>
                <div style={{
                    border: '1px solid #d9d9d9',
                    borderRadius: '5px',
                    padding: '15px',
                    marginBottom: '10px'
                }}> Basic Information
                    <Row gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}>
                        <Col className="gutter-row" span={8} style={{
                            marginBottom: "10px",
                        }}>
                            <FormInput name="admin.email" type="email" size="large" label="Email Address" />
                        </Col>
                        <Col className="gutter-row" span={8} style={{
                            marginBottom: "10px",
                        }}>
                            <FormInput name="admin.contactNo" type="text" size="large" label="Contact No" />
                        </Col>
                        <Col className="gutter-row" span={8} style={{
                            marginBottom: "10px",
                        }}>
                            <FormInput name="admin.emergencyContactNo" type="text" size="large" label="Emergency Contact No" />
                        </Col>
                        <Col
                            className="gutter-row"
                            span={8}
                            style={{
                                marginBottom: "10px",
                            }}
                        >
                           <FormDatePicker
                  name="admin.dateOfBirth"
                  label="Date of birth"
                  size="large"
                />
                        </Col>
                        <Col
                            className="gutter-row"
                            span={8}
                            style={{
                                marginBottom: "10px",
                            }}
                        >
                            <FormSelectField
                                size="large"
                                name="admin.bloodGroup"
                                options={bloodGroupOption}
                                label="Blood Group"
                                placeholder="Select"
                            />
                        </Col>
                        <Col
                            className="gutter-row"
                            span={8}
                            style={{
                                marginBottom: "10px",
                            }}
                        >
                            <FormInput
                                size="large"
                                name="admin.designation"
                                
                                label="Designation"
                                placeholder=""
                            />
                        </Col>
                        <Col span={12} style={{ margin: "10px 0" }}>
                <FormTextArea
                  name="admin.presentAddress"
                  label="Present address"
                  rows={4}
                />
              </Col>

              <Col span={12} style={{ margin: "10px 0" }}>
                <FormTextArea
                  name="admin.permanentAddress"
                  label="Permanent address"
                  rows={4}
                />
              </Col>

                    </Row>
                </div>
                <Button htmlType="submit" type="primary">Create</Button>
            </Form>
        </div>
    )
};

export default CreateAdmin;
