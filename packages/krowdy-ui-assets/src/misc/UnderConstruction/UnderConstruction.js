import React from 'react'
import Svg from '../../Svg'
import useGetColor from '../../useGetColor'

const UnderConstructionSvg = ({ width, height, color }) => {
  const colorCustom = useGetColor({ color })

  return (
    <Svg
      height={height}
      width={width}>
      <path
        d='M268.652 222.142a.505.505 0 01-.507-.507v-33.759a.507.507 0 111.015 0v33.759a.507.507 0 01-.508.507z'
        fill='#262626' />
      <path
        d='M338.017 228.455H68.839a.513.513 0 01-.507-.507.507.507 0 01.507-.508h269.178a.508.508 0 01.508.508.519.519 0 01-.508.507z'
        fill='#D1D3D4' />
      <path
        d='M298.29 65.822H107.338a7.257 7.257 0 00-7.257 7.257v131.026a7.258 7.258 0 007.257 7.258H298.29a7.258 7.258 0 007.257-7.258V73.079a7.257 7.257 0 00-7.257-7.257z'
        fill='#fff' />
      <path
        d='M298.29 211.87H107.328a7.76 7.76 0 01-7.755-7.764V73.079a7.765 7.765 0 017.755-7.764H298.29a7.775 7.775 0 017.765 7.764v131.027a7.771 7.771 0 01-7.765 7.764zM107.328 66.33a6.749 6.749 0 00-6.74 6.75v131.026a6.75 6.75 0 006.74 6.749H298.29a6.75 6.75 0 006.75-6.749V73.079a6.75 6.75 0 00-6.75-6.75H107.328z'
        fill='#262626' />
      <path
        d='M297.955 75.961H107.673v125.272h190.282V75.961z'
        fill={colorCustom} />
      <path
        d='M233.381 232.434h-61.144l6.912-21.071h47.33l6.902 21.071z'
        fill='#fff' />
      <path
        d='M233.381 232.962h-61.144a.524.524 0 01-.516-.449.532.532 0 01.019-.241l6.912-21.072a.534.534 0 01.497-.355h47.32a.507.507 0 01.497.355l6.912 21.072a.476.476 0 01-.071.466.5.5 0 01-.426.224zm-60.423-1.015h59.702l-6.567-20.077h-46.558l-6.577 20.077z'
        fill='#262626' />
      <path
        d='M238.436 232.434h-71.253a2.964 2.964 0 00-2.964 2.964v.01a2.964 2.964 0 002.964 2.964h71.253a2.964 2.964 0 002.963-2.964v-.01a2.964 2.964 0 00-2.963-2.964z'
        fill='#fff' />
      <path
        d='M238.436 238.889h-71.243a3.477 3.477 0 01-2.59-.952 3.485 3.485 0 01-1.09-2.534 3.5 3.5 0 011.09-2.535 3.495 3.495 0 012.59-.952h71.243a3.493 3.493 0 012.589 6.021 3.477 3.477 0 01-2.589.952zm-71.243-5.927a2.44 2.44 0 00-2.402 1.468 2.447 2.447 0 002.402 3.414h71.243a2.455 2.455 0 001.83-.657 2.45 2.45 0 00.572-2.757 2.45 2.45 0 00-2.402-1.468h-71.243zM174.074 226.852c1.015-.528 53.927-10.15 53.927-10.15l-1.735-5.288h-47.33l-4.862 15.438z'
        fill='#262626' />
      <path
        d='M174.064 227.369a.478.478 0 01-.325-.122.506.506 0 01-.152-.548l4.872-15.489a.503.503 0 01.477-.355h47.33a.51.51 0 01.477.355l1.735 5.288a.503.503 0 010 .417.556.556 0 01-.345.243c-14.514 2.649-52.455 9.643-53.795 10.15a.468.468 0 01-.274.061zm5.248-15.499l-4.486 14.271c6.567-1.462 43.279-8.191 52.505-9.886l-1.441-4.385h-46.578z'
        fill='#262626' />
      <path
        d='M168.187 136.243a9.704 9.704 0 01-1.837 3.349 8.6 8.6 0 01-2.892 2.172 9.46 9.46 0 01-7.532 0 8.343 8.343 0 01-2.842-2.172 10.146 10.146 0 01-1.796-3.349 14.217 14.217 0 01-.63-4.345v-16.453h5.075v15.936a8.946 8.946 0 00.224 2.03c.135.608.368 1.191.69 1.725.297.503.72.92 1.228 1.208a3.5 3.5 0 001.837.447 3.432 3.432 0 003.045-1.655 5.518 5.518 0 00.69-1.725c.14-.668.208-1.348.203-2.03v-15.936h5.075v16.413a13.63 13.63 0 01-.538 4.385zM186.437 141.835l-8.526-17.255h-.091l.122 17.255h-4.964v-26.39h5.836l8.496 17.255h.091l-.121-17.255h4.983v26.39h-5.826zM216.41 128.64a15.633 15.633 0 01-1.015 5.969 11.787 11.787 0 01-2.72 4.141 10.762 10.762 0 01-3.817 2.375 12.713 12.713 0 01-4.313.761h-7.907v-26.441h7.673c1.499.004 2.989.223 4.426.65a10.315 10.315 0 013.897 2.162 10.815 10.815 0 012.751 4.06 16.325 16.325 0 011.025 6.323zm-5.329 0a10.191 10.191 0 00-.578-3.704 6.1 6.1 0 00-1.563-2.345 5.8 5.8 0 00-2.213-1.249 9.08 9.08 0 00-2.558-.375h-2.547v15.408h2.425a8.942 8.942 0 002.65-.386 5.85 5.85 0 002.243-1.289 6.27 6.27 0 001.563-2.375c.417-1.183.613-2.431.578-3.685zM219.79 141.835v-26.39H234v5.36h-9.257v4.983h8.8v5.075h-8.8v5.471h9.856v5.501H219.79zM249.316 141.835l-4.598-10.454h-1.705v10.454h-5.075v-26.39h8.12a11.261 11.261 0 012.984.396c.953.251 1.842.7 2.609 1.32a6.604 6.604 0 011.837 2.456 9.26 9.26 0 01.69 3.796 8.264 8.264 0 01-1.167 4.507 6.467 6.467 0 01-3.238 2.598l5.532 11.317h-5.989zm-.213-18.27a3.138 3.138 0 00-.314-1.512c-.19-.362-.47-.67-.812-.893a3.166 3.166 0 00-1.117-.427 6.953 6.953 0 00-1.187-.111h-2.731v6.141h2.436c.433 0 .865-.044 1.289-.132.427-.08.835-.235 1.208-.457.379-.254.684-.605.883-1.015a3.333 3.333 0 00.345-1.594zM157.408 161.201a4.244 4.244 0 01-2.091.498 4.536 4.536 0 01-3.562-1.645 5.803 5.803 0 01-1.015-1.898 7.377 7.377 0 01-.376-2.426 7.195 7.195 0 01.386-2.456 5.578 5.578 0 011.065-1.878 4.704 4.704 0 013.583-1.603 4.7 4.7 0 011.939.426 3.699 3.699 0 011.543 1.238l-1.523 1.847a2.027 2.027 0 00-.832-.781 2.283 2.283 0 00-1.015-.254 2.177 2.177 0 00-1.086.264 2.597 2.597 0 00-.842.721c-.247.33-.432.701-.549 1.096a4.875 4.875 0 000 2.781c.109.396.292.768.538 1.096.22.298.505.541.833.711.328.172.695.259 1.065.253.412.012.818-.098 1.168-.314.33-.209.605-.494.802-.832l1.563 1.786a4.665 4.665 0 01-1.594 1.37zM169.405 155.7a7.442 7.442 0 01-.375 2.446 5.879 5.879 0 01-1.015 1.908 4.657 4.657 0 01-3.634 1.645 4.752 4.752 0 01-2.03-.427 4.81 4.81 0 01-1.604-1.218 5.879 5.879 0 01-1.015-1.908 7.468 7.468 0 01-.375-2.446 7.36 7.36 0 01.375-2.446 5.68 5.68 0 011.015-1.868 4.708 4.708 0 011.604-1.177 4.911 4.911 0 012.03-.416 4.992 4.992 0 012.03.416 4.69 4.69 0 011.604 1.177 5.68 5.68 0 011.015 1.868 7.36 7.36 0 01.375 2.446zm-2.395 0a4.611 4.611 0 00-.203-1.37 3.259 3.259 0 00-.538-1.096 2.607 2.607 0 00-.842-.721 2.296 2.296 0 00-1.086-.264 2.213 2.213 0 00-1.066.264 2.6 2.6 0 00-.843.721c-.25.327-.436.699-.548 1.096a4.96 4.96 0 00.01 2.781c.118.399.299.776.538 1.116a2.6 2.6 0 00.843.721 2.309 2.309 0 002.141 0 2.6 2.6 0 00.843-.721c.25-.335.436-.713.548-1.116.138-.458.206-.933.203-1.411zM176.795 161.394l-3.736-7.379.051 7.389h-2.182v-11.307h2.568l3.725 7.379-.061-7.379h2.182v11.297h-2.547zM186.173 153a2.286 2.286 0 00-.751-.71 1.861 1.861 0 00-.903-.264c-.15.002-.3.019-.447.051a1.01 1.01 0 00-.416.182 1.34 1.34 0 00-.315.356 1.097 1.097 0 00-.121.548.94.94 0 00.385.812c.143.104.296.192.457.264l.589.253c.314.122.639.264 1.015.416.342.156.657.365.934.62.286.269.52.589.69.944a3.3 3.3 0 01.274 1.421 4.273 4.273 0 01-.295 1.684 3.215 3.215 0 01-.791 1.168 3.368 3.368 0 01-1.137.69 4.203 4.203 0 01-1.33.223 4.585 4.585 0 01-1.928-.426 4.062 4.062 0 01-1.543-1.208l1.462-1.817a2.8 2.8 0 00.903.853c.327.22.712.34 1.106.345a1.9 1.9 0 00.487-.061c.154-.038.296-.111.417-.213.121-.103.218-.231.284-.376a1.63 1.63 0 00.101-.578 1.008 1.008 0 00-.132-.548 1.544 1.544 0 00-.375-.406 3.009 3.009 0 00-.599-.335l-.822-.325c-.3-.12-.591-.259-.873-.416a3.134 3.134 0 01-.761-.609 2.89 2.89 0 01-.538-.914 4.284 4.284 0 01.111-2.913 3.134 3.134 0 012.03-1.735c.421-.13.859-.195 1.3-.193a4.043 4.043 0 011.603.345c.548.23 1.04.576 1.442 1.015L186.173 153zM192.811 152.422v8.972h-2.243v-8.972h-2.619v-2.325h7.491v2.325h-2.629zM201.398 161.394l-2.03-4.486h-.761v4.486h-2.192v-11.297h3.542c.438-.003.875.052 1.299.163.418.108.808.301 1.147.568.342.272.617.619.802 1.015a3.88 3.88 0 01.304 1.634 3.52 3.52 0 01-.507 1.929c-.341.515-.84.907-1.421 1.116l2.426 4.832-2.609.04zm-.091-7.836a1.365 1.365 0 00-.142-.649 1.025 1.025 0 00-.355-.376 1.278 1.278 0 00-.488-.182 2.362 2.362 0 00-.517-.051h-1.208v2.629h1.076c.187.002.374-.015.558-.051.187-.034.366-.103.528-.203.169-.098.306-.242.396-.416.143-.207.227-.449.243-.701h-.091zM212.746 158.999a4.066 4.066 0 01-.802 1.431c-.349.4-.782.719-1.269.934a4.244 4.244 0 01-3.298 0 3.547 3.547 0 01-1.249-.934 4.225 4.225 0 01-.781-1.431 5.946 5.946 0 01-.274-1.868v-7.034h2.222v6.811c.002.297.036.593.102.883.06.262.163.512.304.741.129.218.315.397.538.517.245.136.522.203.802.193.283.01.564-.056.812-.193.223-.12.409-.299.538-.517.146-.226.249-.478.305-.741.062-.29.093-.586.091-.883v-6.811h2.243v7.034a5.698 5.698 0 01-.284 1.868zM221.495 161.201a4.217 4.217 0 01-2.091.498 4.633 4.633 0 01-2.03-.427 4.739 4.739 0 01-1.583-1.218 5.822 5.822 0 01-1.015-1.898 7.377 7.377 0 01-.376-2.426 7.48 7.48 0 01.386-2.456 5.933 5.933 0 011.066-1.878c.443-.506.99-.911 1.604-1.187a4.782 4.782 0 011.979-.416c.669.001 1.33.147 1.938.426a3.693 3.693 0 011.543 1.238l-1.522 1.847a2.033 2.033 0 00-.822-.781 2.344 2.344 0 00-1.015-.254 2.198 2.198 0 00-1.086.264 2.6 2.6 0 00-.843.721 3.695 3.695 0 00-.548 1.096 4.858 4.858 0 000 2.781c.117.393.299.763.538 1.096.223.298.511.541.842.711.313.166.661.253 1.015.253.412.012.818-.098 1.168-.314.33-.209.605-.495.801-.833l1.564 1.787a4.66 4.66 0 01-1.513 1.37zM227.869 152.422v8.972h-2.243v-8.972h-2.618v-2.325h7.49v2.325h-2.629zM231.523 161.394v-11.297h2.254v11.297h-2.254zM245.378 155.7a7.422 7.422 0 01-.386 2.446 5.84 5.84 0 01-1.015 1.908c-.44.517-.987.933-1.603 1.218a4.849 4.849 0 01-2.03.427 4.668 4.668 0 01-3.624-1.645 5.879 5.879 0 01-1.015-1.908 7.468 7.468 0 01-.375-2.446 7.36 7.36 0 01.375-2.446 5.68 5.68 0 011.015-1.868 4.69 4.69 0 011.604-1.177 4.92 4.92 0 012.03-.416 4.992 4.992 0 012.03.416 4.607 4.607 0 011.604 1.177 5.68 5.68 0 011.015 1.868 7.36 7.36 0 01.375 2.446zm-2.405 0a4.602 4.602 0 00-.193-1.37 3.47 3.47 0 00-.548-1.096 2.501 2.501 0 00-.843-.721 2.278 2.278 0 00-1.076-.264 2.231 2.231 0 00-1.076.264 2.607 2.607 0 00-.842.721 3.47 3.47 0 00-.548 1.096 4.96 4.96 0 00-.193 1.37c-.003.478.065.953.203 1.411a3.8 3.8 0 00.538 1.116c.226.298.513.544.842.721.331.177.701.268 1.076.264.375.002.745-.089 1.076-.264a2.67 2.67 0 00.833-.721c.253-.334.442-.713.558-1.116.148-.456.226-.932.233-1.411h-.04zM252.757 161.394l-3.735-7.379.051 7.389h-2.172v-11.307h2.557l3.726 7.379-.061-7.379h2.182v11.297h-2.548z'
        fill='#fff' />
      <path
        d='M291.794 143.053a.488.488 0 01-.406-.203c-.203-.264-4.781-6.536-4.781-22.228V64.969a.518.518 0 01.508-.507.507.507 0 01.507.507v55.653c0 15.357 4.527 21.558 4.578 21.619a.52.52 0 01-.101.711.501.501 0 01-.305.101z'
        fill='#262626' />
      <path d='M96.163 173.442h-9.774v75.851h9.774v-75.851z' fill='#fff' />
      <path
        d='M96.173 249.79H86.39a.508.508 0 01-.508-.507v-75.841a.507.507 0 01.508-.507h9.784a.507.507 0 01.508.507v75.841a.503.503 0 01-.314.469.517.517 0 01-.194.038zm-9.277-1.015h8.77V173.95h-8.77v74.825z'
        fill='#262626' />
      <path d='M156.058 173.442h-9.774v75.851h9.774v-75.851z' fill='#fff' />
      <path
        d='M156.068 249.79h-9.784a.507.507 0 01-.508-.507v-75.841a.508.508 0 01.508-.507h9.784a.507.507 0 01.508.507v75.841a.51.51 0 01-.508.507zm-9.277-1.015h8.77V173.95h-8.77v74.825z'
        fill='#262626' />
      <path d='M163.63 179.126H76.868v26.045h86.762v-26.045z' fill='#fff' />
      <path
        d='M163.63 179.126v26.045H76.868v-26.045h86.762zm0-1.015H76.868a1.013 1.013 0 00-1.015 1.015v26.045a1.015 1.015 0 001.015 1.015h86.762a1.017 1.017 0 001.015-1.015v-26.045a1.014 1.014 0 00-1.015-1.015z'
        fill='#262626' />
      <path
        d='M108.211 205.171H94.904l-16.443-26.035h13.307l16.443 26.035zM135.119 205.171h-13.307l-16.443-26.035h13.307l16.443 26.035zM162.026 205.171H148.72l-16.443-26.035h13.306l16.443 26.035z'
        fill='#D1D3D4' />
      <path d='M162.037 215.534h-85.17v8.415h85.17v-8.415z' fill='#fff' />
      <path
        d='M162.026 224.456H76.868a.508.508 0 01-.508-.507v-8.415a.51.51 0 01.508-.507h85.158a.507.507 0 01.508.507v8.415a.507.507 0 01-.508.507zm-84.65-1.015h84.143v-7.399H77.375v7.399z'
        fill='#262626' />
      <path
        d='M331.768 239.569h-37.607l1.767-5.982.333-1.14 2.063-6.943 1.012-3.432 2.177-7.366.448-1.498 2.396-8.096.23-.781 2.178-7.365 1.229-4.15 1.845-6.225 2.101-7.122h2.023l2.101 7.122.999 3.33 2.075 7.045.935 3.125 1.256 4.24.73 2.447 2.344 7.928.666 2.255 1.524 5.111.461 1.575 2.6 8.8.398 1.358 1.716 5.764z'
        fill='#fff' />
      <path
        d='M313.963 179.468l2.101 7.122.999 3.331 2.075 7.045.935 3.125 1.281 4.24.73 2.459 2.344 7.916.666 2.254 1.512 5.124.461 1.576 2.562 8.799.397 1.358 1.704 5.764h-37.569l1.767-5.982.333-1.14 2.063-6.942 1.012-3.433 2.177-7.365.448-1.499 2.396-8.095.217-.794 2.178-7.365 1.281-4.151 1.844-6.225 2.101-7.122h2.024-.039zm.039-1.28h-2.024a1.28 1.28 0 00-1.217.922l-2.113 7.109-1.845 6.238-1.217 4.15-2.19 7.352-.231.782-2.433 8.095-.449 1.511-2.177 7.366-1.012 3.42-2.062 6.955-.333 1.14-1.768 5.982a1.285 1.285 0 00.205 1.127 1.279 1.279 0 001.025.512h37.594a1.278 1.278 0 001.281-1.639l-1.704-5.764-.409-1.358-2.562-8.813-.461-1.562-1.525-5.124-.666-2.242-2.331-7.928-.73-2.46-1.281-4.227-.935-3.138-2.075-7.032-.999-3.343-2.101-7.109a1.28 1.28 0 00-1.281-.922h.026z'
        fill='#262626' />
      <path
        d='M335.636 239.568h-45.344c-.764 0-1.383.62-1.383 1.384v2.562c0 .764.619 1.383 1.383 1.383h45.344c.764 0 1.384-.619 1.384-1.383v-2.562c0-.764-.62-1.384-1.384-1.384z'
        fill='#fff' />
      <path
        d='M335.636 245.538h-45.344a2.028 2.028 0 01-2.024-2.024v-2.562c0-.266.053-.529.155-.774a2.007 2.007 0 011.095-1.096c.245-.101.509-.154.774-.154h45.344a2.032 2.032 0 011.87 1.25c.102.245.154.508.154.774v2.562a2.022 2.022 0 01-2.024 2.024zm-45.344-5.342a.743.743 0 00-.743.743v2.562a.743.743 0 00.743.743h45.344a.743.743 0 00.743-.743v-2.562a.742.742 0 00-.743-.743h-45.344z'
        fill='#262626' />
      <path
        d='M329.654 232.447h-33.393l2.063-6.943 1.012-3.433h27.257l.461 1.576 2.6 8.8zM324.403 214.706h-22.89l.448-1.498 2.396-8.096.23-.781h16.742l.73 2.447 2.344 7.928zM319.138 196.966h-12.373l1.229-4.15 1.845-6.226h6.225l.999 3.331 2.075 7.045z'
        fill='#D1D3D4' />
      <path
        d='M275.209 65.954l35.921 42.914a.766.766 0 00.902.181.761.761 0 00.417-.821 53.513 53.513 0 00-3.572-10.647l-29.141-34.195-3.695.456a1.287 1.287 0 00-1.119 1.49c.038.229.137.444.287.622z'
        fill='#fff' />
      <path
        d='M311.698 109.65a1.257 1.257 0 01-.954-.457l-35.931-42.914a1.798 1.798 0 011.167-2.944l3.695-.457a.506.506 0 01.447.183l29.14 34.195c.026.033.05.067.071.102a54.543 54.543 0 013.604 10.759 1.27 1.27 0 01-1.239 1.533zm-36.103-44.021l35.931 42.914a.233.233 0 00.294.061.243.243 0 00.132-.274 54.237 54.237 0 00-3.512-10.475l-28.887-33.931-3.42.416a.818.818 0 00-.64.497.81.81 0 00.132.792h-.03z'
        fill='#262626' />
      <path
        d='M279.736 63.386l29.141 34.195s11.073-13.337 8.82-24.218c-2.253-10.88-12.068-18.057-22.919-16.413-10.85 1.645-15.042 6.436-15.042 6.436z'
        fill='#fff' />
      <path
        d='M308.877 98.089a.5.5 0 01-.386-.183L279.35 63.68a.51.51 0 010-.66c.173-.203 4.395-4.953 15.327-6.607 10.931-1.655 21.183 5.562 23.517 16.818 2.284 10.993-8.475 24.086-8.932 24.645a.487.487 0 01-.385.182v.03zm-28.42-34.673l28.42 33.363c1.908-2.456 10.292-13.936 8.343-23.345-2.223-10.718-11.845-17.61-22.33-16.016-9.003 1.38-13.307 4.922-14.464 5.998h.031z'
        fill='#262626' />
      <path
        d='M310.115 88.862a.545.545 0 01-.213 0 .505.505 0 01-.264-.283.508.508 0 01.02-.386 32.257 32.257 0 002.314-20.189.522.522 0 01.376-.64.523.523 0 01.639.376 32.7 32.7 0 01-2.375 20.879.525.525 0 01-.497.243z'
        fill='#D1D3D4' />
      <path
        d='M306.989 95.368l4.516-3.897 3.116 3.471-4.547 4.811-3.085-4.385z'
        fill='#fff' />
      <path
        d='M310.074 100.22a.51.51 0 01-.375-.213l-3.045-4.385a.497.497 0 01.091-.67l4.425-3.867a.521.521 0 01.711 0l3.116 3.461a.517.517 0 010 .69l-4.547 4.811a.486.486 0 01-.376.173zm-2.405-4.801l2.456 3.492 3.806-4.06-2.466-2.751-3.796 3.319z'
        fill='#262626' />
      <path
        d='M306.512 86.061a.554.554 0 01-.214 0 .51.51 0 01-.253-.67 26.216 26.216 0 00.599-20.99.515.515 0 01.425-.731.512.512 0 01.488.284 27.283 27.283 0 01-.599 21.803.514.514 0 01-.446.304z'
        fill='#D1D3D4' />
      <path
        d='M100.081 133.999a.508.508 0 01-.563-.451.512.512 0 01.451-.564c.63-.132 63.56-14.463 82.215-67.335a.51.51 0 01.64-.314.52.52 0 01.314.65c-18.797 53.419-82.265 67.852-82.905 68.004l-.152.01z'
        fill='#262626' />
      <path
        d='M203.306 88.892h-1.979c-38.113-1.35-69.02-22.41-69.334-22.624a.495.495 0 01-.132-.7.5.5 0 01.327-.215.51.51 0 01.383.083c.305.213 30.978 21.102 68.787 22.441 29.577 1.016 49.136-22.116 49.329-22.33a.516.516 0 01.845.093.504.504 0 01.033.385.481.481 0 01-.097.172c-.193.183-19.183 22.695-48.162 22.695z'
        fill='#262626' />
      <path
        d='M242.222 98.19a9.026 9.026 0 01-.904 0c-5.867-.609-10.15-6.435-12.291-16.839a81.475 81.475 0 01-1.533-15.469.505.505 0 01.867-.352.517.517 0 01.148.363c0 .294-.223 29.912 12.911 31.292a7.014 7.014 0 005.572-1.868c7.592-6.8 7.805-29.211 7.805-29.434a.509.509 0 111.015.01c0 .933-.223 23.08-8.12 30.176a7.997 7.997 0 01-5.47 2.121z'
        fill='#262626' />
    </Svg>
  )
}

export default React.memo(UnderConstructionSvg)