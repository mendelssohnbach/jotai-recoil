import { atom, useAtom } from 'jotai';

const countAtom = atom(0);

export default function Counter() {
  const [count, setCount] = useAtom(countAtom);

  return (
    <div>
      <h1>{count}</h1>
      <button
        type="button"
        onClick={() => setCount((c) => c + 1)}
      >
        +1
      </button>
      <button
        type="button"
        onClick={() => setCount((c) => c - 1)}
      >
        -1
      </button>
    </div>
  );
}
