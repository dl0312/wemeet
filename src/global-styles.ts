import reset from "styled-reset";
import { createGlobalStyle } from "./typed-components";
import { fontSize, color } from "./config/_mixin";
import "react-toastify/dist/ReactToastify.css";
export const GlobalStyle = createGlobalStyle`
  ${reset};
  @import url("https://use.fontawesome.com/releases/v5.8.2/css/all.css");
  @import url("https://cdnjs.cloudflare.com/ajax/libs/antd/3.18.1/antd.min.css");
  @import url('https://fonts.googleapis.com/css?family=Ubuntu|Nanum+Gothic|Playfair+Display|Do+Hyeon|Song+Myung|Thasadith|Nanum+Myeongjo|Nanum+Pen+Script');
  * {
      box-sizing: border-box;
  }

  body{
    font-family: 'Ubuntu', sans-serif;
    font-size: ${fontSize.normalFontSize};
    overflow-x: hidden;
    background-color: ${color.bgColor};
    color: ${color.fontColor};
  }

  a{
    color: ${color.fontColor};
    text-decoration: none !important;
    &:hover{
        color: ${color.mainColor};
    }
  }

  strong{
    font-weight: 700;
  }
  
  button{
    cursor: pointer;
    background-color: white;
    outline: none;
    border: none;
    &:active {
      outline: none;
      border: none;
    }
  }

  input {
    border: none;
    &:focus{
      outline: none;
    }
  }

  /* animations */
  @keyframes release {
    0% {
      height: 0px;
      margin: 0;
    }
    100% {
      height: 356px;
      margin: 2rem 0;
    }
  }
  @keyframes spin {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }
  @keyframes fadeIn {
    /* 0% {
      opacity: 0;
      transform: scale(0);
    }
    50%{
      transform: scale(1.05);
    }
    75%{
      transform: scale(0.95);
    }
    100% {
      opacity: 1;
      transform: scale(1);
    } */
    0%{
      opacity: 0;
    }
    100%{
      opacity: 1;
    }
  }
  .ant-checkbox-wrapper+.ant-checkbox-wrapper {
    margin-left: 0px;
  }
`;
