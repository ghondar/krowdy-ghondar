import React from 'react'
import Svg from '../../Svg'
import useGetColor from '../../useGetColor'

const JobInterviewSvg = ({ width, height, color }) => {
  const colorCustom = useGetColor({ color })

  return (
    <Svg
      height={height}
      width={width}>
      <path
        d='M172.854 118.419a46.514 46.514 0 013.624-15.387c.305-.731 1.015-1.604 1.715-1.228-.406 2.253-.815 4.5-1.228 6.739a40.177 40.177 0 0010.658-10.353 2.771 2.771 0 011.015-1.015.933.933 0 011.258.335 1.353 1.353 0 01-.223 1.147 41.52 41.52 0 01-4.263 6.232c2.03-3.045 4.253-6.211 7.481-7.988a18.799 18.799 0 01-3.827 9.694l5.166-5.745c.467-.528 1.249-1.086 1.797-.65.548.437.183 1.299-.193 1.868l-3.593 5.359a78.039 78.039 0 015.694-4.547c-.345 3.268-2.842 5.887-5.501 7.805-2.659 1.918-5.654 3.461-7.836 5.907a26.63 26.63 0 00-3.329 5.217'
        fill='#fff' />
      <path
        d='M181.259 122.276a.603.603 0 01-.224 0 .468.468 0 01-.182-.629 26.262 26.262 0 013.39-5.309 26.582 26.582 0 015.531-4.364c.802-.528 1.604-1.015 2.376-1.614 2.781-2.03 4.496-4.141 5.075-6.354a85.87 85.87 0 00-4.71 3.816.457.457 0 11-.69-.599l3.593-5.359c.304-.467.528-1.015.284-1.248-.244-.234-.761.152-1.157.588l-5.166 5.756a.48.48 0 01-.65 0 .457.457 0 01-.071-.64 18.45 18.45 0 003.624-8.516 16.612 16.612 0 00-3.492 3.258 42.73 42.73 0 01-3.045 4.121.478.478 0 01-.64.081.466.466 0 01-.101-.629 49.353 49.353 0 013.045-4.131c.436-.68.842-1.37 1.238-2.03.132-.254.284-.558.203-.74a.255.255 0 00-.152-.133.65.65 0 00-.477 0 2.471 2.471 0 00-.822.853 40.778 40.778 0 01-10.79 10.485.474.474 0 01-.517 0 .447.447 0 01-.193-.467c.375-2.03.761-4.141 1.127-6.212-.341.256-.596.61-.731 1.015a45.878 45.878 0 00-3.583 15.225.467.467 0 11-.934-.061 46.695 46.695 0 013.664-15.539 2.71 2.71 0 011.381-1.523 1.16 1.16 0 011.015.071.45.45 0 01.233.487c-.335 1.888-.68 3.766-1.015 5.654a39.83 39.83 0 009.622-9.602 3.28 3.28 0 011.198-1.188 1.584 1.584 0 011.198 0 1.196 1.196 0 01.68.63c.102.236.127.5.071.75.7-.605 1.462-1.136 2.273-1.583a.448.448 0 01.642.184.453.453 0 01.048.243 19.172 19.172 0 01-1.542 5.887l2.03-2.294c.852-.954 1.786-1.218 2.436-.69.649.527.588 1.441-.102 2.486l-1.776 2.639c1.015-.852 2.131-1.674 3.217-2.466a.468.468 0 01.498 0 .46.46 0 01.233.446c-.304 2.883-2.212 5.624-5.694 8.12-.781.569-1.593 1.097-2.405 1.635a25.67 25.67 0 00-5.349 4.212 26 26 0 00-3.269 5.075.464.464 0 01-.446.203zM45.086 126.174c4.06-4.517 10.495-7.501 15.885-8.76 13.246-3.116 27.933-4.263 41.037.305 20.452 7.105 16.168 32.541 18.006 50.06.944 8.993 1.086 18.828 4.415 27.283 3.684 9.348 1.715 17.62-6.618 24.36-6.262 5.075-14.606 6.963-22.655 6.821-8.922-.163-23.203 3.41-30.764-1.929-10.78-7.612-12.77-24.451-15.682-36.296a292.546 292.546 0 01-7.572-47.309 23.17 23.17 0 01.416-8.455 15.591 15.591 0 013.532-6.08z'
        fill='#262626' />
      <path
        d='M76.978 227.725c-4.872 0-9.49-.66-12.85-3.045-9.227-6.517-12.038-19.346-14.515-30.674-.446-2.03-.883-4.06-1.33-5.876a292.83 292.83 0 01-7.592-47.391 23.527 23.527 0 01.427-8.617 16.438 16.438 0 013.633-6.263c3.665-4.06 9.694-7.389 16.119-8.891 15.996-3.756 29.891-3.654 41.29.315 16.625 5.795 17.184 23.517 17.681 39.148.132 3.999.254 7.785.619 11.297.193 1.878.355 3.806.528 5.745.609 7.267 1.248 14.788 3.857 21.416 3.847 9.765 1.573 18.138-6.76 24.878-5.704 4.628-13.845 7.105-22.939 6.922-2.497-.05-5.42.203-8.506.467-3.085.264-6.455.569-9.662.569zm5.684-112.594a94.533 94.533 0 00-21.59 2.72c-6.262 1.462-12.108 4.699-15.66 8.617a15.312 15.312 0 00-3.432 5.918 23.026 23.026 0 00-.406 8.292 294.6 294.6 0 007.572 47.249 245.07 245.07 0 011.35 5.907c2.436 11.165 5.207 23.812 14.15 30.125 5.298 3.735 14.128 2.984 21.913 2.314 3.116-.264 6.09-.517 8.597-.467 8.912.173 16.829-2.233 22.33-6.719 7.988-6.476 10.15-14.504 6.486-23.863-2.649-6.749-3.299-14.331-3.918-21.67a242.013 242.013 0 00-.528-5.724c-.375-3.543-.487-7.339-.619-11.358-.487-15.347-1.015-32.744-17.082-38.327a58.124 58.124 0 00-19.163-3.014z'
        fill='#262626' />
      <path
        d='M84.925 103.326l2.883-11.55c3.116-12.495 7.41-25.376 21.081-29.273 4.06-1.147 8.12-.69 10.851 2.974 2.76-2.325 7.105-1.076 9.947 1.126 3.958 3.045 6.567 7.542 8.292 12.18 3.045 8.242 3.583 17.154 7.105 25.375-17.438 12.871-42.346 14.687-61.468 4.487l1.31-5.319z'
        fill='#fff' />
      <path
        d='M110.564 115.811a57.863 57.863 0 01-27.202-6.669.455.455 0 01-.233-.518l1.35-5.359 2.882-11.55c3.045-12.252 7.48-25.66 21.396-29.598 4.659-1.33 8.567-.345 11.064 2.761 2.984-2.09 7.298-.782 10.15 1.41 3.562 2.731 6.404 6.913 8.445 12.424a89.74 89.74 0 013.177 11.764 78.338 78.338 0 003.877 13.591.483.483 0 01-.152.558 58.736 58.736 0 01-34.754 11.186zm-26.45-7.318a58.32 58.32 0 0060.362-4.406 80.27 80.27 0 01-3.787-13.408 90.154 90.154 0 00-3.146-11.703c-1.969-5.339-4.71-9.378-8.12-12.007-2.69-2.03-6.781-3.309-9.369-1.137a.442.442 0 01-.355.102.449.449 0 01-.315-.183c-2.872-3.918-7.206-3.685-10.353-2.802-13.469 3.776-17.681 16.393-20.726 28.938l-4.192 16.606z'
        fill='#262626' />
      <path
        d='M139.055 117.932c3.522 3.288 11.388 15.681 18.554 28.673l14.85-31.16 12.058 3.593s-10.911 57.54-21.67 59.885c-10.759 2.345-25.426-23.345-25.426-23.345L120.968 110.4s12.829 2.609 18.087 7.532z'
        fill={colorCustom} />
      <path
        d='M119.77 115.861s16.24 9.135 19.437 24.939c3.197 15.803-3.045 64.128-3.045 64.128l-40.295-1.675s6.567-57.591 2.629-70.127c-3.939-12.535-3.817-16.016 0-17.255 3.816-1.238 14.169-7.846 21.274-.01z'
        fill='#fff' />
      <path
        d='M136.172 205.395l-40.316-1.645a.485.485 0 01-.334-.152.459.459 0 01-.102-.355c.061-.579 6.506-57.642 2.65-69.934-3.98-12.636-3.919-16.473.294-17.843.598-.193 1.39-.538 2.304-.934 4.628-2.03 13.195-5.725 19.376 1.015 1.157.67 16.544 9.916 19.6 25.202 3.136 15.672-2.954 63.793-3.045 64.28a.462.462 0 01-.427.366zm-39.747-2.589l39.372 1.645c.599-4.801 5.917-48.822 2.974-63.56-3.045-15.397-19.062-24.532-19.214-24.623a.272.272 0 01-.122-.092c-5.704-6.313-13.631-2.882-18.372-.832-.933.406-1.735.751-2.385.964-3.156 1.015-3.816 3.573.305 16.687 3.745 11.997-1.919 63.792-2.558 69.811z'
        fill='#262626' />
      <path
        d='M129.778 213.301c-1.076-25.598-3.543-46.324-4.06-53.572-.579-7.937-2.619-30.977-4.811-41.056-2.842-6.273-1.614-8.12-1.614-8.12s16.037-2.254 20.807 21.68c1.411 7.054 4.994 48.172 8.445 80.114l-18.767.954z'
        fill={colorCustom} />
      <path
        d='M120.947 106.31l.071 12.322s-1.248 6.963-8.739 4.832a15.541 15.541 0 01-9.957-8.841l.853-21.315a38.367 38.367 0 001.238-11.439c9.135-.152 16.24-7.024 16.24-7.024s3.126 4.71 4.486 6.192a18.848 18.848 0 012.822 3.715c1.259 2.375 1.208 5.328 1.147 7.957a51.674 51.674 0 01-.924 9.277c-1.177 5.796-7.237 4.324-7.237 4.324z'
        fill='#fff' />
      <path
        clipRule='evenodd'
        d='M112.157 123.91c.904.264 1.84.404 2.782.417a6.37 6.37 0 003.522-.934 7.444 7.444 0 003.045-4.71l-.071-11.774a7.363 7.363 0 004.74-.883 5.894 5.894 0 002.517-3.948c.598-3.084.91-6.217.934-9.359.06-2.537.121-5.684-1.208-8.18a19.212 19.212 0 00-2.883-3.817c-1.319-1.4-4.446-6.04-4.446-6.09a.467.467 0 00-.337-.2.474.474 0 00-.373.119c-.071.071-7.146 6.75-15.956 6.892h-.002c.035.388.246.77.852.844 7.67-.455 13.741-5.333 15.339-6.741.823 1.218 3.106 4.557 4.233 5.795a18.272 18.272 0 012.73 3.624c1.128 2.105 1.118 4.716 1.108 7.1l-.001.634a50.028 50.028 0 01-.924 9.135 4.964 4.964 0 01-2.101 3.36 6.754 6.754 0 01-4.608.66.486.486 0 00-.396.091.473.473 0 00-.173.365l.051 12.231a6.553 6.553 0 01-2.659 4.06 6.68 6.68 0 01-2.701.798 6.687 6.687 0 01-2.79-.382 15.22 15.22 0 01-9.622-8.465h.03c.832-20.899.913-21.234.913-21.234.034-.292.095-.581.183-.862.55-2.216.886-4.477 1.003-6.752l-.901-.772a35.513 35.513 0 01-1.036 7.34c-.109.33-.183.67-.223 1.016 0 .112-.842 21.315-.842 21.315a.334.334 0 000 .172 15.843 15.843 0 0010.271 9.135z'
        fill='#262626'
        fillRule='evenodd' />
      <path
        d='M120.876 112.4s-5.004.223-8.211-3.106c-3.207-3.329-2.741-6.699-2.741-6.699s5.41 3.634 11.023 3.756l-.071 6.049z'
        fill='#262626' />
      <path
        d='M120.653 112.857c-1.076 0-5.369-.203-8.313-3.258-3.329-3.451-2.882-6.912-2.862-7.105a.453.453 0 01.264-.345.42.42 0 01.426 0s5.369 3.552 10.789 3.674a.448.448 0 01.437.447l-.071 6.09a.45.45 0 01-.426.436l-.244.061zm-10.302-9.46a8.828 8.828 0 002.629 5.583c2.507 2.598 6.211 2.933 7.45 2.974l.061-5.177a23.942 23.942 0 01-10.14-3.38z'
        fill='#262626' />
      <path
        d='M116.583 88.65s3.969 5.917 3.045 6.952c-.924 1.035-3.583.345-3.583.345'
        fill='#fff' />
      <path
        clipRule='evenodd'
        d='M117.145 88.71l-.471.943c1.693 2.674 2.864 5.208 2.558 5.644-.619.67-2.517.366-3.136.214a.447.447 0 00-.497.664c.06.103.158.177.273.209a8.31 8.31 0 001.868.233 2.88 2.88 0 002.172-.71c1.029-1.107-1.443-5.177-2.767-7.197z'
        fill='#262626'
        fillRule='evenodd' />
      <path
        d='M124.718 88.914c.375-.015.657-.599.629-1.305-.027-.706-.354-1.266-.729-1.25-.376.014-.657.598-.63 1.304.028.705.355 1.266.73 1.25zM113.554 87.942c.376-.014.657-.599.63-1.304-.028-.706-.355-1.266-.73-1.252-.375.015-.657.6-.629 1.305.027.706.354 1.266.729 1.251z'
        fill='#262626' />
      <path
        d='M119.283 99.073l-3.157-.812s-.639 4.608 1.137 5.014c1.776.406 2.02-4.202 2.02-4.202z'
        fill='#fff' />
      <path
        d='M117.476 103.752c-.104.015-.21.015-.315 0-2.121-.487-1.553-5.034-1.451-5.562a.44.44 0 01.203-.305.404.404 0 01.355-.06l3.157.801a.446.446 0 01.335.457c0 .355-.213 3.451-1.442 4.375a1.34 1.34 0 01-.842.294zm-.964-4.923c-.132 1.472-.071 3.797.852 4.06a.418.418 0 00.386-.091c.609-.457.954-2.152 1.015-3.33l-2.253-.639z'
        fill='#262626' />
      <path
        d='M107.285 87.025c-.822-2.162-3.572-2.964-5.663-2.547a3.541 3.541 0 00-2.873 2.68 6.576 6.576 0 000 2.557 13.19 13.19 0 001.513 4.415c.353.715.88 1.33 1.532 1.787a2.407 2.407 0 002.731-.183'
        fill='#fff' />
      <path
        clipRule='evenodd'
        d='M104.356 84.075a6.454 6.454 0 00-2.856-.095 3.958 3.958 0 00-3.228 3.015 7.022 7.022 0 000 2.74 13.61 13.61 0 001.584 4.629c.39.78.969 1.45 1.685 1.949.43.275.93.423 1.441.426a3.186 3.186 0 001.786-.61.471.471 0 00.194-.481.469.469 0 00-.722-.29 1.945 1.945 0 01-2.222.173 4.38 4.38 0 01-1.371-1.614 12.877 12.877 0 01-1.482-4.324 6.151 6.151 0 010-2.375 3.044 3.044 0 012.518-2.334 5.591 5.591 0 012.451.08l.222-.889z'
        fill='#262626'
        fillRule='evenodd' />
      <path
        d='M77.911 213.302a151.498 151.498 0 003.289-18.686c1.3-14.596 0-64.28 3.106-74.167 1.502-4.719 17.387-8.18 17.387-8.18s15.225 80.55 15.225 102.312l-39.007-1.279z'
        fill={colorCustom} />
      <path
        d='M104.839 171.514c3.736-.64 7.105-2.375 10.607-3.847a45.842 45.842 0 014.283-1.573c1.706-.528 3.34-1.543 5.167-1.594 1.137 0 .842 1.573.416 2.152a5.902 5.902 0 01-1.553 1.319c-1.066.731-3.319 2.03-3.705 3.35 1.418.242 2.855.357 4.294.345a59.53 59.53 0 014.587.7c1.543.295 2.964.64 4.426 1.015 1.307.235 2.594.574 3.847 1.015.294.152.609.376.629.701.071 1.157-2.527 1.015-3.177.954l-11.967-1.198a74.772 74.772 0 0112.403 2.233c.396.062.756.264 1.015.568 1.015 1.533-3.268 1.614-3.745 1.624a65.538 65.538 0 01-6.618-.172l5.38.893c1.198.203 2.405.396 3.593.7a3.786 3.786 0 011.776.863.354.354 0 01.122.234c0 .121-.132.203-.244.253a7.757 7.757 0 01-3.197.569 38.91 38.91 0 01-6.699-.447l6.638.711a2.504 2.504 0 011.624.588.914.914 0 01-.396 1.015 2.467 2.467 0 01-1.136.345 58.89 58.89 0 01-7.349 0 58.301 58.301 0 01-7.988-.507 47.401 47.401 0 01-15.063-4.507'
        fill='#fff' />
      <path
        d='M130.6 185.48c-.792 0-1.563 0-2.334-.061-.772-.06-1.604-.06-2.416 0a61.023 61.023 0 01-8.049-.507 47.943 47.943 0 01-15.225-4.557.48.48 0 01-.213-.63.477.477 0 01.629-.203 46.674 46.674 0 0014.91 4.466c2.638.347 5.298.507 7.958.477.822 0 1.644 0 2.456.061 1.61.106 3.226.078 4.832-.081.326-.02.645-.11.933-.264a.53.53 0 00.244-.416 2.33 2.33 0 00-1.248-.365l-3.116-.335a41.495 41.495 0 01-3.553-.376.474.474 0 01-.386-.528.472.472 0 01.508-.396l3.502.376c1.042.061 2.087.081 3.136.061a7.667 7.667 0 002.801-.426 3.786 3.786 0 00-1.37-.579c-1.167-.294-2.375-.497-3.552-.69l-5.37-.893a.452.452 0 01-.308-.17.47.47 0 01-.044-.509.478.478 0 01.275-.22.47.47 0 01.179-.015 67.48 67.48 0 006.577.162c2.182-.05 3.299-.446 3.431-.7 0-.051 0-.152-.061-.203a1.34 1.34 0 00-.751-.375 73.56 73.56 0 00-12.333-2.254.465.465 0 01-.416-.456v-.051a.481.481 0 01.508-.416l11.967 1.207a4.515 4.515 0 002.608-.314c.061-.061.071-.102.061-.152-.01-.051-.081-.173-.365-.305a10.41 10.41 0 00-2.375-.69c-.477-.102-.955-.193-1.401-.325a43.574 43.574 0 00-4.385-1.015c-1.472-.254-3.045-.528-4.547-.69-.52-.05-1.041-.074-1.563-.071a10.492 10.492 0 01-2.802-.295.447.447 0 01-.284-.223.474.474 0 010-.355c.386-1.279 2.142-2.436 3.421-3.289l.629-.426a4.846 4.846 0 001.279-1.086 1.647 1.647 0 00.223-1.319s-.081-.112-.254-.102a9.142 9.142 0 00-3.319.924c-.558.223-1.136.467-1.725.649a41.688 41.688 0 00-4.233 1.563c-.639.264-1.279.548-1.908.822a37.848 37.848 0 01-8.81 3.045.466.466 0 01-.152-.913 37.416 37.416 0 008.587-2.974l1.918-.842a46.165 46.165 0 014.324-1.594 17.21 17.21 0 001.644-.619 10.607 10.607 0 013.654-1.015 1.182 1.182 0 011.096.609 2.462 2.462 0 01-.294 2.284 5.606 5.606 0 01-1.502 1.319l-.65.437a11.143 11.143 0 00-2.811 2.324c.672.096 1.351.141 2.03.132a14.79 14.79 0 011.644.071c1.543.162 3.045.406 4.628.7 1.584.295 2.995.65 4.456 1.066.427.122.883.213 1.33.305.89.148 1.759.403 2.588.761a1.353 1.353 0 01.903 1.086 1.088 1.088 0 01-.355.883c-.71.68-2.436.639-3.126.578l.396.112c.501.092.952.362 1.269.761a1.084 1.084 0 01.111 1.147c-.385.731-1.806 1.137-4.212 1.188.812.142 1.644.294 2.456.507.76.139 1.464.491 2.03 1.015a.785.785 0 01.244.569.759.759 0 01-.508.66 6.133 6.133 0 01-1.695.487c.076.062.148.13.214.203a.352.352 0 01.081.132 1.373 1.373 0 01-.559 1.593 2.867 2.867 0 01-1.349.416 19.32 19.32 0 01-2.741.132z'
        fill='#262626' />
      <path
        d='M84.245 120.429s-31.232 56.84-20.036 60.656c4.588 1.563 45.675 3.969 45.675 3.969l4.354-17.722-30.775-4.761.782-42.142z'
        fill={colorCustom} />
      <path
        d='M124.672 94.85a7.258 7.258 0 11.042-14.515 7.258 7.258 0 01-.042 14.516zm0-13.57a6.325 6.325 0 00-6.201 7.557 6.325 6.325 0 004.968 4.969 6.322 6.322 0 005.702-10.67 6.333 6.333 0 00-4.469-1.856z'
        fill='#262626' />
      <path
        d='M110.635 93.684a7.248 7.248 0 117.247-7.247 7.26 7.26 0 01-7.247 7.247zm0-13.57a6.324 6.324 0 106.313 6.323 6.33 6.33 0 00-6.313-6.324zM114.248 167.789h-.071l-30.775-4.76a.447.447 0 01-.314-.203.459.459 0 01-.071-.366l7.41-31.972a.469.469 0 01.552-.371.473.473 0 01.37.554l-7.297 31.465 30.288 4.679a.461.461 0 01.304.188.469.469 0 01.081.35.449.449 0 01-.148.317.456.456 0 01-.329.119zM144.79 176.112a.459.459 0 01-.457-.406l-4.842-40.134c-.944-7.856-.944-7.856-.517-7.947l.182.914-.091-.457h.467c.061.69 5.664 47.075 5.725 47.542a.47.47 0 01-.406.518l-.061-.03zM151.712 157.771a.46.46 0 01-.392-.221.457.457 0 01-.024-.449l18.392-36.875a.465.465 0 01.619-.213.478.478 0 01.213.629l-18.392 36.875a.46.46 0 01-.416.254z'
        fill='#262626' />
      <path
        d='M60.21 158.573h-.061a.51.51 0 01-.447-.559c0-.172 1.97-17.387 0-26.055-1.015-4.618-2.517-6.323-3.572-6.942a1.904 1.904 0 00-1.452-.305.517.517 0 01-.64-.335.505.505 0 01.325-.629 2.852 2.852 0 012.223.365c1.807 1.015 3.187 3.583 4.06 7.633 2.03 8.82.092 25.669 0 26.39a.497.497 0 01-.436.437z'
        fill='#fff' />
      <path
        d='M103.865 151.173a.427.427 0 01-.335-.203l-9.389-10.759a.456.456 0 010-.629l6.09-6.222-6.09-5.694a.467.467 0 01-.07-.589c1.014-1.492 5.927-8.952 6.343-9.368a.465.465 0 01.76.501.45.45 0 01-.1.148c-.325.366-3.695 5.4-6.01 8.902l6.091 5.745a.467.467 0 01.142.335.515.515 0 01-.132.335l-6.09 6.252 9.135 10.475a.477.477 0 01-.051.66.486.486 0 01-.294.111zM126.875 148.575a.54.54 0 01-.274-.081.48.48 0 01-.112-.65l7.359-10.485-7.673-6.09a.477.477 0 01-.173-.335.419.419 0 01.122-.345l4.649-4.872-8.12-7.318a.478.478 0 010-.66.466.466 0 01.659 0l8.425 7.643a.443.443 0 01.152.325.42.42 0 01-.132.335l-4.618 4.841 7.623 6.09a.458.458 0 01.091.63l-7.613 10.85a.474.474 0 01-.365.122z'
        fill='#262626' />
      <path
        d='M307.261 106.98c2.141-.091 4.273-.457 6.76-.67 2.314-.203 5.288-1.015 5.328-3.38 0-2.03-2.344-3.613-1.816-5.532.182-.515.461-.99.822-1.4a21.416 21.416 0 00-3.685-29.435 1.202 1.202 0 001.267-.625c.078-.15.124-.313.134-.481a2.627 2.627 0 00-.741-1.868 13.193 13.193 0 00-6.425-3.918 40.773 40.773 0 00-24.015 0c-6.009 1.756-13.195 6.537-12.413 13.784.284 2.598 2.324 5.146 4.943 5.257 1.34 7.765 5.41 13.063 10.525 18.686a31.237 31.237 0 0012.596 8.567 17.238 17.238 0 006.72 1.015z'
        fill='#fff' />
      <path
        d='M306.317 107.508a17.26 17.26 0 01-5.938-1.015 31.594 31.594 0 01-12.809-8.709c-4.73-5.186-9.085-10.525-10.577-18.544-2.801-.365-4.74-3.106-5.024-5.684-.771-7.105 5.857-12.302 12.779-14.322a41.4 41.4 0 0124.309 0 13.936 13.936 0 016.669 4.06 3.118 3.118 0 01.852 2.233 1.87 1.87 0 01-.801 1.34 21.917 21.917 0 012.984 29.435l-.071.092a3.907 3.907 0 00-.67 1.136 3.492 3.492 0 00.802 2.558c.6.836.952 1.825 1.015 2.852 0 2.122-2.203 3.563-5.796 3.868-1.015.091-2.03.213-2.933.314-1.33.163-2.579.315-3.847.366l-.944.02zm-9.044-49.075c-4.144.009-8.266.61-12.241 1.786-4.892 1.431-12.87 5.806-11.997 13.236.244 2.233 2.03 4.71 4.456 4.82a.497.497 0 01.477.417c1.248 7.217 4.76 12.18 10.404 18.422a30.741 30.741 0 0012.393 8.435 16.593 16.593 0 006.516.924c1.238 0 2.466-.203 3.776-.356a97.369 97.369 0 012.974-.314c1.045-.092 4.821-.589 4.862-2.883a4.65 4.65 0 00-.894-2.314c-.609-1.015-1.248-2.101-.903-3.34a4.502 4.502 0 01.832-1.481l.071-.092A20.874 20.874 0 00314.396 67a.512.512 0 01-.122-.64.5.5 0 01.599-.243.398.398 0 00.366-.07.85.85 0 00.375-.6 2.191 2.191 0 00-.629-1.502c-1.665-2.03-4.334-3.136-6.192-3.745a36.706 36.706 0 00-11.52-1.766z'
        fill='#262626' />
      <path
        d='M275.349 90.07s-5.542 9.135-4.253 10.922c1.289 1.786 5.288.416 5.288.416'
        fill='#fff' />
      <path
        d='M273.492 102.403a3.307 3.307 0 01-2.812-1.168c-1.37-1.918 2.893-9.267 4.233-11.48a.503.503 0 01.718-.206.505.505 0 01.145.735c-2.579 4.252-4.944 9.419-4.263 10.352.872 1.229 3.684.589 4.699.244a.52.52 0 01.65.315.507.507 0 01-.315.639 10.4 10.4 0 01-3.055.569z'
        fill='#262626' />
      <path
        d='M276.151 78.256c-3.624 3.207-2.294 9.612-2.101 13.844.271 5.907.68 11.805 1.228 17.692.345 3.735 10.049 3.441 11.713 2.253l-.944 14.849s4.7 1.097 12.383-2.821c7.684-3.918 7.684-5.776 7.684-5.776l-1.31-17.062s-6.394.274-10.454-7.206c-4.06-7.48-4.405-19.184-4.405-19.184s-10.262.295-13.794 3.41z'
        fill='#fff' />
      <path
        d='M287.793 127.523a8.412 8.412 0 01-1.867-.162.485.485 0 01-.386-.528l.893-14.017c-2.172.68-6.861.772-9.511-.446a3.172 3.172 0 01-2.151-2.558 397.826 397.826 0 01-1.229-17.722c0-.7-.091-1.462-.162-2.274-.345-4.06-.771-9.135 2.436-11.936 3.634-3.208 13.692-3.563 14.119-3.573a.427.427 0 01.355.132.489.489 0 01.162.355c0 .122.345 11.703 4.314 18.99 3.867 7.106 9.775 6.933 10.018 6.923a.504.504 0 01.361.124.499.499 0 01.167.343l1.299 17.052c0 .406-.375 2.395-7.957 6.263a24.207 24.207 0 01-10.861 3.034zm-1.218-1.086c1.299.143 5.501.274 11.622-2.852 7.003-3.573 7.409-5.349 7.409-5.369l-1.268-16.504c-1.635-.081-6.892-.893-10.465-7.44-3.573-6.547-4.304-16.544-4.415-18.93-2.081.112-10.049.721-12.972 3.3-2.822 2.486-2.416 7.256-2.091 11.093.071.822.132 1.594.162 2.314a395.01 395.01 0 001.229 17.661c.061.711.588 1.289 1.563 1.736 2.832 1.309 8.262.934 9.348.162a.5.5 0 01.538 0 .502.502 0 01.264.477l-.924 14.352z'
        fill='#262626' />
      <path d='M275.248 105.356s4.689 2.639 6.942-2.192z' fill='#fff' />
      <path
        d='M278.11 106.584a6.817 6.817 0 01-3.045-.792.493.493 0 01-.257-.502.507.507 0 01.754-.381 5.348 5.348 0 003.756.477 4.24 4.24 0 002.476-2.436.536.536 0 01.118-.161.525.525 0 01.171-.103.515.515 0 01.651.306.509.509 0 01-.016.385 5.188 5.188 0 01-3.096 2.974 4.912 4.912 0 01-1.512.233z'
        fill='#262626' />
      <path
        d='M287.011 95.277a5.847 5.847 0 011.584-3.258 10.291 10.291 0 012.101-2.213 4.74 4.74 0 013.157-.923 3.42 3.42 0 012.344 1.309 4.28 4.28 0 01.782 2.253c.325 3.451-1.929 7.105-5.654 9.135l.315-.294'
        fill='#fff' />
      <path
        d='M291.305 102.057a.525.525 0 01-.416-.213.508.508 0 01.071-.67l.325-.294a.501.501 0 01.385-.132c3.167-1.969 5.075-5.217 4.791-8.252a3.806 3.806 0 00-.69-2.03 2.909 2.909 0 00-2.03-1.106 4.225 4.225 0 00-2.812.832c-.776.6-1.46 1.312-2.03 2.111a5.55 5.55 0 00-1.481 2.944.509.509 0 01-1.015 0 6.27 6.27 0 011.695-3.573 10.616 10.616 0 012.202-2.304 5.187 5.187 0 013.512-1.015 3.933 3.933 0 012.69 1.512c.529.738.835 1.611.883 2.517.335 3.624-2.03 7.481-5.918 9.592a.524.524 0 01-.162.081zM286.991 112.015s4.964-1.746 7.176-5.288c0 0 0 9.003-7.592 11.906l.416-6.618z'
        fill='#262626' />
      <path
        d='M286.575 119.14a.477.477 0 01-.304-.102.493.493 0 01-.16-.191.492.492 0 01-.043-.245l.416-6.618a.508.508 0 01.335-.447c.05 0 4.831-1.735 6.912-5.075a.511.511 0 01.247-.212.513.513 0 01.595.167.507.507 0 01.102.309c0 .092-.081 9.389-7.927 12.383a.49.49 0 01-.173.031zm.903-6.76l-.345 5.471c4.619-2.172 5.968-6.892 6.364-9.43a17.563 17.563 0 01-6.019 3.979v-.02zM278.986 87.9c.45-.093.622-1.095.383-2.236-.239-1.142-.797-1.99-1.247-1.896-.45.094-.621 1.095-.382 2.236.238 1.142.797 1.99 1.246 1.897z'
        fill='#262626' />
      <path
        d='M251.202 179.39c-2.649 1.543-6.09.538-8.627-1.198a17.391 17.391 0 01-7.389-13.012 8.702 8.702 0 01.944-5.014c6.871-11.5 25.892 12.931 15.072 19.224z'
        fill='#fff' />
      <path
        d='M248.249 180.649a10.926 10.926 0 01-5.938-2.03 17.932 17.932 0 01-7.582-13.358 9.018 9.018 0 011.015-5.278c1.533-2.568 3.755-3.654 6.465-3.156 5.299 1.015 11.399 8.12 12.546 14.616.66 3.785-.518 6.759-3.309 8.394a6.164 6.164 0 01-3.197.812zm-7.288-23.041a5.074 5.074 0 00-4.425 2.832 8.023 8.023 0 00-.883 4.74 16.998 16.998 0 007.186 12.657c2.253 1.553 5.572 2.669 8.12 1.177 3.116-1.816 3.278-5.075 2.862-7.429-1.076-6.09-6.912-12.972-11.804-13.875a6.456 6.456 0 00-1.056-.102z'
        fill='#262626' />
      <path
        d='M201.122 183.399l47.33-.578-21.924-55.795-47.33.569 21.924 55.804z'
        fill='#fff' />
      <path
        d='M201.122 183.856a.433.433 0 01-.426-.294l-21.934-55.825a.454.454 0 010-.426.44.44 0 01.375-.203l47.33-.579a.559.559 0 01.436.295l21.934 55.825a.466.466 0 01-.426.629l-47.329.568.04.01zm-21.254-55.824l21.569 54.881 46.345-.569-21.569-54.871-46.345.559z'
        fill='#262626' />
      <path
        d='M202.736 182.039l47.33-.568-21.924-55.795-47.33.569 21.924 55.794z'
        fill='#fff' />
      <path
        d='M202.736 182.506a.442.442 0 01-.426-.294l-21.934-55.825a.475.475 0 01-.049-.213c0-.074.016-.147.049-.213a.463.463 0 01.375-.213l47.34-.569a.525.525 0 01.436.295l21.924 55.825a.454.454 0 01-.051.426.46.46 0 01-.375.213l-47.33.568h.041zm-21.244-55.825l21.559 54.871 46.345-.558-21.569-54.871-46.335.558z'
        fill='#262626' />
      <path
        d='M198.341 154.573a.518.518 0 01-.507-.507.507.507 0 01.507-.508l33.779-.406a.51.51 0 01.508.498.517.517 0 01-.508.517l-33.779.406zM200.574 160.258a.51.51 0 01-.359-.867.509.509 0 01.359-.148l33.779-.406a.484.484 0 01.372.131.482.482 0 01.146.366.5.5 0 01-.141.362.508.508 0 01-.356.156l-33.79.406h-.01zM202.817 165.942a.507.507 0 110-1.015l33.79-.406a.507.507 0 110 1.015l-33.79.406zM217.413 171.483a.513.513 0 01-.507-.507.507.507 0 01.507-.508l21.417-.263a.506.506 0 110 1.015l-21.417.263zM196.555 150.006a.498.498 0 01-.477-.315l-7.288-18.594a.525.525 0 01.059-.463.521.521 0 01.408-.228l18.412-.223a.512.512 0 01.477.315l7.298 18.595a.5.5 0 01-.051.467.49.49 0 01-.416.223l-18.412.223h-.01zm-6.567-18.595l6.902 17.58 17.336-.213-6.912-17.58-17.326.213z'
        fill='#D1D3D4' />
      <path
        d='M196.849 144.393c-1.015-1.198-.67-2.598-.741-3.959-.071-1.36-.609-2.679-.66-3.978a5.131 5.131 0 012.619-4.243 2.64 2.64 0 013.096.112c.497-.782 1.735-.721 2.69-.315a8.706 8.706 0 013.319 2.69 10.404 10.404 0 012.212 4.567 5.645 5.645 0 01-.964 4.537 6.09 6.09 0 01-3.847 2.03 16.38 16.38 0 01-4.669-.081 5.003 5.003 0 01-2.72-1.015 3.638 3.638 0 01-.335-.345z'
        fill='#fff' />
      <path
        d='M202.787 146.443a22.31 22.31 0 01-2.944-.223 5.392 5.392 0 01-2.994-1.096 3.892 3.892 0 01-.396-.406 4.6 4.6 0 01-.842-3.33v-.923a12.321 12.321 0 00-.315-1.909 11.16 11.16 0 01-.345-2.03 5.612 5.612 0 012.872-4.709 3.136 3.136 0 013.269-.112 2.949 2.949 0 012.964-.122 9.148 9.148 0 013.522 2.842 10.93 10.93 0 012.324 4.791 6.144 6.144 0 01-1.076 4.943 6.62 6.62 0 01-4.161 2.193c-.623.081-1.251.112-1.878.091zm-5.552-2.375c.09.109.188.211.294.304a4.42 4.42 0 002.446.843c1.494.245 3.015.275 4.517.091a5.596 5.596 0 003.532-1.827 5.067 5.067 0 00.863-4.121 10.026 10.026 0 00-2.111-4.344 8.282 8.282 0 00-3.116-2.537c-.762-.315-1.746-.386-2.03.121a.456.456 0 01-.335.224.503.503 0 01-.396-.092 2.127 2.127 0 00-2.538-.081 4.623 4.623 0 00-2.365 3.786c.045.641.15 1.277.315 1.898.173.666.288 1.345.345 2.03v1.015c-.15.932.069 1.886.609 2.659l-.03.031z'
        fill='#D1D3D4' />
      <path
        d='M205.933 145.459l.071.081c.172.233.355.456.549.67a15.783 15.783 0 011.816 3.116h4.842a9.542 9.542 0 00-.386-.721c-1.654-2.811-3.41-3.948-4.791-4.374a4.697 4.697 0 00-2.243-.142 2.404 2.404 0 00-.426.111s-.102.345.568 1.259z'
        fill='#D1D3D4' />
      <path
        d='M205.385 142.972l1.198 3.228s.335 1.877-1.807 1.796a4.955 4.955 0 01-1.88-.511 4.954 4.954 0 01-1.54-1.194l-1.827-5.654a10.762 10.762 0 00-.772-3.045 6.197 6.197 0 003.543-2.842s1.268 1.015 1.756 1.35c.392.224.757.493 1.086.802.493.588.84 1.283 1.015 2.03.285.813.502 1.648.649 2.497.254 1.543-1.421 1.543-1.421 1.543z'
        fill='#fff' />
      <path
        d='M204.918 148.504h-.162a5.518 5.518 0 01-3.786-1.898.826.826 0 01-.081-.163c-1.36-4.212-1.716-5.318-1.807-5.643a1.259 1.259 0 01-.061-.366 9.946 9.946 0 00-.71-2.689.478.478 0 010-.406.493.493 0 01.325-.264 5.696 5.696 0 003.217-2.588.521.521 0 01.576-.257.479.479 0 01.195.104c.346.285 1.32 1.015 1.706 1.31.421.241.813.531 1.167.862a5.372 5.372 0 011.187 2.213c.302.837.527 1.7.67 2.578a1.784 1.784 0 01-.365 1.502c-.242.276-.56.474-.914.569l1.015 2.649a2.168 2.168 0 01-.416 1.817 2.166 2.166 0 01-1.756.67zm-3.116-2.467a4.53 4.53 0 003.045 1.452 1.348 1.348 0 001.076-.315c.182-.26.258-.579.213-.893l-1.177-3.136a.547.547 0 01.061-.467.53.53 0 01.416-.214c.312.002.613-.114.842-.324a.83.83 0 00.122-.691 14.248 14.248 0 00-.619-2.405 4.593 4.593 0 00-.944-1.807 5.223 5.223 0 00-1.015-.731c-.325-.203-.944-.69-1.37-1.015a6.679 6.679 0 01-3.045 2.406c.293.785.487 1.603.578 2.436v.173c0 .04 1.574 4.79 1.817 5.531z'
        fill='#D1D3D4' />
      <path
        d='M199.001 137.775a1.117 1.117 0 00-1.238 0 1.22 1.22 0 00-.112 1.32c.206.532.49 1.032.842 1.482.189.285.438.524.731.7a.742.742 0 00.893-.071'
        fill='#fff' />
      <path
        d='M199.671 141.896a1.484 1.484 0 01-.67-.162 2.743 2.743 0 01-.914-.853 6.464 6.464 0 01-.913-1.614 1.67 1.67 0 01.254-1.878 1.606 1.606 0 011.827-.05.508.508 0 01-.121.933.512.512 0 01-.387-.05.635.635 0 00-.315-.123.638.638 0 00-.334.052c-.112.101-.092.426 0 .771.188.486.448.941.771 1.35.143.225.333.416.558.558a.37.37 0 00.274 0 .503.503 0 01.537-.166.519.519 0 01.245.816 1.016 1.016 0 01-.812.416zM197.225 147.428c.073.687.206 1.366.396 2.03h5.146c-.609-1.249-1.147-2.365-1.543-3.157-.081-.152-.152-.304-.213-.426l-.427-.863c-.505.173-1 .377-1.482.609-.913.416-1.908 1.076-1.877 1.807z'
        fill='#D1D3D4' />
      <path
        d='M206.075 139.04c.604-.744.414-1.901-.426-2.583-.84-.682-2.01-.632-2.615.112-.604.743-.414 1.9.426 2.582.839.682 2.01.632 2.615-.111z'
        fill='#fff' />
      <path
        d='M204.797 140.16a2.703 2.703 0 01-2.477-1.745 2.233 2.233 0 01.112-1.827 2.029 2.029 0 011.36-1.015 2.643 2.643 0 011.838.272c.559.31.988.811 1.207 1.412a2.296 2.296 0 01-.102 1.827 2.028 2.028 0 01-1.37 1.015 2.218 2.218 0 01-.568.061zm-1.523-2.091a1.664 1.664 0 001.817 1.015 1.105 1.105 0 00.71-.527 1.222 1.222 0 000-1.015 1.628 1.628 0 00-.726-.834 1.623 1.623 0 00-1.09-.181 1.02 1.02 0 00-.701.527 1.238 1.238 0 000 1.015h-.01z'
        fill='#D1D3D4' />
      <path
        d='M202.745 138.71c.604-.748.409-1.906-.434-2.588-.844-.681-2.018-.628-2.622.12-.604.748-.409 1.906.435 2.588.844.681 2.017.628 2.621-.12z'
        fill='#fff' />
      <path
        d='M201.051 140.719a2.701 2.701 0 01-2.476-1.746 2.243 2.243 0 01.111-1.827 2.027 2.027 0 011.36-1.015 2.652 2.652 0 013.045 1.685 2.292 2.292 0 01-.101 1.827 2.026 2.026 0 01-1.37 1.015 2.373 2.373 0 01-.569.061zm-1.522-2.091a1.653 1.653 0 001.817 1.015 1.126 1.126 0 00.71-.528 1.23 1.23 0 000-1.015 1.64 1.64 0 00-1.817-1.015 1.074 1.074 0 00-.7.528 1.216 1.216 0 000 1.015h-.01z'
        fill='#D1D3D4' />
      <path
        d='M202.563 138.598s1.594 1.309 1.452 1.634c-.142.325-.903.314-.903.314'
        fill='#fff' />
      <path
        d='M203.152 141.054h-.05a.508.508 0 010-1.015h.223a10.325 10.325 0 00-1.107-1.015.517.517 0 01-.071-.721.514.514 0 01.721-.071c1.888 1.563 1.695 2.03 1.583 2.243-.223.518-.994.579-1.299.579z'
        fill='#D1D3D4' />
      <path
        d='M203.558 142.221a2.71 2.71 0 01-.913-.162.525.525 0 01-.298-.26.535.535 0 01-.05-.196.505.505 0 01.693-.499 1.935 1.935 0 001.857-.406.527.527 0 01.165-.111.522.522 0 01.67.273.495.495 0 010 .387.512.512 0 01-.114.162 3.135 3.135 0 01-2.01.812z'
        fill='#D1D3D4' />
      <path
        d='M253.222 168.124a20.161 20.161 0 00-7.541-9.643 15.116 15.116 0 00-5.552-2.659c-2.152-.365-2.589 1.756-.904 2.913l4.233 2.883c.304.213.67.406.954.649.487.437.416.203.315.762a10.768 10.768 0 00.253 5.237 25.404 25.404 0 001.604 3.695'
        fill='#fff' />
      <path
        d='M246.645 172.427a.46.46 0 01-.416-.253 26.714 26.714 0 01-1.644-3.766 11.374 11.374 0 01-.264-5.461v-.162l-.193-.163a3.959 3.959 0 00-.579-.406l-.335-.213-4.242-2.913a2.354 2.354 0 01-1.117-2.72 2.032 2.032 0 012.355-1.015 15.675 15.675 0 015.735 2.73 20.713 20.713 0 017.714 9.866.467.467 0 01-.63.586.465.465 0 01-.243-.261 19.682 19.682 0 00-7.369-9.429 14.821 14.821 0 00-5.369-2.578c-.67-.112-1.168.06-1.33.456-.163.396 0 1.086.771 1.614l4.233 2.883.304.203c.245.14.476.303.691.487l.223.183a.657.657 0 01.284.801v.203a10.45 10.45 0 00.233 5.015 26.427 26.427 0 001.584 3.633.463.463 0 01.053.174.46.46 0 01-.111.337.427.427 0 01-.145.108.392.392 0 01-.193.061z'
        fill='#262626' />
      <path
        d='M228.091 243.335h51.714v-42.447h-51.714v42.447z'
        fill='#D1D3D4' />
      <path
        d='M279.805 243.843H228.04a.508.508 0 01-.508-.508v-42.437a.51.51 0 01.508-.507h51.765a.507.507 0 01.507.507v42.437a.507.507 0 01-.507.508zm-51.207-1.015h50.75v-41.422h-50.75v41.422z'
        fill='#D1D3D4' />
      <path d='M232.963 200.888h43.939v-5.786h-43.939v5.786z' fill='#fff' />
      <path
        d='M276.902 201.355h-43.939a.47.47 0 01-.467-.457v-5.796a.467.467 0 01.467-.456h43.939a.462.462 0 01.467.456v5.796a.472.472 0 01-.14.324.47.47 0 01-.327.133zm-43.452-.924h43.005v-4.862H233.45v4.862z'
        fill='#262626' />
      <path d='M169.799 194.869h113.508v-9.663H169.799v9.663z' fill='#fff' />
      <path
        d='M283.307 195.336H169.799a.452.452 0 01-.326-.137.464.464 0 01-.13-.33v-9.653a.455.455 0 01.456-.466h113.508a.469.469 0 01.467.466v9.653a.465.465 0 01-.467.467zm-113.041-.924H282.85v-8.739H170.266v8.739z'
        fill='#262626' />
      <path d='M53.48 194.869h124.257v-9.663H53.48v9.663z' fill='#fff' />
      <path
        d='M177.737 195.336H53.47a.45.45 0 01-.326-.137.46.46 0 01-.13-.33v-9.653a.463.463 0 01.13-.329.456.456 0 01.326-.137h124.267a.47.47 0 01.33.136.471.471 0 01.137.33v9.653a.468.468 0 01-.467.467zm-123.83-.924H177.27v-8.739H53.937l-.03 8.739z'
        fill='#262626' />
      <path
        d='M279.653 129.675l2.314-9.602 33.231-5.805.863 11.581-36.408 3.826z'
        fill='#fff' />
      <path
        d='M279.653 130.183a.511.511 0 01-.398-.197.508.508 0 01-.1-.432l2.315-9.602a.501.501 0 01.406-.386l33.241-5.796a.532.532 0 01.396.102.524.524 0 01.193.365l.862 11.571a.517.517 0 01-.456.548l-36.409 3.817-.05.01zm2.72-9.663l-2.03 8.577 35.2-3.695-.781-10.525-32.389 5.643z'
        fill='#262626' />
      <path
        d='M341.588 132.7s-14.981-14.017-44.579-10.048c-29.597 3.968-26.816 18.27-28.947 32.327-2.132 14.058 0 65.011 0 65.011s-39.362-6.679-43.645 0c-4.284 6.679-.691 24.695-.691 24.695h45.553l63.468-5.187 8.841-106.798z'
        fill={colorCustom} />
      <path
        d='M287.59 229.125s8.688-97.44 21.985-108.442c13.296-11.003 49.735-7.105 54.81 6.09 5.075 13.195-17.691 97.835-22.736 109.274-5.045 11.44-7.105 10.912-31.12 10.912-15.225 0-71.669 4.121-75.79-3.664-4.121-7.785 8.912-15.063 52.851-14.17z'
        fill='#262626' />
      <path
        d='M266.813 248.522c-17.255 0-30.45-1.107-32.531-4.974a5.395 5.395 0 010-5.593c4.06-6.567 22.818-9.855 52.851-9.256.721-7.846 9.135-97.643 22.097-108.362 8.901-7.369 26.908-7.856 39.321-4.577 8.617 2.273 14.352 6.09 16.149 10.891 5.217 13.753-17.925 98.678-22.736 109.62-4.933 11.165-7.156 11.165-28.491 11.165h-3.045c-3.157 0-8.181.182-14.007.395-10.252.376-20.493.691-29.608.691zm13.804-19.001c-25.568 0-42.011 3.187-45.533 8.901a4.491 4.491 0 000 4.71c3.136 5.907 41.006 4.547 61.357 3.816 5.826-.213 10.86-.396 14.037-.396h3.045c21.224 0 22.98 0 27.669-10.647 5.177-11.764 27.608-96.049 22.726-108.94-1.695-4.466-7.217-8.12-15.54-10.343-16.351-4.324-32.053-.954-38.57 4.405-12.981 10.739-21.721 107.195-21.802 108.159a.466.466 0 01-.446.416 418.179 418.179 0 00-6.943-.081z'
        fill='#262626' />
      <path
        d='M262.52 204.765c-6.09.822-12.597 2.619-16.311 7.511-4.609 6.09-3.35 14.606-1.878 22.086 2.876.271 5.713.867 8.455 1.777a24.842 24.842 0 01-1.198-13.591 9.226 9.226 0 012.832-5.603 10.598 10.598 0 015.359-1.807c12.18-1.654 23.223.193 35.18 1.716 1.929-7.004-.7-10.891-7.359-11.845a91.047 91.047 0 00-25.08-.244z'
        fill='#262626' />
      <path
        d='M252.786 236.535h-.142a37.439 37.439 0 00-8.354-1.756.446.446 0 01-.396-.356c-1.502-7.622-2.72-16.24 1.959-22.441 4.121-5.441 11.45-6.994 16.606-7.694a91.774 91.774 0 0125.202.254c3.441.487 5.847 1.756 7.166 3.765 1.32 2.01 1.553 4.984.538 8.638a.467.467 0 01-.487.325l-3.786-.497c-10.526-1.381-20.463-2.69-31.272-1.218-1.835.093-3.61.682-5.136 1.705-1.31 1.015-2.182 2.801-2.68 5.349a24.601 24.601 0 001.178 13.337.443.443 0 01-.092.467.458.458 0 01-.304.122zm-8.12-2.629c2.492.255 4.953.751 7.348 1.482a25.613 25.613 0 01-.913-12.972c.538-2.761 1.522-4.679 2.994-5.867a11.164 11.164 0 015.583-1.908c10.921-1.482 20.919-.172 31.465 1.228l3.4.437c.822-3.187.639-5.725-.548-7.521-1.188-1.797-3.37-2.924-6.537-3.38a90.407 90.407 0 00-24.959-.244c-4.993.67-12.088 2.172-16.016 7.338-4.304 5.786-3.218 14.048-1.777 21.407h-.04z'
        fill='#262626' />
      <path
        d='M283.469 227.095a.435.435 0 01-.203 0l-15.408-6.607a.513.513 0 01-.258-.278.506.506 0 01.654-.656l15.408 6.618a.49.49 0 01.277.272.512.512 0 01.038.194.514.514 0 01-.041.193.5.5 0 01-.467.264z'
        fill='#262626' />
      <path d='M169.799 248.096h63.164v-53.217h-63.164v53.217z' fill='#fff' />
      <path
        d='M232.963 248.552h-63.164a.452.452 0 01-.326-.137.464.464 0 01-.13-.33v-53.216a.46.46 0 01.456-.457h63.164a.467.467 0 01.467.457v53.216a.465.465 0 01-.467.467zm-62.697-.923h62.23v-52.293h-62.23v52.293z'
        fill='#262626' />
      <path d='M58.9 248.096H169.8v-53.217H58.9v53.217z' fill='#fff' />
      <path
        d='M169.799 248.552H58.87a.445.445 0 01-.333-.133.464.464 0 01-.134-.334v-53.216a.455.455 0 01.467-.457h110.929a.47.47 0 01.467.457v53.216a.468.468 0 01-.467.467zm-110.432-.923h109.976v-52.293H59.367v52.293z'
        fill='#262626' />
      <path
        d='M226.558 240.889h-49.369a.504.504 0 01-.359-.149.503.503 0 01-.149-.358v-37.779a.507.507 0 01.508-.507h49.369a.518.518 0 01.508.507v37.779a.507.507 0 01-.508.507zm-48.862-1.015h48.355v-36.763h-48.355v36.763z'
        fill='#D1D3D4' />
      <path
        d='M201.67 215.474a3.885 3.885 0 01-3.598-2.393 3.885 3.885 0 012.826-5.307 3.893 3.893 0 013.994 1.651c.427.64.656 1.392.656 2.161a3.898 3.898 0 01-3.878 3.888zm0-6.75a2.87 2.87 0 00-2.662 1.768 2.878 2.878 0 002.094 3.922 2.877 2.877 0 003.431-2.828 2.871 2.871 0 00-2.863-2.862z'
        fill='#D1D3D4' />
      <path
        d='M195.712 162.338a59.331 59.331 0 001.949 5.41 70.354 70.354 0 00-6.963-5.156 2.31 2.31 0 00-1.532-.528 2.135 2.135 0 00-1.391 1.289c-2.091 4.06-1.086 9.216 1.441 13.053 4.06 6.09 11.013 11.388 18.534 10.972.489.009.97-.117 1.391-.365.306-.261.555-.582.731-.944a87.142 87.142 0 003.501-6.973c.231-.373.311-.819.224-1.249a1.81 1.81 0 00-.853-.842c-5.38-3.39-8.364-8.354-11.886-13.378-.71-1.015-2.334-4.689-3.867-4.628-1.715.091-1.675 2.05-1.279 3.339z'
        fill='#fff' />
      <path
        d='M206.928 187.865c-7.846 0-14.596-5.958-18.077-11.165-2.862-4.344-3.441-9.652-1.462-13.52a2.46 2.46 0 011.706-1.532 2.729 2.729 0 011.857.599 67.766 67.766 0 015.613 4.06 59.621 59.621 0 01-1.289-3.776 3.962 3.962 0 01.183-3.177 1.88 1.88 0 011.532-.771c1.431 0 2.741 2.192 3.675 3.836.182.349.381.687.598 1.015l1.279 1.858c3.045 4.354 5.837 8.465 10.465 11.388a1.775 1.775 0 01.812 2.68c-1.015 2.375-2.253 4.729-3.522 7.003a3.21 3.21 0 01-.873 1.096 2.982 2.982 0 01-1.634.447c-.284-.051-.579-.041-.863-.041zm-17.58-25.375h-.111c-.366.051-.701.396-1.015 1.015-1.827 3.573-1.269 8.516 1.421 12.576 3.461 5.248 10.292 11.165 18.107 10.769.401.014.799-.084 1.147-.284.255-.217.459-.488.599-.792a91.841 91.841 0 003.492-6.922c.163-.275.235-.595.203-.913-.082-.244-.396-.437-.67-.609-4.791-3.045-7.674-7.207-10.729-11.642l-1.279-1.858c-.172-.233-.385-.619-.639-1.015-.68-1.187-1.888-3.4-2.832-3.37a1.019 1.019 0 00-.812.386c-.167.37-.259.77-.27 1.176-.01.406.061.811.209 1.189a57.297 57.297 0 001.929 5.369.463.463 0 01-.163.548.445.445 0 01-.568 0 66.998 66.998 0 00-6.912-5.075 2.25 2.25 0 00-1.107-.517v-.031z'
        fill='#262626' />
      <path
        d='M294.35 133.949s-6.09 62.27-26.979 61.915c-20.888-.356-64.96-6.892-64.96-7.806 0-.913 5.431-17.255 5.431-17.255s46.842 4.883 51.419-2.446c4.578-7.328 11.673-30.389 11.673-30.389'
        fill={colorCustom} />
      <path
        d='M268.975 195.63c-17.468 0-48.872-4.06-50.608-4.283a.509.509 0 01-.436-.569.516.516 0 01.568-.446c19.092 2.497 56.393 6.333 60.839 3.045 5.583-4.111 14.373-40.529 14.454-40.905a.53.53 0 01.619-.375.525.525 0 01.375.619c-.365 1.512-8.962 37.149-14.839 41.483-1.401.995-5.501 1.431-10.972 1.431z'
        fill='#262626' />
      <path
        d='M299.506 230.597h-.081a.489.489 0 01-.319-.218.488.488 0 01-.067-.381c7.349-33.332 21.051-97.44 20.371-101.5-1.116-6.678-7.541-5.724-7.815-5.684a.513.513 0 01-.498-.809.519.519 0 01.335-.206c.082 0 7.684-1.167 8.973 6.517.893 5.267-19.508 97.957-20.371 101.895a.514.514 0 01-.528.386z'
        fill='#fff' />
    </Svg>
  )
}

export default React.memo(JobInterviewSvg)