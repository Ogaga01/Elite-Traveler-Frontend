import { FC } from "react";
import SignIn from "./SignIn";
import { useLoaderData } from "react-router-dom";
import { SignInObject } from "../types";

const Reservations: FC = () => {
  const loader = useLoaderData()

  const airplanes = loader.airplanes
  console.log(airplanes)
  const cars = loader.cars
  const reservedCars = loader.reservedCars
  const reservedAirplanes = loader.reservedAirplanes

  const person = localStorage.getItem("person");
  if (!person) return <SignIn />;

  const user = JSON.parse(person)

  const userReservedCars = reservedCars.filter((car:SignInObject)=>{return car.user_id === user.id})
  const userReservedAirplanes = reservedAirplanes.filter((airplane: SignInObject)=>{return airplane.user_id === user.id})
  console.log(userReservedAirplanes, userReservedCars)

  const userAirplane = userReservedAirplanes.forEach((reservedAirplane:SignInObject)=>{console.log(reservedAirplane.airplane_id, 'good')
    airplanes.find((airplane:SignInObject)=>{console.log(airplane.id, 'bad')
      airplane.id === reservedAirplane.airplane_id
    return airplane})})
    console.log(userAirplane)

  return  <table >
  {/* <thead>
    <tr>
      <th>Airplane Name</th>
      <th>Start Date</th>
      <th>Price</th>
      <th>End Date</th>
      <th>&nbsp;</th>
    </tr>
  </thead>
  <tbody>
          {userReservedAirplanes.map((airplan:SignInObject)=>{return <td ><b>{airplanes.find((airplane:SignInObject)=>{airplane.id === airplan.airplane_id
             return airplane})}</b></td>})}
  </tbody> */}
</table>;
};

export default Reservations;
