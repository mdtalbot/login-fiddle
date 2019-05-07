export function signOutAction() {
  localStorage.clear();
  return {
    type: UNAUTHENTICATED
  };
}
