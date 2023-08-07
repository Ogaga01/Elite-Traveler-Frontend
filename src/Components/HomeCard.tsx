import { FC } from "react";
import { HomeObject } from "../types";

interface Props {
  props: HomeObject;
}

const HomeCard: FC<Props> = ({ props }) => {
  const { image, name } = props;
  return (
    <div style={{ backgroundImage: `url(${image})` }}>
      <h2>{name}</h2>
    </div>
  );
};

export default HomeCard;
