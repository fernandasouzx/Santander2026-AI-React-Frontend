interface Props {
  number: number;
}

export function DoubleNumber({ number }: Props) {
  return (
    <div>
      <p>
        <b>Número: </b>
        {number} - O dobro do número: {number*2}
      </p>
    </div>
  );
}
