export default function Form({ data, submitHandler }) {
  return (
    <form id="cv-form" action="" method="post">
      <h1>Edit CV</h1>
      <button type="submit" onClick={submitHandler}>Submit</button>
      <h2>Contact Information</h2>
      <label htmlFor="form-name">Name</label>
      <input type="text" name="name" id="form-name" defaultValue={data.name} /> {/* @todo rename from "form-name" to "cv-form-name" */}
      <label htmlFor="form-email">Email</label>
      <input type="email" name="email" id="form-email" defaultValue={data.email} />
      <label htmlFor="form-tel">Phone</label>
      <input type="tel" name="tel" id="form-tel" defaultValue={data.tel} />
    </form>
  );
}