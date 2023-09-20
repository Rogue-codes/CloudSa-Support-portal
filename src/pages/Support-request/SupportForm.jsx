import styled from "styled-components";
import emailjs from "@emailjs/browser";
// import toast from "react-hot-toast";
import { useFormik } from "formik";
import { useRef, useState } from "react";
import { motion } from "framer-motion";
import axios from "axios";
import { toast } from "react-toastify";

function SupportForm() {
  const variants = {
    leave: {
      x: "-100vw",
    },
  };
  const formRef = useRef();
  const [isLoading, setIsLoading] = useState(false);
  const emailRegex = RegExp(/^\S+@\S+\.\S+$/);
  const formik = useFormik({
    initialValues: {
      name: "",
      companyName: "",
      email: "",
      phone: "",
      category: "",
      description: "",
    },
    onSubmit: async (values) => {
      setIsLoading(true);
      const { name, companyName, email, phone, category, description } = values;
      try {
        const res = await axios.post(
          "https://cloudsa-portal.onrender.com/api/v1/cloudSa-africa/request/send",
          {
            name,
            companyName,
            companyEmail: email,
            phone,
            category,
            description,
          }
        );
        setIsLoading(false);
        toast.success(res?.data?.message);
      } catch (error) {
        setIsLoading(false);
        toast.success("An error occured please try again");
        console.log(error);
      }
    },
    validate: (values) => {
      let errors = {};
      if (!values.name) {
        errors.name = "Name is Required";
      }
      if (!values.companyName) {
        errors.companyName = "Company name is Required";
      }
      if (!values.email) {
        errors.email = "Required";
      } else if (!emailRegex.test(values.email)) {
        errors.email = "Invalid email address";
      }
      if (!values.phone) {
        errors.phone = "Phone number is Required";
      }
      if (!values.description) {
        errors.description = "Subject is Required";
      }
      if (!values.category) {
        errors.category = "Category is Required";
      }
      return errors;
    },
  });

  return (
    <Container exit="leave" variants={variants}>
      <h1>Submit a request</h1>
      <p>We'd like to hear from you</p>
      <Form onSubmit={formik.handleSubmit} ref={formRef}>
        <label htmlFor="">Name</label>
        <input
          value={formik.values.name}
          onChange={formik.handleChange}
          type="text"
          name="name"
          id="name"
        />
        {formik.touched.name && formik.errors.name ? (
          <p className="error">{formik.errors.name}</p>
        ) : (
          ""
        )}

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
          Company Email Address <span>*</span>
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
          Phone <span>*</span>
        </label>
        <input
          value={formik.values.phone}
          onChange={formik.handleChange}
          type="text"
          name="phone"
          id="phone"
        />
        {formik.touched.phone && formik.errors.phone ? (
          <p className="error">{formik.errors.phone}</p>
        ) : (
          ""
        )}

        <label htmlFor="">
          Subject<span>*</span>
        </label>
        <textarea
          value={formik.values.description}
          onChange={formik.handleChange}
          name="description"
          id="description"
          cols="30"
          rows="10"
        ></textarea>
        {formik.touched.description && formik.errors.description ? (
          <p className="error">{formik.errors.description}</p>
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
          <option value="Azure Active Directory">Azure Active Directory</option>
          <option value="Azure Infrastructure">Azure Infrastructure</option>
          <option value="Microsoft 365">
            Microsoft 365 (Exchange Online,OneDrive, Teams)
          </option>
          <option value="Active Directory">
            On-Premise (Active Directory, Exchange Server)
          </option>
        </select>
        {formik.touched.category && formik.errors.category ? (
          <p className="error">{formik.errors.category}</p>
        ) : (
          ""
        )}
        <button type="submit">{isLoading?"loading...":"Submit"}</button>
      </Form>
    </Container>
  );
}

export default SupportForm;
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
      font-size: 0.7rem;
    }
    display: block;
    margin-top: 5%;
    font-size: 1.3vw;
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
    border: 0.5px solid #9c3233;
    font-size: 1.3vw;
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
    border: 0.5px solid #9c3233;
    font-size: 1.3vw;
    border-radius: 5px;
  }
  textarea {
    @media (max-width: 768px) {
      width: 100%;
      font-size: 1rem;
    }
    width: 100%;
    padding: 2%;
    border: 0.5px solid #9c3233;
    border-radius: 5px;
    font-size: 1.3vw;
  }
  button {
    @media (max-width: 768px) {
      width: 100%;
      font-size: 1.5rem;
      margin-left: 0%;
      margin-top: 10%;
    }
    width: 60%;
    height: 8vh;
    font-size: 1.5vw;
    margin-top: 4%;
    background: #9c3233;
    color: #fff;
    border-radius: 5px;
    border: none;
    cursor: pointer;
  }
`;
