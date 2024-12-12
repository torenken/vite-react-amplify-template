import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import {Authenticator} from "@aws-amplify/ui-react";
import { Amplify } from 'aws-amplify';
import App from './App.tsx'
import outputs from '../amplify_outputs.json';
import './index.css'
import '@aws-amplify/ui-react/styles.css';

Amplify.configure(outputs);

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Authenticator>
      <App />
    </Authenticator>
  </StrictMode>,
)