import { useParams } from "react-router-dom";

export function Soda() {
    return (
        <div className="soda">
            <h1>psssshhhhhh ahhhhhh let's have a nice delicious Pepsi</h1>
        </div>
    )
}

export function Chips() {
    return (
        <div className="chips">
            <h1>How about some Sun Chips?</h1>
        </div>
    )
}

export function Sardines() {
    return (
        <div className="sardines">
            <h1>I do not think I feel good</h1>
        </div>
    )
}

export function Candy() {
    return (
        <div className="candy">
            <h1>Man I love Peach Rings</h1>
        </div>
    )
}

export function Cookies() {
    return (
        <div className="cookies">
            <h1>A classic! A Staple! Never could go wrong with Oreos or Chips Ahoy!</h1>
        </div>
    )
}

export function Food() {
    const params = useParams();
    return(
        <div className={params.name}>
            <h1>{params.name} YUM YUM!</h1>
            <img
                src="https://i.giphy.com/pBj0EoGSYjGms.gif"
                alt="Audrey II wants to eat."
            />
        </div>
    )
}