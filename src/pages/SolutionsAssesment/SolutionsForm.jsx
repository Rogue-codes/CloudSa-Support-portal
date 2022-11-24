import styled from "styled-components";
import emailjs from "@emailjs/browser";
// import toast from "react-hot-toast";
import { useFormik } from "formik";
import { useRef, useState } from "react";
import { motion } from "framer-motion";

function SolutionsForm() {
    const variants = {
        leave:{
          x:"-100vw"
        }
      }
    const formRef = useRef()
    const [done, isDone] = useState(false)
  const emailRegex = RegExp(/^\S+@\S+\.\S+$/);
  const formik = useFormik({
    initialValues: {
      companyName: "",
      email: "",
      subject: "",
      category: "",
    },
    onSubmit: (values) => {
        emailjs.sendForm('service_0mhvxbd', 'template_ic74q1b', formRef.current, '8RJySH7rZZrTznIBh')
        .then((result) => {
            console.log(result.text);
            isDone(true)
        }, (error) => {
            console.log(error.text,values);
        });
        done? alert(`You mail has been recieved you'll get a feedback from us soon`) : alert("An error occured")
    },
    validate: (values) => {
      let errors = {};
      if (!values.companyName) {
        errors.companyName = "Required";
      }
      if (!values.email) {
        errors.email = "Required";
      } else if (!emailRegex.test(values.email)) {
        errors.email = "Invalid email address";
      }
      if (!values.subject) {
        errors.subject = "Required";
      }
      if (!values.category) {
        errors.category = "Required";
      }
      return errors;
    },
  });
  return (
    <Container exit="leave" variants={variants}>
      <h1>Submit a request</h1>
      <p>We'd like to hear from you</p>
      <Form onSubmit={formik.handleSubmit} ref={formRef}>
        <label htmlFor="">Company Name</label>
        <input
          value={formik.values.companyName}
          onChange={formik.handleChange}
          type="text"
          name="companyName"
          id="companyName"
        />
        {formik.touched.companyName && formik.errors.companyName ? (
          <p className="error">{formik.errors.companyName}</p>
        ) : (
          ""
        )}

        <label htmlFor="">
          Email Address <span>*</span>
        </label>
        <input
          value={formik.values.email}
          onChange={formik.handleChange}
          type="text"
          name="email"
          id="email"
        />
        {formik.touched.email && formik.errors.email ? (
          <p className="error">{formik.errors.email}</p>
        ) : (
          ""
        )}

        <label htmlFor="">
          Subject<span>*</span>
        </label>
        <textarea
          value={formik.values.subject}
          onChange={formik.handleChange}
          name="subject"
          id="subject"
          cols="30"
          rows="4"
        ></textarea>
        {formik.touched.subject && formik.errors.subject ? (
          <p className="error">{formik.errors.subject}</p>
        ) : (
          ""
        )}

        <label htmlFor="">
          Category<span>*</span>
        </label>
        <select
          value={formik.values.category}
          onChange={formik.handleChange}
          name="category"
          id="category"
        >
          <option value="">--select an option--</option>
          <option value="Cybersecurity">Cybersecurity</option>
          <option value="Infrastructure Optimization">
            Infrastructure Optimization (Azure Migration)
          </option>
          <option value="Cloud Readiness">Cloud Readiness</option>
        </select>
        {formik.touched.category && formik.errors.category ? (
          <p className="error">{formik.errors.category}</p>
        ) : (
          ""
        )}
        <button type="submit">Submit</button>
      </Form>
    </Container>
  );
}

export default SolutionsForm;
const Container = styled(motion.div)`
  width: 100%;
  height: auto;
  padding: 2% 5%;
  margin-top: 2%;
  h1 {
    @media (max-width: 768px) {
        font-size: 2rem;
    }
    font-size: 4vw;
    color: #9c3233;
    font-weight: 800;
    text-align: center;
  }
  p {
    @media (max-width: 768px) {
        font-size: 1rem;
    }
    font-size: 1.5vw;
    text-align: center;
    font-weight: 700;
    color: #9c3233;
    margin-bottom: 5%;
  }
`;
const Form = styled.form`
    @media (max-width: 768px) {
        width: 100%;
        padding-bottom: 10%;
    }
  width: 50%;
  margin: 0 auto;
  padding-bottom: 5% 2%;
  height: auto;

  label {
    @media (max-width: 768px) {
        font-size: .7rem;
    }
    display: block;
    margin-top: 5%;
    font-size: 1vw;
    margin-bottom: 1%;
    color: #9c3233;
    font-weight: 600;
    span {
      color: red;
      margin-left: 0.2%;
    }
  }
  input {
    @media (max-width: 768px) {
        width: 100%;
        font-size: 1rem;
    }
    height: 8vh;
    padding: 2%;
    width: 100%;
    display: block;
    border: none;
    font-size: 1vw;
    box-shadow: rgba(0, 0, 0, 0.05) 0px 6px 24px 0px,
      rgba(0, 0, 0, 0.08) 0px 0px 0px 1px;
    border-radius: 5px;
  }
  select {
    @media (max-width: 768px) {
        width: 100%;
        font-size: 1rem;
    }
    height: 8vh;
    padding: 1%;
    width: 100%;
    display: block;
    border: none;
    font-size: 1vw;
    box-shadow: rgba(0, 0, 0, 0.05) 0px 6px 24px 0px,
      rgba(0, 0, 0, 0.08) 0px 0px 0px 1px;
    border-radius: 5px;
  }
  textarea {
    @media (max-width: 768px) {
        width: 100%;
        font-size: 1rem;
    }
    width: 100%;
    padding: 2%;
    border: none;
    box-shadow: rgba(0, 0, 0, 0.05) 0px 6px 24px 0px,
      rgba(0, 0, 0, 0.08) 0px 0px 0px 1px;
    border-radius: 5px;
  }
  button {
    @media (max-width: 768px) {
        width: 100%;
        font-size: 1.5rem;
        margin-left: 0%;
        margin-top: 15%;
    }
    width: 60%;
    height: 8vh;
    margin-left: 20%;
    font-size: 1.5vw;
    margin-top: 4%;
    background: #9c3233;
    color: #fff;
    border-radius: 10px;
    border: none;
  }
`;