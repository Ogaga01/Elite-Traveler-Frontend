import {FC} from 'react';
import { useLocation } from 'react-router-dom';

const ReserveCar: FC = () => {
    const location = useLocation()
    const state = location.state
    console.log(state)
    return (
        <div>
            
        </div>
    );
};

export default ReserveCar;