import Form1 from "../components/Form1";
import Form2 from "../components/Form2";
import OnBoardCards from "../components/OnBoardCards";
import Congratulations from "../components/Congratulations";
export const activeStepRender = (activeStep) => {
    switch (activeStep) {
        case 0:
        return <Form1 />;
        case 1:
        return <Form2 />;
        case 2:
        return <OnBoardCards />;
        default:
        return <Congratulations />;
    }
}