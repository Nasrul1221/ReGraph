import MySelect from '@/components/MySelect';
import React from 'react';

// JOTAI
import { useAtom } from 'jotai';
import { userSteamDataJotai } from '../../stores/userSteamData.jotai';
import CardForm from '@/components/CardForm';
import { Label } from '@radix-ui/react-label';

const obj = [
  {
    label: 'Counter Strike 2',
    value: '730',
  },
  {
    label: 'Geometry Dash',
    value: '322170',
  },
  {
    label: '7 Days to die',
    value: '251570',
  },
  {
    label: 'Terraria',
    value: '105600',
  },
];

export default function UserSteamGameForm({ setUserGame }) {
  const [, setUserSteamData] = useAtom(userSteamDataJotai);
  const handleChange = (value) => {
    setUserGame(value);
    setUserSteamData((prev) => ({ ...prev, appID: value }));
  };
  return (
    <CardForm className="w-[300px] flex flex-col items-center gap-y-2">
      <Label htmlFor="game">Choose a game</Label>
      <MySelect object={obj} handleChange={handleChange} id="game" />
    </CardForm>
  );
}
