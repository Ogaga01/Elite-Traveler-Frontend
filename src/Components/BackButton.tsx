import {FC} from "react";
import { useNavigate } from "react-router-dom";
import styles from './../Sass/_backbutton.module.scss'

const BackButton: FC = () => {
    const navigate = useNavigate()

    const goBack = ()=>{
        navigate(-1)
    }
  return <button className={styles['back']} onClick={goBack}>&larr; back</button>;
};

export default BackButton;
