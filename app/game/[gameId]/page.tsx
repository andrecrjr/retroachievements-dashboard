import GameBoard from '@/components/gameboard';
import { getGameInfoAndUserProgress } from '@/lib/api/retro';
import { redirect } from 'next/navigation';



type Props = {
    params: Promise<{gameId:string}>
    searchParams: Promise<{u:string}>
}

const GamePage = async (props:Props) => {
    const params = await props.params;
    const {u} = await props.searchParams
    if(!params || !u){
        return redirect("/")
    }

    const data = await getGameInfoAndUserProgress(u, params.gameId)

    return <GameBoard gameData={data}  />;
}

export default GamePage;