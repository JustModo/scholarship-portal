export function getAuth() {
  console.log("here");
  const user = localStorage.getItem("USER");
  return {
    type: "SET_USER",
    payload: user ? user : null,
  };
}

export function handleLogin(data) {
  console.log("here");
  localStorage.setItem("USER", data.email);
  return {
    type: "SET_USER",
    payload: data.email,
  };
}
