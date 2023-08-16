import { Button } from "../../components/Button/Button";
import { ButtonController } from "../../components/Button/controller/Button";
import { TemplateDataGrid } from "../../templates/DataGrid";
import "./styles/Home.sass";

const ControllerButton = ButtonController(5)

const TestDataGrid = () => TemplateDataGrid(
    [
        {id: 1, name: "test 1"},
        {id: 2, name: "test 2"}
    ],
    [
        {field: 'id', headerName: 'ID', width: 80},
        {field: 'name', headerName: 'Название', width: 150}
    ],
    () => console.log("Одинарный клик"),
    () => console.log("Двойной клик")
);

export const Home = () => {
    return (
        <>
            <TestDataGrid />
            <Button ControllerButton={ControllerButton} data={0} />
        </>
    );
}
