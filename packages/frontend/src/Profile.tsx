import { ConnectButton } from "@rainbow-me/rainbowkit"
import { useAccount } from "wagmi";
import './App.css';

export default function Profile() {
  const { address, isConnected } = useAccount();
  // const { connect } = useConnect({
  //   connector: new InjectedConnector(),
  // })
  // const { disconnect } = useDisconnect();

  return (
    <div className="flex flex-col">
      <h1>Demo Profile</h1>
      <ConnectButton />
      {isConnected && <p>{address}</p>}
    </div>
  );
}
