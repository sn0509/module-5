import UseClock from "../hooks/UseClock";

export default function MyClock() {
    const[time,ampm] = UseClock();
    return(
        <>
            <div>
                {time}
                <span>{ampm}</span>
            </div>
        </>
    )
}