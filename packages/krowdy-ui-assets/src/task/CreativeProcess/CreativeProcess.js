import React from 'react'
import Svg from '../../Svg'
import useGetColor from '../../useGetColor'

const CreativeProcessSvg = ({ width, height, color }) => {
  const colorCustom = useGetColor({ color })

  return (
    <Svg
      height={height}
      width={width}>
      <path
        d='M363.91 151.031c.245-3.152.184-6.32-.183-9.46a49.594 49.594 0 00-16.057-30.734c-9.135-8.029-15.56-5.593-26.786-7.592a22.968 22.968 0 00-13.408 1.684c.589-17.336-6.222-31.465-19.914-42.112-28.065-21.772-61.002-12.728-82.916 12.028-10.069-18.32-25.466-31.76-47.827-27.943-19.224 3.278-35.281 20.209-37.555 39.585-8.12-3.045-17.529-1.624-25.375 2.182s-14.474 9.724-20.685 15.854c-7.491 7.379-14.738 15.357-18.9 25.01-2.821 6.547-2.831 13.246-2.913 20.229 0 1.157 2.274 18.696 4.304 16.991-30.765 25.832-.873 73.537 31.18 80.642 14.211 3.156 30.075-.274 40.875-10.069a123.837 123.837 0 0043.452 18.463c21.467 4.578 44.487 6.333 65.65-.629 5.38-1.767 10.089-4.477 15.225-6.801 6.212-2.822 7.207-.345 13.672 1.736 10.861 3.491 22.888 2.365 33.658-.914 11.51-3.502 23.68-11.398 24.522-23.406 12.282.843 25.182-4.547 31.922-14.839 6.739-10.292 6.09-25.314-2.629-33.992 1.593 1.583 9.013-14.86 9.348-16.393a65.548 65.548 0 001.34-9.52z'
        fill='#fff' />
      <path
        d='M205.793 260.265a167.275 167.275 0 01-34.703-4.06 125.25 125.25 0 01-43.3-18.321c-10.566 9.399-26.247 13.195-41.026 9.927-19.285-4.273-38.215-23.517-43.188-43.817-3.563-14.454.375-27.649 11.074-37.007-2.183-2.467-3.776-16.626-3.766-17.255v-.488c.081-6.922.162-13.448 2.953-19.944 4.243-9.795 11.643-17.915 19.011-25.142 6.11-5.968 12.84-12.13 20.808-15.976 8.577-4.151 17.712-5.075 25.192-2.426 2.558-19.285 18.737-36.103 37.89-39.382 19.448-3.319 36.043 6.212 48.01 27.578 11.104-12.302 24.918-20.524 38.955-23.071 15.55-2.822 30.775 1.167 44.163 11.53 13.723 10.647 20.493 24.685 20.138 41.737a23.541 23.541 0 0112.971-1.401c2.826.49 5.675.829 8.537 1.015 6.627.498 11.855.883 18.493 6.75a50.253 50.253 0 0116.24 31.049c.37 3.174.432 6.376.183 9.561h-.508.508a68.36 68.36 0 01-1.381 9.551c-.264 1.198-6.029 14.464-8.841 16.596 8.019 8.678 8.973 23.345 2.03 33.951-6.496 9.927-18.96 15.814-31.881 15.104-.812 7.977-7.724 18.148-24.847 23.345-8.617 2.618-21.508 4.912-33.952.913a42.554 42.554 0 01-4.303-1.675c-3.106-1.37-4.669-2.03-9.003-.081-1.594.721-3.177 1.502-4.7 2.253a82.85 82.85 0 01-10.546 4.568 99.288 99.288 0 01-31.211 4.618zm-78.043-23.487c.1.003.197.031.284.081a123.951 123.951 0 0043.27 18.392c25.943 5.532 47.339 5.329 65.396-.609a81.252 81.252 0 0010.373-4.517c1.533-.751 3.116-1.532 4.73-2.263 4.74-2.162 6.659-1.32 9.836.071a40.612 40.612 0 004.191 1.634c12.18 3.928 24.868 1.675 33.353-.913 16.991-5.167 23.63-15.225 24.178-22.95a.515.515 0 01.17-.35.517.517 0 01.368-.127c12.728.873 25.08-4.862 31.465-14.616 6.851-10.444 5.724-25.101-2.558-33.353a.503.503 0 010-.72.509.509 0 01.649-.051c1.665-.548 8.12-14.027 8.557-16.078a64.875 64.875 0 001.36-9.409 47.308 47.308 0 00-.183-9.368 49.115 49.115 0 00-15.895-30.45c-6.374-5.633-11.449-6.019-17.884-6.496a82.083 82.083 0 01-8.648-1.015c-4.435-.775-9-.198-13.103 1.654a.509.509 0 01-.721-.487c.579-17.062-6.09-31.09-19.722-41.696-13.123-10.15-28.125-14.109-43.36-11.338-13.987 2.62-27.791 10.86-38.824 23.356a.562.562 0 01-.437.172.528.528 0 01-.395-.264c-14.86-27.02-33.922-29.973-47.289-27.689-18.94 3.228-34.906 20.056-37.139 39.138a.51.51 0 01-.239.372.498.498 0 01-.441.034c-7.328-2.76-16.433-1.928-24.99 2.132-7.815 3.826-14.504 9.866-20.543 15.834-7.298 7.186-14.616 15.225-18.788 24.847-2.71 6.303-2.79 12.738-2.872 19.549v.487c0 1.807 2.111 15.611 3.502 16.565a.507.507 0 01.68.081.519.519 0 01-.061.721c-10.932 9.206-14.992 22.198-11.46 36.611 4.893 19.955 23.528 38.874 42.427 43.066 14.596 3.238 30.085-.578 40.418-9.947a.51.51 0 01.345-.091z'
        fill='#D1D3D4' />
      <path
        d='M156.657 200.705c-10.363 0-10.424-1.512-12.352-7.105-3.472-10.089-10.029-17.833-16.87-25.781-25.375-29.435-16.707-75.485 26.471-83.23 29.273-5.288 53.745 10.2 58.759 38.692 2.487 14.139-.66 27.557-8.577 39.443-5.39 8.12-9.835 16.311-11.388 26.045-1.015 6.272-.538 9.977-11.551 9.977-3.989 0-7.968.619-11.947.954-4.181.234-8.353 1.005-12.545 1.005z'
        fill='#fff' />
      <path
        d='M156.657 201.162c-9.917 0-10.739-1.289-12.606-6.78l-.224-.68c-3.511-10.211-10.261-18.037-16.778-25.609-13.326-15.469-17.742-36.002-11.51-53.592 5.766-16.24 19.356-27.11 38.276-30.531 14.951-2.69 29.171 0 40.032 7.562 10.261 7.105 16.95 18.067 19.285 31.546a53.867 53.867 0 01-8.648 39.818c-4.679 7.014-9.673 15.56-11.317 25.842a99.785 99.785 0 00-.224 1.512c-.781 5.35-1.289 8.892-11.824 8.892a77.083 77.083 0 00-8.12.578c-1.269.132-2.528.264-3.797.376-1.421.122-2.831.274-4.252.436-2.75.368-5.519.578-8.293.63zM165.01 83.98a61.48 61.48 0 00-11.012 1.015c-18.544 3.35-31.861 13.956-37.555 29.871-6.09 17.255-1.766 37.393 11.327 52.588 6.577 7.643 13.388 15.539 16.961 25.943l.233.68c1.675 4.923 2.081 6.09 11.642 6.09 2.75-.053 5.495-.26 8.222-.619 1.421-.162 2.852-.325 4.283-.447 1.259-.101 2.517-.233 3.776-.375a78.287 78.287 0 018.211-.579c9.653 0 10.039-2.679 10.82-8.028.071-.488.142-1.015.234-1.523 1.664-10.465 6.729-19.143 11.469-26.248 8.069-12.109 10.921-25.253 8.496-39.077-2.325-13.195-8.861-23.883-18.9-30.887a48.972 48.972 0 00-28.207-8.404z'
        fill='#262626' />
      <path
        d='M151.781 213.262l37.033-3.058a2.8 2.8 0 002.561-3.022l-.539-6.525a2.8 2.8 0 00-3.022-2.561l-37.033 3.057a2.803 2.803 0 00-2.562 3.023l.539 6.524a2.802 2.802 0 003.023 2.562z'
        fill='#fff' />
      <path
        d='M151.541 213.788a3.303 3.303 0 01-3.298-3.045l-.538-6.516a3.31 3.31 0 011.799-3.22 3.327 3.327 0 011.246-.353l37.027-3.045a3.327 3.327 0 013.573 3.045l.538 6.517a3.313 3.313 0 01-1.799 3.22 3.313 3.313 0 01-1.246.352l-37.028 3.045h-.274zm36.49-15.184h-.183l-37.027 3.045a2.28 2.28 0 00-.862.246 2.275 2.275 0 00-.702.557 2.28 2.28 0 00-.537 1.674l.538 6.516a2.302 2.302 0 002.476 2.101l37.027-3.045a2.301 2.301 0 002-1.586c.092-.287.127-.59.102-.891l-.549-6.516a2.292 2.292 0 00-2.283-2.101z'
        fill='#262626' />
      <path
        d='M152.787 225.362l37.033-3.058a2.801 2.801 0 002.562-3.022l-.539-6.525a2.802 2.802 0 00-3.023-2.561l-37.033 3.058a2.8 2.8 0 00-2.561 3.022l.539 6.525a2.801 2.801 0 003.022 2.561z'
        fill='#fff' />
      <path
        d='M152.546 225.897a3.308 3.308 0 01-3.298-3.045l-.538-6.526a3.304 3.304 0 013.045-3.563l37.027-3.045a3.318 3.318 0 013.573 3.045l.538 6.526a3.313 3.313 0 01-1.799 3.221 3.313 3.313 0 01-1.246.352l-37.028 3.045h-.274v-.01zm36.49-15.184h-.193l-37.028 3.045a2.29 2.29 0 00-2.09 2.476l.538 6.527a2.293 2.293 0 002.476 2.091l37.027-3.045a2.293 2.293 0 001.994-1.587c.09-.287.124-.59.097-.89l-.538-6.526a2.302 2.302 0 00-2.283-2.091z'
        fill='#262626' />
      <path
        d='M154.769 225.217c.376 4.568 8.12 7.653 17.204 6.892 9.085-.761 16.24-5.075 15.845-9.622l-33.049 2.73z'
        fill='#262626' />
      <path
        d='M169.182 232.738c-8.221 0-14.555-3.045-14.92-7.48a.518.518 0 01.467-.548l33.048-2.69a.52.52 0 01.548.467c.406 4.913-6.76 9.389-16.311 10.15-.961.068-1.905.101-2.832.101zm-13.834-7.105c.396 1.807 2.121 3.391 4.933 4.517a26.382 26.382 0 0011.652 1.421c8.475-.7 15.174-4.486 15.387-8.577l-31.972 2.639z'
        fill='#262626' />
      <path
        d='M158.586 194.534a.52.52 0 01-.454-.349.498.498 0 01-.023-.199 127.251 127.251 0 00-1.493-31.547 34.698 34.698 0 01-7.866-2.781 24.96 24.96 0 01-10.678-9.297c-2.628-4.446-3.045-9.795-1.177-13.956a4.598 4.598 0 011.274-1.857 4.594 4.594 0 012.004-1.026c3.137-.629 6.517 2.233 7.471 3.126 5.968 5.542 7.876 15.073 9.409 22.726l.193 1.015.243 1.248a37.479 37.479 0 0015.104 0c.114-2.531.385-5.053.812-7.551 1.39-8.12 3.501-14.159 6.293-17.884a9.91 9.91 0 017.129-3.4 9.93 9.93 0 017.355 2.882 10.662 10.662 0 011.634 10.15 19.563 19.563 0 01-6.04 8.424 36.649 36.649 0 01-16.24 8.202c-.365 9.774 1.29 19.62 2.903 29.211l.203 1.198a.52.52 0 01-.416.589.508.508 0 01-.578-.416l-.203-1.198c-1.614-9.561-3.258-19.387-2.934-29.161a38.39 38.39 0 01-14.869.051 128.2 128.2 0 011.441 31.394.52.52 0 01-.497.406zm-17.54-60.088a4.03 4.03 0 00-.71.071 3.627 3.627 0 00-2.548 2.304 14.38 14.38 0 001.127 13.022 24.086 24.086 0 0010.261 8.912 34.525 34.525 0 007.207 2.598c-.051-.264-.112-.538-.162-.802l-.193-1.015c-1.513-7.511-3.38-16.849-9.135-22.177-1.563-1.452-3.857-2.913-5.847-2.913zm46.142-.731h-.375a8.247 8.247 0 00-6.334 2.994c-2.69 3.603-4.74 9.47-6.09 17.448a63.346 63.346 0 00-.781 7.166 35.786 35.786 0 0015.488-7.907 18.646 18.646 0 005.745-7.988 9.664 9.664 0 00-1.431-9.135 8.195 8.195 0 00-6.222-2.578z'
        fill='#D1D3D4' />
      <path
        d='M201.053 196.909c.416-1.614.812-3.218 1.238-4.821.224-.833.488-1.655.752-2.477a2.29 2.29 0 012.365-1.715c1.278 0 2.547.203 3.826.304a10.77 10.77 0 002.03.102 2.22 2.22 0 001.37-.558 106.548 106.548 0 003.878-4.629 2.16 2.16 0 00.264-2.03c-.437-1.512-.934-3.045-1.371-4.506a6.496 6.496 0 01-.304-1.797 1.7 1.7 0 01.497-1.208 27.989 27.989 0 017.298-4.06 1.89 1.89 0 012.223.609c1.076 1.249 2.192 2.467 3.228 3.746a3.04 3.04 0 003.105 1.268c1.655-.253 3.34-.416 5.004-.629a1.905 1.905 0 001.452-1.015c.528-.934 1.015-1.888 1.532-2.822.518-.934.873-1.614 1.35-2.405a1.926 1.926 0 012.254-1.015c2.385.619 4.77 1.258 7.105 1.959a2.03 2.03 0 011.431 2.141c0 1.3-.213 2.589-.315 3.888a21.934 21.934 0 00-.091 1.837 2.5 2.5 0 00.944 2.03 83.723 83.723 0 013.918 3.207 2.734 2.734 0 002.781.548c1.634-.487 3.248-1.015 4.882-1.512a2.222 2.222 0 012.883 1.096 177.494 177.494 0 013.207 5.776 2.373 2.373 0 01.082 2.703 2.352 2.352 0 01-.671.677c-.802.741-1.674 1.4-2.497 2.121-.588.507-1.167 1.015-1.715 1.604a2.16 2.16 0 00-.639 1.786c.182 1.726.345 3.461.568 5.197a2.705 2.705 0 001.573 2.192c1.015.498 2.03.964 2.984 1.472a17.4 17.4 0 011.807 1.015 2.029 2.029 0 011.015 2.436 152.959 152.959 0 01-1.878 6.506 4.87 4.87 0 01-.436.934c-.162.352-.43.644-.767.836a1.856 1.856 0 01-1.111.23l-4.578-.386h-.345a3.243 3.243 0 00-3.349 1.482c-.772 1.076-1.665 2.03-2.507 3.045a3.275 3.275 0 00-.579 3.339 94.005 94.005 0 011.381 4.314c.416 1.451.192 2.233-1.178 3.045a149.166 149.166 0 01-5.988 3.289 2.03 2.03 0 01-2.802-.498c-.893-.954-1.715-1.969-2.547-2.964-1.797-2.151-2.223-2.314-5.004-1.959l-3.248.447a3.043 3.043 0 00-2.436 1.695c-.579 1.147-1.117 2.314-1.726 3.441a10.74 10.74 0 01-1.126 1.654 1.536 1.536 0 01-1.695.579c-2.254-.639-4.517-1.279-6.781-1.939a3.843 3.843 0 01-.873-.416 1.837 1.837 0 01-1.025-1.898c.122-1.512.254-3.045.376-4.517v-1.38a2.401 2.401 0 00-.914-1.959c-1.279-1.015-2.547-2.03-3.826-3.045a2.615 2.615 0 00-2.639-.426c-1.431.477-2.883.913-4.324 1.37l-.163.051c-1.898.497-2.537.304-3.511-1.401a111.845 111.845 0 01-3.045-5.775 2.03 2.03 0 01.578-2.812 44.998 44.998 0 013.4-2.842 3.535 3.535 0 001.482-3.603c-.233-1.553-.396-3.116-.599-4.669a1.961 1.961 0 00-1.015-1.563c-1.37-.731-2.75-1.442-4.06-2.182a4.322 4.322 0 01-2.222-2.03l-.163-.508zm50.456 4.811a14.884 14.884 0 00-5.214-10.209 14.87 14.87 0 00-10.925-3.473 15.113 15.113 0 00-13.438 16.047 14.902 14.902 0 0015.895 13.611c9.541-.751 14.616-9.48 13.682-15.976zM214.411 83.726c.243-1.015.487-1.928.74-2.892.132-.498.295-1.015.457-1.482a1.379 1.379 0 011.411-1.015c.771 0 1.533.121 2.304.182.41.06.825.081 1.238.061.305-.012.596-.13.823-.335a60.07 60.07 0 002.324-2.78 1.29 1.29 0 00.172-1.218c-.274-.914-.568-1.808-.832-2.71a4.006 4.006 0 01-.183-1.087 1.01 1.01 0 01.305-.72 16.709 16.709 0 014.385-2.437 1.126 1.126 0 011.329.366c.65.751 1.32 1.482 1.939 2.253a1.87 1.87 0 001.868.761c1.015-.152 2.03-.253 3.045-.385a1.132 1.132 0 00.862-.62c.315-.558.609-1.126.924-1.695.315-.568.528-1.014.812-1.44a1.146 1.146 0 011.35-.59c1.441.366 2.872.752 4.293 1.168a1.225 1.225 0 01.853 1.289c0 .781-.122 1.553-.183 2.334 0 .366-.061.741-.061 1.107a1.507 1.507 0 00.569 1.238c.792.64 1.593 1.259 2.355 1.928a1.664 1.664 0 001.674.335c1.015-.304 1.949-.619 2.924-.913a1.33 1.33 0 011.735.66c.67 1.147 1.31 2.304 1.929 3.46a1.446 1.446 0 01.254 1.091 1.44 1.44 0 01-.609.94c-.478.446-1.015.842-1.493 1.269-.477.426-.71.629-1.015 1.015a1.297 1.297 0 00-.385 1.075c.111 1.016.203 2.03.335 3.127a1.668 1.668 0 00.954 1.32l1.796.872c.366.193.731.386 1.076.61a1.235 1.235 0 01.589 1.46c-.365 1.3-.731 2.589-1.117 3.878a2.51 2.51 0 01-.263.558 1.129 1.129 0 01-1.127.65l-2.801-.254h-.203a1.94 1.94 0 00-2.03.893c-.457.64-1.015 1.228-1.503 1.848a2.036 2.036 0 00-.345 2.03c.295.852.579 1.715.833 2.588a1.315 1.315 0 01-.254 1.535 1.307 1.307 0 01-.467.292c-1.178.69-2.375 1.34-3.593 2.03a1.25 1.25 0 01-1.685-.305c-.528-.578-1.015-1.177-1.533-1.776-1.076-1.299-1.329-1.401-3.045-1.177l-1.949.264a1.798 1.798 0 00-1.461 1.015c-.345.68-.67 1.38-1.015 2.03-.193.36-.42.7-.68 1.015a.936.936 0 01-1.015.355l-4.06-1.167a2.789 2.789 0 01-.528-.254 1.121 1.121 0 01-.65-1.127c.071-.903.153-1.807.224-2.71v-.832a1.46 1.46 0 00-.548-1.178l-2.304-1.816a1.573 1.573 0 00-1.584-.264c-.863.284-1.736.548-2.598.822h-.102c-1.137.304-1.522.183-2.111-.832-.589-1.015-1.248-2.304-1.837-3.472a1.207 1.207 0 01-.189-.92 1.19 1.19 0 01.534-.775 40.27 40.27 0 012.03-1.705 2.145 2.145 0 00.893-2.162c-.142-.934-.233-1.878-.355-2.811a1.2 1.2 0 00-.629-.944c-.823-.437-1.655-.863-2.477-1.31a2.58 2.58 0 01-1.33-1.187l.011-.427zm30.318 2.873a8.944 8.944 0 00-9.694-8.212 9.137 9.137 0 00-8.12 9.642 8.952 8.952 0 009.551 8.182 8.85 8.85 0 008.263-9.612z'
        fill={colorCustom}  />
      <path
        d='M105.948 209.099l.284-18.473 17.935 4.395 2.152 11.683 2.405 13.052-11.49-5.379-11.286-5.278z'
        fill='#fff' />
      <path
        d='M128.724 220.264a.525.525 0 01-.213-.051l-22.777-10.657a.533.533 0 01-.294-.467l.284-18.473a.56.56 0 01.203-.396.531.531 0 01.427-.091l17.904 4.405a.49.49 0 01.247.142.49.49 0 01.129.254l4.557 24.735a.495.495 0 01-.183.498.58.58 0 01-.284.101zm-22.269-11.439l21.599 10.15-4.324-23.446-17.001-4.172-.274 17.468z'
        fill='#262626' />
      <path
        d='M109.738 201.427l6.074-4.69-46.434-60.143-6.074 4.689 46.434 60.144z'
        fill='#fff' />
      <path
        d='M109.734 201.943h-.071a.465.465 0 01-.335-.193l-46.437-60.149a.509.509 0 01-.101-.375.537.537 0 01.193-.335l6.09-4.69a.496.496 0 01.37-.104.473.473 0 01.33.196l46.436 60.139a.507.507 0 01-.081.71l-6.09 4.689a.485.485 0 01-.304.112zm-45.736-60.565l45.827 59.327 5.268-4.06-45.817-59.337-5.278 4.07z'
        fill='#262626' />
      <path
        d='M69.367 136.598l8.364-1.716 46.436 60.139-8.364 1.726-46.436-60.149z'
        fill='#262626' />
      <path
        d='M115.803 197.254a.523.523 0 01-.406-.203l-46.436-60.139a.513.513 0 01-.068-.488.512.512 0 01.373-.324l8.363-1.715a.504.504 0 01.508.182l46.436 60.149a.503.503 0 01.068.485.51.51 0 01-.373.317l-8.363 1.726-.102.01zM70.27 136.932l45.746 59.256 7.258-1.502-45.706-59.246-7.298 1.492zM59.511 148.95l3.786-7.653 46.437 60.139-3.786 7.653-46.437-60.139z'
        fill='#262626' />
      <path
        d='M105.988 209.606a.55.55 0 01-.406-.203l-46.477-60.138a.541.541 0 01-.05-.538l3.786-7.664a.476.476 0 01.406-.274.504.504 0 01.446.193l46.436 60.139a.492.492 0 010 .538l-3.775 7.663a.51.51 0 01-.406.274l.04.01zM60.11 148.94l45.746 59.255 3.279-6.648-45.777-59.306-3.248 6.699z'
        fill='#262626' />
      <path
        d='M117.234 214.377l.711-3.492 5.501-4.242 2.873.06 2.405 13.053-11.49-5.379z'
        fill={colorCustom}  />
      <path
        d='M128.724 220.264a.546.546 0 01-.213-.051l-11.5-5.379a.506.506 0 01-.274-.558l.721-3.492a.475.475 0 01.182-.294l5.492-4.243a.628.628 0 01.324-.112l2.883.071a.487.487 0 01.477.406l2.406 13.053a.505.505 0 01-.183.498.58.58 0 01-.315.101zm-10.921-6.171l10.251 4.791-2.151-11.683-2.294-.051-5.207 4.06-.599 2.883z'
        fill='#262626' />
      <path
        d='M86.338 69.283c-16.27 3.44-27.466 15.6-25.01 27.161 1.421 6.709 7.105 11.744 14.88 14.109 2.578 4.405 7.795 9.662 18.331 13.55a29.441 29.441 0 01-6.8-12.079 41.811 41.811 0 007.47-.893c16.24-3.441 27.466-15.6 25.02-27.161-2.446-11.561-17.631-18.128-33.891-14.687z'
        fill='#fff' />
      <path
        d='M94.529 124.58a.5.5 0 01-.173 0c-8.83-3.258-15.042-7.826-18.493-13.601-8.12-2.548-13.642-7.795-15.042-14.433-2.538-11.815 8.901-24.27 25.405-27.791 16.514-3.492 31.983 3.268 34.51 15.083 2.528 11.814-8.901 24.258-25.375 27.76a42.324 42.324 0 01-6.912.883c1.3 4.18 3.52 8.016 6.496 11.226a.506.506 0 01-.355.873h-.061zm-8.12-54.81C70.463 73.16 59.43 85.066 61.815 96.332c1.33 6.314 6.628 11.318 14.535 13.733.12.041.223.12.295.224 3.045 5.217 8.465 9.449 16.128 12.586a29.924 29.924 0 01-5.532-10.719.506.506 0 01.477-.639 41.608 41.608 0 007.37-.883c15.965-3.38 27.018-15.296 24.633-26.563-2.385-11.266-17.316-17.67-33.282-14.301h-.03zM318.093 201.273l-76.724-25.801 32.856-97.683 61.214 20.594 10.181 21.041-27.527 81.849z'
        fill='#262626' />
      <path
        d='M318.123 201.781h-.162l-76.724-25.812a.481.481 0 01-.292-.253.493.493 0 01-.023-.386l32.846-97.684a.515.515 0 01.649-.314l61.215 20.584a.515.515 0 01.294.264l10.15 21.041a.504.504 0 010 .385l-27.537 81.85a.487.487 0 01-.253.294.535.535 0 01-.163.031zm-76.125-26.624l75.77 25.477 27.293-81.2-9.987-20.645-60.535-20.3-32.541 96.668z'
        fill='#262626' />
      <path
        d='M310.369 206.318l-76.724-25.801L266.5 82.833l61.215 20.584 10.18 21.051-27.526 81.85z'
        fill='#fff' />
      <path
        d='M310.369 206.795a.447.447 0 01-.163 0l-76.724-25.801a.51.51 0 01-.314-.64l32.845-97.683a.54.54 0 01.264-.295.447.447 0 01.376 0l61.224 20.585a.495.495 0 01.295.263l10.15 21.041a.488.488 0 010 .376l-27.527 81.86a.469.469 0 01-.254.284.434.434 0 01-.172.01zm-76.125-26.634l75.769 25.487 27.294-81.2-9.998-20.665-60.494-20.31-32.571 96.688z'
        fill='#262626' />
      <path
        d='M327.715 103.417l-5.826 15.661 16.006 5.39-10.18-21.051z'
        fill='#fff' />
      <path
        d='M337.895 124.965a.441.441 0 01-.162 0l-16.007-5.389a.49.49 0 01-.294-.254.541.541 0 010-.396l5.826-15.661a.518.518 0 01.457-.335.521.521 0 01.477.294l10.15 21.041a.494.494 0 01-.081.558.514.514 0 01-.366.142zm-15.357-6.201l14.383 4.801-9.135-18.9-5.248 14.099z'
        fill='#262626' />
      <path
        d='M324.315 131.959a.447.447 0 01-.163 0l-55.256-18.605a.508.508 0 01-.315-.639.505.505 0 01.251-.299.51.51 0 01.191-.053.514.514 0 01.198.027l55.256 18.585a.51.51 0 01.22.923.515.515 0 01-.382.092v-.031zM320.823 142.343a.49.49 0 01-.162 0l-55.257-18.585a.52.52 0 01-.325-.64.513.513 0 01.451-.351.483.483 0 01.199.027l55.257 18.584a.517.517 0 01.22.924.513.513 0 01-.383.091v-.05zM317.332 152.726a.447.447 0 01-.163 0l-55.256-18.605a.533.533 0 11.324-1.015l55.257 18.585a.51.51 0 01.22.923.515.515 0 01-.382.092v.02zM313.84 163.15a.441.441 0 01-.162 0l-55.257-18.585a.517.517 0 01-.325-.639.513.513 0 01.451-.352.519.519 0 01.199.027l55.256 18.534a.516.516 0 01.427.589.513.513 0 01-.589.426zM310.348 173.493a.441.441 0 01-.162 0l-55.257-18.585a.536.536 0 01-.345-.67.534.534 0 01.67-.345l55.257 18.585a.51.51 0 01.426.588.517.517 0 01-.589.427zM290.607 178.375a.407.407 0 01-.163 0l-39.006-13.104a.523.523 0 01-.312-.263.535.535 0 01.637-.752l39.006 13.114a.518.518 0 01.315.65.497.497 0 01-.477.355zM228.397 134.141a2.542 2.542 0 01-2.345-1.568 2.544 2.544 0 01-.143-1.468 2.544 2.544 0 011.999-1.991 2.54 2.54 0 012.604 1.088 2.532 2.532 0 01-.324 3.2 2.542 2.542 0 01-1.791.739zm0-4.06a1.528 1.528 0 00-1.406.94 1.515 1.515 0 00.33 1.659 1.524 1.524 0 002.342-.23c.167-.251.257-.545.257-.846a1.525 1.525 0 00-1.523-1.512v-.011zM84.673 215.27a2.542 2.542 0 01-2.351-1.559 2.539 2.539 0 013.31-3.324 2.536 2.536 0 011.569 2.346 2.54 2.54 0 01-2.528 2.537zm0-4.06a1.523 1.523 0 10-.018 3.047 1.523 1.523 0 00.018-3.047zM101.431 135.389a.507.507 0 01-.508-.507v-5.298a.508.508 0 011.015 0v5.298a.518.518 0 01-.507.507z'
        fill='#D1D3D4' />
      <path
        d='M104.08 132.7h-5.298a.504.504 0 01-.508-.507.507.507 0 01.508-.508h5.298a.508.508 0 01.508.508.52.52 0 01-.508.507zM285.369 233.185a.51.51 0 01-.507-.508v-5.298a.507.507 0 111.015 0v5.298a.517.517 0 01-.508.508z'
        fill='#D1D3D4' />
      <path
        d='M288.018 230.515h-5.298a.507.507 0 110-1.015h5.298a.508.508 0 01.508.508.519.519 0 01-.508.507zM187.828 74.165a.507.507 0 01-.508-.508V68.37a.508.508 0 011.015 0v5.288a.508.508 0 01-.507.508z'
        fill='#D1D3D4' />
      <path
        d='M190.477 71.526h-5.319a.518.518 0 01-.507-.508.508.508 0 01.507-.507h5.299a.506.506 0 01.507.507.508.508 0 01-.487.508zM80.258 98.271a4.799 4.799 0 01-.66-.081 6.263 6.263 0 01-4.588-3.228 5.166 5.166 0 01-3.491 2.03.511.511 0 01-.122-1.015 4.294 4.294 0 003.126-2.03 6.201 6.201 0 01.234-5.227.499.499 0 01.436-.264.527.527 0 01.447.244 5.432 5.432 0 01.06 5.217v.091l.092.203a4.995 4.995 0 008.597 1.015 6.16 6.16 0 001.106-1.837 3.147 3.147 0 01.193-3.42.538.538 0 01.508-.173.53.53 0 01.375.365 5.764 5.764 0 01-.07 3.157 2.364 2.364 0 002.03 1.218 2.67 2.67 0 002.232-1.421c.264-.45.424-.952.467-1.472a4.943 4.943 0 01-.325-1.654.507.507 0 01.722-.468c.105.049.19.131.243.234.257.531.386 1.116.375 1.706a4.515 4.515 0 001.106 1.542 4.062 4.062 0 006.09-.375c.254-.312.468-.653.64-1.015a6.695 6.695 0 01-.68-.934 2.172 2.172 0 01.233-2.436 1.014 1.014 0 011.269-.102 1.546 1.546 0 01.589 1.168 5.005 5.005 0 01-.223 2.03 2.673 2.673 0 003.045.467c2.517-1.097 4.435-4.984 3.725-7.562a.496.496 0 01.046-.39.507.507 0 01.309-.24.506.506 0 01.619.356c.853 3.045-1.32 7.48-4.304 8.77a3.652 3.652 0 01-3.846-.437 6.26 6.26 0 01-.64.913 5.074 5.074 0 01-7.552.478 5.143 5.143 0 01-.7-.792 4.917 4.917 0 01-.315.66 3.695 3.695 0 01-2.943 1.928 3.249 3.249 0 01-2.568-1.137 7.578 7.578 0 01-1.015 1.513 6.485 6.485 0 01-4.872 2.405zm-5.075-7.947a5.28 5.28 0 000 2.151c.18-.705.184-1.444.01-2.151h-.01zm25.121-1.269a.601.601 0 00-.152.325c-.075.278-.046.574.081.832.059.102.123.2.193.294a3.75 3.75 0 000-1.015c0-.324-.112-.416-.142-.436h.02zM218.288 160.531a2.233 2.233 0 100-4.465 2.233 2.233 0 000 4.465zM120.553 173.584a2.233 2.233 0 100-4.465 2.233 2.233 0 000 4.465z'
        fill='#D1D3D4' />
    </Svg>
  )
}

export default React.memo(CreativeProcessSvg)