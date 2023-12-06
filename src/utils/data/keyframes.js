import { keyframes } from "@emotion/core";

export const fadeIn = keyframes`{
    from {
        opacity:0;
    }
  
    to {
        opacity:1;
    }
}`

export const fadeInLeft = keyframes`{
    from {
      opacity: 0;
      transform: translate3d(-100%, 0, 0);
    }
  
    to {
      opacity: 1;
      transform: translate3d(0, 0, 0);
    }
}`;

export const fadeInLeftBig = keyframes`{
    from {
      opacity: 0;
      -webkit-transform: translate3d(-2000px, 0, 0);
      transform: translate3d(-2000px, 0, 0);
    }
  
    to {
      opacity: 1;
      -webkit-transform: translate3d(0, 0, 0);
      transform: translate3d(0, 0, 0);
    }
}`

export const fadeInRight = keyframes`{
    from {
      opacity: 0;
      -webkit-transform: translate3d(100%, 0, 0);
      transform: translate3d(100%, 0, 0);
    }
  
    to {
      opacity: 1;
      -webkit-transform: translate3d(0, 0, 0);
      transform: translate3d(0, 0, 0);
    }
}`

export const fadeInRightBig = keyframes`{
    from {
      opacity: 0;
      -webkit-transform: translate3d(2000px, 0, 0);
      transform: translate3d(2000px, 0, 0);
    }
  
    to {
      opacity: 1;
      -webkit-transform: translate3d(0, 0, 0);
      transform: translate3d(0, 0, 0);
    }
}`

export const fadeInUp = keyframes`{
    from {
      opacity: 0;
      -webkit-transform: translate3d(0, 100%, 0);
      transform: translate3d(0, 100%, 0);
    }
  
    to {
      opacity: 1;
      -webkit-transform: translate3d(0, 0, 0);
      transform: translate3d(0, 0, 0);
    }
}`

export const fadeInUpBig = keyframes`{
    from {
      opacity: 0;
      -webkit-transform: translate3d(0, 2000px, 0);
      transform: translate3d(0, 2000px, 0);
    }
  
    to {
      opacity: 1;
      -webkit-transform: translate3d(0, 0, 0);
      transform: translate3d(0, 0, 0);
    }
}`

export const fadeInDown = keyframes`
    from {
        opacity: 0;
        transform: translate3d(0,-100%, 0);
    }

    to {
        opacity: 1;
        transform: translate3d(0,0,0);
    }
}`

export const fadeInDownBig = keyframes`{
    from {
      opacity: 0;
      transform: translate3d(0, -2000px, 0);
    }
  
    to {
      opacity: 1;
      transform: translate3d(0, 0, 0);
    }
}`

export const fadeOut = keyframes`{
    from {
      opacity: 1;
    }
  
    to {
      opacity: 0;
    }
}`

export const fadeOutDown = keyframes`{
    from {
      opacity: 1;
    }
  
    to {
      opacity: 0;
      -webkit-transform: translate3d(0, 100%, 0);
      transform: translate3d(0, 100%, 0);
    }
}`

export const fadeOutDownBig = keyframes`{
    from {
      opacity: 1;
    }
  
    to {
      opacity: 0;
      -webkit-transform: translate3d(0, 2000px, 0);
      transform: translate3d(0, 2000px, 0);
    }
}`

export const fadeOutLeft = keyframes`{
    from {
      opacity: 1;
    }
  
    to {
      opacity: 0;
      -webkit-transform: translate3d(-100%, 0, 0);
      transform: translate3d(-100%, 0, 0);
    }
}`

export const fadeOutLeftBig = keyframes`{
    from {
      opacity: 1;
    }
  
    to {
      opacity: 0;
      -webkit-transform: translate3d(-2000px, 0, 0);
      transform: translate3d(-2000px, 0, 0);
    }
}`

export const fadeOutRight = keyframes`{
    from {
      opacity: 1;
    }
  
    to {
      opacity: 0;
      -webkit-transform: translate3d(100%, 0, 0);
      transform: translate3d(100%, 0, 0);
    }
}`

export const fadeOutRightBig = keyframes`{
    from {
      opacity: 1;
    }
  
    to {
      opacity: 0;
      -webkit-transform: translate3d(2000px, 0, 0);
      transform: translate3d(2000px, 0, 0);
    }
}`

export const fadeOutUp = keyframes`{
    from {
      opacity: 1;
    }
  
    to {
      opacity: 0;
      -webkit-transform: translate3d(0, -100%, 0);
      transform: translate3d(0, -100%, 0);
    }
}`

export const fadeOutUpBig = keyframes`{
    from {
      opacity: 1;
    }
  
    to {
      opacity: 0;
      -webkit-transform: translate3d(0, -2000px, 0);
      transform: translate3d(0, -2000px, 0);
    }
}`

export const fadeZoomIn = keyframes`{
    from {
        opacity: 0;
        transform: scale(0.8)
    }
    to {
        opacity: 1;
        transform: scale(1)
    }
}`

export const fadeZoomOut = keyframes`{
    from {
        opacity: 1;
        transform: scale(1)
    }
    to {
        opacity: 0;
        transform: scale(.8)
    }
}`

export const fadeSlideIn = keyframes`{
    from {
        opacity: 0;
        transform: translateY(-20px) perspective(600px) rotateX(10deg);
    }
    to {
        opacity: 1;
        transform: translateY(0) perspective(600px) rotateX(0);
    }
}`

export const fadeSlideOut = keyframes`{
    from {
        opacity: 1;
        transform: translateY(0) perspective(600px) rotateX(0);
    }
    to {
        opacity: 0;
        transform: translateY(-20px) perspective(600px) rotateX(10deg);
    }
}`

export const flip = keyframes`{
    from {
      -webkit-transform: perspective(400px) scale3d(1, 1, 1) translate3d(0, 0, 0)
        rotate3d(0, 1, 0, -360deg);
      transform: perspective(400px) scale3d(1, 1, 1) translate3d(0, 0, 0) rotate3d(0, 1, 0, -360deg);
      -webkit-animation-timing-function: ease-out;
      animation-timing-function: ease-out;
    }
  
    40% {
      -webkit-transform: perspective(400px) scale3d(1, 1, 1) translate3d(0, 0, 150px)
        rotate3d(0, 1, 0, -190deg);
      transform: perspective(400px) scale3d(1, 1, 1) translate3d(0, 0, 150px)
        rotate3d(0, 1, 0, -190deg);
      -webkit-animation-timing-function: ease-out;
      animation-timing-function: ease-out;
    }
  
    50% {
      -webkit-transform: perspective(400px) scale3d(1, 1, 1) translate3d(0, 0, 150px)
        rotate3d(0, 1, 0, -170deg);
      transform: perspective(400px) scale3d(1, 1, 1) translate3d(0, 0, 150px)
        rotate3d(0, 1, 0, -170deg);
      -webkit-animation-timing-function: ease-in;
      animation-timing-function: ease-in;
    }
  
    80% {
      -webkit-transform: perspective(400px) scale3d(0.95, 0.95, 0.95) translate3d(0, 0, 0)
        rotate3d(0, 1, 0, 0deg);
      transform: perspective(400px) scale3d(0.95, 0.95, 0.95) translate3d(0, 0, 0)
        rotate3d(0, 1, 0, 0deg);
      -webkit-animation-timing-function: ease-in;
      animation-timing-function: ease-in;
    }
  
    to {
      -webkit-transform: perspective(400px) scale3d(1, 1, 1) translate3d(0, 0, 0)
        rotate3d(0, 1, 0, 0deg);
      transform: perspective(400px) scale3d(1, 1, 1) translate3d(0, 0, 0) rotate3d(0, 1, 0, 0deg);
      -webkit-animation-timing-function: ease-in;
      animation-timing-function: ease-in;
    }
}`

export const flipInX = keyframes`{
    from {
      -webkit-transform: perspective(400px) rotate3d(1, 0, 0, 90deg);
      transform: perspective(400px) rotate3d(1, 0, 0, 90deg);
      -webkit-animation-timing-function: ease-in;
      animation-timing-function: ease-in;
      opacity: 0;
    }
  
    40% {
      -webkit-transform: perspective(400px) rotate3d(1, 0, 0, -20deg);
      transform: perspective(400px) rotate3d(1, 0, 0, -20deg);
      -webkit-animation-timing-function: ease-in;
      animation-timing-function: ease-in;
    }
  
    60% {
      -webkit-transform: perspective(400px) rotate3d(1, 0, 0, 10deg);
      transform: perspective(400px) rotate3d(1, 0, 0, 10deg);
      opacity: 1;
    }
  
    80% {
      -webkit-transform: perspective(400px) rotate3d(1, 0, 0, -5deg);
      transform: perspective(400px) rotate3d(1, 0, 0, -5deg);
    }
  
    to {
      -webkit-transform: perspective(400px);
      transform: perspective(400px);
    }
}`

export const flipInY = keyframes`{
    from {
      -webkit-transform: perspective(400px) rotate3d(0, 1, 0, 90deg);
      transform: perspective(400px) rotate3d(0, 1, 0, 90deg);
      -webkit-animation-timing-function: ease-in;
      animation-timing-function: ease-in;
      opacity: 0;
    }
  
    40% {
      -webkit-transform: perspective(400px) rotate3d(0, 1, 0, -20deg);
      transform: perspective(400px) rotate3d(0, 1, 0, -20deg);
      -webkit-animation-timing-function: ease-in;
      animation-timing-function: ease-in;
    }
  
    60% {
      -webkit-transform: perspective(400px) rotate3d(0, 1, 0, 10deg);
      transform: perspective(400px) rotate3d(0, 1, 0, 10deg);
      opacity: 1;
    }
  
    80% {
      -webkit-transform: perspective(400px) rotate3d(0, 1, 0, -5deg);
      transform: perspective(400px) rotate3d(0, 1, 0, -5deg);
    }
  
    to {
      -webkit-transform: perspective(400px);
      transform: perspective(400px);
    }
}`

export const flipOutX = keyframes`{
    from {
      -webkit-transform: perspective(400px);
      transform: perspective(400px);
    }
  
    30% {
      -webkit-transform: perspective(400px) rotate3d(1, 0, 0, -20deg);
      transform: perspective(400px) rotate3d(1, 0, 0, -20deg);
      opacity: 1;
    }
  
    to {
      -webkit-transform: perspective(400px) rotate3d(1, 0, 0, 90deg);
      transform: perspective(400px) rotate3d(1, 0, 0, 90deg);
      opacity: 0;
    }
}`

export const flipOutY = keyframes`{
    from {
      -webkit-transform: perspective(400px);
      transform: perspective(400px);
    }
  
    30% {
      -webkit-transform: perspective(400px) rotate3d(0, 1, 0, -15deg);
      transform: perspective(400px) rotate3d(0, 1, 0, -15deg);
      opacity: 1;
    }
  
    to {
      -webkit-transform: perspective(400px) rotate3d(0, 1, 0, 90deg);
      transform: perspective(400px) rotate3d(0, 1, 0, 90deg);
      opacity: 0;
    }
}`

export const lightSpeedIn = keyframes`{
    from {
      -webkit-transform: translate3d(100%, 0, 0) skewX(-30deg);
      transform: translate3d(100%, 0, 0) skewX(-30deg);
      opacity: 0;
    }
  
    60% {
      -webkit-transform: skewX(20deg);
      transform: skewX(20deg);
      opacity: 1;
    }
  
    80% {
      -webkit-transform: skewX(-5deg);
      transform: skewX(-5deg);
    }
  
    to {
      -webkit-transform: translate3d(0, 0, 0);
      transform: translate3d(0, 0, 0);
    }
}`

export const lightSpeedOut = keyframes`{
    from {
      opacity: 1;
    }
  
    to {
      -webkit-transform: translate3d(100%, 0, 0) skewX(30deg);
      transform: translate3d(100%, 0, 0) skewX(30deg);
      opacity: 0;
    }
}`

export const rotateIn = keyframes`{
    from {
      -webkit-transform-origin: center;
      transform-origin: center;
      -webkit-transform: rotate3d(0, 0, 1, -200deg);
      transform: rotate3d(0, 0, 1, -200deg);
      opacity: 0;
    }
  
    to {
      -webkit-transform-origin: center;
      transform-origin: center;
      -webkit-transform: translate3d(0, 0, 0);
      transform: translate3d(0, 0, 0);
      opacity: 1;
    }
}`

export const rotateInDownLeft = keyframes`{
    from {
      -webkit-transform-origin: left bottom;
      transform-origin: left bottom;
      -webkit-transform: rotate3d(0, 0, 1, -45deg);
      transform: rotate3d(0, 0, 1, -45deg);
      opacity: 0;
    }
  
    to {
      -webkit-transform-origin: left bottom;
      transform-origin: left bottom;
      -webkit-transform: translate3d(0, 0, 0);
      transform: translate3d(0, 0, 0);
      opacity: 1;
    }
}`

export const rotateInDownRight = keyframes`{
    from {
      -webkit-transform-origin: right bottom;
      transform-origin: right bottom;
      -webkit-transform: rotate3d(0, 0, 1, 45deg);
      transform: rotate3d(0, 0, 1, 45deg);
      opacity: 0;
    }
  
    to {
      -webkit-transform-origin: right bottom;
      transform-origin: right bottom;
      -webkit-transform: translate3d(0, 0, 0);
      transform: translate3d(0, 0, 0);
      opacity: 1;
    }
}`

export const rotateInUpLeft = keyframes`{
    from {
      -webkit-transform-origin: left bottom;
      transform-origin: left bottom;
      -webkit-transform: rotate3d(0, 0, 1, 45deg);
      transform: rotate3d(0, 0, 1, 45deg);
      opacity: 0;
    }
  
    to {
      -webkit-transform-origin: left bottom;
      transform-origin: left bottom;
      -webkit-transform: translate3d(0, 0, 0);
      transform: translate3d(0, 0, 0);
      opacity: 1;
    }
}`

export const rotateInUpRight = keyframes`{
    from {
      -webkit-transform-origin: right bottom;
      transform-origin: right bottom;
      -webkit-transform: rotate3d(0, 0, 1, -90deg);
      transform: rotate3d(0, 0, 1, -90deg);
      opacity: 0;
    }
  
    to {
      -webkit-transform-origin: right bottom;
      transform-origin: right bottom;
      -webkit-transform: translate3d(0, 0, 0);
      transform: translate3d(0, 0, 0);
      opacity: 1;
    }
}`

export const rotateOut = keyframes`{
    from {
      -webkit-transform-origin: center;
      transform-origin: center;
      opacity: 1;
    }
  
    to {
      -webkit-transform-origin: center;
      transform-origin: center;
      -webkit-transform: rotate3d(0, 0, 1, 200deg);
      transform: rotate3d(0, 0, 1, 200deg);
      opacity: 0;
    }
}`

export const rotateOutDownLeft = keyframes`{
    from {
      -webkit-transform-origin: left bottom;
      transform-origin: left bottom;
      opacity: 1;
    }
  
    to {
      -webkit-transform-origin: left bottom;
      transform-origin: left bottom;
      -webkit-transform: rotate3d(0, 0, 1, 45deg);
      transform: rotate3d(0, 0, 1, 45deg);
      opacity: 0;
    }
}`

export const rotateOutDownRight = keyframes`{
    from {
      -webkit-transform-origin: right bottom;
      transform-origin: right bottom;
      opacity: 1;
    }
  
    to {
      -webkit-transform-origin: right bottom;
      transform-origin: right bottom;
      -webkit-transform: rotate3d(0, 0, 1, -45deg);
      transform: rotate3d(0, 0, 1, -45deg);
      opacity: 0;
    }
}`

export const rotateOutUpLeft = keyframes`{
    from {
      -webkit-transform-origin: left bottom;
      transform-origin: left bottom;
      opacity: 1;
    }
  
    to {
      -webkit-transform-origin: left bottom;
      transform-origin: left bottom;
      -webkit-transform: rotate3d(0, 0, 1, -45deg);
      transform: rotate3d(0, 0, 1, -45deg);
      opacity: 0;
    }
}`

export const rotateOutUpRight = keyframes`{
    from {
      -webkit-transform-origin: right bottom;
      transform-origin: right bottom;
      opacity: 1;
    }
  
    to {
      -webkit-transform-origin: right bottom;
      transform-origin: right bottom;
      -webkit-transform: rotate3d(0, 0, 1, 90deg);
      transform: rotate3d(0, 0, 1, 90deg);
      opacity: 0;
    }
}`

export const hinge = keyframes`{
    from {
      -webkit-transform-origin: right bottom;
      transform-origin: right bottom;
      opacity: 1;
    }
  
    to {
      -webkit-transform-origin: right bottom;
      transform-origin: right bottom;
      -webkit-transform: rotate3d(0, 0, 1, 90deg);
      transform: rotate3d(0, 0, 1, 90deg);
      opacity: 0;
    }
}`

export const jackInTheBox = keyframes`{
    from {
      opacity: 0;
      -webkit-transform: scale(0.1) rotate(30deg);
      transform: scale(0.1) rotate(30deg);
      -webkit-transform-origin: center bottom;
      transform-origin: center bottom;
    }
  
    50% {
      -webkit-transform: rotate(-10deg);
      transform: rotate(-10deg);
    }
  
    70% {
      -webkit-transform: rotate(3deg);
      transform: rotate(3deg);
    }
  
    to {
      opacity: 1;
      -webkit-transform: scale(1);
      transform: scale(1);
    }
}`

export const rollIn = keyframes`{
    from {
      opacity: 0;
      -webkit-transform: translate3d(-100%, 0, 0) rotate3d(0, 0, 1, -120deg);
      transform: translate3d(-100%, 0, 0) rotate3d(0, 0, 1, -120deg);
    }
  
    to {
      opacity: 1;
      -webkit-transform: translate3d(0, 0, 0);
      transform: translate3d(0, 0, 0);
    }
}`

export const rollOut = keyframes`{
    from {
      opacity: 1;
    }
  
    to {
      opacity: 0;
      -webkit-transform: translate3d(100%, 0, 0) rotate3d(0, 0, 1, 120deg);
      transform: translate3d(100%, 0, 0) rotate3d(0, 0, 1, 120deg);
    }
}`

export const zoomIn = keyframes`{
    from {
      opacity: 0;
      -webkit-transform: scale3d(0.3, 0.3, 0.3);
      transform: scale3d(0.3, 0.3, 0.3);
    }
  
    50% {
      opacity: 1;
    }
}`

export const zoomInDown = keyframes`{
    from {
      opacity: 0;
      -webkit-transform: scale3d(0.1, 0.1, 0.1) translate3d(0, -1000px, 0);
      transform: scale3d(0.1, 0.1, 0.1) translate3d(0, -1000px, 0);
      -webkit-animation-timing-function: cubic-bezier(0.55, 0.055, 0.675, 0.19);
      animation-timing-function: cubic-bezier(0.55, 0.055, 0.675, 0.19);
    }
  
    60% {
      opacity: 1;
      -webkit-transform: scale3d(0.475, 0.475, 0.475) translate3d(0, 60px, 0);
      transform: scale3d(0.475, 0.475, 0.475) translate3d(0, 60px, 0);
      -webkit-animation-timing-function: cubic-bezier(0.175, 0.885, 0.32, 1);
      animation-timing-function: cubic-bezier(0.175, 0.885, 0.32, 1);
    }
}`

export const zoomInLeft = keyframes`{
    from {
      opacity: 0;
      -webkit-transform: scale3d(0.1, 0.1, 0.1) translate3d(-1000px, 0, 0);
      transform: scale3d(0.1, 0.1, 0.1) translate3d(-1000px, 0, 0);
      -webkit-animation-timing-function: cubic-bezier(0.55, 0.055, 0.675, 0.19);
      animation-timing-function: cubic-bezier(0.55, 0.055, 0.675, 0.19);
    }
  
    60% {
      opacity: 1;
      -webkit-transform: scale3d(0.475, 0.475, 0.475) translate3d(10px, 0, 0);
      transform: scale3d(0.475, 0.475, 0.475) translate3d(10px, 0, 0);
      -webkit-animation-timing-function: cubic-bezier(0.175, 0.885, 0.32, 1);
      animation-timing-function: cubic-bezier(0.175, 0.885, 0.32, 1);
    }
}`

export const zoomInRight = keyframes`{
    from {
      opacity: 0;
      -webkit-transform: scale3d(0.1, 0.1, 0.1) translate3d(1000px, 0, 0);
      transform: scale3d(0.1, 0.1, 0.1) translate3d(1000px, 0, 0);
      -webkit-animation-timing-function: cubic-bezier(0.55, 0.055, 0.675, 0.19);
      animation-timing-function: cubic-bezier(0.55, 0.055, 0.675, 0.19);
    }
  
    60% {
      opacity: 1;
      -webkit-transform: scale3d(0.475, 0.475, 0.475) translate3d(-10px, 0, 0);
      transform: scale3d(0.475, 0.475, 0.475) translate3d(-10px, 0, 0);
      -webkit-animation-timing-function: cubic-bezier(0.175, 0.885, 0.32, 1);
      animation-timing-function: cubic-bezier(0.175, 0.885, 0.32, 1);
    }
}`

export const zoomInUp = keyframes`{
    from {
      opacity: 0;
      -webkit-transform: scale3d(0.1, 0.1, 0.1) translate3d(0, 1000px, 0);
      transform: scale3d(0.1, 0.1, 0.1) translate3d(0, 1000px, 0);
      -webkit-animation-timing-function: cubic-bezier(0.55, 0.055, 0.675, 0.19);
      animation-timing-function: cubic-bezier(0.55, 0.055, 0.675, 0.19);
    }
  
    60% {
      opacity: 1;
      -webkit-transform: scale3d(0.475, 0.475, 0.475) translate3d(0, -60px, 0);
      transform: scale3d(0.475, 0.475, 0.475) translate3d(0, -60px, 0);
      -webkit-animation-timing-function: cubic-bezier(0.175, 0.885, 0.32, 1);
      animation-timing-function: cubic-bezier(0.175, 0.885, 0.32, 1);
    }
}`

export const zoomOut = keyframes`{
    from {
      opacity: 1;
    }
  
    50% {
      opacity: 0;
      -webkit-transform: scale3d(0.3, 0.3, 0.3);
      transform: scale3d(0.3, 0.3, 0.3);
    }
  
    to {
      opacity: 0;
    }
}`

export const zoomOutDown = keyframes`{
    40% {
      opacity: 1;
      -webkit-transform: scale3d(0.475, 0.475, 0.475) translate3d(0, -60px, 0);
      transform: scale3d(0.475, 0.475, 0.475) translate3d(0, -60px, 0);
      -webkit-animation-timing-function: cubic-bezier(0.55, 0.055, 0.675, 0.19);
      animation-timing-function: cubic-bezier(0.55, 0.055, 0.675, 0.19);
    }
  
    to {
      opacity: 0;
      -webkit-transform: scale3d(0.1, 0.1, 0.1) translate3d(0, 2000px, 0);
      transform: scale3d(0.1, 0.1, 0.1) translate3d(0, 2000px, 0);
      -webkit-transform-origin: center bottom;
      transform-origin: center bottom;
      -webkit-animation-timing-function: cubic-bezier(0.175, 0.885, 0.32, 1);
      animation-timing-function: cubic-bezier(0.175, 0.885, 0.32, 1);
    }
}`

export const zoomOutLeft = keyframes`{
    40% {
      opacity: 1;
      -webkit-transform: scale3d(0.475, 0.475, 0.475) translate3d(42px, 0, 0);
      transform: scale3d(0.475, 0.475, 0.475) translate3d(42px, 0, 0);
    }
  
    to {
      opacity: 0;
      -webkit-transform: scale(0.1) translate3d(-2000px, 0, 0);
      transform: scale(0.1) translate3d(-2000px, 0, 0);
      -webkit-transform-origin: left center;
      transform-origin: left center;
    }
}`

export const zoomOutRight = keyframes`{
    40% {
      opacity: 1;
      -webkit-transform: scale3d(0.475, 0.475, 0.475) translate3d(-42px, 0, 0);
      transform: scale3d(0.475, 0.475, 0.475) translate3d(-42px, 0, 0);
    }
  
    to {
      opacity: 0;
      -webkit-transform: scale(0.1) translate3d(2000px, 0, 0);
      transform: scale(0.1) translate3d(2000px, 0, 0);
      -webkit-transform-origin: right center;
      transform-origin: right center;
    }
}`

export const zoomOutUp = keyframes`{
    40% {
      opacity: 1;
      -webkit-transform: scale3d(0.475, 0.475, 0.475) translate3d(0, 60px, 0);
      transform: scale3d(0.475, 0.475, 0.475) translate3d(0, 60px, 0);
      -webkit-animation-timing-function: cubic-bezier(0.55, 0.055, 0.675, 0.19);
      animation-timing-function: cubic-bezier(0.55, 0.055, 0.675, 0.19);
    }
  
    to {
      opacity: 0;
      -webkit-transform: scale3d(0.1, 0.1, 0.1) translate3d(0, -2000px, 0);
      transform: scale3d(0.1, 0.1, 0.1) translate3d(0, -2000px, 0);
      -webkit-transform-origin: center bottom;
      transform-origin: center bottom;
      -webkit-animation-timing-function: cubic-bezier(0.175, 0.885, 0.32, 1);
      animation-timing-function: cubic-bezier(0.175, 0.885, 0.32, 1);
    }
}`

export const slideInDown = keyframes`{
    from {
      -webkit-transform: translate3d(0, -100%, 0);
      transform: translate3d(0, -100%, 0);
      visibility: visible;
    }
  
    to {
      -webkit-transform: translate3d(0, 0, 0);
      transform: translate3d(0, 0, 0);
    }
}`

export const slideInLeft = keyframes`{
    from {
      -webkit-transform: translate3d(-100%, 0, 0);
      transform: translate3d(-100%, 0, 0);
      visibility: visible;
    }
  
    to {
      -webkit-transform: translate3d(0, 0, 0);
      transform: translate3d(0, 0, 0);
    }
}`

export const slideInRight = keyframes`{
    from {
      -webkit-transform: translate3d(100%, 0, 0);
      transform: translate3d(100%, 0, 0);
      visibility: visible;
    }
  
    to {
      -webkit-transform: translate3d(0, 0, 0);
      transform: translate3d(0, 0, 0);
    }
}`

export const slideInUp = keyframes`{
    from {
      -webkit-transform: translate3d(0, 100%, 0);
      transform: translate3d(0, 100%, 0);
      visibility: visible;
    }
  
    to {
      -webkit-transform: translate3d(0, 0, 0);
      transform: translate3d(0, 0, 0);
    }
}`

export const slideOutDown = keyframes`{
    from {
      -webkit-transform: translate3d(0, 0, 0);
      transform: translate3d(0, 0, 0);
    }
  
    to {
      visibility: hidden;
      -webkit-transform: translate3d(0, 100%, 0);
      transform: translate3d(0, 100%, 0);
    }
}`

export const slideOutLeft = keyframes`{
    from {
      -webkit-transform: translate3d(0, 0, 0);
      transform: translate3d(0, 0, 0);
    }
  
    to {
      visibility: hidden;
      -webkit-transform: translate3d(-100%, 0, 0);
      transform: translate3d(-100%, 0, 0);
    }
}`

export const slideOutRight = keyframes`{
    from {
      -webkit-transform: translate3d(0, 0, 0);
      transform: translate3d(0, 0, 0);
    }
  
    to {
      visibility: hidden;
      -webkit-transform: translate3d(100%, 0, 0);
      transform: translate3d(100%, 0, 0);
    }
}`

export const slideOutUp = keyframes`{
    from {
      -webkit-transform: translate3d(0, 0, 0);
      transform: translate3d(0, 0, 0);
    }
  
    to {
      visibility: hidden;
      -webkit-transform: translate3d(0, -100%, 0);
      transform: translate3d(0, -100%, 0);
    }
}`

export const pulse = keyframes`{
    0%, 100% {
        transform: scale3d(1,1,1)
    }
    50% {
        transform: scale3d(1.05,1.05,1.05)
    }
}`

export const rubberBand = keyframes`{
    0% {
        transform: scale3d(1,1,1)
    }
    30% {
        transform: scale3d(1.25,0.75,1)
    }
    40% {
        transform: scale3d(0.75,1.25,1)
    }
    50% {
        transform: scale3d(1.15,0.85,1)
    }
    65% {
        transform: scale3d(0.95,1.05,1)
    }
    75% {
        transform: scale3d(1.05,0.95,1)
    }
    100% {
        transform: scale3d(1,1,1)
    }
}`

export const bounce = keyframes`{
    from,
    20%,
    53%,
    80%,
    to {
      animation-timing-function: cubic-bezier(0.215, 0.61, 0.355, 1);
      transform: translate3d(0, 0, 0);
    }
  
    40%,
    43% {
      animation-timing-function: cubic-bezier(0.755, 0.05, 0.855, 0.06);
      transform: translate3d(0, -30px, 0);
    }
  
    70% {
      animation-timing-function: cubic-bezier(0.755, 0.05, 0.855, 0.06);
      transform: translate3d(0, -15px, 0);
    }
  
    90% {
      transform: translate3d(0, -4px, 0);
    }
}`

export const bounceIn = keyframes`{
    from,
    20%,
    40%,
    60%,
    80%,
    to {
      animation-timing-function: cubic-bezier(0.215, 0.61, 0.355, 1);
    }
  
    0% {
      opacity: 0;
      transform: scale3d(0.3, 0.3, 0.3);
    }
  
    20% {
      transform: scale3d(1.1, 1.1, 1.1);
    }
  
    40% {
      transform: scale3d(0.9, 0.9, 0.9);
    }
  
    60% {
      opacity: 1;
      transform: scale3d(1.03, 1.03, 1.03);
    }
  
    80% {
      transform: scale3d(0.97, 0.97, 0.97);
    }
  
    to {
      opacity: 1;
      transform: scale3d(1, 1, 1);
    }
}`

export const bounceInDown = keyframes`{
    from,
    60%,
    75%,
    90%,
    to {
      animation-timing-function: cubic-bezier(0.215, 0.61, 0.355, 1);
    }
  
    0% {
      opacity: 0;
      transform: translate3d(0, -3000px, 0);
    }
  
    60% {
      opacity: 1;
      transform: translate3d(0, 25px, 0);
    }
  
    75% {
      transform: translate3d(0, -10px, 0);
    }
  
    90% {
      transform: translate3d(0, 5px, 0);
    }
  
    to {
      transform: translate3d(0, 0, 0);
    }
}`

export const bounceInLeft = keyframes`{
    from,
    60%,
    75%,
    90%,
    to {
      animation-timing-function: cubic-bezier(0.215, 0.61, 0.355, 1);
    }
  
    0% {
      opacity: 0;
      transform: translate3d(-3000px, 0, 0);
    }
  
    60% {
      opacity: 1;
      transform: translate3d(25px, 0, 0);
    }
  
    75% {
      transform: translate3d(-10px, 0, 0);
    }
  
    90% {
      transform: translate3d(5px, 0, 0);
    }
  
    to {
      transform: translate3d(0, 0, 0);
    }
}`

export const bounceInRight = keyframes`{
    from,
    60%,
    75%,
    90%,
    to {
      -webkit-animation-timing-function: cubic-bezier(0.215, 0.61, 0.355, 1);
      animation-timing-function: cubic-bezier(0.215, 0.61, 0.355, 1);
    }
  
    from {
      opacity: 0;
      -webkit-transform: translate3d(3000px, 0, 0);
      transform: translate3d(3000px, 0, 0);
    }
  
    60% {
      opacity: 1;
      -webkit-transform: translate3d(-25px, 0, 0);
      transform: translate3d(-25px, 0, 0);
    }
  
    75% {
      -webkit-transform: translate3d(10px, 0, 0);
      transform: translate3d(10px, 0, 0);
    }
  
    90% {
      -webkit-transform: translate3d(-5px, 0, 0);
      transform: translate3d(-5px, 0, 0);
    }
  
    to {
      -webkit-transform: translate3d(0, 0, 0);
      transform: translate3d(0, 0, 0);
    }
}`

export const bounceInUp = keyframes`{
    from,
    60%,
    75%,
    90%,
    to {
      animation-timing-function: cubic-bezier(0.215, 0.61, 0.355, 1);
    }
  
    from {
      opacity: 0;
      transform: translate3d(0, 3000px, 0);
    }
  
    60% {
      opacity: 1;
      transform: translate3d(0, -20px, 0);
    }
  
    75% {
      transform: translate3d(0, 10px, 0);
    }
  
    90% {
      transform: translate3d(0, -5px, 0);
    }
  
    to {
      transform: translate3d(0, 0, 0);
    }
}`

export const bounceOut = keyframes`{
    20% {
      transform: scale3d(0.9, 0.9, 0.9);
    }
  
    50%,
    55% {
      opacity: 1;
      transform: scale3d(1.1, 1.1, 1.1);
    }
  
    to {
      opacity: 0;
      transform: scale3d(0.3, 0.3, 0.3);
    }
}`

export const bounceOutDown = keyframes`{
    20% {
      -webkit-transform: translate3d(0, 10px, 0);
      transform: translate3d(0, 10px, 0);
    }
  
    40%,
    45% {
      opacity: 1;
      -webkit-transform: translate3d(0, -20px, 0);
      transform: translate3d(0, -20px, 0);
    }
  
    to {
      opacity: 0;
      -webkit-transform: translate3d(0, 2000px, 0);
      transform: translate3d(0, 2000px, 0);
    }
}`

export const bounceOutLeft = keyframes`{
    20% {
      opacity: 1;
      transform: translate3d(20px, 0, 0);
    }
  
    to {
      opacity: 0;
      transform: translate3d(-2000px, 0, 0);
    }
}`

export const bounceOutRight = keyframes`{
    20% {
      opacity: 1;
      transform: translate3d(-20px, 0, 0);
    }
  
    to {
      opacity: 0;
      transform: translate3d(2000px, 0, 0);
    }
}`

export const bounceOutUp = keyframes`{
    20% {
      transform: translate3d(0, -10px, 0);
    }
  
    40%,
    45% {
      opacity: 1;
      transform: translate3d(0, 20px, 0);
    }
  
    to {
      opacity: 0;
      transform: translate3d(0, -2000px, 0);
    }
}`

export const slideZoomIn = keyframes`{
    0%{
        transform:scale3d(1,1,1);
        opacity: 1;
    }
    100% {
        transform:scale3d(1.1,1.1,1);
        opacity: 1;
    }
}`

export const flash = keyframes`{
    0, 50%, 100% {
        opacity: 1
    }
    25%, 75% {
        opacity: 0
    }
}`

export const shake = keyframes`{
    from,
    to {
      transform: translate3d(0, 0, 0);
    }
  
    10%,
    30%,
    50%,
    70%,
    90% {
      transform: translate3d(-10px, 0, 0);
    }
  
    20%,
    40%,
    60%,
    80% {
      transform: translate3d(10px, 0, 0);
    }
}`

export const headShake = keyframes`{
    0% {
      transform: translateX(0);
    }
  
    6.5% {
      transform: translateX(-6px) rotateY(-9deg);
    }
  
    18.5% {
      transform: translateX(5px) rotateY(7deg);
    }
  
    31.5% {
      transform: translateX(-3px) rotateY(-5deg);
    }
  
    43.5% {
      transform: translateX(2px) rotateY(3deg);
    }
  
    50% {
      transform: translateX(0);
    }
}`

export const swing = keyframes`{
    20% {
      transform: rotate3d(0, 0, 1, 15deg);
    }
  
    40% {
      transform: rotate3d(0, 0, 1, -10deg);
    }
  
    60% {
      transform: rotate3d(0, 0, 1, 5deg);
    }
  
    80% {
      transform: rotate3d(0, 0, 1, -5deg);
    }
  
    to {
      transform: rotate3d(0, 0, 1, 0deg);
    }
}`

export const tada = keyframes`{
    from {
      transform: scale3d(1, 1, 1);
    }
  
    10%,
    20% {
      transform: scale3d(0.9, 0.9, 0.9) rotate3d(0, 0, 1, -3deg);
    }
  
    30%,
    50%,
    70%,
    90% {
      transform: scale3d(1.1, 1.1, 1.1) rotate3d(0, 0, 1, 3deg);
    }
  
    40%,
    60%,
    80% {
      transform: scale3d(1.1, 1.1, 1.1) rotate3d(0, 0, 1, -3deg);
    }
  
    to {
      transform: scale3d(1, 1, 1);
    }
}`

export const wobble = keyframes`{
    from {
      transform: translate3d(0, 0, 0);
    }
  
    15% {
      transform: translate3d(-25%, 0, 0) rotate3d(0, 0, 1, -5deg);
    }
  
    30% {
      transform: translate3d(20%, 0, 0) rotate3d(0, 0, 1, 3deg);
    }
  
    45% {
      transform: translate3d(-15%, 0, 0) rotate3d(0, 0, 1, -3deg);
    }
  
    60% {
      transform: translate3d(10%, 0, 0) rotate3d(0, 0, 1, 2deg);
    }
  
    75% {
      transform: translate3d(-5%, 0, 0) rotate3d(0, 0, 1, -1deg);
    }
  
    to {
      transform: translate3d(0, 0, 0);
    }
}`

export const jello = keyframes`{
    from,
    11.1%,
    to {
      transform: translate3d(0, 0, 0);
    }
  
    22.2% {
      transform: skewX(-12.5deg) skewY(-12.5deg);
    }
  
    33.3% {
      transform: skewX(6.25deg) skewY(6.25deg);
    }
  
    44.4% {
      transform: skewX(-3.125deg) skewY(-3.125deg);
    }
  
    55.5% {
      transform: skewX(1.5625deg) skewY(1.5625deg);
    }
  
    66.6% {
      transform: skewX(-0.78125deg) skewY(-0.78125deg);
    }
  
    77.7% {
      transform: skewX(0.390625deg) skewY(0.390625deg);
    }
  
    88.8% {
      transform: skewX(-0.1953125deg) skewY(-0.1953125deg);
    }
}`
