// Components
import AnimatedButton from '@/components/AnimatedButton';
import Card from '@/components/Card';
import { Input } from '@/components/ui/input';

// Stores && Jotai
import { steamDataJotai } from '../../stores/steamData.jotai';
import { useAtom } from 'jotai';

// React
import { useState } from 'react';

export default function UserName() {
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
    <div>
      <Card className="flex flex-col items-center gap-y-2">
        <Input onChange={handleChange} value={inputValue} />
        <AnimatedButton variant="linearGradient" onClick={handleClick}>
          Enter
        </AnimatedButton>
      </Card>
    </div>
  );
}
