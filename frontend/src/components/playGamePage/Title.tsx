interface Props {
  difficulty: string;
}

const Title = ({ difficulty }: Props) => {
  return <div>{difficulty}</div>;
};

export default Title;
