import { useTranslation } from "next-i18next";
import Image from "next/image"


export default function PassportPDI() {
    const { t } = useTranslation('common');

  return (
    <div className="w-full h-full bg-bgr flex flex-col ">
        <div className="max-w-6xl h-auto grid md:grid-cols-2 place-items-center m-auto p-8 py-20" >
            <div className="w-full h-full ">
                <h1 className="text-bgf font-semibold text-5xl mb-10 ">{t("passport_tittle")}</h1>
                <h1 className="text-bgf font-base text-lg text-justify mb-10">{t("passport_info")}</h1>
                <h1 className="text-bgf font-medium text-xl text-center w-full mb-14 ">	&quot; {t("passport_logo")}&quot;</h1>
                
            </div>

            <div className="w-full grid place-items-center">
                <svg className="w-2/4 " viewBox="0 0 257 255" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M257 152.385V241.615C257 245.24 255.668 248.377 253.004 251.026C250.34 253.675 247.186 255 243.541 255H104.459C100.861 255 97.718 253.675 95.0308 251.026C92.3436 248.377 91 245.24 91 241.615V152.385C91 148.806 92.3436 145.681 95.0308 143.008C97.718 140.336 100.861 139 104.459 139H243.541C247.186 139 250.34 140.336 253.004 143.008C255.668 145.681 257 148.806 257 152.385ZM163.555 217.913C163.555 214.893 163.356 212.104 162.959 209.548C162.562 206.992 161.884 204.517 160.926 202.124C159.968 199.73 158.566 197.848 156.72 196.477C154.874 195.106 152.642 194.421 150.025 194.421C146.333 197.953 142.01 199.719 137.057 199.719C131.916 199.719 127.57 197.953 124.018 194.421C121.401 194.421 119.157 195.106 117.288 196.477C115.419 197.848 114.017 199.73 113.082 202.124C112.147 204.517 111.481 206.992 111.084 209.548C110.687 212.104 110.488 214.893 110.488 217.913C110.488 220.888 111.353 223.432 113.082 225.547C114.811 227.661 116.891 228.719 119.321 228.719H154.792C157.222 228.719 159.29 227.661 160.996 225.547C162.702 223.432 163.555 220.888 163.555 217.913ZM152.97 181.315C152.97 176.9 151.416 173.124 148.308 169.987C145.2 166.85 141.45 165.281 137.057 165.281C132.664 165.281 128.901 166.85 125.77 169.987C122.639 173.124 121.073 176.9 121.073 181.315C121.073 185.637 122.639 189.343 125.77 192.434C128.901 195.524 132.664 197.07 137.057 197.07C141.45 197.07 145.2 195.524 148.308 192.434C151.416 189.343 152.97 185.637 152.97 181.315ZM238.003 220.841V215.543C238.003 214.8 237.734 214.172 237.196 213.661C236.659 213.15 236.04 212.894 235.339 212.894H176.734C176.033 212.894 175.414 213.15 174.876 213.661C174.339 214.172 174.07 214.8 174.07 215.543V220.841C174.07 221.585 174.339 222.212 174.876 222.724C175.414 223.235 176.033 223.49 176.734 223.49H235.339C236.04 223.49 236.659 223.235 237.196 222.724C237.734 222.212 238.003 221.585 238.003 220.841ZM206.177 199.719V194.421C206.177 193.677 205.908 193.05 205.37 192.538C204.833 192.027 204.214 191.772 203.513 191.772H176.734C176.033 191.772 175.414 192.027 174.876 192.538C174.339 193.05 174.07 193.677 174.07 194.421V199.719C174.07 200.509 174.339 201.159 174.876 201.671C175.414 202.182 176.033 202.438 176.734 202.438H203.513C204.214 202.438 204.833 202.182 205.37 201.671C205.908 201.159 206.177 200.509 206.177 199.719ZM238.003 199.719V194.421C238.003 193.677 237.734 193.05 237.196 192.538C236.659 192.027 236.04 191.772 235.339 191.772H219.285C218.538 191.772 217.919 192.016 217.428 192.504C216.937 192.992 216.692 193.631 216.692 194.421V199.719C216.692 200.509 216.937 201.159 217.428 201.671C217.919 202.182 218.538 202.438 219.285 202.438H235.339C236.04 202.438 236.659 202.182 237.196 201.671C237.734 201.159 238.003 200.509 238.003 199.719ZM238.003 178.596V173.298C238.003 172.554 237.734 171.927 237.196 171.416C236.659 170.905 236.04 170.649 235.339 170.649H176.734C176.033 170.649 175.414 170.905 174.876 171.416C174.339 171.927 174.07 172.554 174.07 173.298V178.596C174.07 179.34 174.339 179.979 174.876 180.513C175.414 181.048 176.033 181.315 176.734 181.315H235.339C236.04 181.315 236.659 181.048 237.196 180.513C237.734 179.979 238.003 179.34 238.003 178.596Z" fill="#203D46"/>
                    <rect x="107.514" y="158.478" width="58.6649" height="76.6119" fill="#203D46"/>
                    <path fillRule="evenodd" clipRule="evenodd" d="M131.412 179.683L153.575 201.757V217.235C153.575 218.699 152.991 220.103 151.952 221.138C150.913 222.173 149.503 222.754 148.034 222.754H114.791C113.321 222.754 111.912 222.173 110.873 221.138C109.834 220.103 109.25 218.699 109.25 217.235V201.757L131.412 179.683ZM149.881 176.765V189.642L142.493 182.284V176.765C142.493 176.277 142.688 175.81 143.034 175.465C143.381 175.12 143.85 174.926 144.34 174.926H148.034C148.524 174.926 148.994 175.12 149.34 175.465C149.686 175.81 149.881 176.277 149.881 176.765Z" fill="white"/>
                    <path fillRule="evenodd" clipRule="evenodd" d="M128.801 173.086C129.493 172.396 130.433 172.009 131.412 172.009C132.392 172.009 133.331 172.396 134.024 173.086L158.576 197.537C158.923 197.883 159.117 198.351 159.117 198.84C159.117 199.328 158.923 199.797 158.576 200.142C158.229 200.488 157.759 200.682 157.268 200.682C156.778 200.682 156.307 200.488 155.961 200.142L131.412 175.687L106.864 200.142C106.517 200.488 106.047 200.682 105.556 200.682C105.066 200.682 104.595 200.488 104.249 200.142C103.902 199.797 103.707 199.328 103.707 198.84C103.707 198.351 103.902 197.883 104.249 197.537L128.801 173.086Z" fill="white"/>
                    <g clipPath="url(#clip0_509_6)">
                    <path d="M75.6938 144.32C73.7529 144.32 72.459 146.08 72.459 149.014C72.459 151.36 73.7529 153.707 76.3407 153.707C78.2816 153.707 79.5755 151.947 79.5755 149.014C79.5755 146.667 78.2816 144.32 75.6938 144.32Z" fill="#203D46"/>
                    <path d="M23.9384 144.32C23.9384 144.907 23.2915 146.08 23.2915 146.667L22.6445 149.6H25.8793L25.2324 146.667C24.5854 146.08 24.5854 145.494 23.9384 144.32Z" fill="#203D46"/>
                    <path d="M11.6455 144.32H10.3516V148.427H11.6455C13.5863 148.427 14.2333 147.84 14.2333 146.08C14.2333 144.32 13.5863 144.32 11.6455 144.32Z" fill="#203D46"/>
                    <path d="M61.4599 144.32H60.166V148.427H61.4599C63.4008 148.427 64.0478 147.84 64.0478 146.08C64.0478 144.32 62.7538 144.32 61.4599 144.32Z" fill="#203D46"/>
                    <path d="M89.9267 144.32H88.6328V147.84H89.9267C91.8676 147.84 92.5145 147.254 92.5145 146.08C92.5145 144.907 91.2206 144.32 89.9267 144.32Z" fill="#203D46"/>
                    <path d="M186.971 42.8264L92.5158 0.586353C91.9765 0.278802 91.371 0.079103 90.7398 0.000584401C90.1086 -0.0779342 89.4662 -0.0334665 88.8554 0.13102C88.2446 0.295506 87.6796 0.576227 87.198 0.95445C86.7164 1.33267 86.3292 1.7997 86.0624 2.32435L86.0544 2.34635V2.93302L84.1135 5.86635L73.1152 26.3997H112.709C118.354 26.3997 122.931 30.5504 122.931 35.669V35.7937V35.7864V170.72C123.578 170.133 124.225 169.546 124.225 168.96L188.92 48.693C189.239 48.1992 189.443 47.6512 189.519 47.0831C189.595 46.5149 189.542 45.9387 189.362 45.39C189.182 44.8414 188.88 44.3321 188.475 43.8936C188.069 43.4551 187.568 43.0969 187.004 42.841L186.98 42.8337L186.971 42.8264Z" fill="#203D46"/>
                    <path d="M74.4005 107.36C70.0559 106.01 65.523 105.223 60.9358 105.021L60.8145 105.014V122.027C64.1228 120.677 67.0563 118.673 69.4001 116.162C71.7439 113.651 73.4386 110.696 74.3601 107.514L74.4005 107.36Z" fill="#203D46"/>
                    <path d="M76.3425 70.9867C71.6043 72.5579 66.5965 73.3549 61.5515 73.3407L60.7832 73.3334H60.8236V82.72H78.2915C78.2357 78.6402 77.5525 74.5874 76.2616 70.6787L76.3506 70.9867H76.3425Z" fill="#203D46"/>
                    <path d="M60.8145 52.2129V68.0529L61.421 68.0602C66.1033 68.0602 70.5673 67.1949 74.6189 65.6329L74.4005 65.7062C73.5586 62.6326 71.8905 59.7958 69.5453 57.449C67.2 55.1022 64.2505 53.3184 60.96 52.2569L60.8145 52.2129Z" fill="#203D46"/>
                    <path d="M82.8097 103.84C85.1549 105.006 86.9663 106.839 87.961 109.054L87.9853 109.12C93.1754 103.744 96.3446 97.0095 97.0346 89.8918L97.0427 89.7598H84.7505C85.0761 94.6192 84.3875 99.4906 82.7207 104.118L82.8097 103.847V103.84Z" fill="#203D46"/>
                    <path d="M31.7012 113.813C33.7391 115.456 36.0843 116.834 38.6479 117.861L38.8177 117.92C37.0305 115.72 35.502 113.204 34.3699 110.513L34.289 110.293C33.0854 111.204 32.1933 112.407 31.7173 113.762L31.7012 113.813Z" fill="#203D46"/>
                    <path d="M83.4573 58.0798C81.0312 56.3565 78.2897 54.6185 75.4431 53.0125L75.0469 52.7998C77.3517 55.3298 79.3087 58.2338 80.7724 61.3725L80.8695 61.5998C82.1634 61.5998 83.4573 59.8398 83.4573 58.0798Z" fill="#203D46"/>
                    <path d="M76.3409 117.92C78.8398 116.842 80.9748 115.463 82.8105 113.813C82.7033 113.091 82.4169 112.4 81.9728 111.793C81.5288 111.186 80.9387 110.678 80.2469 110.308L80.2227 110.293C79.5595 113.219 78.2009 115.786 76.3086 117.956L76.3409 117.92Z" fill="#203D46"/>
                    <path d="M85.3979 83.3072H97.6901C96.8414 76.0601 93.9107 69.1417 89.1907 63.2432L89.2796 63.3605C88.0499 65.6352 86.0296 67.4801 83.5298 68.6112L83.457 68.6405C84.104 73.3338 84.751 78.0272 85.3979 83.3072Z" fill="#203D46"/>
                    <path d="M78.2823 89.7598H60.8145V98.5598C66.2469 98.6843 71.6082 99.7108 76.6325 101.588L76.3414 101.493C77.5823 97.692 78.2355 93.7531 78.2823 89.7891V89.7598Z" fill="#203D46"/>
                    <path d="M38.1696 54.5601C35.7902 55.3816 33.5912 56.581 31.6758 58.1021L31.7 58.0801C31.7479 58.7528 31.9436 59.4101 32.2755 60.0133C32.6074 60.6165 33.0689 61.1535 33.6328 61.5928L33.6409 61.6001C34.676 58.8794 36.2207 56.5328 38.1858 54.5381L38.1696 54.5601Z" fill="#203D46"/>
                    <path d="M31.6998 68.0537C29.6899 66.8066 27.9494 65.2357 26.5646 63.419L26.5242 63.3604C21.303 69.175 18.1479 76.2881 17.4749 83.7617L17.4668 83.8937H29.112C29.2414 78.3793 30.1519 72.9029 31.8211 67.599L31.6998 68.0537Z" fill="#203D46"/>
                    <path d="M53.6958 120.854V105.014C49.1292 105.467 44.6171 106.294 40.2148 107.485L40.7567 107.36C41.5551 110.364 43.1324 113.151 45.3576 115.49C47.5827 117.829 50.3914 119.653 53.5502 120.81L53.6958 120.854Z" fill="#203D46"/>
                    <path d="M115.158 37.5464V37.3704C115.158 36.2447 114.696 35.1593 113.861 34.3257C113.027 33.492 111.881 32.9697 110.645 32.8604H5.16713C5.03774 32.8457 4.88409 32.8457 4.73044 32.8457C4.06734 32.8472 3.41185 32.9739 2.8058 33.218C2.19975 33.462 1.65644 33.8179 1.21054 34.2629C0.764637 34.708 0.425934 35.2324 0.216039 35.8028C0.00614373 36.3732 -0.0703353 36.977 -0.00851849 37.5757V37.561V171.387C-0.00851849 173.946 2.28009 176.014 5.09435 176.014H109.974C111.313 175.929 112.573 175.41 113.524 174.55C114.475 173.691 115.052 172.55 115.15 171.336V171.321L115.158 37.5464ZM10.9978 82.133C11.9738 72.1914 16.7618 62.8746 24.5292 55.8029C32.2965 48.7313 42.5517 44.3523 53.511 43.4277L53.697 43.413V42.8264H60.8135V43.413C66.8876 43.8464 72.808 45.3604 78.2369 47.8686C83.6657 50.3768 88.4966 53.8301 92.4537 58.0313C96.4108 62.2325 99.4166 67.0993 101.3 72.3539C103.182 77.6085 103.906 83.148 103.428 88.656C102.95 94.1641 101.28 99.5328 98.5143 104.456C95.7483 109.379 91.9401 113.759 87.3072 117.348C82.6742 120.936 77.3072 123.662 71.5126 125.369C65.718 127.077 59.6093 127.732 53.5352 127.299L53.697 127.306C29.6221 125.378 10.8927 107.184 10.8927 85.015C10.8927 84.003 10.9331 82.991 11.0059 82.001L10.9978 82.133ZM11.6448 150.773H10.3509V155.466H7.11609V141.973H11.6448C13.272 141.81 14.9048 142.234 16.1897 143.154L16.1735 143.146C17.4674 143.733 17.4674 144.906 17.4674 146.08C17.4484 147.168 16.9877 148.213 16.1735 149.013C15.623 149.568 14.9495 150.012 14.197 150.315C13.4445 150.619 12.63 150.775 11.8065 150.773H11.6367H11.6448ZM27.1717 155.466L25.8778 151.946H21.9961L20.7022 155.466H17.4674L21.9961 141.973H26.5248L31.0535 155.466H27.1717ZM36.2291 155.466C34.8837 155.561 33.5334 155.352 32.2989 154.858L32.3474 154.88L32.9944 152.533C34.2257 153.018 35.5704 153.22 36.9084 153.12H36.8761C38.17 153.12 38.817 152.533 38.817 151.946C38.817 151.36 38.17 150.773 36.2291 150.186C34.2883 149.013 32.3474 147.84 32.3474 146.08C32.3474 143.733 34.2883 141.973 38.17 141.973C39.5154 141.878 40.8657 142.088 42.1003 142.582L42.0517 142.56L41.4048 144.906C40.4295 144.367 39.2744 144.159 38.1457 144.32H38.17C36.8761 144.32 36.2291 144.906 36.2291 145.493C36.2291 146.08 36.8761 146.666 38.817 147.253C41.0004 147.62 42.6421 149.306 42.6987 151.352V151.36C42.6987 153.706 40.7578 155.466 36.2291 155.466ZM48.5213 155.466C47.1759 155.561 45.8256 155.352 44.591 154.858L44.6396 154.88V152.533C45.8709 153.018 47.2156 153.22 48.5537 153.12H48.5213C49.8152 153.12 51.1091 152.533 51.1091 151.946C51.1091 151.36 50.4622 150.773 48.5213 150.186C47.4581 150.099 46.4695 149.653 45.7497 148.938C45.03 148.223 44.6311 147.29 44.6315 146.322L44.6396 146.065V146.08C44.6396 143.733 46.5804 141.973 50.4622 141.973C51.8076 141.878 53.1579 142.088 54.3924 142.582L54.3439 142.56L53.697 144.906C52.7216 144.367 51.5666 144.159 50.4379 144.32H50.4622C49.1683 144.32 48.5213 144.906 48.5213 145.493C48.5213 146.08 49.1683 146.666 51.1091 147.253C53.2926 147.62 54.9343 149.306 54.9909 151.352V151.36C54.719 152.681 53.8847 153.853 52.6681 154.621C51.4515 155.39 49.9503 155.693 48.489 155.466L48.5213 155.474V155.466ZM65.9891 149.6C65.4395 150.179 64.7137 150.599 63.9025 150.806C63.0912 151.014 62.2305 151 61.4281 150.766L61.4604 150.773H60.1665V155.466H56.9317V141.973H61.4604C63.0877 141.81 64.7204 142.234 66.0053 143.154L65.9891 143.146C67.2831 143.733 67.2831 144.906 67.2831 146.08C67.1375 147.4 66.6765 148.595 65.9649 149.636L65.9891 149.6ZM82.81 148.426C82.9416 149.28 82.8752 150.149 82.615 150.978C82.3548 151.807 81.9066 152.577 81.2991 153.24C80.6916 153.902 79.9382 154.443 79.0871 154.826C78.236 155.21 77.306 155.428 76.3566 155.466H75.0465C73.1643 155.451 71.364 154.766 70.0331 153.559C68.7021 152.352 67.9469 150.72 67.93 149.013V148.426C67.7865 146.725 68.3777 145.04 69.5788 143.726C70.7799 142.412 72.4968 141.574 74.3672 141.386H75.0789C76.85 141.387 78.5574 141.986 79.8674 143.066C81.1775 144.147 81.996 145.632 82.1631 147.231V147.26L82.81 148.426ZM92.5144 155.466C91.8674 154.293 91.8674 153.706 91.2204 152.533C90.5735 150.773 89.9265 150.186 88.6326 150.186H87.3387V155.466H84.1039V141.973H88.6326C89.4381 141.847 90.2644 141.888 91.05 142.093C91.8356 142.297 92.5601 142.66 93.1694 143.154L93.1613 143.146C93.9737 143.945 94.4342 144.986 94.4552 146.072V146.08C94.4337 146.824 94.182 147.548 93.7288 148.169C93.2755 148.79 92.639 149.283 91.8917 149.592L91.8674 149.6C93.1613 150.186 93.1613 150.773 93.8083 151.946C93.9538 153.266 94.4148 154.462 95.1264 155.503L95.1022 155.466H92.5144ZM108.688 144.906H104.807V155.466H101.572V144.906H97.0431V142.56H108.041V144.906H108.688Z" fill="#203D46"/>
                    <path d="M31.7013 103.84C30.4838 99.1551 29.6325 94.3986 29.1539 89.6055L29.1135 89.1729H18.1152C18.9715 96.2331 21.9042 102.955 26.6065 108.636L26.5257 108.533C27.9328 106.678 29.6553 105.116 31.6366 103.876L31.7013 103.84Z" fill="#203D46"/>
                    <path d="M53.6963 89.7598H36.2285C36.2366 93.9471 36.9483 97.9878 38.2583 101.779L38.1694 101.493C43.1117 99.9607 48.2416 98.9806 53.4456 98.5744L53.6963 98.5598V89.7598Z" fill="#203D46"/>
                    <path d="M53.6974 51.04C46.5809 52.2134 42.0522 59.2534 40.1113 64.5334C44.082 65.9707 48.6835 67.0047 53.4791 67.452L53.6974 67.4667V51.04Z" fill="#203D46"/>
                    <path d="M53.6964 83.3069V73.9203C48.2639 73.7958 42.9026 72.7692 37.8783 70.8916L38.1694 70.9869C36.877 74.986 36.2234 79.1324 36.2285 83.2996V83.3069H53.6964Z" fill="#203D46"/>
                    </g>
                    <defs>
                    <clipPath id="clip0_509_6">
                    <rect width="186" height="176" fill="white"/>
                    </clipPath>
                    </defs>
                </svg>
                
                <button className="bg-sl text-bgr w-48 py-2 flex items-center justify-center mt-10 hover:bg-bgf transition-all duration-150 relative z-10 ">
                    Tarifas y servicios
                    <svg className="pl-2 hover:ml-2 transition-all duration-150 " width="19" height="19" viewBox="0 0 19 19" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path  d="M2.05762 9.65033C2.05762 9.50313 2.11609 9.36195 2.22018 9.25786C2.32427 9.15377 2.46545 9.0953 2.61265 9.0953H15.7038L12.2104 5.603C12.1061 5.49878 12.0476 5.35743 12.0476 5.21004C12.0476 5.06264 12.1061 4.92129 12.2104 4.81707C12.3146 4.71285 12.4559 4.6543 12.6033 4.6543C12.7507 4.6543 12.8921 4.71285 12.9963 4.81707L17.4366 9.25737C17.4883 9.30893 17.5293 9.37018 17.5573 9.43761C17.5853 9.50504 17.5997 9.57733 17.5997 9.65033C17.5997 9.72334 17.5853 9.79563 17.5573 9.86306C17.5293 9.93049 17.4883 9.99174 17.4366 10.0433L12.9963 14.4836C12.8921 14.5878 12.7507 14.6464 12.6033 14.6464C12.4559 14.6464 12.3146 14.5878 12.2104 14.4836C12.1061 14.3794 12.0476 14.238 12.0476 14.0906C12.0476 13.9432 12.1061 13.8019 12.2104 13.6977L15.7038 10.2054H2.61265C2.46545 10.2054 2.32427 10.1469 2.22018 10.0428C2.11609 9.93872 2.05762 9.79754 2.05762 9.65033Z" fill="white"/>
                    </svg>
                </button>
            </div>

            
        </div>
        
        

    </div>
  )
}
