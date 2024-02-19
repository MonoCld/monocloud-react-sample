import { useAuth } from 'oidc-react';

const Header = () => {
  const auth = useAuth();

  return (
    <div style={{ padding: '40px' }}>
      {auth.userData ? (
        <>
          <h3>Logged in as {auth.userData?.profile.email} 🎉</h3>
          <button onClick={() => auth.signOutRedirect({ id_token_hint: auth.userData?.id_token })}>Log out!</button>
        </>
      ) : (
        <>
          <h3>Not Logged in!</h3>
          <button onClick={() => auth.signIn()}>Log In!</button>
        </>
      )}
    </div>
  );
};

export default Header;
