import React from 'react';
import PropTypes from 'prop-types';
import { useTheme } from '@material-ui/core/styles';

const Chart1 = ({ width = 254, height = 348 }) => {
  const theme = useTheme();
  const colorPrimaryMain = theme.palette.primary.main;
  const colorPrimaryDark = theme.palette.primary.dark;
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={width}
      height={height}
      fill="none"
      viewBox="0 0 254 348"
    >
      <rect
        width="250"
        height="344"
        x="2"
        y="2"
        fill={theme.palette.background.paper}
        rx="12"
      ></rect>
      <path
        fill="#96999C"
        d="M57.612 42V27.454h9.02v1.89h-6.826v4.432h6.18v1.882h-6.18V42h-2.194zm14.688.22c-1.022 0-1.915-.234-2.677-.703s-1.354-1.125-1.776-1.967c-.421-.848-.632-1.833-.632-2.955 0-1.131.211-2.121.632-2.969.422-.847 1.014-1.505 1.776-1.974.762-.469 1.655-.703 2.677-.703 1.028 0 1.92.234 2.678.703.762.469 1.354 1.127 1.776 1.974.421.848.632 1.838.632 2.97 0 1.121-.211 2.106-.632 2.954-.422.843-1.014 1.498-1.776 1.967-.757.469-1.65.703-2.677.703zm.008-1.782c.667 0 1.216-.176 1.647-.526.436-.35.758-.817.966-1.4.213-.586.32-1.228.32-1.924s-.107-1.337-.32-1.925c-.208-.587-.53-1.055-.966-1.406-.43-.355-.98-.533-1.647-.533-.668 0-1.22.178-1.655.533-.436.35-.76.82-.973 1.406a5.602 5.602 0 00-.32 1.925c0 .696.107 1.338.32 1.925.213.582.537 1.049.973 1.399.435.35.987.526 1.655.526zM79.102 42V31.09h2.053v1.734h.114a2.636 2.636 0 011.05-1.385 2.987 2.987 0 011.72-.511c.298 0 .565.035.802.106.237.071.445.168.625.291l-.682 1.776a1.866 1.866 0 00-.433-.156 2.43 2.43 0 00-.554-.057c-.734 0-1.347.232-1.84.696-.487.46-.731 1.044-.731 1.754V42h-2.124zm15.129.242c-.691 0-1.316-.128-1.875-.384a3.12 3.12 0 01-1.321-1.122c-.327-.497-.49-1.103-.49-1.818 0-.62.118-1.13.355-1.527.241-.398.561-.713.959-.945a4.844 4.844 0 011.35-.518 13.4 13.4 0 011.52-.27l1.583-.185c.407-.052.703-.135.888-.249.19-.113.284-.298.284-.553v-.05c0-.62-.175-1.101-.526-1.442-.345-.34-.861-.511-1.548-.511-.715 0-1.278.156-1.69.468-.407.313-.69.663-.846 1.051l-1.995-.454c.355-.994.947-1.707 1.775-2.138a5.85 5.85 0 012.728-.646c.435 0 .897.052 1.384.156.488.1.947.287 1.378.561.436.27.789.654 1.059 1.15.274.498.412 1.144.412 1.94V42H97.54v-1.492h-.085c-.204.408-.566.798-1.087 1.172-.521.374-1.234.562-2.138.562zm.462-1.705c.591 0 1.096-.116 1.513-.348.416-.232.733-.535.951-.91.223-.378.334-.783.334-1.214V36.66c-.1.1-.317.187-.653.263-.337.076-.692.14-1.066.192-.374.052-.677.094-.909.128-.615.08-1.143.243-1.584.49-.435.241-.653.646-.653 1.214 0 .526.194.923.582 1.193.389.265.883.398 1.485.398zm9.22-13.082V42h-2.124V27.454h2.124zm4.326 0V42h-2.123V27.454h2.123zm6.843 18.636v-15h2.073v1.768h.178c.128-.227.305-.49.533-.788.232-.298.554-.559.966-.781.416-.227.961-.341 1.633-.341.881 0 1.664.222 2.351.667.691.446 1.236 1.087 1.633 1.925.398.838.597 1.847.597 3.026 0 1.174-.196 2.185-.589 3.032-.393.843-.933 1.49-1.62 1.94-.686.45-1.47.674-2.351.674-.662 0-1.202-.111-1.619-.334-.417-.222-.746-.483-.987-.781a5.907 5.907 0 01-.547-.795h-.128v5.788h-2.123zm2.081-9.546c0 1.146.246 2.077.738 2.792.493.71 1.196 1.065 2.11 1.065.634 0 1.164-.168 1.59-.504.431-.341.756-.803.973-1.385.218-.583.327-1.238.327-1.968 0-.724-.109-1.37-.327-1.939-.213-.572-.532-1.025-.958-1.356-.426-.331-.962-.497-1.605-.497-.929 0-1.636.348-2.124 1.044-.483.691-.724 1.607-.724 2.748zm14.31 5.675c-1.07 0-1.993-.232-2.77-.696a4.666 4.666 0 01-1.797-1.953c-.416-.843-.625-1.828-.625-2.954 0-1.118.209-2.103.625-2.955.422-.852 1.009-1.518 1.762-1.996.757-.478 1.643-.717 2.656-.717a5.13 5.13 0 012.337.554c.738.364 1.337.95 1.797 1.754.464.8.696 1.858.696 3.175v.753h-7.756c.028 1.05.324 1.86.888 2.429.563.568 1.299.852 2.208.852.607 0 1.13-.13 1.57-.39.44-.261.755-.65.945-1.166l2.01.363c-.242.885-.763 1.598-1.563 2.137-.8.54-1.794.81-2.983.81zm-3.068-6.626h5.668c-.005-.834-.256-1.523-.753-2.067-.497-.55-1.158-.824-1.982-.824-.573 0-1.075.135-1.505.405a2.936 2.936 0 00-1.016 1.058 3.218 3.218 0 00-.412 1.428zM137.856 42V31.09h2.052v1.734h.114a2.637 2.637 0 011.051-1.385 2.988 2.988 0 011.719-.511c.298 0 .566.035.803.106.236.071.445.168.625.291l-.682 1.776a1.876 1.876 0 00-.434-.156 2.426 2.426 0 00-.554-.057c-.733 0-1.347.232-1.839.696-.488.46-.732 1.044-.732 1.754V42h-2.123zm7.315 0V31.09h2.123V42h-2.123zm1.072-12.592c-.369 0-.686-.123-.951-.37a1.2 1.2 0 01-.391-.895c0-.35.13-.648.391-.894.265-.251.582-.377.951-.377.365 0 .68.126.945.377.265.246.398.544.398.895 0 .345-.133.643-.398.894-.265.247-.58.37-.945.37zm7.85 12.812c-1.023 0-1.916-.234-2.678-.703s-1.354-1.125-1.776-1.967c-.421-.848-.632-1.833-.632-2.955 0-1.131.211-2.121.632-2.969.422-.847 1.014-1.505 1.776-1.974.762-.469 1.655-.703 2.678-.703 1.027 0 1.92.234 2.677.703.762.469 1.354 1.127 1.776 1.974.421.848.632 1.838.632 2.97 0 1.121-.211 2.106-.632 2.954-.422.843-1.014 1.498-1.776 1.967-.757.469-1.65.703-2.677.703zm.007-1.782c.667 0 1.217-.176 1.647-.526.436-.35.758-.817.966-1.4.213-.586.32-1.228.32-1.924s-.107-1.337-.32-1.925c-.208-.587-.53-1.055-.966-1.406-.43-.355-.98-.533-1.647-.533-.668 0-1.22.178-1.655.533-.436.35-.76.82-.973 1.406a5.604 5.604 0 00-.32 1.925c0 .696.107 1.338.32 1.925.213.582.537 1.049.973 1.399.435.35.987.526 1.655.526zm10.878 1.775c-.881 0-1.664-.225-2.351-.675-.686-.45-1.226-1.096-1.619-1.939-.393-.847-.589-1.858-.589-3.032 0-1.18.196-2.188.589-3.026.398-.838.942-1.48 1.634-1.924.691-.446 1.474-.668 2.35-.668.677 0 1.222.113 1.634.34.417.223.739.484.966.782.232.298.412.561.54.788h.127v-5.405h2.124V42h-2.074v-1.697h-.177a5.674 5.674 0 01-.554.795c-.237.298-.564.559-.981.781-.416.223-.956.334-1.619.334zm.469-1.811c.918 0 1.622-.355 2.109-1.065.493-.715.739-1.646.739-2.792 0-1.14-.244-2.057-.732-2.748-.483-.696-1.188-1.044-2.116-1.044-.639 0-1.172.166-1.598.497-.426.331-.748.784-.966 1.356-.213.569-.32 1.215-.32 1.94 0 .729.109 1.384.327 1.967.218.582.54 1.044.966 1.385.431.336.961.504 1.591.504z"
      ></path>
      <path
        fill="#96999C"
        fillRule="evenodd"
        d="M189.775 32.475a.625.625 0 010 .884l-3.333 3.333a.625.625 0 01-.884 0l-3.333-3.333a.624.624 0 11.883-.884L186 35.366l2.891-2.891a.625.625 0 01.884 0z"
        clipRule="evenodd"
      ></path>
      <path
        fill={colorPrimaryMain}
        fillRule="evenodd"
        d="M127 94c41.421 0 75 33.579 75 75s-33.579 75-75 75-75-33.579-75-75 33.579-75 75-75zm0 16c-32.585 0-59 26.415-59 59s26.415 59 59 59 59-26.415 59-59-26.415-59-59-59z"
        clipRule="evenodd"
      ></path>
      <path
        fill="#10182B"
        d="M89.83 164H87.5l5.234-14.545h2.536L100.504 164h-2.33l-1.327-3.849h-5.682L89.83 164zm1.974-5.696h4.403l-2.144-6.207h-.114l-2.145 6.207zm17.942-5.213L105.79 164h-2.273l-3.963-10.909h2.28l2.763 8.395h.113l2.756-8.395h2.28zm4.458 11.15c-.692 0-1.317-.127-1.875-.383a3.119 3.119 0 01-1.321-1.122c-.327-.497-.49-1.103-.49-1.818 0-.621.118-1.13.355-1.527.241-.398.561-.713.959-.945a4.82 4.82 0 011.349-.518 13.158 13.158 0 011.52-.27l1.584-.185c.407-.052.703-.135.887-.249.19-.113.285-.298.285-.554v-.049c0-.621-.176-1.101-.526-1.442-.346-.341-.862-.511-1.548-.511-.715 0-1.279.156-1.691.468-.407.313-.689.663-.845 1.052l-1.996-.455c.356-.994.947-1.707 1.776-2.138a5.845 5.845 0 012.727-.646c.436 0 .898.052 1.385.156.488.1.947.287 1.378.561.436.27.788.654 1.058 1.151.275.497.412 1.143.412 1.939V164h-2.074v-1.491h-.085c-.203.407-.566.797-1.087 1.171-.52.374-1.233.561-2.137.561zm.461-1.704c.592 0 1.096-.116 1.513-.348.417-.232.734-.535.952-.909.222-.379.334-.784.334-1.215v-1.406c-.1.1-.318.187-.654.263-.336.076-.691.14-1.065.192l-.909.127c-.616.081-1.144.244-1.584.491-.436.241-.653.646-.653 1.214 0 .526.194.923.582 1.193.388.265.883.398 1.484.398zm7.097 1.463v-10.909h2.123V164h-2.123zm1.072-12.592c-.369 0-.686-.123-.951-.37a1.199 1.199 0 01-.391-.895c0-.35.13-.648.391-.894.265-.251.582-.377.951-.377.365 0 .68.126.945.377.265.246.398.544.398.894 0 .346-.133.644-.398.895-.265.247-.58.37-.945.37zm5.378-1.953V164h-2.124v-14.545h2.124zm5.378 14.786c-.691 0-1.316-.127-1.875-.383a3.119 3.119 0 01-1.321-1.122c-.327-.497-.49-1.103-.49-1.818 0-.621.118-1.13.355-1.527.241-.398.561-.713.959-.945a4.82 4.82 0 011.349-.518 13.158 13.158 0 011.52-.27l1.584-.185c.407-.052.703-.135.888-.249.189-.113.284-.298.284-.554v-.049c0-.621-.176-1.101-.526-1.442-.346-.341-.862-.511-1.548-.511-.715 0-1.279.156-1.691.468-.407.313-.688.663-.845 1.052l-1.995-.455c.355-.994.946-1.707 1.775-2.138a5.848 5.848 0 012.727-.646c.436 0 .898.052 1.385.156.488.1.947.287 1.378.561.436.27.789.654 1.058 1.151.275.497.412 1.143.412 1.939V164h-2.074v-1.491h-.085c-.203.407-.566.797-1.086 1.171-.521.374-1.234.561-2.138.561zm.461-1.704c.592 0 1.097-.116 1.513-.348.417-.232.734-.535.952-.909.222-.379.334-.784.334-1.215v-1.406c-.1.1-.317.187-.654.263-.336.076-.691.14-1.065.192l-.909.127c-.616.081-1.144.244-1.584.491-.436.241-.653.646-.653 1.214 0 .526.194.923.582 1.193.388.265.883.398 1.484.398zm7.267 1.463v-14.545h2.124v5.404h.128c.128-.227.305-.49.533-.788.232-.298.553-.559.965-.781.417-.228.962-.341 1.634-.341.881 0 1.664.222 2.351.667.691.446 1.236 1.087 1.633 1.925.398.838.597 1.847.597 3.026 0 1.174-.197 2.185-.59 3.032-.393.843-.932 1.49-1.619 1.939-.686.45-1.47.675-2.351.675-.663 0-1.202-.111-1.619-.334-.417-.222-.746-.483-.987-.781a5.887 5.887 0 01-.547-.795h-.178V164h-2.074zm2.081-5.455c0 1.146.247 2.077.739 2.792.492.71 1.196 1.065 2.109 1.065.635 0 1.165-.168 1.591-.504.431-.341.756-.803.973-1.385.218-.583.327-1.238.327-1.968 0-.724-.109-1.37-.327-1.938-.213-.573-.532-1.026-.958-1.357-.427-.331-.962-.497-1.606-.497-.928 0-1.635.348-2.123 1.044-.483.691-.725 1.607-.725 2.748zm11.738-9.09V164h-2.123v-14.545h2.123zm6.905 14.765c-1.07 0-1.993-.232-2.77-.696a4.666 4.666 0 01-1.797-1.953c-.416-.843-.625-1.828-.625-2.955 0-1.117.209-2.102.625-2.954.422-.852 1.009-1.518 1.762-1.996.757-.478 1.643-.717 2.656-.717.824 0 1.603.185 2.336.554.739.364 1.338.949 1.797 1.754.464.8.696 1.859.696 3.175v.753h-7.755c.028 1.051.324 1.86.887 2.429.564.568 1.3.852 2.209.852.606 0 1.13-.13 1.57-.391.44-.26.755-.648.944-1.164l2.01.362c-.241.885-.762 1.598-1.562 2.138-.8.539-1.795.809-2.983.809zm-3.068-6.626h5.667c-.004-.834-.255-1.523-.752-2.067-.498-.549-1.158-.824-1.982-.824-.573 0-1.075.135-1.506.405a2.942 2.942 0 00-1.015 1.058 3.222 3.222 0 00-.412 1.428zm-68.545 17.861l4.049 11.846h.163l4.048-11.846h2.372L95.827 190h-2.535l-5.235-14.545h2.372zm13.99 14.786c-.692 0-1.317-.127-1.875-.383a3.119 3.119 0 01-1.321-1.122c-.327-.497-.491-1.103-.491-1.818 0-.621.119-1.13.356-1.527.241-.398.561-.713.958-.945a4.838 4.838 0 011.35-.518 13.158 13.158 0 011.52-.27l1.583-.185c.408-.052.704-.135.888-.249.19-.113.284-.298.284-.554v-.049c0-.621-.175-1.101-.525-1.442-.346-.341-.862-.511-1.548-.511-.715 0-1.279.156-1.691.468-.407.313-.689.663-.845 1.052l-1.996-.455c.355-.994.947-1.707 1.776-2.138a5.845 5.845 0 012.727-.646c.436 0 .897.052 1.385.156.488.1.947.287 1.378.561.435.27.788.654 1.058 1.151.275.497.412 1.143.412 1.939V190h-2.074v-1.491h-.085c-.204.407-.566.797-1.087 1.171s-1.233.561-2.137.561zm.461-1.704c.592 0 1.096-.116 1.513-.348.417-.232.734-.535.952-.909.222-.379.333-.784.333-1.215v-1.406c-.099.1-.317.187-.653.263-.336.076-.691.14-1.065.192l-.909.127c-.616.081-1.144.244-1.584.491-.436.241-.654.646-.654 1.214 0 .526.195.923.583 1.193.388.265.883.398 1.484.398zm11.692 1.683c-1.056 0-1.965-.239-2.727-.717a4.752 4.752 0 01-1.748-1.996c-.407-.847-.61-1.818-.61-2.912 0-1.113.208-2.093.625-2.94.416-.848 1.003-1.511 1.761-1.989.762-.478 1.655-.717 2.678-.717.828 0 1.567.154 2.215.462a3.976 3.976 0 011.57 1.278c.403.549.642 1.191.717 1.925h-2.066a2.471 2.471 0 00-.782-1.321c-.402-.37-.942-.554-1.619-.554-.885 0-1.6.343-2.145 1.029-.54.682-.809 1.608-.809 2.777 0 1.189.267 2.134.802 2.834.535.696 1.252 1.044 2.152 1.044.606 0 1.125-.165 1.555-.497.431-.331.713-.791.846-1.378h2.066a4.003 4.003 0 01-.689 1.89 3.964 3.964 0 01-1.541 1.306c-.639.318-1.389.476-2.251.476zm9.273.021c-.691 0-1.316-.127-1.875-.383a3.125 3.125 0 01-1.321-1.122c-.327-.497-.49-1.103-.49-1.818 0-.621.118-1.13.355-1.527.242-.398.561-.713.959-.945a4.832 4.832 0 011.349-.518 13.196 13.196 0 011.52-.27l1.584-.185c.407-.052.703-.135.888-.249.189-.113.284-.298.284-.554v-.049c0-.621-.175-1.101-.526-1.442-.345-.341-.861-.511-1.548-.511-.715 0-1.278.156-1.69.468-.407.313-.689.663-.845 1.052l-1.996-.455c.355-.994.947-1.707 1.776-2.138a5.845 5.845 0 012.727-.646c.435 0 .897.052 1.385.156.487.1.947.287 1.378.561.435.27.788.654 1.058 1.151.274.497.412 1.143.412 1.939V190h-2.074v-1.491h-.085c-.204.407-.566.797-1.087 1.171s-1.233.561-2.138.561zm.462-1.704c.592 0 1.096-.116 1.513-.348.416-.232.734-.535.951-.909.223-.379.334-.784.334-1.215v-1.406c-.099.1-.317.187-.653.263-.336.076-.692.14-1.066.192l-.909.127c-.615.081-1.143.244-1.583.491-.436.241-.654.646-.654 1.214 0 .526.194.923.582 1.193.389.265.884.398 1.485.398zm12.189-9.446v1.704h-2.238v6.002c0 .615.131 1.013.391 1.193.265.175.571.263.916.263.171 0 .32-.012.448-.036.128-.023.227-.042.298-.056l.384 1.754a3.708 3.708 0 01-.533.142c-.227.052-.509.08-.845.085a3.785 3.785 0 01-1.57-.298 2.693 2.693 0 01-1.172-.966c-.293-.436-.44-.983-.44-1.641v-6.442h-1.598v-1.704h1.598v-2.614h2.123v2.614h2.238zM140.191 190v-10.909h2.124V190h-2.124zm1.072-12.592c-.369 0-.686-.123-.951-.37a1.199 1.199 0 01-.391-.895c0-.35.13-.648.391-.894.265-.251.582-.377.951-.377.365 0 .68.126.945.377.265.246.398.544.398.894 0 .346-.133.644-.398.895-.265.247-.58.37-.945.37zm7.85 12.812c-1.023 0-1.916-.234-2.678-.703s-1.354-1.124-1.775-1.967c-.422-.848-.633-1.833-.633-2.955 0-1.131.211-2.121.633-2.969.421-.847 1.013-1.505 1.775-1.974.762-.469 1.655-.703 2.678-.703 1.027 0 1.92.234 2.677.703.763.469 1.354 1.127 1.776 1.974.421.848.632 1.838.632 2.969 0 1.122-.211 2.107-.632 2.955-.422.843-1.013 1.498-1.776 1.967-.757.469-1.65.703-2.677.703zm.007-1.782c.667 0 1.217-.176 1.648-.526.435-.35.757-.817.965-1.399.214-.587.32-1.229.32-1.925s-.106-1.338-.32-1.925c-.208-.587-.53-1.056-.965-1.406-.431-.355-.981-.533-1.648-.533-.668 0-1.219.178-1.655.533-.436.35-.76.819-.973 1.406a5.606 5.606 0 00-.32 1.925c0 .696.107 1.338.32 1.925.213.582.537 1.049.973 1.399.436.35.987.526 1.655.526zm8.918-4.915V190h-2.124v-10.909h2.039v1.775h.135a3.126 3.126 0 011.179-1.392c.54-.35 1.219-.525 2.038-.525 1.118 0 2.015.348 2.692 1.044.682.696 1.023 1.719 1.023 3.068V190h-2.124v-6.683c0-.791-.206-1.409-.618-1.854-.412-.45-.978-.675-1.697-.675-.739 0-1.347.239-1.826.718-.478.473-.717 1.146-.717 2.017z"
      ></path>
      <path
        stroke={colorPrimaryDark}
        strokeLinecap="round"
        strokeWidth="16"
        d="M193.91 170.08c.646-36.998-28.823-67.514-65.82-68.16"
      ></path>
      <path
        fill={colorPrimaryMain}
        fillRule="evenodd"
        d="M36 302a4 4 0 100-8 4 4 0 000 8z"
        clipRule="evenodd"
      ></path>
      <path
        fill="#10182B"
        d="M48.528 294.406v-1.133h6.755v1.133H52.56V302h-1.313v-7.594h-2.719zm9.56 7.726c-.613 0-1.149-.141-1.606-.422a2.84 2.84 0 01-1.065-1.18c-.253-.509-.38-1.1-.38-1.773 0-.679.127-1.273.38-1.781a2.836 2.836 0 011.065-1.185c.457-.281.993-.422 1.607-.422.616 0 1.151.141 1.606.422.457.281.813.676 1.065 1.185.253.508.38 1.102.38 1.781 0 .673-.127 1.264-.38 1.773a2.84 2.84 0 01-1.065 1.18c-.455.281-.99.422-1.606.422zm.005-1.07c.4 0 .73-.105.988-.315.262-.21.455-.49.58-.839a3.37 3.37 0 00.192-1.155c0-.418-.064-.803-.192-1.155a1.847 1.847 0 00-.58-.844c-.258-.213-.588-.319-.988-.319s-.732.106-.993.319c-.261.21-.456.492-.584.844a3.359 3.359 0 00-.192 1.155c0 .417.064.802.192 1.155.128.349.323.629.584.839.261.21.592.315.993.315zm7.132-5.607v1.022h-1.342v3.601c0 .369.078.608.234.716.16.105.342.158.55.158.102 0 .192-.007.268-.022l.18-.034.23 1.053a2.13 2.13 0 01-.32.085 2.503 2.503 0 01-.507.051 2.267 2.267 0 01-.942-.179 1.61 1.61 0 01-.703-.579c-.176-.262-.264-.59-.264-.985v-3.865h-.96v-1.022h.96v-1.569h1.274v1.569h1.342zm2.922 6.69a2.68 2.68 0 01-1.125-.23 1.873 1.873 0 01-.793-.674c-.196-.298-.294-.661-.294-1.09 0-.373.071-.678.213-.917.145-.238.337-.427.576-.566.241-.14.511-.243.81-.311.298-.071.602-.125.911-.162l.95-.111c.245-.031.422-.081.533-.149.114-.069.17-.179.17-.333v-.03c0-.372-.105-.66-.315-.865-.207-.204-.517-.306-.929-.306-.429 0-.767.093-1.014.281a1.522 1.522 0 00-.507.63l-1.197-.272c.213-.597.568-1.024 1.065-1.283a3.516 3.516 0 011.636-.388c.262 0 .539.032.831.094.293.06.568.172.827.337.261.162.473.392.635.69.165.298.247.686.247 1.163V302h-1.244v-.895h-.051c-.123.244-.34.479-.652.703-.313.225-.74.337-1.283.337zm.277-1.023c.355 0 .658-.069.908-.209.25-.139.44-.321.57-.545.134-.227.2-.47.2-.729v-.844c-.059.06-.19.113-.391.158a7.485 7.485 0 01-.64.115l-.545.077c-.37.048-.686.146-.95.294-.261.145-.392.388-.392.729 0 .315.116.554.35.716.232.159.53.238.89.238zm5.532-7.849V302h-1.274v-8.727h1.274zm6.556 8.855c-.529 0-.999-.135-1.41-.405-.413-.27-.737-.658-.973-1.163-.235-.509-.353-1.115-.353-1.82 0-.707.118-1.312.353-1.815.24-.503.566-.888.98-1.155a2.55 2.55 0 011.411-.401c.406 0 .733.069.98.205.25.133.443.29.58.469.139.179.247.336.324.473h.076v-3.243h1.274V302H82.51v-1.018h-.106a3.383 3.383 0 01-.333.477 1.853 1.853 0 01-.588.469c-.25.133-.574.2-.971.2zm.28-1.087c.552 0 .974-.213 1.266-.639.296-.429.444-.987.444-1.675 0-.684-.147-1.234-.44-1.649-.29-.417-.712-.626-1.27-.626-.383 0-.702.099-.958.298-.256.199-.449.47-.58.814a3.297 3.297 0 00-.191 1.163c0 .438.065.831.196 1.181.13.349.324.626.58.831.258.201.576.302.954.302zm6.293 1.104c-.414 0-.79-.077-1.124-.23a1.873 1.873 0 01-.793-.674c-.196-.298-.294-.661-.294-1.09 0-.373.07-.678.213-.917.145-.238.337-.427.575-.566.242-.14.512-.243.81-.311.298-.071.602-.125.912-.162l.95-.111c.244-.031.422-.081.533-.149.113-.069.17-.179.17-.333v-.03c0-.372-.105-.66-.315-.865-.207-.204-.517-.306-.93-.306-.428 0-.766.093-1.013.281a1.522 1.522 0 00-.507.63l-1.198-.272c.213-.597.568-1.024 1.066-1.283a3.516 3.516 0 011.636-.388c.261 0 .538.032.83.094.293.06.569.172.828.337.26.162.472.392.635.69.164.298.247.686.247 1.163V302H89.07v-.895h-.05c-.123.244-.34.479-.653.703-.312.225-.74.337-1.282.337zm.278-1.023c.355 0 .657-.069.907-.209.25-.139.44-.321.571-.545.134-.227.2-.47.2-.729v-.844c-.06.06-.19.113-.392.158a7.478 7.478 0 01-.639.115l-.545.077c-.37.048-.686.146-.95.294-.262.145-.392.388-.392.729 0 .315.116.554.349.716.233.159.53.238.89.238zm4.782 3.422c-.2 0-.374-.017-.525-.051a1.834 1.834 0 01-.328-.098l.307-1.057c.352.094.646.101.882.021.239-.079.438-.332.597-.758l.187-.516-2.395-6.63h1.364l1.658 5.079h.068l1.658-5.079h1.368l-2.728 7.5c-.184.508-.451.9-.8 1.176-.347.275-.785.413-1.313.413zm10.55-7.491l-1.154.204a1.426 1.426 0 00-.414-.601c-.199-.184-.497-.277-.895-.277-.36 0-.663.081-.907.243-.242.159-.361.365-.358.618a.645.645 0 00.238.533c.165.13.428.238.789.324l1.04.238c1.193.276 1.789.867 1.789 1.773 0 .395-.113.744-.341 1.048-.224.304-.538.543-.941.716-.401.173-.865.26-1.394.26-.736 0-1.334-.156-1.794-.469-.46-.315-.744-.762-.852-1.342l1.231-.187c.154.647.623.971 1.407.971.417 0 .751-.087 1.001-.26.25-.176.375-.39.375-.643 0-.418-.308-.695-.925-.831l-1.108-.243c-.613-.137-1.065-.358-1.355-.665-.29-.307-.434-.692-.434-1.155 0-.386.108-.724.323-1.014.216-.293.515-.52.895-.682.381-.162.817-.243 1.309-.243.707 0 1.264.154 1.67.461.406.306.675.714.805 1.223z"
      ></path>
      <path
        fill="#10182B"
        d="M67.494 322.139c-.656 0-1.24-.112-1.755-.338a3.002 3.002 0 01-1.218-.939 2.53 2.53 0 01-.487-1.407h1.253c.036.49.262.878.676 1.163.418.285.922.427 1.511.427.653 0 1.19-.165 1.611-.497.425-.334.637-.772.637-1.312 0-.564-.21-1.023-.627-1.377-.414-.355-1.007-.532-1.78-.532H66.5v-1.094h.815c.604 0 1.096-.161 1.477-.482.381-.322.572-.751.572-1.288 0-.514-.168-.926-.502-1.238-.335-.315-.784-.472-1.348-.472-.351 0-.683.064-.994.194-.308.126-.56.31-.756.552a1.436 1.436 0 00-.318.865h-1.193c.02-.534.18-1.001.482-1.402.302-.405.696-.72 1.183-.945a3.83 3.83 0 011.616-.338c.63 0 1.17.128 1.62.383.452.252.798.585 1.04.999.242.414.363.862.363 1.342 0 .574-.151 1.063-.453 1.467a2.296 2.296 0 01-1.218.84v.08c.643.106 1.145.379 1.507.82.361.438.542.979.542 1.626 0 .553-.151 1.05-.453 1.491a3.07 3.07 0 01-1.223 1.034c-.517.252-1.105.378-1.765.378zm8.397 0a3.805 3.805 0 01-1.253-.238 3.01 3.01 0 01-1.143-.771c-.345-.365-.622-.857-.83-1.477-.21-.623-.314-1.405-.314-2.346 0-1.81.33-3.204.99-4.181.66-.978 1.562-1.467 2.71-1.467.854 0 1.564.25 2.127.751.567.5.911 1.152 1.034 1.954H78a2.254 2.254 0 00-.656-1.154c-.325-.305-.756-.457-1.293-.457-.789 0-1.41.345-1.864 1.034-.451.686-.678 1.654-.681 2.903h.08c.278-.421.634-.75 1.068-.989a2.901 2.901 0 011.437-.363 3.04 3.04 0 011.6.438c.485.288.872.687 1.164 1.198.292.507.438 1.088.438 1.745 0 .629-.141 1.206-.423 1.73a3.22 3.22 0 01-1.188 1.243c-.507.305-1.104.454-1.79.447zm0-1.094c.418 0 .792-.104 1.124-.313.334-.209.598-.489.79-.84a2.37 2.37 0 00.293-1.173c0-.421-.094-.804-.283-1.149a2.164 2.164 0 00-.77-.83 2.042 2.042 0 00-1.114-.308c-.421 0-.8.108-1.139.323a2.385 2.385 0 00-.805.85c-.199.348-.3.726-.303 1.134a2.355 2.355 0 001.069 1.983c.334.216.714.323 1.138.323zm8.08 1.094a3.496 3.496 0 01-1.576-.348 2.93 2.93 0 01-1.124-.954 2.602 2.602 0 01-.462-1.382h1.193c.047.46.255.841.627 1.143.374.298.821.447 1.342.447.417 0 .789-.097 1.113-.293.329-.195.585-.464.771-.805a2.39 2.39 0 00.283-1.169c0-.444-.097-.84-.293-1.188a2.153 2.153 0 00-.795-.83 2.246 2.246 0 00-1.159-.308 3.143 3.143 0 00-.96.144c-.327.096-.597.22-.81.373l-1.153-.139.616-5.012h5.29v1.094H82.62l-.358 3.003h.06c.208-.166.47-.303.785-.413.315-.109.643-.164.984-.164.623 0 1.178.149 1.666.448.49.294.875.699 1.153 1.213.282.513.423 1.1.423 1.76 0 .649-.146 1.229-.438 1.74a3.2 3.2 0 01-1.193 1.203c-.507.291-1.084.437-1.73.437z"
        opacity="0.6"
      ></path>
      <path
        fill={colorPrimaryDark}
        fillRule="evenodd"
        d="M148 302a4 4 0 100-8 4 4 0 000 8z"
        clipRule="evenodd"
      ></path>
      <path
        fill="#10182B"
        d="M161.722 293.273l2.429 7.108h.098l2.429-7.108h1.423L164.96 302h-1.521l-3.141-8.727h1.424zm8.393 8.872c-.415 0-.79-.077-1.125-.23a1.873 1.873 0 01-.792-.674c-.196-.298-.294-.661-.294-1.09 0-.373.071-.678.213-.917.144-.238.336-.427.575-.566.241-.14.511-.243.81-.311.298-.071.602-.125.911-.162l.951-.111c.244-.031.422-.081.532-.149.114-.069.171-.179.171-.333v-.03c0-.372-.105-.66-.315-.865-.208-.204-.518-.306-.929-.306-.429 0-.768.093-1.015.281a1.525 1.525 0 00-.507.63l-1.197-.272c.213-.597.568-1.024 1.065-1.283a3.517 3.517 0 011.636-.388c.262 0 .539.032.831.094.293.06.569.172.827.337a1.8 1.8 0 01.635.69c.165.298.247.686.247 1.163V302h-1.244v-.895h-.051c-.122.244-.34.479-.652.703-.313.225-.74.337-1.283.337zm.277-1.023c.355 0 .658-.069.908-.209.25-.139.44-.321.571-.545.133-.227.2-.47.2-.729v-.844c-.06.06-.19.113-.392.158a7.53 7.53 0 01-.639.115l-.546.077a2.62 2.62 0 00-.95.294c-.261.145-.392.388-.392.729 0 .315.117.554.35.716.232.159.529.238.89.238zm7.015 1.01c-.633 0-1.179-.143-1.636-.43a2.853 2.853 0 01-1.049-1.198c-.244-.508-.366-1.091-.366-1.747 0-.668.125-1.256.375-1.764.25-.509.602-.906 1.057-1.193.457-.287.993-.431 1.606-.431.498 0 .941.093 1.33.277.389.182.703.438.942.767.241.33.385.715.43 1.155h-1.24a1.477 1.477 0 00-.469-.792c-.241-.222-.565-.333-.971-.333-.532 0-.961.206-1.287.618-.324.409-.486.965-.486 1.666 0 .713.16 1.28.481 1.701.321.417.752.626 1.292.626.363 0 .674-.099.933-.298.258-.199.427-.475.507-.827h1.24a2.403 2.403 0 01-.413 1.133c-.23.333-.539.594-.925.785-.384.19-.834.285-1.351.285zm5.564.013c-.415 0-.79-.077-1.125-.23a1.873 1.873 0 01-.792-.674c-.196-.298-.294-.661-.294-1.09 0-.373.071-.678.213-.917.144-.238.336-.427.575-.566.241-.14.511-.243.81-.311.298-.071.602-.125.911-.162l.951-.111c.244-.031.422-.081.532-.149.114-.069.171-.179.171-.333v-.03c0-.372-.105-.66-.315-.865-.208-.204-.518-.306-.929-.306-.429 0-.768.093-1.015.281a1.525 1.525 0 00-.507.63l-1.197-.272c.213-.597.568-1.024 1.065-1.283a3.517 3.517 0 011.636-.388c.262 0 .539.032.831.094.293.06.569.172.827.337a1.8 1.8 0 01.635.69c.165.298.247.686.247 1.163V302h-1.244v-.895h-.051c-.122.244-.34.479-.652.703-.313.225-.74.337-1.283.337zm.277-1.023c.355 0 .658-.069.908-.209.25-.139.44-.321.571-.545.133-.227.2-.47.2-.729v-.844c-.06.06-.19.113-.392.158a7.53 7.53 0 01-.639.115l-.546.077a2.62 2.62 0 00-.95.294c-.261.145-.392.388-.392.729 0 .315.117.554.35.716.232.159.529.238.89.238zm4.782 3.422c-.199 0-.373-.017-.524-.051a1.816 1.816 0 01-.328-.098l.307-1.057c.352.094.646.101.882.021.238-.079.437-.332.596-.758l.188-.516-2.395-6.63h1.364l1.657 5.079h.069l1.657-5.079h1.368l-2.727 7.5c-.185.508-.452.9-.801 1.176-.347.275-.784.413-1.313.413zm10.88-2.416c-.528 0-.999-.135-1.411-.405-.411-.27-.735-.658-.971-1.163-.236-.509-.354-1.115-.354-1.82 0-.707.118-1.312.354-1.815.239-.503.565-.888.98-1.155a2.55 2.55 0 011.411-.401c.406 0 .732.069.98.205.25.133.443.29.579.469.139.179.247.336.324.473h.077v-3.243h1.274V302h-1.244v-1.018h-.107a3.393 3.393 0 01-.332.477 1.853 1.853 0 01-.588.469c-.25.133-.574.2-.972.2zm.281-1.087c.551 0 .973-.213 1.266-.639.295-.429.443-.987.443-1.675 0-.684-.146-1.234-.439-1.649-.29-.417-.713-.626-1.27-.626-.383 0-.703.099-.959.298a1.83 1.83 0 00-.579.814 3.294 3.294 0 00-.192 1.163c0 .438.065.831.196 1.181.131.349.324.626.58.831.258.201.576.302.954.302zm6.293 1.104c-.415 0-.79-.077-1.125-.23a1.876 1.876 0 01-.793-.674c-.196-.298-.294-.661-.294-1.09 0-.373.071-.678.213-.917.145-.238.337-.427.576-.566.241-.14.511-.243.809-.311.299-.071.603-.125.912-.162l.951-.111c.244-.031.421-.081.532-.149.114-.069.171-.179.171-.333v-.03c0-.372-.105-.66-.316-.865-.207-.204-.517-.306-.929-.306-.429 0-.767.093-1.014.281a1.525 1.525 0 00-.507.63l-1.197-.272c.213-.597.568-1.024 1.065-1.283a3.514 3.514 0 011.636-.388c.262 0 .539.032.831.094.293.06.568.172.827.337.261.162.473.392.635.69.165.298.247.686.247 1.163V302h-1.244v-.895h-.051c-.123.244-.34.479-.652.703-.313.225-.74.337-1.283.337zm.277-1.023c.355 0 .658-.069.908-.209.25-.139.44-.321.571-.545.133-.227.2-.47.2-.729v-.844c-.06.06-.19.113-.392.158a7.53 7.53 0 01-.639.115 89.46 89.46 0 00-.546.077 2.62 2.62 0 00-.95.294c-.261.145-.392.388-.392.729 0 .315.116.554.349.716.233.159.53.238.891.238zm4.782 3.422c-.199 0-.374-.017-.524-.051a1.816 1.816 0 01-.328-.098l.307-1.057c.352.094.646.101.882.021.238-.079.437-.332.596-.758l.188-.516-2.395-6.63h1.363l1.658 5.079h.068l1.658-5.079h1.368l-2.727 7.5c-.185.508-.452.9-.801 1.176-.347.275-.785.413-1.313.413zm10.551-7.491l-1.155.204a1.432 1.432 0 00-.413-.601c-.199-.184-.497-.277-.895-.277-.361 0-.664.081-.908.243-.241.159-.361.365-.358.618a.644.644 0 00.239.533c.165.13.427.238.788.324l1.04.238c1.193.276 1.79.867 1.79 1.773 0 .395-.114.744-.341 1.048-.225.304-.539.543-.942.716-.401.173-.865.26-1.393.26-.736 0-1.334-.156-1.794-.469-.461-.315-.745-.762-.853-1.342l1.232-.187c.153.647.622.971 1.406.971.418 0 .751-.087 1.001-.26.25-.176.375-.39.375-.643 0-.418-.308-.695-.924-.831l-1.108-.243c-.614-.137-1.066-.358-1.355-.665-.29-.307-.435-.692-.435-1.155 0-.386.108-.724.324-1.014.216-.293.514-.52.895-.682.38-.162.817-.243 1.308-.243.707 0 1.264.154 1.67.461.407.306.675.714.806 1.223z"
      ></path>
      <path
        fill="#10182B"
        d="M187.494 322.139c-.656 0-1.241-.112-1.755-.338a3.007 3.007 0 01-1.218-.939 2.535 2.535 0 01-.487-1.407h1.253c.036.49.262.878.676 1.163.418.285.921.427 1.511.427.653 0 1.19-.165 1.611-.497.424-.334.637-.772.637-1.312 0-.564-.209-1.023-.627-1.377-.414-.355-1.007-.532-1.78-.532h-.815v-1.094h.815c.604 0 1.096-.161 1.477-.482.381-.322.572-.751.572-1.288 0-.514-.168-.926-.502-1.238-.335-.315-.784-.472-1.348-.472-.351 0-.683.064-.994.194-.308.126-.56.31-.756.552a1.441 1.441 0 00-.318.865h-1.193c.02-.534.18-1.001.482-1.402.302-.405.696-.72 1.183-.945a3.83 3.83 0 011.616-.338c.63 0 1.17.128 1.621.383.451.252.797.585 1.039.999.242.414.363.862.363 1.342 0 .574-.151 1.063-.453 1.467a2.294 2.294 0 01-1.218.84v.08c.643.106 1.145.379 1.507.82.361.438.542.979.542 1.626 0 .553-.151 1.05-.453 1.491a3.068 3.068 0 01-1.223 1.034c-.517.252-1.105.378-1.765.378zm8.337 0c-1.123 0-1.995-.456-2.615-1.367-.616-.911-.924-2.199-.924-3.863 0-1.65.311-2.935.934-3.853.623-.918 1.492-1.377 2.605-1.377 1.114 0 1.982.459 2.605 1.377.624.918.935 2.203.935 3.853 0 1.664-.31 2.952-.93 3.863-.616.911-1.486 1.367-2.61 1.367zm0-1.094c.743 0 1.319-.358 1.73-1.073.411-.716.617-1.737.617-3.063 0-1.322-.207-2.345-.621-3.067-.415-.726-.99-1.089-1.726-1.089-.735 0-1.31.363-1.725 1.089-.414.722-.621 1.745-.621 3.067 0 1.326.205 2.347.616 3.063.415.715.991 1.073 1.73 1.073z"
        opacity="0.6"
      ></path>
      <path
        fill="#EAEDEE"
        d="M14 4h226V0H14v4zm236 10v320h4V14h-4zm-10 330H14v4h226v-4zM4 334V14H0v320h4zm10 10c-5.523 0-10-4.477-10-10H0c0 7.732 6.268 14 14 14v-4zm236-10c0 5.523-4.477 10-10 10v4c7.732 0 14-6.268 14-14h-4zM240 4c5.523 0 10 4.477 10 10h4c0-7.732-6.268-14-14-14v4zM14 0C6.268 0 0 6.268 0 14h4C4 8.477 8.477 4 14 4V0z"
      ></path>
    </svg>
  );
};

Chart1.propTypes = {
  width: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  height: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
};

export default Chart1;
