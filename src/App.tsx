import { useEffect, useState } from 'react';
import './App.css';

function App() {
	// eslint-disable-next-line @typescript-eslint/no-explicit-any
	const [localData, setLocalData] = useState<Record<string, any> | undefined>(
		undefined
	);

	useEffect(() => {
		chrome.storage.local.get('testValue').then(data => {
			setLocalData(data);
		});
	}, [localData]);

	const saveInLocalStorage = async () => {
		await chrome.storage.local.set({ testValue: Math.random() * 100 });
	};

	return (
		<div className='main'>
			<h1>Test Chrome extension development</h1>

			<div className='local-storage'>
				<span>Data from extension storage</span>
				{localData &&
					Object.keys(localData).map(key => (
						<p>
							{key} : {localData[key]}
						</p>
					))}
			</div>
			<button onClick={saveInLocalStorage}>Save in local storage</button>
		</div>
	);
}

export default App;
