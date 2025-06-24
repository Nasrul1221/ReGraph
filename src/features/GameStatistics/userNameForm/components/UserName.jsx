// Components
import AnimatedButton from '@/components/AnimatedButton';
import Card from '@/components/Card';
import { Input } from '@/components/ui/input';

// Stores && Jotai
import { userNameJotai } from '../../stores/userName.jotai';
import { useAtom } from 'jotai';

// React
import { useState } from 'react';

export default function UserName() {
  const [userName, setUserName] = useAtom(userNameJotai);
  const [inputValue, setInputValue] = useState('');
  const steamIDD = '76561199401515463';

  fetch(`http://localhost:3000/steam/userstats?steamid=76561199401515463&appid=730`)
    .then((res) => res.json())
    .then((data) => console.log(data));

  const handleClick = () => {
    if (inputValue.trim() === '') return;
    setUserName(inputValue);
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
