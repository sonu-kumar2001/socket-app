import React from "react";

export default function LoginForm({ handleSubmit, setManagerId, setPassword }) {
  return (
      <section className="login-section">
      <div className="form-div flex-center">
          <h1>RTTV</h1>
        <form onSubmit={handleSubmit}>
          <label htmlFor="managerId">Manager Id</label>
          <input
            type="number"
            name="managerid"
            placeholder="Enter your Id"
            onChange={(e) => setManagerId(e.target.value)}
          />
          <label htmlFor="password">Password</label>
          <input
            type="password"
            name="password"
            placeholder="******"
            onChange={(e) => setPassword(e.target.value)}
          />
          <button type="submit">Sign in</button>
        </form>
      </div>
    </section>
  );
}
