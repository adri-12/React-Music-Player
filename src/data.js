import { v4 as uuidv4 } from "uuid";

function chillHop() {
    return [
        {
            name: "Jazz Cabbage",
            cover: "https://chillhop.com/wp-content/uploads/2020/06/49f6e32ca521fbad46a1b281e3893cf6254bf11d-1024x1024.jpg",
            artist: "Ian Ewing, Strehlow",
            audio: "https://mp3.chillhop.com/serve.php/?mp3=9363",
            color: ["#803440", "#FDF0DD"],
            id: uuidv4(),
            active: true
        },
        {
            name: "Lagoons",
            artist: "Strehlow, Chris Mazuera",
            cover: "https://chillhop.com/wp-content/uploads/2020/06/49f6e32ca521fbad46a1b281e3893cf6254bf11d-1024x1024.jpg",
            audio: "https://mp3.chillhop.com/serve.php/?mp3=8266",
            color: ["#803440", "#FDF0DD"],
            id: uuidv4(),
            active: false
        },
        {
            name: "Seagulls",
            artist: "Misha, Zmeyev, Viktor Minsky",
            cover: "https://chillhop.com/wp-content/uploads/2022/01/5753da482a6839b31e4905b22a2f8d65913e7eb4-1024x1024.jpg",
            audio: "https://mp3.chillhop.com/serve.php/?mp3=28936",
            color: ["#598AA7", "#781235"],
            id: uuidv4(),
            active: false
        },
        {
            name: "Rain Dance",
            artist: "Screen Jazzmaster, Viktor Minsky",
            cover: "https://chillhop.com/wp-content/uploads/2022/01/5753da482a6839b31e4905b22a2f8d65913e7eb4-1024x1024.jpg",
            audio: "https://mp3.chillhop.com/serve.php/?mp3=30094",
            color: ["#598AA7", "#781235"],
            id: uuidv4(),
            active: false 
        },
        {
            name: "Ocean Alley",
            artist: "Strehlow, Aylior",
            cover: "https://chillhop.com/wp-content/uploads/2020/06/49f6e32ca521fbad46a1b281e3893cf6254bf11d-1024x1024.jpg",
            audio: "https://mp3.chillhop.com/serve.php/?mp3=9360",
            color: ["#803440", "#FDF0DD"],
            id: uuidv4(),
            active: false 
        }
    ];
}

export default chillHop;