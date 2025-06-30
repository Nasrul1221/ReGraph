// ApexCharts
import Chart from 'react-apexcharts';

// Components
import Card from '@/components/Card';

// CountUp animation
import CountUp from 'react-countup';

// Hooks
import useGetData from './hooks/useGetData';

export default function Dashboard() {
  const {
    user,
    dateCreated,
    colChart,
    totalKills,
    totalDeaths,
    totalTime,
    pieChart,
    isAch,
    game,
    online,
    offline,
  } = useGetData();

  console.log(totalDeaths, totalKills);

  return (
    <div className="grid grid-cols-2 gap-4">
      <section>
        <h1 className="text-center text-foreground text-2xl mb-1">General stats</h1>
        <div className="grid grid-rows-2 gap-4">
          <Card>
            <h1 className="text-xl">User profile</h1>
            <div className="mt-3 flex gap-2">
              <div>
                <img
                  src={user.response.players[0].avatarfull}
                  width="100"
                  className="rounded mb-2"
                />
                {user.response.players[0].personastate ? online : offline}
              </div>

              <div>
                <p className="font-bold">
                  Nickname:{' '}
                  <span className="font-normal">{user.response?.players[0]?.personaname}</span>
                </p>
                <p className="font-bold">
                  Real name:{' '}
                  <span className="font-normal">{user.response?.players[0]?.realname}</span>
                </p>
                <p className="font-bold">
                  Date: <span className="font-normal">{dateCreated.toLocaleString()}</span>
                </p>
                <p className="font-bold">
                  Profile:{' '}
                  <a
                    className="font-normal hover:text-highlight-secondary transition-colors duration-300"
                    href={user.response.players[0].profileurl}
                    target="_blank"
                  >
                    Click here
                  </a>
                </p>
              </div>
            </div>
          </Card>
          <Card className="">
            <Chart
              options={colChart.options}
              series={colChart.series}
              type="bar"
              height="250"
              width="500"
            />
          </Card>
        </div>
      </section>

      <section>
        <h1 className="text-center text-foreground text-2xl mb-1">Stats for a chosen game</h1>
        <div className="flex flex-col gap-y-3">
          <div className="grid grid-cols-3 gap-x-3">
            <Card>
              <h1 className="bg-[#05C168] bg-opacity-[0.3] text-center rounded-[2px] text-[#05C168] mb-2 border border-[#05C168] border-opacity-[0.2]">
                Total kills
              </h1>
              <p className="text-xl">
                {totalKills ? <CountUp start={0} end={totalKills} /> : 'N/A'}
              </p>
            </Card>
            <Card>
              <h1 className="bg-[#FF5A65] bg-opacity-[0.3] text-center rounded-[2px] text-[#FF5A65] mb-2 border border-[#FF5A65] border-opacity-[0.2]">
                Total deaths
              </h1>
              <p className="text-xl">
                {totalDeaths ? <CountUp start={0} end={totalDeaths} /> : 'N/A'}
              </p>
            </Card>
            <Card>
              <h1 className="bg-white bg-opacity-[0.3] text-center rounded-[2px] text-white mb-2 border border-white border-opacity-[0.2]">
                Time played
              </h1>
              <p className="text-xl">
                {totalTime ? (
                  <>
                    <CountUp start={0} end={totalTime} decimals={1} />
                    <span> hours</span>
                  </>
                ) : (
                  'N/A'
                )}
              </p>
            </Card>
          </div>
          <div className="grid grid-rows-2 gap-4">
            <Card>
              {isAch ? (
                <Chart
                  options={pieChart.options}
                  series={pieChart.series}
                  type="pie"
                  height="250"
                  width="500"
                />
              ) : game ? (
                <div>This game does not have any achievements</div>
              ) : (
                <div>Probably you do not have this game in your library</div>
              )}
            </Card>
          </div>
        </div>
      </section>
    </div>
  );
}
