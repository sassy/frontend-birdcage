import { Header } from '../../components/Header';
import { MainVisual } from '../../components/MainVisual';

const headerTitle = "Front-end Web development Birdcage";

export const TopPage = () => {
    return (
        <div>
            <Header title={headerTitle} />
            <MainVisual />
        </div>
    )
}