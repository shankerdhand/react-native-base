/*
 * @login function is created for login action and add user data to store.
 */
export const login = user => ({
  type: 'LOGIN',
  user,
});

/*
 * @logout function is created for logout action and clear user data from store.
 */
export const logout = () => ({
  type: 'LOGOUT',
  user: undefined,
});
