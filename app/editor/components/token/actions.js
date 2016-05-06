export function editToken(token) {
  return {
    type: 'TOKEN_CLICKED',
    payload: {
      token
    }
  };
}
