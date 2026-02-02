export default function Form({ data, submitHandler }) {

  // @todo populate form with data
  
  return (
    <form action="" method="post">
      <h1>Edit CV</h1>
      <button type="submit" onClick={submitHandler}>Submit</button>
      <h2>Contact Information</h2>
      <label htmlFor="form-name">Name</label>
      <input type="text" name="name" id="form-name" value={data.name} />
      <label htmlFor="form-email">Email</label>
      <input type="email" name="email" id="form-email" />
      <label htmlFor="form-tel">Phone</label>
      <input type="tel" name="tel" id="form-tel" />
    </form>
  );
}