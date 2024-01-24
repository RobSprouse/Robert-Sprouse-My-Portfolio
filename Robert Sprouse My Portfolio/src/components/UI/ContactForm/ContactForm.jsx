import Button from "react-bootstrap/Button";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import * as formik from "formik";
import * as yup from "yup";

function ContactForm() {
     const { Formik } = formik;

     const schema = yup.object().shape({
          name: yup.string().min(2, "Name must be at least 2 characters").max(50, "Name must be at most 50 characters"),
          email: yup.string().required("This field is required").email("Invalid email address"),
          message: yup
               .string()
               .required("This field is required")
               .min(10, "Message must be at least 10 characters")
               .max(500, "Message must be at most 500 characters"),
     });

     return (
          <Formik
               validationSchema={schema}
               onSubmit={console.log}
               initialValues={{
                    name: "",
                    email: "",
                    message: "",
               }}
          >
               {({ handleSubmit, handleChange, handleBlur, values, touched, errors }) => (
                    <Form
                         className="d-flex flex-column w-100 justify-content-center align-items-center col-sm-6"
                         noValidate
                         onSubmit={handleSubmit}
                    >
                         <Row className="mb-3">
                              <Form.Group as={Col} md="12" controlId="validationFormik101">
                                   <Form.Label>Full Name</Form.Label>
                                   <Form.Control
                                        type="text"
                                        name="name"
                                        value={values.name}
                                        onChange={handleChange}
                                        onBlur={handleBlur}
                                        isInvalid={touched.name && !!errors.name}
                                   />
                                   <Form.Control.Feedback type="invalid">{errors.name}</Form.Control.Feedback>
                              </Form.Group>
                              <Form.Group as={Col} md="12" controlId="validationFormik102">
                                   <Form.Label>Email</Form.Label>
                                   <Form.Control
                                        type="email"
                                        name="email"
                                        value={values.email}
                                        onChange={handleChange}
                                        onBlur={handleBlur}
                                        isInvalid={touched.email && !!errors.email}
                                   />
                                   <Form.Control.Feedback type="invalid">{errors.email}</Form.Control.Feedback>
                              </Form.Group>
                              <Form.Group as={Col} md="12" controlId="validationFormik103">
                                   <Form.Label>Message</Form.Label>
                                   <Form.Control
                                        as="textarea"
                                        name="message"
                                        value={values.message}
                                        onChange={handleChange}
                                        onBlur={handleBlur}
                                        isInvalid={touched.message && !!errors.message}
                                        rows={10}
                                   />
                                   <Form.Control.Feedback type="invalid">{errors.message}</Form.Control.Feedback>
                              </Form.Group>
                         </Row>
                         <Button type="submit">Submit</Button>
                    </Form>
               )}
          </Formik>
     );
}

export default ContactForm;
