import style from './Header.module.scss';

type Props = {
    title: string;
}

export const Header: React.VFC<Props> = (props) => {
    return (
        <header className={style.header}>
            {props.title}
        </header>
    );
}