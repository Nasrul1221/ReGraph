import MySelect from '@/components/MySelect';
import React from 'react';

// JOTAI
import { useAtom } from 'jotai';
import { steamDataJotai } from '../../stores/steamData.jotai';
import Card from '@/components/Card';

const obj = [
  {
    label: 'Counter Strike 2',
    value: '730',
  },
  {
    label: 'Dota 2',
    value: '570',
  },
];

export default function UserSteamGameForm() {
  const [, setSteamData] = useAtom(steamDataJotai);
  const handleChange = (value) => {
    setSteamData((prev) => ({ ...prev, appID: value }));
  };
  return (
    <Card className="w-[200px]">
      <MySelect object={obj} handleChange={handleChange} />
    </Card>
  );
}
