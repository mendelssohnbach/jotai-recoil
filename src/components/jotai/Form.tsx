import { atom, useAtom } from 'jotai';

const formAtom = atom({
  name: '',
  email: '',
});

export default function Form() {
  const [form, setForm] = useAtom(formAtom);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  return (
    <div>
      <input
        type="text"
        name="name"
        value={form.name}
        onChange={handleChange}
      />
      <input
        type="email"
        name="email"
        value={form.email}
        onChange={handleChange}
      />
      <p>{`Name: ${form.name}`}</p>
      <p>{`Email: ${form.email}`}</p>
    </div>
  );
}
