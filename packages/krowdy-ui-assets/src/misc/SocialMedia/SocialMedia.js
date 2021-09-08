import React from 'react'
import Svg from '../../Svg'
import useGetColor from '../../useGetColor'

const SocialMediaSvg = ({ width, height, color }) => {
  const colorCustom = useGetColor({ color })

  return (
    <Svg
      height={height}
      width={width}>
      <path
        d='M162.615 258.083l-2.872 21.173h107.975l-6.404-33.028-98.699 11.855z'
        fill='#262626' />
      <path
        d='M267.718 279.764H159.783a.507.507 0 01-.497-.579l2.872-21.163a.494.494 0 01.437-.436l98.688-11.855a.505.505 0 01.558.406l6.405 33.028a.515.515 0 01-.101.416.548.548 0 01-.427.183zm-107.387-1.015h106.768l-6.191-31.963-97.836 11.774-2.741 20.189zM211.843 66.502s-7.42-7.998-15.692-9.54c-8.273-1.544-35.008 8.12-37.616 18.624-2.609 10.506 1.776 25.65 1.776 25.65s39.057-36.54 51.532-34.734z'
        fill='#262626' />
      <path
        d='M160.311 101.712h-.132a.514.514 0 01-.355-.355c-.183-.619-4.385-15.347-1.776-25.882 2.679-10.83 29.617-20.615 38.194-19.011 8.343 1.563 15.672 9.378 15.976 9.703a.542.542 0 01.081.589.522.522 0 01-.527.264c-12.089-1.736-50.75 34.205-51.116 34.571a.484.484 0 01-.345.121zm33.769-44.416c-9.734 0-32.713 8.983-35.048 18.412-2.202 8.902.711 21.315 1.553 24.553 5.075-4.639 37.088-33.749 49.979-34.317-2.203-2.111-8.12-7.298-14.505-8.486a10.546 10.546 0 00-1.979-.162z'
        fill='#262626' />
      <path
        d='M198.721 102.407c20.975-10.14 34.858-24.816 31.008-32.78-3.85-7.964-23.975-6.2-44.949 3.94-20.975 10.139-34.858 24.815-31.008 32.779 3.85 7.964 23.975 6.2 44.949-3.939z'
        fill='#fff' />
      <path
        d='M166.157 111.832c-6.668 0-11.165-1.827-12.839-5.278-1.959-4.06.264-9.785 6.283-16.139 6.018-6.354 14.758-12.393 24.958-17.316 10.201-4.922 20.524-8.059 29.07-8.81 8.719-.76 14.596 1.015 16.555 5.075 1.959 4.06-.274 9.795-6.283 16.149-6.009 6.354-14.758 12.383-24.959 17.316s-20.523 8.059-29.07 8.81a34.038 34.038 0 01-3.715.193zm51.238-46.69a42.8 42.8 0 00-3.675.172c-8.434.741-18.635 3.827-28.724 8.71-10.089 4.881-18.849 10.971-24.665 17.061-5.816 6.09-7.866 11.358-6.09 15.012 1.777 3.654 7.288 5.268 15.55 4.537 8.435-.741 18.636-3.826 28.725-8.708 10.089-4.883 18.848-10.952 24.664-17.103 5.816-6.151 7.866-11.348 6.09-15.002-1.482-3.096-5.653-4.69-11.875-4.69v.01z'
        fill='#262626' />
      <path
        d='M177.688 134.061l-63.306 7.267-15.296 40.438 81.83 2.75-3.228-50.455zM242.668 133.167l63.509 28.684 5.095 43.878-74.877-24.025 6.273-48.537z'
        fill={colorCustom} />
      <path
        d='M196.912 135.309c-5.603.548-26.004 2.416-31.232 4.76-17.752 7.968-3.715 122.145-6.09 122.47.599-.081 106.24-10.15 106.24-10.15-4.141-40.133 3.766-69.598-18.706-114.766-6.374-12.829-36.154-3.715-50.212-2.314z'
        fill={colorCustom} />
      <path
        d='M193.694 142.12s3.35 27.953 18.412 24.36c15.063-3.594 7.887-28.705 7.887-28.705l-26.299 4.345z'
        fill='#262626' />
      <path
        d='M209.518 167.312a10.049 10.049 0 01-5.887-1.898c-8.252-5.745-10.353-22.523-10.434-23.234a.508.508 0 01.416-.558l26.309-4.354a.476.476 0 01.568.355c.183.619 4.274 15.225-.741 23.832a11.47 11.47 0 01-7.511 5.522c-.89.218-1.803.331-2.72.335zm-15.225-24.776c.406 2.811 2.812 17.082 9.937 22.046a9.318 9.318 0 007.785 1.41 10.467 10.467 0 006.882-5.075c4.324-7.399 1.401-20.097.761-22.604l-25.365 4.223zM253.803 184.699a.52.52 0 01-.498-.366l-10.799-39.128a.52.52 0 01.186-.553.537.537 0 01.389-.105.537.537 0 01.349.2.528.528 0 01.091.184l10.799 39.128a.486.486 0 01-.046.385.505.505 0 01-.309.235.309.309 0 01-.162.02zM165.488 194.158a.509.509 0 01-.498-.426l-5.745-37.017a.5.5 0 01.427-.579.509.509 0 01.578.417l5.735 37.047a.502.502 0 01-.231.511.499.499 0 01-.185.068l-.081-.021z'
        fill='#262626' />
      <path
        d='M238.628 109.741c-1.431-3.816-4.831-6.476-7.734-9.348-6.587-6.496-9.48-14.718-14.281-22.33A29.012 29.012 0 00211 71.577c-6.425 1.31-14.332 3.147-20.462 5.857-19.366 8.556-24.847 18.838-25 18.98.782 10.434 3.796 27.324 7.105 37.23 1.543 4.72 3.411 11.044 8.78 12.759 1.533.487-.609-1.096.934-1.533 5.268-1.482 10.931-2.842 15.854-5.257 4.608-2.264 8.12-5.979 12.586-8.364 2.984-1.594 6.09-1.756 9.257-2.03.65 0 1.299-.101 1.949-.173 4.892-.507 9.794-2.273 13.245-5.765 3.451-3.491 5.106-8.932 3.38-13.54z'
        fill='#fff' />
      <path
        d='M181.799 146.971a1.877 1.877 0 01-.579-.122c-5.41-1.725-7.359-7.693-8.922-12.505l-.193-.568c-3.43-10.454-6.343-27.527-7.105-37.352a.487.487 0 01.153-.406c1.603-2.568 8.12-11.53 25.141-19.041 6.395-2.822 14.799-4.71 20.564-5.887a.53.53 0 01.436.111 29.648 29.648 0 015.715 6.598c1.563 2.497 2.933 5.075 4.273 7.572 2.842 5.328 5.532 10.363 9.927 14.707.528.518 1.076 1.015 1.624 1.553 2.466 2.334 5.075 4.74 6.232 7.978 1.695 4.537.274 10.15-3.542 14.058-4.06 4.141-9.623 5.501-13.551 5.917-.659.071-1.319.122-1.969.173h-.467c-3.045.223-5.846.436-8.597 1.908a46.278 46.278 0 00-5.816 3.928 43.887 43.887 0 01-6.78 4.446 76.602 76.602 0 01-13.428 4.598l-2.507.69a.463.463 0 00-.224.101c.013.141.05.279.112.406a.837.837 0 010 .934.671.671 0 01-.497.203zm-15.743-50.456c.751 9.795 3.634 26.624 7.014 36.946l.192.569c1.462 4.496 3.289 10.069 7.988 11.764a1.201 1.201 0 01.061-.812 1.272 1.272 0 01.863-.63l2.517-.7a75.16 75.16 0 0013.246-4.527 42.764 42.764 0 006.618-4.344 47.538 47.538 0 015.948-4.06c2.933-1.573 5.877-1.797 8.993-2.03h.467c.649 0 1.289-.102 1.938-.163 3.766-.406 9.064-1.695 12.931-5.623 3.553-3.603 4.882-8.82 3.319-12.992-1.126-3.045-3.593-5.339-5.968-7.592-.558-.528-1.106-1.015-1.644-1.573-4.507-4.446-7.359-9.785-10.15-14.951-1.32-2.487-2.69-5.075-4.233-7.511a28.44 28.44 0 00-5.328-6.202c-5.715 1.168-13.896 3.045-20.118 5.776-16.727 7.389-23.121 16.138-24.685 18.645l.031.01z'
        fill='#262626' />
      <path
        d='M213.314 84.061s8.465 11.48 9.135 21.925a14.964 14.964 0 01-7.663 14.473l5.207 17.316s2.741 8.831-8.516 10.709a19.424 19.424 0 01-17.783-6.354l-10.779-31.465s10.15-10.76 5.684-21.863c0 0 16.727 2.69 24.715-4.74z'
        fill='#fff' />
      <path
        d='M208.199 149.265a20.292 20.292 0 01-14.921-6.831.542.542 0 01-.081-.152l-10.769-31.465a.496.496 0 01.112-.508c.101-.111 9.886-10.657 5.572-21.315a.51.51 0 01.294-.664.499.499 0 01.264-.026c.163 0 16.575 2.558 24.289-4.618a.548.548 0 01.396-.132.525.525 0 01.355.203c.355.477 8.567 11.723 9.257 22.198a15.614 15.614 0 01-7.562 14.748l5.075 16.92a8.863 8.863 0 01-.863 6.801c-1.461 2.375-4.171 3.907-8.059 4.557-1.11.186-2.234.281-3.359.284zm-14.058-7.43a19.072 19.072 0 0017.255 6.09c3.573-.599 6.09-1.969 7.349-4.06a8.12 8.12 0 00.771-5.988l-5.197-17.316a.511.511 0 01.264-.599 14.312 14.312 0 007.379-13.976c-.589-9.024-7.186-18.981-8.729-21.204-7.237 6.192-20.361 5.075-23.863 4.598 3.462 10.09-4.466 19.752-5.876 21.315l10.647 31.14z'
        fill='#262626' />
      <path
        d='M188.203 106.625s-8.952-10.404-12.708-1.015c-3.755 9.389 7.532 15.052 12.657 12.738'
        fill='#fff' />
      <path
        d='M185.493 119.373a12.47 12.47 0 01-8.221-3.44 9.141 9.141 0 01-2.203-10.516c1.015-2.466 2.416-3.867 4.263-4.182 4.273-.71 9.135 4.822 9.298 5.075a.52.52 0 01-.061.721.5.5 0 01-.711 0c0-.061-4.649-5.329-8.353-4.72-1.472.244-2.649 1.442-3.492 3.553a8.124 8.124 0 001.959 9.409c2.812 2.69 7.298 3.887 10.008 2.669a.508.508 0 01.579.811.487.487 0 01-.163.113c-.921.37-1.91.543-2.903.507zM206.301 107.782a.507.507 0 01-.508-.487.518.518 0 01.498-.528s3.725-.132 5.186-1.543a.174.174 0 000-.142c-.101-1.431-4.74-5.339-7.653-7.47a.518.518 0 01-.112-.711.52.52 0 01.332-.203.51.51 0 01.379.091c1.319.965 7.907 5.908 8.12 8.222a1.138 1.138 0 01-.345.934c-1.736 1.695-5.694 1.827-5.857 1.837h-.04zM214.806 120.459s-8.891 3.939-14.605 4.172c0 0 9.886 11.896 18.645 9.135l-4.04-13.307z'
        fill='#262626' />
      <path
        d='M216.116 134.73c-8.12 0-15.936-9.327-16.311-9.774a.488.488 0 01-.112-.254.489.489 0 01.041-.274.529.529 0 01.446-.304c5.552-.224 14.332-4.06 14.423-4.131a.533.533 0 01.417 0 .512.512 0 01.274.314l4.06 13.347a.522.522 0 01-.335.64 9.719 9.719 0 01-2.903.436zm-14.85-9.662c2.284 2.466 9.998 10.089 16.951 8.394l-3.725-12.312c-1.929.802-8.313 3.43-13.226 3.918zM198.185 101.989c.733-.264.95-1.526.484-2.818-.466-1.292-1.438-2.125-2.171-1.86-.733.263-.949 1.525-.484 2.817.466 1.292 1.438 2.125 2.171 1.861z'
        fill='#262626' />
      <path
        d='M170.715 127.361c2.669 10.282 7.978 29.09 22.452 19.224a14.207 14.207 0 005.866-8.871c1.299-6.516-9.632-11.703-14.727-13.986'
        fill='#fff' />
      <path
        d='M185.605 149.864a8.65 8.65 0 01-3.045-.548c-7.369-2.761-10.597-15.164-12.332-21.833a.523.523 0 111.015-.253c1.563 6.029 4.831 18.554 11.703 21.132 2.882 1.086 6.242.345 9.977-2.203a13.675 13.675 0 005.654-8.546c1.268-6.374-10.556-11.683-14.444-13.418a.52.52 0 01-.141-.834.508.508 0 01.557-.1c7.105 3.167 16.301 8.12 15.022 14.555a14.683 14.683 0 01-6.09 9.186 14.153 14.153 0 01-7.876 2.862zM206.849 117.881a12.179 12.179 0 01-2.254-.213c-7.379-1.36-6.902-7.196-6.891-7.247a.498.498 0 01.497-.457h16.088a.492.492 0 01.365.153.504.504 0 01.142.355 7.684 7.684 0 01-2.71 5.633 8.116 8.116 0 01-5.237 1.776zm-8.12-6.902c.061 1.259.731 4.71 6.09 5.695a7.972 7.972 0 003.481.093 7.966 7.966 0 003.187-1.403 6.711 6.711 0 002.315-4.344l-15.073-.041zM208.412 97.175a.46.46 0 01-.163 0 .51.51 0 01-.314-.639 5.976 5.976 0 012.872-3.299 4.397 4.397 0 013.664.153.506.506 0 01-.044.901.507.507 0 01-.362.022 3.457 3.457 0 00-2.852-.152 5.076 5.076 0 00-2.324 2.71.505.505 0 01-.477.305z'
        fill='#262626' />
      <path
        d='M110.332 181.268c-11.53 7.348-25.933-6.719-19.721-25.02 6.212-18.3 49.735-62.179 49.735-62.179s-3.654-10.343-.365-14.21c3.288-3.867 9.652-1.766 9.652-1.766s3.756-16.697 7.105-15.479c3.35 1.218-2.202 17.255-2.202 17.255s8.911-17.67 11.165-14.27c2.253 3.4-6.628 16.524-6.628 16.524s5.359-.69 2.08 6.912a24.863 24.863 0 01-9.987 11.165s-29.313 73.729-40.834 81.068z'
        fill='#fff' />
      <path
        d='M103.755 183.775a13.076 13.076 0 01-8.12-2.953c-5.45-4.294-9.287-13.612-5.501-24.777 6.009-17.721 45.929-58.372 49.664-62.148-.599-1.797-3.329-10.708-.173-14.433 2.934-3.472 7.968-2.497 9.623-2.03.659-2.802 3.349-13.591 6.272-15.225a1.648 1.648 0 011.37-.132c2.487.903 1.117 7.704-.304 12.779 2.507-4.436 6.09-10.15 8.262-10.262a1.342 1.342 0 011.238.66c2.101 3.197-4.131 13.266-6.09 16.331a3.042 3.042 0 012.03 1.137c1.015 1.3.823 3.471-.477 6.455a25.108 25.108 0 01-10.15 11.389c-2.426 6.709-29.81 74.044-40.843 81.078a12.693 12.693 0 01-6.801 2.131zm41.991-105.763a6.772 6.772 0 00-5.349 2.142c-3.045 3.624.416 13.642.456 13.743a.51.51 0 01-.121.528c-.427.436-43.534 44.01-49.644 61.986-3.613 10.657 0 19.539 5.187 23.609a11.529 11.529 0 0013.783.822c11.165-7.105 40.326-80.073 40.6-80.784a.5.5 0 01.234-.284 24.553 24.553 0 009.764-10.932c1.117-2.598 1.32-4.476.589-5.45a2.51 2.51 0 00-2.132-.761.51.51 0 01-.497-.244.487.487 0 010-.548c2.416-3.573 8.303-13.408 6.628-15.966-.132-.203-.254-.213-.335-.203-2.03.111-7.156 8.912-9.937 14.433a.506.506 0 01-.649.234.479.479 0 01-.316-.441.502.502 0 01.031-.189c3.705-10.738 3.695-16.24 2.507-16.615a.606.606 0 00-.538.07c-2.344 1.28-5.075 11.288-5.887 15.043a.498.498 0 01-.253.325.479.479 0 01-.406 0 13.091 13.091 0 00-3.715-.518z'
        fill='#262626' />
      <path
        d='M106.425 44.954l23.781 207.222 158.695-18.209L265.13 26.745 106.425 44.954zm161.293 121.302L135.484 181.42 121.396 58.606 253.63 43.38l14.088 122.876z'
        fill='#fff' />
      <path
        d='M130.206 252.683a.476.476 0 01-.315-.111.498.498 0 01-.192-.335L105.927 45.014a.492.492 0 01.098-.377.495.495 0 01.339-.191l158.705-18.21a.52.52 0 01.501.261c.032.058.051.121.057.186l23.782 207.233a.51.51 0 01-.447.558l-158.705 18.209h-.051zM107.003 45.41l23.65 206.208 157.69-18.098-23.66-206.217-157.68 18.107zm28.491 136.538a.514.514 0 01-.507-.447L120.899 58.686a.508.508 0 01.446-.558l132.234-15.225a.46.46 0 01.376.112.502.502 0 01.223.365l14.088 122.815a.51.51 0 01-.446.559l-132.275 15.184-.051.01zm-13.53-122.815l13.977 121.8L267.17 165.87 253.163 44.02 121.964 59.133z'
        fill='#262626' />
      <path
        d='M149.44 190.697c.071-.142.132-.274.203-.396a5.258 5.258 0 011.949-2.03 4.573 4.573 0 012.122-.598 4.406 4.406 0 014.476 3.298 8.23 8.23 0 01.203 1.797 7.08 7.08 0 01-.173 1.735 6.918 6.918 0 01-1.157 2.497 23.046 23.046 0 01-1.797 2.183l-3.308 3.654c-.315.355-.62.73-.934 1.096l-.061.071-.315-.254c-1.319-1.015-2.669-1.918-4.06-2.842-.883-.609-1.766-1.208-2.608-1.878a9.016 9.016 0 01-1.655-1.634 6.388 6.388 0 01-1.086-2.202 9.24 9.24 0 01-.314-1.807 4.352 4.352 0 012.466-4.324 4.546 4.546 0 014.984.599c.354.276.671.597.944.954 0 0 .091.051.121.081z'
        fill={colorCustom} />
      <path
        d='M181.443 200.918a.51.51 0 01-.213 0l-3.146-1.441a10.305 10.305 0 01-3.289.954 9.668 9.668 0 01-6.537-1.512 7.048 7.048 0 01-3.276-5.172 7.04 7.04 0 012.018-5.78 10.052 10.052 0 0112.566-1.472 7.264 7.264 0 013.268 5.177 7.106 7.106 0 01-1.32 4.912l.427 3.776a.517.517 0 01-.203.477.522.522 0 01-.295.081zm-3.39-2.557c.071.001.14.018.203.05l2.558 1.168-.355-3.045a.511.511 0 01.101-.356 6.09 6.09 0 001.239-4.364 6.263 6.263 0 00-.92-2.535 6.27 6.27 0 00-1.902-1.911 9.01 9.01 0 00-11.256 1.299 6.025 6.025 0 00-1.746 4.969 6.017 6.017 0 002.832 4.44 8.67 8.67 0 005.846 1.34 9.032 9.032 0 003.167-.954.461.461 0 01.233-.101zM198.039 198.188a.504.504 0 01-.467-.365l-1.878-6.182-7.491-2.822a.503.503 0 01-.325-.487.496.496 0 01.335-.467l15.57-5.582a.542.542 0 01.538.132.513.513 0 01.102.538l-5.958 14.92a.49.49 0 01-.426.315zm-8.12-9.835l6.384 2.425a.511.511 0 01.304.325l1.523 5.075 5.004-12.525-13.215 4.7z'
        fill='#D1D3D4' />
      <path
        d='M196.09 191.763a.5.5 0 01-.456-.697.5.5 0 01.111-.166l7.907-8.485a.505.505 0 01.72-.02.513.513 0 01.16.356.512.512 0 01-.14.364l-7.937 8.455a.514.514 0 01-.365.193zM143.543 216.255a.514.514 0 01-.507-.446.515.515 0 01.446-.569l128.175-14.697a.513.513 0 01.563.452.513.513 0 01-.452.563l-128.174 14.697h-.051zM144.873 227.917a.506.506 0 01-.483-.646.508.508 0 01.432-.369l109.031-12.504a.51.51 0 11.112 1.015l-109.031 12.504h-.061z'
        fill='#D1D3D4' />
      <path
        d='M294.22 194.138c-10.617-25.628-15.225-61.224-15.225-61.224s-18.067-3.634-19.417-15.408c-1.35-11.774 15.124-7.389 15.124-7.389.005-3.646-.41-7.28-1.239-10.83 2.406.406 38.042 47.766 44 86.275 2.69 17.742-12.636 34.215-23.243 8.576z'
        fill='#fff' />
      <path
        d='M306.816 207.881c-4.77 0-9.45-4.79-13.063-13.54-9.957-24.045-14.697-57.215-15.225-61.011a40.913 40.913 0 01-8.983-3.259c-6.293-3.187-9.916-7.521-10.495-12.514-.335-2.934.376-5.187 2.101-6.679 3.675-3.177 10.82-1.898 13.023-1.411a46.538 46.538 0 00-1.249-10.049.517.517 0 01.112-.466.531.531 0 01.467-.163c2.456.416 38.377 47.705 44.406 86.681 1.573 10.15-2.608 20.3-9.135 22.137a7.206 7.206 0 01-1.959.274zm-12.129-13.936c3.897 9.43 8.942 14.048 13.824 12.678 5.958-1.665 9.876-11.48 8.404-21.001-5.521-35.728-36.448-78.398-42.63-84.986.617 3.123.93 6.298.934 9.481a.518.518 0 01-.639.487c-.092 0-8.861-2.304-12.739 1.015-1.461 1.258-2.03 3.207-1.745 5.795 1.289 11.277 18.838 14.931 19.011 14.962a.524.524 0 01.406.436c0 .355 4.73 35.829 15.225 61.103l-.051.03zM146.588 92.587h-.071a.519.519 0 01-.426-.588 5.421 5.421 0 012.355-3.888 6.952 6.952 0 013.045-1.015 17.417 17.417 0 01-3.593-2.497c-.711-.64-.955-1.248-.711-1.796.873-2.03 9.358-1.411 11.936-1.188a.507.507 0 01.457.558.478.478 0 01-.174.348.497.497 0 01-.374.11c-5.562-.498-10.566-.234-10.911.578 0 0 0 .243.457.629a14.493 14.493 0 005.927 3.34c.63.09 1.015.202 1.096.213a.52.52 0 01.376.578.508.508 0 01-.538.416 6.866 6.866 0 01-1.147-.213 8.118 8.118 0 00-5.308.792 4.44 4.44 0 00-1.898 3.197.512.512 0 01-.498.426z'
        fill='#262626' />
      <path
        d='M243.013 71.871a.467.467 0 01-.335-.122l-.213-.213c-1.015-1.015-2.03-1.928-2.933-2.821l-.132-.112c-.609-.569-1.228-1.147-1.807-1.776a8.202 8.202 0 01-1.238-1.645 5.826 5.826 0 01-.67-2.131 8.013 8.013 0 010-1.624 4.062 4.062 0 012.923-3.685 4.242 4.242 0 014.527 1.239c.133.132.255.275.365.426a4.666 4.666 0 011.858-1.33 4.254 4.254 0 012.03-.264 4.144 4.144 0 013.715 3.715 7.139 7.139 0 010 1.614 6.807 6.807 0 01-.386 1.533 6.47 6.47 0 01-1.36 2.03 18.827 18.827 0 01-1.797 1.614l-3.166 2.598-.609.528-.295.254a.624.624 0 01-.477.172zm-3.045-13.327a4.137 4.137 0 00-1.076.163 3.119 3.119 0 00-2.192 2.801 6.75 6.75 0 000 1.421 4.87 4.87 0 00.558 1.766 7.245 7.245 0 001.086 1.442c.548.598 1.167 1.167 1.756 1.715l.132.122c.924.862 1.898 1.776 2.842 2.72l.619-.528 3.157-2.598a17.491 17.491 0 001.705-1.533 5.233 5.233 0 001.157-1.736c.158-.415.267-.848.325-1.289a6.41 6.41 0 00.051-1.37 3.165 3.165 0 00-.792-1.797 3.104 3.104 0 00-2.03-1.015 3.177 3.177 0 00-1.573.193 3.728 3.728 0 00-1.665 1.28l-.152.202-.061.081a.52.52 0 01-.426.214.543.543 0 01-.416-.234l.436-.274-.436.254c-.176-.311-.387-.6-.63-.863a3.341 3.341 0 00-2.446-1.137h.071zm3.045 1.452l.416.294-.416-.294zM237.197 94.658h-.091a1.737 1.737 0 01-1.401-.76.51.51 0 01.112-.7.518.518 0 01.71.11.737.737 0 00.62.335h.05a3.544 3.544 0 002.264-1.309 25.72 25.72 0 005.998-18.118.511.511 0 01.124-.37.5.5 0 01.353-.168.509.509 0 01.538.467 26.824 26.824 0 01-6.232 18.839 4.566 4.566 0 01-3.045 1.674z'
        fill='#D1D3D4' />
    </Svg>
  )
}

export default React.memo(SocialMediaSvg)