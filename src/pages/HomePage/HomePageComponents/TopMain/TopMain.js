import './TopMain.css'
import { Button } from "@mui/material";

import { motion } from "framer-motion"

const svgVariants = {
    hidden: {
        rotate: -180
    },
    visible: {
        rotate: 0,
        transition: { duration: 1 }
    }
}

const pathVariants = {
    hidden: {
        opacity: 0,
        pathLength: 0
    },
    visible: {
        opacity: 1,
        pathLength: 1,
        transition: {
            duration: 2,
            ease: "easeInOut"
        }
    }
}

function TopMain() {
    return (
        <div className="outmost-container">
        <div className="container">
            {/*<div className="navbar">*/}
            {/*    <div className="nexus-logo">*/}
            {/*        <motion.svg variants={svgVariants} initial="hidden" animate="visible" xmlns="http://www.w3.org/2000/svg" width="59" height="58" viewBox="0 0 59 58" fill="none">*/}
            {/*            <motion.path variants={pathVariants} initial="hidden" animate="visible" d="M8.27615 14.5913L21.3326 35.3107L6.64355 49.8644H17.1362L24.6928 40.6435L34.7113 56.5414H41.6439L15.2093 14.5913H8.27615Z" fill="white"/>*/}
            {/*            <motion.path variants={pathVariants} initial="hidden" animate="visible" d="M55.5785 1.45859L27.3057 29.5L29.935 33.6174L55.5785 1.45859Z" fill="white"/>*/}
            {/*            <motion.path variants={pathVariants} initial="hidden" animate="visible" d="M30.1179 11.5232C29.6394 11.7617 29.1646 11.933 28.6856 12.2455C28.5755 12.3148 28.4654 12.3884 28.3381 12.4168C28.2114 12.4453 28.0642 12.4292 27.9745 12.3352C27.807 12.1591 27.9214 11.8696 28.0481 11.6607C28.2737 11.2987 28.5191 10.9523 28.7882 10.6258C28.7957 10.6296 28.8037 10.6328 28.8118 10.6371C29.0696 10.7515 29.3182 10.8943 29.5556 11.0619C29.7559 11.1988 29.9444 11.3514 30.1184 11.5232H30.1179Z" fill="white"/>*/}
            {/*            <motion.path variants={pathVariants} initial="hidden" animate="visible" d="M30.983 12.6666C29.5673 13.485 28.1555 13.9023 26.7398 14.8244C26.474 14.9957 26.205 15.1676 25.9026 15.2411C25.596 15.3147 25.2447 15.2658 25.024 15.0408C24.6116 14.616 24.8892 13.9173 25.2039 13.4147C25.9021 12.2955 26.6657 11.2418 27.5309 10.2617C27.8784 10.3063 28.2183 10.3954 28.5427 10.5238C28.0835 10.9373 27.6936 11.4303 27.4068 11.9754C27.2479 12.2778 27.1292 12.6741 27.3413 12.9399C27.4767 13.1075 27.7172 13.1682 27.9342 13.1359C28.1469 13.1075 28.3467 13.0054 28.5352 12.8953C29.1452 12.542 29.714 12.1193 30.2311 11.6355C30.2376 11.6414 30.244 11.6483 30.2504 11.6548C30.2752 11.6795 30.2956 11.7037 30.3197 11.7284C30.5689 12.0066 30.7982 12.3213 30.9819 12.6644C30.9819 12.6644 30.983 12.666 30.9835 12.6671L30.983 12.6666Z" fill="white"/>*/}
            {/*            <motion.path variants={pathVariants} initial="hidden" animate="visible" d="M31.5879 14.819C29.0982 16.1315 26.6128 17.451 24.1188 18.7678C24.1123 18.7625 24.1048 18.7576 24.0978 18.7528C23.8035 18.5326 23.534 18.2791 23.2971 17.9929C23.0888 17.7475 22.9008 17.4736 22.745 17.1798C21.9567 15.6922 22.0421 13.9759 22.8267 12.6193C23.252 11.8879 23.8809 11.2585 24.6902 10.8299C25.1112 10.6092 25.5478 10.454 25.9936 10.3686C26.1407 10.3401 26.283 10.3154 26.4307 10.3031C26.6063 10.287 26.782 10.2784 26.9533 10.2827H26.9597C25.6118 11.3616 24.4888 12.7176 23.6838 14.2449C23.2998 14.9764 23.0055 15.9285 23.5205 16.574C23.8513 16.9827 24.4313 17.1256 24.9507 17.0558C25.4732 16.9822 25.9479 16.7287 26.4055 16.4677C28.1117 15.4758 29.6905 14.2637 31.0868 12.8733C31.3999 13.4888 31.5847 14.1407 31.5874 14.7938C31.5874 14.819 31.5879 14.819 31.5874 14.8195L31.5879 14.819Z" fill="white"/>*/}
            {/*            <motion.path variants={pathVariants} initial="hidden" animate="visible" d="M31.5512 15.5703C31.3638 17.0343 30.4954 18.3817 29.0953 19.1239C28.4047 19.4918 27.6609 19.6674 26.9332 19.676C26.3978 19.6803 25.8629 19.5895 25.3613 19.4134C27.5981 18.4553 29.6941 17.1546 31.5512 15.5703Z" fill="white"/>*/}
            {/*        </motion.svg>*/}
            {/*    </div>*/}
            {/*    <hr className="line"/>*/}
            {/*    <div className="icons-container">*/}
            {/*        <Button>*/}
            {/*    <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" viewBox="0 0 25 25" fill="none">*/}
            {/*        <path d="M23.3221 10.5646H18.5843C18.5005 10.5503 18.4155 10.5503 18.3317 10.5646H18.1273C18.0645 10.6096 18.0042 10.6601 17.9469 10.7156C17.88 10.7711 17.8157 10.8316 17.7545 10.8967C17.7144 10.9584 17.6782 11.0241 17.6463 11.0929C17.5912 11.188 17.5429 11.2891 17.502 11.3948L15.578 18.0517L10.5636 0.994488C10.4793 0.70308 10.3256 0.451305 10.1234 0.273377C9.92117 0.0954496 9.6802 0 9.43323 0C9.18627 0 8.9453 0.0954496 8.74307 0.273377C8.54083 0.451305 8.38714 0.70308 8.30288 0.994488L5.52511 10.5646H1.67711C1.35819 10.5646 1.05233 10.7237 0.826813 11.0067C0.601301 11.2898 0.474609 11.6738 0.474609 12.0741C0.474609 12.4745 0.601301 12.8584 0.826813 13.1415C1.05233 13.4246 1.35819 13.5836 1.67711 13.5836H6.84786C6.91621 13.5423 6.98073 13.4917 7.04026 13.4326C7.10722 13.3771 7.17147 13.3167 7.23266 13.2515L7.34088 13.0553C7.3982 12.9621 7.44663 12.8607 7.48518 12.7534L9.43323 5.91541L14.4356 23.1537C14.5197 23.4455 14.6732 23.6976 14.8755 23.8759C15.0778 24.0542 15.3189 24.1499 15.566 24.15C15.8131 24.1499 16.0542 24.0542 16.2565 23.8759C16.4587 23.6976 16.6123 23.4455 16.6963 23.1537L19.4621 13.5836H23.3221C23.641 13.5836 23.9469 13.4246 24.1724 13.1415C24.3979 12.8584 24.5246 12.4745 24.5246 12.0741C24.5246 11.6738 24.3979 11.2898 24.1724 11.0067C23.9469 10.7237 23.641 10.5646 23.3221 10.5646Z" fill="#F8F8F8"/>*/}
            {/*    </svg>*/}
            {/*        </Button>*/}
            {/*        <Button>*/}
            {/*    <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" viewBox="0 0 25 25" fill="none">*/}
            {/*        <path d="M15.2775 18.6094L13.7248 20.1802V13.4256C13.7248 13.1052 13.598 12.7978 13.3723 12.5712C13.1465 12.3446 12.8404 12.2173 12.5212 12.2173C12.2019 12.2173 11.8958 12.3446 11.6701 12.5712C11.4443 12.7978 11.3175 13.1052 11.3175 13.4256V20.1802L9.76483 18.6094C9.6526 18.4967 9.51937 18.4074 9.37274 18.3464C9.22611 18.2854 9.06896 18.254 8.91024 18.254C8.75153 18.254 8.59438 18.2854 8.44775 18.3464C8.30112 18.4074 8.16789 18.4967 8.05566 18.6094C7.94343 18.722 7.85441 18.8558 7.79368 19.003C7.73294 19.1502 7.70168 19.308 7.70168 19.4673C7.70168 19.6266 7.73294 19.7844 7.79368 19.9316C7.85441 20.0788 7.94343 20.2126 8.05566 20.3252L11.6666 23.9502C11.7811 24.0602 11.916 24.1465 12.0638 24.204C12.2079 24.2679 12.3636 24.3009 12.5212 24.3009C12.6787 24.3009 12.8345 24.2679 12.9785 24.204C13.1263 24.1465 13.2613 24.0602 13.3758 23.9502L16.9867 20.3252C17.2133 20.0977 17.3407 19.7891 17.3407 19.4673C17.3407 19.1455 17.2133 18.8369 16.9867 18.6094C16.76 18.3819 16.4526 18.254 16.1321 18.254C15.8116 18.254 15.5042 18.3819 15.2775 18.6094ZM20.2485 5.23313C19.5131 3.53664 18.2439 2.12902 16.6353 1.22597C15.0267 0.322922 13.1676 -0.0257353 11.3428 0.233424C9.51793 0.492584 7.82808 1.34526 6.53216 2.6608C5.23623 3.97634 4.40573 5.68217 4.1679 7.51688C3.02033 7.79277 2.01365 8.48214 1.33903 9.45407C0.66441 10.426 0.368833 11.6128 0.50843 12.7891C0.648028 13.9654 1.21308 15.0493 2.09628 15.8349C2.97947 16.6205 4.11931 17.0531 5.29932 17.0506C5.61855 17.0506 5.9247 16.9233 6.15043 16.6967C6.37615 16.4701 6.50296 16.1628 6.50296 15.8423C6.50296 15.5218 6.37615 15.2145 6.15043 14.9879C5.9247 14.7613 5.61855 14.634 5.29932 14.634C4.66087 14.634 4.04857 14.3794 3.59712 13.9261C3.14567 13.4729 2.89204 12.8582 2.89204 12.2173C2.89204 11.5764 3.14567 10.9617 3.59712 10.5085C4.04857 10.0552 4.66087 9.80063 5.29932 9.80063C5.61855 9.80063 5.9247 9.67333 6.15043 9.44672C6.37615 9.22011 6.50296 8.91277 6.50296 8.5923C6.50604 7.16318 7.01365 5.78142 7.93562 4.69251C8.85759 3.60359 10.1342 2.87803 11.5387 2.64473C12.9432 2.41143 14.3846 2.68549 15.6068 3.41823C16.829 4.15096 17.7529 5.29493 18.2144 6.64688C18.2832 6.85452 18.4069 7.03951 18.5722 7.18209C18.7376 7.32468 18.9384 7.41951 19.1532 7.45647C19.9549 7.60856 20.6817 8.02874 21.2151 8.64853C21.7485 9.26832 22.0571 10.0512 22.0906 10.8696C22.1241 11.688 21.8805 12.4936 21.3996 13.1552C20.9186 13.8169 20.2287 14.2955 19.4421 14.5131C19.2888 14.5528 19.1447 14.6224 19.0182 14.718C18.8917 14.8135 18.7851 14.9331 18.7047 15.07C18.6242 15.2069 18.5714 15.3584 18.5492 15.5158C18.527 15.6732 18.536 15.8334 18.5755 15.9873C18.615 16.1412 18.6843 16.2858 18.7795 16.4128C18.8747 16.5399 18.9939 16.6468 19.1302 16.7276C19.2666 16.8084 19.4174 16.8614 19.5742 16.8837C19.731 16.9059 19.8906 16.897 20.0439 16.8573C21.3106 16.5213 22.4335 15.7795 23.242 14.7445C24.0505 13.7095 24.5005 12.438 24.5237 11.1229C24.5468 9.8078 24.1418 8.52106 23.3703 7.45806C22.5987 6.39506 21.5026 5.61388 20.2485 5.23313Z" fill="#F8F8F8"/>*/}
            {/*    </svg>*/}
            {/*        </Button>*/}
            {/*        <Button>*/}
            {/*    <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" viewBox="0 0 25 25" fill="none">*/}
            {/*        <path d="M20.9171 0.300903H4.08211C3.12534 0.300903 2.20776 0.682559 1.53122 1.36191C0.854684 2.04126 0.474609 2.96266 0.474609 3.9234V20.8284C0.474609 21.7891 0.854684 22.7105 1.53122 23.3899C2.20776 24.0692 3.12534 24.4509 4.08211 24.4509H20.9171C21.1149 24.4481 21.3121 24.4279 21.5063 24.3905L21.8671 24.306H22.0114L22.4563 24.137L22.6126 24.0524C22.7329 23.98 22.8652 23.9196 22.9854 23.8351C23.146 23.7165 23.2986 23.5874 23.4424 23.4487L23.5265 23.34C23.6446 23.2199 23.7531 23.0907 23.8512 22.9536L23.9594 22.7966C24.0434 22.6622 24.1158 22.5208 24.1759 22.374C24.2089 22.3161 24.237 22.2555 24.2601 22.1929C24.3202 22.048 24.3563 21.891 24.4044 21.734V21.5529C24.4725 21.317 24.5129 21.0738 24.5246 20.8284V3.9234C24.5246 2.96266 24.1445 2.04126 23.468 1.36191C22.7915 0.682559 21.8739 0.300903 20.9171 0.300903ZM4.08211 22.0359C3.76319 22.0359 3.45733 21.9087 3.23181 21.6822C3.0063 21.4558 2.87961 21.1487 2.87961 20.8284V15.6241L6.83583 11.6393C6.94762 11.5262 7.08062 11.4363 7.22716 11.375C7.37369 11.3137 7.53087 11.2822 7.68961 11.2822C7.84835 11.2822 8.00553 11.3137 8.15206 11.375C8.2986 11.4363 8.4316 11.5262 8.54338 11.6393L18.8849 22.0359H4.08211ZM22.1196 20.8284C22.1185 20.9773 22.0899 21.1247 22.0354 21.2631C22.008 21.322 21.9758 21.3785 21.9392 21.4322C21.9071 21.4833 21.8709 21.5317 21.831 21.5771L15.3976 15.1169L16.4558 14.0543C16.5676 13.9412 16.7006 13.8513 16.8472 13.79C16.9937 13.7287 17.1509 13.6972 17.3096 13.6972C17.4684 13.6972 17.6255 13.7287 17.7721 13.79C17.9186 13.8513 18.0516 13.9412 18.1634 14.0543L22.1196 18.0391V20.8284ZM22.1196 14.6219L19.8589 12.3759C19.1707 11.7202 18.2583 11.3547 17.3096 11.3547C16.361 11.3547 15.4485 11.7202 14.7603 12.3759L13.7021 13.4385L10.2389 9.9609C9.55074 9.30522 8.63826 8.93969 7.68961 8.93969C6.74096 8.93969 5.82847 9.30522 5.14031 9.9609L2.87961 12.2069V3.9234C2.87961 3.60315 3.0063 3.29602 3.23181 3.06957C3.45733 2.84312 3.76319 2.7159 4.08211 2.7159H20.9171C21.236 2.7159 21.5419 2.84312 21.7674 3.06957C21.9929 3.29602 22.1196 3.60315 22.1196 3.9234V14.6219Z" fill="#F8F8F8"/>*/}
            {/*    </svg>*/}
            {/*        </Button>*/}
            {/*        <Button>*/}
            {/*    <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" viewBox="0 0 25 25" fill="none">*/}
            {/*        <path d="M20.9171 2.86593H18.5121V1.65843C18.5121 1.33818 18.3854 1.03105 18.1599 0.804596C17.9344 0.578146 17.6285 0.450928 17.3096 0.450928C16.9907 0.450928 16.6848 0.578146 16.4593 0.804596C16.2338 1.03105 16.1071 1.33818 16.1071 1.65843V2.86593H8.89211V1.65843C8.89211 1.33818 8.76542 1.03105 8.5399 0.804596C8.31439 0.578146 8.00853 0.450928 7.68961 0.450928C7.37069 0.450928 7.06483 0.578146 6.83931 0.804596C6.6138 1.03105 6.48711 1.33818 6.48711 1.65843V2.86593H4.08211C3.12534 2.86593 2.20776 3.24758 1.53122 3.92693C0.854684 4.60628 0.474609 5.52768 0.474609 6.48843V20.9784C0.474609 21.9392 0.854684 22.8606 1.53122 23.5399C2.20776 24.2193 3.12534 24.6009 4.08211 24.6009H20.9171C21.8739 24.6009 22.7915 24.2193 23.468 23.5399C24.1445 22.8606 24.5246 21.9392 24.5246 20.9784V6.48843C24.5246 5.52768 24.1445 4.60628 23.468 3.92693C22.7915 3.24758 21.8739 2.86593 20.9171 2.86593ZM22.1196 20.9784C22.1196 21.2987 21.9929 21.6058 21.7674 21.8323C21.5419 22.0587 21.236 22.1859 20.9171 22.1859H4.08211C3.76319 22.1859 3.45733 22.0587 3.23181 21.8323C3.0063 21.6058 2.87961 21.2987 2.87961 20.9784V12.5259H22.1196V20.9784ZM22.1196 10.1109H2.87961V6.48843C2.87961 6.16818 3.0063 5.86105 3.23181 5.6346C3.45733 5.40815 3.76319 5.28093 4.08211 5.28093H6.48711V6.48843C6.48711 6.80868 6.6138 7.11581 6.83931 7.34226C7.06483 7.56871 7.37069 7.69593 7.68961 7.69593C8.00853 7.69593 8.31439 7.56871 8.5399 7.34226C8.76542 7.11581 8.89211 6.80868 8.89211 6.48843V5.28093H16.1071V6.48843C16.1071 6.80868 16.2338 7.11581 16.4593 7.34226C16.6848 7.56871 16.9907 7.69593 17.3096 7.69593C17.6285 7.69593 17.9344 7.56871 18.1599 7.34226C18.3854 7.11581 18.5121 6.80868 18.5121 6.48843V5.28093H20.9171C21.236 5.28093 21.5419 5.40815 21.7674 5.6346C21.9929 5.86105 22.1196 6.16818 22.1196 6.48843V10.1109Z" fill="#F8F8F8"/>*/}
            {/*    </svg>*/}
            {/*        </Button>*/}
            {/*        <Button>*/}
            {/*    <svg xmlns="http://www.w3.org/2000/svg" width="21" height="27" viewBox="0 0 21 27" fill="none">*/}
            {/*        <path d="M6.37967 9.29353L6.37734 9.29471L6.37384 9.29706L6.37967 9.29353ZM17.9927 9.07373C17.9116 8.99484 17.8215 8.92581 17.7244 8.86804C17.5869 8.78649 17.4343 8.73422 17.2759 8.71445C17.1176 8.69469 16.9569 8.70785 16.8039 8.75313C16.6508 8.7984 16.5085 8.87483 16.3859 8.97769C16.2633 9.08055 16.163 9.20764 16.0911 9.35112C15.6892 10.1491 15.135 10.8593 14.46 11.441C14.5635 10.8551 14.6158 10.2612 14.6164 9.66613C14.6186 7.85619 14.1447 6.07798 13.243 4.51255C12.3413 2.94712 11.0439 1.65037 9.48302 0.754334C9.31101 0.65587 9.11697 0.603091 8.91915 0.600958C8.72133 0.598826 8.52621 0.647409 8.35215 0.742142C8.17809 0.836874 8.0308 0.974644 7.92413 1.1425C7.81745 1.31036 7.7549 1.50279 7.74234 1.7017C7.67703 2.81608 7.38784 3.90551 6.8923 4.90398C6.39677 5.90246 5.7052 6.78919 4.8595 7.51047L4.59116 7.73026C3.70637 8.33 2.92323 9.06938 2.27182 9.92001C1.25947 11.2048 0.558196 12.7097 0.223626 14.3151C-0.110944 15.9205 -0.0696106 17.5824 0.344349 19.1689C0.758309 20.7555 1.53351 22.223 2.60846 23.4551C3.68341 24.6873 5.02854 25.6501 6.53717 26.2673C6.71429 26.3399 6.90642 26.3676 7.09665 26.3478C7.28687 26.3281 7.46936 26.2615 7.62805 26.154C7.78674 26.0465 7.91676 25.9013 8.00668 25.7313C8.09659 25.5613 8.14364 25.3716 8.14368 25.1789C8.14271 25.0544 8.12304 24.9308 8.08535 24.8122C7.82432 23.8237 7.74914 22.7948 7.86368 21.7785C8.9679 23.8761 10.7402 25.5386 12.8955 26.4989C13.1585 26.6173 13.4558 26.6332 13.7297 26.5435C15.4324 25.9897 16.9663 25.0065 18.1857 23.6873C19.4051 22.3681 20.2694 20.7568 20.6966 19.0063C21.1237 17.2558 21.0995 15.4243 20.6263 13.6859C20.1531 11.9474 19.2465 10.3598 17.9927 9.07373ZM13.4369 24.1551C12.4199 23.636 11.5227 22.907 10.8037 22.0156C10.0847 21.1241 9.56002 20.0902 9.26369 18.9811C9.17309 18.6076 9.10298 18.2293 9.05368 17.848C9.02049 17.6052 8.91278 17.3789 8.74564 17.2008C8.5785 17.0228 8.36028 16.9018 8.12151 16.8548C8.0481 16.8404 7.97346 16.8334 7.89868 16.8336C7.69369 16.8334 7.49227 16.8877 7.3147 16.9908C7.13712 17.094 6.98967 17.2425 6.88717 17.4213C5.91936 19.1036 5.43277 21.023 5.48133 22.9668C4.62985 22.3 3.9182 21.4696 3.38764 20.5236C2.85708 19.5777 2.51817 18.5351 2.39055 17.4562C2.26293 16.3773 2.34914 15.2836 2.64418 14.2386C2.93922 13.1935 3.43723 12.2178 4.10933 11.3681C4.61965 10.7003 5.23527 10.1214 5.93167 9.65437C5.96214 9.63468 5.99137 9.61309 6.01917 9.58973C6.01917 9.58973 6.3645 9.30176 6.37617 9.29588C8.03891 7.87959 9.22164 5.97596 9.75952 3.85031C11.0305 5.03435 11.8779 6.60807 12.1701 8.32708C12.4623 10.0461 12.1829 11.8142 11.3754 13.3568C11.2685 13.5627 11.2246 13.7959 11.2492 14.027C11.2738 14.258 11.3659 14.4765 11.5137 14.6548C11.6615 14.8332 11.8585 14.9634 12.0797 15.029C12.301 15.0947 12.5365 15.0928 12.7567 15.0235C14.5437 14.4589 16.1162 13.3563 17.2624 11.8641C17.9515 12.8893 18.4021 14.058 18.5806 15.2831C18.759 16.5082 18.6607 17.758 18.293 18.9395C17.9253 20.1209 17.2976 21.2035 16.4568 22.1066C15.616 23.0097 14.5837 23.7099 13.4369 24.1551Z" fill="#F8F8F8"/>*/}
            {/*    </svg>*/}
            {/*        </Button>*/}
            {/*        <div></div>*/}
            {/*        <div></div>*/}
            {/*        <Button>*/}
            {/*    <div className="setting">*/}
            {/*        <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" viewBox="0 0 25 25" fill="none">*/}
            {/*            <path d="M22.5596 13.6227C22.3634 13.4024 22.2552 13.1191 22.2552 12.8259C22.2552 12.5326 22.3634 12.2493 22.5596 12.029L24.1263 10.2904C24.299 10.1005 24.4062 9.86149 24.4325 9.60771C24.4589 9.35393 24.4031 9.09843 24.2732 8.87787L21.8252 4.70048C21.6966 4.48017 21.5007 4.30554 21.2655 4.20148C21.0304 4.09741 20.7679 4.06924 20.5155 4.12096L18.2144 4.57975C17.9216 4.63943 17.6168 4.59133 17.3575 4.44453C17.0982 4.29773 16.9023 4.06239 16.8069 3.78291L16.0602 1.57348C15.9781 1.33368 15.8217 1.1254 15.613 0.978077C15.4044 0.830755 15.154 0.751843 14.8974 0.752496H10.0015C9.73456 0.738754 9.47043 0.811567 9.24941 0.959813C9.02839 1.10806 8.86265 1.32359 8.77748 1.57348L8.09205 3.78291C7.99658 4.06239 7.8007 4.29773 7.54139 4.44453C7.28208 4.59133 6.97726 4.63943 6.68446 4.57975L4.32216 4.12096C4.08293 4.08762 3.83905 4.12485 3.62124 4.22798C3.40343 4.33111 3.22143 4.49551 3.09817 4.70048L0.650192 8.87787C0.516973 9.09597 0.457073 9.35004 0.479057 9.60375C0.50104 9.85745 0.603781 10.0978 0.772591 10.2904L2.32706 12.029C2.52329 12.2493 2.63151 12.5326 2.63151 12.8259C2.63151 13.1191 2.52329 13.4024 2.32706 13.6227L0.772591 15.3613C0.603781 15.5539 0.50104 15.7943 0.479057 16.048C0.457073 16.3017 0.516973 16.5557 0.650192 16.7738L3.09817 20.9512C3.22681 21.1715 3.42267 21.3462 3.65784 21.4502C3.89301 21.5543 4.15548 21.5825 4.40784 21.5307L6.70894 21.072C7.00174 21.0123 7.30656 21.0604 7.56587 21.2072C7.82518 21.354 8.02106 21.5893 8.11653 21.8688L8.86316 24.0782C8.94833 24.3281 9.11407 24.5436 9.33509 24.6919C9.55611 24.8401 9.82024 24.913 10.0872 24.8992H14.9831C15.2397 24.8999 15.49 24.821 15.6987 24.6736C15.9073 24.5263 16.0638 24.318 16.1459 24.0782L16.8925 21.8688C16.988 21.5893 17.1839 21.354 17.4432 21.2072C17.7025 21.0604 18.0073 21.0123 18.3001 21.072L20.6012 21.5307C20.8536 21.5825 21.116 21.5543 21.3512 21.4502C21.5864 21.3462 21.7823 21.1715 21.9109 20.9512L24.3589 16.7738C24.4888 16.5533 24.5446 16.2978 24.5182 16.044C24.4918 15.7902 24.3846 15.5512 24.212 15.3613L22.5596 13.6227ZM20.7359 15.2405L21.7151 16.3271L20.1483 19.0074L18.704 18.7177C17.8225 18.5399 16.9055 18.6876 16.127 19.1327C15.3486 19.5779 14.763 20.2894 14.4813 21.1323L14.0162 22.4845H10.8827L10.4421 21.1082C10.1604 20.2653 9.57477 19.5537 8.79634 19.1086C8.01791 18.6635 7.10089 18.5158 6.21934 18.6935L4.77504 18.9833L3.18385 16.3151L4.16304 15.2285C4.76519 14.5644 5.09809 13.7047 5.09809 12.8138C5.09809 11.9228 4.76519 11.0632 4.16304 10.3991L3.18385 9.31251L4.75056 6.65637L6.19486 6.94613C7.07641 7.12388 7.99343 6.97617 8.77186 6.53105C9.55029 6.08592 10.1359 5.37437 10.4176 4.53146L10.8827 3.16717H14.0162L14.4813 4.54353C14.763 5.38644 15.3486 6.098 16.127 6.54312C16.9055 6.98824 17.8225 7.13595 18.704 6.9582L20.1483 6.66844L21.7151 9.34873L20.7359 10.4353C20.1405 11.0979 19.8117 11.9526 19.8117 12.8379C19.8117 13.7233 20.1405 14.578 20.7359 15.2405ZM12.4495 7.99651C11.4811 7.99651 10.5345 8.27975 9.7294 8.8104C8.92427 9.34106 8.29674 10.0953 7.92617 10.9777C7.55561 11.8602 7.45866 12.8312 7.64757 13.768C7.83648 14.7048 8.30277 15.5653 8.98749 16.2407C9.6722 16.9161 10.5446 17.3761 11.4943 17.5624C12.444 17.7487 13.4284 17.6531 14.3231 17.2876C15.2177 16.9221 15.9823 16.3031 16.5203 15.5089C17.0583 14.7147 17.3454 13.781 17.3454 12.8259C17.3454 11.545 16.8296 10.3167 15.9114 9.41099C14.9932 8.50532 13.7479 7.99651 12.4495 7.99651ZM12.4495 15.2405C11.9653 15.2405 11.492 15.0989 11.0894 14.8336C10.6869 14.5683 10.3731 14.1911 10.1878 13.7499C10.0025 13.3087 9.95405 12.8232 10.0485 12.3548C10.143 11.8864 10.3761 11.4561 10.7185 11.1184C11.0608 10.7807 11.497 10.5508 11.9719 10.4576C12.4467 10.3644 12.9389 10.4122 13.3863 10.595C13.8336 10.7777 14.2159 11.0872 14.4849 11.4843C14.7539 11.8814 14.8974 12.3483 14.8974 12.8259C14.8974 13.4663 14.6395 14.0804 14.1804 14.5333C13.7213 14.9861 13.0987 15.2405 12.4495 15.2405Z" fill="#F8F8F8"/>*/}
            {/*        </svg>*/}
            {/*    </div>*/}
            {/*        </Button>*/}
            {/*    </div>*/}
            {/*</div>*/}
            <div className="background"></div>
            <div className="search">
                <div className="search-input">
                    <svg xmlns="http://www.w3.org/2000/svg" width="23" height="23" viewBox="0 0 23 23" fill="none">
                        <path d="M20.7784 22.6401L13.4602 15.3115C12.8068 15.835 12.0554 16.2494 11.206 16.5548C10.3565 16.8601 9.45265 17.0128 8.49432 17.0128C6.12027 17.0128 4.11125 16.1892 2.46727 14.542C0.823295 12.8948 0.000871212 10.883 0 8.5064C0 6.12897 0.822424 4.1171 2.46727 2.47078C4.11212 0.824467 6.12114 0.000872451 8.49432 0C10.8684 0 12.8774 0.823594 14.5214 2.47078C16.1653 4.11797 16.9878 6.12984 16.9886 8.5064C16.9886 9.4661 16.8362 10.3713 16.5312 11.2219C16.2263 12.0725 15.8125 12.825 15.2898 13.4794L22.6406 20.8407C22.8802 21.0806 23 21.3751 23 21.724C23 22.073 22.8693 22.3784 22.608 22.6401C22.3684 22.88 22.0634 23 21.6932 23C21.3229 23 21.018 22.88 20.7784 22.6401ZM8.49432 14.3954C10.1278 14.3954 11.5166 13.8227 12.6605 12.6772C13.8044 11.5316 14.3759 10.1414 14.375 8.5064C14.375 6.87055 13.803 5.47987 12.6591 4.33434C11.5152 3.18881 10.127 2.61648 8.49432 2.61735C6.8608 2.61735 5.47208 3.19012 4.32818 4.33565C3.18428 5.48118 2.61277 6.87143 2.61364 8.5064C2.61364 10.1422 3.18559 11.5329 4.32949 12.6785C5.47339 13.824 6.86167 14.3963 8.49432 14.3954Z" fill="#1A1A2E"/>
                    </svg>
                    <input placeholder="Search in the Nexus" className="input-box"/>
                </div>
                <div></div>
                <div></div>
                <Button>
                <svg xmlns="http://www.w3.org/2000/svg" width="34" height="34" viewBox="0 0 34 34" fill="none">
                    <path fill-rule="evenodd" clip-rule="evenodd" d="M21.25 26.9167C21.2503 27.6315 20.9803 28.32 20.4942 28.8441C20.0082 29.3683 19.342 29.6893 18.6292 29.7429L18.4167 29.75H15.5834C14.8685 29.7502 14.1801 29.4803 13.6559 28.9942C13.1318 28.5082 12.8107 27.842 12.7571 27.1292L12.75 26.9167H21.25ZM17 2.83334C19.5713 2.8333 22.042 3.83194 23.891 5.61862C25.7401 7.40529 26.8229 9.8403 26.911 12.41L26.9167 12.75V18.0823L29.4979 23.2447C29.6105 23.4699 29.6669 23.7191 29.6622 23.9709C29.6574 24.2227 29.5918 24.4696 29.4707 24.6905C29.3497 24.9114 29.177 25.0996 28.9673 25.2391C28.7576 25.3786 28.5173 25.4652 28.2668 25.4915L28.1039 25.5H5.8962C5.64426 25.5001 5.39607 25.4391 5.17288 25.3222C4.94969 25.2053 4.75816 25.0361 4.6147 24.829C4.47125 24.6219 4.38015 24.3831 4.3492 24.1331C4.31826 23.8831 4.34839 23.6293 4.43703 23.3934L4.5022 23.2447L7.08336 18.0823V12.75C7.08336 10.1199 8.12815 7.5976 9.98789 5.73787C11.8476 3.87813 14.37 2.83334 17 2.83334ZM17 5.66668C15.1747 5.66678 13.4199 6.37153 12.1015 7.63394C10.7831 8.89636 10.003 10.619 9.92378 12.4426L9.9167 12.75V18.0823C9.91671 18.4337 9.85138 18.782 9.72403 19.1094L9.61778 19.3503L7.96028 22.6667H26.0412L24.3837 19.3488C24.2265 19.0347 24.129 18.6942 24.0961 18.3444L24.0834 18.0823V12.75C24.0834 10.8714 23.3371 9.06972 22.0087 7.74134C20.6803 6.41295 18.8786 5.66668 17 5.66668Z" fill="#1A1A2E"/>
                </svg>
                </Button>
                <div className="user-logo">

                </div>
            </div>
            <div className="blur"></div>
            <motion.div initial={{ opacity:0 }}
                        animate={{ opacity:1 }}
                        transition={{ duration: 1, delay: 0.1 }} className="content">
                <p className="first-content">Skyrocket Your Business Growth</p>
                <p className="second-content">Welcome to our Amazon and e-commerce courses! Our courses are designed to teach you everything you need to know to succeed as a seller on Amazon or any other e-commerce platform.</p>
                <Button color="secondary">
                    <motion.div whileHover={{background: "#fff", color: "#FF236B"}} className="course-button">Check Our Courses</motion.div>
                </Button>
            </motion.div>
        </div>
        </div>
    );
}

export default TopMain;
