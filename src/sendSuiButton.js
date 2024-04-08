import { useSignAndExecuteTransactionBlock } from '@mysten/dapp-kit';
import { TransactionBlock } from '@mysten/sui.js/transactions';

export function SendSui() {
	const { mutateAsync: signAndExecuteTransactionBlock } = useSignAndExecuteTransactionBlock();

	function sendMessage() {
		const txb = new TransactionBlock();

		const coin = txb.splitCoins(txb.gas, [10]);
		txb.transferObjects([coin], '0xc90166e8c7b9eff82099031ea10df1e9cc94c115e385ec55390f5585dc581d8c');

		signAndExecuteTransactionBlock({
			transactionBlock: txb,
		}).then(async (result) => {
			alert('Sui sent successfully');
		});
	}

	return <button onClick={() => sendMessage()}>Send me Sui!</button>;
}