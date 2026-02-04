export default function Form({ data, submitHandler }) {
  return (
    <form id="cv-form" action="" method="post">
      <h1>Edit CV</h1>
      <button type="submit" onClick={submitHandler}>Submit</button>
      <h2>Contact Information</h2>
      <label htmlFor="cv-form-name">Name</label>
      <input type="text" name="name" id="cv-form-name" defaultValue={data.name} />
      <label htmlFor="cv-form-email">Email</label>
      <input type="email" name="email" id="cv-form-email" defaultValue={data.email} />
      <label htmlFor="cv-form-tel">Phone</label>
      <input type="tel" name="tel" id="cv-form-tel" defaultValue={data.tel} />
    </form>
  );
}