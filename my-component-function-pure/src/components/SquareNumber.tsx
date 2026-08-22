interface Props {
  number: number;
}

export function SquareNumber({ number }: Props) {
  return (
    <div>
      <p>
        <b>Número: </b>
        {number} - O Quadrado do número: {Math.pow(number, 2)}
      </p>
    </div>
  );
}
