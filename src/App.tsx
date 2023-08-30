import { useState } from 'react'
import { AuthProvider, AuthProviderProps } from 'oidc-react';
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Header from './Header';
import './App.css'

const oidcConfig: AuthProviderProps = {
  authority: 'https://<your-domain>',
  clientId: '<your-client-id>',
  redirectUri: 'http://localhost:3000',
  postLogoutRedirectUri: 'http://localhost:3000',
  scope: 'openid profile email',
  responseType: 'code',
  loadUserInfo: true,
  autoSignIn: false,
};

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <AuthProvider {...oidcConfig}>
        <Header />
        <div>
          <a href="https://vitejs.dev" target="_blank">
            <img src={viteLogo} className="logo" alt="Vite logo" />
          </a>
          <a href="https://react.dev" target="_blank">
            <img src={reactLogo} className="logo react" alt="React logo" />
          </a>
        </div>
        <h1>Vite + React</h1>
        <div className="card">
          <button onClick={() => setCount((count) => count + 1)}>
            count is {count}
          </button>
          <p>
            Edit <code>src/App.tsx</code> and save to test HMR
          </p>
        </div>
        <p className="read-the-docs">
          Click on the Vite and React logos to learn more
        </p>
      </AuthProvider>
    </>
  )
}

export default App
