import React from "react";
import { Element } from "react-scroll";
import './ourProcess.css'
const OurProcess = () => {
  return (
    <>
      <Element id="process" name="process">
        <div className="rock-process-section">
          <div className="rock-process-header">
            <h1 className="rock-process-title">Our Process</h1>
            <p className="rock-process-desc">
              Your Essence, our excellence, elevating the product experience
              together.Your Essence, our excellence, elevating the product
              experience together.
            </p>
          </div>
          <div className="rock-process-tabs">
            {
              ProcessTabs.map((processTab)=>{
                return(
                  <>
                  <div className="rock-processTab-container">
                    <div className="rock-processTab-icon">
                      {processTab.icon}
                    </div>
                    <div className="rock-processTab-content">

                    <h3 className="rock-processTab-title">
                      {processTab.title}
                    </h3>
                    <p className="rock-processTab-desc">
                      {processTab.desc}
                    </p>
                    </div>

                  </div>
                  </>
                )
              })
            }
          </div>
        </div>
      </Element>
    </>
  );
};

export default OurProcess;

const ProcessTabs = [
  {
    title: "Strategy",
    desc: "We focus on effective strategies based on our customer needs and requirements to deliver simple, successful and sustainable projects.",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="142"
        height="142"
        viewBox="0 0 142 142"
        fill="none"
      >
        <path
          d="M56.09 20.5235C46.0696 15.7393 32.0637 13.3957 13.3125 13.3125C11.5441 13.2885 9.81035 13.8042 8.34251 14.7908C7.1377 15.6051 6.15146 16.7031 5.47053 17.988C4.78961 19.273 4.43487 20.7056 4.43751 22.1598V101.508C4.43751 106.872 8.25376 110.918 13.3125 110.918C33.0233 110.918 52.7952 112.76 64.6377 123.953C64.7997 124.107 65.0034 124.21 65.2233 124.249C65.4433 124.288 65.6699 124.262 65.8749 124.173C66.08 124.084 66.2545 123.937 66.3767 123.75C66.499 123.563 66.5636 123.345 66.5625 123.121V29.6259C66.563 28.9951 66.4281 28.3715 66.1668 27.7974C65.9056 27.2232 65.5241 26.7118 65.0482 26.2978C62.3355 23.9787 59.3223 22.0364 56.09 20.5235ZM133.658 14.7825C132.189 13.7983 130.455 13.2855 128.688 13.3125C109.936 13.3957 95.9305 15.7282 85.91 20.5235C82.6779 22.0337 79.6639 23.9722 76.949 26.2867C76.4742 26.7015 76.0937 27.213 75.8329 27.7871C75.5722 28.3611 75.4374 28.9843 75.4375 29.6148V123.116C75.4374 123.33 75.5006 123.54 75.6194 123.719C75.7381 123.898 75.907 124.038 76.1049 124.121C76.3027 124.204 76.5208 124.227 76.7316 124.187C76.9425 124.147 77.1368 124.045 77.2902 123.895C84.4096 116.823 96.9039 110.91 128.699 110.913C131.052 110.913 133.31 109.978 134.974 108.313C136.639 106.649 137.574 104.391 137.574 102.038V22.1626C137.577 20.7055 137.221 19.27 136.538 17.9829C135.855 16.6958 134.866 15.5966 133.658 14.7825Z"
          fill="#278ACD"
          fill-opacity="0.8"
        />
      </svg>
    ),
  },
  {
    title: "Design",
    desc: "We offer range of design options and allow you with personal modification to suit your preference. The designs will reflect the ambitions and confidence of your business.",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="89"
        height="89"
        viewBox="0 0 89 89"
        fill="none"
      >
        <g clip-path="url(#clip0_2252_685)">
          <path
            d="M88.0261 0.667469C88.4827 1.05719 88.8009 1.58416 88.9333 2.16967C89.0656 2.75517 89.005 3.36777 88.7604 3.91597C80.2498 22.9953 62.3775 49.3616 49.2945 63.101C45.6274 66.9445 41.1048 69.8681 36.0946 71.6338C35.9945 72.8965 35.7609 74.6265 35.2046 76.4621C34.0866 80.1278 31.4944 84.689 25.7039 86.1408C20.0959 87.4762 14.2842 87.7254 8.58251 86.8751C7.5223 86.7076 6.477 86.4565 5.45639 86.1241C4.51216 85.8368 3.63209 85.3703 2.86426 84.7502C2.35791 84.3196 1.96775 83.7688 1.72951 83.1482C1.43425 82.3519 1.44216 81.4749 1.75176 80.684C2.2802 79.3212 3.50951 78.5703 4.31608 78.1698C6.5077 77.074 7.79264 75.65 9.13876 73.5751C9.6672 72.7742 10.1623 71.9231 10.7352 70.9497L11.386 69.8483C12.2259 68.4298 13.1994 66.8445 14.4231 65.1313C17.3601 61.0206 21.1037 59.986 24.1353 60.1473C24.8361 60.1862 25.4869 60.2863 26.071 60.4143C26.4159 59.4575 26.8609 58.3005 27.3949 57.0323C28.8467 53.5891 31.055 49.1391 33.9976 45.5235C46.1016 30.6716 68.3738 11.0026 84.7109 0.444969C85.2138 0.120339 85.8081 -0.0333527 86.4054 0.00673303C87.0027 0.0468188 87.5711 0.278543 88.0261 0.667469Z"
            fill="#278ACD"
          />
        </g>
        <defs>
          <clipPath id="clip0_2252_685">
            <rect width="89" height="89" fill="white" />
          </clipPath>
        </defs>
      </svg>
    ),
  },
  {
    title: "Develop",
    desc: "We focus on developing projects that are scalable, efficient and reliable. We ensure that project we build will result in success of your company.",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="126" height="126" viewBox="0 0 126 126" fill="none">
  <path d="M36.75 42L15.75 63L36.75 84M89.25 42L110.25 63L89.25 84M73.5 21L52.5 105" stroke="#278ACD" stroke-width="10" stroke-linecap="round" stroke-linejoin="round"/>
</svg>
    ),
  },
  {
    title: "Customer Service",
    desc: "Our values integrity and service are focused on providing the remarkable support for our valued clients. In Syvar Tech, we build relation, trust and confident bond with customers.",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="137"
        height="144"
        viewBox="0 0 137 144"
        fill="none"
      >
        <path
          d="M106.86 88.56C108.858 83.46 109.943 78 109.943 72C109.943 67.68 109.315 63.54 108.23 59.7C104.52 60.6 100.638 61.08 96.5853 61.08C88.2852 61.0893 80.1047 59.0011 72.7332 54.9913C65.3618 50.9815 59.0155 45.1677 54.2295 38.04C49.1097 51.061 39.4513 61.5348 27.2291 67.32C27.0007 68.82 27.0007 70.44 27.0007 72C27.0007 77.7282 28.0742 83.4004 30.1597 88.6926C32.2453 93.9848 35.3021 98.7935 39.1557 102.844C46.9384 111.024 57.4939 115.62 68.5003 115.62C74.4941 115.62 80.2595 114.24 85.4541 111.78C88.7078 118.32 90.192 121.56 90.0778 121.56C80.7162 124.86 73.4666 126.48 68.5003 126.48C54.6862 126.48 41.4999 120.78 31.7957 110.52C25.8933 104.335 21.5057 96.738 19.0091 88.38H11.417V61.08H17.6391C19.5242 51.4351 23.8583 42.5064 30.1814 35.2415C36.5045 27.9766 44.5807 22.6464 53.5532 19.8165C62.5257 16.9866 72.0597 16.7626 81.1435 19.1682C90.2273 21.5738 98.5222 26.5193 105.148 33.48C112.342 41.0115 117.248 50.6166 119.247 61.08H125.584V88.38H125.241L104.919 108L74.6653 104.4V94.38H102.237L106.86 88.56ZM52.9166 70.62C54.6291 70.62 56.2845 71.34 57.4832 72.66C58.688 73.9366 59.3639 75.6619 59.3639 77.46C59.3639 79.2581 58.688 80.9834 57.4832 82.26C56.2845 83.52 54.6291 84.24 52.9166 84.24C49.3203 84.24 46.4091 81.24 46.4091 77.46C46.4091 73.68 49.3203 70.62 52.9166 70.62ZM84.027 70.62C87.6232 70.62 90.4774 73.68 90.4774 77.46C90.4774 81.24 87.6232 84.24 84.027 84.24C80.4307 84.24 77.5195 81.24 77.5195 77.46C77.5195 75.6459 78.2051 73.9061 79.4255 72.6234C80.6459 71.3406 82.3011 70.62 84.027 70.62Z"
          fill="#278ACD"
        />
      </svg>
    ),
  },
];