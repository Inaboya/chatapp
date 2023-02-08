const state = () => ({
  token: localStorage.getItem('token') || null,
  user: null,
  currentUser: null,
});
