import "./styles.css";
import { useState } from "react";

const countryEmoji = {
  "🇮🇳": "India",
  "🇵🇰": "Pakistan",
  "🇳🇵": "Nepal",
  "🇨🇳": "China",
  "🇧🇩": "Bangladesh",
  "🇯🇵": "Japan",
  "🇦🇪": "United Arab Emirates",
  "🇴🇲": "Oman",
  "🇾🇪": "Yemen",
  "🇹🇷": "Turkey",
  "🇹🇼": "Taiwan",
  "🇲🇾": "Malaysia",
  "🇧🇹": "Bhutan",
  "🇱🇰": "Sri Lanka",
  "🇸🇬": "Singapore"
};
const emojis = Object.keys(countryEmoji);

export default function App() {
  const [emoji, setEmoji] = useState("");
  const [countryName, setCountryName] = useState("");

  function changeHandler(event) {
    const inputEmoji = event.target.value;
    setEmoji(inputEmoji);

    if (inputEmoji in countryEmoji) {
      setCountryName(countryEmoji[inputEmoji]);
    } else {
      setCountryName("failure to recognise this emoji");
    }
  }

  function emojiClickHandler(inputEmoji) {
    setEmoji("");
    setCountryName(countryEmoji[inputEmoji]);
  }

  return (
    <div className="App">
      <h1>Asian Countries</h1>
      <input
        onChange={changeHandler}
        value={emoji}
        placeholder={"Search any asian country by their emoji"}
      />
      <h2> {emoji} </h2>
      <h3> {countryName} </h3>
      {emojis.map((emoji) => (
        <span onClick={() => emojiClickHandler(emoji)} className="flag">
          {emoji}
        </span>
      ))}
    </div>
  );
}
