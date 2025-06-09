import React, {useContext, useState} from "react";
import Player from "./Player";
import ErrorHeader from "../error-header/errorHeader";

const PlayerPage = () => {
	const [peerConnectionDisconnected, setPeerConnectionDisconnected] = useState<boolean>(false)

	return (
		<div className="mt-0">
			{peerConnectionDisconnected && <ErrorHeader> WebRTC has disconnected or failed to connect at all 😭 </ErrorHeader>}
			<div className={`flex flex-col items-center`}>
				<Player
					peerConnectionDisconnected={peerConnectionDisconnected}
					setPeerConnectionDisconnected={setPeerConnectionDisconnected}/>

			</div>
		</div>
	)
}

export default PlayerPage
