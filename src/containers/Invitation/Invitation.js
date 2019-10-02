import React, { Component } from "react";
import { connect } from "react-redux";
import { Route } from "react-router-dom";
import RSVP from "./RSVP/RSVP";
import Auth from "../Auth/Auth";
import Logout from "../Auth/Logout/Logout";

class Invitation extends Component {
  render() {
    return (
      <div className="text-purple lh-default">
        <svg xmlns="http://www.w3.org/2000/svg" style={{ display: "none" }}>
          <symbol id="heart" viewBox="0 0 32 32">
            <path d="M31.656 8.275c-1.065-3.838-4.583-6.518-8.553-6.518-0.344 0-0.691 0.022-1.031 0.063-3.529 0.429-5.243 2.353-6.072 3.984-0.826-1.631-2.542-3.555-6.071-3.984-0.301-0.037-0.595-0.057-0.877-0.063-0.051-0.001-0.103-0.001-0.154-0.001-3.973 0-7.491 2.68-8.555 6.519-0.585 2.109-0.711 5.539 2.011 9.915 2.581 4.15 7.125 8.199 13.504 12.037 0.029 0.017 0.064 0.022 0.096 0.014 0.017-0.005 0.031-0.013 0.045-0.024 0.014 0.011 0.029 0.019 0.046 0.024 0.010 0.003 0.022 0.003 0.032 0.003 0.023 0 0.043-0.005 0.063-0.017 6.381-3.837 10.925-7.887 13.505-12.037 2.723-4.377 2.597-7.808 2.011-9.915z"></path>
          </symbol>
        </svg>
        <div className="mainframe mx-auto">
          <div className="frame"></div>
          <div className="frame__footer d-flex flex-items-center flex-justify-center col-12 text-uppercase text-edmondsans text-cream text-spacing">
            <span>Ashley</span>
            <button
              className="frame__icon px-4 d-flex"
              id="js-love-trigger"
              aria-label="Click me"
            >
              <svg className="frame__heart">
                <title>Click me!</title>
                <use xlinkHref="#heart" />
              </svg>
            </button>
            <span>Amanda</span>
          </div>
          <div className="main">
            <div className="illustrations">
              <img
                className="illustration rellax"
                data-rellax-speed="-10"
                src="/sky.svg"
                alt=""
              />
              <img
                className="illustration rellax"
                data-rellax-speed="-5"
                src="/mountains.svg"
                alt=""
              />
              <img
                className="illustration rellax"
                data-rellax-speed="-1"
                src="/lodge.svg"
                alt=""
              />
              <svg
                className="cloud cloud--top"
                viewBox="0 0 290 32"
                width="1504"
                height="166"
              >
                <path
                  fill="#ffefde"
                  d="M289.928 32c-28.145 0-27.759-12.145-43.32-12.145-11.053 0-13.164 6.013-21.995 6.013-10.059 0-20.495-14.687-44.53-14.687-20.748 0-24.731 9.374-41.288 9.374-16 0-35.688-20.555-74.024-20.555-41.831 0-64.771 23.057-64.771 32z"
                ></path>
              </svg>
              <svg
                className="cloud cloud--middle"
                viewBox="0 0 290 32"
                width="752"
                height="83"
              >
                <path
                  fill="#ffefde"
                  d="M289.928 32c-28.145 0-27.759-12.145-43.32-12.145-11.053 0-13.164 6.013-21.995 6.013-10.059 0-20.495-14.687-44.53-14.687-20.748 0-24.731 9.374-41.288 9.374-16 0-35.688-20.555-74.024-20.555-41.831 0-64.771 23.057-64.771 32z"
                ></path>
              </svg>
              <svg
                className="cloud cloud--bottom"
                viewBox="0 0 290 32"
                width="933"
                height="103"
              >
                <path
                  fill="#ffefde"
                  d="M289.928 32c-28.145 0-27.759-12.145-43.32-12.145-11.053 0-13.164 6.013-21.995 6.013-10.059 0-20.495-14.687-44.53-14.687-20.748 0-24.731 9.374-41.288 9.374-16 0-35.688-20.555-74.024-20.555-41.831 0-64.771 23.057-64.771 32z"
                ></path>
              </svg>
              <img
                className="illustration rellax"
                data-rellax-speed="1"
                src="/purple.svg"
                alt=""
              />
              <img
                className="illustration rellax"
                data-rellax-speed="2"
                src="/green.svg"
                alt=""
              />
            </div>
            <div className="hearts" id="js-love-container"></div>
            <svg
              className="birds birds-left"
              viewBox="0 0 8 33"
              width="185"
              height="828"
            >
              <path d="M1.711 30.019c-0.135 0.113-0.207 0.202-0.245 0.284-0.059-0.133-0.184-0.281-0.372-0.488-0.313-0.344-0.838-0.571-1.093-0.554l1.433 1.463 1.275-1.067c-0.256-0.047-0.646 0.067-0.998 0.362z"></path>
              <path d="M3.953 31.527c0.016 0.044 0.025 0.095 0.025 0.148 0 0.031-0.003 0.062-0.009 0.092l0.001-0.003c0.097-0.051 0.239-0.087 0.447-0.132 0.345-0.075 0.765-0.015 0.91 0.082l-1.531 0.286-0.274-1.012c0.175 0.064 0.356 0.26 0.432 0.539z"></path>
              <path d="M6.357 0.758c0.135 0.113 0.207 0.202 0.245 0.284 0.060-0.133 0.184-0.28 0.372-0.488 0.313-0.344 0.838-0.571 1.093-0.555l-1.431 1.464-1.278-1.067c0.257-0.047 0.646 0.067 0.999 0.362z"></path>
              <path d="M4.339 2.267c-0.016 0.044-0.025 0.095-0.025 0.148 0 0.031 0.003 0.062 0.009 0.091l-0-0.003c-0.097-0.050-0.239-0.086-0.447-0.132-0.345-0.075-0.765-0.015-0.909 0.083l1.53 0.286 0.275-1.012c-0.176 0.063-0.357 0.259-0.433 0.539z"></path>
              <path d="M2.743 10.495c-0.059 0.052-0.105 0.118-0.131 0.194l-0.001 0.003c-0.059-0.090-0.164-0.195-0.321-0.338-0.261-0.238-0.655-0.395-0.829-0.384l1.182 1.013 0.744-0.739c-0.181-0.033-0.437 0.048-0.643 0.251z"></path>
            </svg>
            <svg
              className="birds birds-right"
              viewBox="0 0 62 32"
              width="118"
              height="61"
            >
              <path d="M42.234 8.853c1.582 1.318 2.42 2.357 2.858 3.322 0.696-1.55 2.151-3.274 4.35-5.694 3.659-4.013 9.797-6.67 12.776-6.48l-16.746 17.094-14.89-12.465c2.99-0.554 7.54 0.78 11.653 4.223z"></path>
              <path d="M16.034 26.474c-0.183 0.518-0.288 1.116-0.288 1.738 0 0.363 0.036 0.717 0.104 1.060l-0.006-0.034c-1.123-0.585-2.789-1.007-5.22-1.54-4.034-0.881-8.932-0.174-10.624 0.965l17.874 3.338 3.216-11.821c-2.051 0.738-4.165 3.021-5.057 6.296z"></path>
            </svg>
            <div className="top py-sm-3 py-lg-6 text-center">
              <h1 className="py-sm-3 py-lg-6 text-edmondsans text-uppercase text-spacing">
                - We are getting -
              </h1>
              <svg
                className="top__lettering col-10"
                id="icon-married"
                viewBox="0 0 71 32"
              >
                <title>Married! &lt;3</title>
                <path d="M12.419 8.882c-0.091 2.030 0.046 3.878-1.848 8.304-3.080 7.118-8.624 8.806-8.715 9.239-0.091 0.388 1.186 0.297 2.076 0.068 0.662-0.16 4.837-3.24 6.685-6.662 1.848-3.468 2.373-7.551 2.441-9.627 0.023-1.049 0.023-1.848-0.251-2.167-0.434-0.502-0.365 0.297-0.388 0.844z"></path>
                <path d="M1.947 13.399c0 0-1.483-1.278-0.593-3.445s3.536-4.426 7.232-4.54c2.806-0.091 5.225 1.688 5.772 4.038 0.548 2.327 0.205 7.095-0.388 9.034-0.593 1.962-0.799 2.92-0.297 3.194 0.502 0.251 0.89 0.16 1.278 0.091s0.89-4.084 1.095-6.662c0.205-2.578 0.433-6.707-2.578-9.171s-7.141-1.665-9.217-0.456c-2.076 1.209-4.13 2.601-4.198 5.703-0.046 1.688 1.437 2.418 1.894 2.213z"></path>
                <path d="M14.997 17.962c0 0 3.194-6.547 4.814-9.171s5.544-7.437 9.354-7.323c1.666 0.046 2.487 1.597 2.487 2.715 0 1.278-0.548 2.464-1.141 2.92-0.274 0.205-0.684 0.433-0.479 0.16 0.091-0.137 0.456-0.525 0.616-1.072 0.388-1.186 0.205-2.852-1.004-3.331-1.415-0.57-3.514 0.114-6.023 3.034s-3.536 4.7-5.316 8.76c-1.78 4.061-2.464 5.932-2.715 6.547-0.251 0.593-0.639 0.548-1.027 0.593s-0.593-1.871 0.434-3.833z"></path>
                <path d="M27.089 3.977c-0.867 0.456-2.19 1.665-3.81 5.224-1.415 3.057-2.327 8.441-1.62 11.407 0.867 3.605 2.624 5.065 4.677 4.882 1.894-0.16 3.012-1.551 3.399-2.099s0.867-1.688 0.799-2.19c-0.046-0.365-0.456 0.023-1.666 1.46-0.821 0.981-1.871 1.597-3.24 1.346-1.506-0.274-2.578-2.509-2.761-5.133-0.16-2.624 0.137-6.342 1.323-9.217 0.958-2.304 1.574-3.217 2.487-4.517 0.479-0.753 1.118-1.551 0.411-1.163z"></path>
                <path d="M31.379 12.532c0 0 0.046-0.844-0.935-0.935s-2.692 0.913-3.924 2.897c-1.232 1.985-1.62 3.81-1.369 4.631 0.251 0.798 1.027 1.095 2.008 0.776 1.255-0.388 2.304-2.35 2.783-3.24s0.479-1.278-0.228-0.365c-0.433 0.548-0.958 1.072-1.529 1.574-0.776 0.707-1.369 0.935-1.688 0.821-0.479-0.16 0.023-1.985 0.753-3.125s2.19-2.966 2.989-3.194c0.707-0.182 0.684 0.433 0.684 0.798-0.023 0.433 0.456-0.16 0.456-0.639z"></path>
                <path d="M31.926 10.73c0.319-0.319 0.913-0.16 1.072 0.091s0.205 0.433-0.137 1.072c-0.502 0.935-1.141 2.395-1.437 3.285s-0.89 2.92-0.548 3.331c0.342 0.411 1.255-0.548 1.597-1.095s1.095-1.711 1.916-2.989c0.821-1.278 0.844-0.981 1.027-0.844s-0.137 0.73-0.73 1.734c-0.593 1.027-2.213 4.403-3.787 4.426-0.616 0.023-1.072-0.319-1.186-1.163s-0.091-2.167 0.73-4.631c0.821-2.464 1.186-2.92 1.483-3.217z"></path>
                <path d="M35.828 11.141c0.183-0.388 0.411-0.593 0.776-0.525 0.593 0.114 0.821 0.342 0.342 1.118-0.684 1.095-0.913 2.281-1.643 3.878-0.913 2.053-1.232 3.787-1.643 3.764-0.297-0.023-0.388-0.662-0.137-1.597 0.434-1.551 0.57-1.825 0.981-3.194 0.319-0.89 1.004-2.783 1.323-3.445z"></path>
                <path d="M41.212 10.799c0.183-0.388 0.411-0.593 0.776-0.525 0.593 0.114 0.821 0.342 0.342 1.118-0.684 1.095-0.913 2.281-1.643 3.878-0.913 2.053-1.209 3.696-1.574 3.81s-0.479-0.365-0.228-1.3c0.434-1.551 0.639-2.167 1.004-3.513 0.274-0.935 1.004-2.829 1.323-3.468z"></path>
                <path d="M35.394 13.605c0 0 1.141 0.388 2.464-1.255s1.688-1.186 1.392-1.004c-0.479 0.319-0.935 1.3-1.688 2.646-0.821 1.437-2.213 1.278-2.92 1.574l0.753-1.962z"></path>
                <path d="M41.394 12.738c0 0 1.483-0.525 2.601-1.711 0.548-0.57-0.502 1.551-0.73 1.802s-1.232 1.141-2.396 1.848l0.525-1.939z"></path>
                <path d="M44.224 10c0.251-0.365 0.57-0.548 0.867-0.297s0.548 0.662 0.137 1.049c-0.411 0.388-1.072 1.118-1.346 1.871-0.342 1.004-0.502 2.076-0.183 2.236 0.616 0.297 1.232-0.479 2.076-1.528 0.821-1.049 1.711-1.916 1.506-1.346-0.228 0.57-1.141 2.646-1.141 2.646s-1.232 1.141-2.259 1.209c-1.027 0.068-1.369-1.004-1.095-2.418 0.251-1.369 0.684-2.327 1.437-3.422z"></path>
                <path d="M48.193 9.475c-0.297-0.297 0.023-1.323 0.479-1.779 0.548-0.548 1.004-0.616 1.255-0.365 0.251 0.228 0.365 0.662-0.137 1.3-0.456 0.616-1.278 1.163-1.597 0.844z"></path>
                <path d="M47.441 10.411c0.319-0.411 0.593-0.228 0.776-0.114 0.183 0.137 0.388 0.433-0.068 1.164s-1.027 1.528-1.415 3.331c-0.205 0.913-0.365 1.757 0 1.939 0.411 0.183 1.506-1.095 2.738-2.852s1.050-0.137 1.392-1.186c0.342-1.049 1.050-1.437 1.050-1.437s-1.072 2.076-1.62 2.989c-0.593 0.981-2.076 3.011-2.783 3.468s-1.369 0.251-1.825-0.114c-0.616-0.456-0.548-2.601-0.137-3.764s0.981-1.688 1.369-2.236c0.388-0.502 0.205-0.776 0.525-1.186z"></path>
                <path d="M50.27 14.243c0 0 1.597-0.205 3.24-1.164s1.848-1.711 1.551-1.985c-0.274-0.274-1.278 0.091-1.78 0.502s-1.916 1.437-2.487 2.783c-0.867 2.076 0.274 2.715 1.095 2.669s1.962-0.844 3.057-2.122c1.095-1.278 2.51-2.555 2.92-3.24l-0.639 1.164c0 0-1.346 2.236-1.985 2.943-0.639 0.753-2.35 2.783-4.152 2.418-1.894-0.388-2.076-2.395-1.871-3.354 0.183-0.958 0.434-1.688 1.871-3.034 1.734-1.62 2.738-2.213 4.015-2.236 1.757-0.023 1.483 2.464-0.319 3.696-1.574 1.072-2.875 1.551-4.586 1.392l0.068-0.433z"></path>
                <path d="M60.103 9.43c0.958 0.137 2.738 0.228 5.749-2.281 2.875-2.395 3.81-4.905 3.514-5.726s-1.894 0.616-2.487 1.46c-0.593 0.844-3.263 5.886-4.084 8.008s-2.943 6.616-3.24 7.551c-0.297 0.935-0.639 1.551-0.981 1.369-0.57-0.319-0.388-1.346-0.297-2.281s2.51-5.201 3.103-6.319c0.593-1.118 3.422-7.757 4.974-9.513s3.126-1.939 3.764-1.346c0.639 0.593 0.799 2.874-1.027 5.11s-3.582 3.376-5.225 4.198c-1.643 0.821-3.171 0.502-3.696 0.297-0.479-0.182-0.662-0.593-0.068-0.525z"></path>
                <path d="M61.358 11.665c0 0 0.091-0.844-0.867-1.004s-2.761 0.73-4.107 2.646c-1.346 1.916-1.871 3.696-1.666 4.517s0.935 1.163 1.962 0.913c1.278-0.297 2.464-2.19 2.989-3.057s0.57-1.232-0.205-0.365c-0.456 0.502-1.027 1.004-1.62 1.46-0.821 0.639-1.415 0.844-1.757 0.707-0.479-0.205 0.16-1.962 0.958-3.057s2.396-2.806 3.194-2.966c0.707-0.137 0.639 0.479 0.616 0.844-0.046 0.388 0.456-0.182 0.502-0.639z"></path>
                <path d="M48.49 9.544c0.342-0.114 0.479-1.027 0.319-1.528-0.183-0.616-0.502-0.844-0.776-0.753s-0.502 0.365-0.411 1.027c0.137 0.684 0.502 1.392 0.867 1.255z"></path>
                <path d="M38.565 10.867c0.251-0.365 0.57-0.548 0.867-0.297s0.548 0.662 0.137 1.049c-0.411 0.388-1.072 1.118-1.346 1.871-0.342 1.004-0.502 2.076-0.183 2.236 0.616 0.297 1.232-0.479 2.076-1.528 0.821-1.049 1.711-1.916 1.506-1.346-0.228 0.57-1.141 2.646-1.141 2.646s-1.232 1.141-2.259 1.209c-1.027 0.068-1.369-1.004-1.095-2.418 0.251-1.369 0.707-2.327 1.437-3.422z"></path>
                <path d="M46.893 21.498c2.669-0.297 4.882 0.57 6.092 1.779s0.274 0.89-1.072 0.183c-1.346-0.707-3.764-0.89-5.407-0.639-2.806 0.456-6.548 1.985-10.769 4.198s-10.951 5.087-14.26 4.973c-3.308-0.114-4.723-1.779-5.225-2.92s-0.137-1.163 0.068-1.141c0.57 0.023 0.821 2.030 3.057 2.601s7.164-0.593 14.579-4.403c7.575-3.878 9.993-4.312 12.936-4.631z"></path>
              </svg>
              <div className="py-sm-3 py-lg-6 col-10 mx-auto">
                <p className="top__desc mx-auto text-serif">
                  Two years ago we both set off to travel the world, having no
                  idea what it had in store for us. Fate and a remote work
                  program brought us together and we have been partners in life
                  and love since. You all have been a part of our journey along
                  the way, and we are so excited to celebrate this special day
                  with you.
                </p>
                <a className="py-5 d-inline-flex" href="#scroll">
                  <svg
                    className="top__scroll"
                    id="icon-arrow-down"
                    viewBox="0 0 24 24"
                    height="1em"
                    width="1em"
                  >
                    <title>Scroll down for more</title>
                    <path d="M18.293 11.293l-5.293 5.293v-11.586c0-0.552-0.448-1-1-1s-1 0.448-1 1v11.586l-5.293-5.293c-0.391-0.391-1.024-0.391-1.414 0s-0.391 1.024 0 1.414l7 7c0.096 0.096 0.206 0.168 0.324 0.217s0.247 0.076 0.383 0.076c0.13 0 0.261-0.025 0.383-0.076 0.118-0.049 0.228-0.121 0.324-0.217l7-7c0.391-0.391 0.391-1.024 0-1.414s-1.024-0.391-1.414 0z"></path>
                  </svg>
                </a>
              </div>
            </div>
            <div className="middle col-10 mx-auto text-center" id="scroll">
              <div className="py-6 text-edmondsans text-uppercase text-spacing text-cream">
                Dearest friends and family, we would love you to…
              </div>
              <div></div>
              <div></div>
              <div className="py-6 text-edmondsans text-uppercase text-spacing text-cream">
                join us in celebrating where the sea meets the sky!
              </div>
            </div>
            <div className="bottom py-6">
              <div className="bottom__heading">
                <h2 className="h1 py-6 text-edmondsans text-uppercase text-spacing text-cream text-center">
                  - Our Story -
                </h2>
              </div>
              <ol className="timeline text-nunito text-cream mx-auto">
                <li className="d-flex flex-items-center py-sm-3 py-lg-6">
                  <p>
                    We first met in{" "}
                    <span className="text-bold">November 2017</span> in Hanoi,
                    Vietnam at the start of our{" "}
                    <a
                      className="text-link"
                      target="_blank"
                      rel="noopener noreferrer"
                      href="https://remoteyear.com/itineraries/sisu"
                    >
                      Remote Year program
                    </a>
                    . Ashley caught Amanda’s attention early on when she
                    provided her first aid at a cocktail bar.
                  </p>
                </li>
                <li className="d-flex flex-items-center py-sm-3 py-lg-6">
                  <p>
                    Amanda invited Ashley on a trip to Railay Beach, Thailand
                    over the holidays in{" "}
                    <span className="text-bold">December 2017</span>. After a
                    few magical days of scuba diving, getting caught in the
                    rain, and stargazing together, Ashley made the first move.
                  </p>
                </li>
                <li className="d-flex flex-items-center py-sm-3 py-lg-6">
                  <p>
                    For the next 10 months we travelled the world. It was full
                    of countless adventures and some major challenges. Needless
                    to say, we fell in love.
                  </p>
                </li>
                <li className="d-flex flex-items-center py-sm-3 py-lg-6">
                  <p>
                    In <span className="text-bold">November 2018</span> the
                    Remote Year program wrapped up. Not sick of it yet, we
                    decided to keep traveling on our own.
                  </p>
                </li>
                <li className="d-flex flex-items-center py-sm-3 py-lg-6">
                  <p>
                    In <span className="text-bold">January 2019</span>, we
                    stayed in Cerro Chirripó, Costa Rica. Its jungly flowers and
                    crystal rivers made it a perfect proposal spot. One day
                    after an eventful trail run, Amanda popped the question and
                    Ashley said, “Yes!”
                  </p>
                </li>
                <li className="d-flex flex-items-center py-sm-3 py-lg-6">
                  <p>
                    Ashley waited patiently for her ideal plan to return the
                    proposal. When we travelled to Whistler, Canada in{" "}
                    <span className="text-bold">September 2019</span> she
                    finally had her chance. She took Amanda on a surprise
                    helicopter ride and proposed atop Rainbow Glacier. Amanda
                    said, "Yes, yes, yes!"
                  </p>
                </li>
                <li className="d-flex flex-items-center py-sm-3 py-lg-6 text-uppercase">
                  <p>The big day!</p>
                </li>
                <li className="d-flex flex-items-center py-sm-3 py-lg-6">
                  <p>Reception in Boston! Details coming soon.</p>
                </li>
              </ol>
            </div>
            <Route
              path={this.props.match.url}
              render={props => <Auth {...props} />}
            />
            <Route path="/logout" render={props => <Logout {...props} />} />
            {this.props.isAuthenticated && (
              <Route
                path={this.props.match.url}
                render={props => <RSVP {...props} />}
              />
            )}
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    token: state.auth.token,
    email: state.auth.email,
    isAuthenticated: state.auth.token !== null
  };
};

export default connect(mapStateToProps)(Invitation);
