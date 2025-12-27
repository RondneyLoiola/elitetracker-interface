/** biome-ignore-all lint/style/noNonNullAssertion: document root*/
import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';

import './styles/global.css';
import { App } from './app';

createRoot(document.getElementById('root')!).render(
	<StrictMode>
		<App />
	</StrictMode>,
);
