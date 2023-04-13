import {Button} from "./components/Button";
import {ButtonController} from "./controllers/Button";

const ControllerButton = ButtonController()

export const Home = () => {
    return (
        <>
            <Button ControllerButton={ControllerButton} data={0} />
        </>
    );
}
