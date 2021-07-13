import { createGlobalStyle } from "styled-components";
import styled from "styled-components";
export const GlobalStyle = createGlobalStyle`
	@import url('https://fonts.googleapis.com/css?family=Montserrat:400,700,900&display=swap');
	
	.App {
		--gradient: linear-gradient( 135deg, #72EDF2 10%, #5151E5 100%);
	}

	* {
		-webkit-box-sizing: border-box;
				box-sizing: border-box;
		line-height: 1.25em;
	}

	.clear {
		clear: both;
	}

	.container {
		width: auto;
		position: relative;
	}

	.App {
        display:flex;
        flex-direction:column;
		margin: 0;
		width: 100%;
		height: 100vh;
		font-family: 'Montserrat', sans-serif;
		background-color: #343d4b;
		display: -webkit-box;
		display: -ms-flexbox;
		display: flex;
		-webkit-box-align: center;
			-ms-flex-align: center;
				align-items: center;
		-webkit-box-pack: center;
			-ms-flex-pack: center;
				justify-content: center;
	}
`;


export const Container = styled.div`
  border-radius: 25px;
  -webkit-box-shadow: 0 0 70px -10px rgba(0, 0, 0, 0.2);
  box-shadow: 0 0 70px -10px rgba(0, 0, 0, 0.2);
  background-color: #222831;
  color: #ffffff;
  height: 400px;

  .info-side {
    position: relative;
    float: left;
    height: 100%;
    padding-top: 25px;
  }
`;

export const Item = styled.li`
  float: left;
  padding: 15px;
  cursor: pointer;
  -webkit-transition: 200ms ease;
  -o-transition: 200ms ease;
  transition: 200ms ease;
  border-radius: 10px;
  ${({ active }) => active && "background: #fff"};
  ${({ active }) => active && "color: #222831"};
  ${({ active }) => active && "border-radius: 10px"};

  &:hover {
    -webkit-transform: scale(1.1);
    -ms-transform: scale(1.1);
    transform: scale(1.1);
    background: #fff;
    color: #222831;
    -webkit-box-shadow: 0 0 40px -5px rgba(0, 0, 0, 0.2);
    box-shadow: 0 0 40px -5px rgba(0, 0, 0, 0.2);
  }

  .day-name {
    display: block;
    margin: 10px 0 0 0;
    text-align: center;
  }

  .day-icon {
    display: block;
    height: 30px;
    width: auto;
    margin: 0 auto;
  }

  .day-temp {
    display: block;
    text-align: center;
    margin: 10px 0 0 0;
    font-weight: 700;
  }
`;


export const BtnContainer = styled.div`
  padding: 25px 35px;

  .location-button {
    outline: none;
    width: 100%;
    -webkit-box-sizing: border-box;
    box-sizing: border-box;
    border: none;
    border-radius: 25px;
    padding: 10px;
    font-family: "Montserrat", sans-serif;
    background-image: var(--gradient);
    color: #ffffff;
    font-weight: 700;
    -webkit-box-shadow: 0 0 30px -5px rgba(0, 0, 0, 0.25);
    box-shadow: 0 0 30px -5px rgba(0, 0, 0, 0.25);
    cursor: pointer;
    -webkit-transition: -webkit-transform 200ms ease;
    transition: -webkit-transform 200ms ease;
    -o-transition: transform 200ms ease;
    transition: transform 200ms ease;
    transition: transform 200ms ease, -webkit-transform 200ms ease;
  }

  .location-button:hover {
    -webkit-transform: scale(0.95);
    -ms-transform: scale(0.95);
    transform: scale(0.95);
  }
`;


export const TodayInfo = styled.div`
  padding: 15px;
  margin: 0 25px 25px 25px;
  border-radius: 10px;
  display:flex;
  flex-direction:column;

  & > div:not(:last-child) {
    margin: 0 0 10px 0;
  }

  & > div .title {
    float: left;
    font-weight: 700;
  }

  & > div .value {
    float: right;
  }
`;
export const WeatherSideContainer2 = styled.div`
  position: relative;
  height: 100%;
  border-radius: 25px;
  background-image: url("https://images.unsplash.com/photo-1559963110-71b394e7494d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=675&q=80");
  width: 300px;
  -webkit-box-shadow: 0 0 20px -10px rgba(0, 0, 0, 0.2);
  box-shadow: 0 0 20px -10px rgba(0, 0, 0, 0.2);
 
  float: left;


  .weather-gradient {
    position: absolute;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    background-image: var(--gradient);
    border-radius: 25px;
    opacity: 0.8;
  }

  .date-container {
    position: absolute;
    top: 25px;
    left: 25px;
  }

  .date-dayname {
    margin: 0;
  }

  .date-day {
    display: block;
  }

  .location {
    display: inline-block;
    margin-top: 10px;
  }

  .location-icon {
    display: inline-block;
    height: 0.8em;
    width: auto;
    margin-right: 5px;
  }

  .weather-container {
    position: absolute;
    bottom: 25px;
    left: 25px;
  }

  .weather-icon.feather {
    height: 60px;
    width: auto;
  }

  .weather-temp {
    margin: 0;
    font-weight: 700;
    font-size: 4em;
  }

  .weather-desc {it
    margin: 0;
  }
`;


export const WeatherSideContainer = styled.div`
  position: relative;
  height: 100%;
  border-radius: 25px;
  background-image: url("https://images.unsplash.com/photo-1559963110-71b394e7494d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=675&q=80");
  width: 300px;
  -webkit-box-shadow: 0 0 20px -10px rgba(0, 0, 0, 0.2);
  box-shadow: 0 0 20px -10px rgba(0, 0, 0, 0.2);
  -webkit-transition: -webkit-transform 300ms ease;
  transition: -webkit-transform 300ms ease;
  -o-transition: transform 300ms ease;
  transition: transform 300ms ease;
  transition: transform 300ms ease, -webkit-transform 300ms ease;
  -webkit-transform: translateZ(0) scale(1.02) perspective(1000px);
  transform: translateZ(0) scale(1.02) perspective(1000px);
  float: left;

  &:hover {
    -webkit-transform: scale(1.1) perspective(1500px) rotateY(10deg);
    transform: scale(1.1) perspective(1500px) rotateY(10deg);
  }

  .weather-gradient {
    position: absolute;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    background-image: var(--gradient);
    border-radius: 25px;
    opacity: 0.8;
  }

  .date-container {
    position: absolute;
    top: 25px;
    left: 25px;
  }

  .date-dayname {
    margin: 0;
  }

  .date-day {
    display: block;
  }

  .location {
    display: inline-block;
    margin-top: 10px;
  }

  .location-icon {
    display: inline-block;
    height: 0.8em;
    width: auto;
    margin-right: 5px;
  }

  .weather-container {
    position: absolute;
    bottom: 25px;
    left: 25px;
  }

  .weather-icon.feather {
    height: 60px;
    width: auto;
  }

  .weather-temp {
    margin: 0;
    font-weight: 700;
    font-size: 4em;
  }

  .weather-desc {it
    margin: 0;
  }
`;



export const List = styled.ul`
  list-style-type: none;
  padding: 0;
  margin: 10px 35px;
  -webkit-box-shadow: 0 0 50px -5px rgba(0, 0, 0, 0.25);
  box-shadow: 0 0 50px -5px rgba(0, 0, 0, 0.25);
  border-radius: 10px;
`;