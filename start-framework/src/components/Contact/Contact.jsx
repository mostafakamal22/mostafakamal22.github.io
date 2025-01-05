import { useState } from "react";
import PageHeader from "../Shared/PageHeader";
import SubHeader from "../Shared/SubHeader";

export default function Contact() {
  const [contacts, setContacts] = useState({
    userName: "",
    userAge: "",
    userEmail: "",
  });

  const handleChange = (e) => {
    setContacts({ ...contacts, [e.target.name]: e.target.value });

    // animation
    if (e.target.value) {
      const isLabelShown =
        e.target.previousElementSibling.classList.contains("show-label");
      !isLabelShown &&
        e.target.previousElementSibling.classList.add("show-label");
    } else {
      e.target.previousElementSibling.classList.remove("show-label");
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(contacts);
  };

  const { userName, userAge, userEmail } = contacts;

  return (
    <section className="portfolio bg-light min-vh-100 py-5 d-flex flex-column align-items-center justify-content-center">
      <div className="container text-center py-5 my-5">
        <header>
          <PageHeader title={"conatct section"} />
          <SubHeader color={"--second-color"} />
        </header>

        <form className="w-75 p-3 mx-auto mt-5 text-start">
          <label htmlFor="userName" className="input-label mb-1">
            User Name :
          </label>
          <input
            id="userName"
            type="text"
            placeholder="Type your name"
            name="userName"
            className="form-control border-0 border-bottom bg-light py-3 mb-4"
            value={userName}
            onChange={handleChange}
          />
          <label htmlFor="userAge" className="input-label mb-1">
            User Age :
          </label>
          <input
            id="userAge"
            type="text"
            placeholder="type your age"
            name="userAge"
            className="form-control border-0 border-bottom bg-light py-3 mb-4"
            value={userAge}
            onChange={handleChange}
          />
          <label htmlFor="userEmail" className="input-label mb-1">
            User Email :
          </label>
          <input
            id="userEmail"
            type="email"
            placeholder="Type your email"
            name="userEmail"
            className="form-control border-0 border-bottom bg-light py-3 mb-4"
            value={userEmail}
            onChange={handleChange}
          />

          <button
            className="btn mt-4 text-white "
            style={{ backgroundColor: "var(--main-color)" }}
            onClick={handleSubmit}
          >
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
}
