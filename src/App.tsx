import React from 'react';
import './App.css';

interface AppState {
  stateHook?: [React.Dispatch<React.SetStateAction<number[]>>, number[]];
}

const testState: number[][] = [
  [0.0, 1.0],
  [3.5, 8.0],
  [4.0, 3.1],
];

export const inputPairsAreValid = (input: string): boolean => {
  if (!input) return false;
  return /^\d+,\s\d+\.?\d*$/.test(input);
};

const App: React.FC<AppState> = () => {
  const [coOrdinates, setcoOrdinates] = React.useState<number[][]>([
    ...testState,
  ]);
  const [error, setError] = React.useState<string>('');

  React.useEffect(() => {
    console.log(coOrdinates);
  }, [coOrdinates]);

  return (
    <div className='App'>
      <form
        onSubmit={(e: React.FormEvent<HTMLFormElement>) => {
          e.preventDefault();
          //@ts-ignore
          const input = e?.currentTarget?.[0]?.value || null;
          if (input && inputPairsAreValid(input)) {
            // convert input to array of numbers
            const inputArray =
              input?.length &&
              input.split(',').map((num: number) => {
                return Number(num);
              });
            // add input to coOrdinates state
            setcoOrdinates([...coOrdinates, inputArray]);
          }
        }}>
        <input
          type='text'
          onChange={(e) => {
            if (!inputPairsAreValid(e.target.value)) {
              setError(
                'Input is not valid, it should look like this: 10, 1.2 or 10,12'
              );
            } else {
              setError('');
            }
          }}
        />
        {error?.length > 0 && <p style={{ color: 'red' }}>{error}</p>}
        <input type='submit' value='Submit' disabled={error?.length > 0} />
      </form>
      <p>Input: {coOrdinates?.join(' ') || ''}</p>
      <p>Furthest:</p>
      <p>Average Distance:</p>
    </div>
  );
};

export default App;
