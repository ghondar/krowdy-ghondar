import React from 'react'
import Svg from '../../Svg'
import useGetColor from '../../useGetColor'

const CustomerServiceSvg = ({ width, height, color }) => {
  const colorCustom = useGetColor({ color })

  return (
    <Svg
      height={height}
      width={width}>
      <path
        d='M185.777 134.243s-33.901-13.256-45.39-4.141c-11.49 9.115-45.96 107.651-39.585 124.155 6.374 16.504 53.896 8.191 53.896 8.191s133.452 7.937 147.013 2.842c20.168-7.592-24.614-126.5-31.293-132.813-6.679-6.313-37.555 4.578-37.555 4.578'
        fill={colorCustom} />
      <path
        d='M157.824 235.215a.49.49 0 01-.284-.091c-15.895-10.85-36.296-8.069-36.54-8.039a.507.507 0 01-.142-1.005c.213 0 20.99-2.872 37.21 8.201a.515.515 0 01.212.528.527.527 0 01-.456.406zM256.208 235.215a.51.51 0 01-.503-.354.51.51 0 01.209-.58c16.24-11.073 37.007-8.231 37.22-8.201a.509.509 0 01.426.569.518.518 0 01-.578.436c-.203 0-20.605-2.812-36.49 8.039a.52.52 0 01-.284.091zM147.522 220.559a.51.51 0 01-.477-.538l3.563-60.413a.514.514 0 01.341-.45.506.506 0 01.197-.027.51.51 0 01.453.34.51.51 0 01.024.198l-3.563 60.413a.515.515 0 01-.538.477zM256.208 220.558a.507.507 0 01-.507-.507v-57.855a.507.507 0 111.015 0v57.855a.508.508 0 01-.508.507zM174.044 130.417s11.632 60.808 33.495 89.634c0 0 29.618-53.064 35.383-86.123 0 0-22.472 4.314-30.785 4.395-8.313.082-38.093-7.906-38.093-7.906z'
        fill='#262626' />
      <path
        d='M207.488 220.559a.489.489 0 01-.406-.203c-21.66-28.593-33.444-89.229-33.566-89.838a.524.524 0 01.152-.467.493.493 0 01.477-.122c.295.082 29.435 7.887 37.799 7.887h.132c8.181-.081 30.45-4.334 30.704-4.385a.493.493 0 01.446.142.487.487 0 01.142.447c-5.714 32.764-35.149 85.747-35.443 86.275a.503.503 0 01-.406.264h-.031zm-32.784-89.442c1.451 7.196 12.87 61.154 32.744 88 3.44-6.272 29.211-53.947 34.824-84.549-3.979.751-22.624 4.182-30.155 4.263h-.132c-7.796-.041-32.44-6.435-37.281-7.714z'
        fill='#262626' />
      <path
        d='M200.546 152.909l4.699 8.15-11.835 35.038 14.109 23.954 12.87-25.07-9.318-33.769 4.903-8.303-7.775-7.714-7.653 7.714z'
        fill='#D1D3D4' />
      <path
        d='M207.488 220.558a.499.499 0 01-.446-.253l-14.099-23.954a.47.47 0 010-.416l11.754-34.815-4.588-7.947a.508.508 0 01.081-.609l7.643-7.714a.385.385 0 01.366-.153.493.493 0 01.355.153l7.775 7.714a.497.497 0 01.081.619l-4.791 8.12 9.267 33.566a.57.57 0 010 .365l-12.88 25.071a.517.517 0 01-.437.274l-.081-.021zm-13.52-24.522l13.52 22.939 12.363-24.066-9.267-33.586a.498.498 0 010-.396l4.699-7.957-7.105-7.105-7.013 7.105 4.506 7.815a.533.533 0 010 .416l-11.703 34.835z'
        fill='#262626' />
      <path
        d='M184.072 128.204l44.579.142-.782 17.021h-31.485l-15.286-7.318 2.974-9.845z'
        fill='#262626' />
      <path
        d='M227.869 145.895h-31.465a.545.545 0 01-.213 0l-15.296-7.318a.517.517 0 01-.264-.609l2.974-9.835a.494.494 0 01.487-.366l44.589.142a.506.506 0 01.498.528l-.782 17.022a.509.509 0 01-.528.436zm-31.363-1.015h30.876l.741-16.006-43.645-.143-2.771 9.044 14.799 7.105z'
        fill='#262626' />
      <path
        d='M240.252 84.995c2.386-5.268 3.045-12.342 3.949-17.986.406-2.547 1.715-5.897 1.36-8.465-.254-1.796-1.482-3.248-1.594-5.278-.091-1.807-.081-3.735-1.086-5.237-1.005-1.503-3.491-2.142-4.577-.7a55.086 55.086 0 002.537-13.916 23.669 23.669 0 01-12.281 2.03 17.976 17.976 0 004.242-4.933c-3.674 2.801-8.82 1.867-13.408 1.279-10.464-1.34-21.518 0-30.653 5.308-2.933 1.705-5.887 4.202-6.222 7.592a6.699 6.699 0 00-6.364 2.213 13.706 13.706 0 00-2.974 6.344c-3.045 13.418 2.03 24.949 3.329 38.184 9.907.61 19.905 1.451 29.902 1.3 7.948-.163 29.598 1.583 33.84-7.735z'
        fill='#fff' />
      <path
        d='M214.593 93.257h-8.14c-8.12.132-16.332-.416-24.269-.934l-5.674-.365a.509.509 0 01-.477-.457c-.426-4.273-1.258-8.414-2.03-12.423-1.735-8.618-3.37-16.758-1.258-25.924a13.866 13.866 0 013.045-6.567 7.396 7.396 0 016.323-2.547c.497-2.75 2.649-5.248 6.395-7.42 8.485-4.933 19.488-6.84 30.977-5.38l1.015.133c4.324.568 8.8 1.167 12.038-1.3a.499.499 0 01.64 0 .514.514 0 01.166.302.512.512 0 01-.065.338 18.498 18.498 0 01-3.461 4.273 23.09 23.09 0 0010.82-2.03.506.506 0 01.668.234.515.515 0 01.053.253 55.496 55.496 0 01-2.152 12.688c.311-.084.632-.121.954-.112a4.064 4.064 0 013.157 1.726 9.537 9.537 0 011.147 4.993v.498c.1.973.371 1.922.801 2.801.367.774.629 1.593.782 2.436a16.817 16.817 0 01-.771 5.999c-.234.934-.457 1.817-.589 2.619-.163 1.015-.325 2.141-.487 3.258-.711 4.922-1.523 10.505-3.502 14.85-3.289 7.246-16.26 8.058-26.106 8.058zm-7.196-1.086h2.913c9.074.122 25.974.345 29.506-7.46 1.918-4.222 2.72-9.724 3.42-14.576.163-1.126.325-2.222.498-3.278.132-.842.355-1.746.588-2.7.566-1.794.81-3.673.721-5.552a8.689 8.689 0 00-.71-2.182 9.097 9.097 0 01-.883-3.147v-.497a8.714 8.714 0 00-1.015-4.476 3.043 3.043 0 00-2.335-1.28 1.635 1.635 0 00-1.411.6.505.505 0 01-.873-.108.53.53 0 01-.02-.349 54.285 54.285 0 002.466-12.961 24.105 24.105 0 01-11.784 1.735.49.49 0 01-.426-.365.5.5 0 01.162-.538 17.261 17.261 0 002.944-3.045c-3.299 1.39-7.278.863-10.85.385l-1.015-.121c-11.267-1.442-22.036.416-30.329 5.237-3.704 2.152-5.714 4.578-5.978 7.207a.489.489 0 01-.213.365.509.509 0 01-.416.071 6.205 6.205 0 00-5.877 2.03 13.051 13.051 0 00-2.852 6.09c-2.03 8.962-.447 16.991 1.268 25.497.782 3.897 1.584 7.927 2.03 12.099l5.248.335c7.927.517 16.118 1.015 24.187.933l1.036.051z'
        fill='#262626' />
      <path
        d='M185.777 140.485s8.252 4.222 22.422 4.71c14.169.487 16.544-3.36 16.544-3.36l-.345-7.582-.771-17.62-.772-16.413-32.338-1.117-1.542 13.297-.477 4.344-2.721 23.741z'
        fill='#fff' />
      <path
        d='M210.604 145.743h-2.426c-14.118-.487-22.543-4.72-22.624-4.761a.482.482 0 01-.274-.507l4.73-41.443a.49.49 0 01.338-.425.489.489 0 01.19-.021l32.338 1.116a.51.51 0 01.487.488l1.867 41.615a.487.487 0 01-.081.294c-.091.172-2.436 3.644-14.545 3.644zm-24.279-5.552c1.635.741 9.531 4.06 21.894 4.496 12.18.416 15.438-2.416 15.986-3.045l-1.827-41.006-31.414-1.096-4.639 40.651z'
        fill='#262626' />
      <path
        d='M188.498 116.785c2.304 4.06 6.242 7.237 10.302 9.683 6.821 4.06 17.092 8.79 25.578 7.795l-.772-17.62a79.275 79.275 0 01-18.655-.528c-5.441-.66-11.043-1.401-15.976-3.675l-.477 4.345z'
        fill='#262626' />
      <path
        d='M221.962 134.903c-8.709 0-18.27-4.893-23.426-7.999-4.882-2.943-8.414-6.262-10.485-9.865a.532.532 0 01-.061-.305l.477-4.344a.524.524 0 01.254-.386.51.51 0 01.467 0c5.004 2.304 10.749 3.045 15.824 3.634a78.456 78.456 0 0018.533.517.526.526 0 01.385.119.501.501 0 01.128.161.506.506 0 01.056.198l.771 17.63a.497.497 0 01-.446.518c-.823.092-1.65.132-2.477.122zm-32.947-18.27c2.03 3.4 5.37 6.546 10.049 9.358 5.46 3.278 15.874 8.587 24.786 7.775l-.731-16.606c-6.092.5-12.221.305-18.27-.578-4.923-.609-10.485-1.289-15.479-3.431l-.355 3.482z'
        fill='#262626' />
      <path
        d='M232.335 63.183c1.604.162 1.178 4.658 1.188 7.023v11.998c0 4.7.162 9.43 0 14.118a25.08 25.08 0 01-.68 4.984 24.808 24.808 0 01-24.959 18.94l-2.893-.112a24.796 24.796 0 01-23.893-25.639c.092-2.73 0-5.49 0-8.231 0-3.482-1.837-11.977 2.274-13.55a17.336 17.336 0 014.171-.62 14.985 14.985 0 0010.211-5.836l-.659 3.827c7.059.635 14.17-.34 20.797-2.852 3.248-1.239 6.608-3.046 7.937-6.294l-.122 7.105c1.685-.243 2.853-1.735 3.989-3.044 1.137-1.31 2.061-1.878 2.639-1.817z'
        fill='#fff' />
      <path
        d='M208.777 120.764h-.873l-2.892-.112a25.26 25.26 0 01-17.631-8.015 25.276 25.276 0 01-6.78-18.141c.061-1.817 0-3.675 0-5.471v-2.75c0-.701-.081-1.615-.173-2.67-.355-4.213-.842-9.968 2.781-11.348 1.03-.34 2.104-.528 3.188-.558l1.096-.102a14.554 14.554 0 009.845-5.643.508.508 0 01.904.386l-.559 3.288a46.402 46.402 0 0020.036-2.903c4.172-1.583 6.608-3.491 7.654-6.009a.487.487 0 01.568-.304.508.508 0 01.406.507l-.112 6.405a7.697 7.697 0 002.792-2.355l.294-.335c1.279-1.441 2.233-2.03 3.045-2.03 1.807.193 1.736 3.41 1.665 6.253v17.976c0 3.095.081 6.292 0 9.439a25.257 25.257 0 01-25.294 24.421l.04.071zm-11.824-52.78a15.653 15.653 0 01-9.349 4.618l-1.126.102c-.99.017-1.972.181-2.913.487-2.903 1.106-2.446 6.435-2.122 10.312.092 1.086.173 2.03.173 2.761V94.516a24.263 24.263 0 0014.201 22.945 24.273 24.273 0 009.225 2.166l2.903.112a24.255 24.255 0 0017.42-6.499 24.245 24.245 0 007.691-16.927c.102-3.127.061-6.314 0-9.4V70.208v-1.3c0-1.664.122-5.125-.751-5.217-.203 0-.822.092-2.203 1.645l-.284.375c-1.065 1.218-2.263 2.599-3.989 2.842a.505.505 0 01-.416-.111.517.517 0 01-.172-.396l.091-5.075c-1.421 1.928-3.766 3.481-7.217 4.79a47.56 47.56 0 01-21.02 2.883.503.503 0 01-.448-.381.485.485 0 01-.009-.208l.315-2.07z'
        fill='#262626' />
      <path
        d='M207.61 79.078s8.12 17.975 4.537 18.27c-3.583.294-8.719-2.335-8.719-2.335'
        fill='#fff' />
      <path
        d='M211.548 97.916c-3.623 0-8.12-2.345-8.323-2.446a.5.5 0 01-.251-.3c-.02-.065-.026-.133-.02-.2a.509.509 0 01.738-.404c.051 0 5.075 2.609 8.435 2.304a.324.324 0 00.284-.182c1.086-1.868-2.639-11.663-5.238-17.397a.51.51 0 01.64-.66.507.507 0 01.284.243c.711 1.564 6.892 15.398 5.187 18.27a1.32 1.32 0 01-1.066.69 2.358 2.358 0 01-.67.082zM198.171 87.736c.941 0 1.705-1.468 1.705-3.279 0-1.81-.764-3.278-1.705-3.278-.942 0-1.706 1.468-1.706 3.278s.764 3.279 1.706 3.279zM219.658 87.736c.942 0 1.705-1.468 1.705-3.279 0-1.81-.763-3.278-1.705-3.278-.942 0-1.705 1.468-1.705 3.278s.763 3.279 1.705 3.279z'
        fill='#262626' />
      <path
        d='M228.651 128.346c-.609 0-20.645 16.849-20.645 16.849l12.383 14.443 13.195-25.243-4.933-6.049z'
        fill='#fff' />
      <path
        d='M220.389 160.105a.537.537 0 01-.386-.182l-12.383-14.434a.531.531 0 01-.122-.375.508.508 0 01.183-.345c20.168-16.971 20.737-16.971 20.97-16.971a.532.532 0 01.396.183l4.973 6.09a.5.5 0 01.051.558l-13.195 25.243a.52.52 0 01-.396.264l-.091-.031zm-11.662-14.89l11.56 13.479 12.728-24.278-4.476-5.451c-2.02 1.431-12.555 10.191-19.812 16.291v-.041z'
        fill='#262626' />
      <path
        d='M184.072 128.204c.66 0 24.127 16.991 24.127 16.991l-14.312 14.443-14.321-27.567 4.506-3.867z'
        fill='#fff' />
      <path
        d='M193.887 160.105h-.081a.498.498 0 01-.375-.264l-14.312-27.567a.505.505 0 01.122-.619l4.496-3.868a.51.51 0 01.335-.121c.203 0 .822 0 24.421 17.092a.489.489 0 01.185.579.496.496 0 01-.114.182l-14.271 14.474a.513.513 0 01-.406.112zm-13.682-27.913l13.804 26.593 13.408-13.53c-8.668-6.272-21.315-15.285-23.264-16.453l-3.948 3.39zM207.976 112.948h-.731c-9.673-.68-11.713-11.713-11.734-11.825a.498.498 0 01.102-.406.514.514 0 01.386-.182l25.791-.873a.483.483 0 01.436.213.497.497 0 010 .477c-.152.507-5.075 12.596-14.25 12.596zm-11.338-11.449c.558 2.192 3.045 9.886 10.678 10.414 7.633.528 12.454-8.567 13.702-11.226l-24.38.812z'
        fill='#262626' />
      <path
        d='M176.257 66.573h4.841v32.48h-4.831a9.258 9.258 0 01-9.257-9.257V75.86a9.252 9.252 0 015.7-8.577 9.257 9.257 0 013.547-.71z'
        fill='#fff' />
      <path
        d='M181.098 99.56h-4.841a9.783 9.783 0 01-9.765-9.774V75.86a9.784 9.784 0 019.765-9.775h4.841a.516.516 0 01.508.508v32.48a.52.52 0 01-.508.487zm-4.841-32.48a8.772 8.772 0 00-8.75 8.78v13.926a8.77 8.77 0 008.75 8.76h4.334V67.08h-4.334z'
        fill='#262626' />
      <path
        d='M238.466 98.2h-4.831V65.72h4.831a9.262 9.262 0 016.546 2.712 9.26 9.26 0 012.711 6.545v13.956a9.256 9.256 0 01-9.257 9.267z'
        fill='#fff' />
      <path
        d='M238.456 98.698h-4.832a.506.506 0 01-.507-.508V65.71a.504.504 0 01.507-.507h4.832a9.776 9.776 0 019.774 9.764v13.966a9.783 9.783 0 01-9.774 9.765zm-4.324-1.015h4.324a8.77 8.77 0 008.759-8.75V74.977a8.767 8.767 0 00-8.759-8.75h-4.324v31.456z'
        fill='#262626' />
      <path
        d='M238.74 74.693a1.017 1.017 0 01-1.015-1.015c0-16.95-10.607-30.734-23.629-30.734h-13.195c-13.023 0-23.629 13.783-23.629 30.734a1.013 1.013 0 01-1.015 1.015 1.016 1.016 0 01-1.015-1.015c0-18.067 11.51-32.764 25.659-32.764h13.195c14.149 0 25.659 14.697 25.659 32.764a1.016 1.016 0 01-1.015 1.015zM186.985 108.909c-4.882 0-8.83-.254-9.51-1.015-1.756-2.03-2.304-11.308-2.365-12.363a.516.516 0 01.677-.513.488.488 0 01.293.265.48.48 0 01.045.197c.152 2.771.822 10.292 2.111 11.744 1.096 1.015 15.976.751 29.74-.173a.526.526 0 01.537.477.487.487 0 01-.126.368.506.506 0 01-.351.17c-2.953.193-13.205.843-21.051.843z'
        fill='#262626' />
      <path
        d='M206.585 105.701h-10.952a2.223 2.223 0 100 4.446h10.952a2.223 2.223 0 000-4.446z'
        fill='#262626' />
      <path
        d='M206.585 110.654h-10.952a2.732 2.732 0 01-1.931-4.661 2.732 2.732 0 011.931-.8h10.952a2.73 2.73 0 010 5.461zm-10.952-4.446a1.715 1.715 0 000 3.431h10.952c.455 0 .891-.181 1.213-.502a1.718 1.718 0 000-2.426 1.715 1.715 0 00-1.213-.503h-10.952zM201.398 88.75h-10.992a6.589 6.589 0 01-6.577-6.587v-5.755a.508.508 0 01.507-.507h23.152a.507.507 0 01.508.507v5.755a6.599 6.599 0 01-6.598 6.588zm-16.554-11.875v5.248a5.571 5.571 0 005.562 5.572h10.992a5.586 5.586 0 005.573-5.572v-5.248h-22.127zM228.377 88.75h-11.033a6.598 6.598 0 01-6.587-6.587v-5.755a.508.508 0 01.507-.507h23.183a.51.51 0 01.507.507v5.755a6.584 6.584 0 01-6.577 6.588zm-16.605-11.875v5.248a5.581 5.581 0 005.572 5.572h11.033a5.574 5.574 0 005.562-5.572v-5.248h-22.167z'
        fill='#262626' />
      <path
        d='M211.264 79.585a.456.456 0 01-.274-.081 3.12 3.12 0 00-2.375-.751.861.861 0 00-.528.487.51.51 0 01-.987-.12.475.475 0 01.023-.195 1.848 1.848 0 011.137-1.126c.872-.305 2.03 0 3.288.862a.51.51 0 01.195.566.51.51 0 01-.479.358zM184.336 79.585h-3.238a.51.51 0 01-.507-.507.507.507 0 01.507-.508h3.238a.516.516 0 01.508.508.509.509 0 01-.508.507z'
        fill='#262626' />
      <path
        d='M269.17 269.187H138.803l-11.753-85.199h153.884l-11.764 85.199z'
        fill='#fff' />
      <path
        d='M269.17 269.725H138.803a.496.496 0 01-.497-.436l-11.764-85.23a.546.546 0 01.122-.396.55.55 0 01.385-.183h153.885a.502.502 0 01.375.183.476.476 0 01.122.396l-11.754 85.199a.507.507 0 01-.507.467zm-129.92-1.015h129.483l11.612-84.245H127.628l11.622 84.245z'
        fill='#262626' />
      <path
        d='M270.357 269.187H137.342a3.167 3.167 0 00-3.167 3.167v.01a3.167 3.167 0 003.167 3.167h133.015a3.167 3.167 0 003.167-3.167v-.01a3.167 3.167 0 00-3.167-3.167z'
        fill='#fff' />
      <path
        d='M270.418 276.038H137.453a3.689 3.689 0 01-2.729-1.006 3.68 3.68 0 01-1.149-2.673 3.68 3.68 0 011.149-2.673 3.69 3.69 0 012.729-1.007h132.965a3.686 3.686 0 012.48 6.216 3.685 3.685 0 01-2.48 1.143zm-133.066-6.313a2.673 2.673 0 00-1.993.719 2.67 2.67 0 001.993 4.61h133.066a2.671 2.671 0 000-5.329H137.352z'
        fill='#262626' />
    </Svg>
  )
}

export default React.memo(CustomerServiceSvg)
