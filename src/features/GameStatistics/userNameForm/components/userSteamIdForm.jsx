// Components
import AnimatedButton from '@/components/AnimatedButton';
import Card from '@/components/Card';
import MyInput from '@/components/MyInput';

// Stores && Jotai
import { steamDataJotai } from '../../stores/steamData.jotai';
import { useAtom } from 'jotai';

// React
import { useState } from 'react';

export default function UserNameSteamIdForm() {
  const [, setSteamData] = useAtom(steamDataJotai);
  const [inputValue, setInputValue] = useState('');
  const steamIDD = '76561199401515463';

  const handleClick = () => {
    // if (inputValue.trim() === '') return;
    // const response = await fetch(
    //   `http://localhost:3000/steam/userstats?steamid=${inputValue}&appid=730`
    // );
    // const data = await response.json();
    setSteamData((prev) => ({
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
    <Card className="flex flex-col items-center gap-y-2 w-[200px]">
      <MyInput onChange={handleChange} value={inputValue} placeholder="Enter your steam ID" />
      <AnimatedButton variant="linearGradient" onClick={handleClick}>
        Enter
      </AnimatedButton>
    </Card>
  );
}
