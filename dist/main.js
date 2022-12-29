require("./main.css");
var $bzML5$reactjsxruntime = require("react/jsx-runtime");
var $bzML5$react = require("react");
var $bzML5$swchelperslib_sliced_to_arrayjs = require("@swc/helpers/lib/_sliced_to_array.js");

function $parcel$export(e, n, v, s) {
  Object.defineProperty(e, n, {get: v, set: s, enumerable: true, configurable: true});
}
function $parcel$interopDefault(a) {
  return a && a.__esModule ? a.default : a;
}

$parcel$export(module.exports, "Title", function () { return $bb2919b587d7a5d1$export$2e2bcd8739ae039; });
$parcel$export(module.exports, "MoreLink", function () { return $27da1ed4b7c1485f$export$2e2bcd8739ae039; });
$parcel$export(module.exports, "MenuList", function () { return $b6fad202dc3a3133$export$2e2bcd8739ae039; });
$parcel$export(module.exports, "MenuListItem", function () { return $e5fde0d08905dbc9$export$2e2bcd8739ae039; });
$parcel$export(module.exports, "Line", function () { return $1da022373069915d$export$2e2bcd8739ae039; });
$parcel$export(module.exports, "Button", function () { return $2bf360854879ac3c$export$2e2bcd8739ae039; });
$parcel$export(module.exports, "Buttons", function () { return $603a0ccf78283c06$export$2e2bcd8739ae039; });
$parcel$export(module.exports, "Header", function () { return $2692638471122975$export$2e2bcd8739ae039; });
$parcel$export(module.exports, "LargeButton", function () { return $4d8744feefbf7160$export$2e2bcd8739ae039; });
$parcel$export(module.exports, "ListSelector", function () { return $9da27f062b93467b$export$2e2bcd8739ae039; });
$parcel$export(module.exports, "Menu", function () { return $292db1cba9edb946$export$2e2bcd8739ae039; });
$parcel$export(module.exports, "ProfileIcon", function () { return $052dcb7229456c59$export$2e2bcd8739ae039; });
$parcel$export(module.exports, "TaskList", function () { return $28157c957a929a4c$export$2e2bcd8739ae039; });
$parcel$export(module.exports, "Inbox", function () { return $b1a47ec01eab3f47$export$2e2bcd8739ae039; });
$parcel$export(module.exports, "SearchIcon", function () { return $785110b23611a108$export$2e2bcd8739ae039; });
$parcel$export(module.exports, "Checkbox", function () { return $5dffc3c9e095658a$export$2e2bcd8739ae039; });
$parcel$export(module.exports, "Foursquares", function () { return $e3af4d7bb11c631f$export$2e2bcd8739ae039; });
$parcel$export(module.exports, "Paper", function () { return $51fc4dd6627ef6a5$export$2e2bcd8739ae039; });
$parcel$export(module.exports, "Search", function () { return $73e1af76cdcfac95$export$2e2bcd8739ae039; });
$parcel$export(module.exports, "Plus", function () { return $7acd37216e5c8138$export$2e2bcd8739ae039; });
$parcel$export(module.exports, "DownArrow", function () { return $a7f6542e28bf0bdc$export$2e2bcd8739ae039; });
$parcel$export(module.exports, "Square", function () { return $31724cb8e802f2db$export$2e2bcd8739ae039; });
$parcel$export(module.exports, "CircleEmpty", function () { return $f5413103748708b7$export$2e2bcd8739ae039; });
$parcel$export(module.exports, "SortAsc", function () { return $9d822cb91216a7b9$export$2e2bcd8739ae039; });
$parcel$export(module.exports, "SortDesc", function () { return $cdb4e214c3eaae66$export$2e2bcd8739ae039; });
/* eslint-disable react/prop-types */ 


function $2bf360854879ac3c$var$Button(param) {
    var text = param.text, onClick = param.onClick, icon = param.icon;
    return /*#__PURE__*/ (0, $bzML5$reactjsxruntime.jsx)("div", {
        className: "Button",
        children: /*#__PURE__*/ (0, $bzML5$reactjsxruntime.jsxs)("button", {
            type: "button",
            onClick: onClick,
            children: [
                /*#__PURE__*/ (0, $bzML5$reactjsxruntime.jsx)("span", {
                    className: "icon",
                    children: icon
                }),
                /*#__PURE__*/ (0, $bzML5$reactjsxruntime.jsx)("span", {
                    className: "text",
                    children: text
                })
            ]
        })
    });
}
var $2bf360854879ac3c$export$2e2bcd8739ae039 = $2bf360854879ac3c$var$Button;


/* eslint-disable react/prop-types */ 



function $603a0ccf78283c06$var$Buttons(param) {
    var list = param.list;
    return /*#__PURE__*/ (0, $bzML5$reactjsxruntime.jsx)("div", {
        className: "Buttons",
        children: list.map(function(param) {
            var text = param.text, onClick = param.onClick, icon = param.icon;
            return /*#__PURE__*/ (0, $bzML5$reactjsxruntime.jsx)((0, $2bf360854879ac3c$export$2e2bcd8739ae039), {
                text: text,
                onClick: onClick,
                icon: icon
            }, text);
        })
    });
}
var $603a0ccf78283c06$export$2e2bcd8739ae039 = $603a0ccf78283c06$var$Buttons;





// eslint-disable-next-line react/prop-types
function $2692638471122975$var$Header(param) {
    var text = param.text;
    return /*#__PURE__*/ (0, $bzML5$reactjsxruntime.jsx)("div", {
        className: "Header",
        children: /*#__PURE__*/ (0, $bzML5$reactjsxruntime.jsx)("h1", {
            children: text
        })
    });
}
var $2692638471122975$export$2e2bcd8739ae039 = $2692638471122975$var$Header;


/* eslint-disable max-len */ 

function $5dffc3c9e095658a$var$Checkbox() {
    return /*#__PURE__*/ (0, $bzML5$reactjsxruntime.jsx)("svg", {
        width: "18",
        height: "18",
        viewBox: "0 0 18 18",
        fill: "none",
        xmlns: "http://www.w3.org/2000/svg",
        children: /*#__PURE__*/ (0, $bzML5$reactjsxruntime.jsx)("path", {
            d: "M3.2009 17.9949H14.7991C15.8526 17.9949 16.6494 17.7248 17.1896 17.1846C17.7299 16.6511 18 15.8644 18 14.8244V3.18571C18 2.14575 17.7299 1.35566 17.1896 0.81542C16.6494 0.275184 15.8526 0.00506592 14.7991 0.00506592H3.2009C2.15419 0.00506592 1.35734 0.275184 0.810355 0.81542C0.270118 1.3489 0 2.139 0 3.18571V14.8244C0 15.8711 0.270118 16.6612 0.810355 17.1947C1.35734 17.7282 2.15419 17.9949 3.2009 17.9949ZM3.35284 15.9792C2.92741 15.9792 2.59989 15.8678 2.37029 15.6449C2.14744 15.4221 2.03602 15.0844 2.03602 14.632V3.37817C2.03602 2.92572 2.14744 2.58807 2.37029 2.36522C2.59989 2.14238 2.92741 2.03095 3.35284 2.03095H14.6472C15.0726 2.03095 15.4001 2.14238 15.6297 2.36522C15.8593 2.58807 15.9741 2.92572 15.9741 3.37817V14.632C15.9741 15.0844 15.8593 15.4221 15.6297 15.6449C15.4001 15.8678 15.0726 15.9792 14.6472 15.9792H3.35284ZM7.98199 13.5481C8.34665 13.5481 8.63703 13.3793 8.85312 13.0416L13.0974 6.43725C13.1649 6.32921 13.2223 6.22116 13.2696 6.11311C13.3168 5.99831 13.3405 5.88351 13.3405 5.76871C13.3405 5.52561 13.2459 5.32639 13.0568 5.17108C12.8745 5.01576 12.6652 4.9381 12.4288 4.9381C12.1182 4.9381 11.8582 5.10692 11.6488 5.44457L7.94147 11.3804L6.20934 9.19246C6.09454 9.04389 5.97637 8.93922 5.85481 8.87845C5.73326 8.81767 5.5982 8.78728 5.44963 8.78728C5.19977 8.78728 4.99043 8.87507 4.82161 9.05065C4.65279 9.21947 4.56837 9.42881 4.56837 9.67867C4.56837 9.90152 4.65616 10.1244 4.83174 10.3472L7.06021 13.0518C7.19527 13.2206 7.33371 13.3455 7.47552 13.4266C7.62409 13.5076 7.79291 13.5481 7.98199 13.5481Z",
            fill: "currentColor"
        })
    });
}
var $5dffc3c9e095658a$export$2e2bcd8739ae039 = $5dffc3c9e095658a$var$Checkbox;




function $f5413103748708b7$var$CircleEmpty() {
    return /*#__PURE__*/ (0, $bzML5$reactjsxruntime.jsx)("svg", {
        width: "18",
        height: "18",
        viewBox: "0 0 18 18",
        fill: "none",
        xmlns: "http://www.w3.org/2000/svg",
        className: "CircleEmpty Circle",
        children: /*#__PURE__*/ (0, $bzML5$reactjsxruntime.jsx)("circle", {
            cx: "9",
            cy: "9",
            r: "8.5",
            stroke: "currentColor"
        })
    });
}
var $f5413103748708b7$export$2e2bcd8739ae039 = $f5413103748708b7$var$CircleEmpty;




function $a7f6542e28bf0bdc$var$DownArrow() {
    return /*#__PURE__*/ (0, $bzML5$reactjsxruntime.jsx)("svg", {
        width: "14",
        height: "8",
        viewBox: "0 0 14 8",
        fill: "none",
        xmlns: "http://www.w3.org/2000/svg",
        children: /*#__PURE__*/ (0, $bzML5$reactjsxruntime.jsx)("path", {
            d: "M6.99609 7.82422C7.13672 7.82422 7.26953 7.79818 7.39453 7.74609C7.51953 7.6888 7.63411 7.60286 7.73828 7.48828L13.332 1.77734C13.5143 1.59505 13.6055 1.3763 13.6055 1.12109C13.6055 0.94401 13.5612 0.785156 13.4727 0.644531C13.3893 0.498698 13.2773 0.384115 13.1367 0.300781C12.9961 0.217448 12.8372 0.175781 12.6602 0.175781C12.4049 0.175781 12.1784 0.272135 11.9805 0.464844L6.65234 5.93359H7.34766L2.01172 0.464844C1.81901 0.272135 1.59245 0.175781 1.33203 0.175781C1.15495 0.175781 0.996094 0.217448 0.855469 0.300781C0.714844 0.384115 0.602865 0.498698 0.519531 0.644531C0.436198 0.785156 0.394531 0.94401 0.394531 1.12109C0.394531 1.2513 0.417969 1.37109 0.464844 1.48047C0.511719 1.58464 0.579427 1.68359 0.667969 1.77734L6.25391 7.49609C6.47786 7.71484 6.72526 7.82422 6.99609 7.82422Z",
            fill: "currentColor"
        })
    });
}
var $a7f6542e28bf0bdc$export$2e2bcd8739ae039 = $a7f6542e28bf0bdc$var$DownArrow;




function $e3af4d7bb11c631f$var$Foursquares() {
    return /*#__PURE__*/ (0, $bzML5$reactjsxruntime.jsx)("svg", {
        width: "18",
        height: "18",
        viewBox: "0 0 18 18",
        fill: "none",
        xmlns: "http://www.w3.org/2000/svg",
        children: /*#__PURE__*/ (0, $bzML5$reactjsxruntime.jsx)("path", {
            d: "M2.15757 8.27068H6.10805C6.83737 8.27068 7.38098 8.09173 7.73889 7.73382C8.09679 7.37592 8.27575 6.82555 8.27575 6.08272V2.19302C8.27575 1.4502 8.09679 0.899832 7.73889 0.541926C7.38098 0.184019 6.83737 0.00506592 6.10805 0.00506592H2.15757C1.435 0.00506592 0.894766 0.184019 0.53686 0.541926C0.178953 0.899832 0 1.4502 0 2.19302V6.08272C0 6.82555 0.178953 7.37592 0.53686 7.73382C0.894766 8.09173 1.435 8.27068 2.15757 8.27068ZM2.1677 6.59933C1.99887 6.59933 1.87394 6.55881 1.79291 6.47777C1.71863 6.38998 1.68149 6.2583 1.68149 6.08272V2.19302C1.68149 2.01745 1.71863 1.88914 1.79291 1.8081C1.87394 1.72707 1.99887 1.68655 2.1677 1.68655H6.08779C6.25661 1.68655 6.38154 1.72707 6.46258 1.8081C6.55037 1.88914 6.59426 2.01745 6.59426 2.19302V6.08272C6.59426 6.2583 6.55037 6.38998 6.46258 6.47777C6.38154 6.55881 6.25661 6.59933 6.08779 6.59933H2.1677ZM11.892 8.27068H15.8323C16.5616 8.27068 17.1052 8.09173 17.4631 7.73382C17.821 7.37592 18 6.82555 18 6.08272V2.19302C18 1.4502 17.821 0.899832 17.4631 0.541926C17.1052 0.184019 16.5616 0.00506592 15.8323 0.00506592H11.892C11.1626 0.00506592 10.619 0.184019 10.2611 0.541926C9.90321 0.899832 9.72425 1.4502 9.72425 2.19302V6.08272C9.72425 6.82555 9.90321 7.37592 10.2611 7.73382C10.619 8.09173 11.1626 8.27068 11.892 8.27068ZM11.9021 6.59933C11.7333 6.59933 11.6083 6.55881 11.5273 6.47777C11.4463 6.38998 11.4057 6.2583 11.4057 6.08272V2.19302C11.4057 2.01745 11.4463 1.88914 11.5273 1.8081C11.6083 1.72707 11.7333 1.68655 11.9021 1.68655H15.8323C15.9944 1.68655 16.1159 1.72707 16.197 1.8081C16.278 1.88914 16.3185 2.01745 16.3185 2.19302V6.08272C16.3185 6.2583 16.278 6.38998 16.197 6.47777C16.1159 6.55881 15.9944 6.59933 15.8323 6.59933H11.9021ZM2.15757 17.9949H6.10805C6.83737 17.9949 7.38098 17.816 7.73889 17.4581C8.09679 17.1002 8.27575 16.5498 8.27575 15.807V11.9173C8.27575 11.1812 8.09679 10.6342 7.73889 10.2763C7.38098 9.9184 6.83737 9.73945 6.10805 9.73945H2.15757C1.435 9.73945 0.894766 9.9184 0.53686 10.2763C0.178953 10.6342 0 11.1812 0 11.9173V15.807C0 16.5498 0.178953 17.1002 0.53686 17.4581C0.894766 17.816 1.435 17.9949 2.15757 17.9949ZM2.1677 16.3236C1.99887 16.3236 1.87394 16.2797 1.79291 16.1919C1.71863 16.1109 1.68149 15.9859 1.68149 15.8171V11.9274C1.68149 11.7518 1.71863 11.6235 1.79291 11.5425C1.87394 11.4547 1.99887 11.4108 2.1677 11.4108H6.08779C6.25661 11.4108 6.38154 11.4547 6.46258 11.5425C6.55037 11.6235 6.59426 11.7518 6.59426 11.9274V15.8171C6.59426 15.9859 6.55037 16.1109 6.46258 16.1919C6.38154 16.2797 6.25661 16.3236 6.08779 16.3236H2.1677ZM11.892 17.9949H15.8323C16.5616 17.9949 17.1052 17.816 17.4631 17.4581C17.821 17.1002 18 16.5498 18 15.807V11.9173C18 11.1812 17.821 10.6342 17.4631 10.2763C17.1052 9.9184 16.5616 9.73945 15.8323 9.73945H11.892C11.1626 9.73945 10.619 9.9184 10.2611 10.2763C9.90321 10.6342 9.72425 11.1812 9.72425 11.9173V15.807C9.72425 16.5498 9.90321 17.1002 10.2611 17.4581C10.619 17.816 11.1626 17.9949 11.892 17.9949ZM11.9021 16.3236C11.7333 16.3236 11.6083 16.2797 11.5273 16.1919C11.4463 16.1109 11.4057 15.9859 11.4057 15.8171V11.9274C11.4057 11.7518 11.4463 11.6235 11.5273 11.5425C11.6083 11.4547 11.7333 11.4108 11.9021 11.4108H15.8323C15.9944 11.4108 16.1159 11.4547 16.197 11.5425C16.278 11.6235 16.3185 11.7518 16.3185 11.9274V15.8171C16.3185 15.9859 16.278 16.1109 16.197 16.1919C16.1159 16.2797 15.9944 16.3236 15.8323 16.3236H11.9021Z",
            fill: "currentColor"
        })
    });
}
var $e3af4d7bb11c631f$export$2e2bcd8739ae039 = $e3af4d7bb11c631f$var$Foursquares;




function $b1a47ec01eab3f47$var$Inbox() {
    return /*#__PURE__*/ (0, $bzML5$reactjsxruntime.jsx)("svg", {
        width: "22",
        height: "18",
        viewBox: "0 0 22 18",
        fill: "none",
        xmlns: "http://www.w3.org/2000/svg",
        children: /*#__PURE__*/ (0, $bzML5$reactjsxruntime.jsx)("path", {
            d: "M3.09666 17.1679H18.9033C19.9225 17.1679 20.6934 16.9066 21.216 16.384C21.7387 15.8613 22 15.0969 22 14.0909V8.59331C22 8.23399 21.9804 7.93021 21.9412 7.68195C21.9085 7.42716 21.8432 7.19851 21.7452 6.99598C21.6537 6.79346 21.5198 6.58767 21.3434 6.37861L18.3546 2.70378C17.9691 2.22687 17.6294 1.85448 17.3354 1.58663C17.0414 1.31224 16.718 1.11952 16.3653 1.00845C16.019 0.890859 15.565 0.832062 15.0031 0.832062H7.00668C6.44484 0.832062 5.98753 0.890859 5.63474 1.00845C5.28196 1.11952 4.95857 1.31224 4.66459 1.58663C4.3706 1.85448 4.03088 2.22687 3.64543 2.70378L0.65657 6.37861C0.486711 6.58767 0.352784 6.79346 0.254788 6.99598C0.163326 7.19851 0.0979955 7.42716 0.0587973 7.68195C0.0195991 7.93021 0 8.23399 0 8.59331V14.0909C0 15.0969 0.261321 15.8613 0.783964 16.384C1.31314 16.9066 2.08404 17.1679 3.09666 17.1679ZM3.21425 15.208C2.80267 15.208 2.48582 15.1002 2.2637 14.8846C2.04157 14.669 1.93051 14.3424 1.93051 13.9047V9.49487H7.37907C7.48359 10.0371 7.70245 10.5238 8.03563 10.955C8.37535 11.3797 8.8 11.7161 9.30958 11.9644C9.81915 12.2126 10.3843 12.3367 11.0049 12.3367C11.6255 12.3367 12.1906 12.2126 12.7002 11.9644C13.2098 11.7161 13.6312 11.3797 13.9644 10.955C14.2976 10.5238 14.5197 10.0371 14.6307 9.49487H20.0793V13.9047C20.0793 14.3424 19.9682 14.669 19.7461 14.8846C19.524 15.1002 19.2071 15.208 18.7955 15.208H3.21425ZM11.0049 10.5336C10.5933 10.5336 10.2373 10.4324 9.93675 10.2298C9.64276 10.0273 9.41411 9.77252 9.25078 9.46547C9.09399 9.15189 9.01559 8.83177 9.01559 8.50511V8.47572C9.01559 8.29932 8.95679 8.13926 8.8392 7.99554C8.72814 7.85181 8.55175 7.77995 8.31002 7.77995H2.41069C2.2539 7.77995 2.15917 7.73095 2.1265 7.63295C2.09384 7.52842 2.1167 7.42716 2.1951 7.32917L5.51715 3.17416C5.71314 2.9259 5.92873 2.74298 6.16392 2.62538C6.40564 2.50779 6.68003 2.44899 6.98708 2.44899H15.0227C15.3298 2.44899 15.6009 2.50779 15.8361 2.62538C16.0713 2.74298 16.2901 2.9259 16.4927 3.17416L19.8147 7.32917C19.8866 7.42716 19.9062 7.52842 19.8735 7.63295C19.8408 7.73095 19.7494 7.77995 19.5991 7.77995H13.6998C13.4515 7.77995 13.2686 7.85181 13.151 7.99554C13.0399 8.13926 12.9844 8.29932 12.9844 8.47572V8.50511C12.9844 8.83177 12.9027 9.15189 12.7394 9.46547C12.5826 9.77252 12.3572 10.0273 12.0633 10.2298C11.7693 10.4324 11.4165 10.5336 11.0049 10.5336Z",
            fill: "currentColor"
        })
    });
}
var $b1a47ec01eab3f47$export$2e2bcd8739ae039 = $b1a47ec01eab3f47$var$Inbox;




function $51fc4dd6627ef6a5$var$Paper() {
    return /*#__PURE__*/ (0, $bzML5$reactjsxruntime.jsx)("svg", {
        width: "16",
        height: "22",
        viewBox: "0 0 16 22",
        fill: "none",
        xmlns: "http://www.w3.org/2000/svg",
        children: /*#__PURE__*/ (0, $bzML5$reactjsxruntime.jsx)("path", {
            d: "M3.06112 21.0538H12.9389C13.943 21.0538 14.7025 20.793 15.2176 20.2714C15.7392 19.7498 16 18.9837 16 17.9731V9.5819C16 9.13854 15.9739 8.76038 15.9218 8.44742C15.8696 8.13446 15.7718 7.85084 15.6284 7.59657C15.4849 7.34229 15.273 7.07171 14.9927 6.78483L10.2396 1.96331C9.83537 1.55255 9.43765 1.28198 9.04646 1.15158C8.65526 1.01466 8.15648 0.946198 7.55012 0.946198H3.06112C2.06357 0.946198 1.30399 1.21026 0.782396 1.73837C0.260799 2.25997 0 3.02933 0 4.04644V17.9731C0 18.9837 0.260799 19.7498 0.782396 20.2714C1.30399 20.793 2.06357 21.0538 3.06112 21.0538ZM3.24694 19.0978C2.81663 19.0978 2.49389 18.9869 2.27873 18.7653C2.07009 18.5501 1.96577 18.2339 1.96577 17.8166V4.19314C1.96577 3.78238 2.07009 3.46617 2.27873 3.24449C2.49389 3.02281 2.81989 2.91197 3.25672 2.91197H7.1198V7.84106C7.1198 8.5387 7.28932 9.0603 7.62836 9.40586C7.97392 9.74489 8.49226 9.91441 9.18337 9.91441H14.044V17.8166C14.044 18.2339 13.9364 18.5501 13.7213 18.7653C13.5061 18.9869 13.1801 19.0978 12.7433 19.0978H3.24694ZM9.35941 8.22248C9.16381 8.22248 9.02038 8.17684 8.9291 8.08556C8.84434 7.99428 8.80196 7.8541 8.80196 7.66502V3.14669L13.8093 8.22248H9.35941Z",
            fill: "currentColor"
        })
    });
}
var $51fc4dd6627ef6a5$export$2e2bcd8739ae039 = $51fc4dd6627ef6a5$var$Paper;




function $7acd37216e5c8138$var$Plus() {
    return /*#__PURE__*/ (0, $bzML5$reactjsxruntime.jsx)("svg", {
        width: "10",
        height: "10",
        viewBox: "0 0 10 10",
        fill: "none",
        xmlns: "http://www.w3.org/2000/svg",
        className: "Plus-Icon",
        children: /*#__PURE__*/ (0, $bzML5$reactjsxruntime.jsx)("path", {
            d: "M1.05401 5.43677L1.054 5.43678L1.05558 5.4383C1.17634 5.5549 1.32242 5.61578 1.48824 5.61578H4.3893V8.51685C4.3893 8.6828 4.45034 8.82801 4.56832 8.94599C4.68696 9.06463 4.83415 9.125 5.00254 9.125C5.17063 9.125 5.31675 9.06478 5.43247 8.9452C5.54993 8.82736 5.6107 8.68243 5.6107 8.51685V5.61578H8.51685C8.68 5.61578 8.82299 5.55432 8.94012 5.43754C9.06211 5.31939 9.125 5.17201 9.125 5.00254C9.125 4.83308 9.06212 4.68571 8.94013 4.56755C8.823 4.45077 8.68001 4.3893 8.51685 4.3893H5.6107V1.48824C5.6107 1.32526 5.54942 1.18138 5.434 1.06148C5.31867 0.93803 5.17211 0.875 5.00254 0.875C4.83271 0.875 4.68507 0.938157 4.56678 1.06066C4.45086 1.18073 4.3893 1.32489 4.3893 1.48824V4.3893H1.48824C1.32242 4.3893 1.17634 4.45019 1.05558 4.56678L1.05557 4.56677L1.05401 4.56832C0.935371 4.68696 0.875 4.83415 0.875 5.00254C0.875 5.17094 0.935371 5.31812 1.05401 5.43677Z",
            fill: "currentColor",
            stroke: "currentColor",
            strokeWidth: "0.75"
        })
    });
}
var $7acd37216e5c8138$export$2e2bcd8739ae039 = $7acd37216e5c8138$var$Plus;




function $785110b23611a108$var$Search() {
    return /*#__PURE__*/ (0, $bzML5$reactjsxruntime.jsx)("svg", {
        width: "15",
        height: "15",
        viewBox: "0 0 15 15",
        fill: "none",
        xmlns: "http://www.w3.org/2000/svg",
        children: /*#__PURE__*/ (0, $bzML5$reactjsxruntime.jsx)("path", {
            d: "M7.25 13.25C10.5637 13.25 13.25 10.5637 13.25 7.25C13.25 3.93629 10.5637 1.25 7.25 1.25C3.93629 1.25 1.25 3.93629 1.25 7.25C1.25 10.5637 3.93629 13.25 7.25 13.25Z",
            stroke: "currentColor",
            strokeWidth: "2.25",
            strokeLinecap: "round",
            strokeLinejoin: "round"
        })
    });
}
var $785110b23611a108$export$2e2bcd8739ae039 = $785110b23611a108$var$Search;




function $9d822cb91216a7b9$var$SortAsc() {
    return /*#__PURE__*/ (0, $bzML5$reactjsxruntime.jsx)("svg", {
        className: "SortAsc",
        width: "11",
        height: "10",
        viewBox: "0 0 11 10",
        fill: "none",
        xmlns: "http://www.w3.org/2000/svg",
        children: /*#__PURE__*/ (0, $bzML5$reactjsxruntime.jsx)("path", {
            d: "M2.48704 0.656016L0.142538 3.10458C0.0475127 3.20178 0 3.31575 0 3.44647C0 3.58725 0.0425976 3.69954 0.127793 3.78334C0.212988 3.86713 0.32112 3.90903 0.452189 3.90903C0.579982 3.90903 0.686476 3.86546 0.771671 3.77831L1.73503 2.75766L2.41332 1.94817L2.37399 3.00402V9.02738C2.37399 9.16146 2.41659 9.27375 2.50179 9.36425C2.58698 9.45475 2.69675 9.5 2.8311 9.5C2.96217 9.5 3.0703 9.45475 3.1555 9.36425C3.24069 9.27375 3.28329 9.16146 3.28329 9.02738V3.00402L3.24397 1.94817L3.92225 2.75766L4.88561 3.77831C4.97081 3.86546 5.0773 3.90903 5.20509 3.90903C5.33616 3.90903 5.4443 3.86713 5.52949 3.78334C5.61469 3.69954 5.65728 3.58725 5.65728 3.44647C5.65728 3.31575 5.60813 3.20178 5.50983 3.10458L3.17024 0.656016C3.07522 0.552107 2.96053 0.500152 2.82618 0.500152C2.69511 0.4968 2.58207 0.548755 2.48704 0.656016ZM8.51296 9.34414L10.8575 6.88552C10.9525 6.78831 11 6.67435 11 6.54363C11 6.4062 10.9574 6.29559 10.8722 6.21179C10.787 6.12799 10.6789 6.08609 10.5478 6.08609C10.4233 6.08609 10.3184 6.12967 10.2332 6.21682L9.26988 7.23747L8.5916 8.04695L8.63092 6.98608V0.967742C8.63092 0.833666 8.58668 0.723054 8.49821 0.635904C8.41302 0.545403 8.30488 0.500152 8.17382 0.500152C8.04275 0.500152 7.93298 0.545403 7.8445 0.635904C7.75931 0.723054 7.71671 0.833666 7.71671 0.967742V6.98608L7.75603 8.04695L7.07775 7.23747L6.11439 6.21682C6.02919 6.12967 5.9227 6.08609 5.79491 6.08609C5.66384 6.08609 5.5557 6.12799 5.47051 6.21179C5.38859 6.29559 5.34763 6.4062 5.34763 6.54363C5.34763 6.67435 5.39678 6.78831 5.49508 6.88552L7.82976 9.34414C7.92806 9.44469 8.04275 9.49497 8.17382 9.49497C8.30488 9.49832 8.41793 9.44805 8.51296 9.34414Z",
            fill: "currentColor"
        })
    });
}
var $9d822cb91216a7b9$export$2e2bcd8739ae039 = $9d822cb91216a7b9$var$SortAsc;




function $cdb4e214c3eaae66$var$SortDesc() {
    return /*#__PURE__*/ (0, $bzML5$reactjsxruntime.jsx)("svg", {
        className: "SortDesc",
        width: "11",
        height: "10",
        viewBox: "0 0 11 10",
        fill: "none",
        xmlns: "http://www.w3.org/2000/svg",
        children: /*#__PURE__*/ (0, $bzML5$reactjsxruntime.jsx)("path", {
            d: "M2.48704 0.656016L0.142538 3.10458C0.0475127 3.20178 0 3.31575 0 3.44647C0 3.58725 0.0425976 3.69954 0.127793 3.78334C0.212988 3.86713 0.32112 3.90903 0.452189 3.90903C0.579982 3.90903 0.686476 3.86546 0.771671 3.77831L1.73503 2.75766L2.41332 1.94817L2.37399 3.00402V9.02738C2.37399 9.16146 2.41659 9.27375 2.50179 9.36425C2.58698 9.45475 2.69675 9.5 2.8311 9.5C2.96217 9.5 3.0703 9.45475 3.1555 9.36425C3.24069 9.27375 3.28329 9.16146 3.28329 9.02738V3.00402L3.24397 1.94817L3.92225 2.75766L4.88561 3.77831C4.97081 3.86546 5.0773 3.90903 5.20509 3.90903C5.33616 3.90903 5.4443 3.86713 5.52949 3.78334C5.61469 3.69954 5.65728 3.58725 5.65728 3.44647C5.65728 3.31575 5.60813 3.20178 5.50983 3.10458L3.17024 0.656016C3.07522 0.552107 2.96053 0.500152 2.82618 0.500152C2.69511 0.4968 2.58207 0.548755 2.48704 0.656016ZM8.51296 9.34414L10.8575 6.88552C10.9525 6.78831 11 6.67435 11 6.54363C11 6.4062 10.9574 6.29559 10.8722 6.21179C10.787 6.12799 10.6789 6.08609 10.5478 6.08609C10.4233 6.08609 10.3184 6.12967 10.2332 6.21682L9.26988 7.23747L8.5916 8.04695L8.63092 6.98608V0.967742C8.63092 0.833666 8.58668 0.723054 8.49821 0.635904C8.41302 0.545403 8.30488 0.500152 8.17382 0.500152C8.04275 0.500152 7.93298 0.545403 7.8445 0.635904C7.75931 0.723054 7.71671 0.833666 7.71671 0.967742V6.98608L7.75603 8.04695L7.07775 7.23747L6.11439 6.21682C6.02919 6.12967 5.9227 6.08609 5.79491 6.08609C5.66384 6.08609 5.5557 6.12799 5.47051 6.21179C5.38859 6.29559 5.34763 6.4062 5.34763 6.54363C5.34763 6.67435 5.39678 6.78831 5.49508 6.88552L7.82976 9.34414C7.92806 9.44469 8.04275 9.49497 8.17382 9.49497C8.30488 9.49832 8.41793 9.44805 8.51296 9.34414Z",
            fill: "currentColor"
        })
    });
}
var $cdb4e214c3eaae66$export$2e2bcd8739ae039 = $cdb4e214c3eaae66$var$SortDesc;


/* eslint-disable react/prop-types */ 

function $31724cb8e802f2db$var$Square(param) {
    var _param_color = param.color, color = _param_color === void 0 ? "#F3BD6A" : _param_color;
    return /*#__PURE__*/ (0, $bzML5$reactjsxruntime.jsx)("svg", {
        width: "16",
        height: "16",
        viewBox: "0 0 16 16",
        fill: "none",
        xmlns: "http://www.w3.org/2000/svg",
        children: /*#__PURE__*/ (0, $bzML5$reactjsxruntime.jsx)("rect", {
            x: "1",
            y: "1",
            width: "14",
            height: "14",
            rx: "3",
            stroke: color,
            strokeWidth: "2"
        })
    });
}
var $31724cb8e802f2db$export$2e2bcd8739ae039 = $31724cb8e802f2db$var$Square;


var $7df6e34ba6311cab$export$2e2bcd8739ae039 = (0, $b1a47ec01eab3f47$export$2e2bcd8739ae039);


/* eslint-disable react/prop-types */ 


function $4d8744feefbf7160$var$LargeButton(param) {
    var text = param.text, icon = param.icon, type = param.type, onClick = param.onClick;
    var className = "".concat(type, " LargeButton");
    return /*#__PURE__*/ (0, $bzML5$reactjsxruntime.jsxs)("button", {
        className: className,
        type: "button",
        onClick: onClick,
        children: [
            icon,
            " ",
            text
        ]
    });
}
var $4d8744feefbf7160$export$2e2bcd8739ae039 = $4d8744feefbf7160$var$LargeButton;


/* eslint-disable react/prop-types */ 


function $1da022373069915d$var$Line() {
    return /*#__PURE__*/ (0, $bzML5$reactjsxruntime.jsx)("div", {
        className: "Line",
        children: /*#__PURE__*/ (0, $bzML5$reactjsxruntime.jsx)("div", {
            className: "innerLine"
        })
    });
}
var $1da022373069915d$export$2e2bcd8739ae039 = $1da022373069915d$var$Line;


/* eslint-disable react/prop-types */ 


function $9da27f062b93467b$var$ListSelector(param) {
    var items = param.items, selected = param.selected;
    return /*#__PURE__*/ (0, $bzML5$reactjsxruntime.jsx)("div", {
        className: "ListSelector",
        children: items.map(function(param) {
            var text = param.text, onClick = param.onClick, type = param.type;
            return /*#__PURE__*/ (0, $bzML5$reactjsxruntime.jsx)("div", {
                children: /*#__PURE__*/ (0, $bzML5$reactjsxruntime.jsx)("button", {
                    type: "button",
                    onClick: function() {
                        return onClick(type);
                    },
                    className: selected === type ? "selected" : "",
                    children: text
                })
            }, type);
        })
    });
}
var $9da27f062b93467b$export$2e2bcd8739ae039 = $9da27f062b93467b$var$ListSelector;







/* eslint-disable react/prop-types */ 



/* eslint-disable react/prop-types */ 


function $e5fde0d08905dbc9$var$MenuListItem(param) {
    var text = param.text, onClick = param.onClick, icon = param.icon, sysId = param.sysId;
    return /*#__PURE__*/ (0, $bzML5$reactjsxruntime.jsx)("div", {
        className: "MenuListItem",
        children: /*#__PURE__*/ (0, $bzML5$reactjsxruntime.jsxs)("button", {
            type: "button",
            onClick: onClick,
            className: "menu-list-item",
            children: [
                /*#__PURE__*/ (0, $bzML5$reactjsxruntime.jsx)("span", {
                    className: "menu-list-item-icon",
                    children: icon
                }),
                /*#__PURE__*/ (0, $bzML5$reactjsxruntime.jsx)("span", {
                    className: "menu-list-item-text",
                    children: text
                })
            ]
        })
    }, sysId);
}
var $e5fde0d08905dbc9$export$2e2bcd8739ae039 = $e5fde0d08905dbc9$var$MenuListItem;


/* eslint-disable react/prop-types */ 


function $27da1ed4b7c1485f$var$MoreLink(param) {
    var text = param.text, onClick = param.onClick;
    return /*#__PURE__*/ (0, $bzML5$reactjsxruntime.jsx)("div", {
        className: "MoreLink",
        children: /*#__PURE__*/ (0, $bzML5$reactjsxruntime.jsx)("button", {
            type: "button",
            onClick: function() {
                return onClick(true);
            },
            children: text
        })
    });
}
var $27da1ed4b7c1485f$export$2e2bcd8739ae039 = $27da1ed4b7c1485f$var$MoreLink;



function $b6fad202dc3a3133$var$MenuList(param) {
    var list = param.list, title = param.title, plusOnClick = param.plusOnClick, _param_limit = param.limit, limit = _param_limit === void 0 ? 4 : _param_limit, showMoreLink = param.showMoreLink;
    var _useState = (0, ($parcel$interopDefault($bzML5$swchelperslib_sliced_to_arrayjs)))((0, $bzML5$react.useState)(true), 2), showList = _useState[0], setShowList = _useState[1];
    var _useState1 = (0, ($parcel$interopDefault($bzML5$swchelperslib_sliced_to_arrayjs)))((0, $bzML5$react.useState)(false), 2), showAll = _useState1[0], setShowAll = _useState1[1];
    return /*#__PURE__*/ (0, $bzML5$reactjsxruntime.jsxs)("div", {
        className: "MenuList",
        children: [
            /*#__PURE__*/ (0, $bzML5$reactjsxruntime.jsxs)("h3", {
                className: "menu-list-header",
                children: [
                    /*#__PURE__*/ (0, $bzML5$reactjsxruntime.jsx)("button", {
                        className: "header-icon",
                        type: "button",
                        onClick: function() {
                            return setShowList(!showList);
                        },
                        children: /*#__PURE__*/ (0, $bzML5$reactjsxruntime.jsx)((0, $a7f6542e28bf0bdc$export$2e2bcd8739ae039), {})
                    }),
                    /*#__PURE__*/ (0, $bzML5$reactjsxruntime.jsx)("span", {
                        className: "header-content",
                        children: title
                    }),
                    /*#__PURE__*/ (0, $bzML5$reactjsxruntime.jsx)("button", {
                        className: "header-add",
                        type: "button",
                        onClick: plusOnClick,
                        children: /*#__PURE__*/ (0, $bzML5$reactjsxruntime.jsx)((0, $7acd37216e5c8138$export$2e2bcd8739ae039), {})
                    })
                ]
            }),
            /*#__PURE__*/ (0, $bzML5$reactjsxruntime.jsxs)("div", {
                className: showList ? "show" : "hide",
                children: [
                    list.map(function(param, index) {
                        var text = param.text, onClick = param.onClick, icon = param.icon, sysId = param.sysId;
                        if (!showAll && index > limit - 1) return /*#__PURE__*/ (0, $bzML5$reactjsxruntime.jsx)("div", {}, sysId);
                        return /*#__PURE__*/ (0, $bzML5$reactjsxruntime.jsx)((0, $e5fde0d08905dbc9$export$2e2bcd8739ae039), {
                            text: text,
                            onClick: onClick,
                            icon: icon,
                            sysId: sysId
                        }, sysId);
                    }),
                    showMoreLink.show ? /*#__PURE__*/ (0, $bzML5$reactjsxruntime.jsx)((0, $27da1ed4b7c1485f$export$2e2bcd8739ae039), {
                        text: showMoreLink.text,
                        onClick: setShowAll
                    }) : ""
                ]
            })
        ]
    });
}
var $b6fad202dc3a3133$export$2e2bcd8739ae039 = $b6fad202dc3a3133$var$MenuList;





// import { Search as SearchIcon } from "../Icons";
function $73e1af76cdcfac95$var$Search() {
    return /*#__PURE__*/ (0, $bzML5$reactjsxruntime.jsxs)("div", {
        className: "Search",
        children: [
            /*#__PURE__*/ (0, $bzML5$reactjsxruntime.jsx)("div", {
                className: "icon",
                children: "\uD83D\uDD0D"
            }),
            /*#__PURE__*/ (0, $bzML5$reactjsxruntime.jsx)("input", {
                placeholder: "Search"
            })
        ]
    });
}
var $73e1af76cdcfac95$export$2e2bcd8739ae039 = $73e1af76cdcfac95$var$Search;


/* eslint-disable react/prop-types */ 


function $bb2919b587d7a5d1$var$Title(param) {
    var title = param.title;
    return /*#__PURE__*/ (0, $bzML5$reactjsxruntime.jsx)("div", {
        className: "Title",
        children: /*#__PURE__*/ (0, $bzML5$reactjsxruntime.jsx)("h1", {
            children: title
        })
    });
}
var $bb2919b587d7a5d1$export$2e2bcd8739ae039 = $bb2919b587d7a5d1$var$Title;



var $292db1cba9edb946$var$buttons = [
    {
        text: "Dashboard",
        onClick: function() {
            alert("worked");
        },
        icon: /*#__PURE__*/ (0, $bzML5$reactjsxruntime.jsx)((0, $e3af4d7bb11c631f$export$2e2bcd8739ae039), {})
    },
    {
        text: "My Tasks",
        onClick: function() {
            alert("worked");
        },
        icon: /*#__PURE__*/ (0, $bzML5$reactjsxruntime.jsx)((0, $5dffc3c9e095658a$export$2e2bcd8739ae039), {})
    },
    {
        text: "Inbox",
        onClick: function() {
            alert("worked");
        },
        icon: /*#__PURE__*/ (0, $bzML5$reactjsxruntime.jsx)((0, $b1a47ec01eab3f47$export$2e2bcd8739ae039), {})
    },
    {
        text: "Reports",
        onClick: function() {
            alert("worked");
        },
        icon: /*#__PURE__*/ (0, $bzML5$reactjsxruntime.jsx)((0, $51fc4dd6627ef6a5$export$2e2bcd8739ae039), {})
    }
];
var $292db1cba9edb946$var$projects = [
    {
        text: "Project 1",
        icon: /*#__PURE__*/ (0, $bzML5$reactjsxruntime.jsx)((0, $31724cb8e802f2db$export$2e2bcd8739ae039), {}),
        onClick: function() {
            alert("worked");
        },
        sysId: 1
    },
    {
        text: "Project 2",
        icon: /*#__PURE__*/ (0, $bzML5$reactjsxruntime.jsx)((0, $31724cb8e802f2db$export$2e2bcd8739ae039), {}),
        onClick: function() {
            alert("worked");
        },
        sysId: 2
    },
    {
        text: "Project 3",
        icon: /*#__PURE__*/ (0, $bzML5$reactjsxruntime.jsx)((0, $31724cb8e802f2db$export$2e2bcd8739ae039), {}),
        onClick: function() {
            alert("worked");
        },
        sysId: 3
    }
];
var $292db1cba9edb946$var$campaigns = [
    {
        text: "Campaigns 1",
        icon: /*#__PURE__*/ (0, $bzML5$reactjsxruntime.jsx)((0, $31724cb8e802f2db$export$2e2bcd8739ae039), {}),
        onClick: function() {
            alert("worked");
        },
        sysId: 1
    },
    {
        text: "Campaigns 2",
        icon: /*#__PURE__*/ (0, $bzML5$reactjsxruntime.jsx)((0, $31724cb8e802f2db$export$2e2bcd8739ae039), {}),
        onClick: function() {
            alert("worked");
        },
        sysId: 2
    },
    {
        text: "Campaigns 3",
        icon: /*#__PURE__*/ (0, $bzML5$reactjsxruntime.jsx)((0, $31724cb8e802f2db$export$2e2bcd8739ae039), {}),
        onClick: function() {
            alert("worked");
        },
        sysId: 3
    }
];
function $292db1cba9edb946$var$Menu() {
    return /*#__PURE__*/ (0, $bzML5$reactjsxruntime.jsxs)("div", {
        className: "Menu",
        children: [
            /*#__PURE__*/ (0, $bzML5$reactjsxruntime.jsx)((0, $bb2919b587d7a5d1$export$2e2bcd8739ae039), {
                title: "Cadence"
            }),
            /*#__PURE__*/ (0, $bzML5$reactjsxruntime.jsx)((0, $73e1af76cdcfac95$export$2e2bcd8739ae039), {}),
            /*#__PURE__*/ (0, $bzML5$reactjsxruntime.jsx)((0, $603a0ccf78283c06$export$2e2bcd8739ae039), {
                list: $292db1cba9edb946$var$buttons
            }),
            /*#__PURE__*/ (0, $bzML5$reactjsxruntime.jsx)((0, $1da022373069915d$export$2e2bcd8739ae039), {}),
            /*#__PURE__*/ (0, $bzML5$reactjsxruntime.jsx)((0, $b6fad202dc3a3133$export$2e2bcd8739ae039), {
                title: "Projects",
                list: $292db1cba9edb946$var$projects,
                plusOnClick: function() {
                    alert("worked");
                },
                limit: 2,
                showMoreLink: {
                    show: true,
                    text: "Show more projects"
                }
            }),
            /*#__PURE__*/ (0, $bzML5$reactjsxruntime.jsx)((0, $1da022373069915d$export$2e2bcd8739ae039), {}),
            /*#__PURE__*/ (0, $bzML5$reactjsxruntime.jsx)((0, $b6fad202dc3a3133$export$2e2bcd8739ae039), {
                title: "Campaigns",
                list: $292db1cba9edb946$var$campaigns,
                plusOnClick: function() {
                    alert("worked");
                },
                limit: 2,
                showMoreLink: {
                    show: true,
                    text: "Show more campaigns"
                }
            })
        ]
    });
}
var $292db1cba9edb946$export$2e2bcd8739ae039 = $292db1cba9edb946$var$Menu;





/* eslint-disable react/prop-types */ 


function $052dcb7229456c59$var$ProfileIcon(param) {
    var user = param.user;
    return /*#__PURE__*/ (0, $bzML5$reactjsxruntime.jsx)("button", {
        className: "ProfileIcon",
        type: "button",
        children: user.iconUrl ? /*#__PURE__*/ (0, $bzML5$reactjsxruntime.jsx)("img", {
            src: user.iconUrl,
            alt: "Icon"
        }) : ""
    });
}
var $052dcb7229456c59$export$2e2bcd8739ae039 = $052dcb7229456c59$var$ProfileIcon;



/* eslint-disable react/prop-types */ 

/* eslint-disable react/prop-types */ 



function $18d7f042ea3c3458$var$Headers(param) {
    var columns = param.columns, selectedHeader = param.selectedHeader, columnOnClick = param.columnOnClick;
    return /*#__PURE__*/ (0, $bzML5$reactjsxruntime.jsx)("header", {
        className: "TaskList-Headers",
        children: columns.map(function(param) {
            var label = param.label, field = param.field;
            var selected = selectedHeader.field === field;
            var sort = selectedHeader.sort;
            var sortAsc = sort === "asc";
            var labelClassName = selected ? "".concat(sort, " selected-label") : "";
            var iconDiv = /*#__PURE__*/ (0, $bzML5$reactjsxruntime.jsx)("div", {
                className: "icon",
                children: sortAsc ? /*#__PURE__*/ (0, $bzML5$reactjsxruntime.jsx)((0, $9d822cb91216a7b9$export$2e2bcd8739ae039), {}) : /*#__PURE__*/ (0, $bzML5$reactjsxruntime.jsx)((0, $cdb4e214c3eaae66$export$2e2bcd8739ae039), {})
            });
            return /*#__PURE__*/ (0, $bzML5$reactjsxruntime.jsx)("div", {
                className: "col",
                children: /*#__PURE__*/ (0, $bzML5$reactjsxruntime.jsxs)("button", {
                    className: labelClassName,
                    type: "button",
                    onClick: function() {
                        return columnOnClick(field, sortAsc);
                    },
                    children: [
                        /*#__PURE__*/ (0, $bzML5$reactjsxruntime.jsx)("div", {
                            className: "label",
                            children: label
                        }),
                        selected ? iconDiv : ""
                    ]
                })
            });
        })
    });
}
var $18d7f042ea3c3458$export$2e2bcd8739ae039 = $18d7f042ea3c3458$var$Headers;


/* eslint-disable react/prop-types */ 



function $88e9808c701c6936$var$Items(param) {
    var items = param.items, columns = param.columns;
    return /*#__PURE__*/ (0, $bzML5$reactjsxruntime.jsx)((0, $bzML5$reactjsxruntime.Fragment), {
        children: items.map(function(item) {
            return /*#__PURE__*/ (0, $bzML5$reactjsxruntime.jsx)("div", {
                className: "TaskList-Items",
                children: columns.map(function(param, index) {
                    var columnField = param.field;
                    var foundField = item.fields.find(function(param) {
                        var field = param.field;
                        return field === columnField;
                    });
                    if (!foundField) return "";
                    var circle = index === 0 ? /*#__PURE__*/ (0, $bzML5$reactjsxruntime.jsx)((0, $f5413103748708b7$export$2e2bcd8739ae039), {}) : "";
                    var icon = foundField.icon || circle;
                    return /*#__PURE__*/ (0, $bzML5$reactjsxruntime.jsx)("div", {
                        className: "col",
                        children: /*#__PURE__*/ (0, $bzML5$reactjsxruntime.jsxs)("div", {
                            className: "container",
                            children: [
                                icon ? /*#__PURE__*/ (0, $bzML5$reactjsxruntime.jsx)("div", {
                                    className: "icon",
                                    children: icon
                                }) : "",
                                /*#__PURE__*/ (0, $bzML5$reactjsxruntime.jsx)("div", {
                                    children: foundField.displayValue
                                })
                            ]
                        })
                    });
                })
            });
        })
    });
}
var $88e9808c701c6936$export$2e2bcd8739ae039 = $88e9808c701c6936$var$Items;


/* eslint-disable no-plusplus */ /* eslint-disable react/prop-types */ 



function $7145b78bd32f6ffd$var$generateColumns(length) {
    var columns = [];
    for(var x = 0; x < length; x++)columns.push(/*#__PURE__*/ (0, $bzML5$reactjsxruntime.jsx)("div", {
        className: "ItemsGroup-container"
    }));
    return columns;
}
function $7145b78bd32f6ffd$var$ItemsGroup(param) {
    var text = param.text, color = param.color, length = param.length, backgroundColor = param.backgroundColor;
    var style = {
        "background-color": backgroundColor,
        color: color
    };
    return /*#__PURE__*/ (0, $bzML5$reactjsxruntime.jsxs)("div", {
        className: "ItemsGroup",
        children: [
            /*#__PURE__*/ (0, $bzML5$reactjsxruntime.jsxs)("div", {
                className: "ItemsGroup-container",
                children: [
                    /*#__PURE__*/ (0, $bzML5$reactjsxruntime.jsx)("div", {
                        className: "ItemsGroup-text",
                        style: style,
                        children: text
                    }),
                    /*#__PURE__*/ (0, $bzML5$reactjsxruntime.jsx)("div", {
                        className: "ItemsGroup-space"
                    }),
                    /*#__PURE__*/ (0, $bzML5$reactjsxruntime.jsx)("div", {
                        className: "ItemsGroup-plus",
                        style: style,
                        children: /*#__PURE__*/ (0, $bzML5$reactjsxruntime.jsx)((0, $7acd37216e5c8138$export$2e2bcd8739ae039), {})
                    })
                ]
            }),
            $7145b78bd32f6ffd$var$generateColumns(length)
        ]
    });
}
var $7145b78bd32f6ffd$export$2e2bcd8739ae039 = $7145b78bd32f6ffd$var$ItemsGroup;



function $28157c957a929a4c$var$TaskList(param) {
    var columns = param.columns, tasks = param.tasks, selectedHeader = param.selectedHeader, columnOnClick = param.columnOnClick;
    return /*#__PURE__*/ (0, $bzML5$reactjsxruntime.jsxs)("section", {
        className: "TaskList",
        children: [
            /*#__PURE__*/ (0, $bzML5$reactjsxruntime.jsx)((0, $18d7f042ea3c3458$export$2e2bcd8739ae039), {
                columns: columns,
                selectedHeader: selectedHeader,
                columnOnClick: columnOnClick
            }),
            Object.keys(tasks).map(function(key) {
                var taskGroup = tasks[key];
                var _taskGroup_group = taskGroup.group, displayValue = _taskGroup_group.displayValue, display = _taskGroup_group.display, color = _taskGroup_group.color, field = _taskGroup_group.field, backgroundColor = _taskGroup_group.backgroundColor;
                return /*#__PURE__*/ (0, $bzML5$reactjsxruntime.jsxs)((0, $bzML5$reactjsxruntime.Fragment), {
                    children: [
                        display ? /*#__PURE__*/ (0, $bzML5$reactjsxruntime.jsx)((0, $7145b78bd32f6ffd$export$2e2bcd8739ae039), {
                            text: displayValue,
                            backgroundColor: backgroundColor,
                            color: color,
                            length: columns.length
                        }) : "",
                        /*#__PURE__*/ (0, $bzML5$reactjsxruntime.jsx)((0, $88e9808c701c6936$export$2e2bcd8739ae039), {
                            items: taskGroup.items,
                            columns: columns
                        })
                    ]
                });
            })
        ]
    });
}
var $28157c957a929a4c$export$2e2bcd8739ae039 = $28157c957a929a4c$var$TaskList;





//# sourceMappingURL=main.js.map
