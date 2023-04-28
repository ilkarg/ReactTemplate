import { Button } from "../../components/Button/Button";
import { ButtonController } from "../../components/Button/controller/Button";
import "./styles/Home.sass";

const ControllerButton = ButtonController(5)

export const Home = () => {
    return (
        <>
            <Button ControllerButton={ControllerButton} data={0} />
        </>
    );
}
