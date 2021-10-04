export default function Logout() {
  localStorage.clear();
  return window.location.href="/"
}
