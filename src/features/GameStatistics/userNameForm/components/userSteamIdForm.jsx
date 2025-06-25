// Components
import AnimatedButton from '@/components/AnimatedButton';
import CardForm from '@/components/CardForm';
import MyInput from '@/components/MyInput';

// Stores && Jotai
import { userSteamDataJotai } from '../../stores/userSteamData.jotai';
import { useAtom } from 'jotai';

// React
import { useState } from 'react';
import { Label } from '@radix-ui/react-label';

export default function UserNameSteamIdForm() {
  const [, setUserSteamData] = useAtom(userSteamDataJotai);
  const [inputValue, setInputValue] = useState('');
  const steamIDD = '76561199401515463';

  const handleClick = () => {
    // if (inputValue.trim() === '') return;
    // const response = await fetch(
    //   `http://localhost:3000/steam/userstats?steamid=${inputValue}&appid=730`
    // );
    // const data = await response.json();
    setUserSteamData((prev) => ({
      ...prev,
      steamID: inputValue,
    }));
    setInputValue('');
    // console.log(data);
  };

  const handleChange = (e) => {
    setInputValue(e.target.value);
  };

  return (
    <CardForm className="flex flex-col items-center gap-y-2 w-[300px]">
      <Label htmlFor="steamID">Steam ID</Label>
      <div className="flex gap-x-2">
        <MyInput
          onChange={handleChange}
          value={inputValue}
          placeholder="Enter your steam ID"
          required
          autoComplete="on"
          type="text"
          id="steamID"
          name="steam-id"
        />
        <AnimatedButton variant="linearGradient" onClick={handleClick} type="button">
          Enter
        </AnimatedButton>
      </div>
    </CardForm>
  );
}
