import './App.css';
import { ConnectButton, useCurrentAccount } from '@mysten/dapp-kit';
import { SendSui } from './sendSuiButton';

function App() {
  const account = useCurrentAccount();
  return (
    <div>
			<nav>
				<ConnectButton />
			</nav>
      <section>{!account ? 'No wallet connected' : `Your address is ${account.address}`}</section>
			<section>{!account ? 'No wallet connected' : <SendSui/>}</section>
		</div>
  );
}

export default App;
