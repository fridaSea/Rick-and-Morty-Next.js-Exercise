async function ServerLogin() {
  async function loginWithRequestToDB(formData: FormData) {
    "use server";
    // console.log("process.env.SECRET :>> ", process.env.SECRET);
    const email = formData.get("email");
    const password = formData.get("password");

    console.log("email, password sent to DB:>> ", email, password);
  }

  return (
    <div>
      <h2>
        This is a client component that calls a function that runs on the server
        (check what and where you see the .env variable SECRET)
      </h2>
      <form action={loginWithRequestToDB}>
        <input
          type="text"
          name="email"
          id="email"
          placeholder="type your email"
        />
        <input
          type="text"
          name="password"
          id="password"
          placeholder="type your password"
        />
        <button type="submit">Login</button>
      </form>
    </div>
  );
}

export default ServerLogin;
