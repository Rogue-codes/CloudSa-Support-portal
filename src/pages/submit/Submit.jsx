import styled from "styled-components";
import emailjs from "@emailjs/browser";
// import toast from "react-hot-toast";
import { useFormik } from "formik";
import { useRef, useState } from "react";
import { articles } from "../../utils/data/articleData";

function Submit() {
  const variants = {
    leave: {
      x: "-100vw",
    },
  };
  const formRef = useRef();
  const [done, isDone] = useState(false);
  const emailRegex = RegExp(/^\S+@\S+\.\S+$/);
  const formik = useFormik({
    initialValues: {
      companyName: "",
      email: "",
      subject: "",
      category: "",
    },
    onSubmit: (values) => {
      emailjs
        .sendForm(
          "service_0mhvxbd",
          "template_ic74q1b",
          formRef.current,
          "8RJySH7rZZrTznIBh"
        )
        .then(
          (result) => {
            console.log(result.text);
            isDone(true);
          },
          (error) => {
            console.log(error.text, values);
          }
        );
      done
        ? alert(`You mail has been recieved you'll get a feedback from us soon`)
        : alert("An error occured");
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

  const [searchVal, setSearchVal] = useState("");

  const filter = articles.filter((item) => {
    if (searchVal === "") {
      return item;
    } else if (item.q.toLowerCase().includes(searchVal.toLowerCase())) {
      return item;
    }
    return null;
  });
  return (
    <Container exit="leave" variants={variants}>
      <Left>
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
            <option value="Azure Active Directory">
              Azure Active Directory
            </option>
            <option value="Azure Infrastructure">Azure Infrastructure</option>
            <option value="Microsoft 365">
              Microsoft 365 (Exchange Online,OneDrive, Teams)
            </option>
            <option value="Active Directory">
              On-Premise (Active Directory, Exchange Server)
            </option>
            <option value="Cybersecurity">Cybersecurity</option>
            <option value="Infrastructure Optimization">
              Infrastructure Optimization (Azure Migration)
            </option>
            <option value="Cloud Readiness">Cloud Readiness</option>
            <option value="Azure Services">Azure Services</option>
            <option value="Microsoft 365">Microsoft 365</option>
            <option value="Dynamics 365">Dynamics 365</option>
            <option value="On-Premise Solutions">On-Premise Solutions</option>
          </select>
          {formik.touched.category && formik.errors.category ? (
            <p className="error">{formik.errors.category}</p>
          ) : (
            ""
          )}
          <button type="submit">Submit</button>
        </Form>
      </Left>

      <Right>
        <header>
          <label htmlFor="">Search for helpful articles</label>
          <input
            type="search"
            value={searchVal}
            onChange={(e) => setSearchVal(e.target.value)}
          />
        </header>

        <main>
          {filter.map((item, i) => (
            <div key={i}>
              <li className="question">{item.q}</li>
              <a href={item.a} target="_blank" rel="noopener noreferrer">
                {item.a}
              </a>
            </div>
          ))}
        </main>
      </Right>
    </Container>
  );
}

export default Submit;
const Container = styled.div`
  @media (max-width: 768px) {
    flex-direction: column;
  }
  width: 100%;
  height: auto;
  padding: 2% 5%;
  margin-top: 2%;
  display: flex;
  justify-content: center;
  gap: 5%;
  h1 {
    @media (max-width: 768px) {
      font-size: 2rem;
    }
    font-size: 4vw;
    color: #9c3233;
    font-weight: 800;
  }
  p {
    @media (max-width: 768px) {
      font-size: 1rem;
    }
    font-size: 1.5vw;
    font-weight: 700;
    color: #9c3233;
  }
`;
const Form = styled.form`
  @media (max-width: 768px) {
    width: 100%;
    padding-bottom: 10%;
  }
  width: 100%;
  padding-bottom: 5%;
  height: auto;
  label {
    @media (max-width: 768px) {
      font-size: 0.7rem;
    }
    display: block;
    margin-top: 2%;
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
    }
    width: 60%;
    height: 8vh;
    font-size: 1.5vw;
    margin-top: 5%;
    background: #9c3233;
    color: #fff;
    border-radius: 10px;
    border: none;
  }
`;

const Left = styled.div`
  @media (max-width: 768px) {
    width: 100%;
  }
  width: 48%;
  height: auto;
`;
const Right = styled.div`
  @media (max-width: 768px) {
    width: 100%;
    height: auto;
  }
  width: 48%;
  height: 100vh;
  overflow: auto;
  padding: 2%;
  label {
    @media (max-width: 768px) {
      font-size: 1.2rem;
    }
    display: block;
    margin-bottom: 2%;
    font-size: 1.7vw;
    font-weight: 700;
    color: #9c3233;
  }
  input {
    @media (max-width: 768px) {
      width: 100%;
    }
    width: 80%;
    height: 6vh;
    padding: 2%;
    &:focus {
      outline: 2px solid #9c3233;
    }
  }
  main {
    margin-top: 5%;
    li {
      @media (max-width: 768px) {
        font-size: 1rem;
        font-weight: 700;
      }
      font-size: 1.2vw;
      color: #9c3233;
    }
    a {
      @media (max-width: 768px) {
        font-size: .8rem;
        padding-left: 0%;
      }
      font-size: 1vw;
      padding-left: 5%;
    }
  }
`;
