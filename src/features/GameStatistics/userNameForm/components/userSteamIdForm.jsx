// Components
import AnimatedButton from '@/components/AnimatedButton';
import CardForm from '@/components/CardForm';
import MyInput from '@/components/MyInput';
import { Label } from '@radix-ui/react-label';

// Stores && Jotai
import { userSteamDataJotai } from '../../stores/userSteamData.jotai';
import { useAtom } from 'jotai';

export default function UserNameSteamIdForm({ setId, errors }) {
  const [, setUserSteamData] = useAtom(userSteamDataJotai);

  const handleChange = (e) => {
    setId(e.target.value);
    setUserSteamData((prev) => ({
      ...prev,
      steamID: e.target.value,
    }));
  };

  return (
    <CardForm className="flex flex-col items-center gap-y-2 w-[300px]">
      <Label htmlFor="steamID">Steam ID</Label>
      <div className="flex gap-x-2">
        <MyInput
          onChange={handleChange}
          placeholder="Enter your steam ID"
          autoComplete="on"
          type="text"
          id="steamID"
          name="steam-id"
        />
      </div>
    </CardForm>
  );
}

const notValid = {
  border: 'red',
};
