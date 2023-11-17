export const About = () => {
  const handleRegister = (event: Event | undefined) => {
    event?.preventDefault();
    const formInputs =
    
  };

  return (
    <>
      <h1>This is the About Page</h1>
      <form
        onSubmit={() => handleRegister(event)}
        style={{ display: "flex", flexDirection: "column" }}
      >
        <h1>Register Page</h1>
        <input type="email" name="email" placeholder="Enter Email" />
        <input type="password" name="password" placeholder="Enter Password" />
        <input
          type="password"
          name="confirmPassword"
          placeholder="Confirm Password"
        />
        <input type="name" name="name" placeholder="Enter Name" />
        <input type="lastname" name="lastname" placeholder="Enter Last Name" />
        <button>Register</button>
      </form>
    </>
  );
};
