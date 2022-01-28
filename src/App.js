import React, { useState } from "react";
import "./styles.css";

export default function App() {
  var [num1, setNum1] = useState();
  var [num2, setNum2] = useState();
  var [num3, setNum3] = useState();
  var [play, setPlay] = useState(0);

  const [input1Disabled, setInput1Disabled] = useState(false);

  const [input2Disabled, setInput2Disabled] = useState(false);

  const [input3Disabled, setInput3Disabled] = useState(false);

  const [valOne, setValOne] = useState();
  const [valTwo, setValTwo] = useState();
  const [valThree, setValThree] = useState();

  const [userName, setUserName] = useState("user");

  function user1InputHandler(event) {
    setValOne(event.target.value);
    if (Number(event.target.value) >= 1000) {
      var final = Number(19998) + Number(event.target.value);

      setInput1Disabled(true);
      if (event.target.value >= 9000) {
        alert("Invalid input ! , Number must be smaller than 9000  ");
        setValOne("");
        setInput1Disabled(false);
      } else {
        setNum1(final);
      }
    }
  }

  function user2InputHandler(event) {
    setValTwo(event.target.value);
    if (Number(event.target.value) >= 1000) {
      var final = Number(9999) - Number(event.target.value);

      setInput2Disabled(true);
      if (event.target.value >= 9000) {
        alert("Invalid input ! , Number must be smaller than 9000  ");
        setValTwo("");
        setInput2Disabled(false);
      }
      setNum2(final);
    }
  }

  function user3InputHandler(event) {
    setValThree(event.target.value);
    if (Number(event.target.value) >= 1000) {
      var final = Number(9999) - Number(event.target.value);

      setInput3Disabled(true);
      if (event.target.value >= 9000) {
        alert("Invalid input ! , Number must be smaller than 9000  ");
        setValThree("");
        setInput3Disabled(false);
      }
      setNum3(final);
    }
  }

  function takeInput(event) {
    setUserName(event.target.value);
  }

  function reset() {
    setInput1Disabled(false);
    setNum1("");

    setNum2();

    setInput2Disabled(false);

    setNum3();

    setInput3Disabled(false);

    setValOne("");
    setValTwo("");
    setValThree("");

    setPlay(Number(play) + 1);
  }

  return (
    <div className="App">
      <div className="header">🪄 Predictor</div>

      <div className="welcome">
        <a>
          Welcome , I am PREDICTOR
          <p />
          Give me your name please !
          <p />
        </a>

        <input
          className="welcomeInput"
          onChange={(event) => takeInput(event)}
        ></input>
      </div>

      <div className="ruleBox">
        <ul>
          <li
            style={{
              padding: "0.3rem 0.5rem"
            }}
          >
            So before we start the game, first understand the game
          </li>
          <li
            style={{
              padding: "0.3rem 0.5rem"
            }}
          >
            The game is simple , Just start it by entering a number.{" "}
          </li>
          <li
            style={{
              padding: "0.3rem 0.5rem"
            }}
          >
            I will predict a number, please remember that number.
          </li>{" "}
          <li
            style={{
              padding: "0.3rem 0.5rem"
            }}
          >
            Now you have to enter two more numbers.
          </li>
          <li
            style={{
              padding: "0.3rem 0.5rem"
            }}
          >
            After every number you entered i will also enter a number.
          </li>
          <li
            style={{
              padding: "0.3rem 0.5rem"
            }}
          >
            So at last total 5 Numbers will be there, 3 you entered and two i
            entered.
          </li>
          <li
            style={{
              padding: "0.3rem 0.5rem"
            }}
          >
            Now add all 5 numbers and compare it with my prediction .
          </li>
        </ul>
      </div>

      <div className="playerInfo">
        Player name : {userName} <p /> Number of game played : {play}
      </div>

      <div className="predictionBox">
        My prediction
        <p className="predictionOutput">{num1}</p>
      </div>

      <hr />

      <div className="inputDiv">
        <a className="inputDiv input01">
          Lets start the game.
          <p />
          Enter your first four digit number here:
          <p />
        </a>

        <input
          className="inputDiv inputBox"
          type="text"
          disabled={input1Disabled}
          onChange={(event) => user1InputHandler(event)}
          value={valOne}
        ></input>
        <p className="inputDiv input02">Now see my prediction & remember it </p>
      </div>

      <hr />

      <div className="inputDiv">
        <a className="inputDiv input01">
          Now enter your second four digit number here:
        </a>
        <p />
        <input
          className="inputDiv inputBox"
          type="number"
          disabled={input2Disabled}
          onChange={(event) => user2InputHandler(event)}
          value={valTwo}
        />
      </div>
      <hr />

      <div className="inputDivComp">
        So third four digit number from my side is:
        <p />
        <section className="outputBox">
          <p>{num2}</p>
        </section>
      </div>
      {/* </div> */}
      <hr />

      <div className="inputDiv">
        <a className="inputDiv input01">
          Now enter your 4th four digit number here:
        </a>
        <p />

        <input
          className="inputDiv inputBox"
          type="number"
          disabled={input3Disabled}
          onChange={(event) => user3InputHandler(event)}
          value={valThree}
        />
      </div>
      <hr />

      <div
        className="inputDivComp"
        type="number"
        disabled={input2Disabled}
        onChange={(event) => user2InputHandler(event)}
      >
        So Fifth four digit number from my side is:
        <p />
        <section className="outputBox">{num3}</section>
      </div>

      <hr
        style={{
          marginBottom: "3rem"
        }}
      />

      <div className="ruleBox2">
        <p>
          Now Add all Five numbers and you will find that the sum will be same
          as the number I predicted before.
        </p>
      </div>

      <button className="resetBtn" onClick={() => reset()}>
        restart
      </button>

      <div className="footer">
        <div className="devName">
          <p></p>
          <p>
            DEV : <span style={{ color: "white" }}>Murtaza Neher Wala </span>
          </p>
        </div>

        <div
          style={{
            color: "#facc15",
            textAlign: "center",
            paddingLeft: "0.5rem",
            paddingRight: "0.5rem"
          }}
        >
          <a
            className="sBtn"
            href="https://www.instagram.com/murtaza_neher_wala/?utm_medium=copy_link"
          >
            Instagram
          </a>

          <a className="sBtn" href="https://murtazanw.netlify.app/">
            Portfolio
          </a>
          <span className="sBtn2">
            <a className="sBtn" href="https://github.com/MurtazaNeher">
              Github
            </a>

            <a
              className="sBtn"
              href="https://twitter.com/Murtaza_neher?t=KjQ1giMXozsd4enZDMxNYg&s=03"
            >
              Twitter
            </a>
          </span>
        </div>
      </div>
    </div>
  );
}
