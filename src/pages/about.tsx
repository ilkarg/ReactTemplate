import { Button } from "@/components/Button/Button";
import { ControllerButton } from "@/components/Button/controller/Button";

export default function About() {
	const Controller = ControllerButton();

	return (
		<div className={`min-h-screen`} style={{backgroundColor: 'white'}}>
			<h1>About</h1>
			<Button 
				ControllerButton={Controller} 
				handleClick={() => alert("Click!")
			}/>
		</div>
	);
}