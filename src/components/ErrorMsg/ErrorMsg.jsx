import { MdSignalWifiStatusbarConnectedNoInternet } from "react-icons/md";
const ErrorMsg = () => {
	return (
		<div className="error-msg">
			<p>
				<MdSignalWifiStatusbarConnectedNoInternet /> Something went wrong!!!
			</p>
		</div>
	);
};

export default ErrorMsg;
