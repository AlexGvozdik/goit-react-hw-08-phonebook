import Container from "components/Container/Container";
import s from './View.module.css';
import phone from './phone.jpeg'

export default function HomeView(){
    return(
        <Container>
        <h1 className={s.title}>Please keep your contacts</h1>
        <div className={s.thumb}>
        <img src={phone} alt="phone" className={s.img} with="370"/>
        </div>
        </Container>
    )
}